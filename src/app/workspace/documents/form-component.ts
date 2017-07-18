import {Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Location} from '@angular/common';
import {CommonComponent} from './common-component';
import {ServiceProvider} from './service-provider';
import {ActivatedRoute, Params} from '@angular/router';
import {Factory} from './factory';
import {NgForm} from '@angular/forms';
import {IEntity} from './i-entity';
import {Observable} from 'rxjs/Observable';
import {Entity} from './entity';
import {ActionFactory} from './action-factory';
import * as managerSweetAlert from '../../../init/sweetalert2';
/**Компонент - форма*/
export class FormComponent
  extends CommonComponent implements OnInit {

  /**Форма, переопределить в наследнике с декоратором*/
  @ViewChild('formComponent')
  form: NgForm;

  /**Ключ компонента*/
  @Input()
  id: number = 0;

  /**Событие сохранения документа*/
  @Output()
  onDataChanged = new EventEmitter<IEntity>();

  /**Сущность*/
  public entity: IEntity;

  /**Изменения данных в компоненте*/
  changed: boolean = false;
  /**Конструктор*/
  constructor(public service: ServiceProvider,
              public route: ActivatedRoute,
              public location: Location,
              public factory: Factory
  ) {
    super();
    this.entity = this.factory.createEmpty();
  }

  /**Сгенерировать событие изменения документа*/
  private genDataChanged(): void {
    // Генерим событие
    this.onDataChanged.emit(this.entity);
  }

  /**Статус изменения данных*/
  getChanged(): boolean {
    if (this.form == null) {
      return false;
    }
    return this.form.dirty || this.changed;
  }

  /**Сбросить модификацию данных и данные формы*/
  resetForm(entity: IEntity): void {
    this.changed = false;
    // Если так - то ацкая проблема с датами в контролах
    // this.form.reset(entity);
    // this.form.reset();
  }

  /**Загрузить данные*/
  loadData(): void {
    // Сбрасываем флаги для перерисовки грида
    this.loadComplete = false;
    this.firstViewChecked = true;

    if (this.debug) {
      console.log('loadData -> this.id = ' + this.id);
    }

    if (this.id === 0) {
      // Пустой, грузить не нужно
      let entity = this.factory.createEmpty();
      this.resetForm(entity);
      this.entity = entity;

      // Отмечаем что данные получены.
      this.loadComplete = true;
      // Генерим событие о загрузке данных
      this.genAfterLoadData();
    } else {
      let res: Observable<Entity> = this.service.getEntity(this.id, this.factory);
      res.subscribe(entity => {
          if (entity != null) {
            this.resetForm(entity);
            this.entity = entity;

            if (this.debug) {
              console.log('loadData -> entity = ');
              console.log(entity);
            }

            // Отмечаем что данные получены.
            this.loadComplete = true;
            // Генерим событие о загрузке данных
            this.genAfterLoadData();
          } else {
            throw Error('Ошибка получения #' + this.id + ';' + this.entity.entityName);
          }
        }
      );
    }
  }

  /**Submit*/
  onSubmit(): void {
    if (this.childMode === 2) {
      // Просто сгенерить событие
      this.genDataChanged();
      // Убрать модификацию
      this.resetForm(this.entity);
    } else {
      this.service.postEntity(this.entity).subscribe(
        (isOk: any) => {
          if (isOk) {

            if (this.debug) {
              console.log('onSubmit post data -> entity = ' + this.entity);
            }

            this.resetForm(this.entity);

            managerSweetAlert.swal(
              {
                title: 'Сохранение успешно выполнено!',
                text: '',
                type: 'info',
                confirmButtonClass: 'btn btn-info btn-fill',
                confirmButtonText: 'Ок',
                closeOnConfirm: true
              },
              () => {
                this.genDataChanged();
                if (this.childMode === 0) {
                  this.location.back();
                }
              }
            );
          } else {
            managerSweetAlert.swal(
              {
                title: 'Ошибка сохранения!',
                text: '',
                type: 'error',
                confirmButtonClass: 'btn btn-info btn-fill',
                confirmButtonText: 'Ок',
                closeOnConfirm: true
              },
              () => {
              }
            );
          }
        },
        (error: any) => {
          managerSweetAlert.swal(
            {
              title: 'Ошибка сохранения!',
              text: '',
              type: 'error',
              confirmButtonClass: 'btn btn-info btn-fill',
              confirmButtonText: 'Ок',
              closeOnConfirm: true
            },
            () => {
            }
          );
        }
      );
    }
  }

  /**После инициализации компонента - инитим всякие контролы*/
  ngOnInit(): void {

    if (this.debug) {
      console.log('ngOnInit -> start');
    }

    this.route.params.map((params: Params) => {
      return params;
    }).subscribe((params: Params) => {

      if (this.debug) {
        console.log('ngOnInit -> params = ' + this.entity);
      }

      if (params[this.entity.keyName] == null) {
      } else {
        let id: number = +params[this.entity.keyName];
        this.id = id;
      }
      // Загрузить
      this.loadData();
    });
  }

  /**Отменить сохранение*/
  cancelChange(): void {
    if (this.getChanged()) {
      managerSweetAlert.swal(
        {
          title: 'Вы уверены?',
          text: 'Есть не сохраненные данные.',
          type: 'warning',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-info btn-fill',
          confirmButtonText: 'Да, закрыть!',
          cancelButtonText: 'Отменить',
          cancelButtonClass: 'btn btn-danger btn-fill',
          closeOnConfirm: true,
        },
        () => {
          this.genCancel();
          if (this.childMode === 0) {
            this.location.back();
          }
        });
    } else {
      this.genCancel();
      if (this.childMode === 0) {
        this.location.back();
      }
    }
  }

  /**Выполнить действие*/
  performAction(actionName: string) {
    ActionFactory.perform(actionName, this);
  }

}

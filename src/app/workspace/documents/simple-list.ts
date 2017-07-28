import {ListComponent} from './list';
import {OnInit} from '@angular/core';
import {ServiceProviderList} from './service-provider-list';
import {Router} from '@angular/router';
import {Factory} from './factory';
import {IEntity} from './i-entity';
export class SimpleListComponent extends ListComponent implements OnInit {

  /**Имя таблицы в DOM*/
  tableName: string = 'position_table';

  /**Конструктор*/
  constructor(public service: ServiceProviderList,
              public router: Router,
              public factory: Factory) {
    super(service, router, factory);
  }

  /**Событие отрисовки вьюхи (dom дерево построено)*/
  ngAfterViewChecked(): void {
    // Данные загружены
    if (this.loadComplete) {
      // Выполняем инициализацию грида только один раз
      if (this.firstViewChecked) {
        this.firstViewChecked = false;
        this.loadGrid();
      }
    }
  }

  /**Инициализация грида*/
  loadGrid(): void {
    if (this.debug) {
      console.log('SimpleListComponent -> loadGrid -> this.tableName = ' + this.tableName);
    }
  }

  /**Загрузить данные*/
  loadData(): void {
    // Сбрасываем флаги для перерисовки грида
    this.loadComplete = false;
    this.firstViewChecked = true;

    this.service.getEntityList(this.factory).subscribe(
      positions => {
        this.positions = positions;
        // Отмечаем что данные получены.
        this.loadComplete = true;
        this.genAfterLoadData();
      },
      error => {
        this.positions = [];
        console.log('Ошибка получения списка');
        console.log(error);
      }
    );
  }

  /**Удалить запись*/
  delete(entity: IEntity) {
    super.delete(entity, (id: number) => {
      // Колбэк для удаления
    });
  }

}

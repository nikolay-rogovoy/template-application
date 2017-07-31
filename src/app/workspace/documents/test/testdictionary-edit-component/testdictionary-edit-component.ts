import {ActivatedRoute} from '@angular/router';
import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormComponent} from '../../form-component';
import {IEntity} from '../../i-entity';
import {ServiceProvider} from '../../service-provider';

import {Testdictionary, TestdictionaryFactory} from '../entity/testdictionary';
import {Location} from '@angular/common';

// usage:
@Component({
    moduleId: module.id,
    selector: 'testdictionary-edit-component',
    templateUrl: 'testdictionary-edit-component.html'
})

export class TestdictionaryEditComponent extends FormComponent {

  /**Имя таблицы в DOM*/
  tableName: string = 'testdictionaryEditTable';

  /**Форма*/
  @ViewChild('testdictionaryEditForm')
  form: NgForm;

  /**Отмена выбора (для модального режима)*/
  @Output()
  onCancel = new EventEmitter<void>();

  /**После загрузки данных*/
  @Output()
  onAfterLoadData = new EventEmitter<void>();

  /**Компонет вложен в другой компонент*/
  @Input()
  childMode: number = 0;

  /**Ключ компонента*/
  @Input()
  id: number = 0;

  /**Событие сохранения документа*/
  @Output()
  onDataChanged = new EventEmitter<IEntity>();

  /**Проводим до нужного типа*/
  entity: Testdictionary;

  /**Конструктор*/
  constructor(route: ActivatedRoute,
              location: Location,
              service: ServiceProvider) {
    super(service, route, location, new TestdictionaryFactory());
  }

  
}

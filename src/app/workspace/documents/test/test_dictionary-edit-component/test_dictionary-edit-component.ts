import {ActivatedRoute} from '@angular/router';
import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormComponent} from '../../form-component';
import {IEntity} from '../../i-entity';
import {ServiceProvider} from '../../service-provider';

import {TestDictionary, TestDictionaryFactory} from '../entity/test_dictionary';
import {Location} from '@angular/common';

// usage:
@Component({
    moduleId: module.id,
    selector: 'test_dictionary-edit-component',
    templateUrl: 'test_dictionary-edit-component.html'
})

export class TestDictionaryEditComponent extends FormComponent {

  /**Имя таблицы в DOM*/
  tableName: string = 'test_dictionaryEditTable';

  /**Форма*/
  @ViewChild('test_dictionaryEditForm')
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
  entity: TestDictionary;

  /**Конструктор*/
  constructor(route: ActivatedRoute,
              location: Location,
              service: ServiceProvider) {
    super(service, route, location, new TestDictionaryFactory());
  }

  /**Загрузить данные*/
  loadData(): void {
    super.loadData();
  }
}


import {Component, Input, Output,
    EventEmitter, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import {SimpleListComponent} from '../../simple-list';
import {ServiceProviderList} from '../../service-provider-list';
import {IEntity} from '../../i-entity';
import {FormComponent} from '../../form-component';
import {TestDictionary, TestDictionaryFactory} from '../entity/test_dictionary';
import {ColumnInfo} from 'at-grid';

@Component({
    moduleId: module.id,
    selector: 'test_dictionary-list-component',
    templateUrl: 'test_dictionary-list-component.html'
})
export class TestDictionaryListComponent extends SimpleListComponent {

  /**Роут для редактирования позиции*/
  urlEditPosition: string = '/documents/test_dictionary/edit/';

  /**Роут для новой позиции*/
  urlNewPosition: string = '/documents/test_dictionary/new';

  /**Имя таблицы*/
  tableName: string = 'Test_DictionaryList';

  /**Отмена выбора (для модального режима)*/
  @Output()
  onCancel = new EventEmitter<void>();

  /**После загрузки данных*/
  @Output()
  onAfterLoadData = new EventEmitter<void>();

  /**Компонет вложен в другой компонент*/
  @Input()
  childMode: number = 0;

  /**Выделене какой-то позиции*/
  @Output()
  onSelect = new EventEmitter<IEntity>();

  /**Позиции*/
  @Input()
  positions: TestDictionary[];

  /**Форма*/
  @ViewChild('test_dictionary_edit_component')
  formComponent: FormComponent;

  /**Конструктор*/
  constructor(service: ServiceProviderList,
              router: Router) {
    super(service, router, new TestDictionaryFactory());
  }

  /**Заголовки колонок*/
  getGridMetaData(): ColumnInfo[] {
    return [
      // new ColumnInfo('name', 'Наименование'),
      // new ColumnInfo('comment', 'Комментарий'),
      // new ColumnInfo('active', 'Активность')
    ];
  }
}

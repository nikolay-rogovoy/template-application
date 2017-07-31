
import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ColumnInfo} from 'at-grid';

import {SimpleListComponent} from '../../simple-list';
import {ServiceProviderList} from '../../service-provider-list';
import {IEntity} from '../../i-entity';
import {FormComponent} from '../../form-component';
import {Testdictionary, TestdictionaryFactory} from '../entity/testdictionary';

@Component({
    moduleId: module.id,
    selector: 'testdictionary-list-component',
    templateUrl: 'testdictionary-list-component.html'
})
export class TestdictionaryListComponent extends SimpleListComponent {

  /**Роут для редактирования позиции*/
  urlEditPosition: string = '/documents/testdictionary/edit/';

  /**Роут для новой позиции*/
  urlNewPosition: string = '/documents/testdictionary/new';

  /**Имя таблицы*/
  tableName: string = 'TestdictionaryList';

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
  positions: Testdictionary[] = [];

  /**Форма*/
  @ViewChild('testdictionary_edit_component')
  formComponent: FormComponent;

  /**Заголовки колонок*/
  gridMetaData: ColumnInfo[] = [
    new ColumnInfo('active', 'Активность'),
    new ColumnInfo('comment', 'Комментарий'),
    new ColumnInfo('name', 'Наименование'),

  ];

  constructor(service: ServiceProviderList,
              router: Router) {
    super(service, router, new TestdictionaryFactory());
  }
}

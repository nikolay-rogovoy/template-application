
import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ColumnInfo} from 'at-grid';

import {SimpleListComponent} from '../../simple-list';
import {ServiceProviderList} from '../../service-provider-list';
import {IEntity} from '../../i-entity';
import {FormComponent} from '../../form-component';
import {Testdocitem, TestdocitemFactory} from '../entity/testdocitem';

@Component({
    moduleId: module.id,
    selector: 'testdocitem-list-component',
    templateUrl: 'testdocitem-list-component.html'
})
export class TestdocitemListComponent extends SimpleListComponent {

  /**Роут для редактирования позиции*/
  urlEditPosition: string = '/documents/testdocitem/edit/';

  /**Роут для новой позиции*/
  urlNewPosition: string = '/documents/testdocitem/new';

  /**Имя таблицы*/
  tableName: string = 'TestdocitemList';

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
  positions: Testdocitem[] = [];

  /**Форма*/
  @ViewChild('testdocitem_edit_component')
  formComponent: FormComponent;

  /**Заголовки колонок*/
  gridMetaData: ColumnInfo[] = [
    new ColumnInfo('comment', 'comment'),
    new ColumnInfo('name', 'Наименование'),
    new ColumnInfo('testdictionary_name', 'Супер справочник'),

  ];

  constructor(service: ServiceProviderList,
              router: Router) {
    super(service, router, new TestdocitemFactory());
  }
}

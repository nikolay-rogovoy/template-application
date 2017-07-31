
import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ColumnInfo} from 'at-grid';

import {SimpleListComponent} from '../../simple-list';
import {ServiceProviderList} from '../../service-provider-list';
import {IEntity} from '../../i-entity';
import {FormComponent} from '../../form-component';
import {Testdoc, TestdocFactory} from '../entity/testdoc';

@Component({
    moduleId: module.id,
    selector: 'testdoc-list-component',
    templateUrl: 'testdoc-list-component.html'
})
export class TestdocListComponent extends SimpleListComponent {

  /**Роут для редактирования позиции*/
  urlEditPosition: string = '/documents/testdoc/edit/';

  /**Роут для новой позиции*/
  urlNewPosition: string = '/documents/testdoc/new';

  /**Имя таблицы*/
  tableName: string = 'TestdocList';

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
  positions: Testdoc[] = [];

  /**Форма*/
  @ViewChild('testdoc_edit_component')
  formComponent: FormComponent;

  /**Заголовки колонок*/
  gridMetaData: ColumnInfo[] = [
    new ColumnInfo('comment', 'Комментарий'),
    new ColumnInfo('dccre2', 'Дата созд2'),
    new ColumnInfo('dtcre', 'Дата создания'),
    new ColumnInfo('dtdoc', 'Дата документа'),
    new ColumnInfo('dtdoc2', 'Дата2'),
    new ColumnInfo('email', 'email'),
    new ColumnInfo('email2', 'email req'),
    new ColumnInfo('name', 'Наименование'),
    new ColumnInfo('numpos', 'Номер'),
    new ColumnInfo('numpos2', 'нум 2 нот нулл'),
    new ColumnInfo('phone', 'Тел.'),
    new ColumnInfo('phone2', 'Об. тел.'),
    new ColumnInfo('price', 'Цена'),
    new ColumnInfo('price2', 'Цена 2 нот нулл'),
    new ColumnInfo('testdictionary2_name', 'Справочник2'),
    new ColumnInfo('testdictionary_name', 'Справочник'),

  ];

  constructor(service: ServiceProviderList,
              router: Router) {
    super(service, router, new TestdocFactory());
  }
}

import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {ColumnInfo} from '../at-grid/column-info';

@Component({
  moduleId: module.id,
  selector: 'test-component',
  templateUrl: 'test-component.html'
})
export class TestComponent implements  OnInit, AfterViewChecked {

  columns: Array<ColumnInfo> = [];
  data: Array<Object> = [];

  /**Инит компонента*/
  ngOnInit() {
  }

  /**После загрузки вьюхи*/
  ngAfterViewChecked() {
  }


  /**Констуркто*/
  constructor() {
    this.data = [
      {
        name: 'Имя1',
        comment: 'Comm1',
        qu: 1
      },
      {
        name: 'Имя2',
        comment: 'Comm2',
        qu: 2
      }
    ];
    this.columns.push(new ColumnInfo('name', 'Наименование'));
    this.columns.push(new ColumnInfo('comment', 'Комментарий'));
    this.columns.push(new ColumnInfo('qu', 'Кол-во'));
  }

  add() {
    this.data.push(
      {
      name: 'Имя' + this.data.length,
      comment: 'Comm' + this.data.length,
      qu: 2
    });
  }
}

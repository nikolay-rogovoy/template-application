import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonComponent} from '../../common-component';

@Component({
    moduleId: module.id,
    selector: 'setting-component',
    templateUrl: 'setting-component.html'
})

export class SettingComponent extends CommonComponent implements OnInit {

  /**Роутер*/
  router: Router;

  /**Конструктор*/
  constructor(router: Router) {
    super();
    this.router = router;
  }

  /**Инит компонента*/
  ngOnInit() {
  }
}

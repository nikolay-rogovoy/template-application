import {ActivatedRoute} from '@angular/router';
import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormComponent} from '../../form-component';
import {IEntity} from '../../i-entity';
import {ServiceProvider} from '../../service-provider';

import {Testdoc, TestdocFactory} from '../entity/testdoc';
import {Location} from '@angular/common';

// usage:
@Component({
    moduleId: module.id,
    selector: 'testdoc-edit-component',
    templateUrl: 'testdoc-edit-component.html'
})

export class TestdocEditComponent extends FormComponent {

  /**Имя таблицы в DOM*/
  tableName: string = 'testdocEditTable';

  /**Форма*/
  @ViewChild('testdocEditForm')
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
  entity: Testdoc;

  /**Конструктор*/
  constructor(route: ActivatedRoute,
              location: Location,
              service: ServiceProvider) {
    super(service, route, location, new TestdocFactory());
  }

  
    /**Установить значение из справочника*/
    setValueTestdictionary2_Name(entity: IEntity): void{
        this.entity["idtestdictionary2"] = entity["idtestdictionary"];
        this.entity["testdictionary2_name"] = entity["name"];

        this.setActiveMasterView();
    }
    
    /**Очистить значение из справочника*/
    resetValueTestdictionary2_Name(): void{
        this.entity["idtestdictionary2"] = null;
        this.entity["testdictionary2_name"] = null;

        this.setActiveMasterView();
    }


    /**Установить значение из справочника*/
    setValueTestdictionary_Name(entity: IEntity): void{
        this.entity["idtestdictionary"] = entity["idtestdictionary"];
        this.entity["testdictionary_name"] = entity["name"];

        this.setActiveMasterView();
    }
    
    /**Очистить значение из справочника*/
    resetValueTestdictionary_Name(): void{
        this.entity["idtestdictionary"] = null;
        this.entity["testdictionary_name"] = null;

        this.setActiveMasterView();
    }


}

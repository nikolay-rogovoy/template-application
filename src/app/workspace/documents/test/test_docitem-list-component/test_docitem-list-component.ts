
import { Component, OnInit, AfterViewChecked, Input, Output,
    EventEmitter, ViewChild, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SimpleListComponent, ServiceProviderList, iEntity, FormComponent } from "../../CommonLib";
import { Test_Docitem, Test_DocitemFactory } from "../entity/test_docitem";

@Component({
    moduleId: module.id,
    selector: 'test_docitem-list-component',
    templateUrl: 'test_docitem-list-component.html'
})
export class Test_DocitemListComponent extends SimpleListComponent{

    constructor(service: ServiceProviderList,
                router: Router){
        super(service, router, new Test_DocitemFactory());
    }

    /**Роут для редактирования позиции*/
    urlEditPosition: string = "/documents/test_docitem/edit/";

    /**Роут для новой позиции*/
    urlNewPosition: string = "/documents/test_docitem/new";

    /**Имя таблицы*/
    tableName: string = "Test_DocitemList";

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
    onSelect = new EventEmitter<iEntity>();

    /**Позиции*/
    @Input()
    positions: iEntity[];

    @ViewChild("test_docitem_edit_component")
    formComponent: FormComponent;

    /**Позиции*/
    @Input()
    positionsTyped: Test_Docitem[];

    /**Загрузить данные*/
    loadData():void {
        super.loadData()
        this.positionsTyped = this.positions as Test_Docitem[];
    }
}

      
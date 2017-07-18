
import { Component, OnInit, AfterViewChecked, Input, Output,
    EventEmitter, ViewChild, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SimpleListComponent, ServiceProviderList, iEntity, FormComponent } from "../../CommonLib";
import { Test_Doc, Test_DocFactory } from "../entity/test_doc";

@Component({
    moduleId: module.id,
    selector: 'test_doc-list-component',
    templateUrl: 'test_doc-list-component.html'
})
export class Test_DocListComponent extends SimpleListComponent{

    constructor(service: ServiceProviderList,
                router: Router){
        super(service, router, new Test_DocFactory());
    }

    /**Роут для редактирования позиции*/
    urlEditPosition: string = "/documents/test_doc/edit/";

    /**Роут для новой позиции*/
    urlNewPosition: string = "/documents/test_doc/new";

    /**Имя таблицы*/
    tableName: string = "Test_DocList";

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

    @ViewChild("test_doc_edit_component")
    formComponent: FormComponent;

    /**Позиции*/
    @Input()
    positionsTyped: Test_Doc[];

    /**Загрузить данные*/
    loadData():void {
        super.loadData()
        this.positionsTyped = this.positions as Test_Doc[];
    }
}

      
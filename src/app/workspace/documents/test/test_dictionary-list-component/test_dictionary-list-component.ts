
import { Component, OnInit, AfterViewChecked, Input, Output,
    EventEmitter, ViewChild, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SimpleListComponent, ServiceProviderList, iEntity, FormComponent } from "../../CommonLib";
import { Test_Dictionary, Test_DictionaryFactory } from "../entity/test_dictionary";

@Component({
    moduleId: module.id,
    selector: 'test_dictionary-list-component',
    templateUrl: 'test_dictionary-list-component.html'
})
export class Test_DictionaryListComponent extends SimpleListComponent{

    constructor(service: ServiceProviderList,
                router: Router){
        super(service, router, new Test_DictionaryFactory());
    }

    /**Роут для редактирования позиции*/
    urlEditPosition: string = "/documents/test_dictionary/edit/";

    /**Роут для новой позиции*/
    urlNewPosition: string = "/documents/test_dictionary/new";

    /**Имя таблицы*/
    tableName: string = "Test_DictionaryList";

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

    @ViewChild("test_dictionary_edit_component")
    formComponent: FormComponent;

    /**Позиции*/
    @Input()
    positionsTyped: Test_Dictionary[];

    /**Загрузить данные*/
    loadData():void {
        super.loadData()
        this.positionsTyped = this.positions as Test_Dictionary[];
    }
}

      
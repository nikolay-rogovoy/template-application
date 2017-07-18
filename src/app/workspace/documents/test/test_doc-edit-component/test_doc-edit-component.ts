import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewChecked, Input, Output,
    EventEmitter, ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormComponent, iEntity, ServiceProvider } from '../../CommonLib';

import { Test_Doc, Test_DocFactory } from "../entity/test_doc";
import { Location } from '@angular/common';

// usage:
@Component({
    moduleId: module.id,
    selector: 'test_doc-edit-component',
    templateUrl: 'test_doc-edit-component.html'
})

export class Test_DocEditComponent extends FormComponent{

    /**Конструктор*/
    constructor(route: ActivatedRoute,
                location: Location,
                service: ServiceProvider) {
        super(service, route, location, new Test_DocFactory());
    }

    /**Имя таблицы в DOM*/
    tableName: string = "test_docEditTable";

    /**Форма*/
    @ViewChild('test_docEditForm')
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
    onDataChanged = new EventEmitter<iEntity>();

    /**Проводим до нужного типа*/
    entity: Test_Doc;

    /**Загрузить данные*/
    loadData(): void {
        super.loadData();
    }

    
    /**Установить значение из справочника*/
    setValueTest_Dictionary_Name(entity: iEntity): void{
        this.entity["idtest_dictionary"] = entity["idtest_dictionary"];
        this.entity["test_dictionary_name"] = entity["name"];

        this.setActiveMasterView();
    }
    
    /**Очистить значение из справочника*/
    resetValueTest_Dictionary_Name(): void{
        this.entity["idtest_dictionary"] = null;
        this.entity["test_dictionary_name"] = null;

        this.setActiveMasterView();
    }


    /**Установить значение из справочника*/
    setValueTest_Dictionary2_Name(entity: iEntity): void{
        this.entity["idtest_dictionary2"] = entity["idtest_dictionary"];
        this.entity["test_dictionary2_name"] = entity["name"];

        this.setActiveMasterView();
    }
    
    /**Очистить значение из справочника*/
    resetValueTest_Dictionary2_Name(): void{
        this.entity["idtest_dictionary2"] = null;
        this.entity["test_dictionary2_name"] = null;

        this.setActiveMasterView();
    }


}

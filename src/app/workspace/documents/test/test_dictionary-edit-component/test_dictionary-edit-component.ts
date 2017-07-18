import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewChecked, Input, Output,
    EventEmitter, ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormComponent, iEntity, ServiceProvider } from '../../CommonLib';

import { Test_Dictionary, Test_DictionaryFactory } from "../entity/test_dictionary";
import { Location } from '@angular/common';

// usage:
@Component({
    moduleId: module.id,
    selector: 'test_dictionary-edit-component',
    templateUrl: 'test_dictionary-edit-component.html'
})

export class Test_DictionaryEditComponent extends FormComponent{

    /**Конструктор*/
    constructor(route: ActivatedRoute,
                location: Location,
                service: ServiceProvider) {
        super(service, route, location, new Test_DictionaryFactory());
    }

    /**Имя таблицы в DOM*/
    tableName: string = "test_dictionaryEditTable";

    /**Форма*/
    @ViewChild('test_dictionaryEditForm')
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
    entity: Test_Dictionary;

    /**Загрузить данные*/
    loadData(): void {
        super.loadData();
    }

    
}

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleListComponent } from '../../simple-list';
import { ServiceProviderList } from '../../service-provider-list';
import { FormComponent } from '../../form-component';
import { TestDictionaryFactory } from '../entity/test_dictionary';
var TestDictionaryListComponent = (function (_super) {
    __extends(TestDictionaryListComponent, _super);
    /**Конструктор*/
    function TestDictionaryListComponent(service, router) {
        var _this = _super.call(this, service, router, new TestDictionaryFactory()) || this;
        /**Роут для редактирования позиции*/
        _this.urlEditPosition = '/documents/test_dictionary/edit/';
        /**Роут для новой позиции*/
        _this.urlNewPosition = '/documents/test_dictionary/new';
        /**Имя таблицы*/
        _this.tableName = 'Test_DictionaryList';
        /**Отмена выбора (для модального режима)*/
        _this.onCancel = new EventEmitter();
        /**После загрузки данных*/
        _this.onAfterLoadData = new EventEmitter();
        /**Компонет вложен в другой компонент*/
        _this.childMode = 0;
        /**Выделене какой-то позиции*/
        _this.onSelect = new EventEmitter();
        return _this;
    }
    /**Заголовки колонок*/
    TestDictionaryListComponent.prototype.getGridMetaData = function () {
        return [];
    };
    return TestDictionaryListComponent;
}(SimpleListComponent));
__decorate([
    Output(),
    __metadata("design:type", Object)
], TestDictionaryListComponent.prototype, "onCancel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TestDictionaryListComponent.prototype, "onAfterLoadData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TestDictionaryListComponent.prototype, "childMode", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TestDictionaryListComponent.prototype, "onSelect", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], TestDictionaryListComponent.prototype, "positions", void 0);
__decorate([
    ViewChild('test_dictionary_edit_component'),
    __metadata("design:type", FormComponent)
], TestDictionaryListComponent.prototype, "formComponent", void 0);
TestDictionaryListComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'test_dictionary-list-component',
        templateUrl: 'test_dictionary-list-component.html'
    }),
    __metadata("design:paramtypes", [ServiceProviderList,
        Router])
], TestDictionaryListComponent);
export { TestDictionaryListComponent };
//# sourceMappingURL=test_dictionary-list-component.js.map
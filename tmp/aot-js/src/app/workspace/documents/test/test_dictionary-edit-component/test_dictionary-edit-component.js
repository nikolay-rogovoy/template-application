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
import { ActivatedRoute } from '@angular/router';
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormComponent } from '../../form-component';
import { ServiceProvider } from '../../service-provider';
import { TestDictionaryFactory } from '../entity/test_dictionary';
import { Location } from '@angular/common';
// usage:
var TestDictionaryEditComponent = (function (_super) {
    __extends(TestDictionaryEditComponent, _super);
    /**Конструктор*/
    function TestDictionaryEditComponent(route, location, service) {
        var _this = _super.call(this, service, route, location, new TestDictionaryFactory()) || this;
        /**Имя таблицы в DOM*/
        _this.tableName = 'test_dictionaryEditTable';
        /**Отмена выбора (для модального режима)*/
        _this.onCancel = new EventEmitter();
        /**После загрузки данных*/
        _this.onAfterLoadData = new EventEmitter();
        /**Компонет вложен в другой компонент*/
        _this.childMode = 0;
        /**Ключ компонента*/
        _this.id = 0;
        /**Событие сохранения документа*/
        _this.onDataChanged = new EventEmitter();
        return _this;
    }
    /**Загрузить данные*/
    TestDictionaryEditComponent.prototype.loadData = function () {
        _super.prototype.loadData.call(this);
    };
    return TestDictionaryEditComponent;
}(FormComponent));
__decorate([
    ViewChild('test_dictionaryEditForm'),
    __metadata("design:type", NgForm)
], TestDictionaryEditComponent.prototype, "form", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TestDictionaryEditComponent.prototype, "onCancel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TestDictionaryEditComponent.prototype, "onAfterLoadData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TestDictionaryEditComponent.prototype, "childMode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], TestDictionaryEditComponent.prototype, "id", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TestDictionaryEditComponent.prototype, "onDataChanged", void 0);
TestDictionaryEditComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'test_dictionary-edit-component',
        templateUrl: 'test_dictionary-edit-component.html'
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Location,
        ServiceProvider])
], TestDictionaryEditComponent);
export { TestDictionaryEditComponent };
//# sourceMappingURL=test_dictionary-edit-component.js.map
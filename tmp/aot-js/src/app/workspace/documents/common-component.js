var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Output, EventEmitter, Input } from '@angular/core';
import { CommonLib } from './common-lib';
/**Компонент*/
var CommonComponent = (function () {
    function CommonComponent() {
        /**Загрузка данных выполнена - можно грузить grid*/
        this.loadComplete = false;
        /**Отладка :)*/
        this.debug = true;
        /**Отслеживаем только первую инициализацию вью*/
        this.firstViewChecked = true;
        /**Отмена выбора (для модального режима)*/
        this.onCancel = new EventEmitter();
        /**После загрузки данных*/
        this.onAfterLoadData = new EventEmitter();
        /**Компонет вложен в другой компонент
         * 0 - Роутинг, главный компонент
         * 1 - Для выбора из справочника
         * 2 - Как вложенный элемент
         *
         * Для формы сущности
         * 0 - Сохранить сделать роутинг назад, сгенерить событие модификации
         * 1 -
         * 2 - Сгенерить событие модификации
         * */
        this.childMode = 0;
        /**Активная форма*/
        this.activeForm = 1;
        this.componentName = 'comp_' + Math.round(Math.random() * 10000);
    }
    /**Формат даты и времени для текущего пользователя*/
    CommonComponent.getDateTimeFormat = function () {
        return CommonLib.getDateTimeFormat();
    };
    /**Формат даты для текущего пользователя*/
    CommonComponent.getDateFormat = function () {
        return CommonLib.getDateFormat();
    };
    /**Формат даты и времени для контролов*/
    CommonComponent.getDateTimeFormatUniversal = function () {
        return CommonLib.getDateTimeFormatUniversal();
    };
    /**Формат даты для контролов*/
    CommonComponent.getDateFormatUniversal = function () {
        return CommonLib.getDateFormatUniversal();
    };
    /**Активировать список сущности родительской*/
    CommonComponent.prototype.setActiveForm = function (activeForm) {
        this.activeForm = activeForm;
    };
    /**Сделать главным окно*/
    CommonComponent.prototype.setActiveMasterView = function () {
        if (this.debug) {
            console.log('CommonComponent -> setActiveMasterView -> componentName = ' + this.componentName);
        }
        this.activeForm = 1;
    };
    /**Генерим отмену*/
    CommonComponent.prototype.genCancel = function () {
        this.onCancel.emit();
    };
    /**Сообщаем заинтересованым что компонент загрузил данные*/
    CommonComponent.prototype.genAfterLoadData = function () {
        this.onAfterLoadData.emit();
    };
    /**Событие отрисовки вьюхи (dom дерево построено)*/
    CommonComponent.prototype.ngAfterViewChecked = function () {
        // Данные загружены
        if (this.loadComplete) {
            // Выполняем инициализацию грида только один раз
            if (this.firstViewChecked) {
                this.firstViewChecked = false;
            }
        }
    };
    /**Получить маску для сущности*/
    CommonComponent.prototype.getEntityMask = function (rawValue) {
        return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
    };
    return CommonComponent;
}());
export { CommonComponent };
__decorate([
    Output(),
    __metadata("design:type", Object)
], CommonComponent.prototype, "onCancel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CommonComponent.prototype, "onAfterLoadData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CommonComponent.prototype, "childMode", void 0);
//# sourceMappingURL=common-component.js.map
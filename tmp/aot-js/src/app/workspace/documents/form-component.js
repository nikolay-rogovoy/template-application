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
import { Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { CommonComponent } from './common-component';
import { NgForm } from '@angular/forms';
import { ActionFactory } from './action-factory';
/**Компонент - форма*/
var FormComponent = (function (_super) {
    __extends(FormComponent, _super);
    /**Конструктор*/
    function FormComponent(service, route, location, factory) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.location = location;
        _this.factory = factory;
        /**Ключ компонента*/
        _this.id = 0;
        /**Событие сохранения документа*/
        _this.onDataChanged = new EventEmitter();
        /**Изменения данных в компоненте*/
        _this.changed = false;
        _this.entity = _this.factory.createEmpty();
        return _this;
    }
    /**Сгенерировать событие изменения документа*/
    FormComponent.prototype.genDataChanged = function () {
        // Генерим событие
        this.onDataChanged.emit(this.entity);
    };
    /**Статус изменения данных*/
    FormComponent.prototype.getChanged = function () {
        if (this.form == null) {
            return false;
        }
        return this.form.dirty || this.changed;
    };
    /**Сбросить модификацию данных и данные формы*/
    FormComponent.prototype.resetForm = function (entity) {
        this.changed = false;
        // Если так - то ацкая проблема с датами в контролах
        // this.form.reset(entity);
        // this.form.reset();
    };
    /**Загрузить данные*/
    FormComponent.prototype.loadData = function () {
        var _this = this;
        // Сбрасываем флаги для перерисовки грида
        this.loadComplete = false;
        this.firstViewChecked = true;
        if (this.debug) {
            console.log('loadData -> this.id = ' + this.id);
        }
        if (this.id === 0) {
            // Пустой, грузить не нужно
            var entity = this.factory.createEmpty();
            this.resetForm(entity);
            this.entity = entity;
            // Отмечаем что данные получены.
            this.loadComplete = true;
            // Генерим событие о загрузке данных
            this.genAfterLoadData();
        }
        else {
            var res = this.service.getEntity(this.id, this.factory);
            res.subscribe(function (entity) {
                if (entity != null) {
                    _this.resetForm(entity);
                    _this.entity = entity;
                    if (_this.debug) {
                        console.log('loadData -> entity = ');
                        console.log(entity);
                    }
                    // Отмечаем что данные получены.
                    _this.loadComplete = true;
                    // Генерим событие о загрузке данных
                    _this.genAfterLoadData();
                }
                else {
                    throw Error('Ошибка получения #' + _this.id + ';' + _this.entity.entityName);
                }
            });
        }
    };
    /**Submit*/
    FormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.childMode === 2) {
            // Просто сгенерить событие
            this.genDataChanged();
            // Убрать модификацию
            this.resetForm(this.entity);
        }
        else {
            this.service.postEntity(this.entity).subscribe(function (isOk) {
                if (isOk) {
                    if (_this.debug) {
                        console.log('onSubmit post data -> entity = ' + _this.entity);
                    }
                    _this.resetForm(_this.entity);
                }
                else {
                }
            }, function (error) {
                /*
                  managerSweetAlert.swal(
                  {
                    title: 'Ошибка сохранения!',
                    text: '',
                    type: 'error',
                    confirmButtonClass: 'btn btn-info btn-fill',
                    confirmButtonText: 'Ок',
                    closeOnConfirm: true
                  },
                  () => {
                  }
                );
                  */
            });
        }
    };
    /**После инициализации компонента - инитим всякие контролы*/
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.debug) {
            console.log('ngOnInit -> start');
        }
        this.route.params.map(function (params) {
            return params;
        }).subscribe(function (params) {
            if (_this.debug) {
                console.log('ngOnInit -> params = ' + _this.entity);
            }
            if (params[_this.entity.keyName] == null) {
            }
            else {
                var id = +params[_this.entity.keyName];
                _this.id = id;
            }
            // Загрузить
            _this.loadData();
        });
    };
    /**Отменить сохранение*/
    FormComponent.prototype.cancelChange = function () {
        // TODO Поставить нормальные мессаги
        /*
         if (this.getChanged()) {
         managerSweetAlert.swal(
         {
         title: 'Вы уверены?',
         text: 'Есть не сохраненные данные.',
         type: 'warning',
         showCancelButton: true,
         confirmButtonClass: 'btn btn-info btn-fill',
         confirmButtonText: 'Да, закрыть!',
         cancelButtonText: 'Отменить',
         cancelButtonClass: 'btn btn-danger btn-fill',
         closeOnConfirm: true,
         },
         () => {
         this.genCancel();
         if (this.childMode === 0) {
         this.location.back();
         }
         });
         } else {
         this.genCancel();
         if (this.childMode === 0) {
         this.location.back();
         }
         }
         */
        // TODO Убрать
        this.genCancel();
        if (this.childMode === 0) {
            this.location.back();
        }
    };
    /**Выполнить действие*/
    FormComponent.prototype.performAction = function (actionName) {
        ActionFactory.perform(actionName, this);
    };
    return FormComponent;
}(CommonComponent));
export { FormComponent };
__decorate([
    ViewChild('formComponent'),
    __metadata("design:type", NgForm)
], FormComponent.prototype, "form", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], FormComponent.prototype, "id", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FormComponent.prototype, "onDataChanged", void 0);
//# sourceMappingURL=form-component.js.map
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
import { CommonComponent } from './common-component';
import { Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormComponent } from './form-component';
import { CommonLib } from './common-lib';
/**Компонент списков*/
var ListComponent = (function (_super) {
    __extends(ListComponent, _super);
    /**Конструктор*/
    function ListComponent(service, router, factory) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.router = router;
        _this.factory = factory;
        /**Роут для редактирования позиции*/
        _this.urlEditPosition = '/edit/';
        /**Роут для редактирования позиции*/
        _this.urlNewPosition = '/new';
        /**Выделене какой-то позиции*/
        _this.onSelect = new EventEmitter();
        return _this;
    }
    /**Генерим событие выбора*/
    ListComponent.prototype.genSelect = function (position) {
        this.onSelect.emit(position);
    };
    /**Загрузить данные*/
    ListComponent.prototype.loadData = function () {
    };
    /**Клик по строке*/
    ListComponent.prototype.selectRow = function (position) {
        if (this.childMode === 1) {
            this.genSelect(position);
        }
        else if (this.childMode === 2) {
            // Открыть форму редактирование сущности без роутинга
            if (this.debug) {
                console.log('ListComponent -> selectRow -> childMode == 2');
            }
            this.formComponent.entity = position;
            this.formComponent.childMode = 2;
            this.setActiveForm(2);
        }
        else {
            this.router.navigateByUrl(this.urlEditPosition + position[position.keyName]);
        }
    };
    /**Создать новую запись*/
    ListComponent.prototype.createNew = function () {
        if (this.childMode === 2) {
            // Открыть форму редактирование сущности без роутинга
            if (this.debug) {
                console.log('ListComponent -> createNew -> childMode == 2');
            }
            this.formComponent.entity = this.factory.createNew(CommonLib.getNewTempId(this.positions));
            this.setActiveForm(2);
        }
        else {
            this.router.navigate([this.urlNewPosition]);
        }
    };
    /**После инита - загрузить данные*/
    ListComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    /**Удалить запись*/
    ListComponent.prototype.delete = function (entity, funcDelete) {
        // TODO Поставить нормальные мессаги
        /*
         managerSweetAlert.swal(
         {
         title: 'Вы уверены?',
         text: 'Удаление запись.',
         type: 'warning',
         showCancelButton: true,
         confirmButtonClass: 'btn btn-info btn-fill',
         confirmButtonText: 'Да, удалить!',
         cancelButtonText: 'Отменить',
         cancelButtonClass: 'btn btn-danger btn-fill',
         closeOnConfirm: true,
         },
         () => {
         if (entity[entity.keyName] == null) {
         // Удалить в интерфейсе
         funcDelete(entity[entity.keyName]);
         } else {
         // Удалить на сервере
         this.service.deleteEntity(entity).subscribe(
         (response: any) => {
         // Удалить в интерфейсе
         funcDelete(entity[entity.keyName]);
         },
         (error: any) => {
         this.positions = [];
         console.log('Ошибка удаления!');
         console.log(error);
    
         managerSweetAlert.swal(
         {
         title: 'Ошибка удаления!',
         text: '',
         type: 'error',
         confirmButtonClass: 'btn btn-info btn-fill',
         confirmButtonText: 'Ок',
         closeOnConfirm: true
         },
         () => {
         }
         );
         }
         );
         }
         }
         );
         */
        var _this = this;
        // TODO Удалить после постаовки мессаг нормальных
        if (entity[entity.keyName] == null) {
            // Удалить в интерфейсе
            funcDelete(entity[entity.keyName]);
        }
        else {
            // Удалить на сервере
            this.service.deleteEntity(entity).subscribe(function (response) {
                // Удалить в интерфейсе
                funcDelete(entity[entity.keyName]);
            }, function (error) {
                _this.positions = [];
                console.log('Ошибка удаления!');
                console.log(error);
            });
        }
    };
    /**ИД строки в DOM*/
    ListComponent.prototype.getRowId = function (entity) {
        return 'comp_' + this.componentName + '_row_' + entity[entity.keyName] + '_tmpId_' + entity.tmpId;
    };
    /**Поредактировали в форме сущность без роутинга*/
    ListComponent.prototype.editEntity = function (entity) {
        if (this.debug) {
            console.log('ListComponent -> editEntity -> entity.keyName = ' + entity[entity.keyName]);
        }
        // Если нет такой то добавляем в коллекцию (новая, и в базе ее нет)
        var found = false;
        for (var _i = 0, _a = this.positions; _i < _a.length; _i++) {
            var existsEntity = _a[_i];
            if (existsEntity.equals(entity)) {
                found = true;
            }
        }
        if (!found) {
            this.positions.push(entity);
        }
        // Активируем главный вид
        this.setActiveMasterView();
    };
    /**Заголовки колонок*/
    ListComponent.prototype.getGridMetaData = function () {
        return [];
    };
    return ListComponent;
}(CommonComponent));
export { ListComponent };
__decorate([
    Input(),
    __metadata("design:type", Array)
], ListComponent.prototype, "positions", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ListComponent.prototype, "onSelect", void 0);
__decorate([
    ViewChild(''),
    __metadata("design:type", FormComponent)
], ListComponent.prototype, "formComponent", void 0);
//# sourceMappingURL=list.js.map
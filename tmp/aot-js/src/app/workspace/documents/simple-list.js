var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ListComponent } from './list';
var SimpleListComponent = (function (_super) {
    __extends(SimpleListComponent, _super);
    /**Конструктор*/
    function SimpleListComponent(service, router, factory) {
        var _this = _super.call(this, service, router, factory) || this;
        _this.service = service;
        _this.router = router;
        _this.factory = factory;
        /**Имя таблицы в DOM*/
        _this.tableName = 'position_table';
        return _this;
    }
    /**Событие отрисовки вьюхи (dom дерево построено)*/
    SimpleListComponent.prototype.ngAfterViewChecked = function () {
        // Данные загружены
        if (this.loadComplete) {
            // Выполняем инициализацию грида только один раз
            if (this.firstViewChecked) {
                this.firstViewChecked = false;
                this.loadGrid();
            }
        }
    };
    /**Инициализация грида*/
    SimpleListComponent.prototype.loadGrid = function () {
        if (this.debug) {
            console.log('SimpleListComponent -> loadGrid -> this.tableName = ' + this.tableName);
        }
    };
    /**Загрузить данные*/
    SimpleListComponent.prototype.loadData = function () {
        var _this = this;
        // Сбрасываем флаги для перерисовки грида
        this.loadComplete = false;
        this.firstViewChecked = true;
        this.service.getEntityList(this.factory).subscribe(function (positions) {
            _this.positions = positions;
            // Отмечаем что данные получены.
            _this.loadComplete = true;
            _this.genAfterLoadData();
        }, function (error) {
            _this.positions = [];
            console.log('Ошибка получения списка');
            console.log(error);
        });
    };
    /**Удалить запись*/
    SimpleListComponent.prototype.delete = function (entity) {
        _super.prototype.delete.call(this, entity, function (id) {
            // Колбэк для удаления
        });
    };
    return SimpleListComponent;
}(ListComponent));
export { SimpleListComponent };
//# sourceMappingURL=simple-list.js.map
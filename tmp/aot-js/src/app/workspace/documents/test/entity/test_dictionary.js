var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by AtSoft on 2017-07-10
 */
import { CommonLib } from '../../common-lib';
import { Factory } from '../../factory';
import { Entity } from '../../entity';
var TestDictionary = (function (_super) {
    __extends(TestDictionary, _super);
    function TestDictionary(/***/ idtest_dictionary, 
        /**Наименование*/
        name, 
        /**Комментарий*/
        comment, 
        /**Активность*/
        active) {
        var _this = _super.call(this) || this;
        _this.idtest_dictionary = idtest_dictionary;
        _this.name = name;
        _this.comment = comment;
        _this.active = active;
        /**Ключ сущности*/
        _this.keyName = 'idtest_dictionary';
        /**Наименование сущности*/
        _this.entityName = 'test_dictionary';
        return _this;
    }
    /**Загрузить из сырого объекта*/
    TestDictionary.prototype.fromRawObject = function (source) {
        CommonLib.copyProperty(this, source);
    };
    /**Получить поля с датами*/
    TestDictionary.prototype.getFieldDate = function () {
        return [];
    };
    return TestDictionary;
}(Entity));
export { TestDictionary };
var TestDictionaryFactory = (function (_super) {
    __extends(TestDictionaryFactory, _super);
    function TestDictionaryFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**Создать новый объект*/
    TestDictionaryFactory.prototype.createNew = function (tmpId) {
        var varItem = new TestDictionary(null, null, null, null);
        varItem.tmpId = tmpId;
        return varItem;
    };
    /**Создать пустой объект*/
    TestDictionaryFactory.prototype.createEmpty = function () {
        var varItem = new TestDictionary(null, null, null, null);
        return varItem;
    };
    return TestDictionaryFactory;
}(Factory));
export { TestDictionaryFactory };
//# sourceMappingURL=test_dictionary.js.map
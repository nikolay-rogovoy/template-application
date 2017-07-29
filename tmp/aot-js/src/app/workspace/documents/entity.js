import { CommonLib } from './common-lib';
/**Сущность*/
var Entity = (function () {
    function Entity() {
    }
    /**Загрузить из сырого объекта*/
    Entity.prototype.fromRawObject = function (source) {
        throw new Error('fromRawObject not implemented');
    };
    /**Присваевание сущностей*/
    Entity.prototype.assign = function (source) {
        CommonLib.assign(this, source);
    };
    /**Сравнение сущностей*/
    Entity.prototype.equals = function (source) {
        if (this[this.keyName] != null
            && this[this.keyName] === source[source.keyName]) {
            return true;
        }
        if (this.tmpId != null && this.tmpId === source.tmpId) {
            return true;
        }
        return false;
    };
    /**Получить поля с датами*/
    Entity.prototype.getFieldDate = function () {
        return new Array();
    };
    return Entity;
}());
export { Entity };
//# sourceMappingURL=entity.js.map
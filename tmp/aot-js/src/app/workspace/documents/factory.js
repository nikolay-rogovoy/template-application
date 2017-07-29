import { Entity } from './entity';
/**Фабрика*/
var Factory = (function () {
    function Factory() {
    }
    /**Создать новый объект*/
    Factory.prototype.createNew = function (tmpId) {
        var e = new Entity();
        e.tmpId = tmpId;
        return e;
    };
    /**Создать пустой объект*/
    Factory.prototype.createEmpty = function () {
        return new Entity();
    };
    return Factory;
}());
export { Factory };
//# sourceMappingURL=factory.js.map
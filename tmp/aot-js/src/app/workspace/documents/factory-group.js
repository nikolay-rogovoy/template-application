var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Factory } from './factory';
import { GroupEntity } from './group-entity';
/**Фабрика*/
var FactoryGroup = (function (_super) {
    __extends(FactoryGroup, _super);
    function FactoryGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**Создать новый объект*/
    FactoryGroup.prototype.createNewGroup = function (tmpId) {
        var e = new GroupEntity();
        e.tmpId = tmpId;
        return e;
    };
    /**Создать пустой объект*/
    FactoryGroup.prototype.createEmptyGroup = function () {
        return new GroupEntity();
    };
    return FactoryGroup;
}(Factory));
export { FactoryGroup };
//# sourceMappingURL=factory-group.js.map
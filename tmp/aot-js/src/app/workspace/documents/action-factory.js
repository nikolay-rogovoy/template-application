import { TestAction } from './test/action/test-action';
/**Фабрика действий*/
var ActionFactory = (function () {
    function ActionFactory() {
    }
    /**Создание действия*/
    ActionFactory.createAction = function (ctor) {
        return new ctor();
    };
    /**Заполнить справочник*/
    ActionFactory.initDictionary = function () {
        ActionFactory.dictionary = new Object;
        ActionFactory.dictionary['TestAction'] = ActionFactory.createAction(TestAction);
    };
    /**Выполнить действие*/
    ActionFactory.perform = function (actionName, form) {
        if (ActionFactory.dictionary[actionName] == null) {
            throw new Error('Action ' + actionName + ' not found in dictionary');
        }
        ActionFactory.dictionary[actionName].perform(form);
    };
    return ActionFactory;
}());
export { ActionFactory };
//# sourceMappingURL=action-factory.js.map
import {IActionConstructor} from './i-action-constructor';
import {IAction} from './i-action';
// import {TestAction} from './test/action/test-action';
import {FormComponent} from './form-component';

/**Фабрика действий*/
export class ActionFactory {
    /**Справочник действий*/
    static dictionary: Object;

    /**Создание действия*/
    static createAction(ctor: IActionConstructor): IAction {
        return new ctor();
    }

    /**Заполнить справочник*/
    static initDictionary() {
        ActionFactory.dictionary = new Object;
        // ActionFactory.dictionary['TestAction'] = ActionFactory.createAction(TestAction);
    }

    /**Выполнить действие*/
    static perform(actionName: string, form: FormComponent) {
        if (ActionFactory.dictionary[actionName] == null) {
            throw new Error('Action ' + actionName + ' not found in dictionary');
        }
        ActionFactory.dictionary[actionName].perform(form);
    }
}

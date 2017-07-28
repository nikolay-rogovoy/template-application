
import {FormComponent} from '../../form-component';
import {IAction} from '../../i-action';
import {TestDictionary} from '../entity/test_dictionary';

/**Действие*/
export class TestAction implements IAction {

    /**Конструктор*/
    constructor() {
    }

    /**Выполнить*/
    perform(form: FormComponent): void {
        console.log('TestAction -> perform');
        let someEntity: TestDictionary = form.entity as TestDictionary;
        console.log(someEntity);
    }
}

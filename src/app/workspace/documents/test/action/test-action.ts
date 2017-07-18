
import { FormComponent, iAction } from '../../CommonLib';
import { Test_Doc } from "../entity/test_doc";

/**Действие*/
export class TestAction implements iAction{

    /**Конструктор*/
    constructor(){
    }

    /**Выполнить*/
    perform(form: FormComponent): void{
        console.log("TestAction -> perform");
        let someEntity: Test_Doc = form.entity as Test_Doc;
        console.log(someEntity);
    }
}

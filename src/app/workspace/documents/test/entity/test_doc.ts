/**
 * Created by AtSoft on 2017-07-10
 */
import { CommonLib, Factory, FactoryGroup, iEntity, Entity, iGroupEntity, GroupEntity } from '../../CommonLib';


export class Test_Doc extends Entity{
    constructor(
        /**Тест документ*/
        public idtest_doc: number,
        /**Наименование*/
        public name: string,
        /**Комментарий*/
        public comment: string,
        /**Дата создания*/
        public dtcre: Date,
        /**Дата документа*/
        public dtdoc: Date,
        /**Дата созд2*/
        public dccre2: Date,
        /**Дата2*/
        public dtdoc2: Date,
        /**Справочник*/
        public idtest_dictionary: number,
        /**Справочник2*/
        public idtest_dictionary2: number,
        /**Номер*/
        public numpos: number,
        /**Цена*/
        public price: number,
        /**нум 2 нот нулл*/
        public numpos2: number,
        /**Цена 2 нот нулл*/
        public price2: number,
        /**Тел.*/
        public phone: string,
        /**Об. тел.*/
        public phone2: string,
        /**email*/
        public email: string,
        /**email req*/
        public email2: string,
        /**Справочник*/
        public test_dictionary_name: string,
        /**Справочник2*/
        public test_dictionary2_name: string
    )
    {
      super();
    }

    /**Ключ сущности*/
    keyName: string = "idtest_doc";

    /**Наименование сущности*/
    entityName: string = "test_doc";

    /**Загрузить из сырого объекта*/
    fromRawObject(source: any): void{
        CommonLib.copyProperty(this, source);
        
    }

    /**Получить поля с датами*/
    getFieldDate(): string[]{
        return ["dtcre","dtdoc","dccre2","dtdoc2"];
    }
}


    export class Test_DocFactory extends Factory{
    /**Создать новый объект*/
    createNew(tmpId: number): iEntity{
        let varItem = new Test_Doc(null,null,null,new Date(),CommonLib.getCurrentDate(),new Date(),CommonLib.getCurrentDate(),null,null,null,null,null,null,null,null,null,null,null,null);
        varItem.tmpId = tmpId;
        return varItem;
    }
    /**Создать пустой объект*/
    createEmpty(): iEntity{
        let varItem = new Test_Doc(null,null,null,new Date(),CommonLib.getCurrentDate(),new Date(),CommonLib.getCurrentDate(),null,null,null,null,null,null,null,null,null,null,null,null);
        return varItem;
    }
}



/**
 * Created by AtSoft on 2017-07-10
 */
import { CommonLib, Factory, FactoryGroup, iEntity, Entity, iGroupEntity, GroupEntity } from '../../CommonLib';


export class Test_Docitem extends Entity{
    constructor(
        /***/
        public idtest_docitem: number,
        /**Наименование*/
        public name: string,
        /***/
        public comment: string,
        /**Супер справочник*/
        public idtest_dictionary: number,
        /**Супер справочник*/
        public test_dictionary_name: string
    )
    {
      super();
    }

    /**Ключ сущности*/
    keyName: string = "idtest_docitem";

    /**Наименование сущности*/
    entityName: string = "test_docitem";

    /**Загрузить из сырого объекта*/
    fromRawObject(source: any): void{
        CommonLib.copyProperty(this, source);
        
    }

    /**Получить поля с датами*/
    getFieldDate(): string[]{
        return [];
    }
}


    export class Test_DocitemFactory extends Factory{
    /**Создать новый объект*/
    createNew(tmpId: number): iEntity{
        let varItem = new Test_Docitem(null,null,null,null,null);
        varItem.tmpId = tmpId;
        return varItem;
    }
    /**Создать пустой объект*/
    createEmpty(): iEntity{
        let varItem = new Test_Docitem(null,null,null,null,null);
        return varItem;
    }
}



/**
 * Created by AtSoft on 2017-07-10
 */
import { CommonLib, Factory, FactoryGroup, iEntity, Entity, iGroupEntity, GroupEntity } from '../../CommonLib';


export class Test_Dictionary extends Entity{
    constructor(
        /***/
        public idtest_dictionary: number,
        /**Наименование*/
        public name: string,
        /**Комментарий*/
        public comment: string,
        /**Активность*/
        public active: string
    )
    {
      super();
    }

    /**Ключ сущности*/
    keyName: string = "idtest_dictionary";

    /**Наименование сущности*/
    entityName: string = "test_dictionary";

    /**Загрузить из сырого объекта*/
    fromRawObject(source: any): void{
        CommonLib.copyProperty(this, source);
        
    }

    /**Получить поля с датами*/
    getFieldDate(): string[]{
        return [];
    }
}


    export class Test_DictionaryFactory extends Factory{
    /**Создать новый объект*/
    createNew(tmpId: number): iEntity{
        let varItem = new Test_Dictionary(null,null,null,null);
        varItem.tmpId = tmpId;
        return varItem;
    }
    /**Создать пустой объект*/
    createEmpty(): iEntity{
        let varItem = new Test_Dictionary(null,null,null,null);
        return varItem;
    }
}



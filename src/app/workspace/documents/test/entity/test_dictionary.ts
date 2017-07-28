/**
 * Created by AtSoft on 2017-07-10
 */
import {CommonLib} from '../../common-lib';
import {Factory} from '../../factory';
import {IEntity} from '../../i-entity';
import {Entity} from '../../entity';


export class TestDictionary extends Entity {

  /**Ключ сущности*/
  keyName: string = 'idtest_dictionary';

  /**Наименование сущности*/
  entityName: string = 'test_dictionary';

  /**Загрузить из сырого объекта*/
  fromRawObject(source: any): void {
    CommonLib.copyProperty(this, source);
  }

  constructor(/***/
              public idtest_dictionary: number,
              /**Наименование*/
              public name: string,
              /**Комментарий*/
              public comment: string,
              /**Активность*/
              public active: string) {
    super();
  }

  /**Получить поля с датами*/
  getFieldDate(): string[] {
    return [];
  }
}


export class TestDictionaryFactory extends Factory {
  /**Создать новый объект*/
  createNew(tmpId: number): IEntity {
    let varItem = new TestDictionary(null, null, null, null);
    varItem.tmpId = tmpId;
    return varItem;
  }

  /**Создать пустой объект*/
  createEmpty(): IEntity {
    let varItem = new TestDictionary(null, null, null, null);
    return varItem;
  }
}

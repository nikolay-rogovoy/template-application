import {Injectable} from '@angular/core';
import {IServiceProvider} from './i-service-provider';
import {Http, Response} from '@angular/http';
import {IEntity} from './i-entity';
import {Observable} from 'rxjs/Observable';
import {RestDictionary} from './rest-dictionary';
import {CommonLib} from './common-lib';
import {Factory} from './factory';
/**Базовый сервис*/
@Injectable()
export class ServiceProvider implements IServiceProvider {

  constructor (public http: Http) {}

  /**Удалить сущность*/
  deleteEntity(entity: IEntity): Observable<boolean> {
    let entityUrl = RestDictionary.dictionary[entity.entityName];
    if (entityUrl == null) {
      throw new Error('Entity ' + entity.entityName + ' not found in RestDictionary');
    } else {
      return this.http.delete(entityUrl + '/' + entity[entity.keyName])
        .map((res: Response) => { return CommonLib.extractData(res, entity); })
        .catch(CommonLib.handleError);
    }
  }

  /**Сохранить сущность*/
  postEntity(entity: IEntity): Observable<boolean> {
    let entityUrl = RestDictionary.dictionary[entity.entityName];
    if (entityUrl == null) {
      throw new Error('Entity ' + entity.entityName + ' not found in RestDictionary');
    } else {
      let saveData = {
        data: [entity]
      };
      return this.http.post(entityUrl, JSON.stringify(saveData),
        {headers: CommonLib.getPostHeaders()}).map(result => true);
    }
  }

  /**Получить сущность*/
  getEntity(identity: number, factory: Factory): Observable<IEntity> {
    let entityEmpty = factory.createEmpty();
    let entityUrl = RestDictionary.dictionary[entityEmpty.entityName];
    if (entityUrl == null) {
      throw new Error('Entity ' + entityEmpty.entityName + ' not found in RestDictionary');
    } else {
      return this.http.get(entityUrl + '/' + identity)
        .map((res: Response) => { return CommonLib.extractData(res, entityEmpty); })
        .map(data => {
          return data.Result.data[0];
        })
        .map(data => {
          let newEntity: IEntity = factory.createEmpty();
          newEntity.fromRawObject(data);
          return newEntity;
        })
        .catch(CommonLib.handleError);
    }
  }
}

import {Injectable} from '@angular/core';
import {ServiceProvider} from './service-provider';
import {IServiceProviderList} from './i-service-provider-list';
import {Http, Response} from '@angular/http';
import {Factory} from './factory';
import {Observable} from 'rxjs/Observable';
import {RestDictionary} from './rest-dictionary';
import {CommonLib} from './common-lib';
import {IEntity} from './i-entity';
/**Список сущностей*/
@Injectable()
export class ServiceProviderList extends ServiceProvider
  implements IServiceProviderList {

  constructor (http: Http) {
    super(http);
  }

  /**Получить список*/
  getEntityList(factory: Factory): Observable<IEntity[]> {
    let entityEmpty = factory.createEmpty();

    let entityUrl = RestDictionary.dictionary[entityEmpty.entityName];
    if (entityUrl == null) {
      throw new Error('Entity ' + entityEmpty.entityName + ' not found in RestDictionary');
    } else {
      return this.http.get(entityUrl)
        .map((res: Response) => { return CommonLib.extractData(res, entityEmpty); })
        .map(data => {
          return data.Result.data;
        })
        .map(data => {
          let result = [];
          for (let item of data) {
            let newEntity: IEntity = factory.createEmpty();
            newEntity.fromRawObject(item);
            result.push(newEntity);
          }
          return result;
        })
        .catch(CommonLib.handleError);
    }
  }
}

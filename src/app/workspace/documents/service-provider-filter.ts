
import {Injectable} from '@angular/core';
import {ServiceProvider} from './service-provider';
import {IServiceProviderFilter} from './i-service-provider-filter';
import {Http, Response} from '@angular/http';
import {Factory} from './factory';
import {Observable} from 'rxjs/Observable';
import {IEntity} from './i-entity';
import {RestDictionary} from './rest-dictionary';
import {CommonLib} from './common-lib';
/**Сервис для фильтра*/
@Injectable()
export class ServiceProviderFilter extends ServiceProvider
  implements IServiceProviderFilter {

  constructor (http: Http) {
    super(http);
  }

  /**Получить список из фильтра*/
  getEntityList(idfilter: number, factory: Factory): Observable<IEntity[]> {
    let entityEmpty = factory.createEmpty();
    let entityUrl = RestDictionary.dictionaryGroup[entityEmpty.entityName];
    if (entityUrl == null) {
      throw new Error('Entity ' + entityEmpty.entityName + ' not found in RestDictionary');
    } else {
      return this.http.get(entityUrl + '/' + idfilter)
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

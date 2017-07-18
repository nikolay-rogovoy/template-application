
import {Injectable} from '@angular/core';
import {ServiceProviderList} from './service-provider-list';
import {IServiceProviderList} from './i-service-provider-list';
import {Http, Response} from '@angular/http';
import {FactoryGroup} from './factory-group';
import {Observable} from 'rxjs/Observable';
import {RestDictionary} from './rest-dictionary';
import {CommonLib} from './common-lib';
import {IGroupEntity} from './i-group-entity';
/**Возвращаает список фильтров*/
@Injectable()
export class ServiceProviderListGroup extends ServiceProviderList
  implements IServiceProviderList {

  constructor (http: Http) {
    super(http);
  }

  /**Получить список*/
  getEntityGroupList(factory: FactoryGroup): Observable<IGroupEntity[]> {
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
            let newEntity: IGroupEntity = factory.createEmptyGroup();
            newEntity.fromRawObject(item);
            result.push(newEntity);
          }
          return result;
        })
        .catch(CommonLib.handleError);
    }
  }
}

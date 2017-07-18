import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/Rx';
import {Entity} from './entity';
import {IEntity} from './i-entity';

/**Библиотека*/
export  class CommonLib {
  /**Вхождение элемента в массив*/
  static includes<T>(array: Array<T>, searchElement: T, fromIndex = 0): boolean {
    let len: number = array.length;
    if (len === 0) {
      return false;
    }
    let n: number = fromIndex;
    let k: number;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {
        k = 0;
      }
    }
    while (k < len) {
      let currentElement: T = array[k];
      if (searchElement === currentElement ||
        (searchElement !== searchElement && currentElement !== currentElement)
      ) {
        return true;
      }
      k++;
    }
    return false;
  }

  /**Дату в строку*/
  static dateToString(date: Date) {
    let curr_date = ('00' + date.getDate());
    curr_date = curr_date.substr(curr_date.length - 2);

    let curr_month = ('00' + (date.getMonth() + 1));
    curr_month = curr_month.substr(curr_month.length - 2);

    let curr_year = ('0000' + date.getFullYear());
    curr_year = curr_year.substr(curr_year.length - 4);

    return curr_date + '.' + curr_month + '.' + curr_year;
  }

  /**Дату в сстроку с временем*/
  static toDateTime = function () {

    let curr_seconds = ('00' + this.getSeconds());
    curr_seconds = curr_seconds.substr(curr_seconds.length - 2);

    let curr_minutes = ('00' + this.getMinutes());
    curr_minutes = curr_minutes.substr(curr_minutes.length - 2);

    let curr_hours = ('00' + this.getHours());
    curr_hours = curr_hours.substr(curr_hours.length - 2);

    let curr_date = ('00' + this.getDate());
    curr_date = curr_date.substr(curr_date.length - 2);

    let curr_month = ('00' + (this.getMonth() + 1));
    curr_month = curr_month.substr(curr_month.length - 2);

    let curr_year = ('0000' + this.getFullYear());
    curr_year = curr_year.substr(curr_year.length - 4);

    return curr_year + '-' + curr_month + '-' + curr_date + ' ' + curr_hours + ':' + curr_minutes + ':' + curr_seconds;
  };

  /**Извечь данные*/
  static extractData(res: Response, entity: Entity) {
    // Даты объекта
    let dateProps = entity.getFieldDate();

    let body = JSON.parse(res.text(),
      (key, value) => {
        if (value != null) {
          if (CommonLib.includes(dateProps, key)) {
            return new Date(value);
          }
        }
        return value;
      });

    // This server always wraps JSON results in an object with a data property.
    // You have to unwrap it to get the heroes.
    // This is conventional web API behavior, driven by security concerns.
    // Make no assumptions about the server API. Not all servers return an object with a data property.
    // https://angular.io/docs/ts/latest/guide/server-communication.html#!#http-client
    // return body.data || { };

    // console.log("extractData2");
    // console.log(body);

    return body || {};
  }

  /**Обработка ошибки извлечения данных*/
  static handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  /**Получить текущую дату клиента без времени*/
  static getCurrentDate(): Date {
    let t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
  }

  /**Скопировать объект*/
  static assign(dest: any, source: any): void {
    for (let prop of source) {
      dest[prop] = source[prop];
    }
  }

  /**Объект из сырых данных*/
  static toInstance<T>(dest: T, rawSource: any): T {
    // Если есть спец. метод извлечения, то вызываем его
    if (typeof dest['fromRawObject'] === 'function') {
      dest['fromRawObject'](rawSource);
    } else {
      // Просто копируем свойства
      CommonLib.copyProperty(dest, rawSource);
    }
    return dest;
  }

  /**Копирование свойств из сырого объекта*/
  static copyProperty<T>(dest: T, rawSource: any): T {
    for (let propName in rawSource) {
      if (rawSource.hasOwnProperty(propName)) {
        dest[propName] = rawSource[propName];
      }
    }
    return dest;
  }

  /***/
  static getPostHeaders(): Headers {
    return new Headers({'Content-Type': 'application/json'});
  }

  /**Урл к апи*/
  static getApiUrl(): string {
    return 'http://localhost:3003/api/';
  }

  /**Урл к апи*/
  static getNewTempId(entityList: IEntity[]): number {
    let tmpId = 1;
    for (let entity of entityList) {
      if (entity.tmpId != null && entity.tmpId >= tmpId) {
        tmpId = entity.tmpId + 1;
      }
    }
    return tmpId;
  }

  /**Формат даты и времени для текущего пользователя*/
  static getDateTimeFormat(): string {
    return 'dd.MM.yyyy HH:mm';
  }

  /**Формат даты для текущего пользователя*/
  static getDateFormat(): string {
    return 'dd.MM.yyyy';
  }

  /**Формат даты и времени для контролов*/
  static getDateTimeFormatUniversal(): string {
    return 'yyyy-MM-dd HH:mm';
  }

  /**Формат даты для контролов*/
  static getDateFormatUniversal(): string {
    return 'yyyy-MM-dd';
  }
}

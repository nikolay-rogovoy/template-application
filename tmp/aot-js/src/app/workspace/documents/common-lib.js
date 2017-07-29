import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/Rx';
/**Библиотека*/
var CommonLib = (function () {
    function CommonLib() {
    }
    /**Вхождение элемента в массив*/
    CommonLib.includes = function (array, searchElement, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var len = array.length;
        if (len === 0) {
            return false;
        }
        var n = fromIndex;
        var k;
        if (n >= 0) {
            k = n;
        }
        else {
            k = len + n;
            if (k < 0) {
                k = 0;
            }
        }
        while (k < len) {
            var currentElement = array[k];
            if (searchElement === currentElement ||
                (searchElement !== searchElement && currentElement !== currentElement)) {
                return true;
            }
            k++;
        }
        return false;
    };
    /**Дату в строку*/
    CommonLib.dateToString = function (date) {
        var curr_date = ('00' + date.getDate());
        curr_date = curr_date.substr(curr_date.length - 2);
        var curr_month = ('00' + (date.getMonth() + 1));
        curr_month = curr_month.substr(curr_month.length - 2);
        var curr_year = ('0000' + date.getFullYear());
        curr_year = curr_year.substr(curr_year.length - 4);
        return curr_date + '.' + curr_month + '.' + curr_year;
    };
    /**Извечь данные*/
    CommonLib.extractData = function (res, entity) {
        // Даты объекта
        var dateProps = entity.getFieldDate();
        var body = JSON.parse(res.text(), function (key, value) {
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
    };
    /**Обработка ошибки извлечения данных*/
    CommonLib.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    /**Получить текущую дату клиента без времени*/
    CommonLib.getCurrentDate = function () {
        var t = new Date();
        return new Date(t.getFullYear(), t.getMonth(), t.getDate());
    };
    /**Скопировать объект*/
    CommonLib.assign = function (dest, source) {
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var prop = source_1[_i];
            dest[prop] = source[prop];
        }
    };
    /**Объект из сырых данных*/
    CommonLib.toInstance = function (dest, rawSource) {
        // Если есть спец. метод извлечения, то вызываем его
        if (typeof dest['fromRawObject'] === 'function') {
            dest['fromRawObject'](rawSource);
        }
        else {
            // Просто копируем свойства
            CommonLib.copyProperty(dest, rawSource);
        }
        return dest;
    };
    /**Копирование свойств из сырого объекта*/
    CommonLib.copyProperty = function (dest, rawSource) {
        for (var propName in rawSource) {
            if (rawSource.hasOwnProperty(propName)) {
                dest[propName] = rawSource[propName];
            }
        }
        return dest;
    };
    /***/
    CommonLib.getPostHeaders = function () {
        return new Headers({ 'Content-Type': 'application/json' });
    };
    /**Урл к апи*/
    CommonLib.getApiUrl = function () {
        return 'http://localhost:3003/api/';
    };
    /**Урл к апи*/
    CommonLib.getNewTempId = function (entityList) {
        var tmpId = 1;
        for (var _i = 0, entityList_1 = entityList; _i < entityList_1.length; _i++) {
            var entity = entityList_1[_i];
            if (entity.tmpId != null && entity.tmpId >= tmpId) {
                tmpId = entity.tmpId + 1;
            }
        }
        return tmpId;
    };
    /**Формат даты и времени для текущего пользователя*/
    CommonLib.getDateTimeFormat = function () {
        return 'dd.MM.yyyy HH:mm';
    };
    /**Формат даты для текущего пользователя*/
    CommonLib.getDateFormat = function () {
        return 'dd.MM.yyyy';
    };
    /**Формат даты и времени для контролов*/
    CommonLib.getDateTimeFormatUniversal = function () {
        return 'yyyy-MM-dd HH:mm';
    };
    /**Формат даты для контролов*/
    CommonLib.getDateFormatUniversal = function () {
        return 'yyyy-MM-dd';
    };
    return CommonLib;
}());
export { CommonLib };
/**Дату в сстроку с временем*/
CommonLib.toDateTime = function () {
    var curr_seconds = ('00' + this.getSeconds());
    curr_seconds = curr_seconds.substr(curr_seconds.length - 2);
    var curr_minutes = ('00' + this.getMinutes());
    curr_minutes = curr_minutes.substr(curr_minutes.length - 2);
    var curr_hours = ('00' + this.getHours());
    curr_hours = curr_hours.substr(curr_hours.length - 2);
    var curr_date = ('00' + this.getDate());
    curr_date = curr_date.substr(curr_date.length - 2);
    var curr_month = ('00' + (this.getMonth() + 1));
    curr_month = curr_month.substr(curr_month.length - 2);
    var curr_year = ('0000' + this.getFullYear());
    curr_year = curr_year.substr(curr_year.length - 4);
    return curr_year + '-' + curr_month + '-' + curr_date + ' ' + curr_hours + ':' + curr_minutes + ':' + curr_seconds;
};
//# sourceMappingURL=common-lib.js.map
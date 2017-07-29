var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RestDictionary } from './rest-dictionary';
import { CommonLib } from './common-lib';
/**Базовый сервис*/
var ServiceProvider = (function () {
    function ServiceProvider(http) {
        this.http = http;
    }
    /**Удалить сущность*/
    ServiceProvider.prototype.deleteEntity = function (entity) {
        var entityUrl = RestDictionary.dictionary[entity.entityName];
        if (entityUrl == null) {
            throw new Error('Entity ' + entity.entityName + ' not found in RestDictionary');
        }
        else {
            return this.http.delete(entityUrl + '/' + entity[entity.keyName])
                .map(function (res) { return CommonLib.extractData(res, entity); })
                .catch(CommonLib.handleError);
        }
    };
    /**Сохранить сущность*/
    ServiceProvider.prototype.postEntity = function (entity) {
        var entityUrl = RestDictionary.dictionary[entity.entityName];
        if (entityUrl == null) {
            throw new Error('Entity ' + entity.entityName + ' not found in RestDictionary');
        }
        else {
            var saveData = {
                data: [entity]
            };
            return this.http.post(entityUrl, JSON.stringify(saveData), { headers: CommonLib.getPostHeaders() }).map(function (result) { return true; });
        }
    };
    /**Получить сущность*/
    ServiceProvider.prototype.getEntity = function (identity, factory) {
        var entityEmpty = factory.createEmpty();
        var entityUrl = RestDictionary.dictionary[entityEmpty.entityName];
        if (entityUrl == null) {
            throw new Error('Entity ' + entityEmpty.entityName + ' not found in RestDictionary');
        }
        else {
            return this.http.get(entityUrl + '/' + identity)
                .map(function (res) { return CommonLib.extractData(res, entityEmpty); })
                .map(function (data) {
                return data.Result.data[0];
            })
                .map(function (data) {
                var newEntity = factory.createEmpty();
                newEntity.fromRawObject(data);
                return newEntity;
            })
                .catch(CommonLib.handleError);
        }
    };
    return ServiceProvider;
}());
ServiceProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ServiceProvider);
export { ServiceProvider };
//# sourceMappingURL=service-provider.js.map
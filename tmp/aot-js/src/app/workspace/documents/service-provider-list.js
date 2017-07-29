var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
import { ServiceProvider } from './service-provider';
import { Http } from '@angular/http';
import { RestDictionary } from './rest-dictionary';
import { CommonLib } from './common-lib';
/**Список сущностей*/
var ServiceProviderList = (function (_super) {
    __extends(ServiceProviderList, _super);
    function ServiceProviderList(http) {
        return _super.call(this, http) || this;
    }
    /**Получить список*/
    ServiceProviderList.prototype.getEntityList = function (factory) {
        var entityEmpty = factory.createEmpty();
        var entityUrl = RestDictionary.dictionary[entityEmpty.entityName];
        if (entityUrl == null) {
            throw new Error('Entity ' + entityEmpty.entityName + ' not found in RestDictionary');
        }
        else {
            return this.http.get(entityUrl)
                .map(function (res) { return CommonLib.extractData(res, entityEmpty); })
                .map(function (data) {
                return data.Result.data;
            })
                .map(function (data) {
                var result = [];
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    var newEntity = factory.createEmpty();
                    newEntity.fromRawObject(item);
                    result.push(newEntity);
                }
                return result;
            })
                .catch(CommonLib.handleError);
        }
    };
    return ServiceProviderList;
}(ServiceProvider));
ServiceProviderList = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ServiceProviderList);
export { ServiceProviderList };
//# sourceMappingURL=service-provider-list.js.map
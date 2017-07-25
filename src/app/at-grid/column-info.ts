import {FilterInfo} from './filter-info';

export class ColumnInfo {
  constructor(public name: string, public comment: string, public filterInfo: FilterInfo = new FilterInfo('')) {
  }
}

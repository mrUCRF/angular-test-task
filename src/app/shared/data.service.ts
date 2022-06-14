import { Injectable } from '@angular/core';
import { DataType } from './data-type';
declare var require: any
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getAllData(): DataType[] {
    const data = require('./DATA.json')
    return data
  }
  }


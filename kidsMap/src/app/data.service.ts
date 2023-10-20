import { Injectable } from '@angular/core';
import { sightwords } from './data/sightWords';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getSightlist () {
    return sightwords
  }
}

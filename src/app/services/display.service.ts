// display.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  displayArray(array: any[]) {
 
    for (let user of array) {
      console.log(user);
    }
  
    console.log("Array is displayed by Display service");
  }
}

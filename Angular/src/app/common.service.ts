import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private data = new BehaviorSubject<number>(0);

  sendData(data: any) {
     this.data.next(data);
  }
  getData(): Observable<any> {
     return this.data.asObservable()
  }
}

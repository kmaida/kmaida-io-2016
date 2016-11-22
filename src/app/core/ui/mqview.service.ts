import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MqviewService {
  isLarge: boolean;
  private isLargeSource = new BehaviorSubject<boolean>(this.isLarge);

  isLarge$ = this.isLargeSource;

  setIsLarge(value: boolean) {
    this.isLargeSource.next(value);
    this.isLarge = value;
  }

  get getIsLarge(): boolean {
    return this.isLarge;
  }

}

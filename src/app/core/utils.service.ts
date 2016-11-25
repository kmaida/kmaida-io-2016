import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  greeting: string = 'Hello';

  alertGreeting(name: string) {
    alert(`${this.greeting}, ${name}!`);
  }

}

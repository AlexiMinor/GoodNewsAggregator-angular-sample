import { EMPTY, empty, Observable, tap, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: Observable<string[]> = of([]);

  constructor() { }

  getMessages(): Observable<string[]> {
    return this.messages;
  }

  add(message: string) {
    //not work as planned
    this.messages.pipe(tap(messages => {
      messages.push(message);
    }));
  }

  clear() {
    this.messages = of([]);
  }
}

import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: string[] = [];
  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesService.getMessages()
    .subscribe(messages => this.messages = messages)
  }

}

import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css']
})
export class TextComponentComponent implements OnInit {
  message: any;
  subscription: Subscription;
  constructor( private messageService:DataSharingService) {
    this.subscription = this.messageService.getMessage().subscribe(
      message => {
        this.message = message;
       });
   }

  ngOnInit() {
  }

}

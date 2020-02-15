import { Component, OnInit } from '@angular/core';
import {DataSharingService } from '../data-sharing.service'

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {

  constructor(private messageService:DataSharingService) { }
  count:number=0;
  ngOnInit() {
  }

  increment(){
    debugger;
    this.count=this.count+1;
    this.messageService.sendMessage(this.count.toString());

  }

}

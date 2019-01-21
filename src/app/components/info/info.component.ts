import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  title: String = 'app';
  request: {
    name: 'bob',
    date: '1/1/1',
    customerType: 'retail'
  };
  constructor() { }

  ngOnInit() {
  }

  submitForm = (request: any) => {};

}

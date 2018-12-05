import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {\

  sizeWords = 60;
  addAlert: string = 'alert-danger';
  textProperties: Object = {
    style: true
  };

  constructor() { }

  ngOnInit() {
  }

}

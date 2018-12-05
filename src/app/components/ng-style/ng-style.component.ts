import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {\

  sizeWords = 60;
  addAlert = 'alert-danger';
  textProperties: Object = {
    style: true
  };

  loading = false;
  constructor() { }

  ngOnInit() {
  }

  asyncProcess() {
    this.loading = true;

    setTimeout( () => this.loading = false, 3000);
  }

}

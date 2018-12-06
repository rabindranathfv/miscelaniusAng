import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number;

  constructor( private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( (params) => {
      // console.log(`ruta padre`);
      // console.log(params['id']);
      this.id = params['id'];
    });
   }

  ngOnInit() {
  }

}

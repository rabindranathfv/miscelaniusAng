import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe( (params) => {
      console.log(`ruta hija new-user`);
      console.log(params['id']);
      // this.id = params['id'];
    });
   }

  ngOnInit() {
  }

}

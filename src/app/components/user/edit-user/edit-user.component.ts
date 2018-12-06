import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe( (params) => {
      console.log(`ruta hija edit-user`);
      console.log(params['id']);
      // this.id = params['id'];
    });
   }

  ngOnInit() {
  }

}

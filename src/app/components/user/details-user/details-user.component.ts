import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe( (params) => {
      console.log(`ruta details-user`);
      console.log(params['id']);
      // this.id = params['id'];
    });
   }

  ngOnInit() {
  }

}

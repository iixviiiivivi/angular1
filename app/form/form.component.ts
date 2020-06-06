import { Component, OnInit } from '@angular/core';
import { user } from 'src/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  usermodel = new user();

  constructor() { }

  ngOnInit(): void {
  }


  submit(){
    console.log(this.usermodel);
  }
}

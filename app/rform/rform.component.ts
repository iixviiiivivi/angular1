import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  userform = new FormGroup({
    username: new FormControl('Ren', [Validators.required, Validators.pattern('^\\w{4,}$')]),
    password: new FormControl('1234', [Validators.required, Validators.pattern('^\\w{6,}$')]),
    phone: new FormControl('0900111222', [Validators.required, Validators.pattern('^09\\d{2}(-?\\d{3}){2}$')]),
    address: new FormGroup({
      city: new FormControl('桃園市', [Validators.required, Validators.pattern('^\\w{3,}$')]),
      street: new FormControl('同德六街', [Validators.required, Validators.pattern('^\\w{6,}$')])
    })
  });

  get username(){
    return this.userform.get('username');
  }

  get password(){
    return this.userform.get('password');
  }

  get phone(){
    return this.userform.get('phone');
  }

  get city(){
    return this.userform.get('address.city');
  }

  get street(){
    return this.userform.get('address.street');
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.userform);
  }
}

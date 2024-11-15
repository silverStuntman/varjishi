import { Component, OnInit } from '@angular/core';
import { ParentUser } from './parent-user';
import { ChildUser } from './child-user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { DisplayService } from './services/display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Grigol-Skhulukhia';

  Users = [
    {
      firstname: "Grigol",
      lastname: "Skhulukhia",
      age: 20
    },
    {
      firstname: "Saba",
      lastname: "Skhulukhia",
      age: 19
    },
    {
      firstname: "Damon",
      lastname: "Salvatore",
      age: 21
    },
    {
      firstname: "Stefan",
      lastname: "Salvatore",
      age: 25
    }
  ];

  Users2: ParentUser[] = [
    { 
      Id: 1,
      Firstname: 'Katerina',
      Lastname: 'Petrova',
      DateOfBirth: new Date("2004-05-15"),
      PhoneNumber: '597789456',
      Email: 'badbeatch@gmail.com'
    },
    { 
      Id: 1,
      Firstname: 'Elena',
      Lastname: 'Gilbert',
      DateOfBirth: new Date("2004-06-01"),
      PhoneNumber: '511457485',
      Email: 'doplegangerlast@gmail.com'
    },
    { 
      Id: 1,
      Firstname: 'Jeremy',
      Lastname: 'Gilbert',
      DateOfBirth: new Date("2003-02-07"),
      PhoneNumber: '522326587',
      Email: 'ghosthunter@gmail.com'
    },
    { 
      Id: 1,
      Firstname: 'Bonnie',
      Lastname: 'Bennet',
      DateOfBirth: new Date("1978-08-023"),
      PhoneNumber: '574895623',
      Email: 'fesmatos@gmail.com'
    },
    { 
      Id: 1,
      Firstname: 'Caroline',
      Lastname: 'Forbes',
      DateOfBirth: new Date("1999-12-30"),
      PhoneNumber: '511457485',
      Email: 'barbievamp@gmail.com'
    }     
  ];

  Users3: ChildUser[] = [];

  onInputDataChange(value:ChildUser[]){
   this.Users3 = value;
  }
  
  form: FormGroup;

  ngOnInit(){
      this.form = new FormGroup({
        Id: new FormControl(null,Validators.required),
        Firstname: new FormControl(null,[Validators.required, Validators.minLength(3)]),
        Lastname: new FormControl(null,[Validators.required, Validators.minLength(3)]),
        DateOfBirth: new FormControl(null,[Validators.required]),
        PhoneNumber: new FormControl(null,[Validators.required, Validators.minLength(9)]),
        Email: new FormControl(null,[Validators.required, Validators.minLength(8), Validators.email]),
      })
  }
  Users4: NewUser[] = [];
  onSubmit(){
    this.Users4.push(this.form.value);
    console.log(this.Users4)
  }
}

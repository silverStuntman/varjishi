import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildUser } from '../child-user';
import { DisplayService } from '../services/display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() inputData: any;
  @Output() inputDataChange = new EventEmitter<any>();
  ngOnInit(): void {
    this.inputDataChange.emit(this.Users3);
  }

  Users3: ChildUser[] = [
    {
      Id: 1,
      Firstname: 'Ian',
      Lastname: 'Sommerhalder',
      DateOfBirth: new Date("2004-05-15"),
      PhoneNumber: '597789456',
      Email: 'hellobrother@gmail.com'
    },
    {
      Id: 2,
      Firstname: 'Paul',
      Lastname: 'Weasley',
      DateOfBirth: new Date("2004-06-01"),
      PhoneNumber: '511457485',
      Email: 'polishhair@gmail.com'
    },
    {
      Id: 3,
      Firstname: 'Nina',
      Lastname: 'Dobrev',
      DateOfBirth: new Date("2003-02-07"),
      PhoneNumber: '522326587',
      Email: 'realvamp@gmail.com'
    },
    {
      Id: 4,
      Firstname: 'Lorenzo',
      Lastname: 'St.John',
      DateOfBirth: new Date("1978-08-023"),
      PhoneNumber: '574895623',
      Email: 'enzoavgustine@gmail.com'
    },
    {
      Id: 5,
      Firstname: 'Kat',
      Lastname: 'Graham',
      DateOfBirth: new Date("1999-12-30"),
      PhoneNumber: '511457485',
      Email: 'beautywitch@gmail.com'
    }
  ]
  constructor(private displayService: DisplayService) { }

  displayUsers() {
    this.displayService.displayArray(this.Users3);
  }
}

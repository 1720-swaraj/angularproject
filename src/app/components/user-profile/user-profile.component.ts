import {
  Component,
  EventEmitter,
  Input,
  Output,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';
import { User } from '../../models/usermodel';
import { CountryPipePipe } from '../../pipes/country-pipe.pipe';

function formatName(value: string) {
  return 'hi ' + value;
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CountryPipePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  @Input() name!: string;
  @Input({ transform: booleanAttribute }) isSingle!: boolean;
  @Input({ transform: numberAttribute }) salary!: number;
  @Input() title!: string;
  @Output() myEvent = new EventEmitter<string>();
  sendData() {
    this.myEvent.emit('coders never quite');
  }

  @Output() myEvent2 = new EventEmitter<boolean>();
  isActive: boolean = false;
  sendData2() {
    this.isActive = !this.isActive;
    this.myEvent2.emit(this.isActive);
  }

  @Output() objectEmiter = new EventEmitter<User>();

  updatedData() {
    this.objectEmiter.emit({ name: this.name, updatedSalary: 25000 });
  }

  phoneNo: number = 123456789;

  // @Input({ alias: 'UserName', transform: formatName }) name = ''; //by using alias
  // @Input({transform:booleanAttribute}) isSingle!: boolean;
  // @Input({transform:numberAttribute}) salary!: number;
  // name: string = 'swaraj';
  // initialValue = 'type somthing';

  // users = [
  //   { name: 'swaraj', isSingle: true, salary: 2000 },
  //   { name: 'omkar', isSingle: false, salary: 4000 },
  //   { name: 'ram', isSingle: false, salary: 8000 },
  // ];

  // onChange(e: Event) {
  //   const value = (e.target as HTMLInputElement).value;
  //   this.initialValue = value;
  //   console.log(this.initialValue);
  // }
}

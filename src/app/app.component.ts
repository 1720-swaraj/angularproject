import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from './models/usermodel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'binapp';
  users = [
    { name: 'swaraj', isSingle: true, salary: 2000 },
    { name: 'omkar', isSingle: false, salary: 4000 },
    { name: 'ram', isSingle: false, salary: 8000 },
  ];

  updatedRecivedData(objd:User){
    const index = this.users.findIndex(user=>user.name == objd.name)
    console.log(index)
    this.users[index].salary = objd.updatedSalary
    console.log(objd)
  }

  reciveData(e: string) {
    console.log(e);
  }

  recivedData2(e1: boolean) {
    console.log(e1);
  }
}

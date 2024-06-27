import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  imports: [FormsModule],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public accountService: AccountService) {}

  ngOnInit(): void {}

  login() {
    var userLoginString =
      '?UserName=' + this.model.username + '&Password=' + this.model.password;
    this.accountService.login(this.model, userLoginString).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this.accountService.logout()
  }
}

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  imports: [FormsModule, RouterLink, RouterLinkActive, TitleCasePipe],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    var userLoginString =
      '?UserName=' + this.model.username + '&Password=' + this.model.password;
    this.accountService.login(this.model, userLoginString).subscribe(
      (response) => {
        this.router.navigateByUrl('/members');
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}

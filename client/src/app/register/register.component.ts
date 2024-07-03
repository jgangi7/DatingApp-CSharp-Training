import { Component, OnInit, output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class RegisterComponent implements OnInit {
  cancelRegister = output<boolean>();
  model: any = {};

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  register() {
    var userLoginString =
      '?UserName=' + this.model.username + '&Password=' + this.model.password;
    this.accountService.register(this.model, userLoginString).subscribe(
      (response) => {
        console.log(response);
        this.cancel();
      },
      (error) => {
        this.toastr.error(error.error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}

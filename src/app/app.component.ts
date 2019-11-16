import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses = ['Stable', 'Critical', 'Finished'];
  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),
      status: new FormControl('Stable', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'test') {
      return {nameIsForbidden: true};
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'oksana.rudkevych@gmail.com') {
          resolve({emailIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}

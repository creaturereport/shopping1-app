import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { LoginService } from '../services/login.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public loginApi: LoginService, private formBuilder: FormBuilder) { }

  user: User = new User;
  
  profileForm = this.formBuilder.group({
    firstName: [""],
    lastName: [""],
    city: [""],
    email: [""],
    phoneNumber: [""],
    birthDate: [""],
  })


  isEditing = false //boolean to determine if user is editing.

  ngOnInit(): void {
   this.user = this.loginApi.loggedInUser;
   console.log(this.user)
  }
  
  onEdit(){
    this.setPlaceholders();
    this.isEditing = true;
  }

  setPlaceholders() {
    this.profileForm.setValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      city: this.user.city,
      email: this.user.email,
      phoneNumber: this.user.phoneNumber,
      birthDate: this.user.birthDate,
    })
  }

  loading = false //boolean for loading
  onSubmit() {
    console.log(this.profileForm)
    
    let payload = this.profileForm.value;
    console.log(payload)

    this.loginApi.editUser(payload, this.loginApi.loggedInUser.userName).subscribe((data: {}) => {
      console.log(data);
      this.loginApi.checkUser(this.loginApi.loggedInUser.userName).subscribe((data: User) => {
        this.loginApi.setUser(data)
        this.user = this.loginApi.loggedInUser
        console.log(data);
        this.loading = true;
      })

      setTimeout( () => {this.isEditing = false
                          this.loading = false}, 1000)
    })
  }

}

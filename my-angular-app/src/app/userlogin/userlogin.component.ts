import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-userlogin",
  templateUrl: "./userlogin.component.html",
  styleUrls: ["./userlogin.component.css"],
})
export class UserloginComponent implements OnInit {
  constructor(private _router: Router) {}
  loginUserData = {
    email: String,

    password: String,
  };
  ngOnInit(): void {}
  loginUser() {
    console.log("submitted");
  }
}

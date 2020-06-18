import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  categoryNameData = {
    categoryname: String,
  };
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {}
  addcategoryName() {
    this._authService.addcategory(this.categoryNameData).subscribe(
      (res) => {
        console.log(res);
        
        localStorage.setItem("token", res.token);
      },
      (err) => console.log(err)
    );
  }
}

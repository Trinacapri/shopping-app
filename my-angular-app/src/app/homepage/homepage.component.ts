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
  productNameData = {
    productname: String,
    productprice: Number,
    productdescription: String,
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
  addproductName() {
    this._authService.addproduct(this.productNameData).subscribe(
      (res) => {
        console.log(res);

        localStorage.setItem("token", res.token);
      },
      (err) => console.log(err)
    );
  }
  logoutUser() {
    localStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }
}

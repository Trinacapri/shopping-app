import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  categories: any[];
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this._authService.getCategories().subscribe((response) => {
      console.log(response);
      this.categories = response["data"];
      console.log(this.categories);
    });
  }
}

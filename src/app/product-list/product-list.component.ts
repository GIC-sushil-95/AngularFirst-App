import { Component, OnInit } from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  title="Product List"
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component ,AfterViewInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns:any=['Image','Product','Code','Available','Price','Rating'];
  dataSource=new MatTableDataSource<Iproduct>(PRODUCT_DATA);
  constructor() { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

}
const PRODUCT_DATA:Iproduct[]=[
  {Image:"Image 1",Product:"P1",Code:"0001",Available:"yes",Price:"2000",Rating:"5"},
  {Image:"Image 2",Product:"P2",Code:"0002",Available:"yes",Price:"6090",Rating:"5"},
  {Image:"Image 3",Product:"P3",Code:"0003",Available:"yes",Price:"2900",Rating:"4"},
  {Image:"Image 4",Product:"P4",Code:"0004",Available:"yes",Price:"2000",Rating:"5"},
  {Image:"Image 6",Product:"P5",Code:"0005",Available:"yes",Price:"5800",Rating:"5"},
  {Image:"Image 7",Product:"P6",Code:"0006",Available:"yes",Price:"2000",Rating:"5"},
  {Image:"Image 8",Product:"P7",Code:"0007",Available:"yes",Price:"8000",Rating:"9"},
  {Image:"Image 9",Product:"P8",Code:"0008",Available:"yes",Price:"7000",Rating:"5"},
  {Image:"Image 10",Product:"P9",Code:"0009",Available:"yes",Price:"2090",Rating:"5"}, 
  {Image:"Image 11",Product:"P1",Code:"0010",Available:"yes",Price:"2000",Rating:"3"},
  {Image:"Image 12",Product:"P10",Code:"0011",Available:"yes",Price:"4000",Rating:"2"},
  {Image:"Image 13",Product:"P11",Code:"0012",Available:"yes",Price:"1000",Rating:"5"},



]

export interface Iproduct{
  Image:string;
  Product:string;
  Code:string;
  Available:string;
  Price:string;
  Rating:string;
}

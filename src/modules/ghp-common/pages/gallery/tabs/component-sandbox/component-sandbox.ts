/* eslint-disable */
import { Component, OnInit } from "@angular/core";
import { RestProvider } from "modules/ghp-common/provider";

import {
  TColumn,
  TMetaData,
  TProduct,
  TProductResult,
} from "./models";

import { products } from "./products";

const getProducts = () => products.rows.map((p: any): any => {
  const { ProductId,
    Title,
    Price,
    PublishingCategory,
    LicenseCatgory,
    Series,
    Author,
    PubDate,
    Media,
    ISBN,
    ShortTitle,
    Publisher,
    Copyright, } = p;

  return {
    ProductId,
    Title,
    Price,
    PublishingCategory,
    LicenseCatgory,
    Series,
    Author,
    PubDate,
    Media,
    ISBN,
    ShortTitle,
    Publisher,
    Copyright,
  };
});

@Component({
  selector: 'component-sandbox',
  styleUrls: ['component-sandbox.scss'],
  templateUrl: 'component-sandbox.html',
})
export class ComponentSandbox implements OnInit {
  ProductsResult: TProductResult = new TProductResult();
  Products: Array<any> = [];
  loading: boolean = false;
  columns = [
    { field: 'ProductId', title: 'ProductId', width: 85 },
    { field: 'Author', title: 'Author', width: 200 },
    { field: 'Title', title: 'Title', width: 300 },
    { field: 'ShortTitle', title: 'ShortTitle', width: 200 },
    { field: 'Series', title: 'Series', width: 200 },
    { field: 'Media', title: 'Media', width: 100 },
    { field: 'Publisher', title: 'Publisher', width: 100 },
  ];

  constructor(private api: RestProvider) { }

  ngOnInit() {
    this.Products = getProducts();
  }
}
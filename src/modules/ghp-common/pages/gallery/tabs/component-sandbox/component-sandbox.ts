/* eslint-disable */
import { Component, OnInit } from "@angular/core";
import { RestProvider } from "modules/ghp-common/provider";

import {
  TColumn,
  TMetaData,
  TProduct,
  TProductResult,
} from "./models";


@Component({
  selector: 'component-sandbox',
  styleUrls: ['component-sandbox.scss'],
  templateUrl: 'component-sandbox.html',
})
export class ComponentSandbox implements OnInit {
  ProductsResult: TProductResult = new TProductResult();
  Products: Array<TProduct> = [];
  loading: boolean = false;

  constructor(private api: RestProvider) { }

  ngOnInit() {
    this.bindFunctions();
    this.loading = true;
    this.api
      .get('Products')
      .then(this.setProducts)
      .then(() => {
        this.loading = false;
      });
  }

  bindFunctions() {
    this.setProducts = this.setProducts.bind(this);
  }

  setProducts(products: TProductResult) {
    // this.ProductsResult = products;
    console.log(products.rows);
    this.Products = products.rows.slice(1, 1000);
  }
}
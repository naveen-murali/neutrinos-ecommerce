/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products: any;

  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_ProductService

  async fetchProductsFlow(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          products: true,
          productExist: this.products?.length || false,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_sPw3EKBCo4JZlibK(bh);
      //appendnew_next_fetchProductsFlow
      return (
        // formatting output variables
        {
          input: {},
          local: {
            products: bh.local.products,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BrZLLp4ob67CpKw7');
    }
  }

  async getProductsFlow(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          products: this.products || [],
        },
      };
      bh = this.sdService.__constructDefault(bh);
      //appendnew_next_getProductsFlow
      return (
        // formatting output variables
        {
          input: {},
          local: {
            products: bh.local.products,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PE4YpndhH60sKV9V');
    }
  }

  //appendnew_flow_ProductService_start

  async sd_sPw3EKBCo4JZlibK(bh) {
    try {
      this.products = this.products || [];
      bh = await this.checkProductExists(bh);
      //appendnew_next_sd_sPw3EKBCo4JZlibK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sPw3EKBCo4JZlibK');
    }
  }

  async checkProductExists(bh) {
    try {
      if (
        this.sdService.operators['false'](
          bh.local.productExist,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.fetchProducts(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v5m2p4M2HEywZ5gs');
    }
  }

  async fetchProducts(bh) {
    try {
      let requestOptions = {
        url: bh.system.environment.properties.GET_PRODUCTS_API,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_UzKF0oi3bkijvX1A(bh);
      //appendnew_next_fetchProducts
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sGclF6kqm0mvxwmB');
    }
  }

  async sd_UzKF0oi3bkijvX1A(bh) {
    try {
      this.products = bh.local.result.products;
      //appendnew_next_sd_UzKF0oi3bkijvX1A
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UzKF0oi3bkijvX1A');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_ProductService_Catch
}

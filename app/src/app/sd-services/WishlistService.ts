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
import * as sd_LRkQE69DI7XAP8D9 from './AuthService'; //_splitter_
import * as sd_rYc305z7WFjceXh0 from './AlertService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  public wishlist: any;

  constructor(
    private sd_rYc305z7WFjceXh0: sd_rYc305z7WFjceXh0.AlertService,
    private sd_LRkQE69DI7XAP8D9: sd_LRkQE69DI7XAP8D9.AuthService,
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

  //   service flows_WishlistService

  async fetchWishlist(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          wishlist: this.wishlist || {},
          wishlistReturn: this.wishlist || [],
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_Rh3crJmUdNHe6C4m(bh);
      //appendnew_next_fetchWishlist
      return (
        // formatting output variables
        {
          input: {},
          local: {
            wishlistReturn: bh.local.wishlistReturn,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_efTUAhyQzQ2dml7Y');
    }
  }

  async setWishlist(wishlist: any = [], ...others) {
    try {
      var bh: any = {
        input: {
          wishlist: wishlist,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.setWishlistScript(bh);
      //appendnew_next_setWishlist
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_E3N8N1CehMD03fBe');
    }
  }

  //appendnew_flow_WishlistService_start

  async sd_Rh3crJmUdNHe6C4m(bh) {
    try {
      this.wishlist = { list: {}, counst: 0 };
      bh = await this.sd_0ByxJX7hXeHJcGjn(bh);
      //appendnew_next_sd_Rh3crJmUdNHe6C4m
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Rh3crJmUdNHe6C4m');
    }
  }

  async sd_0ByxJX7hXeHJcGjn(bh) {
    try {
      let outputVariables = await this.sd_LRkQE69DI7XAP8D9.getUserDetails();
      bh.local.userDetails = outputVariables.local.userDetails;

      bh = await this.setHeaderScript(bh);
      //appendnew_next_sd_0ByxJX7hXeHJcGjn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0ByxJX7hXeHJcGjn');
    }
  }

  async setHeaderScript(bh) {
    try {
      const token = bh.local.userDetails.token;
      bh.headers = {
        Authorization: `Bearer ${token}`,
      };
      bh = await this.sd_F5A9C8kBDHRZjWia(bh);
      //appendnew_next_setHeaderScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_g3xbYtWuPhnr35y3');
    }
  }

  async sd_F5A9C8kBDHRZjWia(bh) {
    try {
      let requestOptions = {
        url: bh.system.environment.properties.WISHLIST_API,
        method: 'get',
        responseType: 'json',
        headers: bh.headers,
        params: {},
        body: undefined,
      };
      bh.wishlist = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_BXQBl03FamsOBTRO(bh);
      //appendnew_next_sd_F5A9C8kBDHRZjWia
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F5A9C8kBDHRZjWia');
    }
  }

  async sd_BXQBl03FamsOBTRO(bh) {
    try {
      let outputVariables = await this.setWishlist(bh.wishlist);

      //appendnew_next_sd_BXQBl03FamsOBTRO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BXQBl03FamsOBTRO');
    }
  }

  async setWishlistScript(bh) {
    try {
      bh.local.wishlist = {
        count: bh.input.wishlist.length,
        list: bh.input.wishlist.reduce((acc, value) => {
          acc[value._id] = value;
          return acc;
        }, {}),
      };

      bh = await this.sd_OtWYOFAm4IYdAz2Z(bh);
      //appendnew_next_setWishlistScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_esU6mu6WQVkNhzRK');
    }
  }

  async sd_OtWYOFAm4IYdAz2Z(bh) {
    try {
      this.wishlist = bh.local.wishlist;
      //appendnew_next_sd_OtWYOFAm4IYdAz2Z
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OtWYOFAm4IYdAz2Z');
    }
  }

  async sd_Scz1DS1RF0hE12tG(bh) {
    try {
      let outputVariables = await this.sd_rYc305z7WFjceXh0.showErrorAlert(
        bh.error.error.message
      );

      //appendnew_next_sd_Scz1DS1RF0hE12tG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Scz1DS1RF0hE12tG');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_lzMx6z5PUCMbFL07(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async sd_lzMx6z5PUCMbFL07(bh) {
    const nodes = ['sd_efTUAhyQzQ2dml7Y'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_Scz1DS1RF0hE12tG(bh);
      //appendnew_next_sd_lzMx6z5PUCMbFL07
      return true;
    }
    return false;
  }
  //appendnew_flow_WishlistService_Catch
}

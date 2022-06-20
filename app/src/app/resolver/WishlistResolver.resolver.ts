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
import * as sd_n4Yv9S5MlM5K5y7B from '../sd-services/WishlistService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class WishlistResolver {
  constructor(
    private sd_n4Yv9S5MlM5K5y7B: sd_n4Yv9S5MlM5K5y7B.WishlistService,
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

  //   service flows_WishlistResolver

  async resolve(navigationRoute, navigationRouteState) {
    try {
      var bh: any = this.sdService.__constructDefault({
        navigationRoute,
        navigationRouteState,
        local: { wishlist: [] },
      });
      bh = await this.callWishlistService(bh);
      //appendnew_next_resolve
      return { wishlist: bh.local.wishlist };
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hpycmNjAb3k0w3CN');
    }
  }

  //appendnew_flow_WishlistResolver_start

  async callWishlistService(bh) {
    try {
      let outputVariables = await this.sd_n4Yv9S5MlM5K5y7B.fetchWishlist();
      bh.local.wishlist = outputVariables.local.wishlistReturn;

      //appendnew_next_callWishlistService
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SPPprIBMup2YEPQp');
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
  //appendnew_flow_WishlistResolver_Catch
}

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { AuthService } from 'app/sd-services/AuthService'; //_splitter_
import { WishlistService } from 'app/sd-services/WishlistService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-NavBar',
  templateUrl: './NavBar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class NavBarComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_wf3OLClhKB9b7HqD(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_wf3OLClhKB9b7HqD(bh) {
    try {
      bh = this.sd_ZarG2ksw5qtJ51AB(bh);
      //appendnew_next_sd_wf3OLClhKB9b7HqD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wf3OLClhKB9b7HqD');
    }
  }

  //appendnew_flow_NavBarComponent_start

  sd_ZarG2ksw5qtJ51AB(bh) {
    try {
      const AuthServiceInstance: AuthService =
        this.__page_injector__.get(AuthService);
      this.page.userDetails = AuthServiceInstance['userDetails'];
      bh = this.sd_UyTPs4ZbPiWT9bT1(bh);
      //appendnew_next_sd_ZarG2ksw5qtJ51AB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZarG2ksw5qtJ51AB');
    }
  }

  sd_UyTPs4ZbPiWT9bT1(bh) {
    try {
      const WishlistServiceInstance: WishlistService =
        this.__page_injector__.get(WishlistService);
      this.page.wishlist = WishlistServiceInstance['wishlist'];
      //appendnew_next_sd_UyTPs4ZbPiWT9bT1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UyTPs4ZbPiWT9bT1');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
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
  //appendnew_flow_NavBarComponent_Catch
}

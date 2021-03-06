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
import { WishlistService } from 'app/sd-services/WishlistService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Product',
  templateUrl: './Product.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ProductComponent {
  @Input('product')
  public product: any = {};
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
      this.sd_JBfQDnpahqsN9TaB(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, { inWishlist: false });

    //append_listeners
  }

  sd_JBfQDnpahqsN9TaB(bh) {
    try {
      bh = this.sd_PMRJNrd3LiDVU7pw(bh);
      //appendnew_next_sd_JBfQDnpahqsN9TaB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JBfQDnpahqsN9TaB');
    }
  }

  //appendnew_flow_ProductComponent_start

  sd_PMRJNrd3LiDVU7pw(bh) {
    try {
      const WishlistServiceInstance: WishlistService =
        this.__page_injector__.get(WishlistService);
      this.page.wishlist = WishlistServiceInstance['wishlist'];
      bh = this.sd_m4r2M53f0AEledHn(bh);
      //appendnew_next_sd_PMRJNrd3LiDVU7pw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PMRJNrd3LiDVU7pw');
    }
  }

  sd_m4r2M53f0AEledHn(bh) {
    try {
      const page = this.page;
      page.inWishlist = page.wishlist.list[this.product._id] ? true : false;
      //appendnew_next_sd_m4r2M53f0AEledHn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m4r2M53f0AEledHn');
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
  //appendnew_flow_ProductComponent_Catch
}

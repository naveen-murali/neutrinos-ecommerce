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
      bh = this.sd_p3GsEppgencU5PFU(bh);
      //appendnew_next_sd_JBfQDnpahqsN9TaB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JBfQDnpahqsN9TaB');
    }
  }

  toggleFavIcon(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_pMaSf9HT11uUWAuU(bh);
      //appendnew_next_toggleFavIcon
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YmR7C5MqPpbgH8KV');
    }
  }

  //appendnew_flow_ProductComponent_start

  sd_p3GsEppgencU5PFU(bh) {
    try {
      //appendnew_next_sd_p3GsEppgencU5PFU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p3GsEppgencU5PFU');
    }
  }

  sd_pMaSf9HT11uUWAuU(bh) {
    try {
      this.page.inWishlist = !this.page.inWishlist;
      //appendnew_next_sd_pMaSf9HT11uUWAuU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pMaSf9HT11uUWAuU');
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

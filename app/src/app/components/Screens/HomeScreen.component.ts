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
import { ProductService } from 'app/sd-services/ProductService'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-HomeScreen',
  templateUrl: './HomeScreen.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class HomeScreenComponent {
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
      this.sd_3aMmbc7bhGDGH0Sa(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_3aMmbc7bhGDGH0Sa(bh) {
    try {
      bh = this.productService(bh);
      //appendnew_next_sd_3aMmbc7bhGDGH0Sa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3aMmbc7bhGDGH0Sa');
    }
  }

  //appendnew_flow_HomeScreenComponent_start

  productService(bh) {
    try {
      const ProductServiceInstance: ProductService =
        this.__page_injector__.get(ProductService);
      this.page.products = ProductServiceInstance['products'];
      //appendnew_next_productService
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U32lsY0CsMnseZ2C');
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
  //appendnew_flow_HomeScreenComponent_Catch
}

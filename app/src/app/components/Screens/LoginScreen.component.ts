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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-LoginScreen',
  templateUrl: './LoginScreen.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class LoginScreenComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_LfgtIOzfkLQ347kN(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, {});

    //append_listeners
  }

  sd_LfgtIOzfkLQ347kN(bh) {
    try {
      bh = this.sd_lQ6rWt2z7svon9uZ(bh);
      //appendnew_next_sd_LfgtIOzfkLQ347kN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LfgtIOzfkLQ347kN');
    }
  }

  onSignin(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_PApiJj2XVg4swR1I(bh);
      //appendnew_next_onSignin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8mhnZzsBstVmZfwh');
    }
  }

  //appendnew_flow_LoginScreenComponent_start

  sd_lQ6rWt2z7svon9uZ(bh) {
    try {
      this.page.email = undefined;
      this.page.password = undefined;
      //appendnew_next_sd_lQ6rWt2z7svon9uZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lQ6rWt2z7svon9uZ');
    }
  }

  sd_PApiJj2XVg4swR1I(bh) {
    try {
      const page = this.page;
      console.log(page.password);
      console.log(page.email);
      //appendnew_next_sd_PApiJj2XVg4swR1I
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PApiJj2XVg4swR1I');
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
  //appendnew_flow_LoginScreenComponent_Catch
}

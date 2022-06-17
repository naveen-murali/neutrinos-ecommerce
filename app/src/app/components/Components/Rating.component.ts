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
  selector: 'bh-Rating',
  templateUrl: './Rating.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class RatingComponent {
  @Input('rating')
  public rating: any = 0;
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
      this.sd_kpav9xEs0VRvZ45L(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    Object.assign(this.page, { starRating: [] });

    //append_listeners
  }

  sd_kpav9xEs0VRvZ45L(bh) {
    try {
      bh = this.setVariables(bh);
      //appendnew_next_sd_kpav9xEs0VRvZ45L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kpav9xEs0VRvZ45L');
    }
  }

  getRating(position = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { position: position };
      bh.local = { rating: '0%' };
      bh = this.setRatingScript(bh);
      //appendnew_next_getRating
      return bh.local.rating;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J4cMqSjHe5rgJSZn');
    }
  }

  getStarCount(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = { starCount: [] };
      bh = this.getStarCountScript(bh);
      //appendnew_next_getStarCount
      return bh.local.starCount;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pVuy9iHnd5nW1Fcy');
    }
  }

  getId(position = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { position: position };
      bh.local = { id: '' };
      bh = this.getIdScript(bh);
      //appendnew_next_getId
      return bh.local.id;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9NcqFlMsOmsSFmwt');
    }
  }

  getFill(position = 0, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { position: position };
      bh.local = { fill: '' };
      bh = this.getFillScript(bh);
      //appendnew_next_getFill
      return bh.local.fill;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SqXqxuCpsVd2B4AW');
    }
  }

  //appendnew_flow_RatingComponent_start

  setVariables(bh) {
    try {
      this.page.rating = 0;
      this.page.currentBase = 5;
      this.page.newBase = 0;
      this.page.before = 0;
      this.page.after = 0;
      bh = this.setStarRating(bh);
      //appendnew_next_setVariables
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7kydTR9wxNGAwXTV');
    }
  }

  setStarRating(bh) {
    try {
      const page = this.page;
      this.rating = page.newBase
        ? (this.rating / page.currentBase) * page.newBase
        : this.rating;

      page.before = Math.floor(this.rating);
      page.after = (this.rating % 1) * 100;
      //appendnew_next_setStarRating
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kr8mLd58wiCDXDSo');
    }
  }

  setRatingScript(bh) {
    try {
      const page = this.page;
      const position = bh.input.position;

      bh.local.rating =
        page.before > position
          ? '100%'
          : page.before === position
          ? `${page.after}%`
          : '0%';
      //appendnew_next_setRatingScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Mkr6yfLjyGbEBlyy');
    }
  }

  getStarCountScript(bh) {
    try {
      const page = this.page;
      bh.local.starCount = new Array(page.newBase || page.currentBase);
      //appendnew_next_getStarCountScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s4gSgadFUHOOLU0h');
    }
  }

  getIdScript(bh) {
    try {
      const page = this.page;
      const position = bh.input.position;

      bh.local.id = `${this.rating}-${position}-ratingGradiant`;
      //appendnew_next_getIdScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7ixKPIMeqvo6JPj0');
    }
  }

  getFillScript(bh) {
    try {
      const page = this.page;
      const position = bh.input.position;
      bh.local.fill = `url(#${this.getId(position)})`;
      //appendnew_next_getFillScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ujLU9ipHHuPBaZJ0');
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
  //appendnew_flow_RatingComponent_Catch
}

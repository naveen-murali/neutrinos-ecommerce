//append_imports_start

import * as sd_rYc305z7WFjceXh0 from 'app/sd-services/AlertService'; //_splitter_
import * as sd_LRkQE69DI7XAP8D9 from 'app/sd-services/AuthService'; //_splitter_
import * as sd_fcayquMyZ58eyZyP from 'app/sd-services/ProductService'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_rYc305z7WFjceXh0: sd_rYc305z7WFjceXh0.AlertService,
    private sd_LRkQE69DI7XAP8D9: sd_LRkQE69DI7XAP8D9.AuthService,
    private sd_fcayquMyZ58eyZyP: sd_fcayquMyZ58eyZyP.ProductService
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}

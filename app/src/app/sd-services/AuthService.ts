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
import * as sd_rYc305z7WFjceXh0 from './AlertService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userDetails: any;

  constructor(
    private sd_rYc305z7WFjceXh0: sd_rYc305z7WFjceXh0.AlertService,
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

  //   service flows_AuthService

  async signInFlow(email = '', password = '', ...others) {
    try {
      var bh: any = {
        input: {
          email: email,
          password: password,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.pOSTApi_users(bh);
      //appendnew_next_signInFlow
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eupiMeoTEFG5WM7C');
    }
  }

  async getUserDetails(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          userDetails: this.userDetails || null,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getUserDetailsSwitch(bh);
      //appendnew_next_getUserDetails
      return (
        // formatting output variables
        {
          input: {},
          local: {
            userDetails: bh.local.userDetails,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AnwjDpS3RjVNQNID');
    }
  }

  async logout(...others) {
    try {
      var bh: any = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.logoutStorage(bh);
      //appendnew_next_logout
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_22ATPDE6PJSqv7Ih');
    }
  }

  //appendnew_flow_AuthService_start

  async pOSTApi_users(bh) {
    try {
      let requestOptions = {
        url: bh.system.environment.properties.SIGNIN_API,
        method: 'post',
        responseType: 'json',
        headers: { 'Content-Type': 'application/json' },
        params: {},
        body: bh.input,
      };
      bh.userDetails = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_TcJF1GMN5ZBj1tq5(bh);
      //appendnew_next_pOSTApi_users
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QExZhaFED4qPVAzM');
    }
  }

  async sd_TcJF1GMN5ZBj1tq5(bh) {
    try {
      this.userDetails = bh.userDetails;
      bh = await this.setUserDetailsStorage(bh);
      //appendnew_next_sd_TcJF1GMN5ZBj1tq5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TcJF1GMN5ZBj1tq5');
    }
  }

  async setUserDetailsStorage(bh) {
    try {
      localStorage.setItem('user', JSON.stringify(bh.userDetails));
      bh = await this.sd_O5jU4FOgoj9zCXTD(bh);
      //appendnew_next_setUserDetailsStorage
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KfgFtIuCnFNPLgpc');
    }
  }

  async sd_O5jU4FOgoj9zCXTD(bh) {
    try {
      bh.successMessage = `Hi, ${bh.userDetails.name}`;
      bh = await this.sd_bp5WLsvqZZKMq7oK(bh);
      //appendnew_next_sd_O5jU4FOgoj9zCXTD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O5jU4FOgoj9zCXTD');
    }
  }

  async sd_bp5WLsvqZZKMq7oK(bh) {
    try {
      let outputVariables = await this.sd_rYc305z7WFjceXh0.showSuccessAlert(
        bh.successMessage
      );

      bh = await this.navigateToHome(bh);
      //appendnew_next_sd_bp5WLsvqZZKMq7oK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bp5WLsvqZZKMq7oK');
    }
  }

  async navigateToHome(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home');
      await this.router.navigate([
        this.sdService.formatPathWithParams(path, undefined),
      ]);
      //appendnew_next_navigateToHome
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5ODSl4CEHEmVGyGo');
    }
  }

  async sd_IrWKuju7ikQP6lhY(bh) {
    try {
      let outputVariables = await this.sd_rYc305z7WFjceXh0.showErrorAlert(
        bh.error.error.message
      );

      //appendnew_next_sd_IrWKuju7ikQP6lhY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IrWKuju7ikQP6lhY');
    }
  }

  async getUserDetailsSwitch(bh) {
    try {
      if (
        this.sdService.operators['null'](
          bh.local.userDetails,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getDetailsStorage(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GBqKEzG83kpS5Jfl');
    }
  }

  async getDetailsStorage(bh) {
    try {
      bh.local.userDetails = JSON.parse(localStorage.getItem('user'));
      bh = await this.checkUserDetails(bh);
      //appendnew_next_getDetailsStorage
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1pR0dwbw2kizF7K7');
    }
  }

  async checkUserDetails(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          bh.local.userDetails,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_eAek2qm7Fs4Ei4lY(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RmlM5CACaMvcn0jj');
    }
  }

  async sd_eAek2qm7Fs4Ei4lY(bh) {
    try {
      this.userDetails = bh.local.userDetails;
      //appendnew_next_sd_eAek2qm7Fs4Ei4lY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eAek2qm7Fs4Ei4lY');
    }
  }

  async logoutStorage(bh) {
    try {
      localStorage.removeItem('user');
      bh = await this.sd_BWhcVDoxUmCw3e41(bh);
      //appendnew_next_logoutStorage
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tNHOuJBthsXqyild');
    }
  }

  async sd_BWhcVDoxUmCw3e41(bh) {
    try {
      this.userDetails = null;
      bh = await this.sd_yIiMQnCYcWmCszIC(bh);
      //appendnew_next_sd_BWhcVDoxUmCw3e41
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BWhcVDoxUmCw3e41');
    }
  }

  async sd_yIiMQnCYcWmCszIC(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.router.navigate([
        this.sdService.formatPathWithParams(path, undefined),
      ]);
      //appendnew_next_sd_yIiMQnCYcWmCszIC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yIiMQnCYcWmCszIC');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.signInCatch(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async signInCatch(bh) {
    const nodes = ['sd_eupiMeoTEFG5WM7C'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_IrWKuju7ikQP6lhY(bh);
      //appendnew_next_signInCatch
      return true;
    }
    return false;
  }
  //appendnew_flow_AuthService_Catch
}

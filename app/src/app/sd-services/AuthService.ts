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

  async signIn(email = '', password = '', ...others) {
    try {
      var bh: any = {
        input: {
          email: email,
          password: password,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_yktOb0IDECjktcvG(bh);
      //appendnew_next_signIn
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

  //appendnew_flow_AuthService_start

  async sd_yktOb0IDECjktcvG(bh) {
    try {
      bh.local.userDetails = bh.input;

      bh = await this.pOSTApi_users(bh);
      //appendnew_next_sd_yktOb0IDECjktcvG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yktOb0IDECjktcvG');
    }
  }

  async pOSTApi_users(bh) {
    try {
      let requestOptions = {
        url: bh.system.environment.properties.SIGNIN_API,
        method: 'post',
        responseType: 'json',
        headers: { 'Content-Type': 'application/json' },
        params: {},
        body: bh.local.userDetails,
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
      bh = await this.sd_KfgFtIuCnFNPLgpc(bh);
      //appendnew_next_sd_TcJF1GMN5ZBj1tq5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TcJF1GMN5ZBj1tq5');
    }
  }

  async sd_KfgFtIuCnFNPLgpc(bh) {
    try {
      localStorage.setItem('user', JSON.stringify(bh.userDetails));
      bh = await this.sd_O5jU4FOgoj9zCXTD(bh);
      //appendnew_next_sd_KfgFtIuCnFNPLgpc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KfgFtIuCnFNPLgpc');
    }
  }

  async sd_O5jU4FOgoj9zCXTD(bh) {
    try {
      console.log(this.userDetails);
      console.log(bh);

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

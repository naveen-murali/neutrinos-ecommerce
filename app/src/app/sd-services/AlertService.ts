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
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
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

  //   service flows_AlertService

  async showErrorAlert(message = '', ...others) {
    try {
      var bh: any = {
        input: {
          message: message,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.errorAlertSnackBar(bh);
      //appendnew_next_showErrorAlert
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_l5vqWgRi6Zokyk0J');
    }
  }

  async showSuccessAlert(message = '', ...others) {
    try {
      var bh: any = {
        input: {
          message: message,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.successAlertSnackBar(bh);
      //appendnew_next_showSuccessAlert
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U8gv03p0ho8Vxt4Z');
    }
  }

  //appendnew_flow_AlertService_start

  async errorAlertSnackBar(bh) {
    try {
      this.matSnackBar.open(bh.input.message, 'Close', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
        panelClass: 'error-alert'
          .split(',')
          .map((v: string) => v.trim())
          .filter(Boolean),
      });
      //appendnew_next_errorAlertSnackBar
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ENRfw3TQ70xI1LJD');
    }
  }

  async successAlertSnackBar(bh) {
    try {
      this.matSnackBar.open(bh.input.message, 'Close', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: 'success-alert'
          .split(',')
          .map((v: string) => v.trim())
          .filter(Boolean),
      });
      //appendnew_next_successAlertSnackBar
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vv4lVEG2MpZw0RdO');
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
  //appendnew_flow_AlertService_Catch
}

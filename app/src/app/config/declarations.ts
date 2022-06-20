import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-ProductDetailsScreenComponent
import { ProductDetailsScreenComponent } from '../components/Screens/ProductDetailsScreen.component';
//CORE_REFERENCE_IMPORT-WishlistResolver
import { WishlistResolver } from '../resolver/WishlistResolver.resolver';
//CORE_REFERENCE_IMPORT-WishlistService
import { WishlistService } from '../sd-services/WishlistService';
//CORE_REFERENCE_IMPORT-AuthSignCanActivate
import { AuthSignCanActivate } from '../canActivate/AuthSignCanActivate.canActivate';
//CORE_REFERENCE_IMPORT-AuthCanActivate
import { AuthCanActivate } from '../canActivate/AuthCanActivate.canActivate';
//CORE_REFERENCE_IMPORT-WishlistScreenComponent
import { WishlistScreenComponent } from '../components/Screens/WishlistScreen.component';
//CORE_REFERENCE_IMPORT-AlertService
import { AlertService } from '../sd-services/AlertService';
//CORE_REFERENCE_IMPORT-RatingComponent
import { RatingComponent } from '../components/Components/Rating.component';
//CORE_REFERENCE_IMPORT-ProductResolver
import { ProductResolver } from '../resolver/ProductResolver.resolver';
//CORE_REFERENCE_IMPORT-SignupScreenComponent
import { SignupScreenComponent } from '../components/Screens/SignupScreen.component';
//CORE_REFERENCE_IMPORT-ProductService
import { ProductService } from '../sd-services/ProductService';
//CORE_REFERENCE_IMPORT-AuthService
import { AuthService } from '../sd-services/AuthService';
//CORE_REFERENCE_IMPORT-ProductComponent
import { ProductComponent } from '../components/Components/Product.component';
//CORE_REFERENCE_IMPORT-LoginScreenComponent
import { LoginScreenComponent } from '../components/Screens/LoginScreen.component';
//CORE_REFERENCE_IMPORT-NavBarComponent
import { NavBarComponent } from '../components/Components/NavBar.component';
//CORE_REFERENCE_IMPORT-HomeScreenComponent
import { HomeScreenComponent } from '../components/Screens/HomeScreen.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ProductDetailsScreenComponent
  ProductDetailsScreenComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-WishlistScreenComponent
  WishlistScreenComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-RatingComponent
  RatingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-SignupScreenComponent
  SignupScreenComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ProductComponent
  ProductComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-LoginScreenComponent
  LoginScreenComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-NavBarComponent
  NavBarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-HomeScreenComponent
  HomeScreenComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-WishlistResolver
  WishlistResolver,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-WishlistService
  WishlistService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-AuthSignCanActivate
  AuthSignCanActivate,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-AuthCanActivate
  AuthCanActivate,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-AlertService
  AlertService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-ProductResolver
  ProductResolver,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-ProductService
  ProductService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-AuthService
  AuthService,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: HomeScreenComponent,
    resolve: { products: ProductResolver, wishlist: WishlistResolver },
    canActivate: [AuthCanActivate],
  },
  {
    path: 'login',
    component: LoginScreenComponent,
    canActivate: [AuthSignCanActivate],
  },
  {
    path: 'wishlist',
    component: WishlistScreenComponent,
    canActivate: [AuthCanActivate],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END

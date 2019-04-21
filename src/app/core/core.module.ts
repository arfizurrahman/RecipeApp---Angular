import { AuthInterceptor } from './../shared/auth.interceptor';
import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

 
 @NgModule({
     declarations: [
         HeaderComponent,
         HomeComponent
     ],
     imports: [
         SharedModule,
         AppRoutingModule
     ],
     exports: [
         AppRoutingModule,
         HeaderComponent
     ],
     providers: [
        ShoppingListService, 
        RecipeService, 
        DataStorageService, 
        AuthService, 
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
     ]
 })
 export class CoreModule {

 }
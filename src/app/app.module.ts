import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorporateRegisterComponent } from './corporate-register/corporate-register.component';
import { CorporateLoginComponent } from './corporate-login/corporate-login.component';
import { SmallScaleRegisterComponent } from './small-scale-register/small-scale-register.component';
import { SmallScaleLoginComponent } from './small-scale-login/small-scale-login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const appRoot: Routes=[{path:'',component:CorporateRegisterComponent},
{path:'corporateRegister',component:CorporateRegisterComponent},
{path:'corporateLogin',component:CorporateLoginComponent},
{path:'smallScaleRegister',component:SmallScaleRegisterComponent},
{path:'smallScaleLogin',component:SmallScaleLoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CorporateRegisterComponent,
    CorporateLoginComponent,
    SmallScaleRegisterComponent,
    SmallScaleLoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

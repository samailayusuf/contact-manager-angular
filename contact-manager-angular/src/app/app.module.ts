import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    AboutComponent,
    EditComponent,
    NavbarComponent,
    FooterComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: HomeComponent
      },
      { 
        path: 'add',
        component: AddComponent
      },
    { 
      path: 'about',
      component: AboutComponent
    },
    { 
      path: 'edit',
      component: EditComponent
    }
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

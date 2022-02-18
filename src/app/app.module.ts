import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Route[] = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'completati',
    component: CompletatiPage,
  },
];
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletatiPage } from './pages/completati/completati.page';
import { HomePage } from './pages/home/home.page';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HomePage, CompletatiPage, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Mfe1Component } from './mfe1/mfe1.component';
import { Mfe1Module } from './mfe1/mfe1.module';

export const routes: Routes = [
  {
    path: 'mfe1',
    component: Mfe1Component,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Mfe1Module, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mfe1Component } from './mfe1.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: Mfe1Component,
  },
];

@NgModule({
  declarations: [Mfe1Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Mfe1Module {}

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeeklyComponent }   from './weekly.components';
import { CategoryComponent } from './category.components';

const routes: Routes = [
  { path: '', redirectTo: '/weekly', pathMatch: 'full' },
  { path: 'weekly',  component: WeeklyComponent },
  { path: 'category',  component: CategoryComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
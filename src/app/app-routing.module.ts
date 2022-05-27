import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZenSampleComponent } from './zen-sample/zen-sample.component';

const routes: Routes = [
  {
    path: '',
    component: ZenSampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteDetailsPage } from './quote-details.page';

const routes: Routes = [
  {
    path: '',
    component: QuoteDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD
export class QuoteDetailsPageRoutingModule {}
=======
export class QuoteDetailsPageRoutingModule {}
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b

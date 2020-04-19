import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m=> m.TabsPageModule)},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule { }
=======
export class AppRoutingModule { }
>>>>>>> 0d1c34675525b1e9da05218721bd6ba46317396b

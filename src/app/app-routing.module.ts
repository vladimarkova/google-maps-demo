import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GoogleMapsBasicComponent } from './components/google-maps-basic/google-maps-basic.component';
import { GoogleMapsTestComponent } from './components/google-maps-test/google-maps-test.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: '/'
  // },
  {
    path:'google-maps-basic',
    component: GoogleMapsBasicComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEntryComponent } from './home-entry/home-entry.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeEntryComponent },
  {
    path: 'detail',
    loadChildren: () => import('./home-detail/home-detail.module').then(m => m.HomeDetailModule)
  },
  {path: '404', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

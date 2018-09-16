import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'categories',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'play/:category',
    loadChildren: './play/play.module#PlayPageModule'
  },
  {
    path: 'upload',
    loadChildren: './upload/upload.module#UploadPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

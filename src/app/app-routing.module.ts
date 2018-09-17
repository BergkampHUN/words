import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    loadChildren: './categories/categories.module#CategoriesPageModule'
  },
  { path: 'play/:category',
    loadChildren: './play/play.module#PlayPageModule'
  },
  {
    path: 'upload',
    loadChildren: './upload/upload.module#UploadPageModule'
  },
  {
    path: 'words-list',
    loadChildren: './words-list/words-list.module#WordsListPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

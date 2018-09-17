import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category.interface';


@Component({
  selector: 'app-list',
  templateUrl: 'categories.page.html',
  styleUrls: ['categories.page.scss']
})
export class CategoriesPage implements OnInit {
  private categoryCollection: AngularFirestoreCollection<Category>;
  public categories: Observable<Category[]>;

  constructor(
    private db: AngularFirestore,
  ) {
    this.categoryCollection = this.db.collection('categories');
    this.categories = this.categoryCollection.valueChanges();
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}

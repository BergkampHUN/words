import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../../interfaces/category.interface';
import { Observable } from 'rxjs';
import { Word } from '../../interfaces/words.interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  public category: string;
  public originalWord: string;
  public translateWord: string;
  public categories: Observable<Category[]>;
  private categoryCollection: AngularFirestoreCollection<Category>;
  private wordsCollection: AngularFirestoreCollection<Word>;

  constructor(
    private db: AngularFirestore,
    public toastController: ToastController
  ) {
    this.categoryCollection = this.db.collection('categories');
    this.categories = this.categoryCollection.valueChanges();
    this.wordsCollection = db.collection('words');
  }

  ngOnInit() {
  }

  public save(): void {
    const newWord = {
      category: this.category,
      original: this.originalWord,
      original_language: 'ru',
      translate: this.translateWord,
      translate_language: 'hu',
    };
    this.wordsCollection.add(newWord).then(success => {
      this.presentToast();
      this.reset();
    });
  }

  private async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your word has been saved.',
      duration: 2000
    });
    toast.present();
  }

  private reset(): void {
    this.originalWord = '';
    this.translateWord = '';

  }

}

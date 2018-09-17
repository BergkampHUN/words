import { Component, OnInit } from '@angular/core';
import { Word } from '../../interfaces/words.interface';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.page.html',
  styleUrls: ['./words-list.page.scss'],
})
export class WordsListPage implements OnInit {
  public words: Observable<Word[]>;
  private wordsCollection: AngularFirestoreCollection<Word>;


  constructor(
    private db: AngularFirestore,
  ) {
    this.wordsCollection = db.collection('words');
    this.words = this.wordsCollection.valueChanges();
  }

  ngOnInit() {
  }

}

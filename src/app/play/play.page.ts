import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Word } from '../../interfaces/words.interface';
import { NavController, Content } from '@ionic/angular';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  @ViewChild(Content) public content: Content;
  public word: Word;
  public answer: string;
  public categoryName: string;
  public status: string = 'default';
  public submitted: boolean = false;
  public correctWords: Word[] = [];
  public wrongWords: Word[] = [];
  public showResultPage: boolean = false;
  private index: number = 0;
  private words: Word[];
  private wordsCollection: AngularFirestoreCollection<Word>;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private nav: NavController,
  ) {
    this.categoryName = this.route.snapshot.params.category;
    this.wordsCollection = db.collection('words', ref => ref.where('category', '==', this.categoryName));
    this.wordsCollection.valueChanges().subscribe(words => {
      this.words = words.sort(function () {
        return .5 - Math.random();
      });
      this.word = this.words[0];
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.answer === '') {
      return false;
    } else {
      this.submitted = true;
    }

    if (this.answer === this.word.translate) {
      this.status = 'correct';
      this.correctWords.push(this.word);
    } else {
      this.status = 'wrong';
      this.wrongWords.push(this.word);
    }
  }

  next() {
    if (this.index < this.words.length - 1) {
      this.reset();
      this.index++;
      this.word = this.words[this.index];
    } else {
      this.showResultPage = true;
      // this.content.resize();
      // this.nav.goBack();
    }
  }

  reset() {
    this.status = 'default';
    this.submitted = false;
    this.answer = '';
  }

}

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsListPage } from './words-list.page';

describe('WordsListPage', () => {
  let component: WordsListPage;
  let fixture: ComponentFixture<WordsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

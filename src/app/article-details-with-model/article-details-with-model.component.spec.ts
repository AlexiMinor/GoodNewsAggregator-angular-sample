import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailsWithModelComponent } from './article-details-with-model.component';

describe('ArticleDetailsWithModelComponent', () => {
  let component: ArticleDetailsWithModelComponent;
  let fixture: ComponentFixture<ArticleDetailsWithModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetailsWithModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailsWithModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

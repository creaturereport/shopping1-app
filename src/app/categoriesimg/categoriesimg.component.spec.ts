import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesimgComponent } from './categoriesimg.component';

describe('CategoriesimgComponent', () => {
  let component: CategoriesimgComponent;
  let fixture: ComponentFixture<CategoriesimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLitComponent } from './user-lit.component';

describe('UserLitComponent', () => {
  let component: UserLitComponent;
  let fixture: ComponentFixture<UserLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

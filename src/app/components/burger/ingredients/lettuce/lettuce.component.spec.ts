import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettuceComponent } from './lettuce.component';

describe('LettuceComponent', () => {
  let component: LettuceComponent;
  let fixture: ComponentFixture<LettuceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettuceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettuceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

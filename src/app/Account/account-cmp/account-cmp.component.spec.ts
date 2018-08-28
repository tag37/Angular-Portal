import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCmpComponent } from './account-cmp.component';

describe('AccountCmpComponent', () => {
  let component: AccountCmpComponent;
  let fixture: ComponentFixture<AccountCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

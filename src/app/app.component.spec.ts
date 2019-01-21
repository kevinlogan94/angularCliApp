import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// router-outlet fix from https://github.com/coreui/coreui-free-bootstrap-admin-template/issues/202#issuecomment-316686130
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

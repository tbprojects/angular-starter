import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '@testing/testing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should render app name', () => {
    expect(fixture.nativeElement.textContent).toContain('Angular app');
  });
});

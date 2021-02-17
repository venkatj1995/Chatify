import { TestBed, async , ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  }));
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'Login page'`, async(() => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Login page');
  // }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Sign in');
  }));

  it('On submit button Click,check username and password', async(() => {
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.query(By.css('#signin'));
    let Username = fixture.debugElement.query(By.css('#username'));

    // let p = fixture.debugElement.nativeElement.querySelector('p');
    


    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.Username).toBeDefined() ;
      // expect(p.textContent).toBe('Mahesh');
     // expect(Username.nativeElement.value).toContain('text');

    });
  }));
});

// ng test --include='**/login/*login.component.spec.ts'
//   "node_modules/jquery/dist/jquery.min.js"
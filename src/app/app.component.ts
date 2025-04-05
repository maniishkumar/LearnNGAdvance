import { Component, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver, AfterViewInit, ComponentRef } from '@angular/core';

import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit, AfterViewInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef | undefined;

  constructor(
    private vr: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit(): void {
    console.log('Entry is: ', this.entry);
    setTimeout(() => {
      const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
      const component = this.entry?.createComponent(authFormFactory);
      // this.vr.createEmbeddedView(this.entry, 0);
    }, 0);
  }

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry?.createComponent(authFormFactory);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}

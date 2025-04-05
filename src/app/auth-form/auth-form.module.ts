import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { FormsModule } from '@angular/forms';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';



@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent,
    AuthRememberComponent
  ],
  entryComponents: [AuthFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthFormModule { }

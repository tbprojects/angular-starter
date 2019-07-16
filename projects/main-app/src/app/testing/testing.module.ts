import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  exports: [
    NoopAnimationsModule,
    RouterTestingModule,
    SharedModule,
  ]
})
export class TestingModule { }

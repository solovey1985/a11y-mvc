import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ContrastComponent } from './components/contrast/contrast.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { PageComponent } from './components/page/page.component';
import { TocComponent } from './components/toc/toc.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    ContrastComponent,
    HeaderComponent,
    ContentComponent,
    PageComponent,
    TocComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

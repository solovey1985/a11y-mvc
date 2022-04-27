import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ContrastComponent } from './components/contrast/contrast.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  { path: 'keyboard', component: KeyboardComponent },
  { path: 'contrast', component: ContrastComponent },
  { path: 'contrast/:id', component: ContrastComponent },
  {
    path: 'content',
    component: ContentComponent,
    children: [
      {
        path: 'page/:id',
        component: PageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

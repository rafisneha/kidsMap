import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SightwordsComponent } from './sightwords/sightwords.component';
import { VowelsComponent } from './vowels/vowels.component';


const routes: Routes = [
  {path: 'sightwords', component: SightwordsComponent},
  {path: 'vowels', component: VowelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

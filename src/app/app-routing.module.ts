import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { Hello1Component } from './components/hello1/hello1.component';
import { Hello2Component } from './components/hello2/hello2.component';


const appRoutes: Routes =  [
  { path: 'hello1', component: Hello1Component },
  { path: 'hello2', component: Hello2Component },
  { path: '', redirectTo: '/hello1', pathMatch: 'full'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

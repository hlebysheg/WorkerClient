import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { WorkersComponent } from './workers/workers.component';

const routes: Routes = [
  { 
    path: 'workers', 
    component: WorkersComponent,
  },
  { 
    path: '', 
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

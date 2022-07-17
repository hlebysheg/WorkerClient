import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { WorkersComponent } from './workers/workers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { SortPipe } from 'src/app/pipe/filter.pipe';
import { WorkerService } from './workers/workers.service';
import { ModalConf } from './modal-succes/modal-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    WorkersComponent,
    ModalAddComponent,
    FooterComponent,
    SortPipe,
    ModalConf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
  ],
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

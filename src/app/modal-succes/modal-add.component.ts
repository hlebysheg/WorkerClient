import { WorkerService } from './../workers/workers.service';
import { IWorker } from './../workers/Iworkers.interface';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalConf implements OnInit {

  @Input() id: number = 0

  constructor(public activeModal: NgbActiveModal, private workerServ: WorkerService) {}

  ngOnInit(): void {

  }
    
  ngOnDestroy(){
  }
  delete(){
    this.workerServ.delete(this.id)
  }
}

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
export class ModalAddComponent implements OnInit {

    @Input() public worker: IWorker = {
      fullName: '', 
      salary: 0, 
      id: 0,
      birhtDay: '',
      workDay: '',
      depName: ''
    }

    @Input() public mode : string = ''
    
    workerForm: FormGroup = new FormGroup({
        "fullName": new FormControl("",[
          Validators.required,
        ]),
        "salary": new FormControl("",[
          Validators.required,
        ]),
        "birhtDay": new FormControl(new Date(),[
          Validators.required,
        ]),
        "workDay": new FormControl(new Date(),[
          Validators.required,
        ]),
        "depName": new FormControl("",[
          Validators.required,
        ]),
      })
      
  constructor(public activeModal: NgbActiveModal, private workerServ: WorkerService) {}

  ngOnInit(): void {
    if(this.mode === 'update'){
      // this.letterForm.setValue(['word'])= this.letterInput?.word
      this.workerForm.setValue({
        fullName: this.worker.fullName, 
        salary: this.worker.salary,
        birhtDay: this.worker.birhtDay,
        workDay: this.worker.workDay,
        depName: this.worker.depName,
      })
    }
  }
    
    ngOnDestroy(){
        // alert()
    }

    sub(){
      if(this.mode === 'create'){
        this.workerServ.create(this.workerForm.value)
        this.activeModal.close('Close click')  
      }

      if(this.mode === 'update' && this.worker.id != undefined){
        this.workerServ.update(this.workerForm.value, this.worker.id)
        this.activeModal.close('Close click')
      }
    }
}

import { ModalConf } from './../modal-succes/modal-add.component';
import { IWorker } from './Iworkers.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ModalAddComponent } from '../modal-add/modal-add.component';
import { WorkerService } from './workers.service';
import { OrderType, ParametrSort, VariantSort, VariantSortParam } from './const';


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit, OnDestroy {

  sub: Subscription | null = null
  worker: Array<IWorker> | null = null

  orderBy: OrderType = OrderType.NONE
  selectVariant = VariantSort

  param: ParametrSort = ParametrSort.NONE
  paramVariant = VariantSortParam

  constructor(private modalService: NgbModal, private workerService: WorkerService) {
    
    this.sub = this.workerService.workers$.subscribe(el => this.worker = el)
  }

  ngOnInit(): void {
    this.workerService.getWorkers()
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
    this.sub = null
  }
  //http methods
  open(): void {
    const modalRef = this.modalService.open(ModalAddComponent)
    modalRef.componentInstance.mode = 'create'
  }

  update(worker: IWorker): void {
    const modalRef = this.modalService.open(ModalAddComponent)
    modalRef.componentInstance.mode = 'update'
    modalRef.componentInstance.worker = worker
    // modalRef.componentInstance.option = modalOption.CREATE
  }

  delete(id: number | undefined): void {
    const modalRef = this.modalService.open(ModalConf)
    modalRef.componentInstance.id = id
  }
  
  //sort methods
  nameClick() {
    this.param = ParametrSort.NAME
  }

  salaryClick() {
    this.param = ParametrSort.SALARY
  }

  departClick() {
    this.param = ParametrSort.DEPART
  }

  birthClick() {
    this.param = ParametrSort.BIRTH
  }

  workDayClick() {
    this.param = ParametrSort.WORKDAY
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { URL_SERV } from "src/const";
import { IWorker } from "./Iworkers.interface";

@Injectable({ providedIn: 'root' })
export class WorkerService {

    private _workers =  new BehaviorSubject<Array<IWorker>|null>(null)
    public readonly workers$ = this._workers.asObservable()

    private _err =  new BehaviorSubject<string|null>(null)
    public readonly _err$ = this._err.asObservable() 

    constructor (private http: HttpClient){}

    getWorkers () {
        this._err.next('')
        let result = this.http.get<Array<IWorker>>(URL_SERV + '/api/Worker/get/workers')
        result.subscribe({
            next: (workers) => {
                this._workers.next(workers)
            },
            error: (e) => {
                this._err.next('cant get workers')
            }
        })
    }

    create (worker: IWorker) {
        this._err.next('')
        let result = this.http.post<IWorker>(URL_SERV + '/api/Worker/create/worker', {
            ...worker
        })
        result.subscribe({
            next: (workers) => {
                if(this._workers.value != null){
                    this._workers.next([...this._workers.value, workers])
                }
                else {
                    this._workers.next([workers])
                }
            },
            error: (e) => {
                this._err.next('cant create workers')
            }
        })
    }

    update (worker: IWorker, id: number) {
        this._err.next('')
        let result = this.http.put<IWorker>(URL_SERV + '/api/Worker/put/worker', {
            ...worker,
            id
        })
        result.subscribe({
            next: (workers) => {
                if(this._workers.value != null){
                    this._workers.next(this._workers.value.map(el => {
                        if(el.id === id) {
                            return {...worker, id}
                        }
                        else return el
                    }))
                }
                else {
                    this._workers.next([workers])
                }
            },
            error: (e) => {
                this._err.next('cant update workers')
            }
        })
    }

    delete (id: number) {
        this._err.next('')
        let result = this.http.delete<boolean>(URL_SERV + `/api/Worker/del/worker/${id}`)
        result.subscribe({
            next: (isDel) => {
                if(this._workers.value != null && isDel === true){
                    this._workers.next(this._workers.value.filter(el => el.id !== id))
                }
            },
            error: (e) => {
                this._err.next('cant del workers')
            }
        })
    }

    
}
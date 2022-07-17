import { IWorker } from './../workers/Iworkers.interface';
import { Pipe, PipeTransform } from "@angular/core";

import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { OrderType, ParametrSort } from '../workers/const';

@Pipe({
    name: 'SortPipe'
})
export class SortPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {

        let sortType: number
        let paramType = args[1] //parametr to sort
        let workers = value as Array<IWorker>

        if(args[0] == OrderType.ASCEND) {
            sortType = -1
        }
        if (args[0] === OrderType.DESC){
            sortType = 1
        }

        if((args[0] === OrderType.NONE || paramType === ParametrSort.NONE) && workers != null){
            return workers.sort((a, b) => {
                if(a.id != null && b.id != null){
                    return (a?.id >= b?.id)?1: -1
                }
                return 1
            })
        }

        //sorting
        if(paramType === ParametrSort.NAME){
            return workers.sort((a, b) => {
                return a.fullName.localeCompare(b.fullName) * sortType
            }) 
        }

        if(paramType === ParametrSort.SALARY){
            return workers.sort((a, b) => {
                return (a?.salary >= b?.salary)?sortType: -sortType
            }) 
        }

        if(paramType === ParametrSort.DEPART){
            return workers.sort((a, b) => {
                return a.depName.localeCompare(b.depName) * sortType
            }) 
        }

        if(paramType === ParametrSort.BIRTH){
            return workers.sort((a, b) => {
                return (a?.birhtDay >= b?.birhtDay)?sortType: -sortType
            }) 
        }

        if(paramType === ParametrSort.WORKDAY){
            return workers.sort((a, b) => {
                return (a?.workDay >= b?.workDay)?sortType: -sortType
            }) 
        }
        
        return workers
    }
}
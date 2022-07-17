export enum OrderType{
    NONE,
    ASCEND,
    DESC
  }
  
  export enum ParametrSort{
    NONE,
    NAME,
    DEPART,
    BIRTH,
    WORKDAY,
    SALARY
  }
  
  export const VariantSort = [{
      type: OrderType.NONE,
      name: 'none'
    }, 
    {
      type: OrderType.ASCEND,
      name: 'ascending'
    }, 
    {
      type: OrderType.DESC,
      name: 'descending'
    }]
  
  export const VariantSortParam = [{
      type: ParametrSort.NONE,
      name: 'none'
    }, 
    {
      type: ParametrSort.NAME,
      name: 'name'
    }, 
    {
      type: ParametrSort.DEPART,
      name: 'department'
    },
    {
      type: ParametrSort.BIRTH,
      name: 'birthday'
    },
    {
      type: ParametrSort.WORKDAY,
      name: 'start work at'
    },
    {
      type: ParametrSort.SALARY,
      name: 'salary'
    }
  ]
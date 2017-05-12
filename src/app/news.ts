import { New } from './new';

export interface News {
    status:string,
    source:string,
    sortBy:string,
    articles:Array<New>
}

import { MyClassList } from './my-class-list';
import { Attribute } from '@angular/core';

export interface MyEventTarget extends EventTarget {
    classList: MyClassList;
    getAttribute(stting): null | string | '';
}

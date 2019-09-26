import { MyClassList } from './my-class-list';
import { Attribute } from '@angular/core';

export interface MyEventTarget extends EventTarget {
    classList: MyClassList;
    closest(DOMString): Element | null;
    getAttribute(DOMString): null | string | '';
}

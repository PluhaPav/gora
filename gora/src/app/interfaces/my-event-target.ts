import { MyClassList } from './my-class-list';

export interface MyEventTarget extends EventTarget {
    classList: MyClassList;
    closest(DOMString): Element | null;
    getAttribute(DOMString): null | string | '';
}

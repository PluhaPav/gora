import { MyEventTarget } from './my-event-target';

export interface MyTabsEvent extends Event{
    target: MyEventTarget;
}

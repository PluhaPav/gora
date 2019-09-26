import { MyEventTarget } from './my-event-target';

export interface MyEvent extends Event{
    target: MyEventTarget;
}

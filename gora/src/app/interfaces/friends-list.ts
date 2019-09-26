import { Interest } from './interest';

export interface FriendsList {
    id: number;
    img: string;
    name: string;
    city: string;
    phone: string;
    email: string;
    interest: Interest[];
}

import { address } from './address';

export class user{
    username: string;
    password: string;
    phone: string;
    address = new address();
}
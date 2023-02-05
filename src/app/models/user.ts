export interface ICustomer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  cart: string;
}

export class Customer implements ICustomer {
  constructor(
    public _id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public phoneNumber: string,
    public cart: string
  ) {}
}

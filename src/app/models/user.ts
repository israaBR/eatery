export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  cart: string;
}

export class User implements IUser {
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

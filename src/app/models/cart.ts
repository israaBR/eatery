export interface ICart {
  _id: string;
  items: any[];
}

export class Cart implements ICart {
  constructor(public _id: string, public items: any[]) {}
}

export interface IMenuItem {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  state: string;
  category: string;
}

export class MenuItem implements IMenuItem {
  constructor(
    public _id: string,
    public title: string,
    public description: string,
    public image: string,
    public price: number,
    public state: string,
    public category: string
  ) {}
}

export interface IMenuItem {
  title: string;
  description: string;
  image: string;
  price: number;
  state: string;
  category: string;
}

export class MenuItem implements IMenuItem {
  constructor(
    public title: string,
    public description: string,
    public image: string,
    public price: number,
    public state: string,
    public category: string
  ) {}
}

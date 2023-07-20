export interface DataType {
  _id:         string;
    title:       string;
    author:      string;
    description: string;
    budget:      string;
    image:       string;
    services:    Service[] ;
    createdAt:   Date;
    updatedAt:   Date;
    __v:         number;
    map: () => void;
}

export interface Service {
  name:        string;
  description: string;
  price:       number;
  image:       string;
  _id:         string;
  createdAt:   Date;
  updatedAt:   Date;
}
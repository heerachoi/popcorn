export interface Store {
  id: string;
  view: {
    [key: string]: number;
  };
  like: number;
  hate: number;
  title: string;
  address: string;
  open: string;
  close: string;
  location: string;
  item: string;
  openingTime: string[];
  closeTime: string[];
  significantContent:string;
  explain: string;
  sns: string;
  web: string;
  imgURL: string[];
  lat: string;
  lon: string;
  category: string;
  reserveURL: string;
}
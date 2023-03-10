export interface ErrReport {
  id: string;
  user: any;
  title: string;
  storeName: string;
  infoErrContent: string;
  infoModifiContent: string;
  errImg: string;
  reportedDate: string;
  category: string;
  status: boolean;
}

export interface NewStoreReport {
  id: string;
  user: any;
  title: string;
  storeName: string;
  storeAddress: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  etcContent: string;
  infoImg: string;
  reportedDate: string;
  category: string;
  status: boolean;
}

export type Report = ErrReport & NewStoreReport
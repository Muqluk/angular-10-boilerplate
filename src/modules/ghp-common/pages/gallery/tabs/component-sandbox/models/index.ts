class TProduct {
  Author: string = "";
  BisacStatus: string = "";
  BisacStatusChgDate: null
  Copyright: number = 1900;
  CountryRestrictions: string = "";
  CountryRights: string = "";
  DemandPlanner: string = "";
  EAN: string = "";
  EditionAddtlInfo: string = "";
  EditionType: string = "";
  Format: string = "";
  GPItemNum: string = "";
  ISBN: string = "";
  ISBN13: string = "";
  InternalStatus: string = "";
  LandingCost: string = "";
  LicenseCatgory: string = "";
  Media: string = "";
  Price: number = 0.0;
  ProductId: number = 0;
  PubDate: Date = new Date();
  Publisher: string = "";
  PublishingCategory: string = "";
  SSEditionType: string = "";
  Season: string = "";
  Series: string = "";
  ShortTitle: string = "";
  Title: string = "";
  UPC: string = "";
}

type TColumn = {
  columnName: string,
  gridColumnName?: string,
  isEnumerator: boolean,
  isGlobalSearch: boolean,
  isPrimaryKey: boolean,
  type: string;
}

type TMetaData = {
  columns: Array<TColumn>,
}

class TProductResult {
  limit: number = 0;
  metaData: TMetaData;
  offset: number = 0;
  order: string = '';
  orderby: string = '';
  rows: Array<TProduct> = [];
  totalRecords: number = 0;
}



export {
  TColumn,
  TMetaData,
  TProduct,
  TProductResult,
}
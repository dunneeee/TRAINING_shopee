export enum ProductActionType {
  SET_FILTER_KEYWORD = 'SET_FILTER_KEYWORD',
}

export type ProductAction = {
  type: ProductActionType.SET_FILTER_KEYWORD;
  payload: string;
};

export const setFilterKeyword = (keyword: string): ProductAction => {
  return {
    type: ProductActionType.SET_FILTER_KEYWORD,
    payload: keyword,
  };
};

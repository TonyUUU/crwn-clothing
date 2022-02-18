import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

const selectCollectionRouteName = (_, props) =>
  props.match.params.collectionRouteName;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = createSelector(
  [selectCollections, selectCollectionRouteName],
  (collections, collectionRouteName) => collections[collectionRouteName]
);

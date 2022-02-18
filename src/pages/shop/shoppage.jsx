import React from 'react';
import { Route } from 'react-router-dom';

import './shoppage.scss';

import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route
      path={`${match.path}/:collectionRouteName`}
      component={CollectionPage}
    />
  </div>
);

export default ShopPage;

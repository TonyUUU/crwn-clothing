import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection-overview.scss';

import CollectionPreview from '../collection-preview/collection-preview';
import { selectCollectionPreview } from '../../redux/shop/shop-selector';

const CollectionsOverview = ({ collections }) => (
  <div className='collection-overview'>
    {collections.map(({ id, ...others }) => (
      <CollectionPreview key={id} {...others} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);

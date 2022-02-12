import React from 'react';

import './directory.scss';

import MenuItem from '../menu-item/menu-item';
import SECTIONS from './directory-data';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS,
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...others }) => (
          <MenuItem key={id} {...others} />
        ))}
      </div>
    );
  }
}

export default Directory;

import React from 'react';
import Fakes from '../../fakes.js';

import './Menu.css'

class Menu extends React.Component {

  render () {
    return (
      <div className="Menu">
        <ul>
          <li>SHOP BY CATEGORY</li>
          {
            Fakes.menuListArray.map(menuItem =>
              <li key={menuItem.key} onClick={() => this.props.clickCategory(menuItem.key)}>
                {menuItem.key}
              </li>  
            )
          }
        </ul>
      </div>
    );
  }

}

export default Menu;

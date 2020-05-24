import React from 'react';
import Fakes from '../../fakes.js';

import './Tabs.css'

class Tabs extends React.Component {

  render () {
    return (
      <div className="Tab-list">
        {
          Fakes.tabItemArray.map(tab =>
            <div className={"Tab-item-" + tab.key} key={tab.key}>
              <p onClick={() => this.props.clickTab(tab.key)}>
                {tab.key}
              </p>
            </div>
          )
        }
      </div>
    );
  }
}

export default Tabs;

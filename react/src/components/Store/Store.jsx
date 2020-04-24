import React from 'react';
import Fakes from '../../fakes.js'

import './Store.css';

class Store extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 'shop', activeCategory: 'all' };
  }

  clickCategory (category) {
    // this.setState...
    this.setState({ activeCategory: category.toLowerCase() })
  }

  clickTab (tabKey) { // <~~ call this with onClick
    // implement this.setState for activeTab
    this.setState({ activeTab: tabKey.toLowerCase() })
  }

  render () {
    return (
      <div>
        <div className="Menu">
          SHOP BY CATEGORY
          <ul>
            {
              Fakes.menuListArray.map(menuItem =>
                <li key={menuItem.key} onClick={() => this.clickCategory(menuItem.key)}>
                  {menuItem.key}
                </li>  
              )
            }
          </ul>
        </div>

        <div className="Store">
          <div className="Tab-list">
            {Fakes.tabItemArray.map(tab =>
              <div className={"Tab-item-" + tab.key} key={tab.key}>
                <p onClick={() => this.clickTab(tab.key)}>
                  {tab.key}
                </p>
              </div>
            )}
          </div>


          {
            Fakes.storeItemArray.map((item) => {
              let includesActiveTab = item.tags.includes(this.state.activeTab);
              let includesActiveCategory = this.state.activeCategory === "all" || item.categories.includes(this.state.activeCategory);
              if (includesActiveTab && includesActiveCategory)
              {
                return (
                  <div className={"Store-item-" + item.key} key={item.key}>
                    <div className={"Item-container" + item.key}>
                      <img src={item.image} className={"Item-image-" + item.key} alt={item.alt} />
                      <p className={"Item-description-" + item.key}>{item.name}</p>
                      {item.tags.includes("deals") ? <p className={"Deals-banner-" + item.key}>5% off</p> : <br />}
                      {item.tags.includes("clearance") ? <p className={"Clearance-banner-" + item.key}>CLEARANCE</p> : <br />}
                    </div>
                  </div>
                )
              } else { return("") }
            })
          }

        </div>
      </div>
    );
  }
}

export default Store;

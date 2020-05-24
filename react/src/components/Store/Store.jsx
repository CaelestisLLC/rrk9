import React from 'react';
import Fakes from '../../fakes.js';

import './Store.css';

class Store extends React.Component {

  render () {
    return (
      <div>
        <div className="Store">
          {
            Fakes.storeItemArray.map((item) => {
              let includesActiveTab = item.tags.includes(this.props.activeTab);
              let includesActiveCategory = this.props.activeCategory === "all" || item.categories.includes(this.props.activeCategory);
              if (includesActiveTab && includesActiveCategory)
              {
                return (
                  <div className={"Item-container-" + item.key} key={item.key}>
                    {/* TODO: adjust image/text percentages (div each one 80/20 or something) */}
                    <img src={item.image} className={"Item-image-" + item.key} alt={item.alt} />
                    <p className={"Item-description-" + item.key}>{item.name}</p>
                    {item.tags.includes("deals") ? <p className={"Deals-banner-" + item.key}>5% off</p> : <br />}
                    {item.tags.includes("clearance") ? <p className={"Clearance-banner-" + item.key}>CLEARANCE</p> : <br />}
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

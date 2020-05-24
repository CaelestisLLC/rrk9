import React from 'react';
import Header from './components/Header/Header.jsx'
import MenuBar from './components/Menu/Bar.jsx';
import Cart from './components/Cart/Cart.jsx';
import Store from './components/Store/Store.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 'shop', activeCategory: 'all', showCart: false };
    this.toggleCartState = this.toggleCartState.bind(this);
  }

  clickCategory (category) {
    this.setState({ activeCategory: category.toLowerCase() })
  }

  clickTab (tabKey) { // <~~ call this with onClick
    // implement this.setState for activeTab
    this.setState({ activeTab: tabKey.toLowerCase() })
  }

  toggleCartState() {
    this.setState({ showCart: !this.state.showCart });
  }

  render () {
    return (
      <div className="App">
        <Header />
        <MenuBar
          clickCategory={this.clickCategory.bind(this)}
          clickTab={this.clickTab.bind(this)}
          toggleCartState={this.toggleCartState.bind(this)} 
        />
        {
          this.state.showCart 
            ? <Cart /> 
            : <Store
                activeTab={this.state.activeTab} 
                activeCategory={this.state.activeCategory}
              /> 
        }
        <Footer />
      </div>
    );
  }
}

export default App;

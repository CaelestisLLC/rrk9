import React from 'react';
import Fakes from '../../fakes.js';

import './Footer.css';

class Footer extends React.Component {

  render () {
    return (
      <div className="Footer">
      {Fakes.footerLinkArray.map(link => 
        <div className={"Link-item-" + link.key} key={link.key}>
          <a href={link.uri}>{link.description}</a>
        </div>
      )}
      <p className="copyright">© 2020 Chaim Eliyah</p>
      </div>
    );
  }
}

export default Footer;

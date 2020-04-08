// Dev Fakes

// I suck at React and this needs work

import React from 'react';

import item_example from './img/example-product2.png';

let list0 = { key: "Dog Food" }
let list1 = { key: "Dog Toys" }
let list2 = { key: "Crates" }

let link1 = { key: Math.floor(Math.random() * 100), description: "Google Homepage", uri: "https://google.com/" }
let link2 = { key: Math.floor(Math.random() * 100), description: "Google Homepage", uri: "https://google.com/" }

let cartItem1 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", quantity: 3, price: 69.99, image: item_example, alt: "Zignature" };
let cartItem2 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", quantity: 2, price: 69.99, image: item_example, alt: "Zignature" };
let cartItem3 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", quantity: 1, price: 69.99, image: item_example, alt: "Zignature" };

let storeItem1 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", image: item_example, alt: "Zignature", tags: ['shop'] };
let storeItem2 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", image: item_example, alt: "Zignature", tags: ['shop', 'deals'] };
let storeItem3 = { key: Math.floor(Math.random() * 1000), name: "Zignature Brand Dog Food", image: item_example, alt: "Zignature", tags: ['shop', 'deals', 'clearance'] };

let tab0 = { key: "Shop" }
let tab1 = { key: "Deals" }
let tab2 = { key: "Clearance" }

class Fakes extends React.Component { }

Fakes.menuListArray = [ list0, list1, list2 ];
Fakes.footerLinkArray = [ link1, link2 ];
Fakes.cartItemArray = [ cartItem1, cartItem2, cartItem3 ]
Fakes.storeItemArray = [ storeItem1, storeItem2, storeItem3 ]
Fakes.tabItemArray = [ tab0, tab1, tab2 ]

export default Fakes;

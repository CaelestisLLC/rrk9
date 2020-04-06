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

class Fakes extends React.Component { }

Fakes.menuListArray = [ list0, list1, list2 ];
Fakes.footerLinkArray = [ link1, link2 ];
Fakes.cartItemArray = [ cartItem1, cartItem2, cartItem3 ]

export default Fakes;

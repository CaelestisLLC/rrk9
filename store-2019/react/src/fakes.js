// Dev Fakes

// I suck at React and this needs work

import React from 'react';

import item_example_2 from './img/example-product2.png';
import item_example_1 from './img/example-product1.png';
import item_example_3 from './img/example-product3.png';
import item_example_4 from './img/example-product4.png';
import item_example_5 from './img/example-product5.png';

let list0 = { key: "All" }
let list1 = { key: "Dog Food" }
let list2 = { key: "Dog Chews" }
let list3 = { key: "Dog Toys" }
let list4 = { key: "Dog Treats" }
let list5 = { key: "Crates" }

let link1 = { 
  key: Math.floor(Math.random() * 100), 
  description: "Redemption Road K9", 
  uri: "https://www.redemptionroadk9.com/"
}
let link2 = { 
  key: Math.floor(Math.random() * 100), 
  description: "Google Homepage", 
  uri: "https://google.com/" 
}

let cartItem1 = { 
  key: Math.floor(Math.random() * 1000), 
  name: "Science Diet Large Breed Light", 
  quantity: 2, 
  price: 69.99, 
  image: item_example_1, 
  alt: "Science Diet Large Breed Light" 
};

let cartItem2 = { 
  key: Math.floor(Math.random() * 1000), 
  name: "Zignature Brand Dog Food", 
  quantity: 2, 
  price: 69.99, 
  image: item_example_2, 
  alt: "Zignature" 
};

let cartItem3 = { 
  key: Math.floor(Math.random() * 1000), 
  name: "Buck Bone", 
  quantity: 1, 
  price: 69.99, 
  image: item_example_3, 
  alt: "Buck Bone" 
};

let storeItem1 = { 
  key: Math.floor(Math.random() * 1000), 
  name: "Zignature Brand Dog Food", 
  image: item_example_2, 
  alt: "Zignature", 
  categories: ["dog food"], 
  tags: ['shop'] 
};

let storeItem2 = { 
  key: Math.floor(Math.random() * 1000), 
  name: "Science Diet Large Breed Light", 
  image: item_example_1, 
  alt: "Science Diet Large Breed Light", 
  categories: ["dog food"], 
  tags: ['shop', 'deals'] 
};

let storeItem3 = { 
  key: Math.floor(Math.random() * 1000), 
  name: "Buck Bone", 
  image: item_example_3, 
  alt: "Buck Bone", 
  categories: ["dog chews"], 
  tags: ['shop', 'deals', 'clearance'] 
};

let storeItem4 = { 
  key: Math.floor(Math.random() * 1000), 
  name: "Purina Pro Plan Focus Puppy Large Breed Formula Dry Dog Food", 
  image: item_example_4, 
  alt: "Purina", 
  categories: ["dog food"],
  tags: ['shop', 'deals', 'clearance'] 
};

let storeItem5 = { 
  key: Math.floor(Math.random() * 1000), 
  name: "Milk-Bone Soft & Chewy Beef & Filet Mignon Recipe Dog Treats", 
  image: item_example_5, 
  alt: "Milk-Bone Soft & Chewy Beef & Filet Mignon Recipe Dog Treats", 
  categories: ["dog treats"], 
  tags: ['shop', 'deals'] 
};

let tab0 = { key: "Shop" }
let tab1 = { key: "Deals" }
let tab2 = { key: "Clearance" }

class Fakes extends React.Component { }

Fakes.menuListArray = [ list0, list1, list2, list3, list4, list5 ];
Fakes.footerLinkArray = [ link1, link2 ];
Fakes.cartItemArray = [ cartItem1, cartItem2, cartItem3 ]
Fakes.storeItemArray = [ storeItem1, storeItem2, storeItem3, storeItem4, storeItem5 ]
Fakes.tabItemArray = [ tab0, tab1, tab2 ]
Fakes.userEmail = "bernie@sanders.org";

export default Fakes;

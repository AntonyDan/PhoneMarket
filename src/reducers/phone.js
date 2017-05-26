import * as actionTypes from '../constants/actionTypes';

const phones = [
  {
    name: 'Nokia 123',
    brand: 'Nokia',
    coin: 100,
    features: ['Camera', 'Radio'],
    image: 'phone.png',
    id: '001',
    description: 'Super Phone'
  },
  {
    name: 'Nokia 124',
    brand: 'Nokia',
    coin: 110,
    features: ['Camera', 'Radio', 'Internet'],
    image: 'phone.png',
    id: '002',
    description: 'Super Phone'
  },
  {
    name: 'Samsung A5',
    brand: 'Samsung',
    coin: 200,
    features: ['Camera', 'Radio', 'Internet', 'MP3 Player'],
    image: 'phone.png',
    id: '003',
    description: 'Super Phone'
  },
  {
    name: 'Samsung A6',
    brand: 'Samsung',
    coin: 250,
    features: ['Camera', 'Radio', 'Internet', 'MP3 Player', 'Amoled Display'],
    image: 'phone.png',
    id: '004',
    description: 'Super Phone'
  },
  {
    name: 'Iphone 6',
    brand: 'Apple',
    coin: 400,
    features: ['Camera', 'Radio', 'Internet', 'MP3 Player', 'Retina Display'],
    image: 'phone.png',
    id: '005',
    description: 'Super Phone'
  },
  {
    name: 'Iphone 7',
    brand: 'Apple',
    coin: 700,
    features: ['Camera', 'Radio', 'Internet', 'MP3 Player', 'Retina Display', 'Home ID'],
    image: 'phone.png',
    id: '006',
    description: 'Super Phone'
  }
];
export default function(state = phones, action) {
  switch (action.type) {
    case actionTypes.SET_PHONES:
      return setApartments(state, action);
  }
  return state;
}
 
function setPhones(state, action) {
  const { phones } = action;
  return [ ...state, ...phones ];
}

import * as actionTypes from '../constants/actionTypes';

const filters = [
  {
    title: 'Brand',
    id: 1,
     features : [
      {linetitle :'Nokia', lineId: 100, lineClass: 'brand'},
      {linetitle :'Samsung', lineId: 101, lineClass: 'brand'},
      {linetitle :'Apple', lineId: 102, lineClass:'brand'}
    ]
  },
  {
    title: 'Features',
    id: 2,
    features: [
      {linetitle :'Camera', lineId: 200, lineClass: 'features'},
      {linetitle :'Radio', lineId: 201, lineClass: 'features'},
      {linetitle :'Internet', lineId: 202, lineClass: 'features'},
      {linetitle :'MP3 Player', lineId: 203, lineClass: 'features'},
      {linetitle :'Amoled Display', lineId: 204, lineClass: 'features'},
      {linetitle :'Retina Display', lineId: 205, lineClass: 'features'},
      {linetitle :'Home ID', lineId: 206, lineClass: 'features'}
    ]
  }
];
export default function(state = filters, action) {
  switch (action.type) {
    case actionTypes.SET_FILTERS:
      return setAmenities(state, action);
  }
  return state;
}
 
function setAmenities(state, action) {
  const { filters } = action;
  return [ ...state, ...filters ];
}
import produceData from './../mockData/produce.json';

const POPULATE = `produce/POPULATE`;
const CHANGE_LIKE = `product/CHANGE_LIKE`;

export const getAllProduce = (state) => Object.values(state.produce);

export default function produceReducer (state = {}, action) {
  switch (action.type) {
    case POPULATE:
      const newState = new Object();
      action.produce.forEach(obj=>{
        newState[obj.id]=obj;
      })
      return newState;
    case CHANGE_LIKE:
      const newLikeState = {
        ...state
      };
      newLikeState[action.id].liked = !(newLikeState[action.id].liked);
      return newLikeState;
    default:
      return state;
  }
}


export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  };
};

export const changeLikeProduce = (id) => {
  return {
    type: CHANGE_LIKE,
    id
  }
}
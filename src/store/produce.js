import produceData from './../mockData/produce.json';

const POPULATE = `produce/POPULATE`;

export default function produceReducer (state = {}, action) {
  switch (action.type) {
    case POPULATE:
      const newState = new Object();
      action.produce.forEach(obj=>{
        newState[obj.id]=obj;
      })
      return newState;
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
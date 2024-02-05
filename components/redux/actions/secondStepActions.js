// spaceActions.js
export const incrementSpace = (spaceName) => {
    return {
      type: 'INCREMENT_SPACE',
      payload: { spaceName },
    };
  };
  
  export const decrementSpace = (spaceName) => {
    return {
      type: 'DECREMENT_SPACE',
      payload: { spaceName },
    };
  };
  // secondStepActions.js
export const setSpaceCounts = (counts) => {
    return {
      type: 'SET_SPACE_COUNTS',
      payload: counts,
    };
  };

  // secondStepActions.js
export const setSpaceAreas = (areas) => {
    return {
      type: 'SET_SPACE_AREAS',
      payload: areas,
    };
  };
  
  
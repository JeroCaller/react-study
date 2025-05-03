const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {...state, count: state.count + 1}
    case 'DECREASE':
      if (state.count === 0) {
        return state;
      }
      return {...state, count: state.count - 1}
    default:
      // 기존의 액션 타입 중 하나라도 해당되지 않을 경우 기존 state를 그대로 반환.
      return state;
  }
};

export default countReducer;

const initialState = {
	balance: 2000,
};

const reducer = (state = initialState, action) => {
  const newState = {...state};


  switch (action.type) {
  	
  	case "withdraw":
	return { 
	  ...state,
	  balance: state.balance - action.value
	};
	break;

	case "deposit":
	return { 
	  ...state,
	  balance: state.balance + action.value,
	};
	break;
 }
 return newState
}

export default reducer;

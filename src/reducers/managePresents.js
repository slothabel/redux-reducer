export function managePresents(state={numberOfPresents: 0}, action){
    switch (action.type) {
        case 'INCREASE':
          return { ...state, numberOfPresents: state.numberOfPresents + 1 };
        // case "DECREASE_COUNT":
        //   return { count: state.count - 1 };
        default:
          return state;
      }
    
}

export function manageFriends(state={friends:[]}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            //for the spread operator, first we add in the outside values of 'state', then we hit the 'friends' array, inside of that array we add in the values of that current array and insert 'action.friends' to populate the new values in addition to the one we added in with ...state.friends
          return {...state, friends: [...state.friends, action.friend]};
        case "REMOVE_FRIEND":
          return { ...state, friends: [...state.friends.filter(friend => friend.id !== action.id)] };
        default:
          return state;
      }
    
}

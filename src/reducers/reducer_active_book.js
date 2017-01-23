// state arg is not the whole appl-state, only what this comp is responsible for!
// this will be called whenever an action is fired by dispatcher
export default function(state = null, action) {  // undefined is no good for redux! so null
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload; // the selected book
  }

  return state // default, no change in state
}
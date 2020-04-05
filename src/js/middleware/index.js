import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    console.log(dispatch)
    //prints dispatch()
  return function(next) {
      console.log(next)
      //prints dispatch(action)
    return function(action) {
      // do your stuff
      console.log(action)
      if (action.type === ADD_ARTICLE) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );

        if (foundWord.length) {
            //changing action
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      //setting proper action 
      return next(action);
    };
  };
}
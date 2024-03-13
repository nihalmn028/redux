
// const counterReducer = (state={count:0},action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return{ count : state.count +1}
//     case "DECREMENT":
//       return{ count : state.count -1 }
//       default:
//         return state;
 
// }
// }

// export default counterReducer
// import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './Actions';

// const todoReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [
//         ...state,
//         {
//           id: Date.now(),
//           text: action.payload.text,
//           completed: false
//         }
//       ];

//     case TOGGLE_TODO:
//       return state.map(todo =>
//         todo.id === action.payload.id
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     case REMOVE_TODO:
//       return state.filter(todo => todo.id !== action.payload.id);

//     default:
//       return state;
//   }
// };

// export default todoReducer;

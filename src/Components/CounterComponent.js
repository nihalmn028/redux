// import React from 'react'
// import { connect } from 'react-redux'
// import { increment,decrement } from './Actions'
// const CounterComponent = ({count,increment,decrement}) => {
//   return (
//     <div>
//       <p>Count : {count}</p>
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>decrement</button>
//     </div>
//   )
// }
// const mapStateToProps = (state)=>{
//   return{
//     count:state.count
//   }
// }
// export default connect(mapStateToProps,{increment,decrement})(CounterComponent)
// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { addTodo, toggleTodo, removeTodo } from './Actions';

// const TodoApp = ({ todos, addTodo, toggleTodo, removeTodo }) => {
//   const [newTodo, setNewTodo] = useState('');

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== '') {
//       addTodo(newTodo);
//       setNewTodo('');
//     }
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => toggleTodo(todo.id)}
//             />
//             <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//               {todo.text}
//             </span>
//             <button onClick={() => removeTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <button onClick={handleAddTodo}>Add Todo</button>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   todos: state
// });

// export default connect(mapStateToProps, { addTodo, toggleTodo, removeTodo })(TodoApp);
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CounterComponent = () => {
  const count=useSelector(state=>state.count)
  const dispatch=useDispatch()
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>

    </div>
  )
}

export default CounterComponent
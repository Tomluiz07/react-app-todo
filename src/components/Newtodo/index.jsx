import React, {useState} from  "react";
import PropTypes from 'prop-types';
import "./style.css"
const NewTodo = ({onNewTodo}) => {

 const ESCAPE_KEY = 27;
 const ENTER_KEY = 13;

 const [value, setValue] = useState("");

 const erase = () => {
  setValue("");
};

const submit = () => {
  if (onNewTodo){
    onNewTodo(value);
    erase();
  }
};

const onChange = (event) => {
  setValue(event.target.value);
};
// função que verifica o event de tecla, enter  e esc.
const onKeyDown = (event) => {
  if (event.which === ENTER_KEY) {
    submit();
  } else if (event.which === ESCAPE_KEY) {
    erase();
  }
};
//Recebendo as funções no input 
  return (
    <input
    className="new-todo"
    placeholder="o que precisa ser feito?"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
   />
  )
  
};

NewTodo.PropTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
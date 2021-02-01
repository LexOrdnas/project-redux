import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Title from './components/title';

function App() {
  const [inputText, setInputText] = React.useState("");
  const [inputTitle, setInputTitle] = React.useState("");

  // Redux
  const text = useSelector((state) => state.textReducer.text);
  const stateTitle = useSelector((state) => state.titleReducer.title);
  
  const dispatch = useDispatch();

  function addText(event) {
    event.preventDefault();

    const objText = {
      name: inputText
    }

    dispatch({type: "ADICIONAR", value: objText});
  }

  function altTitle(event) {
    setInputTitle(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value});
  }

  return (
    <div className="container col-4 text-center mt-5">
      <br/>
      <p className="h1 text-secondary mt-5">What is Redux?</p>
      <p className="h6 my-4 text-black-50">
      It helps to understand what this "Redux" thing is in the first place. What does it do? 
      What problems does it help me solve? Why would I want to use it?

      Redux is a pattern and library for managing and updating application state, using events called "actions". 
      It serves as a centralized store for state that needs to be used across your entire application, 
      with rules ensuring that the state can only be updated in a predictable fashion.
      </p>
      <br/><hr/>

      <Title />
      <br/>
      <form className="form-group">
        <label className="h1 text-info mb-5">O que acha de treinar um pouco sua digitação?</label>
        <input 
          className="form-control"
          placeholder="Digite o titulo acima..." 
          value={inputTitle}
          onChange={altTitle}  
        />
      </form>

      <p className="h1 d-none text-info">{stateTitle}</p>

      <form className="form-group" onSubmit={addText}>

        <input 
          className="form-control"
          placeholder="Digite o texto acima..."
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />

        <button className="btn btn-info btn-lg btn-block mt-4">
          Postar
        </button>

      </form>
     {
       text.map((text, index) => {
        return (
          <li key={index}>{text.name}</li>
        )
      })
     }
     </div>
    );
}

export default App;

import { useState } from 'react';
import './App.css';
import FormWrapper from './components/FormWrapper';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <Wrapper.Provider value={{name, setName}}>
        <Navbar />
        <FormWrapper />
      </Wrapper.Provider>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UseRefHook from './UseRefHook';
import FormValidation from './FormValidation'
import RandomNo from './RandomNo';

function App() {
  return (
    <div className="App">

    <RandomNo/>

      <BrowserRouter>
        <Routes>
          <Route path='/useRefHook' element={<UseRefHook />} />
          <Route path='/formValidation' element={<FormValidation />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;

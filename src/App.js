import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UseRefHook from './UseRefHook';
import FormValidation from './FormValidation'
function App() {
  return (

    <div className="App">
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

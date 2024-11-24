import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StringCalculatorPage } from './module.pages';
import './module.styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StringCalculatorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

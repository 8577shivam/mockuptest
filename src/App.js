import './App.css';
import Navbar from './components/Navbar';
import {Routes ,Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Createads from './pages/createads';
import Dataform from './components/dataform';
import AdsContext, { AdsProvider } from './AdsContext';

function App() {
  return (
    <div>
      <AdsProvider>
      <Navbar />
            <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/createads' element={<Createads/>} />
            <Route path='/fill-data' element={<Dataform/>} />
            </Routes>
      </AdsProvider>
    </div>
  );
}

export default App;

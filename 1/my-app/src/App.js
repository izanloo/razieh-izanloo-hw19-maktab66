import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './style/main.css'
import Detail from './pages/Detail'
import Contexts from './context/Contexts'
import Header from './pages/Header'
import Notfound from './component/Notfound'

export default function App() {
  return (
    <Contexts>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path='/detail' element={<Detail />}>
          </Route>
          <Route path="*" element={<Notfound/> }/>
        </Route>
      </Routes>
    </Contexts>
  );
}


import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Root from './components/root/root.component';
import Home from './pages/home/home';
import Menu from './pages/menu/menu';
import Order from './pages/order/order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="order" element={<Order />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

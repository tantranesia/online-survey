import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Navigate,
} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';


function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route key={1} exact={true} path={'/'} element={<Home />} />
          <Route key={2} exact={true} path={'/login'} element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Index;
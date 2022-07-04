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

const email = localStorage.getItem('email');

function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route key={2} exact={true} path={'/login'} element={<Login />} />
          <Route key={1} exact={true} path={'/'} element={<Home />} />
          <Route
            path="/"
            element={<AuthWrapper email={email} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const AuthWrapper = ({ email }) => {
  return !email ? (
    <Navigate to="/" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Index;

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutePrivate } from './components/RoutePrivate';
import { AuthContextComponent } from './context/auth';
import { Home } from './pages/Home';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextComponent>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <RoutePrivate>
                  <Home />
                </RoutePrivate>
              }
            ></Route>
            <Route path="/login" exact element={<LoginPage />} />
          </Routes>
        </AuthContextComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;

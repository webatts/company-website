import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SignIn from './pages/SignIn';
import Landing from './pages/Landing';
import 'antd/dist/reset.css'; // Import Ant Design styles
import './index.css';
import ProtectedRoutes from './ProtectedRoutes';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="/signin" element={<SignIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/landing" element={<Landing />} />
        </Route >
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)

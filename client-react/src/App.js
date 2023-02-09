import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';

import Home from './pages/Home';
import User from './pages/User';
import Users from './pages/Users';

import 'App.css';

export default function App() {

  return (
    <Router>
        <Routes>           
          <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/users" element={<Users />}></Route>
            <Route exact path="/user/:id" element={<User />}></Route>
        </Routes>
    </Router>
  );
}
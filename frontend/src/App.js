import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const axios = require('axios');
const rowList = [];


const getdata = async () => {
  const books = await axios.get('/api/books');
  //console.log(books);
  books.data.forEach(book => {
    rowList.push(<tr><td>{book.name}</td></tr>)
  });

  //console.log(rowList);

};

function App() {

  useEffect(() => {

    getdata()

  });

  return (

    <div>
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}




export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import Emoji from './Emoji/Emoji';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Message from './Message/Message';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Emoji />
    <App />
    <Message messagePasse="Hello la React sphere!" prenom="Floch"/>    
    <Footer />
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  return <h2>Main</h2>;
}

function Footer() {
  return <h3>Footer</h3>;
}

root.render(
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);



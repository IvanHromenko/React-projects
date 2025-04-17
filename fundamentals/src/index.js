import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Student from './Student';
import Footer from './Footer';

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
    <Student name="John Doe" experience={3} />
    <Student name="Jane Smith" experience={5} />
    <Footer />
  </div>
);



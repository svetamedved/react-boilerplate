import React from 'react'
import Header from './header'
import Footer from './footer'
import Grid from './grid'

export default (props) => {
  return (
    <div className="main">
      <Header/>
      {props.children}
      <Grid/>
      <Footer/>
    </div>
  );
};

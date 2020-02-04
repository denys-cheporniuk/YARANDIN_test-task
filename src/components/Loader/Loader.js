import React from 'react';
import './loader.scss';

const Loader = () => (
  <div className="loader__container">
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;

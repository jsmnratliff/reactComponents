import React from 'react';
import './App.css';
import NameGenerator from './component3/NameGenerator';

export default function App() {
  return (
    <div className="App">
      <div className="component-container red">
        <h1>component 1</h1>
        {/* put Component1 RIGHT here */}
      </div>
      <div className="component-container blue">
        <h1>component 2</h1>
        {/* put component2 RIGHT here */}
      </div>
      <div className="component-container green">
        <h1>component 3</h1>
        <NameGenerator />
        </div>
      <div className="component-container grey">
        <h1>component 4</h1>
        {/* put component4 RIGHT here */}
      </div>
      <div className="component-container purple">
        <h1>component 5</h1>
        {/* put component5 RIGHT here */}
      </div>
      <div className="component-container purple">
        <h1>component 6</h1>
        {/* put component5 RIGHT here */}
      </div>
    </div>
  );
}

import { useState } from 'react'
import './App.css'

import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Component4 from './components/Component4'


import CombinedProvider from './CombinedContext'
import ThemeApplier from './ThemeApplier'

function App() {
  const [currentComponent, setCurrentComponent] = useState(0);



  const handleButtonClick = (index) => {
    setCurrentComponent(index);
  };

  return (
    <CombinedProvider> <ThemeApplier />
    <div className="app">
      <div className="wrapper">
        <div className="component-container" style={{transform: `translateX(${currentComponent}%)`}}>
          <Component1 />
          <Component2 />
          <Component3 />
          <Component4 />
        </div>
      </div>
      <div className="navigation">
        <button onClick={() => handleButtonClick(0)}> 1</button>
        <button onClick={() => handleButtonClick(-100)}> 2</button>
        <button onClick={() => handleButtonClick(-200)}> 3</button>
        <button onClick={() => handleButtonClick(-300)}> 4</button>
      </div>
    </div>
    </CombinedProvider>
  );
}

export default App

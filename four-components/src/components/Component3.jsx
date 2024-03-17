import '../App.css'
import './Component3.css'
import { useTheme } from '../context/ThemeContext';

function Component3() {

    const { theme, toggleTheme } = useTheme();

    return (
      <div className="comp comp3">
        Component 3
        <h1>{theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  }
  
  export default Component3;
  
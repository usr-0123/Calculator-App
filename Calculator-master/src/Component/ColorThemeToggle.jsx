import { useState } from 'react';
import './Header.css'

const ColorThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="numbers_container">
      <div className="numbers">
        <h3>1</h3>
        <h3>2</h3>
        <h3>3</h3>
      </div>
 <div className='toggle-buttons-container'>
      <label className='radio-button'>
        <input
        
          type="radio"
          name="theme"
          value="light"
          checked={theme === 'light'}
          onChange={handleThemeChange}
        />
        
      </label>

      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === 'dark'}
          onChange={handleThemeChange}
        />
        
      </label>

      <label>
        <input
          type="radio"
          name="theme"
          value="custom"
          checked={theme === 'custom'}
          onChange={handleThemeChange}
        />
        
      </label>

      <div className={`content ${theme}-theme`}>
        {/* Content to be styled */}
      </div>
    </div>
    </div>
   
  );
};

export default ColorThemeToggle;
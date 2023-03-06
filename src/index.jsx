import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { palettes } from './palettes';
import { SchemeColor } from './components/SchemeColor';


const App = () => {
  <>
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        <div className="palette">
        {palettes.colors.map((color) => (
        <SchemeColor
          key = {color.colorName}
          colorName={color.colorName}
        />
      ))}
          </div>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
    </>
  
};

createRoot(
  document.querySelector('#app'),
).render(<App />);

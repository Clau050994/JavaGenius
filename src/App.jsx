import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {
    const imageUrl = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D';
  
    return (
      <div style={{
        backgroundImage: `url(${imageUrl})`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'
      }}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Hello, Vite + React!</h1>
      </div>
    );
  }
  
  export default App;
  
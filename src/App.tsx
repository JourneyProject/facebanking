import React from 'react';
import './App.css';


function openFacebookMessenger() {
  window.open('https://www.facebook.com/messages', '_blank');
}

function App() {
  return (
    <div className="App">
      <div>Graphic</div>
      <div>Calls to action</div>
      <div>Text to copy to clipboard</div>
      <div className="open-facebook"
           onClick={openFacebookMessenger}>
        Open Facebook Messenger
      </div>
    </div>
  );
}

export default App;

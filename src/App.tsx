import React, { useState } from 'react';
// @ts-ignore: No types available
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';
import logo from './journey-logo.png';


function openFacebookMessenger() {
  window.open('https://www.facebook.com/messages', '_blank');
}

function App() {
  const [copied, setCopied] = useState(false);

  const message = 'Hey, I saw you liked Bernie on Facebook! Have you considered volunteering with him before the election?';

  return (
    <div className="App">
      <div className="Copy">
        <CopyToClipboard text={message}
          onCopy={() => {
            // Restart animation.
            setCopied(false);
            setTimeout(() => void setCopied(true), 100);
          }}>
          <div>
            <div>
              <img className="Logo" alt="Bernie logo" src={logo} />
            </div>
            <div className="Copy-cta">
              Click to copy the prompt to your clipboard.
              <div className="Copy-copied"
                hidden={!copied}>
                Copied!
              </div>
            </div>
            <div className="Copy-preview">{message}</div>
          </div>
        </CopyToClipboard>
      </div>

      <div className="OpenFacebook"
        onClick={openFacebookMessenger}>
        Open Facebook Messenger
      </div>
    </div>
  );
}

export default App;

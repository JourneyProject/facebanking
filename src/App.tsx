import React, { useState } from 'react';
// @ts-ignore: No types available
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';
import logo from './journey-logo.png';


function openFacebookMessenger() {
  window.open('https://m.facebook.com/nt/?id=%2Fpages%2Fentity%2Fstream%2F%3Fpage_id%3D124955570892789%26fetcher%3Dfriends_who_liked', '_blank');
}

const IS_MOBILE = /mobile/i.test(navigator.userAgent);

function App() {
  const [copied, setCopied] = useState(false);

  const message = 'Hey, I saw you liked Bernie on Facebook! Have you considered volunteering with him before the election?';

  if (!IS_MOBILE) {
    return (
      <div className="Desktop">
        Please open this website on your mobile device! <span role="img" aria-label="Fire">🔥</span>
      </div>
    );
  }

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

import React, { useState } from 'react';
// @ts-ignore: No types available
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';
import logo from './journey-logo.png';


const IS_FIREFOX_DESKTOP = (/Firefox/i).test(navigator.userAgent) && !(/mobile/i).test(navigator.userAgent);

function openFacebook() {
  if (IS_FIREFOX_DESKTOP) {
    window.open('https://www.facebook.com/pg/berniesanders/community');
  } else {
    window.open('https://m.facebook.com/nt/?id=%2Fpages%2Fentity%2Fstream%2F%3Fpage_id%3D124955570892789%26fetcher%3Dfriends_who_liked', '_blank');
  }
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

      {IS_FIREFOX_DESKTOP ?
      <div className="FirefoxDesktop">
        Instructions: Just click the link below and scroll down on the page that opens. You'll see a list of your friends who have liked Bernie's page. Reach out to them via messenger!
      </div>
      :null}

      <div className="OpenFacebook"
        onClick={openFacebook}>
        Facebook friends who like Bernie
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
// @ts-ignore: No types available
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';
import logo from './images/super-tuesday.jpg';


const IS_FIREFOX_DESKTOP = (/Firefox/i).test(navigator.userAgent) && !(/mobile/i).test(navigator.userAgent);

function openFacebook() {
  if (IS_FIREFOX_DESKTOP) {
    window.open('https://www.facebook.com/pg/berniesanders/community');
  } else {
    window.open('https://m.facebook.com/nt/?id=%2Fpages%2Fentity%2Fstream%2F%3Fpage_id%3D124955570892789%26fetcher%3Dfriends_who_liked', '_blank', 'width=320,height=480');
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
            openFacebook();
          }}>
          <div>
            <div>
              <img className="Logo" alt="Bernie logo" src={logo} />
            </div>
            <div className="Copy-cta">
              Instructions:
              <ul>
                <li>Click below to open a list of your FB friends who like Bernie.</li>
                <li>Ask them to volunteer over Facebook chat!</li>
                <li>(Note) The greeting below will be copied to your clipboard.</li>
              </ul>
              <div className="Copy-copied"
                hidden={!copied}>
                Copied!
              </div>
            </div>
            <div className="Copy-preview">{message}</div>

            {IS_FIREFOX_DESKTOP ?
            <div className="FirefoxDesktop">
              Instructions: Scroll down on the Facebook page to see a list of your friends who liked Bernie's page. Then reach out to them via messenger!
            </div>
            :null}

            <div className="OpenFacebook">
              Message FB friends who like Bernie
            </div>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default App;

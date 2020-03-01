import React from 'react';
// @ts-ignore: No types available
import './App.css';
import BernieImage from './images/bernie.png';
import MessengerImage from './images/messenger.png';

const IS_FIREFOX_DESKTOP =
  /Firefox/i.test(navigator.userAgent) && !/mobile/i.test(navigator.userAgent);

function openFacebook() {
  if (IS_FIREFOX_DESKTOP) {
    window.open('https://www.facebook.com/pg/berniesanders/community');
  } else {
    window.open(
      'https://m.facebook.com/nt/?id=%2Fpages%2Fentity%2Fstream%2F%3Fpage_id%3D124955570892789%26fetcher%3Dfriends_who_liked',
      '_blank',
      'width=320,height=480'
    );
  }
}

function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <img className='Logo' alt='Bernie logo' src={BernieImage} />
        <div className='Header-dms'>DMs</div>
        <div className='Header-for'>for</div>
        <div className='Header-bernie'>Bernie</div>
      </div>

      <div className='OpenFacebook float-right' onClick={openFacebook}>
        Send DMs on Facebook
      </div>

      <div className='Instructions'>
        <strong>Instructions:</strong>
        <ul>
          <li>1) Click the "Send DMs on Facebook" button</li>
          <li>2) Choose a friend (Note: They all like Bernie)</li>
          <li>
            3) Click the
            <img className='Instructions-messenger' alt="Facebook Messenger icon" src={MessengerImage} />{' '}
            button next to their name
          </li>
          <li>4) Ask your friend to commit to voting</li>
          <li>5) Ask your friend to volunteer</li>
          <li>6) Thank your friend</li>
          <li>7) Return to step 2</li>
        </ul>
      </div>

      <div className='OpenFacebook float-left' onClick={openFacebook}>
        Send DMs on Facebook
      </div>

      <div className='clear-both'></div>
    </div>
  );
}

export default App;

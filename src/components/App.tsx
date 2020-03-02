import React from 'react';
// @ts-ignore: No types available
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.scss'

// Components
import Header from './Header'
import Hero from './Hero'
import TopCallout from './TopCallout'
import Footer from './Footer'


// @ts-ignore: No types available
import Analytics from 'analytics'
// @ts-ignore: No types available
import googleAnalytics from '@analytics/google-analytics'
import { IS_LOCAL_SERVER } from './environment';

const analytics = Analytics({
  app: 'dms-for-bernie',
  plugins: [
    googleAnalytics({
      trackingId: 'UA-159403078-1'
    })
  ]
});

function App() {
  // Track this in GA in prod only so we have a general idea of usage
  if (!IS_LOCAL_SERVER) { analytics.page() }

  return (
    <div className='App'>
      <Header></Header>
      <TopCallout></TopCallout>
      <Hero analytics={analytics}></Hero>
      <Footer></Footer>
      {/* <Container>
        <div className='OpenFacebook float-right' onClick={openFacebook}>
          Send DMs on Facebook
        </div>

        <div className='Instructions'>
          <strong>Instructions:</strong>
          <ul>
            <li>1) Click the "Send DMs on Facebook" button</li>
            <li>2) Choose a friend (Note: They all like Bernie)</li>
            <li>
              3) Click the{' '}
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
      </Container> */}
    </div>
  );
}

export default App;

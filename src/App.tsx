import { getToken } from 'firebase/messaging';
import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { messaging, VAPID_KEY } from './firebase';

// const REGISTRATION_TOKENS = ['TOKEN_1'];
// const TOPIC = 'PAYMENT_FAILED';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const result = getToken(messaging, { vapidKey: VAPID_KEY })
      .then((token) => {
        if (token) {
          alert(token);
        } else {
          alert('No registration token');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      })
      .finally(() => {
        console.log('received');
      });

    console.log(result);

    // onMessage(messaging, (payload) => {
    //   alert('Message received' + ': ' + JSON.stringify(payload));
    // });

    // return messaging
    //   .unsubscribeFromTopic(REGISTRATION_TOKENS, TOPIC)
    //   .then(() => {
    //     alert('Unsubscribed from ' + TOPIC);
    //   });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

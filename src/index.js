import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Authenticator } from '@aws-amplify/ui-react';

Amplify.configure(config);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Authenticator.Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Authenticator.Provider>
);

const client = new ApolloClient({
  uri: 'https://your-graphql-api-endpoint', // Your GraphQL endpoint
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Authenticator>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  </Authenticator>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

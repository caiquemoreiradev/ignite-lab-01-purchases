import { UserProvider } from '@auth0/nextjs-auth0';
import { ApolloProvider } from '@apollo/client';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp

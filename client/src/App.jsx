import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import Main component that contains all the routes
import { MainSection } from './components';

// This will connect to the server's GraphQL endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// This will set the authorization header for the request
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// This will instantiate the Apollo Client instance and create the connection to the API endpoint
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    // This will make the client available to all components
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="transition-all ease-in text-slate-800">
          {/* Router and Routes are located in Main */}
          <MainSection />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

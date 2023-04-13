import { Header, Footer, Sidebar } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Home, Login, Signup, NoMatch, Dashboard, Characters, Leaderboard, Profile } from './pages';

import Auth from './utils/auth';

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
  const loggedIn = Auth.loggedIn();

  return (
    // This will make the client available to all components
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="transition-all ease-in text-slate-800">
          {loggedIn && <Sidebar />}
          <div className={`overflow-x-hidden overflow-y-auto flex flex-col ${loggedIn && 'ms-80'}`}>
            {!loggedIn && <Header />}
            <main>
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route
                  path="/signup"
                  element={<Signup />}
                />
                <Route
                  path="/dashboard"
                  element={<Dashboard />}
                />
                <Route
                  path="/characters"
                  element={<Characters />}
                />
                <Route
                  path="/leaderboard"
                  element={<Leaderboard />}
                />
                <Route
                  path="/profile"
                  element={<Profile />}
                />
                <Route
                  path="*"
                  element={<NoMatch />}
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

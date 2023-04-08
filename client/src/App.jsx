import { Header, Footer } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Signup } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="app transition-all ease-in text-slate-800">
        <Header />
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

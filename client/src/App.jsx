import { Header, Footer } from './components';
import Home from './pages/Home';

function App() {
  return (
    <div className="app transition-all ease-in text-slate-800">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;

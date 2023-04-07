import { Header } from './components';
import Home from './pages/Home';

function App() {
  return (
    <div className="app transition-all ease-in text-slate-800">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;


import './App.css';
import {Header ,Footer,MovieCard }from './components/index';
import { AllRoutes } from './routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <AllRoutes/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

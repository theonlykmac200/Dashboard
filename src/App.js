import Aside from './components/Aside';
import Avg_rating from './components/Avg_Rating';
import Reviews from './components/Reviews';
import Sentiment from './components/Sentiment';
import Visitors from './components/Visitors';

function App() {
  return (
    <div className="App">
      <div>
        <div><Aside /></div>
        <div><Avg_rating /></div>
        <div><Reviews /></div>
        <div><Sentiment /></div>
        <div><Visitors /></div>
      </div>
    </div>
  );
}

export default App;

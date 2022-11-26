import Aside from './components/Aside';
import Avg_rating from './components/Avg_Rating';
import Reviews from './components/Reviews';
import Sentiment from './components/Sentiment';
import Visitors from './components/Visitors';

function App() {
  return (
    <div className="App">
      <div>
        <Aside />
        <Avg_rating />
        <Reviews />
        <Sentiment />
        <Visitors />
      </div>
    </div>
  );
}

export default App;

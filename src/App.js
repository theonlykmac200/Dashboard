import Aside from './components/Aside';
import Avg_rating from './components/Avg_Rating';
import Reviews from './components/Reviews';
import Sentiment from './components/Sentiment';
import Visitors from './components/Visitors';

function App() {
  return (
    <div className="App">
      <div className="Aside">
        <div><Aside /></div>
      </div>
      <div className="Metrics">
        <div className="avg-rating"><Avg_rating /></div>
        <div className="reviews"><Reviews /></div>
        <div className="Sentiment"><Sentiment /></div>
      </div>
       <div className="Visitors">
        <div><Visitors /></div>
       </div> 
      </div>
  );
}

export default App;

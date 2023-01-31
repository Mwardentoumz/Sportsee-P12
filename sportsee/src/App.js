
import './App.css';
import Header from './components/header/header';
import ActivityList from './components/ActivityList/ActivityList';
import Hello from './components/Hello';
import DailyChart from './components/Dailychart';
import AverageDuration from './components/AverageDuration';
import Performance from './components/Performance';
import SimpleChart from './components/GaugeChart';
import InfoList from './components/InfoList';



function App() {
  return (
    <div className="App">
      <Header />
      <div className='dashboard'>
        <ActivityList />
        <div className='global-container'>
          <div className='hello-container'>
            <Hello />
          </div>
          <div className='charts-container'>
            <div className='charts-container-left'>
              <DailyChart />
              <div className='bottom-charts-container'>
                <AverageDuration />
                <Performance />
                <SimpleChart />
              </div>
            </div>
            <div className='charts-container-right'>
              <InfoList />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

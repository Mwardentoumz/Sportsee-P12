import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import ActivityList from './components/ActivityList/ActivityList';
import Hello from './components/Hello';
import DailyChart from './components/Dailychart';
import AverageDuration from './components/AverageDuration';
import Performance from './components/Performance';
import SimpleChart from './components/GaugeChart';
import InfoList from './components/InfoList';
import { useState } from 'react';
import { useParams } from 'react-router';
import { getUserName } from './service/user.service';



function App() {

  const [data, setData] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const data = async () => {
      const request = await getUserName(id);
      if (!request) return alert("data error");
      setData(request.data);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;

  
  return (
    <div className="App">
      <Header  />
      <div className='dashboard'>
        <ActivityList />
        <div className='global-container'>
          <div className='hello-container'>
            <Hello name={data.userInfos.firstName} />
          </div>
          <div className='charts-container'>
            <div className='charts-container-left'>
              <DailyChart />
              <div className='bottom-charts-container'>
                <AverageDuration/>
                <Performance/>
                <SimpleChart/>
              </div>
            </div>
            <div className='charts-container-right'>
              <InfoList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

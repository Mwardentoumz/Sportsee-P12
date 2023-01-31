import yoga from '../../assets/yoga.png';
import musculation from '../../assets/musculation.png';
import cycling from '../../assets/cycling.png';
import swimming from '../../assets/swimming.png';
import Activity from '../ActivityList/Activity/Activity.jsx';

import './ActivityList.css';


export default function ActivityList(){
    return(
        <div className="activity-list">
            <Activity img={yoga}/>
            <Activity img={swimming}/>
            <Activity img={cycling}/>
            <Activity img={musculation}/>
            <small className='small'>Copiryght, SportSee 2020</small>
        </div>
    )
}
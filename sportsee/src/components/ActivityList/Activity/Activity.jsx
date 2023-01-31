import './Activity.css'

export default function Activity(props){
    return(
        <div className="activity">
            <img src={props.img} alt='logo-sport'/>
        </div>
    )
}
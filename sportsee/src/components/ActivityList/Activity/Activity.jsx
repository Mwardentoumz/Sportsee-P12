import './Activity.css'

/**
 * 
 * @param {*} props 
 * @param {string} props.img
 * 
 * @returns {JSX.Element}
 */

export default function Activity(props){
    return(
        <div className="activity">
            <img src={props.img} alt='logo-sport'/>
        </div>
    )
}
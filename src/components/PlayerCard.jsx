import { useState } from "react";
import { Card} from "react-bootstrap";


const PlayerCard = ({ name, nickname, img, teamLogo, statistics }) => {
    const [statisticsImg, setStatisticsImg] = useState(true)

 
    return (
        <Card className="player-card m-auto"
        onClick={()=>setStatisticsImg(!statisticsImg)}
        >

        {statisticsImg
        ? (<Card.Img variant="top" className="card-img" src={img}/>)
        : (
                    <ul className="m-auto ">
                        {statistics.map((item, i) => (
                            <li key={i} className="h5 list-unstyled text-start">
                                {i === 0 ? "🏀" : i === 1 ? "🗑️" : i === 2 ? "👋" : "💯"}
                                {item}</li>
                        ))}
                    </ul>
                
        )
        }

        <Card.Footer className=" footer card-footer-img">
                <img src={teamLogo} width="60px" height="55px" />
                <h3>{name}</h3>
                <span className="text-danger fw-bold mb-3">{nickname}</span>
            </Card.Footer>

  
        </Card>
 
  )
}

export default PlayerCard
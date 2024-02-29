import { useState } from "react"
import { Row, Container, Col, Card, ListGroup } from "react-bootstrap"




const PlayerCard = ({ data }) => {

    const [statisticsImg, setStatisticsImg] = useState(true)

    const handleSwap = () => {
        setStatisticsImg(!statisticsImg)
    }

    return (
        <Container>
            <Row className="card-container mt-4">
                {data.map(({ name, nickname, img, teamLogo, statistics }) => {
                    return (
                        <Col className="playerCard col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center" role="button"
                            onClick={handleSwap}
                           >
                            <Card style={{ width: "18rem" }}>
                                {statisticsImg ? (
                                    <Card.Img className="cardImg" variant="top" src={img} height="350px" />
                                ) : (
                                    <ListGroup>
                                        <ul className='m-auto'>
                                            <li className='h5 text-start list-unstyled'>🏀 {statistics[0]}</li>
                                            <li className='h5 text-start list-unstyled'>🏀 {statistics[1]}</li>
                                            <li className='h5 text-start list-unstyled'>🏀 {statistics[2]}</li>
                                            <li className='h5 text-start list-unstyled'>🏀 {statistics[3]}</li>
                                        </ul>
                                    </ListGroup>
                                )

                                } 
                               
                                <Card.Body className="text-center">
                                    <img src={teamLogo} alt="" width="60px" height="55px" />
                                    <Card.Title className="text-center card-title h2">   {name} <br /> <span className="text-danger">{nickname}</span></Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}

            </Row>

        </Container>
    )
}

export default PlayerCard
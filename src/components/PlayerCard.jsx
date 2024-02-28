import { useState } from "react"
import { Row, Container, Col, Card } from "react-bootstrap"




const PlayerCard = ({ data }) => {

    const [toggle, setToggle] = useState(true)


    return (
        <Container>

            <Row className="card-container mt-4">


                {data.map(({ name, nickname, img, teamLogo, statistics, id }) => {
                    return (
                        <Col className="playerCard col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center" role="button"
                            // onClick={()=> setToggle(!toggle)}
                            key={id}>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img className="cardImg" variant="top" src={img} height="350px" />
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
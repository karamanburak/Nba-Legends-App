import PlayerCard from "./PlayerCard";
import {data} from '../helpers/data';
import { useState } from "react";
import { Row, Container, Col, Form } from "react-bootstrap";



const CardContainer = () => {
  const [search, setSearch] = useState("")



  return (
    <>
    <Form.Control 
      className="w-50 m-auto" 
       type="search"
       placeholder="Search for a Nba Legends"
        onChange={(e) => setSearch(e.target.value)}
      />

    <Container className="card-container p-3 rounded-4 my-4">
      <Row className="card-container g-3">
      {data.filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase())).map((player,index)=>{
        return(
          <Col 
          key={index}
          md={6}
          lg={4}
          xl={3}>
  <PlayerCard {...player}/>

          </Col>
        )
      })}
   
      </Row>
    </Container>
    </>
  )
}
  


export default CardContainer
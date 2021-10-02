import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './home.css'

const Home = () => {

    const[food,setfoods] = useState([])

    useEffect(()=>{
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`
fetch(url)
.then(res =>res.json())
.then(data => setfoods(data.meals))

    },[])
    return (
       <Container>
            <div>
            <h1 variant ='text-center' className ='title'>This is foods home website</h1>
           <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" className ="img" src={food[0]?.strMealThumb}/>
        <Card.Body>
          <Card.Title>{food[0]?.strMeal}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </div>
       </Container>
    );
};

export default Home;
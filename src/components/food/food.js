import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './food.css'

const Food = (props) => {
    const{strMealThumb,strMeal,strCategory,strIngredient4,strInstructions,strYoutube,idMeal} = props.food || {}

    return (
           <div>
              
                <Row xs={1} md={2} className="g-2 rows">
 
 <Col>
   <Card className ="card">
     <Card.Img variant="top" className ="image" src={strMealThumb} />
     <Card.Body>
       <Card.Title>{strMeal}</Card.Title>
       <Card.Text>
        {strIngredient4}:{strYoutube}
       </Card.Text>
       <Link to = {`/food/${idMeal}`}>details</Link>
     </Card.Body>
     
   </Card>
 </Col>

</Row>
           </div>
        
    );
};

export default Food;
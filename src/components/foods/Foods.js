import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Food from '../food/food';
import './foods.css'

const Foods = () => {
    // const[foods,setfoods] = useState([])
    const [allfoods,setallfoods] = useState('')
    const [meals,setmeals] = useState([])
    // useEffect(()=>{
    //     fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
    //     .then(res =>res.json())
    //     .then(data => setfoods(data.meals))
    // },[])
    
    useEffect(()=>{

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${allfoods}`)
    .then(res => res.json())
    .then(data => setmeals(data.meals))

    },[allfoods])


    const clickhandler = (event) =>{
 setallfoods(event.target.value);
    }
    return (
        <Container>
            
<div className="input-group mb-3">
  <input  onChange ={clickhandler} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button  className="btn btn-outline-secondary" type="button" id="button-addon2">search food</button>
</div>
            <div>
                <h1>here is some food </h1>
            <div className ="rowss">
            {
                meals.map(food => <Food food ={food}></Food>)
            }
        </div>
            </div>
        </Container>
    );
};

export default Foods;
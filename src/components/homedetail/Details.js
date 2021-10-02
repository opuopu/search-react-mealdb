import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Meals from '../mealdetails/Meals';

const Details = () => {
    let {idMeal} = useParams()
    const[meal,setmeal] = useState([])
    useEffect(() =>{

        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
       fetch(url)
       .then(res => res.json())
       .then(data => setmeal(data.meals))

    },[meal])

    return (
        <div>
           {
               meal.map(detail => <Meals detail ={detail}></Meals>)
           }
        </div>
    );
};

export default Details;
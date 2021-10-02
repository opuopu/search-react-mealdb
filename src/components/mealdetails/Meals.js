import React from 'react';

const Meals = (props) => {
  const {strMeal} = props.detail
  return (
    <div>
      <h1>{strMeal}</h1>
    </div>
  );
};

export default Meals;
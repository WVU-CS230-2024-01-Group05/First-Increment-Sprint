//import React from 'react';
import React, { useState } from "react"
import {
    Link} from 'react-router-dom';

const Post = () => {

    const ingredients = [
        "Flour", "Sugar", "Salt", "Butter", "Eggs", "Milk", "Vanilla extract", "Baking powder",
        "Baking soda", "Chocolate chips", "Cocoa powder", "Brown sugar", "Yeast", "Oil", "Cream cheese",
        "Powdered sugar", "Almond flour", "Coconut flour", "Honey", "Maple syrup", "Nuts", "Spices",
        "Fruit", "Vegetables", "Chicken", "Beef", "Fish", "Pasta", "Rice", "Quinoa", "Beans", "Lentils",
        "Tomatoes", "Onions", "Garlic", "Herbs", "Oats", "Cereal", "Bread", "Tortillas", "Cheese",
        "Yogurt", "Sour cream", "Mayonnaise", "Mustard", "Ketchup", "Soy sauce", "Vinegar", "Wine",
        "Water", "Soda", "Ice cream", "Whipped cream", "Marshmallows"
    ];
    /*function add(){
        var new_chq_no = parseInt($('#total_chq').val())+1;
        var new_input="<input type='text' id='new_"+new_chq_no+"'>";
        $('#new_chq').append(new_input);
        $('#total_chq').val(new_chq_no)
      }
      function remove(){
        var last_chq_no = $('#total_chq').val();
        if(last_chq_no>1){
          $('#new_'+last_chq_no).remove();
          $('#total_chq').val(last_chq_no-1);
        }
      };*/
/*<div>
            <h1>Create your recipe</h1>
            <input type="text" placeholder="Recipe name" />
            <input type="text" placeholder="Description"/> 
            <div>
                <p>Step-by-step instructions:</p>
                    <div>
                        <input type="text">
                            <button onClick="add()">Add</button>
                            <button onClick="remove()">remove</button>
                            <div id="new_chq"></div>
                            <input type="hidden" value="1" id="total_chq" />
                        </input>
                    </div>
            </div>
        </div>*/
    return (
        <div>
        <h1>Create your recipe</h1>
        <input type="text" placeholder="Recipe name" />
        <input type="text" placeholder="Description"/> 
        <div>
            <p>Step-by-step instructions:</p>
        </div>
        {/* <div className="ingredients">
      <h1>Ingredients</h1>
     <IngredientDropdown ingredients={ingredients} /> 
    </div> */}
        <button type="submit">Post</button>
        <Link to="/">Home</Link>
        </div>
       
    )
}

export default Post;
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
        <h1>Create Your Recipe</h1>
        <input type="text" placeholder="Recipe name" />
        <input type="text" placeholder="Description"/> 
        <div>
            <p>Step-by-step instructions:</p>
        </div>
        <form>
                <div>
                    <ul>
                    <li><label htmlFor="Ingredient 1">Ingredient 1:</label></li>
                    <input type="text" id="ingredient1" name="ingredient1" />
        
                    <li><label htmlFor="Ingredient 2">Ingredient 12:</label></li>
                    <input type="text" id="ingredient2" name="ingredient2" />
                
                   <li> <label htmlFor="Ingredient 3">Ingredient 3:</label></li>
                    <input type="text" id="ingredient3" name="ingredient3" />
               
                   <li> <label htmlFor="Ingredient 4">Ingredient 4:</label></li>
                    <input type="text" id="ingredient4" name="ingredient4" />

                  <li><label htmlFor="Ingredient 5">Ingredient 5:</label></li>
                    <input type="text" id="ingredient5" name="ingredient5" />
                    
                   <li><label htmlFor="Ingredient 6">Ingredient 6:</label></li>
                    <input type="text" id="ingredient6" name="ingredient6" />
                    
                 <li><label htmlFor="Ingredient 7">Ingredient 7:</label></li>
                    <input type="text" id="ingredient7" name="ingredient7" />

                   <li><label htmlFor="Ingredient 8">Ingredient 8:</label></li>
                    <input type="text" id="ingredient8" name="ingredient8" />

                   <li><label htmlFor="Ingredient 9">Ingredient 9:</label></li>
                    <input type="text" id="ingredient9" name="ingredient9" />

                  <li><label htmlFor="Ingredient 10">Ingredient 10:</label></li>
                    <input type="text" id="ingredient10" name="ingredient10" />
               </ul>
                </div>
                <div>
                    <label htmlFor="directions">Directions:</label>
                    <textarea id="directions" name="directions" />
                </div>
                    
                <button type="submit">Post</button>
            </form>
            <Link to="/">Home</Link>
        </div>
       
    )
}

export default Post;
import React, { useState, useEffect } from 'react';
import '../App.css';
import './tests.css';
import { Link } from 'react-router-dom';
import { Heading, View, useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";

// Used to create search bar
const Search = () => {
  const [posts, setPosts] = useState([]); // State to hold posts
  const { signOut } = useAuthenticator();

  // Used to fetch posts from our DynamoDB
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://z7pmt81mal.execute-api.us-east-2.amazonaws.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchPosts();
  }, []);

  // Returns our search bar, the filter options, buttons, and featured recipes
  return (
    <div>
      <Heading>Nom Nom Next</Heading>
      <div>
        <div className="search-container">
          <input type="text" placeholder="Search..." name="search"></input>
          <select name="category">
            <option value="">All Categories</option>
            <option value="Vegan">Vegan</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="Dairy-Free">Dairy-Free</option>
            <option value="Japanese">Japanese</option>
            <option value="Mexican">Mexican</option>
            <option value="American">American</option>
          </select>
          <nav>
            <Link to="/Test" className="link-style">
              <button>Search</button>
            </Link>
          </nav>
        </div>
        <View>
          <div className="App-header">
            <nav className="nav">
              <Link to="/Filter" className="link-style"><button className="button-post">Filter</button></Link>
              <Link to="/post" className="link-style"><button className="button-post">Post</button></Link>
              <Link to="/account" className="link-style"><button className="button-signout">Account Details</button></Link>
              <button className="button-signout" onClick={signOut}>Sign Out</button>
            </nav>
          </div>
        </View>
        <div className="posts-container">
            <h1>Featured Recipes</h1>
            {posts.map(post => (
                <div key={post.PostID} className="post-item">
                    <h3>{post.Title}</h3>
                    <p>Description: {post.Description}</p>
                    <p>Ingredients: {post.Ingredients}</p>
                    <p>Directions: {post.Directions}</p>
                    <hr />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(Search);
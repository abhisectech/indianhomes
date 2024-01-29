// pages/index.js
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from '@/components/Navbar/Header';
import Omsairam from '@/components/Navbar/Omsairam';
import Footer from '@/components/Footer/Footer';

const WordPressPosts = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://homes.devotionalindia.com/wp-json/wp/v2/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching WordPress categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    // Fetch all posts by default or posts by selected category
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          selectedCategory
            ? `https://homes.devotionalindia.com/wp-json/wp/v2/posts?categories=${selectedCategory}&_embed`
            : 'https://homes.devotionalindia.com/wp-json/wp/v2/posts?_embed'
        );
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching WordPress posts:', error);
      }
    };

    fetchPosts();
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <Router>
   <>
      <Omsairam />
      <Header />
      <div className="mx-auto w-full" style={{ width: "100%" }}>
        <div className="magazine">
          <h1 className="text-3xl font-bold mb-4">Magazine</h1>
        </div>
        <div className="overflow-x-auto mt-4 relative">
          <div className="flex gap-4 overflow-x-scroll pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`${
                  selectedCategory === category.id ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                } categoryButton rounded-lg `}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4">
          {posts.map((post) => (
            <Link key={post.id} to={`/magazine/${post.id}`}>  {/* Assuming you have a route for individual blog posts */}
              <div className="bg-white p-4 border rounded cursor-pointer">
                {post._embedded && post._embedded['wp:featuredmedia'] && (
                  <img
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post._embedded['wp:featuredmedia'][0].alt_text}
                    className="mb-2 w-full h-52 object-cover"
                  />
                )}
                <h2 className="text-xl font-bold">{post.title.rendered}</h2>
                <p className="text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
    </Router>
  );
};

export default WordPressPosts;

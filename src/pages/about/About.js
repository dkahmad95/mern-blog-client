import React from 'react';
import './about.css'; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Blog</h1>
      <p>
        Welcome to our community-driven blog! Here, anyone can register and share their thoughts, ideas, and stories on a variety of topics.
        Our platform is built to encourage creativity, collaboration, and the free exchange of knowledge.
      </p>
      <h2>How to Get Started</h2>
      <p>
        Joining our community is easy! Simply <a href="/register">register</a> with us, and you’ll be able to start posting your own articles in no time.
        Whether you're passionate about technology, lifestyle, personal development, or any other subject, your voice is welcome here.
      </p>
      <h2>How It Works</h2>
      <ul>
        <li>Anyone can register and create an account by user name and put his own profile picture, then you can add posts to the blog.</li>
        <li>You can view posts of any user, but only you can edit or delete your own posts.</li>
        <li>You can see the author of each post and view all the posts by that author.</li>
      </ul>
      <h2>Community Guidelines</h2>
      <p>
        To ensure a positive experience for everyone, we ask all contributors to adhere to our community guidelines:
      </p>
      <ul>
        <li>Be respectful and considerate of others.</li>
        <li>Avoid posting offensive or harmful content.</li>
        <li>Share original content or properly credit sources.</li>
      </ul>
     
    </div>
  );
};

export default About;
import React from "react";
import "./Tutorials.css";

const Tutorials = () => {
  const tutorials = [
    {
      title: "React for Beginners",
      price: "$19.99",
      description: "Learn the basics of React.js",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/C4E12AQFdVr18zUa17Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1624637761724?e=2147483647&v=beta&t=uOrqjZV7ZeSvE6euFcZVEuj-2yuec1FppjnE6IUYdzY", // Replace with actual image URLs
    },
    {
      title: "Advanced Node.js",
      price: "$29.99",
      description: "Master backend development with Node.js",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:866/1*1UBNwRFaslvqt_G3Njw3pg.jpeg", // Replace with actual image URLs
    },
    {
      title: "Full-Stack MERN",
      price: "$49.99",
      description: "Become a full-stack developer using MERN stack",
      imageUrl: "https://gurzu.com/img/gurzu/mern-stack-01.webp", // Replace with actual image URLs
    },
    // Add more tutorials as needed
  ];

  return (
    <div className="tutorials-container">
      <h2 className="tutorials-title">Our Tutorials</h2>
      <div className="tutorials-grid">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="tutorial-card">
            <img
              src={tutorial.imageUrl}
              alt={tutorial.title}
              className="tutorial-image"
            />
            <div className="tutorial-content">
              <h3 className="tutorial-title">{tutorial.title}</h3>
              <p className="tutorial-description">{tutorial.description}</p>
              <p className="tutorial-price">{tutorial.price}</p>
              <button className="tutorial-button">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;

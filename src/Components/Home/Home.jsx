import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Function to add text character by character
  useEffect(() => {
    const codeLines = [
      "const learnCoding = () => {",
      "  console.log('Start your coding journey');",
      "  let skills = ['HTML', 'CSS', 'JavaScript', 'React'];",
      "  skills.forEach(skill => master(skill));",
      "};",
      "learnCoding();",
    ];

    let currentText = "";
    let i = 0;
    let j = 0;

    const typingEffect = setInterval(() => {
      if (i < codeLines.length) {
        if (j < codeLines[i].length) {
          currentText += codeLines[i].charAt(j); // Add character by character
          setDisplayText(currentText + "_"); // Add an underscore cursor
          j++;
        } else {
          currentText += "\n"; // Move to the next line after finishing one line
          i++;
          j = 0;
        }
      } else {
        setDisplayText(currentText); // Remove underscore cursor when finished
        clearInterval(typingEffect);
      }
    }, 50); // Fast typing speed for a character-by-character effect

    // Blinking cursor effect
    const cursorBlink = setInterval(() => {
      setCursorVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => {
      clearInterval(typingEffect);
      clearInterval(cursorBlink);
    };
  }, []);

  return (
    <div className="home-container">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="home-text">
          <h1>
            Welcome to <span>&nbsp;Guruz&lt;Code /&gt;</span>
          </h1>
          <p>
            Learn to code with step-by-step tutorials,
            <br /> hands-on projects, and community support. Start your coding
            journey today!
          </p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Start Learning
          </motion.button>
        </div>

        {/* Code animation block */}
        <motion.div
          className="code-animation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <pre>
            <motion.code
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {displayText}
              {/* Cursor in the code block */}
              <motion.span
                className="blinking-cursor"
                initial={{ opacity: 1 }}
                animate={{ opacity: cursorVisible ? 1 : 0 }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.code>
          </pre>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

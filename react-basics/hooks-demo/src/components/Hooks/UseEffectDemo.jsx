import React, { useEffect, useState } from "react";

const COLORS = ['RED', 'GREEN', 'BLUE'];

const UseEffectDemo = () => {

  const [randomColor, setRandomColor] = useState(COLORS[0])

  // Return a new random color from the COLORS array
  function getRandomColor() {
    let newColor = COLORS[Math.floor(Math.random(1) * 3)];
    if (newColor === randomColor) return getRandomColor();
    return newColor;
  }

  // Called everytime whenever any of the state changes of the component
  useEffect(() => {
    console.log("MOUNT: Use Effect 1", randomColor);
    return () => {
      console.log("UNMOUNT: Use Effect 1", randomColor);
    }
  })

  // Called first time when the component is getting rendered
  useEffect(() => {
    console.log("MOUNT: Use Effect 2", randomColor);
    return () => {
      console.log("UNMOUNT: Use Effect 2", randomColor);
    }
  }, [])

  // Called when the randomColor state gets updated
  useEffect(() => {
    console.log("MOUNT: Use Effect 3", randomColor);
    return () => {
      console.log("UNMOUNT: Use Effect 3", randomColor);
    }
  }, [randomColor])

  return <div>
    <button onClick={() => setRandomColor(getRandomColor())}>Click hear</button>
    <span style={{ color: randomColor }}> to generate random RGB</span>
    <br></br><p style={{ fontSize: '12px' }}>**check logs on your browser console</p>
  </div>;
};

export const UseEffectDemoString = `
    const COLORS = ['RED', 'GREEN', 'BLUE'];

    const UseEffectDemo = () => {

      const [randomColor, setRandomColor] = useState(COLORS[0])

      // Return a new random color from the COLORS array
      function getRandomColor() {
        let newColor = COLORS[Math.floor(Math.random(1) * 3)];
        if (newColor === randomColor) return getRandomColor();
        return newColor;
      }

      // Called everytime whenever any of the state changes of the component
      useEffect(() => {
        console.log("MOUNT: Use Effect 1", randomColor);
        return () => {
          console.log("UNMOUNT: Use Effect 1", randomColor);
        }
      })

      // Called first time when the component is getting rendered
      useEffect(() => {
        console.log("MOUNT: Use Effect 2", randomColor);
        return () => {
          console.log("UNMOUNT: Use Effect 2", randomColor);
        }
      }, [])

      // Called when the randomColor state gets updated
      useEffect(() => {
        console.log("MOUNT: Use Effect 3", randomColor);
        return () => {
          console.log("UNMOUNT: Use Effect 3", randomColor);
        }
      }, [randomColor])

      return <div>
        <button onClick={() => setRandomColor(getRandomColor())}>Click hear</button>
        <span style={{ color: randomColor }}> to generate random RGB</span>
      </div>;
    };
`;

export default UseEffectDemo;

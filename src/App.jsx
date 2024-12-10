// // import { useState } from "react";

// // const App = () => {
// //   const [input, setInput] = useState();
// //   const [output, setOutput] = useState(null);

// //   const heavyTask = () => {
// //     let sum = 0;
// //     for (let i = 0; i < 1e8; i++) {
// //       sum += i;
// //     }
// //     setOutput(sum);
// //   };
// //   return (
// //     <>
// //       {/* <h1>hello</h1>
// //       <h1>hello world</h1> */}
// //       <input
// //         name="name"
// //         value={input}
// //         onChange={(e) => setInput(e.target.value)}
// //       />

// //       <button onClick={heavyTask}>Heavy Calculation Result</button>

// //       {/* show heavy calculation result */}
// //       <div>
// //         {output !== null && <h1>Heavy Calculation Result: {output}</h1>}
// //       </div>
// //     </>
// //   );
// // };

// // export default App;

// // import { useState } from "react";

// // const App = () => {
// //   const [text, setText] = useState("");
// //   const [position, setPosition] = useState(0);

// //   const animateBox = () => {
// //     let pos = 0;

// //     const move = () => {
// //       if (pos < 300) {
// //         pos += 5;
// //         setPosition(pos); // Update position state
// //         requestAnimationFrame(move); // Schedule the next frame
// //       }
// //     };

// //     move(); // Start animation
// //   };

// //   return (
// //     <div style={{ padding: "20px", fontFamily: "Arial" }}>
// //       <h1>React Fiber Animation Demo</h1>

// //       {/* Input for typing */}
// //       <input
// //         type="text"
// //         value={text}
// //         onChange={(e) => setText(e.target.value)}
// //         placeholder="Type here..."
// //         style={{
// //           width: "250px",
// //           height: "40px",
// //           fontSize: "16px",
// //           marginBottom: "20px",
// //         }}
// //       />

// //       {/* Button to trigger animation */}
// //       <button
// //         onClick={animateBox}
// //         style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
// //       >
// //         Start Animation
// //       </button>

// //       {/* Animated box */}
// //       <div
// //         style={{
// //           width: "50px",
// //           height: "50px",
// //           backgroundColor: "blue",
// //           position: "relative",
// //           top: `${position}px`,
// //           transition: "top 0.1s linear",
// //         }}
// //       ></div>
// //     </div>
// //   );
// // };

// // export default App;

// import { useState } from "react";

// const App = () => {
//   const [text, setText] = useState(""); // State for input text
//   const [result, setResult] = useState(null); // State for calculation result
//   const [loading, setLoading] = useState(false); // State to indicate calculation in progress

//   // Simulate heavy calculation in chunks
//   const heavyCalculation = () => {
//     let sum = 0;

//     const calculateChunk = (start, end) => {
//       debugger
//       for (let i = start; i < end; i++) {
//         sum += i;
//       }

//       setResult(sum); // Update the result for the current chunk
//       console.log(`Processed chunk: ${start} to ${end}`);

//       if (end < 1e8) {
//         setTimeout(() => calculateChunk(end, end + 1e6), 0); // Pause and continue
//       }
//     };

//     calculateChunk(0, 1e6); // Start with the first chunk
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>React Fiber Simulation</h1>

//       {/* Input for typing */}
//       <input
//         type="text"
//         name="text"
//         value={text}
//         onChange={(e) => {
//           debugger; // Observe input change
//           setText(e.target.value);
//         }}
//         placeholder="Type here..."
//         style={{
//           width: "250px",
//           height: "40px",
//           margin: "25px",
//           fontSize: "16px",
//         }}
//       />

//       {/* Button to trigger heavy calculation */}
//       <button
//         onClick={() => {
//           debugger; // Observe button click
//           heavyCalculation();
//         }}
//         style={{
//           padding: "10px 20px",
//           fontSize: "16px",
//           cursor: "pointer",
//         }}
//       >
//         Start Heavy Calculation
//       </button>

//       {/* Loading and result display */}
//       <div style={{ marginTop: "20px", fontSize: "18px" }}>
//         {loading && <h2>Calculating... Please wait</h2>}
//         {result !== null && <h2>Calculation Result: {result}</h2>}
//       </div>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   let counter = 10;

//   const handleIncrement = () => {
//     counter = counter + 1;
//     console.log(counter);
//   };
//   return (
//     <>
//       <h1>{counter}</h1>
//       <button onClick={() => handleIncrement()}>Increment</button>
//     </>
//   );
// };

// export default App;
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => handleIncrement()}>Increment</button>
    </>
  );
};

export default App;

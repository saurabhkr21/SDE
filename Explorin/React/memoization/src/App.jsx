// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useRef } from "react";

// export default function App() {
//   const endRef = useRef(null);
//   // useEffect(() => {
//   //   endRef.current.scrollIntoView({smooth: true});
//   // }, [endRef]);

//   console.log("endRef", endRef.current);

//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   // const [count, setCount] = useState(0);
//   const count = useRef(0);

//   const inputRef = useRef(null);

//   inputRef.current?.focus();

//   // let count = 0;
//   // count++;

//   const [sv, ssv] = useState(0);
//   const rv = useRef(1);

//   useEffect(() => {
//     endRef.current.scrollIntoView({ behavior: "auto" });
//   }, [endRef, sv]);
//   useEffect(() => {
//     count.current = count.current + 1;
//     console.log("count", count.current);
//     // setCount((prev) => prev + 1);
//   });

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         // width: "500px",
//         // height: "500px",
//         backgroundColor: "blue",
//         fontSize: "100px",
//       }}
//       // onClick={clickFn}
//     >
//       <button onClick={() => ssv(sv + 1)}>{sv}</button> |{" "}
//       <button onClick={() => (rv.current = rv.current + 1)}>
//         {rv.current}
//       </button>
//       {">"} {count.current} {"<"}
//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//           justifyContent: "center",
//           alignItems: "center",
//           // width: "500px",
//           // height: "500px",
//           backgroundColor: "red",
//           fontSize: "100px",
//           color: "white",
//           flexDirection: "column",
//         }}
//       >
//         {arr.map((item, index) => {
//           return (
//             <div
//               key={index}
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 width: "250px",
//                 height: "250px",
//                 backgroundColor: "green",
//                 fontSize: "100px",
//                 color: "white",
//               }}
//             >
//               {item}
//             </div>
//           );
//         })}
//         <input type="text" placeholder="inputttt......" />
//         <input ref={inputRef} type="text" placeholder="inputttt......" />
//         <div id="end" ref={endRef} className="test" />
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useMemo } from "react";

export default function App() {
  const [color, setColor] = useState("red");
  const [stateVar, setStateVar] = useState("ascending");

  const sampleFunction = useCallback(() => {
    console.log("Sample Function");
    return "sample";
  }, [])

  // function sampleFunction() {
  //   console.log("Sample Function");
  //   return "sample";
  // }

  sampleFunction();

  const result = useMemo(() => {
    console.log("Running Funcation on Order : ", stateVar);
    const data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    for (let i = 0; i < 5000; i++) {
      // console.log("i", i, data);
      // console.log(0);
      console.error("i");
    }
    // setColor("teal");
    return data;
  }, [stateVar]);

  console.log("Result : ", result);

  return (
    <>
      <div
        style={{
          backgroundColor: color,
        }}
        onClick={() =>
          // setStateVar(stateVar === "ascending" ? "descending" : "ascending")
          setColor(color === "red" ? "blue" : "red")
        }
      >
        {stateVar}
        Hello Dosto@!
      </div>
      <div
        style={{
          backgroundColor: "green",
          color: "white",
        }}
        onClick={() =>
          setStateVar(stateVar === "ascending" ? "descending" : "ascending")
        }
      >
        {stateVar}
        Explorin
      </div>
      <Comp data="sample" />
    </>
  );
}
const Comp = React.memo(({data}) => {
  return <div>{data}</div>;
});
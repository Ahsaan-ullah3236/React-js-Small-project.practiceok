import { useState, useCallback, useEffect } from "react";
import "./App.css";
function App() {
  const [length, setlength] = useState(8);
  const [numberAllowd, setnumberAllowd] = useState(false);
  const [charAllowd, setcharAllowd] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowd) str += "0123456789";
    if (charAllowd) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +
       1);
       pass += str.charAt(char);
    }
     
    setpassword(pass);

  }, [length, numberAllowd, charAllowd,]);


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowd, charAllowd, passwordGenerator]);


  return (
    <div
      className="w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-3 my-8 text-orange-500 
      bg-gray-800
      "
    >
      <h1 className="text-white text-center">Password Generator</h1>
      <div
        className="flex shadow rounded-lg
      overflow-hidden mb-4"
      >
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Your Password"
          readOnly
        ></input>
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ">
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursior-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>length: {length}</label>

           {/* for the number  */}
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={numberAllowd}
              id="numberInput"
              onChange={() => {
                setnumberAllowd((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
            </div>


            {/* for the special characters   */}
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={charAllowd}
              id="charInput"
              onChange={() => {
                setcharAllowd((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;


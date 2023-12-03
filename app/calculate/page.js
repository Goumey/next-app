"use client";
import React, { useState } from "react";

export default function Caluculate() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setsecondNumber] = useState(0);
  const [operator, setOperator] = useState(null);
  const [mode, setMode] = useState(false);
  return (
    <div>
      <div className="calculator">
        <div className="content">
          <div className="screen">
            <input type="text" value={firstNumber} />
          </div>

          <div className="keypad">
            <div className="first-line">
              <input
                type="button"
                value="AC"
                className="key"
                onClick={() => setFirstNumber("")}
              />
              <input
                type="button"
                value="DEL"
                className="key"
                onClick={() => setFirstNumber(firstNumber.slice(0, -1))}
              />
              <input
                type="button"
                value="%"
                className="key"
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
              <input
                type="button"
                value="+"
                className="key"
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
            </div>
            <div className="second-line">
              <input
                type="button"
                value="9"
                className="key key-number "
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
              <input
                type="button"
                value="8"
                className="key key-number"
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
              <input
                type="button"
                value="7"
                className="key key-number"
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />

              <input
                className="key"
                type="button"
                value={"-"}
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
            </div>
            <div className="third-line">
              <input
                type="button"
                value="6"
                className="key key-number"
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
              <input
                type="button"
                value="5"
                className="key key-number"
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
              <input
                type="button"
                value="4"
                className="key key-number"
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />

              <input
                className="key"
                type="button"
                value={"*"}
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
            </div>
            <div className="fourth-line">
              <input
                type="button"
                value="3"
                className="key key-number"
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
              <input
                type="button"
                value="2"
                className="key key-number"
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
              <input
                type="button"
                value="1"
                className="key key-number"
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
              <input
                className="key"
                type="button"
                value={"/"}
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
            </div>
            <div className="fifth-line">
              <input
                type="button"
                value="0"
                className="key key-number"
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />
              <input
                type="button"
                value="."
                className="key key-number"
                onClick={(e) => setFirstNumber(firstNumber + e.target.value)}
              />

              <input
                className="key-equal"
                type="button"
                value={"="}
                onClick={(e) => setFirstNumber(eval(firstNumber))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

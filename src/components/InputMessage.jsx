import React, { useState } from "react";
import { Button, Input } from "antd";

export default function InputMessage({ setInputMsg, inputMsg, callBack }) {
  console.log(inputMsg);

  const [value, setValue] = useState("");

  function saveMsg() {
    if (value && callBack !== "") {
      setInputMsg([
        ...inputMsg,
        {
          id: Math.random(),
          email: callBack.email,
          text: value,
        },
      ]);

      fetch("http://localhost:9999/message-create", {
        method: "POST",
        body: JSON.stringify({
          id: Math.random(),
          email: callBack.email,
          text: value,
        },),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      setValue("");
    } else if (callBack === "") {
      alert("Choose user please");
    } else {
      alert("The line is empty");
    }
  }

  return (
    <>
      <Input.Group compact>
        <Input
          style={{ width: "calc(100% - 70px)" }}
          placeholder="Input your message... "
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="primary" onClick={saveMsg}>
          Send
        </Button>
      </Input.Group>
    </>
  );
}

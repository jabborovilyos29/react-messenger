import React, { useState } from "react";
import { Button, Input } from "antd";

export default function InputMessage({setInputMsg, inputMsg, callBack}) {

console.log(inputMsg)


  const [value, setValue] = useState('')

  function saveMsg(){
    if(value && callBack !== '' ){ 
         setInputMsg(
             [...inputMsg, {
                 id: Math.random(),
                 email: callBack.email,
                 text: value,
             }]
         )
     setValue('')
     }
     else if(callBack === ''){
      alert('Choose user please')
     }
     else{
         alert('The line is empty')
     }
 }
 
  return (
    <>
      <Input.Group compact>
        <Input
          style={{ width: "calc(100% - 70px)" }}
          placeholder="Input your message... "
          value={value}
          onChange={(e) => setValue(e.target.value) }
        />
        <Button 
        type="primary"
        onClick={saveMsg}
        >Send</Button>
      </Input.Group>
    </>
  );
}

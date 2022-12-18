import React from "react";
import { Button, Input } from "antd";

export default function InputMessage() {
  return (
    <>
      <Input.Group compact>
        <Input
          style={{ width: "calc(100% - 70px)" }}
          placeholder="Input your message... "
        />
        <Button type="primary">Send</Button>
      </Input.Group>
    </>
  );
}

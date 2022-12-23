import React, { useState, useEffect } from "react";
import { Empty, Card } from "antd";

export default function MessageBox({ inputMsg, forFilterUser }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(() => inputMsg);
  }, [inputMsg]);

  console.log(forFilterUser);

  return (
    <>
      {message === "" ? (
        <Empty
          description={false}
          style={{ marginRight: "250px", marginBottom: "200px" }}
        />
      ) : (
        message
          .filter((item) => {
            return item.email === forFilterUser;
          })
          .map((item) => {
            return (
              <Card key={item.id} size={"small"} className="messages">
                {item.text[0] === "*" &&
                item.text[item.text.length - 1] === "*" ? (
                  <p style={{ fontWeight: "800", letterSpacing: "1px" }}>
                    {item.text.slice(1, -1)}
                  </p>
                ) : item.text[0] === "/" &&
                  item.text[item.text.length - 1] === "/" ? (
                  <i style={{ letterSpacing: "0.5px" }}>
                    {item.text.slice(1, -1)}
                  </i>
                ) : item.text[0] === "_" &&
                  item.text[item.text.length - 1] === "_" ? (
                  <u style={{ letterSpacing: "0.5px" }}>
                    {item.text.slice(1, -1)}
                  </u>
                ) : item.text[0] === "~" &&
                  item.text[item.text.length - 1] === "~" ? (
                  <strike style={{ letterSpacing: "0.5px" }}>
                    {item.text.slice(1, -1)}
                  </strike>
                ) : (
                  <p>{item.text}</p>
                )}
              </Card>
            );
          })
      )}
    </>
  );
}

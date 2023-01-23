import React, { useState, useEffect } from "react";
import { Empty, Card, Modal, Input } from "antd";

export default function MessageBox({ inputMsg, forFilterUser }) {

  const [deleteItem, setDeleteItem] = useState(false)
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(null);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
    setEdit(null);
  };

   const handleOk = async() => {
    await fetch("http://localhost:9999/update-message", {
        method: "PUT",
        body: JSON.stringify({
          id: edit,
          text: value,
        },),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      })
        .then((response)  =>  response.json())
        .then((json) => console.log(json));
    setIsModalOpen(false);
    setEdit(null);
    setDeleteItem(!deleteItem);
  };

  const onDelete = async(id) =>{
    await fetch("http://localhost:9999/delete-message", {
        method: "DELETE",
        body: JSON.stringify({
          id: id
        },),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      })
        
      setDeleteItem(!deleteItem)
    }


  const onEdit = (id, text) => {
    setEdit(id);
    setValue(text);
  };

  
  useEffect(() => {
    fetch("http://localhost:9999/send-message")
      .then((res) => res.json())
      .then((contacts) => setMessage(contacts));
  }, [inputMsg, deleteItem]);

  useEffect(() => {
  }, [message]);

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
              <div className="message__block" key={item.id + 1}>
                <Modal
                  title="Edit message..."
                  open={edit === item.id ? true : isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </Modal>
                <div>
                  <div
                    className="edit"
                    key={item.id + 0.1}
                    onClick={() => onEdit(item.id, item.text)}
                  >
                    &#10002;
                  </div>
                  <div 
                    className="edit delete" 
                    key={item.email}
                    onClick={()=> onDelete(item.id)}
                  >
                    &#128465;
                  </div>
                </div>
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
              </div>
            );
          })
      )}
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';

const ContactList = () => {
  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        body.results.length = 7;
        setData(body.results);
      });
  };
  useEffect(() => {
    appendData();
  }, []);
  
  return (
    <List>
      <VirtualList
        data={data}
        height={'100%'}
        itemKey="email"
      >
        {(item) => (
          <List.Item key={item.email}    className="bgColorBlue" >
            <List.Item.Meta
              avatar={<Avatar  src={item.picture.large} />}
              title={<div className="colorfff">{item.name.last}</div>}
            />

          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
export default ContactList;
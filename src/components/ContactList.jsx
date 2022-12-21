import React, { useEffect, useState } from 'react';
import { Avatar, List } from 'antd';
import VirtualList from 'rc-virtual-list';

const fakeDataUrl = 'http://localhost:9999/contacts';

const ContactList = ({setCallBack, setForFilterUser}) => {
  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((contacts) => {
        setData(contacts);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  function callBackInfo(item){
    setCallBack(item)
    setForFilterUser(item.email)
  }

  return (
    <List>
      <VirtualList
        data={data}
        height={'100%'}
        itemKey="email"
      >
        {(item) => (
          <List.Item 
          key={item.email}    
          className="bgColorBlue" 
          onClick={()=> callBackInfo(item)}
          >
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
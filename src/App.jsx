import React from "react";
import { Layout } from 'antd'
import ContactList from './components/ContactList.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import InputMessage from './components/InputMessage.jsx'
import MessageBox from './components/MessageBox.jsx'
import { useState } from "react";

const { Header, Footer, Sider, Content } = Layout;

function App() {

  const [callBack, setCallBack] = useState('')
  const [inputMsg, setInputMsg] = useState('')
  const [forFilterUser, setForFilterUser]  = useState([])
  
  return (
    <div className="parent__container">
      <Layout>
        <Sider>
          <Header className="headerAccount"><h3>NE Telegram</h3></Header>
          <ContactList setCallBack={setCallBack} setForFilterUser={setForFilterUser} />
        </Sider>
      <Layout>
        <Header>
          <HeaderComponent callBack={callBack} />
        </Header>
        <Content>
          <MessageBox 
          inputMsg={inputMsg}
          setCallBack={setCallBack}
          callBack={callBack}
          forFilterUser={forFilterUser}
          />
        </Content>
        <Footer>
          <InputMessage 
          setInputMsg={setInputMsg} 
          inputMsg={inputMsg} 
          setCallBack={setCallBack}
          callBack={callBack}
          />
        </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

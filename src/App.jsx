import React from "react";
import { Layout } from 'antd'
import ContactList from './components/ContactList.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import InputMessage from './components/InputMessage.jsx'
import MessageBox from './components/MessageBox.jsx'

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="parent__container">
      <Layout>
        <Sider>
          <Header className="headerAccount">Account</Header>
          <ContactList />
        </Sider>
      <Layout>
        <Header>
          <HeaderComponent />
        </Header>
        <Content>
          <MessageBox />
        </Content>
        <Footer>
          <InputMessage />
        </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

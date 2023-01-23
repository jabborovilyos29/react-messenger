import React, { useEffect, useState } from 'react'
import { Avatar, Modal } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'


export default function HeaderComponent({callBack}) {
  
  const [headerUser, setHeaderUser] = useState('')
  const info = () =>{
    Modal.info({
      title: "Contact info",
      content: (
        <div>
        <h3> <Avatar size="large" src={headerUser.picture} alt='i' /></h3>
        <p> <b>Last name: </b> {headerUser.lastname} </p> 
        <p> <b>First name: </b> {headerUser.firstname} </p>
        <p> <b>email: </b> {headerUser.email} </p>
        </div>
      ),
    })
  }  
  
  
  
  useEffect(() => {
    const newUser = callBack
    setHeaderUser(newUser)
  }, [callBack])

  
  return (
    <>
    {
      headerUser === ''?
      <div>
        <h3>Welcome :)</h3>
      </div>
      :
      <div className='headerComponent'>
        <h3> <Avatar size="large" src={headerUser.picture} alt='i' /> {headerUser.lastname} {headerUser.firstname} </h3>
        <h3> <InfoCircleOutlined 
        className='headerIconInfo' 
        onClick={info}
        />
        </h3>
      </div>
    }
    </>
  )
}

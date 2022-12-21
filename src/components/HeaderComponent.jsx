import React, { useEffect, useState } from 'react'
import {Avatar} from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'


export default function HeaderComponent({callBack}) {
  
  const [headerUser, setHeaderUser] = useState('')
  
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
        <h3> <Avatar size="large" src={headerUser.picture.large} /> {headerUser.name.last} {headerUser.name.first} </h3>
        <h3> <InfoCircleOutlined 
        className='headerIconInfo' 
        />
        </h3>
      </div>
    }
    </>
  )
}

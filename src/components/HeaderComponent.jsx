import React, { useEffect, useState } from 'react'
import {Avatar} from 'antd'


export default function HeaderComponent({callBack}) {
  
  const[headerUser, setHeaderUser] = useState('')
  
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
      <div>
        <h3> <Avatar size="large" src={headerUser.picture.large} /> {headerUser.name.last} {headerUser.name.first} </h3>
      </div>
    }
    </>
  )
}

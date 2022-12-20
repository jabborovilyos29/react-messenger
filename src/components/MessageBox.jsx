import React, { useState, useEffect } from 'react'
import { Empty, Card } from 'antd'

export default function MessageBox({inputMsg, forFilterUser}) {

  const [message, setMessage] = useState('')
  
  useEffect(() => {
    setMessage(() => inputMsg)
  },[inputMsg])


  console.log(forFilterUser);

  return (
    <>
    {
      message === ''?
      <Empty description={false} style={{marginTop: '150px'}}/>
      :
      message
      .filter(item => {
        return (item.email === forFilterUser)
      })
      .map(item => {
        return(
        <Card key={item.id} size={'small'} style={{ 
          width: 250, 
          margin: 10,
        }}>
         <p>{item.text}</p>
        </Card>
     
          
        )
      })
    }
    </>
  )
}

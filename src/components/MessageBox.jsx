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
      <Empty description={false} style={{marginRight: '250px', marginBottom: '200px'}}/>
      :
      message
      .filter(item => {
        return (item.email === forFilterUser)
      })
      .map(item => {
        return(
        <Card 
        key={item.id} 
        size={'small'} 
        className='messages'
        >
         <p>{item.text}</p>
        </Card>
     
          
        )
      })
    }
    </>
  )
}

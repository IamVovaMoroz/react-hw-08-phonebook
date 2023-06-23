
import React from 'react'
import phonebook from '../phonebook.png';

function HomePage() {
  return (
    <div>
        <p >
        Welcome to the Phone Book application! Try it out today and discover how easy it is to manage your contacts!{' '}
       <img
            src={phonebook}
            alt="film Gif"
            style={{ width: '880px', height: '600px' }}
          />
         
      </p>
    </div>
  )
}

export default HomePage

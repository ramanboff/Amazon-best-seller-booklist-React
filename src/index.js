import React from 'react'
import ReactDom from 'react-dom/client'
//CSS
import './index.css'
import { data } from './books'
import SpecificBook from './Book'

//setup vars

function BookList() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <SpecificBook key={book.id} book={book}></SpecificBook>
      })}
    </section>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<BookList />)

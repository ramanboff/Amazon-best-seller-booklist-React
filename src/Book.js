import React from 'react'

const SpecificBook = (props) => {
  const { image, title, author } = props.book

  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={image} alt='' />
      <h1 onClick={() => console.log(author)}>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

export default SpecificBook

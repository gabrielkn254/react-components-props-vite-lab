function Article({id, title, date, preview}){
const postDate = date ?? "/January 1, 1970/"

  return (
    <>
      <article key={id}>
        <h3>{title}</h3>
        <small>{postDate}</small>
        <p>{preview}</p>
      </article>
    </>
  )
}

export default Article
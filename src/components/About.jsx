function About({image, about}){
const source = image ?? "https://via.placeholder.com/215"
  return (
    <>
      <aside>
        <img src={source} alt="blog logo"/>
        <p>{about}</p>
      </aside>
    </>
  )
}

export default About
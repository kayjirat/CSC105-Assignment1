import React from 'react'


const Gallery = () => {
  return (
    <section id='Gallery'>
        <h2>Gallery</h2>
        <ul>
            <li><img width={200} src="./src/assets/pic1.jpg" alt="picture1"></img> </li>
            <li><img width={200} src="./src/assets/pic2.jpg" alt="picture2"></img> </li>
            <li><img width={200} src="./src/assets/pic3.png" alt="picture3"></img> </li>
        </ul>
    </section>
  )
}

export default Gallery
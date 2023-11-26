import React from 'react'

const Menu = () => {
    const posts = [
        {
          id: 1,
          title: "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit.",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus.",
          img: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    
        {
          id: 2,
          title: "Qui est esse.",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus.. Voluptatum, voluptatibus.",
          img: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
        },
    
        {
          id: 3,
          title: "Ea molestias quasi exercitationem repellat qui ipsa sit aut.",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus.",
          img: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    
        {
          id: 4,
          title: "Ea molestias quasi exercitationem repellat qui ipsa sit aut.",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus.",
          img: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    
        {
          id: 5,
          title: "Ea molestias quasi exercitationem repellat qui ipsa sit aut.",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptatibus.",
          img: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
      ];
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map((post)=>(
            <div className='post' key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}        
    </div>
  )
}

export default Menu
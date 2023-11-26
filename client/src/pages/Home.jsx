import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

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
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className='post' key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
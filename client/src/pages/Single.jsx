import React from 'react'
import Edit from "../imgs/edit.png"
import Delete from "../imgs/delete.png"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="info">
            <span>Christina Morillo</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptas cupiditate odio beatae, cum dicta debitis incidunt ab libero, ad assumenda omnis eos modi hic molestiae, in nulla sit esse.
        Veniam sint ipsam saepe, eaque facere eos soluta repellat quibusdam nostrum obcaecati cumque magni provident illum dignissimos alias aut doloremque. Excepturi accusamus odio maiores veritatis in voluptate adipisci sequi sint.
        Ea quaerat ipsam iure vero et nobis esse asperiores dignissimos, totam eligendi molestias eos reprehenderit ipsum exercitationem eveniet repudiandae 
        <br /> 
        <br /> 
        impedit. Labore porro harum molestias! Molestiae quibusdam enim adipisci reiciendis. Tempore?
        Nisi, id eius. Unde id soluta natus pariatur odit, placeat eligendi. Ex natus, excepturi necessitatibus doloribus labore minima rem sequi dicta, nisi recusandae maiores, totam placeat impedit velit quas quis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime mollitia dolorem, dicta consequuntur quae obcaecati excepturi. Tempore vero, inventore mollitia ratione fugit at, fugiat perspiciatis voluptates eveniet, adipisci velit.
        <br />
        <br />
        Deserunt architecto inventore reiciendis similique. Asperiores sequi repellat voluptates hic, dolorem facere quos cupiditate perspiciatis dolorum eos. Dicta facilis minimrecusandae cupiditate cumque officia!
        Sint expedita nihil voluptates quia impedit maiores quo deserunt fuga quidem ex pariatur ipsa, iste ducimus! Laborum enim repellendus reiciendis sunt quibusdam alias, esse aperiam iusto minima! Modi, debitis quas.
        Laboriosam a 
        <br />
        <br />
        voluptatem nemo quasi natus enim at dicta consequuntur soluta aliquid, molestias ipsam ut magni officia veritatis quod. Quisquam maxime voluptatum reiciendis minima sequi illum ducimus. Cumque, hic doloremque.
        Qui veritatis impedit ipsum commodi in optio dolorem? Doloribus quaerat dolor temporibus, ex et enim placeat atque accusamus magnam at soluta. Expedita est maiores deserunt, dolorum architecto quas consequuntur aperiam?</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
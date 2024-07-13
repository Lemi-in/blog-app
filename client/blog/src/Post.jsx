import post from './assets/post.webp'

export default function Post() {
  return (
    <div className="post">
        <div className="image">
          <img src={post} alt="" />
        </div>
          <div className="text">
            <h2>Full house battery backup</h2>
            <p className="info">
              <a href="" className="author">Lemi</a>
              <time > 2024-07-22 1:0 PM</time>
            </p>
            <p className='summery'>this is a tempo</p>
          </div>
      </div>
  )
}

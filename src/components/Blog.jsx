import blogData from "./Blogdata";

const Blog = () => {
  return (
    <>
      <div>
        <div className="blogpost">
          <h1>Read Blog Posts</h1>
          <p>VIEW ALL</p>
        </div>
        <div className="blogdata">
          {blogData.map((item)=>(
            <div className="blogcard" key={item.id}>
              <img src={item.image} alt="name"/>
              <p>{item.category} / {item.date}</p>
              <h2>{item.title}</h2>
              <p className="carddis">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

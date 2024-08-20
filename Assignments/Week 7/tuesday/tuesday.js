/*

const BlogList = ({ blogs, title}) => {
  // const blogs = props.blogs;
  // const title = props.title;
  // console.log(blogs);

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}


import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Surafel', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Samuel', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Alpha', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
}
 
export default Home;

const Home = () => {

  const handleClick = () => {
    console.log('hello everyone';
  }

  const handleClickAgain = (name) => {
    console.log('hello ' + name);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('mario')}>Click me again</button>
    </div>
  );
}
 
export default Home;


import { useState } from "react";

const Home = () => {
  // let name = 'mario';
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = 'luigi';
    setName('luigi');
    setAge(30);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;

const Home = () => {
   let name = 'mario';

  const handleClick = () => {
    name = 'luigi';
    console.log(name);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name }</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;

*/
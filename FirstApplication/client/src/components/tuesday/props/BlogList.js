


const BlogList = ({ blogs, title }) =>{

    console.log("blogs:" + blogs);
    console.log("title:" + title);
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(props.blogs);

    return(

        <div>
            <h2>{title}</h2>
            {blogs.map(blog =>(
                <div key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
    
}


export default BlogList
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Surafel', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Samuel', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Alpha', id: 3 }
    ])

    return(

        <div>
            <BlogList blogs={blogs} title="Hello world"/>
        </div>

    );
}

export default Home;
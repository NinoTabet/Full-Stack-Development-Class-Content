const Home = () => {

    const handleClick = (e) => {
        console.log('Hello world');
        console.log(e);
    }

    const handleClickAgain = (name) => {
        console.log('My name is '+ name);
        // console.log(e);
    }

    return(
        <div>
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {handleClickAgain('Surafel')}}>Click me again</button>
        </div>
    )
}

export default Home;
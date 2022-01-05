import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
   // const [name, setName] = useState('Mario');  less #9
   // const [age, setAge] = useState(25) lesson #9
    //const handleClick = () => {
       // let name = 'Mario'
       // console.log('Hello Ninjas')
    //   setName('Luigi');
     //  setAge(30);
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
     

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="List of Blogs!" />}
        </div>
     );
}
 
export default Home;
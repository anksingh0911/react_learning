import Users from "./Users";

const About = ()=>{
  return(
    <>
    <h1 className="text-center text-4xl text-bold text-black">About Page</h1>
    <Users title={'This is a class component'}/>
    </>
  )
}
export default About;
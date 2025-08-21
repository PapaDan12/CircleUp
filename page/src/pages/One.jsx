import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Scroller from "../components/Scroller";
import UserList from "../components/demos";



const One = () => {
 
  return (
    <div>
      <Navbar data-aos="fade-up" />
      <Body />
      <Scroller /> 
      <UserList/>   
      <Footer />   
    
      
    </div>
  )
}

export default One

import Navbar from '../components/Navbar';
import TeachersCollection from '../components/TeacherCollection';
import Search from '../components/Searchbar';
import BestStudents from '../components/BestStudents';


const HomePage = () => {
  return (
  <div className="home-page">

  <div className='nav-bar'>
  <Navbar />
  </div>

    <div className="form col col-12" style={{display:'flex'}}>

  <div className="form-left col col-8">
  <div className="search">
    <Search />
  </div>
    <TeachersCollection />    
  
  </div>
  <div className="form-right col col-3">
  <div className="best-students">
    <BestStudents />
  </div>
  </div>

  </div>

  </div>
  );
};

export default HomePage;

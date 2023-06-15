import instagram from '../instagram.svg';
import './Home.css';
import FORM from '../components/form/Form.js';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div className='container text-center'>
          <div className='row'>
            <h1 className='text-uppercase font-weight-bold'> Instagram Likes Prediction</h1>
          </div>
          <img className='img-fluid' src={instagram} />
          <div className='row'>
          </div>
          <div className='row'>
            <FORM />
          </div>
        </div>

      </header>
    </div>
  );
}

export default Home;

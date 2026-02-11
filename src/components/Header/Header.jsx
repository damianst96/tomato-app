import './Header.css';
import { assets } from '../../assets/assets';

const Header = function() {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>Order your favorite food here</h2>
        <p>Choose from a diverse menu featuring a diverse array of dishes crafted with the finest ingredients. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at the time.</p>
        <button>Ver Menú</button>
      </div>
    </div>
  )
}

export default Header

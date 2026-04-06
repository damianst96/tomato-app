import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = function() {
  return (
    <div className='explore-menu'>
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">Choose from a diverse menu. One meal at the time.</p>
      <div className="explore-menu-list">
        {menu_list.map(function(item, index){
            return (
                <div className='explore-menu-list-item'>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu

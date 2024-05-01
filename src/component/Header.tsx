import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location);
  function pathNameRoute(route: string) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div>
        <div>
      <div className="banner_background">
<h1  className='text-[56px] text-neutral-50  mx-auto  text-center py-10 w-[50%]' >The #1 site real estate professionals trust*
</h1>
<div className="buy_rent_sell_pre_approvel flex list-none gap-3 text-white justify-center py-10 text-[16px]">
  <li className={`${pathNameRoute("/") &&  "text-pink-500 "}`}>Home</li>
  <li>Rent</li>
  <li>Sell</li>
  <li> Pre-approvel</li>
</div>
      </div>
    </div>
    </div>
  )
}

export default Header

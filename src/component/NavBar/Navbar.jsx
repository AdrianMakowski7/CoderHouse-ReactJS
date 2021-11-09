import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="col-xs-12">
      <div className="center-block">
        <ul>
          <li><Link to="/"><img src="https://seeklogo.com/images/D/dc-comics-logo-2507683BBB-seeklogo.com.png" /></Link></li>
          <li><Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" /></Link></li>
          <li><Link to="/"><img src="https://www.seekpng.com/png/full/40-404080_dark-horse-wide-dark-horse-comics-logo-png.png" /></Link></li>
          <li><Link to="/"><img src="https://logodownload.org/wp-content/uploads/2020/06/nbc-logo-2.png" /></Link></li>
          <li><Link to="/"><img src="https://www.firstcomicsnews.com/wp-content/uploads/2016/09/IDW-Logo-600x253.png" /></Link></li>
          <li><Link to="/"><img src="https://cdn.shopify.com/s/files/1/1944/0767/files/Others_Shop-06_aae0d971-5285-41be-a957-80ab3e2f172f_800x220.png?v=1568823525" /></Link></li>
        </ul>
      </div>
  </nav>
  )
}

export default Navbar

import '../allCss/HeaderCss.css';

function Navbar() {
    return (
        <>
            <div>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div>
                    <ul className='navbarCss'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#vaccineList">Vaccine List</a></li>
                        <li><a href="#articles">Vaccine Articles</a></li>
                        <li><a href="#contactUs">Contact Us</a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}
export default Navbar;
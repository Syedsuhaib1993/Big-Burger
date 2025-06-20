
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-teritary dark:bg-gray-900  text-secondary  pt-8 md:pt-0">
      <div className="flex flex-col md:flex-row justify-between p-8  md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-2xl pb-4">Big Burger</h1>
          <div className="flex gap-4 flex-row py-2">
            <FaInstagram size={35}  className="hover:-translate-y-2 transition duration-200 ease-in-out"/>
            <FaFacebook size={35}  className="hover:-translate-y-2 transition duration-200 ease-in-out"/>
            <FaLinkedin size={35} className="hover:-translate-y-2 transition duration-200 ease-in-out" />
          </div>
          <p>
           Here you can Contact us Though different Social Media Platforms . Follow us to never miss any new updates
          </p>
        </div>
        <div>
            <h1 className="font-semibold text-2xl pb-4 pt-5 md:pt-0">Important Links</h1>
            <div className="flex flex-col gap-2 font-medium">
                 <Link to='menu' spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-200 ease-in-out'>Menu</Link>
                <Link to='deals' spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-200 ease-in-out'>Hot Deals</Link>
                <Link to='special' spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-200 ease-in-out'>Special</Link>
            </div>
        </div>
        <div>
            <h1 className="font-semibold text-2xl pb-4 pt-5 md:pt-0">Contact US</h1>
            <div className="flex flex-col gap-2 font-medium">
                 <Link to='/' spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-200 ease-in-out'>Buger Center</Link>
                <Link to='/' spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-200 ease-in-out'>+92 1234567</Link>
                <Link to='/' spy={true}  smooth={true} duration={500} className='cursor-pointer hover:text-primary transition duration-200 ease-in-out'>Gulshan-e-Iqbal Block 2</Link>
            </div>
        </div>
      </div>
        <div>
            <p className="text-center ">@Copyright Developed by
                <span className="font-semibold text-secondary cursor-pointer hover:text-primary transition duration-300 ease-in-out"> SyedSuhaib </span>
                | All Rights reserved
            </p>
        </div>
    </footer>
  );
};

export default Footer;

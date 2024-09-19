import Link from 'next/link';

const NavLink = ({ href, title }) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    const targetSection = document.querySelector(href);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }

    // Use the browser's history API to update the URL without reloading the page
    window.history.pushState(null, '', href);
  };

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </a>
  );
};

export default NavLink;

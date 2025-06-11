import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  const navElements = {
    Home: '',
    Skills: '#skills',
    Educations: '#educations',
    Services: '#services',
    Project: '#projects',
    About: '#about',
    Contact: '#contact',
  };

  return (
    <nav>
<ul className="d-flex flex-wrap justify-content-center gap-3 py-3" style={{ listStyle: "none" }}>
        {Object.entries(navElements).map(([label, href]) => (
          <li key={label}>
            <a href={href} style={{color: 'black', textDecoration: "none"}}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

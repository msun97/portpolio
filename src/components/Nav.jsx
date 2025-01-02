import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav>
        <ul>
            menu
            <Link href='#about'><li>About</li></Link>
            <Link href='#project'><li>Project</li></Link>
            <Link href='#contact'><li>Contact</li></Link>
        </ul>
    </nav>
  );
};

export default Nav;

/*
'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems
*/

'use client';

import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const NavItems = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = activeLink === link.route;
        const [underlineWidth, setUnderlineWidth] = useState(isActive ? '100%' : '0');

        useEffect(() => {
          if (isActive) {
            setUnderlineWidth('100%');
          } else {
            setUnderlineWidth('0');
          }
        }, [isActive]);

        return (
          <li
            key={link.route}
            className="relative flex-center p-medium-16 whitespace-nowrap"
            onMouseEnter={() => setUnderlineWidth('100%')}
            onMouseLeave={() => !isActive && setUnderlineWidth('0')}
            style={{ position: 'relative', paddingBottom: '5px' }}
          >
            <Link href={link.route}>
              <span style={{ color: isActive ? '#0070f3' : '#000', position: 'relative' }}>
                {link.label}
              </span>
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '2px',
                  width: underlineWidth,
                  backgroundColor: isActive ? '#0070f3' : '#000',
                  transition: 'width 0.3s ease',
                }}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;


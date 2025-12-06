'use client';

import Link from 'next/link';
import { ViewTransition } from 'react';

export default function Header() {
  return (
    <ViewTransition name='site-header'>
      <header className='site-header'>
        <h1 className='site-title'>View Transitions Lab</h1>
        <nav className='site-nav'>
          <Link href='/'>Home</Link>
          <Link href='/gallery'>Route transitions</Link>
          <Link href='/manual'>Manual API</Link>
          <Link href='/mpa'>MPA transitions</Link>
        </nav>
      </header>
    </ViewTransition>
  );
}

import React from 'react';
import HeroBanner from './heroBanner';
import Content from './content';
import Auktion from './auktion';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Auktion />
      <Content />
    </>
  )
}

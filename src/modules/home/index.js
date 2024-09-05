import React from 'react';
import HeroBanner from './heroBanner';
import Timer from '../../components/timer';
import Content from './content';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Timer theme="dark" />
      <Content />
    </>
  )
}

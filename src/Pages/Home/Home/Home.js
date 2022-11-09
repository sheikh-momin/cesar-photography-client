import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Serveces from '../../Shared/Serveces';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';

const Home = () => {
  useTitle('home')
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-12'>
        <div className='col-span-3'><Serveces></Serveces></div>
        <div className='col-span-9'><Banner></Banner></div>
      </div>
      <Card></Card>
      <div>
        <h2 className='mb-3 text-lg'>POPULAR POSTS</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <img className='w-30' src="https://img.freepik.com/free-photo/monstera-leaves-rays-sunlight-stripes-shadow-from-blinds-bright-red-background-closeup-selective-focus-wallpaper-ideas_166373-2157.jpg?w=996&t=st=1667851084~exp=1667851684~hmac=647a6b37357fe4fa8af0c8e6cadcb1111004991df7aba4107d03cfa3a87ad0e7" alt="" />

          <img className='w-30' src="https://img.freepik.com/premium-photo/beautiful-cactus-garden-lanzarote-canary-islands_549612-1541.jpg?w=996" alt="" />

          <img className='w-30' src="https://img.freepik.com/premium-photo/santorini-blue-white_713982-6.jpg?w=996" alt="" />

          <img className='w-30' src="https://img.freepik.com/premium-photo/woman-record-concert-her-phone_259348-16300.jpg?w=996" alt="" />

          <img className='w-30' src="https://img.freepik.com/premium-photo/small-purple-white-gypsophila-flowers-pink-background-vase_616001-1301.jpg?w=996" alt="" />

          <img className='w-30' src="https://img.freepik.com/premium-photo/baumkuchen-tree-cake-log-cake-is-typical-german-also-popular-japan-as-sweet-dessert_431906-3784.jpg?w=996" alt="" />

          <img className='w-30' src="https://img.freepik.com/premium-photo/mesa-arch-sunrise-winter-canyonlands-np-usa_478841-1868.jpg?w=996" alt="" />

          <img className='w-30' src="https://img.freepik.com/premium-photo/happy-woman-photographer-joyfully-holding-slr-camera-taking-picture-local-people-lifestyle-america-female-lens-man-visit-pier-san-francisco-summer-holidays-hobby-photographing_678158-6569.jpg?w=996" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
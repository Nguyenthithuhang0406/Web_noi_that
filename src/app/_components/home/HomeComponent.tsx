import Introduction from '@/app/_components/home/Introduction';
import ListProduct from '@/app/_components/home/ListProduct';
import ListProject from '@/app/_components/home/ListProject';
import SliderComponent from '@/app/_components/home/SliderComponent';
import React from 'react'

const HomeComponent = () => {
  return (
    <div>
      <SliderComponent />
      <Introduction />
      <ListProject />
      <ListProduct/>
    </div>
  )
}

export default HomeComponent;

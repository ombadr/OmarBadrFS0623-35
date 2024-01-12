import React from 'react';
import MiscCard from './MiscCard';
import SunRiseSetCard from './SunRiseSetCard';
const MySidebar = ({ data }) => {
  return (
    <div>
      <MiscCard data={data} />
      <h3 className='text-center'>Sunrise & Sunset</h3>
      <SunRiseSetCard
        data={data}
        value='sunrise'
        title='Sunrise'
        icon='sunrise'
      />
      <SunRiseSetCard data={data} value='sunset' title='Sunset' icon='sunset' />
    </div>
  );
};

export default MySidebar;

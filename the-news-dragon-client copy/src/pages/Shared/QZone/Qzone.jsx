import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-secondary text-center py-4'>
            <h4>Qzone</h4>
          <div>
          <img src={qzone1}alt="" srcset="" />
            <img src={qzone2}alt="" srcset="" />
            <img src={qzone3}alt="" srcset="" />
          </div>
        </div>
    );
};

export default Qzone;





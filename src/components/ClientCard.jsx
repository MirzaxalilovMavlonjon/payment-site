import React from 'react';
import { styles } from '../util/style';

function ClientCard({logo}) {
  return (
    <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 cursor-pointer`}>
      <img src={logo} alt="client_logo" className='sm:w-[192px] w-[100px] object-contain' />
    </div>
  );
}

export default ClientCard;
import React from 'react';
import './newsletter.scss';

function Newsletter() {
  return (
    <div className='newsletter'>
      <h2 className='newsletter__heading'>Subscribe to our Newsletter</h2>
      <p className='newsletter__subtitle'>Stay updated with the latest news and offers!</p>
      <div className='newsletter__input'>
        <input type='email' placeholder='Your email ...' />
        <button className='newsletter__button'>Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
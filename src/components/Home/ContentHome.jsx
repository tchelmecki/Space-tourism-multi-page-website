import React from 'react';
import '../../style/home.css';
import { Link } from 'react-router-dom';

const ContentHome = () => {
  return (
    <div class="content">
    <section>
      <p>SO, YOU WANT TO TRAVEL TO</p>
      <p>SPACE</p>
      <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!</p>
    </section>

    <aside>

      <div class="circle">
        <a href="destination-moon.html">
        <Link to='/destination'><div class="explore">
          EXPLORE
        </div>
        </Link>
        </a>
      </div>
    </aside>
    </div>
  )
}

export default ContentHome;
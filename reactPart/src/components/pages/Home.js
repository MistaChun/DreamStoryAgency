import React from "react";
import '../pages/App.css';
import {GEV_7} from "../../img";
import Footer from './Footer';

function Home() {
  return (
    <div>
      <h1>Welcome to Dream Story Agency</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
        varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
        Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
        imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
        ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
        elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
        consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </p>
      <div className="homephoto">
      <img class="responsive-img" style={{ height: '320px', width: '320px' }} src={GEV_7}></img>
      </div> 
    </div>

    
  );
}

export default Home;

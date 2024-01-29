import React from 'react';
import HeaderComponent from './Components/Header-Component/Header.jsx';
import { data } from './Data/Data.js';
import Promotion from './Components/Promotion/Promotion.jsx';
import Heading from './Components/Heading/Heading.jsx';
import Gallery from './Components/Gallery-component/Gallery.jsx';


function App() {
  const { header, promotion, heading, gallery} = data; 

  return (
    <div>
      <HeaderComponent header={header} /> 
      <Promotion promotion= {promotion} />
      <Heading heading= {heading} />
      <Gallery gallery= {gallery}/>
      
    </div>
  );
}

export default App;

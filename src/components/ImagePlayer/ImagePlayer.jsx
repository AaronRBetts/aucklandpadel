import React from 'react';
import './ImagePlayer.css'

const ImagePlayer = () => {
  return (
    <div>
        <ul className="auto">
        <li><img src="https://images.cdn.yle.fi/image/upload/w_1200,h_779,ar_1.5409767627716064,dpr_1,c_fill,g_faces/q_auto:eco,f_auto,fl_lossy/13-3-10865785" alt=""/></li>
        <li><img src="https://i.media.fi/incoming/akn157/7037323.jpg/alternates/FREE_1440/7037323.jpg" alt=""/></li>
        <li><img src="https://www.toimitilaa.fi/wp-content/uploads/2021/07/Raudoittajantie-3-Porvoo-Blogi-3-Pieni.jpg" alt=""/></li>
        <li><img src="https://padelmagazine.fr/wp-content/uploads/2019/06/bullpadel-club-des-pyramides-2-joueurs-vol%C3%A9e.jpg.webp" alt=""/></li>
        <li><img src="https://www.aktia-arena.fi/wp-content/uploads/2018/11/padel-1920x600.jpg" alt=""/></li>
        </ul>
    </div>
    );
};

export default ImagePlayer;

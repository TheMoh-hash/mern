import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    const imageStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '80%',
      maxHeight: '77%',
      width: 'auto',
      height: 'auto',
      
  
       // La hauteur s'ajustera automatiquement pour maintenir les proportions
      };
  return (
    <div>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
       <Link to="/" style={{ textDecoration: "none", color: "blue" }} >Retourner à la page d'accueil </Link>
       {/* credits  <a href="http://www.freepik.com">Designed by stories / Freepik</a> */}

      <img src="images/404.jpg" alt="Error 404" style={imageStyle}/>
    </div>
  );
};

export default NotFoundPage;

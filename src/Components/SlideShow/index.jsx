import React, { useState, useEffect } from 'react';
 import Styles from './index.module.css';
 import 'bootstrap/dist/css/bootstrap.min.css';

 const imageUrls = [ 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1200px-NGC_4414_%28NASA-med%29.jpg',
     'https://www.keele.ac.uk/about/news/2021/november/keele-comment/galaxy-960.jpg', 
     'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTU0MTM4NTg1Ni5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==',
      'https://cdn.britannica.com/57/111757-050-F3229E99/image-Magellanic-Cloud-nebula-Cerro-Tololo-Inter-American.jpg',
      'https://hubblesite.org/files/live/sites/hubble/files/home/science/galaxies/_images/STScI-H-galaxies-0639a-2400x1200.jpg?t=tn2400',
      'https://images.photowall.com/products/58243/galaxy-1.jpg?h=699&q=85',
    
    
    
    ];

      const SlideShow = () => {
         const [selectedImage, setSelectedImage] = useState(imageUrls[0]);
        

        return (
             <div className={Styles.container}>
                 <div className={Styles.mainImage}>
                     <img src={selectedImage} alt="Selected" /> 
                     </div>
                      <div className={Styles.containerImages}>
                         {imageUrls.map((image, index) => ( 
                            <img key={index} src={image} 
                             className={image === selectedImage ? Styles.selectedImage : Styles.notSelectedImage}
                             onClick={() => setSelectedImage(image)} /> 
                            )
                        )
                        } 
                        </div> 
                        </div> 
                        ); 
                    }
     export default SlideShow;
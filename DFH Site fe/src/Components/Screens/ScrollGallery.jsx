import React, { useState } from 'react';
import blm2 from "../../assets/Gallery/blm2.jpeg"
import blm3 from "../../assets/Gallery/blm3.jpeg"
import bloom1 from "../../assets/Gallery/bloom1.jpeg"
import blm4 from "../../assets/Gallery/blm4.jpeg"
import blm5 from "../../assets/Gallery/blm5.jpeg"
import blm6 from "../../assets/Gallery/blm6.jpeg"
import blm7 from "../../assets/Gallery/blm7.jpeg"
import blm8 from "../../assets/Gallery/blm8.jpeg"
import blm9 from "../../assets/Gallery/blm9.jpeg"
import blm10 from "../../assets/Gallery/blm10.jpeg"
import blm11 from "../../assets/Gallery/blm11.jpeg"
import blm12 from "../../assets/Gallery/blm12.jpeg"
import blm13 from "../../assets/Gallery/blm13.jpeg"

import fr1 from "../../assets/Gallery/fr1.jpeg"
import fr2 from "../../assets/Gallery/fr2.jpeg"
import fr3 from "../../assets/Gallery/fr3.jpeg"
import fr4 from "../../assets/Gallery/fr4.jpeg"
import fr5 from "../../assets/Gallery/fr5.jpeg"
import fr6 from "../../assets/Gallery/fr6.jpeg"
import fr7 from "../../assets/Gallery/fr7.jpeg"
import fr8 from "../../assets/Gallery/fr8.jpeg"
import fr9 from "../../assets/Gallery/fr9.jpeg"
import fr10 from "../../assets/Gallery/fr10.jpeg"
import fr11 from "../../assets/Gallery/fr11.jpeg"
import fr12 from "../../assets/Gallery/fr12.jpeg"
import fr13 from "../../assets/Gallery/fr13.jpeg"

import gr1 from "../../assets/Gallery/gr1.jpeg"
import gr2 from "../../assets/Gallery/gr2.jpeg"
import gr3 from "../../assets/Gallery/gr3.jpeg"
import gr4 from "../../assets/Gallery/gr4.jpeg"
import gr5 from "../../assets/Gallery/gr5.jpeg"
import gr6 from "../../assets/Gallery/gr6.png"
import gr7 from "../../assets/Gallery/gr7.png"
import gr8 from "../../assets/Gallery/gr8.jpeg"
import gr9 from "../../assets/Gallery/gr9.jpeg"
import gr10 from "../../assets/Gallery/gr10.jpeg"

import gowo1 from "../../assets/Gallery/gowo1.jpeg"
import gowo2 from "../../assets/Gallery/gowo2.jpeg"
import gowo3 from "../../assets/Gallery/gowo3.jpeg"
import gowo4 from "../../assets/Gallery/gowo4.jpeg"
import gowo5 from "../../assets/Gallery/gowo5.jpeg"
import gowo6 from "../../assets/Gallery/gowo6.jpeg"
import gowo7 from "../../assets/Gallery/gowo7.jpeg"
import gowo8 from "../../assets/Gallery/gowo8.jpeg"
import gowo9 from "../../assets/Gallery/gowo9.jpeg"
import gowo10 from "../../assets/Gallery/gowo10.jpeg"
import gowo11 from "../../assets/Gallery/gowo11.jpeg"

import cgt1 from "../../assets/Gallery/cgt1.jpeg"
import cgt2 from "../../assets/Gallery/cgt2.jpeg"
import cgt3 from "../../assets/Gallery/cgt3.jpeg"
import cgt4 from "../../assets/Gallery/cgt4.jpeg"
import cgt5 from "../../assets/Gallery/cgt5.jpg"
import cgt6 from "../../assets/Gallery/cgt6.jpeg"
import cgt7 from "../../assets/Gallery/cgt7.jpg"
import cgt8 from "../../assets/Gallery/cgt8.jpeg"
import cgt9 from "../../assets/Gallery/cgt9.jpg"
import cgt10 from "../../assets/Gallery/cgt10.jpg"
import cgt11 from "../../assets/Gallery/cgt11.jpg"
import cgt12 from "../../assets/Gallery/cgt12.jpg"
import cgt13 from "../../assets/Gallery/cgt13.jpg"
import cgt14 from "../../assets/Gallery/cgt14.jpg"
import cgt15 from "../../assets/Gallery/cgt15.jpg"
import cgt16 from "../../assets/Gallery/cgt16.jpg"
import cgt17 from "../../assets/Gallery/cgt17.jpg"
import cgt18 from "../../assets/Gallery/cgt18.jpg"

import meeting1 from "../../assets/Gallery/meeting1.jpg"
import meeting2 from "../../assets/Gallery/meeting2.jpg"
import meeting3 from "../../assets/Gallery/meeting3.jpg"
import meeting4 from "../../assets/Gallery/meeting4.jpg"
import meeting5 from "../../assets/Gallery/meeting5.jpg"
import meeting6 from "../../assets/Gallery/meeting6.jpg"
import meeting7 from "../../assets/Gallery/meeting7.jpg"

import pc1 from "../../assets/Gallery/pc1.jpeg"
import pc2 from "../../assets/Gallery/pc2.jpeg"
import pc3 from "../../assets/Gallery/pc3.jpg"
import pc4 from "../../assets/Gallery/pc4.jpg"
import pc5 from "../../assets/Gallery/pc5.jpg"

import q1 from "../../assets/Gallery/q1.jpeg"
import q2 from "../../assets/Gallery/q2.jpeg"
import q3 from "../../assets/Gallery/q3.jpg"
import q4 from "../../assets/Gallery/q4.jpg"
import q5 from "../../assets/Gallery/q5.jpg"
import q6 from "../../assets/Gallery/q6.jpg"
import q7 from "../../assets/Gallery/q7.jpg"
import q8 from "../../assets/Gallery/q8.jpg"
import q9 from "../../assets/Gallery/q9.jpg"
import q10 from "../../assets/Gallery/q10.jpg"




const photoData = {
  Bloom: [
    { id: 1, src: blm2, alt: 'bloom 1' },
    { id: 2, src: bloom1, alt: 'bloom 2' },
    { id: 3, src: blm3, alt: 'bloom 3' },
    { id: 4, src: blm4, alt: 'bloom 4' },
    { id: 5, src: blm5, alt: 'bloom 5' },
    { id: 6, src: blm6, alt: 'bloom 6' },
    { id: 7, src: blm7, alt: 'bloom 7' },
    { id: 8, src: blm8, alt: 'bloom 8' },
    { id: 9, src: blm9, alt: 'bloom 9' },
    { id: 10, src: blm10, alt:'bloom 10' },
    { id: 11, src: blm11, alt:'bloom 11' },
    { id: 12, src: blm12, alt:'bloom 12' },
    { id: 13, src: blm13, alt:'bloom 13' },


  ],
  Family_Retreat: [
    { id: 1, src: fr1, alt: 'familyRetreat' },
    { id: 2, src: fr2, alt: 'familyRetreat' },
    { id: 3, src: fr3, alt: 'familyRetreat' },
    { id: 4, src: fr4, alt: 'familyRetreat' },
    { id: 5, src: fr5, alt: 'familyRetreat' },
    { id: 6, src: fr6, alt: 'familyRetreat' },
    { id: 7, src: fr7, alt: 'familyRetreat' },
    { id: 8, src: fr8, alt: 'familyRetreat' },
    { id: 9, src: fr9, alt: 'familyRetreat' },
    { id: 10, src: fr10, alt: 'familyRetreat' },
    { id: 11, src: fr11, alt: 'familyRetreat' },
    { id: 12, src: fr12, alt: 'familyRetreat' },
    { id: 13, src: fr13, alt: 'familyRetreat' },

    
  ],
  Glow_Retreat: [
    { id: 1, src: gr1, alt: 'Glow Retreat' },
    { id: 2, src: gr2, alt: 'Glow Retreat' },
    { id: 3, src: gr3, alt: 'Glow Retreat' },
    { id: 4, src: gr4, alt: 'Glow Retreat' },
    { id: 5, src: gr5, alt: 'Glow Retreat' },
    { id: 6, src: gr6, alt: 'Glow Retreat' },
    { id: 7, src: gr7, alt: 'Glow Retreat' },
    { id: 8, src: gr8, alt: 'Glow Retreat' },
    { id: 9, src: gr9, alt: 'Glow Retreat' },
    { id: 10, src: gr10, alt: 'Glow Retreat' },
  ],

  Go_Women: [
    { id: 1, src: gowo1, alt: 'Go Women' },
    { id: 2, src: gowo2, alt: 'Go Women' },
    { id: 3, src: gowo3, alt: 'Go Women' },
    { id: 4, src: gowo4, alt: 'Go Women' },
    { id: 5, src: gowo5, alt: 'Go Women' },
    { id: 6, src: gowo6, alt: 'Go Women' },
    { id: 7, src: gowo7, alt: 'Go Women' },
    { id: 8, src: gowo8, alt: 'Go Women' },
    { id: 9, src: gowo9, alt: 'Go Women' },
    { id: 10, src: gowo10, alt: 'Go Women' },
    { id: 11, src: gowo11, alt: 'Go Women' },
  ],

  Christmas_Gathering: [
    { id: 1, src: cgt1, alt: 'Christmas_Gathering' },
    { id: 2, src: cgt2, alt: 'Christmas_Gathering' },
    { id: 3, src: cgt3, alt: 'Christmas_Gathering' },
    { id: 4, src: cgt4, alt: 'Christmas_Gathering' },
    { id: 5, src: cgt5, alt: 'Christmas_Gathering' },
    { id: 6, src: cgt6, alt: 'Christmas_Gathering' },
    { id: 7, src: cgt7, alt: 'Christmas_Gathering' },
    { id: 8, src: cgt8, alt: 'Christmas_Gathering' },
    { id: 9, src: cgt9, alt: 'Christmas_Gathering' },
    { id: 10, src: cgt10, alt: 'Christmas_Gathering' },
    { id: 11, src: cgt11, alt: 'Christmas_Gathering' },
    { id: 12, src: cgt12, alt: 'Christmas_Gathering' },
    { id: 13, src: cgt13, alt: 'Christmas_Gathering' },
    { id: 14, src: cgt14, alt: 'Christmas_Gathering' },
    { id: 15, src: cgt15, alt: 'Christmas_Gathering' },
    { id: 16, src: cgt16, alt: 'Christmas_Gathering' },
    { id: 17, src: cgt17, alt: 'Christmas_Gathering' },
    { id: 18, src: cgt18, alt: 'Christmas_Gathering' },
  ],

  Meeting: [
    { id: 1, src: meeting1, alt: 'Meeting' },
    { id: 2, src: meeting2, alt: 'Meeting' },
    { id: 3, src: meeting3, alt: 'Meeting' },
    { id: 4, src: meeting4, alt: 'Meeting' },
    { id: 5, src: meeting5, alt: 'Meeting' },
    { id: 6, src: meeting6, alt: 'Meeting' },
    { id: 7, src: meeting7, alt: 'Meeting' },
  ],
  Prayer_Cell: [
    { id: 1, src: pc2, alt: 'Meeting' },
    { id: 2, src: pc1, alt: 'Meeting' },
    { id: 3, src: pc3, alt: 'Meeting' },
    { id: 4, src: pc4, alt: 'Meeting' },
    { id: 5, src: pc5, alt: 'Meeting' },
  ],

  Quotes: [
    { id: 1, src: q1, alt: 'Meeting' },
    { id: 2, src: q2, alt: 'Meeting' },
    { id: 3, src: q3, alt: 'Meeting' },
    { id: 4, src: q4, alt: 'Meeting' },
    { id: 5, src: q5, alt: 'Meeting' },
    { id: 6, src: q6, alt: 'Christmas_Gathering' },
    { id: 7, src: q7, alt: 'Christmas_Gathering' },
    { id: 8, src: q8, alt: 'Christmas_Gathering' },
    { id: 9, src: q9, alt: 'Christmas_Gathering' },
    { id: 10, src: q10, alt: 'Christmas_Gathering' },
  ],
};

function ScrollGallery() {
  const [openCategory, setOpenCategory] = useState(null);

  const handleClose = () => setOpenCategory(null);

  return (
    <div className="container py-4">
      {/* <h2 className="mb-4">Photo Categories</h2> */}
      <div className="row">
        {Object.entries(photoData).map(([category, images]) => (
          <div className="col-md-4 text-center mb-4" key={category}>
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="img-thumbnail"
              style={{ cursor: 'pointer', height: '200px', objectFit: 'cover' }}
              onClick={() => setOpenCategory(category)}
            />
            <h5 className="mt-2">{category}</h5>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openCategory && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={handleClose}
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
        >
          <div
            className="modal-dialog modal-fullscreen"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark text-white">
              <div className="modal-header border-0">
                <h5 className="modal-title">{openCategory} Photos</h5>
                <button type="button" className="btn-close btn-close-white" onClick={handleClose}></button>
              </div>
              <div className="modal-body overflow-auto" style={{ maxHeight: '100vh' }}>
                {photoData[openCategory].map((img) => (
                  <div key={img.id} className="mb-4 text-center">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="img-fluid w-100"
                      style={{ maxHeight: '90vh', objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>
              <div className="modal-footer border-0">
                <button className="btn btn-light" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ScrollGallery;

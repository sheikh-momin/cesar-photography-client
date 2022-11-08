import React from 'react';

const Card = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
      <div className="card bg-base-100 shadow-2xl">
        <figure><img src="https://img.freepik.com/free-photo/young-beautiful-woman-with-long-blond-hair-white-dress-wheat-field-early-morning-sunrise-summer-is-time-dreamers-flying-hair-woman-running-across-field-rays_1321-2431.jpg?w=996&t=st=1667850476~exp=1667851076~hmac=36b20b2fcac6c15c1e268edc0c4e13545540537d835bdef719fe5f4911f2e941" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            BOLD STYLE
          </h2>
          <p>Landscape</p>
        </div>
      </div>


      <div className="card  bg-base-100 shadow-2xl">
        <figure><img src="https://img.freepik.com/free-photo/extreme-closeup-professional-camera-slider-shot-black-white_181624-785.jpg?w=996&t=st=1667850411~exp=1667851011~hmac=d38df81b4d0857c5af2d812c9fb8f06baeaec0cd468ce3b66526e02e1d46d8b6" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            SELF-HOSTED VIDEO
          </h2>
          <p>Gadget</p>
        </div>
      </div>


      <div className="card  bg-base-100 shadow-2xl">
        <figure><img src="https://img.freepik.com/free-photo/couple-dancing-ther-wedding_1157-93.jpg?w=996&t=st=1667849899~exp=1667850499~hmac=f860903e7fbdae653af848e5a5c40a3865ed030825a6fb27debd30fc91a8b72e" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            SKIN MANAGER
          </h2>
          <p>Wedding</p>
        </div>
      </div>



      <div className="card  bg-base-100 shadow-2xl">
        <figure><img src="https://img.freepik.com/free-photo/portrait-young-woman-with-digital-camera_641386-312.jpg?w=996&t=st=1667850631~exp=1667851231~hmac=85c43f4b3214842b7ff7a3e50c7e0dba8eadea637312f292716fb3464a6696ea" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            ADVANCED SHORTCODES
          </h2>
          <p>Portrait</p>
        </div>
      </div>


      <div className="card  bg-base-100 shadow-2xl">
        <figure><img src="https://img.freepik.com/free-photo/man-taking-photo-woman-model-studio_23-2148532621.jpg?w=996&t=st=1667850139~exp=1667850739~hmac=b370ab6cf33cee6e21801fcf09cc732cea83d7e1682c53e71483bcb2e630d8ff" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            UNIQUE IMAGE FLOW
          </h2>
          <p>Modeling</p>
        </div>
      </div>


      <div className="card  bg-base-100 shadow-2xl">
        <figure><img src="https://img.freepik.com/free-photo/shallow-focus-shot-beautiful-young-female-taking-photo-with-her-camera_181624-42689.jpg?w=996&t=st=1667850310~exp=1667850910~hmac=87af16bbd3becd8f840ae858ceec69b5212fbff2c79ca77ee88ea6d3e2985e80" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            ORGANIZED PORTFOLIOS
          </h2>
          <p>Photography</p>
        </div>
      </div>


    </div>
  );
};

export default Card;
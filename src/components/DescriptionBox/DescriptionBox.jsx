import React from "react";
import "./descriptionbox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="navigator">
        <div className="nav-box">Description</div>
        <div className="nav-box fade">Reviews (122)</div>
      </div>
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore unde
          tempore porro incidunt debitis, quibusdam, modi praesentium natus
          excepturi eos commodi mollitia repudiandae iure ut esse iste expedita
          atque ducimus?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          ducimus perspiciatis nobis molestias ipsum hic. Perferendis dolor
          incidunt eum ipsam corrupti inventore? Eius dicta magni cumque ratione
          sint eos optio?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;

import React from 'react';

const HomeCard = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="" className="w-[250px] h-[300px]" alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">App!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Join</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

import React from 'react';

const CardSkeleton = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-md rounded-none">
      <figure>
        <div className="skeleton-img h-[288px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title skeleton-text w-1/2 animate-pulse" />
        <p className="skeleton-text w-3/4 mt-2 animate-pulse" />
        <p className="skeleton-text w-3/4 mt-2 animate-pulse" />
        <div className="card-actions justify-end">
          <div className="skeleton-btn bg-primary w-16 h-8 rounded-none animate-pulse" />
        </div>
      </div>
    </div>
    );
};

export default CardSkeleton;
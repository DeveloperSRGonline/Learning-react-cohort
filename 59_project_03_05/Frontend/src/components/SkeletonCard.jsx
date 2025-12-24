import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-info">
                <div className="skeleton-line category"></div>
                <div className="skeleton-line title"></div>
                <div className="skeleton-footer">
                    <div className="skeleton-line price"></div>
                    <div className="skeleton-line btn"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;

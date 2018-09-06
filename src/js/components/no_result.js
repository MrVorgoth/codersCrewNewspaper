import React from 'react';

export default ({ result }) => {
    return <div>
        <p className="line-1 anim-typewriter">
            No {result} has been found. Try again.
        </p>
    </div>;
}
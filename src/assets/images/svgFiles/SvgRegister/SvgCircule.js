import React from 'react';

const SvgCircle = (props) => {
    return (
        <svg width="137" height="69" viewBox="0 0 137 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g mask="url(#mask2)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M102.533 0.21167C83.5657 0.21167 68.1897 15.5877 68.1897 34.5552C68.1897 53.5228 83.5657 68.8988 102.533 68.8988C121.5 68.8988 136.877 53.5228 136.877 34.5552C136.877 15.5877 121.5 0.21167 102.533 0.21167Z" fill={props.color} />
            </g>
        </svg>
    );

}

export default SvgCircle;
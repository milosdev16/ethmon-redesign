import React from "react"

import CVGroup from '../CVGroup/CVGroup.jsx'


export default function CVScene({ data, screen, options, active, imageLoader, onActive, onClick }) {
  return (
    <>
      {Object.keys(data).map((name, index) => (
        <CVGroup 
          key={`image-${index}`}
          options={options}
          screen={screen}
          data={data[name]}
          imageLoader={imageLoader}
          active={active}
          onActive={onActive}
          onClick={onClick}
          name={name} />
      ))}
    </>
  );
}

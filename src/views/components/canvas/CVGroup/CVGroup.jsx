import React from "react"
import CVObject from '../CVObject/CVObject.jsx'


export default function CVGroup({ name, data, screen, active, imageLoader, onActive, onClick }) {
  return (
    <group>
      {data.map((options, index) => {
        if (options.fixed || (active !== name && !options.activity) || (active === name && options.activity)) {
          return (
            <CVObject 
              key={`image-${index}`}
              src={imageLoader[options.name]}
              screen={screen}
              group={name}
              onActive={onActive}
              onClick={onClick}
              options={options}
              name={options.name} />
          ); }
        }
      )}
    </group>
  );
}

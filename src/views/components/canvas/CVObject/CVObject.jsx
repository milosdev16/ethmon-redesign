/* eslint-disable import/first */
import React, { useMemo } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader, useThree } from 'react-three-fiber'

import useLayers from '../useLayers.jsx'


function get_calc_props(current, options, direction = 1) {
  const { duration, from, to } = options;
  const dur = duration * 60;
  const low = from.length > 1 ? from : [from, 0, 0]
  const high = to.length > 1 ? to : [to, 0, 0]
  let { x, y, z } = current;
  let direct = direction;
  let step = { 
    x: ((high[0] - low[0]) / dur), 
    y: ((high[1] - low[1]) / dur), 
    z: ((high[2] - low[2]) / dur)
  };

  
  if (x > high[0] || y > high[1] || z > high[2]) {
    direct = 0;
  } else if (x < low[0] || y < low[1] || z < low[2]) {
    direct = 1;
  }
  
  if (!direct) {
    step = {
      x: -step.x,
      y: -step.y,
      z: -step.z,
    }
  }

  x += step.x;
  y += step.y;
  z += step.z;

  return { x, y, z, direct }
}

function CVObject({ options, group, src, screen, onActive, onClick }) {
  const ref = useLayers();

  // const ref = useRef();
  const { viewport } = useThree();
  const [rotationEuler, rotationQuaternion] = useMemo(
    () => [new THREE.Euler(0, 0, 0), new THREE.Quaternion(0, 0, 0, 0)],
    []
  );
    
  let direction = {
    rotation: 1, position: 1, opacity: 1, quaternion: 1
  };
    
  useFrame(({ mouse }) => {
    // console.log("ref", ref)
    // console.log("viewport", viewport)
    // console.log("mouse", mouse)

    if (ref.current) {
      if (options.animation) {
        if (options.animation.rotation) {
          let { x, y, z, direct } = get_calc_props(ref.current.rotation, options.animation.rotation, direction.rotation)
          ref.current.rotation = { x, y, z };
          direction.rotation = direct;
        }
        if (options.animation.position) {
          let { x, y, z, direct } = get_calc_props(ref.current.position, options.animation.position, direction.position)
          ref.current.position = { x, y, z };
          direction.position = direct;
        }
        if (options.animation.opacity) {
          let { x, direct } = get_calc_props({x: ref.current.material.opacity || 1, y: 0, z: 0}, options.animation.opacity, direction.opacity)
          if (!direct) {
            ref.current.material.opacity = x;
          } else {
            ref.current.material.opacity = x;
          }
          direction.opacity = direct;
        }
      }
      if (options.movement) {
        let x = 0, y = 0, z = 0;
        options.movement.order.forEach((e, i) => {
          switch (e) {
            case 'x':
              x = (mouse.x * viewport.width) / options.movement.sensitivity[0]
              break;
            case '-x':
              x = -(mouse.x * viewport.width) / options.movement.sensitivity[0]
              break;
            case 'y':
              y = (mouse.y * viewport.height) / options.movement.sensitivity[1]
              break;
            case '-y':
              y = -(mouse.y * viewport.height) / options.movement.sensitivity[1]
              break;
            case 'z':
              y = (mouse.y * viewport.height) / options.movement.sensitivity[2]
              break;
            case '-z':
              y = -(mouse.y * viewport.height) / options.movement.sensitivity[2]
              break;
            default:
              break
          }
        })
        ref.current.position.x = screen[0] + options.position[0] + x;
        ref.current.position.y = screen[1] + options.position[1] + y;
        ref.current.position.z = options.position[2] + z;
        // console.log("suggestion", ((x).toString() + " : " + (y).toString()))
      }
      if (options.quaternion) {
        let x = 0, y = 0;
        options.quaternion.order.forEach((e, i) => {
          switch (e) {
            case 'x':
              x = (mouse.x * viewport.width) / options.quaternion.sensitivity[0]
              break;
            case '-x':
              x = -(mouse.x * viewport.width) / options.quaternion.sensitivity[0]
              break;
            case 'y':
              y = (mouse.y * viewport.height) / options.quaternion.sensitivity[1]
              break;
            case '-y':
              y = -(mouse.y * viewport.height) / options.quaternion.sensitivity[1]
              break;
            default:
              break
          }
        })
        rotationEuler.set(x, y, 0);
        rotationQuaternion.setFromEuler(rotationEuler);
        ref.current.quaternion.slerp(rotationQuaternion, 0.1);
      }
    }
  })

  const onPointerOver = (e) => {
    onActive(e.object.group)
  }

  const onPointerOut = (e) => {
    // onActive(e.object.group)
  }

  const onPointerDown = (e) => {
    if (options.clickable) {
      onClick(e.object.name)
    }
  }

  const texture = useLoader(THREE.TextureLoader, src);
  return (
    <mesh 
      name={options.name} 
      group={group}
      receiveShadow={true} 
      ref={ref} 
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onPointerDown={onPointerDown}
      position={options.position} 
    >
      <planeBufferGeometry attach="geometry" args={options.size} />
      <meshBasicMaterial attach="material" opacity={options.opacity} transparent map={texture} />
    </mesh>
  )
}

export default CVObject
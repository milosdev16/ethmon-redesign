export const homeData = {
  camera: {
    position: [0, 0, 300], 
    fov: 70
  },
  screen: {
    "Adventure": [x, y], // position when active
    "xxx": []
  },
  images: {
    "Adventure": [
      {
        name: name, // string
        path: path, // string
        fixed: true, // always show
        activity: true, // only show when active
        clickable: true, // only can click
        position: [x, y, z], // float array
        rotation: [x, y, z], // float array
        size: [width, height], // float array
        opacity: opacity, // float [0 ~ 1]
        animation: {
          rotation: {
            duration: second, // integer
            from: [x, y, z], // float array
            to: [x, y, z] // float array
          },
          position: {
            duration: second, // integer
            from: [x, y, z], // float array
            to: [x, y, z] // float array
          },
          opacity: {
            duration: second, // integer
            from: opacity_from, // float [0 ~ 1]
            to: opacity_to // float [0 ~ 1]
          }
        },
        movement: {
          sensitivity:  [x, y, z], // integer array
          order: ['-z']
        },
        quaternion: {
          sensitivity: [x, y],  // integer array
          order: ['x', '-y'] // string array
        }
      },
      {}
    ],
    "xxx" : [ {}, {} ],
  }
}


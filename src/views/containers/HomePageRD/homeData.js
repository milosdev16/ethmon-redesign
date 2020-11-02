export const homeData = {
  camera: {
    position: [0, 0, 350], 
    fov: 60
  },
  screen: {
    "Adventure": [8, 1.3],
  },
  images: {
    "Battle": [
      {
        name: "BattleOff",
        path: './Battle Off.png',
        position: [0, 40, 20],
        size: [180, 204],
        movement: {
          sensitivity: [50, 20, 0],
          order: ['-x', '-y']
        },
      },
      {
        name: "Battle",
        path: './Battle.png',
        activity: true,
        clickable: true,
        position: [0, 40, 20],
        size: [180, 204],
        animation: {
          opacity: {
            duration: 0.3,
            from: 0.5,
            to: 1
          }
        },
        movement: {
          sensitivity: [50, 20, 0],
          order: ['-x', '-y']
        },
      },
    ],
    "Adventure": [
      {
        name: "AdventureOff",
        path: './Adventure Off.png',
        position: [-160, -10, 20],
        size: [200, 150],
        movement: {
          sensitivity: [50, 20, 0],
          order: ['-x', '-y']
        },
      },
      {
        name: "Adventure",
        path: "./Adventure.png",
        activity: true,
        clickable: true,
        position: [-160, -10, 20],
        size: [200, 150],
        animation: {
          opacity: {
            duration: 0.3,
            from: 0.5,
            to: 1
          }
        },
        movement: {
          sensitivity: [50, 20, 0],
          order: ['-x', '-y']
        },
      },
    ],
    "Market": [
      {
        name: "MarketOff",
        path: './Market Off.png',
        position: [150, 5, 20],
        size: [160, 150],
        movement: {
          sensitivity: [50, 20, 0],
          order: ['-x', '-y']
        },
      },
      {
        name: "Market",
        path: './Market.png',
        activity: true,
        clickable: true,
        position: [150, 5, 20],
        size: [160, 150],
        animation: {
          opacity: {
            duration: 0.3,
            from: 0.5,
            to: 1
          }
        },
        movement: {
          sensitivity: [50, 20, 0],
          order: ['-x', '-y']
        },
      },
    ],
    "OfficialStore": [
      {
        name: "OfficialStoreOff",
        path: './Official store Off.png',
        position: [290, 0, 20],
        size: [130, 170],
        movement: {
          sensitivity: [50, 20, 0],
          order: ['-x', '-y']
        },
      },
      {
        name: "OfficialStore",
        path: './Official store.png',
        activity: true,
        clickable: true,
        position: [290, 0, 20],
        size: [130, 170],
        animation: {
          opacity: {
            duration: 0.3,
            from: 0.5,
            to: 1
          }
        },
        movement: {
          sensitivity: [50, 20, 0],
          order: ['-x', '-y']
        },
      },
    ],
    "Tournament": [
      {
        name: "TournamentOff",
        path: './Tournament Off.png',
        position: [-190, 135, 20],
        size: [180, 125],
        opacity: 0.7,
        movement: {
          sensitivity: [40, 30, 0],
          order: ['-x', '-y']
        },
      },
      {
        name: "Tournament",
        path: "./Tournament.png",
        activity: true,
        // clickable: true,
        position: [-190, 135, 20],
        size: [180, 125],
        opacity: 0.7,
        animation: {
          opacity: {
            duration: 0.3,
            from: 1,
            to: 1
          }
        },
        movement: {
          sensitivity: [40, 30, 0],
          order: ['-x', '-y']
        },
      },
    ],
    "Background": [
      {
        name: "Sky",
        path: './Bg.png',
        fixed: true, 
        position: [0, 0, 0],
        size: [1000, 600],
        movement: {
          sensitivity: [10, 10, 0],
          order: ['-x', '-y']
        },
      },
      {
        name: "Ground",
        path: './Bg.png',
        fixed: true, 
        position: [50, -120, 10],
        size: [920, 225],
        movement: {
          sensitivity: [50, 20, 0],
          order: ['-x', '-y']
        },
      },
      {
        name: "BackTrees",
        path: './Back trees.png',
        fixed: true, 
        position: [0, 0, 10],
        size: [900, 316],
        movement: {
          sensitivity: [30, 15, 0],
          order: ['-x', '-y']
        }
      },
      {
        name: "TreesRightSide",
        path: './Trees Right Side.png',
        fixed: true, 
        position: [342, 110, 10],
        size: [150, 220],
        movement: {
          sensitivity: [30, 20, 0],
          order: ['-x', '-y']
        }
      },
      {
        name: "TreesLeftSide",
        path: './Trees Left Side.png',
        fixed: true, 
        position: [-340, -30, 10],
        size: [180, 440],
        movement: {
          sensitivity: [40, 20, 0],
          order: ['-x', '-y']
        }
      },
      {
        name: "Stone",
        path: './Stone.png',
        fixed: true, 
        position: [180, 160, 12],
        size: [100, 150],
        movement: {
          sensitivity: [40, 30, 0],
          order: ['-x', '-y']
        }
      },
    ],
  }
}
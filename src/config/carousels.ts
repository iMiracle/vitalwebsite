interface SlideContent {
  type: 'image' | 'video';
  id: number;
  pid: string;
  src: string;
  name: string;
  description: string;
}

export const slides :SlideContent[] = [
  {
  type: 'image',
  id: 100001,
  pid: "1001",
  src: "https://img.hsairforce.com/websiteImg/2024/08/pc-hs-fpv-drone-p136m-1-scaled.webp",
  name: "FPV Drone",
  description: "FPV Drone is a type of drone that allows pilots to see the world from the perspective of the drone.",
  },
  {
  type: 'image',
  id: 100002,
  pid: "1002",
  src: "https://img.hsairforce.com/websiteImg/2024/08/pc-hs-fpv-drone-x07.webp",
  name: "FPV Pro",
  description: "FPV Pro is a type of drone that allows pilots to see the world from the perspective of the drone.",
  },
  {
  type: 'image',
  id: 100003,
  pid: "1003",
  src: "https://img.hsairforce.com/websiteImg/2024/08/pc-hs-fpv-drone-uav401.webp",
  name: "FPV Master",
  description: "FPV Master is a type of drone that allows pilots to see the world from the perspective of the drone.",
  }
];
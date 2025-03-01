interface ProductLabel {
  type: string;
  name: string;
  label: string;
}

export interface Product {
  id:string;
  type: string;
  name: string;
  image: string;
  details: ProductDetail;
  coreParams:ProductCoreParams;
}

interface ProductDetail {
  id: string;
  type: string;
  name: string;
  images: string[];
}

interface ProductCoreParams {
  id: string;
  type: string;
  name: string;
}

export const ProductLabels :ProductLabel[] = [
  {
  type: "FPV",
  name: "FPV",
  label: "FPV"
  },
  {
  type: "UAV",
  name: "UAV",
  label: "UAV"
  },
  {
  type: "AirForce",
  name: "AirForce",
  label: "AirForce"
  },
  {
  type: "Plane",
  name: "Plane",
  label: "Plane"
  },
  {
  type: "Camera",
  name: "Camera",
  label: "Camera"
  }
];


export const ProductList :Product[] = [
  {
    id: "1001",
    type: "FPV",
    name: "FPV1",
    image: "https://img.hsairforce.com/websiteImg/2024/08/pc-hs-fpv-drone-p136m-1-scaled.webp",
    coreParams: {
      id: "1001",
      type: "FPV",
      name: "FPV1"
    },
    details: {
      id: "1001",
      type: "FPV",
      name: "FPV1",
      images: ["/product/fl1.png",
        "/product/fl2.png",
        "/product/fl3.png",
        "/product/fl4.png",
        "/product/fl5.png"
      ]
    }
  },
   {
    id: "1002",
    type: "FPV",
    name: "FPV2",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    coreParams: {
      id: "1002",
      type: "FPV",
      name: "FPV2"
    },
    details: {
      id: "1002",
      type: "FPV",
      name: "FPV2",
      images: ["https://swiperjs.com/demos/images/nature-1.jpg"]
    }
  },
   {
    id: "1003",
    type: "FPV",
    name: "FPV3",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    coreParams: {
      id: "1003",
      type: "FPV",
      name: "FPV3"
    },
    details: {
      id: "1003",
      type: "FPV",
      name: "FPV3",
      images: ["https://swiperjs.com/demos/images/nature-1.jpg"]
    }
  },
   {
    id: "1004",
    type: "FPV",
    name: "FPV4",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    coreParams: {
      id: "1004",
      type: "FPV",
      name: "FPV4"
    },
    details: {
      id: "1004",
      type: "FPV",
      name: "FPV4",
      images: ["https://swiperjs.com/demos/images/nature-1.jpg"]
    }
  },
   {
    id: "2001",
    type: "UAV",
    name: "UAV1",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    coreParams: {
      id: "2001",
      type: "UAV",
      name: "UAV1"
    },
    details: {
      id: "2001",
      type: "UAV",
      name: "UAV1",
      images: ["https://swiperjs.com/demos/images/nature-2.jpg"]
    }
  },
   {
    id: "2002",
    type: "UAV",
    name: "UAV2",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    coreParams: {
      id: "2002",
      type: "UAV",
      name: "UAV2"
    },
    details: {
      id: "2002",
      type: "UAV",
      name: "UAV2",
      images: ["https://swiperjs.com/demos/images/nature-2.jpg"]
    }
  }
];

export function getProductById(pid: string): Product | undefined {
  return ProductList.find(product => product.id === pid);
}

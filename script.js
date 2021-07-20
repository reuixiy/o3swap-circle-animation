const radius = 90;
const smallImgs = [
  // right bottom
  {
    n: 1,
    a: 90,
  },
  {
    n: 2,
    a: 330,
  },
  {
    n: 3,
    a: 210,
  },
  // left bottom
  {
    n: 6,
    a: 150,
  },
  {
    n: 7,
    a: 30,
  },
  {
    n: 8,
    a: 270,
  },
  // right top
  {
    n: 11,
    a: 120,
  },
  {
    n: 12,
    a: 240,
  },
  {
    n: 13,
    a: 0,
  },
  // left top
  {
    n: 16,
    a: 198,
  },
  {
    n: 17,
    a: 126,
  },
  {
    n: 18,
    a: 64,
  },
  {
    n: 19,
    a: 342,
  },
  {
    n: 20,
    a: 270,
  },
];

const calcCathetus = (hypotenuse, angle) => {
  const radian = ((2 * Math.PI) / 360) * angle;

  return {
    x: Math.cos(radian) * hypotenuse,
    y: Math.sin(radian) * hypotenuse,
  };
};

const setProperty = (name, value) => {
  document.documentElement.style.setProperty(name, value);
};

const setTranslateXY = (imgs) => {
  imgs.forEach((img) => {
    const { x, y } = calcCathetus(radius, img.a);

    setProperty(`--tx-${img.n}`, `${x}px`);
    setProperty(`--ty-${img.n}`, `${y}px`);
  });
};

setTranslateXY(smallImgs);

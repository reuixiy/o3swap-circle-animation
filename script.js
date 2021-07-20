// UI -------------------------------------------------------------------------
const maxWidth = 620;
const radius = 90;
const smallImgs = [
  // data structure
  // {
  //   n: 'name',
  //   a: 'coordinate position angle',
  //   r: 'self rotate angle',
  // },
  // right bottom
  {
    n: 1,
    a: 90,
    r: 270,
  },
  {
    n: 2,
    a: 330,
    r: 135,
  },
  {
    n: 3,
    a: 210,
    r: 45,
  },
  // left bottom
  {
    n: 6,
    a: 150,
    r: 330,
  },
  {
    n: 7,
    a: 30,
    r: 210,
  },
  {
    n: 8,
    a: 270,
    r: 90,
  },
  // right top
  {
    n: 11,
    a: 120,
    r: 315,
  },
  {
    n: 12,
    a: 240,
    r: 60,
  },
  {
    n: 13,
    a: 0,
    r: 180,
  },
  // left top
  {
    n: 16,
    a: 198,
    r: 15,
  },
  {
    n: 17,
    a: 126,
    r: 305,
  },
  {
    n: 18,
    a: 64,
    r: 235,
  },
  {
    n: 19,
    a: 342,
    r: 175,
  },
  {
    n: 20,
    a: 270,
    r: 90,
  },
];

const calcCathetus = (hypotenuse, angle) => {
  const radian = ((2 * Math.PI) / 360) * angle;

  return {
    x: Math.cos(radian) * hypotenuse,
    y: Math.sin(radian) * hypotenuse,
  };
};

const setProperty = (selectors, name, value) =>
  document.querySelector(selectors).style.setProperty(name, value);

const setTranslateXY = (imgs) => {
  imgs.forEach((img) => {
    const { x, y } = calcCathetus(radius, img.a);

    setProperty(
      `.img-${img.n}`,
      'transform',
      `translate(${x}px, ${y}px) rotate(${img.r}deg)`
    );
  });
};

setTranslateXY(smallImgs);

// Responsive -----------------------------------------------------------------
const calcAspectRatio = () => window.innerWidth / maxWidth;

const setScale = () => setProperty(':root', '--scale-ui', calcAspectRatio());

// init when page first load
setScale();
// update when window is resized
window.addEventListener('resize', () => setScale());

// Animation ------------------------------------------------------------------

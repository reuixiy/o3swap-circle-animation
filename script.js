// Constants ------------------------------------------------------------------
const MAX_WIDTH = 620;
const RADIUS = 90;
const DURATION = 4.2;

const SMALL_IMGS = [
  // data structure
  // {
  //   n: 'name of img',
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

// UI -------------------------------------------------------------------------
/**
 * Calculate coordinates of small img relative to center of medium img
 *
 * @param {Number} hypotenuse The line between center point of
 *                            small and medium img
 * @param {Number} angle      The coordinate position angle
 *
 * @return {Object} (x, y)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#cartesian_coordinates
 */
const calcCathetus = (hypotenuse, angle) => {
  const radian = ((2 * Math.PI) / 360) * angle;

  return {
    x: Math.cos(radian) * hypotenuse,
    y: Math.sin(radian) * hypotenuse,
  };
};

/**
 * Set property for an element
 *
 * @param {String} selectors CSS selectors
 * @param {String} prop      Property
 * @param {String} value     Property value
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics
 */
const setProperty = (selectors, prop, value) =>
  document.querySelector(selectors).style.setProperty(prop, value);

/**
 * Set translate() in transform property for small imgs to
 * make them around medium img.
 *
 * @param {Array} imgs Small images
 */
const setTranslateXY = (imgs) => {
  imgs.forEach((img) => {
    const { x, y } = calcCathetus(RADIUS, img.a);

    setProperty(
      `.img-${img.n}`,
      'transform',
      `translate(${x}px, ${y}px) rotate(${img.r}deg)`
    );
  });
};

setTranslateXY(SMALL_IMGS);

// Animation ------------------------------------------------------------------
const eleClasses = ['.left-top', '.right-top', '.left-bottom', '.right-bottom'];

let index = 0;

/**
 * Infinite animation loop via recursion
 */
const setAnimation = () => {
  // reset index
  index = index > 3 ? 0 : index;

  const currentEle = document.querySelector(eleClasses[index]);
  const delay = DURATION * 1000;

  // start animation
  currentEle.classList.add('active');

  // stop animation after a delay
  setTimeout(() => currentEle.classList.remove('active'), delay);

  // increment index
  index++;
  // run setAnimation() again with new index after a longer delay
  setTimeout(() => setAnimation(), delay * 1.2);
};

setAnimation();

// Responsive -----------------------------------------------------------------
const calcAspectRatio = () => window.innerWidth / MAX_WIDTH;

const setScale = () => setProperty(':root', '--ui-scale', calcAspectRatio());

// init when page first load
setScale();
// update when window is resized
window.addEventListener('resize', () => setScale());

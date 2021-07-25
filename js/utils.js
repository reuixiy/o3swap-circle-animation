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
export const calcCathetus = (hypotenuse, angle) => {
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
export const setProperty = (selectors, prop, value) =>
  document.querySelector(selectors).style.setProperty(prop, value);

/**
 * Set translate() in transform property for small imgs to
 * make them around medium img.
 *
 * @param {Array} imgs Small images
 * @param {Number} radius Radius of rotating small images
 */
export const setTranslateXY = (imgs, radius) => {
  imgs.forEach((img) => {
    const { x, y } = calcCathetus(radius, img.a);

    setProperty(
      `.img-${img.n}`,
      'transform',
      `translate(${x}px, ${y}px) rotate(${img.r}deg)`
    );
  });
};

/**
 * Calaculate aspect ratio of content via its maximum width
 *
 * @param {Number} maxWidth Maximum width of content
 */
export const calcAspectRatio = (maxWidth) => window.innerWidth / maxWidth;

/**
 * Set scale() in transform property for content
 *
 * @param {Number} maxWidth Maximum width of content
 */
export const setScale = (maxWidth) =>
  setProperty(':root', '--ui-scale', calcAspectRatio(maxWidth));

/**
 * Infinite animation loop via recursion
 *
 * @param {Number} index Starting index
 * @param {Array} circleGroupClasses Array to loop over
 * @param {Number} duration Animation duration in seconds
 */
export const setAnimation = (index, circleGroupClasses, duration) => {
  // reset index
  index = index > circleGroupClasses.length - 1 ? 0 : index;

  const currentEle = document.querySelector(circleGroupClasses[index]);
  const delay = duration * 1000;

  // start animation
  currentEle.classList.add('active');

  // stop animation after a delay
  setTimeout(() => currentEle.classList.remove('active'), delay);

  // increment index
  index++;
  // run setAnimation() again with new index after a longer delay
  setTimeout(
    () => setAnimation(index, circleGroupClasses, duration),
    delay * 1.2
  );
};

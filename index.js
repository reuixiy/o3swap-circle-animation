import {
  MAX_WIDTH,
  RADIUS,
  DURATION,
  CIRCLE_GROUP_CLASSES,
  SMALL_IMGS,
} from './js/constants.js';
import { setTranslateXY, setScale } from './js/utils.js';
import { setAnimation } from './js/animations.js';

// UI -------------------------------------------------------------------------
setTranslateXY(SMALL_IMGS, RADIUS);

// Animation ------------------------------------------------------------------
setAnimation(0, CIRCLE_GROUP_CLASSES, DURATION);

// Responsive -----------------------------------------------------------------
// init when page first load
setScale(MAX_WIDTH);
// update when window is resized
window.addEventListener('resize', () => setScale(MAX_WIDTH));

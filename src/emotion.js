// Extract emoticon by calculating degree with valence(x coordinate) and energy(y coordinate)
export function extractEmotion(valence, energy) {
  let angle;
  let y = map(energy, 0, 1, -1, 1);
  let x = map(valence, 0, 1, -1, 1);
  angle = (Math.atan2(y, x) * 180) / Math.PI;
  return angleToEmotion(angle);
}

// let test1 = extractEmotion(0.696, 0.774);
// console.log(test1);
// let test2 = extractEmotion(0.23, 0.128);
// console.log(test2);
// let test3 = extractEmotion(0.587, 0.45);
// console.log(test3);
// let test4 = extractEmotion(0.335, 0.953);
// console.log(test4);

function map(old_value, old_min, old_max, new_min, new_max) {
  return (
    ((old_value - old_min) / (old_max - old_min)) * (new_max - new_min) +
    new_min
  );
}

function angleToEmotion(angle) {
  if (angle >= 0 && angle <= 22.5) {
    return "Happy";
  } else if (angle > 22.5 && angle <= 45) {
    return "Elated";
  } else if (angle > 45 && angle <= 67.5) {
    return "Excited";
  } else if (angle > 67.5 && angle <= 90) {
    return "Alert";
  } else if (angle > 90 && angle <= 112.5) {
    return "Tense";
  } else if (angle > 112.5 && angle <= 135) {
    return "Nervous";
  } else if (angle > 135 && angle <= 157.5) {
    return "Stressed";
  } else if (angle > 157.5 && angle <= 180) {
    return "Upset";
  } else if (angle > -22.5 && angle <= 0) {
    return "Contended";
  } else if (angle > -45 && angle <= -22.5) {
    return "Serene";
  } else if (angle > -67.5 && angle <= -45) {
    return "Relaxed";
  } else if (angle > -90 && angle <= -67.5) {
    return "Calm";
  } else if (angle > -112.5 && angle <= -90) {
    return "Fatigued";
  } else if (angle > -135 && angle <= -112.5) {
    return "Lethargic";
  } else if (angle > -157.5 && angle <= -135) {
    return "Depressed";
  } else if (angle > -180 && angle <= -157.5) {
    return "Sad";
  }
}

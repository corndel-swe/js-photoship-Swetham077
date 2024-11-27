export function stripRed(rgb) {
  // TODO: set the red value in the rgb array to 0
  // e.g. [10, 105, 39] => [0, 105, 39]
  rgb[0] = 0
  return rgb
}

export function stripGreen(rgb) {
  // TODO: set the green value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 0, 39]
  rgb[1]=0
  return rgb
}

export function stripBlue(rgb) {
  // TODO: set the blue value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 105, 0]
  rgb[2]=0
  return rgb
}

export function invert(rgb) {
  // TODO: set each value in the array to (255 - value)
  // e.g. [50, 100, 210] => [205, 155, 45]
  return rgb.map(value => 255 - value)
}

export function grayScale(rgb) {
  // TODO: set each value of the rgb array to the average
  // e.g. [4, 5, 12] => [7, 7, 7]
  const average = (rgb[0] + rgb[1] + rgb[2]) / 3
  return rgb.map(()=> average);
}


export function blackAndWhite(rgb) {
  // TODO: calculate the average of r, g, b
  // if it's smaller than 255/2, set all values to 0
  // otherwise set all values to 255
  const average = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return average < 255 / 2 ? [0, 0, 0] : [255, 255, 255];
}

export function colorChannel(rgb, color) {
  const colorIndex = { red: 0, green: 1, blue: 2 };
  return rgb.map((value, index) => (index === colorIndex[color] ? value : 0));
}


export function sepia(rgb) {
  // TODO: google "sepia tone rgb formula" and implement it
}

export function adjustBrightness(rgb, brightness) {
  // TODO: add the value of 'brightness' to every element in rgb
  // but make sure the value stays between 0 and 255!
}

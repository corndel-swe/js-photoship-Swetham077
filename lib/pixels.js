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
  // TODO: get the color channel
  // if color is 'r', leave red alone and set green and blue to 0
  // similar for 'g' and 'b'
  // e.g. [107, 43, 198], 'g' => [0, 43, 0]
  const colorIndex = { red: 0, green: 1, blue: 2 };
  return rgb.map((value, index) => (index === colorIndex[color] ? value : 0));
}

export function sepia(rgb) {
  // TODO: google "sepia tone rgb formula" and implement it
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];

  const newR = (0.393*r) + (0.769* g) + (0.189 * b);
  const newG = (0.349 * r) + (0.686 * g) + (0.168 * b);
  const newB = (0.272 * r) + (0.534 * g) + (0.131 * b);

  const finalR = newR > 255 ? 255: newR;
  const finalG = newG > 255 ? 255: newG;
  const finalB = newB > 255 ? 255: newB;

  return [finalR, finalG, finalB];

}

export function adjustBrightness(rgb, brightness) {
  // TODO: add the value of 'brightness' to every element in rgb
  // but make sure the value stays between 0 and 255!
}

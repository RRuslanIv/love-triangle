/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0
  for (let i = 0; i < preferences.length; i++) {
    const first = {pos: i + 1, loves: preferences[i]};
    const second = {pos: first.loves, loves: preferences[first.loves - 1]}
    const third = {pos: second.loves, loves: preferences[second.loves - 1]}
    
    if (third.loves == first.pos && first.pos !== first.loves) {
      count++
        }
  }
  return count / 3
};

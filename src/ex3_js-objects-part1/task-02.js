Object.keys(o).forEach(function objKey(key) {
  console.log(key, ':', this[key]);
}, o);
module.exports = objKey;
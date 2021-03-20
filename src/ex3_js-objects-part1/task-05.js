function cloneObject(obj) {
  if ((typeof obj) !== 'object') {
    return false;
  }
  let clone = Object.assign({}, obj);
  return console.log(clone);
}
module.exports = cloneObject;
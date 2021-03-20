function checkingnObject(obj, objString) {
  if ((typeof objString) !== 'string' || (typeof obj) !== 'object') {
    return false;
  }
  for (var i in obj) {
    if (i === objString) {
      return console.log(true);
    }

  }
  return console.log(obj);
}

module.exports = checkingnObject;
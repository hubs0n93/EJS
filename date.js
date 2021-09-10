
// Shorter way below
module.exports.getDate = getDate

function getDate() {
  const today = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
    };
  const day = today.toLocaleDateString("en-US", options);

  return day
};

// The shortest way to creat of object function:
// module.exports = exports
exports.getDay = function() {
  const today = new Date();
  const options = {
    weekday: 'long',
    };
  const dayName = today.toLocaleDateString("en-US", options);

  return dayName
};

// See object:
console.log("module.exports or just 'exports' is any Object. We can add more object e.g. exports.objectName")
console.log(module.exports)
console.log("* ----------------------- *")

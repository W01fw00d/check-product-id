Number.prototype.pad = function (n) {
  return (new Array(n).join("0") + this).slice(n === undefined ? 2 : -n);
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * max + min);

const getRandomThreeDigitNumber = () => getRandomNumber(0, 999).pad(3);
const getRandomFourDigitNumber = () => getRandomNumber(0, 9999).pad(4);

const getRandomString = (requestedLength) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -_";
  let result = "";

  for (let i = 0; i < requestedLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

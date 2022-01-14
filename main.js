const fontsBtn = document.getElementById('fonts-btn');
const buyBtn = document.getElementById('buy-btn');
const fonts = document.getElementById('fonts');
const buy = document.getElementById('buy');

fontsBtn.style.color = '#7070708C';
buyBtn.style.color = '#FF6F00FF';

fontsBtn.addEventListener('click', () => {
  fonts.style.display = 'flex';
  buy.style.display = 'none';

  fontsBtn.style.color = '#7070708C';
  buyBtn.style.color = '#FF6F00FF';
});

buyBtn.addEventListener('click', () => {
  fonts.style.display = 'none';
  buy.style.display = 'flex';

  buyBtn.style.color = '#7070708C';
  fontsBtn.style.color = '#FF6F00FF';
});



// 2.
const K = 100;
const ARR = [21, 109, 10, 15, 18, 24, 38];

const findBestMatch = (targetNum, numArr) => {
  let diff = 0;
  let diffsArr = [];

  numArr.forEach((number) => {
    diff = number - targetNum;

    if (targetNum > number) {
      diff = targetNum - number;
    };

    diffsArr.push(diff);
  });

  const sortedDiffs = [...diffsArr].sort((a, b) => a - b);
  const minDiff = sortedDiffs[0];
  const indexOfMin = diffsArr.indexOf(minDiff);

  return numArr[indexOfMin];
};

const bestMatch = findBestMatch(K, ARR)
console.log(bestMatch);








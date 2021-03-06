const openers = '([{';

const closers = {
  '(': ')',
  '[': ']',
  '{': '}',
};

function test(str) {
  const storage = [];
  for (let bracket of str) {
    if (openers.includes(bracket)) {
      storage.push(bracket)
    } else {
      let opener = storage.pop();
      if (closers[opener] !== bracket) {
        return false;
      }
    }
  }
  if (storage.length || str.length === 0) {
    return false;
  } else {
    return true
  }
}

//you have an array of numbers: [1, 5, 2, 3]. The result is the positions of where we can achieve max. In this case, [0, 1]. Ask as many questions as you want.

/*
QUESTIONS: 
 - what is the order in which we calculate difference? does it matter (ex: [7, 1, 5])
 - do you want consecutive numbers or can they be spread? (ex: [1, 4, 5])
 - does the order in which you return the numbers matter? (small then big or by order in which we see them)


*/

const abs = (arr) => {
  let maxPos = 0;
  let minPos = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxPos]) {
      maxPos = i;
    }
    if (arr[i] < arr[minPos]) {
      minPos = i;
    }
  }
  return [minPos, maxPos];
};

const seq = (arr) => {
  let minPos = 0;
  let min = arr[0];
  let positions = [null, null];
  let diff = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minPos = i;
    } else if (arr[i] - min > diff){
      diff = arr[i] - min;
      positions[0] = minPos;
      positions[1] = i;
    }
  }
  return positions;
};

const adj = (arr) => {
  let diff = 0;
  let positions = [0, 0];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > diff) {
      diff = arr[i + 1] - arr[i];
      positions = [i, i + 1];
    }
  }
  return positions;
};

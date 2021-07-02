/**
 * console.log(await extract('Hello Natthawat Narin world'));
 * output: Natthawat Narin
 *
 * @param str
 * @returns
 */
export const extract = (str: string): string => {
  let lenghtStart: number = 'Hello'.length;
  let indexStart: number = str.indexOf('Hello') + lenghtStart;
  let indexEnd: number = str.indexOf('world');
  return indexStart < indexEnd && indexStart !== -1 && indexEnd !== -1
    ? str.slice(indexStart, indexEnd).trim()
    : '';
};
/**
 * console.log(await extract2('Hello Natthawat Narin world'));
 * output: Natthawat Narin
 *
 * @param str
 * @returns
 */
export const extract2 = (str: string): any => {
  let res = str.match(/Hello (.*) world/);
  return res !== null ? res[1] : '';
};

/**
 * console.log(await primeAt(100));
 * output: 541
 * @param nth
 * @returns
 */
export const primeAt = (nth: number): number => {
  let primeOder: number[] = [2];
  let primeIndex: number;
  let primeValue: number;
  let isPrime: boolean;
  let limit: number;
  let testNumber: number = 3;
  while (primeOder.length !== nth) {
    primeIndex = 1;
    primeValue = primeOder[primeIndex];
    limit = Math.sqrt(testNumber + 1);
    isPrime = true;
    while (primeValue < limit) {
      if (testNumber % primeValue === 0) {
        isPrime = false;
        break;
      } else {
        primeValue = primeOder[primeIndex++];
      }
    }
    if (isPrime) primeOder.push(testNumber);
    testNumber += 2;
  }

  return primeOder[primeOder.length - 1];
};

export const sortArray = () => {
  const months = ['March', 'Jan', 'Feb', 'Dec'];
  months.sort();
  console.log(months);
  // expected output: Array ["Dec", "Feb", "Jan", "March"]

  const array1 = [1, 30, 4, 21, 100000];
  array1.sort();
  console.log(array1);

  var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 },
  ];

  // sort by value
  items.sort(function(a, b) {
    return a.value - b.value;
  });

  console.log(items);

  // sort by name
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  console.log(items);
};

export const getMaxMin = () => {
  console.log(Math.max(1, 3, 2));
  // expected output: 3

  console.log(Math.max(-1, -3, -2));
  // expected output: -1

  const array1 = [1, 3, 2];

  console.log(Math.max(...array1));
  // expected output: 3

  // max Obj
  const shotsMax = [
    { id: 1, amount: -7 },
    { id: 2, amount: -123 },
    { id: 3, amount: 52 },
    { id: 4, amount: 36 },
    { id: 5, amount: 13 },
    { id: 6, amount: 33 },
  ];

  console.log(
    shotsMax.reduce(
      (acc, shot) => (acc = acc < shot.amount ? acc : shot.amount),
      shotsMax[0].amount,
    ),
  );

  //min Obj
  const shotsMin = [
    { id: 1, amount: -7 },
    { id: 2, amount: -123 },
    { id: 3, amount: 52 },
    { id: 4, amount: 36 },
    { id: 5, amount: 13 },
    { id: 6, amount: 33 },
  ];

  console.log(
    shotsMin.reduce(
      (acc, shot) => (acc = acc < shot.amount ? acc : shot.amount),
      shotsMin[0].amount,
    ),
  );
};

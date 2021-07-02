export const Disstructuring = () => {
  const post = {
    data: {
      id: 1,
      name: 'Natthawat Narin',
      age: 34,
    },
  };
  const { id, name, age } = post.data;
  console.log(id, name, age);
};

export const forLoop = () => {
  const db = ['graph', 'sql', 'noSql'];
  for (let item in db) console.log(item);

  for (let item of db) console.log(item);

  var test: number[] = [];
  let length = 4;
  for (let i = 0; i < length; i++) {
    test.push(Number(i + 5));
  }
  console.log(test);
};

export const passNumber = () => {
  console.log(+'999.99');
};

export const switchCase = () => {
  //   let num = 1;
  //   switch (num) {
  //     case 1:
  //       console.log(num + 1);
  //       break;
  //     case 2:
  //       console.log(num + 2);
  //       break;

  //     default:
  //       break;
  //   }

  const caseList = {
    1: 'case 1',
    2: 'case 2',
  };
  console.log(caseList[2]);
};

export const assingValue = (value?: string) => {
  let port;

  //   if (value) {
  //     port = value;
  //   } else {
  //     port = '5000';
  //   }

  port = value || '5000';
  //   port = value ?? '5000';

  console.log(port);
};

export const flatArray = () => {
  let arr: any[any] = [5, [1, 2], 8, 'NAME', ['index', 'agg']];
  console.log(arr.flat(2));
};

export const ifIncludes = () => {
  let name = 'AB';
  //   if (name === 'A' || name === 'B' || name === 'C' || name === 'D')
  //     console.log(name);

  if (['A' + 'B', 'A', 'B', 'C', 'D'].includes(name)) console.log(name);
};

export const filterValue = () => {
  function onlyUnique(value: any, index: any, self: any) {
    return self.indexOf(value) === index;
  }
  function isBigEnough(element: any, index: any, array: any) {
    return element >= 10;
  }

  var a = ['a', 1, 'a', 2, '1', 1, 1];
  var unique = a.filter(onlyUnique);
  console.log('NO Unique : ', unique);

  var passed = [12, 5, 8, 130, 44].filter(isBigEnough);
  console.log('passed > 10 : ' + passed);
};

export const reduceValue = () => {
  let num1 = [1, 2, 3, 4, 5, 6, 7, 8];
  let sum1 = num1.reduce((value, item) => value + item, 0);
  console.log('sum1', sum1);

  var objs = [
    { name: 'Peter', age: 35 },
    { name: 'John', age: 27 },
    { name: 'Jake', age: 28 },
  ];

  const sum2 = objs.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age;
  }, 0);
  console.log('sum2', sum2);
};

export const checkFild = () => {
  const emp = {
    id: 1,
    name: 'ta',
  };
  console.log('id' in emp); //true
  console.log('age' in emp); //false
};

export const toArry = () => {
  let str = '123456789';
  let num = 987654321;
  console.log(str.split(''));
  console.log(Array.from(num.toString()));
};

export const xxx = () => {};

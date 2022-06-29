// 1.Напишите функцию max, которая сравнивает два числа и возвращает большее

function max(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return firstNumber;
  } else if (secondNumber > firstNumber) {
    return secondNumber;
  }
}
console.log(max(14, 130));

// 2.Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них

function minNumber(...arrayNumbers) {
  let minimum = arrayNumbers[0];
  for (key of arrayNumbers) {
    if (key < minimum) {
      minimum = key;
    }
  }
  return minimum;
}
console.log(minNumber(0, -1, 100, 500, 100500));

// 3.Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции(методы) массивов:
// •	Отфильтруйте пользователей младше 18 лет
// •	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
// •	Сформируйте новый массив, который содержит только полное имя пользователей

let users = [
  {
    firstName: "Mary",
    lastName: "Stuart",
    age: 25,
  },
  {
    firstName: "Peter",
    lastName: "Parker",
    age: 12,
  },
  {
    firstName: "Conrad",
    lastName: "Fisher",
    age: 17,
  },
  {
    firstName: "Lola",
    lastName: "Tung",
    age: 19,
  },
  {
    firstName: "Tony",
    lastName: "Stark",
    age: 42,
  },
  {
    firstName: "Jack",
    lastName: "Dawson",
    age: 29,
  },
  {
    firstName: "Alina",
    lastName: "Starkov",
    age: 16,
  },
  {
    firstName: "Miles",
    lastName: "Bridge",
    age: 34,
  },
  {
    firstName: "Peter",
    lastName: "Pan",
    age: 10,
  },
  {
    firstName: "Alice",
    lastName: "Wonderland",
    age: 14,
  },
];

let minorUsers = users.filter((item) => item.age < 18);
console.log(minorUsers);

users.forEach(function (item) {
  item.fullName = `${item.firstName} ${item.lastName}`;
});
console.log(users);

let fullNameUsers = users.map(function (item) {
  return item.fullName;
});
console.log(fullNameUsers);

// 4.Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.

let array = ["lemons", 32, "dare", true, 0];
function shift(shiftArray) {
  return shiftArray.splice(0, 1);
}

console.log(shift(array));
console.log(array);

// 5.Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.

let array = [13, "news", false];
function push(array1, array2, array3, ...arrays) {
  return [...array1, array2, array3, ...arrays];
}
let newArray = push(array, 4, 8, 10);
console.log(newArray);

// 6.Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.

let source = {
  firstName: "Tom",
  age: 10,
};

let extendSource = {
  firstName: "John",
  lastName: "Doe",
};

let extraSource = {
  job: "carpenter",
  location: "Seoul",
  "contact person": "Mary",
};

function objectAssign(target, ...source) {
  let sourceJoined = {};
  for (sourceKey of source) {
    for (sourceElem in sourceKey) {
      sourceJoined[sourceElem] = sourceKey[sourceElem];
    }
  }
  return { ...target, ...sourceJoined };
}

let result = objectAssign(source, extendSource, extraSource);
console.log(result);

// 7.Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате:
// <имя_автора>, <дата>
// <текст_сообщения>

function setComment(date, message, author = "Anonymous") {
  if (!date || !message) {
    alert("данные переданы некорректно");
    return;
  }
  console.log(`${author}, ${date}\n${message}`);
}

setComment("2016-11-02", "Everything is ok", "John");
setComment("2016-11-02", "You could do it better!");

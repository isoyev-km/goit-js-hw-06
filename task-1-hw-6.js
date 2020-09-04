"use strict";
import users from "./users.js";

// Получить массив имен всех пользователей (поле name).

const getUserNames = (users) => users.map((user) => user.name);
// console.log(getUserNames(users));

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, "blue"));

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) =>
  users.filter((user) => user.gender === gender).map((user) => user.name);
// console.log(getUsersWithGender(users, "male"));

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = (users) => users.filter((user) => !user.isActive);

// console.log(getInactiveUsers(users));

// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);
users.map((user) => user.name);

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) =>
  users.filter((user) => user.age >= min && user.age <= max);

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = (users) =>
  users.reduce((totalBalance, balance) => totalBalance + balance.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  // твой код
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

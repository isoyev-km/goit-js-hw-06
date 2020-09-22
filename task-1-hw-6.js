"use strict";
import users from "./users.js";

// Получить массив имен всех пользователей (поле name).
const getUserNames = (users) => users.map((user) => user.name);

console.log(getUserNames(users));

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, "blue"));

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) =>
  users.filter((user) => user.gender === gender);

console.log(getUsersWithGender(users, "male"));

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = (users) => users.filter((user) => !user.isActive);

console.log(getInactiveUsers(users));

// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) =>
  users.filter((user) => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = (users) =>
  users.reduce((acc, userBalance) => acc + userBalance.balance, 0);

console.log(calculateTotalBalance(users));

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = (users) =>
  users
    .sort(
      (previousUser, nextUser) =>
        previousUser.friends.length - nextUser.friends.length
    )
    .map((user) => user.name);

console.log(getNamesSortedByFriendsCount(users));

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) =>
  users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills

      .filter(
        (previousSkill, nextSkill) =>
          allSkills.indexOf(previousSkill) === nextSkill
      )
      .sort();
  }, []);

console.log(getSortedUniqueSkills(users));

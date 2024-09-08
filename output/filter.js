"use strict";
function Filter(users) {
    return users.filter((user) => user.age > 17);
}
const value = Filter([
    { age: 20, firstName: "kartik", lastName: "bhatt" },
    { age: 10, firstName: "rocky", lastName: "bhatt" },
]);
console.log(value);

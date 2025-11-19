// 둘 이상일 경우 {}로 묶어서 받기 

const { user1, user2 } = require("./users-2");
const hello = require("./hello");

hello(user1);
hello(user2);

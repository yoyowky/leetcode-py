let userList=[];
// const userAboveTwenty= [];

class User {
  constructor(name,id,age){
    this.name=name;
    this.id=id;
    this.age=age;
  }

  addUser(user){
    userList.push(user);
  }
  // deleteUser(id){
  //   userList = userList.filter(user=>user.id!==id);
  // }
  changeAge(id, age){
    userList.map(user=>{
        if(user.id === id){
            user.age = age
        }
    })
  }
  changeName(id, name){
    userList.map(user=>{
        if(user.id === id){
            user.name = name
        }
    })
  }
  findUser(id){
      return userList.find(user => user.id===id)
  }

//   getUserListAboveTwenty(list){
//   userAboveTwenty.push(...list.filter(x=>x.age>20));
// }

// addAge(user){
//   return user.age = user.age+3;
// }
}

class AdminUser extends User{
  constructor(name,id,age,adminId) {
    // override parent property
    super(name,id,age);
    this.adminId = adminId;
  }
  // override parent method
  addUser(user){
    console.log(`new user ${user.name} added`)
    userList.push(user);
  }
  // 添加新的method
  deleteUser(id){
    userList = userList.filter(user=>user.id!==id);
  }
}



let user1 = new User('user1',1,12);
let user2 = new User('user2',2,18);
let user3 = new User('user3',3,21);
let user4 = new User('user4',4,22);

user1.addUser(user1);
user2.addUser(user2);
user3.addUser(user3);
user4.addUser(user4);
// user1.addAge(user1);
// user1.getUserListAboveTwenty(userList);
// user1.addAge(user1);
console.log(userList)
// user1.deleteUser(4);
// console.log(userList)
user1.changeAge(3,22)
console.log(userList)
const findUser = user1.findUser(3)
console.log(findUser)
let admin = new AdminUser('Admin', 5, 29,1);
admin.addUser(admin);
admin.deleteUser(4)
console.log(userList)

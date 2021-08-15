import User from "./User.ts";

const user = new User("manuel@manuel.com", "12345678", "1024x600");
const vp = user.start()
console.log(vp);

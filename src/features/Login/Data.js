export const data = [
  {
    id: 1,
    name: "ravi",
    password: "12345",
    phone: 7760841097
  },
  {
    id:2,
    name: "prajwal",
    password: "12345",
    phone: 9860841097
  },
  {
    id:3,
    name: "vikas",
    password: "12345",
    phone: 8460841097
  },
];


export const getUserData = (userData) => {
  return data.filter(user => user.name === userData.name && user.password === userData.password)
}
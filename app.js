/*const getaName = async ()=>{
    return new Promise ((resolve,reject)=>{
     
      setTimeout(()=>{
        resolve('el pibe');
      },1500)
    })
};


const sayHello = async () =>{
    const Name = await getaName();
    return `Hello ${Name}`
}
sayHello().then(res => console.log(res));*/

const users = [{id: 1, name: 'el pibe'},{id: 2, name : 'laura' },{id: 3,name: 'pablo'}]

const emails = [{id: 1,email: 'elpibe@gmail.com'},{id:2, email:'laura@gmail.com'}]

const getUser = async (id) =>{
  const user = users.find(user => user.id == id)
    if(!user) throw new Error(`doesnot exist an user widht id ${id}`)
    else  return user
}

const getEmail =  async(user) =>{
  const email = emails.find(email => email.id == user.id)
    if(!email) throw new Error(`${user.name} hasnot emails`)
    else return({
      id: user.id,
      name : user.name,
      email: email.email
    })
}
const getInfo = async (id)=>{
  try { // intenta ejecutar esto pues si algo no anda bien
    
    const user = await getUser(id)
    const res =  await getEmail(user)
    return `${user.name} email is ${res.email} `
  } catch (error) { // me lo envias aqui al cach, y lo imprimes
    console.log(error);
  }
};
getInfo(1).then(res=>console.log(res));

require('dotenv').config({  
    path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env"
});

console.log(process.env.TESTE);
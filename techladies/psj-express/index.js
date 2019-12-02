const express =require("express");
const app =express(); //creating instance of express

app.get('/',(req,res) => { 
   res.send("Hello Techladies , welcome to simple Express APP exercise");
});
// app listen on port3000
app.listen(3000,()=>
     console.log("psj-express app listening on port =3000")
     );

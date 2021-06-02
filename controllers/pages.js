 
const films =  require('../utils/films');

let routes={
home:(req,res)=>{
    res.status(200).render('home')
},
film:(req,res)=>{
    let datos= {
nombre:"klk esta e tu pelikul"
    }
    res.status(200).render('film',datos)
},
post:(req,res)=>{},

}
module.exports=routes
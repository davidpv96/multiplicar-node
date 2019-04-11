const colors=require('colors');
const fs=require('fs');
let listarTabla=(base,limite=10)=>{
    let resultado=``;
    console.log(`=====LISTAR TABLA DE ${base}`.red);
    for(let i=1;i<=limite;i++){
       resultado+=`${base}*${i}=${base*i}\n`;
    }
    return resultado;
}

const multiplicarNumero=async(numero,limite)=>{
    if(!Number(numero)){
        throw new Error('no es un numero');
       
    }
  
let base=numero;
let data='';
for (let index = 1; index <= limite; index++) {
    data+=(`${base}*${index}=${base*index}\n`);
    
}
fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
    if (err) {
        throw new Error(err);     
    }
  });
  return `tabla-${base}.txt`;
  
}
module.exports={
    multiplicarNumero,
    listarTabla
}

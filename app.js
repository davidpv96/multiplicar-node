const argv=require('./config/yargs').argv;
console.log(argv);
const {multiplicarNumero,listarTabla}=require('./multiplicar/multiplicar');
// console.log(argv);
let {_:comando,b:base,limite:limite}=argv;
switch (comando[0]) {
    case 'listar':
        console.log(listarTabla(base,limite));
        break;
    case 'crear':
        let respuesta=async(base,lim)=>{
        let funcion=await multiplicarNumero(base,lim);
        return `a sido creado ${funcion}`;
        }
        respuesta(base,limite).then(resp=>{
        console.log(resp);
        }).catch(err=>console.log(err));
         break;   

    default:
        console.log('algo salio mal');
        break;
}



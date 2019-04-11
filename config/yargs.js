const opts={
    base:{
        demand:true,
        alias:'b'
    },
    limite:{
        default:40
    }
}

const argv=require('yargs')
.command('listar','imprime en consola la tabla de multiplicar',opts)
.command('crear','crear un archivo de tabla de multiplicar',opts)
.argv;
module.exports={
    argv
}


const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

let salida ='';
let consola ='';

for ( let i = 1; i <= hasta; i++ ) {
    salida += `${ base } x ${ i } = ${ base * i }\n`;
    consola += `${ base } ${'x'.green} ${ i } ${'='.blue} ${ base * i }\n`;
}

if ( listar ){

    console.log('===================='.red);
    console.log( ' Tabla del:'.green, colors.blue(base) );
    console.log('===================='.red);
    console.log(consola);
    }



fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
   
return `tabla-${ base }.txt`;


    } catch (err) {
        throw err;


    }
 





}

module.exports = {
    crearArchivo
}




// const fs = require('fs');

// const crearArchivo = ( base = 5 ) => {
//     return new Promise((resolve, reject) =>{

//         console.log('====================');
// console.log( ' Tabla del:', base);
// console.log('====================');
    
//     let salida ='';

// for (let i = 1; i <= 10;i++) {
//     salida += `${ base } x ${ i } = ${ base * i }\n`;
// }

// console.log(salida);

// fs.writeFileSync(`tabla-${ base }.txt`, salida);
   
// resolve(`tabla-${ base }.txt`);

//     })



// }

// module.exports = {
//     crearArchivo
// }
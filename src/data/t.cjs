// test.js

const JsCodeGenerator = require('./JsCodeGenerator.js');



// Ejemplo de un AST de prueba para un bucle "for"
const ast = {
    type: 'Program',
    children: [
        {
            type: 'ForLoop',
            initVar: 'i',
            limit: 10,
            loopVar: 'i',
            step: 1,
            children: [
                {
                    type: 'OtherStatement',
                    variable: 'x',
                    value: '2 * i'
                }
            ]
        }
    ]
};

// Crear una instancia de JsCodeGenerator
const codeGenerator = new JsCodeGenerator();

// Generar el código JavaScript a partir del AST de prueba
const generatedCode = codeGenerator.generate(ast);

// Imprimir el código generado
console.log(generatedCode);

const fs = require('fs');
const antlr4 = require('antlr4');
const MiuLexer = require('../data/analizar_lexico/MiuLanguage_lexLexer').MiuLexer;
const MiuParser = require('../data/analizar_lexico/MiuLanguage_lexParser').MiuLanguage_lexParser;
const MiuLexer_sin = require('../data/analizar_sintactico/MiuLanguage_sinLexer').MiuLanguage_sinLexer;
const MiuParser_sin = require('../data/analizar_sintactico/MiuLanguage_sinParser').MiuLanguage_sinParser;
const CheckContext = require('../context/CheckContext').CheckContext;

class MyVisitor extends MiuParser_sin.BaseMiuLanguage_sinVisitor {
    constructor() {
        super();
        // Inicializa cualquier estado necesario para tu generador de código
    }

    // Sobrescribe los métodos de visita necesarios para generar código
    visitStartRule(ctx) {
        // Este método será llamado para visitar el nodo inicial de tu gramática
        // Puedes implementar aquí la generación de código según sea necesario
        return this.visitChildren(ctx);
    }

    // Implementa más métodos de visita según sea necesario para otros elementos de tu gramática
}

// Lee la entrada desde un archivo
//const inputFilePath = 'entra; // Ruta al archivo de entrada
const input = fs.readFileSync(MiuCode, 'utf-8'); // Lee el contenido del archivo

// Crea un analizador léxico
const chars = new antlr4.InputStream(input);
const lexer = new MiuLexer(chars);

// Crea un analizador sintáctico
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MiuParser(tokens);

// Realiza el análisis sintáctico y obtén el árbol de análisis
const tree = parser.startRule();

// Crea un visitante y recorre el árbol de análisis
const visitor = new MyVisitor();
const generatedCode = visitor.visit(tree);

const outputFilePath = 'output.js'; // Ruta al archivo de salida
fs.writeFileSync(outputFilePath, generatedCode, 'utf-8');

console.log('Archivo de salida generado correctamente:', outputFilePath);

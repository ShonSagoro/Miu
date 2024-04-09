// Generated from ./MiuLanguage_sin.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiuLanguage_sinListener from './MiuLanguage_sinListener.js';
import MiuLanguage_sinVisitor from './MiuLanguage_sinVisitor.js';

const serializedATN = [4,1,36,438,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,1,0,1,0,5,0,127,8,
0,10,0,12,0,130,9,0,1,0,3,0,133,8,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,141,8,1,
1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,5,2,151,8,2,10,2,12,2,154,9,2,1,2,1,2,1,
3,1,3,1,3,1,3,1,3,3,3,163,8,3,1,4,1,4,1,4,1,4,5,4,169,8,4,10,4,12,4,172,
9,4,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,5,7,182,8,7,10,7,12,7,185,9,7,1,7,1,
7,1,8,1,8,5,8,191,8,8,10,8,12,8,194,9,8,1,8,1,8,1,8,1,9,1,9,1,9,5,9,202,
8,9,10,9,12,9,205,9,9,1,10,1,10,1,10,3,10,210,8,10,1,10,1,10,1,11,1,11,1,
11,5,11,217,8,11,10,11,12,11,220,9,11,1,12,1,12,1,12,1,12,3,12,226,8,12,
1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,236,8,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,3,13,245,8,13,5,13,247,8,13,10,13,12,13,250,9,13,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,3,14,260,8,14,1,15,1,15,1,15,1,15,1,15,5,15,
267,8,15,10,15,12,15,270,9,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,5,16,279,
8,16,10,16,12,16,282,9,16,1,16,1,16,1,16,1,16,1,16,5,16,289,8,16,10,16,12,
16,292,9,16,1,16,1,16,1,17,1,17,3,17,298,8,17,1,18,1,18,1,18,1,18,5,18,304,
8,18,10,18,12,18,307,9,18,1,18,3,18,310,8,18,1,19,1,19,1,19,1,20,1,20,1,
20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,
5,22,332,8,22,10,22,12,22,335,9,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,
24,5,24,345,8,24,10,24,12,24,348,9,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
3,25,357,8,25,1,26,1,26,3,26,361,8,26,1,27,1,27,1,27,1,27,1,27,3,27,368,
8,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,1,33,1,33,1,34,1,
34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,
1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,46,1,47,1,47,1,48,1,48,1,
49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,1,53,1,54,1,54,1,55,1,55,1,56,
1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,60,1,60,1,61,1,61,1,61,0,0,62,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,
104,106,108,110,112,114,116,118,120,122,0,0,422,0,128,1,0,0,0,2,136,1,0,
0,0,4,145,1,0,0,0,6,162,1,0,0,0,8,164,1,0,0,0,10,173,1,0,0,0,12,175,1,0,
0,0,14,179,1,0,0,0,16,188,1,0,0,0,18,198,1,0,0,0,20,206,1,0,0,0,22,213,1,
0,0,0,24,221,1,0,0,0,26,235,1,0,0,0,28,259,1,0,0,0,30,261,1,0,0,0,32,273,
1,0,0,0,34,297,1,0,0,0,36,299,1,0,0,0,38,311,1,0,0,0,40,314,1,0,0,0,42,319,
1,0,0,0,44,327,1,0,0,0,46,336,1,0,0,0,48,340,1,0,0,0,50,356,1,0,0,0,52,360,
1,0,0,0,54,367,1,0,0,0,56,369,1,0,0,0,58,371,1,0,0,0,60,373,1,0,0,0,62,375,
1,0,0,0,64,377,1,0,0,0,66,379,1,0,0,0,68,381,1,0,0,0,70,383,1,0,0,0,72,385,
1,0,0,0,74,387,1,0,0,0,76,389,1,0,0,0,78,391,1,0,0,0,80,393,1,0,0,0,82,395,
1,0,0,0,84,397,1,0,0,0,86,399,1,0,0,0,88,401,1,0,0,0,90,403,1,0,0,0,92,405,
1,0,0,0,94,407,1,0,0,0,96,409,1,0,0,0,98,411,1,0,0,0,100,413,1,0,0,0,102,
415,1,0,0,0,104,417,1,0,0,0,106,419,1,0,0,0,108,421,1,0,0,0,110,423,1,0,
0,0,112,425,1,0,0,0,114,427,1,0,0,0,116,429,1,0,0,0,118,431,1,0,0,0,120,
433,1,0,0,0,122,435,1,0,0,0,124,127,3,4,2,0,125,127,3,2,1,0,126,124,1,0,
0,0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,
132,1,0,0,0,130,128,1,0,0,0,131,133,5,36,0,0,132,131,1,0,0,0,132,133,1,0,
0,0,133,134,1,0,0,0,134,135,5,0,0,1,135,1,1,0,0,0,136,137,3,64,32,0,137,
138,3,66,33,0,138,140,3,114,57,0,139,141,3,8,4,0,140,139,1,0,0,0,140,141,
1,0,0,0,141,142,1,0,0,0,142,143,3,116,58,0,143,144,3,6,3,0,144,3,1,0,0,0,
145,146,3,68,34,0,146,152,3,70,35,0,147,148,3,72,36,0,148,149,3,70,35,0,
149,151,1,0,0,0,150,147,1,0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,152,153,
1,0,0,0,153,155,1,0,0,0,154,152,1,0,0,0,155,156,3,74,37,0,156,5,1,0,0,0,
157,158,3,76,38,0,158,159,3,78,39,0,159,160,3,16,8,0,160,163,1,0,0,0,161,
163,3,14,7,0,162,157,1,0,0,0,162,161,1,0,0,0,163,7,1,0,0,0,164,170,3,12,
6,0,165,166,3,80,40,0,166,167,3,12,6,0,167,169,1,0,0,0,168,165,1,0,0,0,169,
172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,9,1,0,0,0,172,170,1,0,0,
0,173,174,5,36,0,0,174,11,1,0,0,0,175,176,3,70,35,0,176,177,3,122,61,0,177,
178,3,78,39,0,178,13,1,0,0,0,179,183,3,118,59,0,180,182,3,28,14,0,181,180,
1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,186,1,0,0,0,
185,183,1,0,0,0,186,187,3,120,60,0,187,15,1,0,0,0,188,192,3,118,59,0,189,
191,3,28,14,0,190,189,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,1,
0,0,0,193,195,1,0,0,0,194,192,1,0,0,0,195,196,3,18,9,0,196,197,3,120,60,
0,197,17,1,0,0,0,198,199,3,82,41,0,199,203,3,48,24,0,200,202,3,74,37,0,201,
200,1,0,0,0,202,205,1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,19,1,0,0,
0,205,203,1,0,0,0,206,207,3,66,33,0,207,209,3,114,57,0,208,210,3,26,13,0,
209,208,1,0,0,0,209,210,1,0,0,0,210,211,1,0,0,0,211,212,3,116,58,0,212,21,
1,0,0,0,213,218,3,70,35,0,214,217,3,24,12,0,215,217,3,30,15,0,216,214,1,
0,0,0,216,215,1,0,0,0,217,220,1,0,0,0,218,216,1,0,0,0,218,219,1,0,0,0,219,
23,1,0,0,0,220,218,1,0,0,0,221,222,3,112,56,0,222,223,3,66,33,0,223,225,
3,114,57,0,224,226,3,26,13,0,225,224,1,0,0,0,225,226,1,0,0,0,226,227,1,0,
0,0,227,228,3,116,58,0,228,25,1,0,0,0,229,236,3,22,11,0,230,236,3,102,51,
0,231,236,3,104,52,0,232,236,3,106,53,0,233,236,3,108,54,0,234,236,3,110,
55,0,235,229,1,0,0,0,235,230,1,0,0,0,235,231,1,0,0,0,235,232,1,0,0,0,235,
233,1,0,0,0,235,234,1,0,0,0,236,248,1,0,0,0,237,244,3,80,40,0,238,245,3,
22,11,0,239,245,3,102,51,0,240,245,3,104,52,0,241,245,3,106,53,0,242,245,
3,108,54,0,243,245,3,110,55,0,244,238,1,0,0,0,244,239,1,0,0,0,244,240,1,
0,0,0,244,241,1,0,0,0,244,242,1,0,0,0,244,243,1,0,0,0,245,247,1,0,0,0,246,
237,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,248,249,1,0,0,0,249,27,1,0,0,
0,250,248,1,0,0,0,251,260,3,32,16,0,252,253,3,20,10,0,253,254,3,74,37,0,
254,260,1,0,0,0,255,256,3,22,11,0,256,257,3,74,37,0,257,260,1,0,0,0,258,
260,3,34,17,0,259,251,1,0,0,0,259,252,1,0,0,0,259,255,1,0,0,0,259,258,1,
0,0,0,260,29,1,0,0,0,261,262,3,86,43,0,262,268,3,50,25,0,263,264,3,52,26,
0,264,265,3,50,25,0,265,267,1,0,0,0,266,263,1,0,0,0,267,270,1,0,0,0,268,
266,1,0,0,0,268,269,1,0,0,0,269,271,1,0,0,0,270,268,1,0,0,0,271,272,3,74,
37,0,272,31,1,0,0,0,273,274,3,84,42,0,274,280,3,70,35,0,275,276,3,122,61,
0,276,277,3,78,39,0,277,279,1,0,0,0,278,275,1,0,0,0,279,282,1,0,0,0,280,
278,1,0,0,0,280,281,1,0,0,0,281,283,1,0,0,0,282,280,1,0,0,0,283,284,3,86,
43,0,284,290,3,50,25,0,285,286,3,52,26,0,286,287,3,50,25,0,287,289,1,0,0,
0,288,285,1,0,0,0,289,292,1,0,0,0,290,288,1,0,0,0,290,291,1,0,0,0,291,293,
1,0,0,0,292,290,1,0,0,0,293,294,3,74,37,0,294,33,1,0,0,0,295,298,3,36,18,
0,296,298,3,42,21,0,297,295,1,0,0,0,297,296,1,0,0,0,298,35,1,0,0,0,299,300,
3,88,44,0,300,301,3,44,22,0,301,305,3,14,7,0,302,304,3,40,20,0,303,302,1,
0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,306,1,0,0,0,306,309,1,0,0,0,307,
305,1,0,0,0,308,310,3,38,19,0,309,308,1,0,0,0,309,310,1,0,0,0,310,37,1,0,
0,0,311,312,3,90,45,0,312,313,3,14,7,0,313,39,1,0,0,0,314,315,3,90,45,0,
315,316,3,88,44,0,316,317,3,44,22,0,317,318,3,14,7,0,318,41,1,0,0,0,319,
320,3,92,46,0,320,321,3,70,35,0,321,322,3,94,47,0,322,323,3,106,53,0,323,
324,3,96,48,0,324,325,3,106,53,0,325,326,3,14,7,0,326,43,1,0,0,0,327,333,
3,46,23,0,328,329,3,98,49,0,329,330,3,46,23,0,330,332,1,0,0,0,331,328,1,
0,0,0,332,335,1,0,0,0,333,331,1,0,0,0,333,334,1,0,0,0,334,45,1,0,0,0,335,
333,1,0,0,0,336,337,3,50,25,0,337,338,3,100,50,0,338,339,3,50,25,0,339,47,
1,0,0,0,340,346,3,50,25,0,341,342,3,52,26,0,342,343,3,50,25,0,343,345,1,
0,0,0,344,341,1,0,0,0,345,348,1,0,0,0,346,344,1,0,0,0,346,347,1,0,0,0,347,
49,1,0,0,0,348,346,1,0,0,0,349,357,3,22,11,0,350,357,3,20,10,0,351,357,3,
102,51,0,352,357,3,104,52,0,353,357,3,106,53,0,354,357,3,108,54,0,355,357,
3,110,55,0,356,349,1,0,0,0,356,350,1,0,0,0,356,351,1,0,0,0,356,352,1,0,0,
0,356,353,1,0,0,0,356,354,1,0,0,0,356,355,1,0,0,0,357,51,1,0,0,0,358,361,
3,54,27,0,359,361,3,98,49,0,360,358,1,0,0,0,360,359,1,0,0,0,361,53,1,0,0,
0,362,368,1,0,0,0,363,368,3,56,28,0,364,368,3,58,29,0,365,368,3,62,31,0,
366,368,3,60,30,0,367,362,1,0,0,0,367,363,1,0,0,0,367,364,1,0,0,0,367,365,
1,0,0,0,367,366,1,0,0,0,368,55,1,0,0,0,369,370,5,19,0,0,370,57,1,0,0,0,371,
372,5,20,0,0,372,59,1,0,0,0,373,374,5,21,0,0,374,61,1,0,0,0,375,376,5,22,
0,0,376,63,1,0,0,0,377,378,5,4,0,0,378,65,1,0,0,0,379,380,5,33,0,0,380,67,
1,0,0,0,381,382,5,5,0,0,382,69,1,0,0,0,383,384,5,34,0,0,384,71,1,0,0,0,385,
386,5,15,0,0,386,73,1,0,0,0,387,388,5,17,0,0,388,75,1,0,0,0,389,390,5,12,
0,0,390,77,1,0,0,0,391,392,5,27,0,0,392,79,1,0,0,0,393,394,5,16,0,0,394,
81,1,0,0,0,395,396,5,11,0,0,396,83,1,0,0,0,397,398,5,6,0,0,398,85,1,0,0,
0,399,400,5,3,0,0,400,87,1,0,0,0,401,402,5,8,0,0,402,89,1,0,0,0,403,404,
5,9,0,0,404,91,1,0,0,0,405,406,5,10,0,0,406,93,1,0,0,0,407,408,5,7,0,0,408,
95,1,0,0,0,409,410,5,14,0,0,410,97,1,0,0,0,411,412,5,2,0,0,412,99,1,0,0,
0,413,414,5,1,0,0,414,101,1,0,0,0,415,416,5,29,0,0,416,103,1,0,0,0,417,418,
5,30,0,0,418,105,1,0,0,0,419,420,5,32,0,0,420,107,1,0,0,0,421,422,5,31,0,
0,422,109,1,0,0,0,423,424,5,28,0,0,424,111,1,0,0,0,425,426,5,13,0,0,426,
113,1,0,0,0,427,428,5,23,0,0,428,115,1,0,0,0,429,430,5,24,0,0,430,117,1,
0,0,0,431,432,5,25,0,0,432,119,1,0,0,0,433,434,5,26,0,0,434,121,1,0,0,0,
435,436,5,18,0,0,436,123,1,0,0,0,29,126,128,132,140,152,162,170,183,192,
203,209,216,218,225,235,244,248,259,268,280,290,297,305,309,333,346,356,
360,367];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiuLanguage_sinParser extends antlr4.Parser {

    static grammarFileName = "MiuLanguage_sin.g4";
    static literalNames = [ null, null, null, "'='", "'fn'", "'use'", "'let'", 
                            "'in'", "'if'", "'else'", "'for'", "'return'", 
                            "'->'", "'.'", "'..'", "'::'", "','", "';'", 
                            "':'", "'*'", "'/'", "'+'", "'-'", "'('", "')'", 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, "COMPARISON_OPERATOR", "ADD_OPERATOR", 
                             "EQUAL", "FN", "USE", "LET", "IN", "IF", "ELSE", 
                             "FOR", "RETURN", "ARROW", "DOT", "DOUBLE_DOT", 
                             "PP", "COMMA", "PC", "P", "MULT", "DIV", "SUM", 
                             "SUB", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                             "TYPE", "BOOL", "STRING", "CHAR", "FLOAT", 
                             "INT", "IDF", "ID", "WS", "INVALID" ];
    static ruleNames = [ "program", "functionDeclaration", "moduleDeclaration", 
                         "checkreturnFunctionRule", "paramList", "invalidRule", 
                         "param", "bodyRule", "bodyRRule", "statementRRule", 
                         "functionCall", "varStatement", "functionCallVar", 
                         "argList", "statement", "assignametnVar", "assignment", 
                         "controlStructure", "ifStatement", "elseStatement", 
                         "elseIfStatement", "forStatement", "comparisonExprADDRule", 
                         "comparisonExprRule", "exprReturnRule", "exprRule", 
                         "exprExtraRule", "mulOperatorRule", "multRule", 
                         "divRule", "sumRule", "subRule", "fnRule", "idfRule", 
                         "useRule", "idRule", "ppRule", "pcRule", "arrowRule", 
                         "typeRule", "commaRule", "returnRule", "letRule", 
                         "equalRule", "ifRule", "elseRule", "forRule", "inRule", 
                         "doubleDotRule", "addOperatorRule", "comparisonOperatorRule", 
                         "stringRule", "charRule", "intRule", "floatRule", 
                         "boolRule", "dotRule", "lparenRule", "rparenRule", 
                         "lbraceRule", "rbraceRule", "pRule" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiuLanguage_sinParser.ruleNames;
        this.literalNames = MiuLanguage_sinParser.literalNames;
        this.symbolicNames = MiuLanguage_sinParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiuLanguage_sinParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===5) {
	            this.state = 126;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 5:
	                this.state = 124;
	                this.moduleDeclaration();
	                break;
	            case 4:
	                this.state = 125;
	                this.functionDeclaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 131;
	            this.match(MiuLanguage_sinParser.INVALID);
	        }

	        this.state = 134;
	        this.match(MiuLanguage_sinParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiuLanguage_sinParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.fnRule();
	        this.state = 137;
	        this.idfRule();
	        this.state = 138;
	        this.lparenRule();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 139;
	            this.paramList();
	        }

	        this.state = 142;
	        this.rparenRule();
	        this.state = 143;
	        this.checkreturnFunctionRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	moduleDeclaration() {
	    let localctx = new ModuleDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiuLanguage_sinParser.RULE_moduleDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.useRule();
	        this.state = 146;
	        this.idRule();
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 147;
	            this.ppRule();
	            this.state = 148;
	            this.idRule();
	            this.state = 154;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 155;
	        this.pcRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	checkreturnFunctionRule() {
	    let localctx = new CheckreturnFunctionRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiuLanguage_sinParser.RULE_checkreturnFunctionRule);
	    try {
	        this.state = 162;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 157;
	            this.arrowRule();
	            this.state = 158;
	            this.typeRule();
	            this.state = 159;
	            this.bodyRRule();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.bodyRule();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paramList() {
	    let localctx = new ParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiuLanguage_sinParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.param();
	        this.state = 170;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 165;
	            this.commaRule();
	            this.state = 166;
	            this.param();
	            this.state = 172;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	invalidRule() {
	    let localctx = new InvalidRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiuLanguage_sinParser.RULE_invalidRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(MiuLanguage_sinParser.INVALID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiuLanguage_sinParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.idRule();
	        this.state = 176;
	        this.pRule();
	        this.state = 177;
	        this.typeRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bodyRule() {
	    let localctx = new BodyRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiuLanguage_sinParser.RULE_bodyRule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.lbraceRule();
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 402653205) !== 0)) {
	            this.state = 180;
	            this.statement();
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 186;
	        this.rbraceRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bodyRRule() {
	    let localctx = new BodyRRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiuLanguage_sinParser.RULE_bodyRRule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.lbraceRule();
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 402653205) !== 0)) {
	            this.state = 189;
	            this.statement();
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 195;
	        this.statementRRule();
	        this.state = 196;
	        this.rbraceRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statementRRule() {
	    let localctx = new StatementRRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiuLanguage_sinParser.RULE_statementRRule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.returnRule();
	        this.state = 199;
	        this.exprReturnRule();
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 200;
	            this.pcRule();
	            this.state = 205;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MiuLanguage_sinParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.idfRule();
	        this.state = 207;
	        this.lparenRule();
	        this.state = 209;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 95) !== 0)) {
	            this.state = 208;
	            this.argList();
	        }

	        this.state = 211;
	        this.rparenRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varStatement() {
	    let localctx = new VarStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MiuLanguage_sinParser.RULE_varStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.idRule();
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===13) {
	            this.state = 216;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 13:
	                this.state = 214;
	                this.functionCallVar();
	                break;
	            case 3:
	                this.state = 215;
	                this.assignametnVar();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 220;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCallVar() {
	    let localctx = new FunctionCallVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MiuLanguage_sinParser.RULE_functionCallVar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.dotRule();
	        this.state = 222;
	        this.idfRule();
	        this.state = 223;
	        this.lparenRule();
	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 95) !== 0)) {
	            this.state = 224;
	            this.argList();
	        }

	        this.state = 227;
	        this.rparenRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argList() {
	    let localctx = new ArgListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MiuLanguage_sinParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            this.state = 229;
	            this.varStatement();
	            break;
	        case 29:
	            this.state = 230;
	            this.stringRule();
	            break;
	        case 30:
	            this.state = 231;
	            this.charRule();
	            break;
	        case 32:
	            this.state = 232;
	            this.intRule();
	            break;
	        case 31:
	            this.state = 233;
	            this.floatRule();
	            break;
	        case 28:
	            this.state = 234;
	            this.boolRule();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 248;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 237;
	            this.commaRule();
	            this.state = 244;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 34:
	                this.state = 238;
	                this.varStatement();
	                break;
	            case 29:
	                this.state = 239;
	                this.stringRule();
	                break;
	            case 30:
	                this.state = 240;
	                this.charRule();
	                break;
	            case 32:
	                this.state = 241;
	                this.intRule();
	                break;
	            case 31:
	                this.state = 242;
	                this.floatRule();
	                break;
	            case 28:
	                this.state = 243;
	                this.boolRule();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 250;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MiuLanguage_sinParser.RULE_statement);
	    try {
	        this.state = 259;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 251;
	            this.assignment();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 252;
	            this.functionCall();
	            this.state = 253;
	            this.pcRule();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 255;
	            this.varStatement();
	            this.state = 256;
	            this.pcRule();
	            break;
	        case 8:
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 258;
	            this.controlStructure();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignametnVar() {
	    let localctx = new AssignametnVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MiuLanguage_sinParser.RULE_assignametnVar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.equalRule();
	        this.state = 262;
	        this.exprRule();
	        this.state = 268;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4034396164) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 263;
	            this.exprExtraRule();
	            this.state = 264;
	            this.exprRule();
	            this.state = 270;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 271;
	        this.pcRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, MiuLanguage_sinParser.RULE_assignment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.letRule();
	        this.state = 274;
	        this.idRule();
	        this.state = 280;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 275;
	            this.pRule();
	            this.state = 276;
	            this.typeRule();
	            this.state = 282;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 283;
	        this.equalRule();
	        this.state = 284;
	        this.exprRule();
	        this.state = 290;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4034396164) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 285;
	            this.exprExtraRule();
	            this.state = 286;
	            this.exprRule();
	            this.state = 292;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 293;
	        this.pcRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	controlStructure() {
	    let localctx = new ControlStructureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, MiuLanguage_sinParser.RULE_controlStructure);
	    try {
	        this.state = 297;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 295;
	            this.ifStatement();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 296;
	            this.forStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, MiuLanguage_sinParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        this.ifRule();
	        this.state = 300;
	        this.comparisonExprADDRule();
	        this.state = 301;
	        this.bodyRule();
	        this.state = 305;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 302;
	                this.elseIfStatement(); 
	            }
	            this.state = 307;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	        }

	        this.state = 309;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 308;
	            this.elseStatement();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseStatement() {
	    let localctx = new ElseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, MiuLanguage_sinParser.RULE_elseStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311;
	        this.elseRule();
	        this.state = 312;
	        this.bodyRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseIfStatement() {
	    let localctx = new ElseIfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, MiuLanguage_sinParser.RULE_elseIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.elseRule();
	        this.state = 315;
	        this.ifRule();
	        this.state = 316;
	        this.comparisonExprADDRule();
	        this.state = 317;
	        this.bodyRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, MiuLanguage_sinParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this.forRule();
	        this.state = 320;
	        this.idRule();
	        this.state = 321;
	        this.inRule();
	        this.state = 322;
	        this.intRule();
	        this.state = 323;
	        this.doubleDotRule();
	        this.state = 324;
	        this.intRule();
	        this.state = 325;
	        this.bodyRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparisonExprADDRule() {
	    let localctx = new ComparisonExprADDRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, MiuLanguage_sinParser.RULE_comparisonExprADDRule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this.comparisonExprRule();
	        this.state = 333;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 328;
	            this.addOperatorRule();
	            this.state = 329;
	            this.comparisonExprRule();
	            this.state = 335;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparisonExprRule() {
	    let localctx = new ComparisonExprRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, MiuLanguage_sinParser.RULE_comparisonExprRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.exprRule();
	        this.state = 337;
	        this.comparisonOperatorRule();
	        this.state = 338;
	        this.exprRule();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprReturnRule() {
	    let localctx = new ExprReturnRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, MiuLanguage_sinParser.RULE_exprReturnRule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this.exprRule();
	        this.state = 346;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4034396164) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 341;
	            this.exprExtraRule();
	            this.state = 342;
	            this.exprRule();
	            this.state = 348;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprRule() {
	    let localctx = new ExprRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, MiuLanguage_sinParser.RULE_exprRule);
	    try {
	        this.state = 356;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 349;
	            this.varStatement();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 350;
	            this.functionCall();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 351;
	            this.stringRule();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 352;
	            this.charRule();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 353;
	            this.intRule();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 354;
	            this.floatRule();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 355;
	            this.boolRule();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprExtraRule() {
	    let localctx = new ExprExtraRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, MiuLanguage_sinParser.RULE_exprExtraRule);
	    try {
	        this.state = 360;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 358;
	            this.mulOperatorRule();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 359;
	            this.addOperatorRule();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mulOperatorRule() {
	    let localctx = new MulOperatorRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, MiuLanguage_sinParser.RULE_mulOperatorRule);
	    try {
	        this.state = 367;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 363;
	            this.multRule();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 364;
	            this.divRule();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 365;
	            this.subRule();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 366;
	            this.sumRule();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multRule() {
	    let localctx = new MultRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, MiuLanguage_sinParser.RULE_multRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this.match(MiuLanguage_sinParser.MULT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	divRule() {
	    let localctx = new DivRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, MiuLanguage_sinParser.RULE_divRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.match(MiuLanguage_sinParser.DIV);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sumRule() {
	    let localctx = new SumRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, MiuLanguage_sinParser.RULE_sumRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(MiuLanguage_sinParser.SUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subRule() {
	    let localctx = new SubRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, MiuLanguage_sinParser.RULE_subRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this.match(MiuLanguage_sinParser.SUB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fnRule() {
	    let localctx = new FnRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, MiuLanguage_sinParser.RULE_fnRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(MiuLanguage_sinParser.FN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idfRule() {
	    let localctx = new IdfRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, MiuLanguage_sinParser.RULE_idfRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(MiuLanguage_sinParser.IDF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	useRule() {
	    let localctx = new UseRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, MiuLanguage_sinParser.RULE_useRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 381;
	        this.match(MiuLanguage_sinParser.USE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idRule() {
	    let localctx = new IdRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, MiuLanguage_sinParser.RULE_idRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 383;
	        this.match(MiuLanguage_sinParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ppRule() {
	    let localctx = new PpRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, MiuLanguage_sinParser.RULE_ppRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 385;
	        this.match(MiuLanguage_sinParser.PP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pcRule() {
	    let localctx = new PcRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, MiuLanguage_sinParser.RULE_pcRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
	        this.match(MiuLanguage_sinParser.PC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrowRule() {
	    let localctx = new ArrowRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, MiuLanguage_sinParser.RULE_arrowRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389;
	        this.match(MiuLanguage_sinParser.ARROW);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeRule() {
	    let localctx = new TypeRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, MiuLanguage_sinParser.RULE_typeRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 391;
	        this.match(MiuLanguage_sinParser.TYPE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commaRule() {
	    let localctx = new CommaRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, MiuLanguage_sinParser.RULE_commaRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.match(MiuLanguage_sinParser.COMMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnRule() {
	    let localctx = new ReturnRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, MiuLanguage_sinParser.RULE_returnRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.match(MiuLanguage_sinParser.RETURN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letRule() {
	    let localctx = new LetRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, MiuLanguage_sinParser.RULE_letRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 397;
	        this.match(MiuLanguage_sinParser.LET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	equalRule() {
	    let localctx = new EqualRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, MiuLanguage_sinParser.RULE_equalRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 399;
	        this.match(MiuLanguage_sinParser.EQUAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifRule() {
	    let localctx = new IfRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, MiuLanguage_sinParser.RULE_ifRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this.match(MiuLanguage_sinParser.IF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseRule() {
	    let localctx = new ElseRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, MiuLanguage_sinParser.RULE_elseRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this.match(MiuLanguage_sinParser.ELSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forRule() {
	    let localctx = new ForRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, MiuLanguage_sinParser.RULE_forRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        this.match(MiuLanguage_sinParser.FOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inRule() {
	    let localctx = new InRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, MiuLanguage_sinParser.RULE_inRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
	        this.match(MiuLanguage_sinParser.IN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doubleDotRule() {
	    let localctx = new DoubleDotRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, MiuLanguage_sinParser.RULE_doubleDotRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 409;
	        this.match(MiuLanguage_sinParser.DOUBLE_DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addOperatorRule() {
	    let localctx = new AddOperatorRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, MiuLanguage_sinParser.RULE_addOperatorRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
	        this.match(MiuLanguage_sinParser.ADD_OPERATOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparisonOperatorRule() {
	    let localctx = new ComparisonOperatorRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, MiuLanguage_sinParser.RULE_comparisonOperatorRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 413;
	        this.match(MiuLanguage_sinParser.COMPARISON_OPERATOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringRule() {
	    let localctx = new StringRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, MiuLanguage_sinParser.RULE_stringRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        this.match(MiuLanguage_sinParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	charRule() {
	    let localctx = new CharRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, MiuLanguage_sinParser.RULE_charRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 417;
	        this.match(MiuLanguage_sinParser.CHAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	intRule() {
	    let localctx = new IntRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, MiuLanguage_sinParser.RULE_intRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 419;
	        this.match(MiuLanguage_sinParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	floatRule() {
	    let localctx = new FloatRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, MiuLanguage_sinParser.RULE_floatRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421;
	        this.match(MiuLanguage_sinParser.FLOAT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	boolRule() {
	    let localctx = new BoolRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, MiuLanguage_sinParser.RULE_boolRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 423;
	        this.match(MiuLanguage_sinParser.BOOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dotRule() {
	    let localctx = new DotRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, MiuLanguage_sinParser.RULE_dotRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
	        this.match(MiuLanguage_sinParser.DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lparenRule() {
	    let localctx = new LparenRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, MiuLanguage_sinParser.RULE_lparenRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 427;
	        this.match(MiuLanguage_sinParser.LPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rparenRule() {
	    let localctx = new RparenRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, MiuLanguage_sinParser.RULE_rparenRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
	        this.match(MiuLanguage_sinParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lbraceRule() {
	    let localctx = new LbraceRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, MiuLanguage_sinParser.RULE_lbraceRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
	        this.match(MiuLanguage_sinParser.LBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rbraceRule() {
	    let localctx = new RbraceRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, MiuLanguage_sinParser.RULE_rbraceRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 433;
	        this.match(MiuLanguage_sinParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pRule() {
	    let localctx = new PRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, MiuLanguage_sinParser.RULE_pRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
	        this.match(MiuLanguage_sinParser.P);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiuLanguage_sinParser.EOF = antlr4.Token.EOF;
MiuLanguage_sinParser.COMPARISON_OPERATOR = 1;
MiuLanguage_sinParser.ADD_OPERATOR = 2;
MiuLanguage_sinParser.EQUAL = 3;
MiuLanguage_sinParser.FN = 4;
MiuLanguage_sinParser.USE = 5;
MiuLanguage_sinParser.LET = 6;
MiuLanguage_sinParser.IN = 7;
MiuLanguage_sinParser.IF = 8;
MiuLanguage_sinParser.ELSE = 9;
MiuLanguage_sinParser.FOR = 10;
MiuLanguage_sinParser.RETURN = 11;
MiuLanguage_sinParser.ARROW = 12;
MiuLanguage_sinParser.DOT = 13;
MiuLanguage_sinParser.DOUBLE_DOT = 14;
MiuLanguage_sinParser.PP = 15;
MiuLanguage_sinParser.COMMA = 16;
MiuLanguage_sinParser.PC = 17;
MiuLanguage_sinParser.P = 18;
MiuLanguage_sinParser.MULT = 19;
MiuLanguage_sinParser.DIV = 20;
MiuLanguage_sinParser.SUM = 21;
MiuLanguage_sinParser.SUB = 22;
MiuLanguage_sinParser.LPAREN = 23;
MiuLanguage_sinParser.RPAREN = 24;
MiuLanguage_sinParser.LBRACE = 25;
MiuLanguage_sinParser.RBRACE = 26;
MiuLanguage_sinParser.TYPE = 27;
MiuLanguage_sinParser.BOOL = 28;
MiuLanguage_sinParser.STRING = 29;
MiuLanguage_sinParser.CHAR = 30;
MiuLanguage_sinParser.FLOAT = 31;
MiuLanguage_sinParser.INT = 32;
MiuLanguage_sinParser.IDF = 33;
MiuLanguage_sinParser.ID = 34;
MiuLanguage_sinParser.WS = 35;
MiuLanguage_sinParser.INVALID = 36;

MiuLanguage_sinParser.RULE_program = 0;
MiuLanguage_sinParser.RULE_functionDeclaration = 1;
MiuLanguage_sinParser.RULE_moduleDeclaration = 2;
MiuLanguage_sinParser.RULE_checkreturnFunctionRule = 3;
MiuLanguage_sinParser.RULE_paramList = 4;
MiuLanguage_sinParser.RULE_invalidRule = 5;
MiuLanguage_sinParser.RULE_param = 6;
MiuLanguage_sinParser.RULE_bodyRule = 7;
MiuLanguage_sinParser.RULE_bodyRRule = 8;
MiuLanguage_sinParser.RULE_statementRRule = 9;
MiuLanguage_sinParser.RULE_functionCall = 10;
MiuLanguage_sinParser.RULE_varStatement = 11;
MiuLanguage_sinParser.RULE_functionCallVar = 12;
MiuLanguage_sinParser.RULE_argList = 13;
MiuLanguage_sinParser.RULE_statement = 14;
MiuLanguage_sinParser.RULE_assignametnVar = 15;
MiuLanguage_sinParser.RULE_assignment = 16;
MiuLanguage_sinParser.RULE_controlStructure = 17;
MiuLanguage_sinParser.RULE_ifStatement = 18;
MiuLanguage_sinParser.RULE_elseStatement = 19;
MiuLanguage_sinParser.RULE_elseIfStatement = 20;
MiuLanguage_sinParser.RULE_forStatement = 21;
MiuLanguage_sinParser.RULE_comparisonExprADDRule = 22;
MiuLanguage_sinParser.RULE_comparisonExprRule = 23;
MiuLanguage_sinParser.RULE_exprReturnRule = 24;
MiuLanguage_sinParser.RULE_exprRule = 25;
MiuLanguage_sinParser.RULE_exprExtraRule = 26;
MiuLanguage_sinParser.RULE_mulOperatorRule = 27;
MiuLanguage_sinParser.RULE_multRule = 28;
MiuLanguage_sinParser.RULE_divRule = 29;
MiuLanguage_sinParser.RULE_sumRule = 30;
MiuLanguage_sinParser.RULE_subRule = 31;
MiuLanguage_sinParser.RULE_fnRule = 32;
MiuLanguage_sinParser.RULE_idfRule = 33;
MiuLanguage_sinParser.RULE_useRule = 34;
MiuLanguage_sinParser.RULE_idRule = 35;
MiuLanguage_sinParser.RULE_ppRule = 36;
MiuLanguage_sinParser.RULE_pcRule = 37;
MiuLanguage_sinParser.RULE_arrowRule = 38;
MiuLanguage_sinParser.RULE_typeRule = 39;
MiuLanguage_sinParser.RULE_commaRule = 40;
MiuLanguage_sinParser.RULE_returnRule = 41;
MiuLanguage_sinParser.RULE_letRule = 42;
MiuLanguage_sinParser.RULE_equalRule = 43;
MiuLanguage_sinParser.RULE_ifRule = 44;
MiuLanguage_sinParser.RULE_elseRule = 45;
MiuLanguage_sinParser.RULE_forRule = 46;
MiuLanguage_sinParser.RULE_inRule = 47;
MiuLanguage_sinParser.RULE_doubleDotRule = 48;
MiuLanguage_sinParser.RULE_addOperatorRule = 49;
MiuLanguage_sinParser.RULE_comparisonOperatorRule = 50;
MiuLanguage_sinParser.RULE_stringRule = 51;
MiuLanguage_sinParser.RULE_charRule = 52;
MiuLanguage_sinParser.RULE_intRule = 53;
MiuLanguage_sinParser.RULE_floatRule = 54;
MiuLanguage_sinParser.RULE_boolRule = 55;
MiuLanguage_sinParser.RULE_dotRule = 56;
MiuLanguage_sinParser.RULE_lparenRule = 57;
MiuLanguage_sinParser.RULE_rparenRule = 58;
MiuLanguage_sinParser.RULE_lbraceRule = 59;
MiuLanguage_sinParser.RULE_rbraceRule = 60;
MiuLanguage_sinParser.RULE_pRule = 61;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_program;
    }

	EOF() {
	    return this.getToken(MiuLanguage_sinParser.EOF, 0);
	};

	moduleDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ModuleDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ModuleDeclarationContext,i);
	    }
	};

	functionDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDeclarationContext,i);
	    }
	};

	INVALID() {
	    return this.getToken(MiuLanguage_sinParser.INVALID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_functionDeclaration;
    }

	fnRule() {
	    return this.getTypedRuleContext(FnRuleContext,0);
	};

	idfRule() {
	    return this.getTypedRuleContext(IdfRuleContext,0);
	};

	lparenRule() {
	    return this.getTypedRuleContext(LparenRuleContext,0);
	};

	rparenRule() {
	    return this.getTypedRuleContext(RparenRuleContext,0);
	};

	checkreturnFunctionRule() {
	    return this.getTypedRuleContext(CheckreturnFunctionRuleContext,0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ModuleDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_moduleDeclaration;
    }

	useRule() {
	    return this.getTypedRuleContext(UseRuleContext,0);
	};

	idRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdRuleContext);
	    } else {
	        return this.getTypedRuleContext(IdRuleContext,i);
	    }
	};

	pcRule() {
	    return this.getTypedRuleContext(PcRuleContext,0);
	};

	ppRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PpRuleContext);
	    } else {
	        return this.getTypedRuleContext(PpRuleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterModuleDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitModuleDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitModuleDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CheckreturnFunctionRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_checkreturnFunctionRule;
    }

	arrowRule() {
	    return this.getTypedRuleContext(ArrowRuleContext,0);
	};

	typeRule() {
	    return this.getTypedRuleContext(TypeRuleContext,0);
	};

	bodyRRule() {
	    return this.getTypedRuleContext(BodyRRuleContext,0);
	};

	bodyRule() {
	    return this.getTypedRuleContext(BodyRuleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterCheckreturnFunctionRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitCheckreturnFunctionRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitCheckreturnFunctionRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_paramList;
    }

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
	    }
	};

	commaRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommaRuleContext);
	    } else {
	        return this.getTypedRuleContext(CommaRuleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterParamList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitParamList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitParamList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InvalidRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_invalidRule;
    }

	INVALID() {
	    return this.getToken(MiuLanguage_sinParser.INVALID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterInvalidRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitInvalidRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitInvalidRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_param;
    }

	idRule() {
	    return this.getTypedRuleContext(IdRuleContext,0);
	};

	pRule() {
	    return this.getTypedRuleContext(PRuleContext,0);
	};

	typeRule() {
	    return this.getTypedRuleContext(TypeRuleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BodyRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_bodyRule;
    }

	lbraceRule() {
	    return this.getTypedRuleContext(LbraceRuleContext,0);
	};

	rbraceRule() {
	    return this.getTypedRuleContext(RbraceRuleContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterBodyRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitBodyRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitBodyRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BodyRRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_bodyRRule;
    }

	lbraceRule() {
	    return this.getTypedRuleContext(LbraceRuleContext,0);
	};

	statementRRule() {
	    return this.getTypedRuleContext(StatementRRuleContext,0);
	};

	rbraceRule() {
	    return this.getTypedRuleContext(RbraceRuleContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterBodyRRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitBodyRRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitBodyRRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementRRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_statementRRule;
    }

	returnRule() {
	    return this.getTypedRuleContext(ReturnRuleContext,0);
	};

	exprReturnRule() {
	    return this.getTypedRuleContext(ExprReturnRuleContext,0);
	};

	pcRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PcRuleContext);
	    } else {
	        return this.getTypedRuleContext(PcRuleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterStatementRRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitStatementRRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitStatementRRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_functionCall;
    }

	idfRule() {
	    return this.getTypedRuleContext(IdfRuleContext,0);
	};

	lparenRule() {
	    return this.getTypedRuleContext(LparenRuleContext,0);
	};

	rparenRule() {
	    return this.getTypedRuleContext(RparenRuleContext,0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_varStatement;
    }

	idRule() {
	    return this.getTypedRuleContext(IdRuleContext,0);
	};

	functionCallVar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionCallVarContext);
	    } else {
	        return this.getTypedRuleContext(FunctionCallVarContext,i);
	    }
	};

	assignametnVar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignametnVarContext);
	    } else {
	        return this.getTypedRuleContext(AssignametnVarContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterVarStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitVarStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitVarStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallVarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_functionCallVar;
    }

	dotRule() {
	    return this.getTypedRuleContext(DotRuleContext,0);
	};

	idfRule() {
	    return this.getTypedRuleContext(IdfRuleContext,0);
	};

	lparenRule() {
	    return this.getTypedRuleContext(LparenRuleContext,0);
	};

	rparenRule() {
	    return this.getTypedRuleContext(RparenRuleContext,0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterFunctionCallVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitFunctionCallVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitFunctionCallVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_argList;
    }

	varStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarStatementContext);
	    } else {
	        return this.getTypedRuleContext(VarStatementContext,i);
	    }
	};

	stringRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringRuleContext);
	    } else {
	        return this.getTypedRuleContext(StringRuleContext,i);
	    }
	};

	charRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharRuleContext);
	    } else {
	        return this.getTypedRuleContext(CharRuleContext,i);
	    }
	};

	intRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IntRuleContext);
	    } else {
	        return this.getTypedRuleContext(IntRuleContext,i);
	    }
	};

	floatRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FloatRuleContext);
	    } else {
	        return this.getTypedRuleContext(FloatRuleContext,i);
	    }
	};

	boolRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BoolRuleContext);
	    } else {
	        return this.getTypedRuleContext(BoolRuleContext,i);
	    }
	};

	commaRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommaRuleContext);
	    } else {
	        return this.getTypedRuleContext(CommaRuleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterArgList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitArgList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitArgList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_statement;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	pcRule() {
	    return this.getTypedRuleContext(PcRuleContext,0);
	};

	varStatement() {
	    return this.getTypedRuleContext(VarStatementContext,0);
	};

	controlStructure() {
	    return this.getTypedRuleContext(ControlStructureContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignametnVarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_assignametnVar;
    }

	equalRule() {
	    return this.getTypedRuleContext(EqualRuleContext,0);
	};

	exprRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprRuleContext);
	    } else {
	        return this.getTypedRuleContext(ExprRuleContext,i);
	    }
	};

	pcRule() {
	    return this.getTypedRuleContext(PcRuleContext,0);
	};

	exprExtraRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprExtraRuleContext);
	    } else {
	        return this.getTypedRuleContext(ExprExtraRuleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterAssignametnVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitAssignametnVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitAssignametnVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_assignment;
    }

	letRule() {
	    return this.getTypedRuleContext(LetRuleContext,0);
	};

	idRule() {
	    return this.getTypedRuleContext(IdRuleContext,0);
	};

	equalRule() {
	    return this.getTypedRuleContext(EqualRuleContext,0);
	};

	exprRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprRuleContext);
	    } else {
	        return this.getTypedRuleContext(ExprRuleContext,i);
	    }
	};

	pcRule() {
	    return this.getTypedRuleContext(PcRuleContext,0);
	};

	pRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PRuleContext);
	    } else {
	        return this.getTypedRuleContext(PRuleContext,i);
	    }
	};

	typeRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeRuleContext);
	    } else {
	        return this.getTypedRuleContext(TypeRuleContext,i);
	    }
	};

	exprExtraRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprExtraRuleContext);
	    } else {
	        return this.getTypedRuleContext(ExprExtraRuleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ControlStructureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_controlStructure;
    }

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterControlStructure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitControlStructure(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitControlStructure(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_ifStatement;
    }

	ifRule() {
	    return this.getTypedRuleContext(IfRuleContext,0);
	};

	comparisonExprADDRule() {
	    return this.getTypedRuleContext(ComparisonExprADDRuleContext,0);
	};

	bodyRule() {
	    return this.getTypedRuleContext(BodyRuleContext,0);
	};

	elseIfStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfStatementContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfStatementContext,i);
	    }
	};

	elseStatement() {
	    return this.getTypedRuleContext(ElseStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_elseStatement;
    }

	elseRule() {
	    return this.getTypedRuleContext(ElseRuleContext,0);
	};

	bodyRule() {
	    return this.getTypedRuleContext(BodyRuleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterElseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitElseStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitElseStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseIfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_elseIfStatement;
    }

	elseRule() {
	    return this.getTypedRuleContext(ElseRuleContext,0);
	};

	ifRule() {
	    return this.getTypedRuleContext(IfRuleContext,0);
	};

	comparisonExprADDRule() {
	    return this.getTypedRuleContext(ComparisonExprADDRuleContext,0);
	};

	bodyRule() {
	    return this.getTypedRuleContext(BodyRuleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterElseIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitElseIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitElseIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_forStatement;
    }

	forRule() {
	    return this.getTypedRuleContext(ForRuleContext,0);
	};

	idRule() {
	    return this.getTypedRuleContext(IdRuleContext,0);
	};

	inRule() {
	    return this.getTypedRuleContext(InRuleContext,0);
	};

	intRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IntRuleContext);
	    } else {
	        return this.getTypedRuleContext(IntRuleContext,i);
	    }
	};

	doubleDotRule() {
	    return this.getTypedRuleContext(DoubleDotRuleContext,0);
	};

	bodyRule() {
	    return this.getTypedRuleContext(BodyRuleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitForStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparisonExprADDRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_comparisonExprADDRule;
    }

	comparisonExprRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComparisonExprRuleContext);
	    } else {
	        return this.getTypedRuleContext(ComparisonExprRuleContext,i);
	    }
	};

	addOperatorRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddOperatorRuleContext);
	    } else {
	        return this.getTypedRuleContext(AddOperatorRuleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterComparisonExprADDRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitComparisonExprADDRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitComparisonExprADDRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparisonExprRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_comparisonExprRule;
    }

	exprRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprRuleContext);
	    } else {
	        return this.getTypedRuleContext(ExprRuleContext,i);
	    }
	};

	comparisonOperatorRule() {
	    return this.getTypedRuleContext(ComparisonOperatorRuleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterComparisonExprRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitComparisonExprRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitComparisonExprRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprReturnRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_exprReturnRule;
    }

	exprRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprRuleContext);
	    } else {
	        return this.getTypedRuleContext(ExprRuleContext,i);
	    }
	};

	exprExtraRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprExtraRuleContext);
	    } else {
	        return this.getTypedRuleContext(ExprExtraRuleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterExprReturnRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitExprReturnRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitExprReturnRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_exprRule;
    }

	varStatement() {
	    return this.getTypedRuleContext(VarStatementContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	stringRule() {
	    return this.getTypedRuleContext(StringRuleContext,0);
	};

	charRule() {
	    return this.getTypedRuleContext(CharRuleContext,0);
	};

	intRule() {
	    return this.getTypedRuleContext(IntRuleContext,0);
	};

	floatRule() {
	    return this.getTypedRuleContext(FloatRuleContext,0);
	};

	boolRule() {
	    return this.getTypedRuleContext(BoolRuleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterExprRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitExprRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitExprRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprExtraRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_exprExtraRule;
    }

	mulOperatorRule() {
	    return this.getTypedRuleContext(MulOperatorRuleContext,0);
	};

	addOperatorRule() {
	    return this.getTypedRuleContext(AddOperatorRuleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterExprExtraRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitExprExtraRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitExprExtraRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MulOperatorRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_mulOperatorRule;
    }

	multRule() {
	    return this.getTypedRuleContext(MultRuleContext,0);
	};

	divRule() {
	    return this.getTypedRuleContext(DivRuleContext,0);
	};

	subRule() {
	    return this.getTypedRuleContext(SubRuleContext,0);
	};

	sumRule() {
	    return this.getTypedRuleContext(SumRuleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterMulOperatorRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitMulOperatorRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitMulOperatorRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_multRule;
    }

	MULT() {
	    return this.getToken(MiuLanguage_sinParser.MULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterMultRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitMultRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitMultRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DivRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_divRule;
    }

	DIV() {
	    return this.getToken(MiuLanguage_sinParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterDivRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitDivRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitDivRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SumRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_sumRule;
    }

	SUM() {
	    return this.getToken(MiuLanguage_sinParser.SUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterSumRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitSumRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitSumRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_subRule;
    }

	SUB() {
	    return this.getToken(MiuLanguage_sinParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterSubRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitSubRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitSubRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FnRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_fnRule;
    }

	FN() {
	    return this.getToken(MiuLanguage_sinParser.FN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterFnRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitFnRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitFnRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdfRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_idfRule;
    }

	IDF() {
	    return this.getToken(MiuLanguage_sinParser.IDF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterIdfRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitIdfRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitIdfRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UseRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_useRule;
    }

	USE() {
	    return this.getToken(MiuLanguage_sinParser.USE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterUseRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitUseRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitUseRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_idRule;
    }

	ID() {
	    return this.getToken(MiuLanguage_sinParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterIdRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitIdRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitIdRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PpRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_ppRule;
    }

	PP() {
	    return this.getToken(MiuLanguage_sinParser.PP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterPpRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitPpRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitPpRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PcRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_pcRule;
    }

	PC() {
	    return this.getToken(MiuLanguage_sinParser.PC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterPcRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitPcRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitPcRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrowRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_arrowRule;
    }

	ARROW() {
	    return this.getToken(MiuLanguage_sinParser.ARROW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterArrowRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitArrowRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitArrowRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_typeRule;
    }

	TYPE() {
	    return this.getToken(MiuLanguage_sinParser.TYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterTypeRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitTypeRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitTypeRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommaRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_commaRule;
    }

	COMMA() {
	    return this.getToken(MiuLanguage_sinParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterCommaRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitCommaRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitCommaRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_returnRule;
    }

	RETURN() {
	    return this.getToken(MiuLanguage_sinParser.RETURN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterReturnRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitReturnRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitReturnRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LetRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_letRule;
    }

	LET() {
	    return this.getToken(MiuLanguage_sinParser.LET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterLetRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitLetRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitLetRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EqualRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_equalRule;
    }

	EQUAL() {
	    return this.getToken(MiuLanguage_sinParser.EQUAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterEqualRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitEqualRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitEqualRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_ifRule;
    }

	IF() {
	    return this.getToken(MiuLanguage_sinParser.IF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterIfRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitIfRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitIfRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_elseRule;
    }

	ELSE() {
	    return this.getToken(MiuLanguage_sinParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterElseRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitElseRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitElseRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_forRule;
    }

	FOR() {
	    return this.getToken(MiuLanguage_sinParser.FOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterForRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitForRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitForRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_inRule;
    }

	IN() {
	    return this.getToken(MiuLanguage_sinParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterInRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitInRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitInRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DoubleDotRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_doubleDotRule;
    }

	DOUBLE_DOT() {
	    return this.getToken(MiuLanguage_sinParser.DOUBLE_DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterDoubleDotRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitDoubleDotRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitDoubleDotRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddOperatorRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_addOperatorRule;
    }

	ADD_OPERATOR() {
	    return this.getToken(MiuLanguage_sinParser.ADD_OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterAddOperatorRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitAddOperatorRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitAddOperatorRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparisonOperatorRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_comparisonOperatorRule;
    }

	COMPARISON_OPERATOR() {
	    return this.getToken(MiuLanguage_sinParser.COMPARISON_OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterComparisonOperatorRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitComparisonOperatorRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitComparisonOperatorRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_stringRule;
    }

	STRING() {
	    return this.getToken(MiuLanguage_sinParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterStringRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitStringRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitStringRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_charRule;
    }

	CHAR() {
	    return this.getToken(MiuLanguage_sinParser.CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterCharRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitCharRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitCharRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IntRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_intRule;
    }

	INT() {
	    return this.getToken(MiuLanguage_sinParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterIntRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitIntRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitIntRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FloatRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_floatRule;
    }

	FLOAT() {
	    return this.getToken(MiuLanguage_sinParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterFloatRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitFloatRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitFloatRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BoolRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_boolRule;
    }

	BOOL() {
	    return this.getToken(MiuLanguage_sinParser.BOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterBoolRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitBoolRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitBoolRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DotRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_dotRule;
    }

	DOT() {
	    return this.getToken(MiuLanguage_sinParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterDotRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitDotRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitDotRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LparenRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_lparenRule;
    }

	LPAREN() {
	    return this.getToken(MiuLanguage_sinParser.LPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterLparenRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitLparenRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitLparenRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RparenRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_rparenRule;
    }

	RPAREN() {
	    return this.getToken(MiuLanguage_sinParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterRparenRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitRparenRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitRparenRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LbraceRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_lbraceRule;
    }

	LBRACE() {
	    return this.getToken(MiuLanguage_sinParser.LBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterLbraceRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitLbraceRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitLbraceRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RbraceRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_rbraceRule;
    }

	RBRACE() {
	    return this.getToken(MiuLanguage_sinParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterRbraceRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitRbraceRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitRbraceRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_pRule;
    }

	P() {
	    return this.getToken(MiuLanguage_sinParser.P, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterPRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitPRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitPRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiuLanguage_sinParser.ProgramContext = ProgramContext; 
MiuLanguage_sinParser.FunctionDeclarationContext = FunctionDeclarationContext; 
MiuLanguage_sinParser.ModuleDeclarationContext = ModuleDeclarationContext; 
MiuLanguage_sinParser.CheckreturnFunctionRuleContext = CheckreturnFunctionRuleContext; 
MiuLanguage_sinParser.ParamListContext = ParamListContext; 
MiuLanguage_sinParser.InvalidRuleContext = InvalidRuleContext; 
MiuLanguage_sinParser.ParamContext = ParamContext; 
MiuLanguage_sinParser.BodyRuleContext = BodyRuleContext; 
MiuLanguage_sinParser.BodyRRuleContext = BodyRRuleContext; 
MiuLanguage_sinParser.StatementRRuleContext = StatementRRuleContext; 
MiuLanguage_sinParser.FunctionCallContext = FunctionCallContext; 
MiuLanguage_sinParser.VarStatementContext = VarStatementContext; 
MiuLanguage_sinParser.FunctionCallVarContext = FunctionCallVarContext; 
MiuLanguage_sinParser.ArgListContext = ArgListContext; 
MiuLanguage_sinParser.StatementContext = StatementContext; 
MiuLanguage_sinParser.AssignametnVarContext = AssignametnVarContext; 
MiuLanguage_sinParser.AssignmentContext = AssignmentContext; 
MiuLanguage_sinParser.ControlStructureContext = ControlStructureContext; 
MiuLanguage_sinParser.IfStatementContext = IfStatementContext; 
MiuLanguage_sinParser.ElseStatementContext = ElseStatementContext; 
MiuLanguage_sinParser.ElseIfStatementContext = ElseIfStatementContext; 
MiuLanguage_sinParser.ForStatementContext = ForStatementContext; 
MiuLanguage_sinParser.ComparisonExprADDRuleContext = ComparisonExprADDRuleContext; 
MiuLanguage_sinParser.ComparisonExprRuleContext = ComparisonExprRuleContext; 
MiuLanguage_sinParser.ExprReturnRuleContext = ExprReturnRuleContext; 
MiuLanguage_sinParser.ExprRuleContext = ExprRuleContext; 
MiuLanguage_sinParser.ExprExtraRuleContext = ExprExtraRuleContext; 
MiuLanguage_sinParser.MulOperatorRuleContext = MulOperatorRuleContext; 
MiuLanguage_sinParser.MultRuleContext = MultRuleContext; 
MiuLanguage_sinParser.DivRuleContext = DivRuleContext; 
MiuLanguage_sinParser.SumRuleContext = SumRuleContext; 
MiuLanguage_sinParser.SubRuleContext = SubRuleContext; 
MiuLanguage_sinParser.FnRuleContext = FnRuleContext; 
MiuLanguage_sinParser.IdfRuleContext = IdfRuleContext; 
MiuLanguage_sinParser.UseRuleContext = UseRuleContext; 
MiuLanguage_sinParser.IdRuleContext = IdRuleContext; 
MiuLanguage_sinParser.PpRuleContext = PpRuleContext; 
MiuLanguage_sinParser.PcRuleContext = PcRuleContext; 
MiuLanguage_sinParser.ArrowRuleContext = ArrowRuleContext; 
MiuLanguage_sinParser.TypeRuleContext = TypeRuleContext; 
MiuLanguage_sinParser.CommaRuleContext = CommaRuleContext; 
MiuLanguage_sinParser.ReturnRuleContext = ReturnRuleContext; 
MiuLanguage_sinParser.LetRuleContext = LetRuleContext; 
MiuLanguage_sinParser.EqualRuleContext = EqualRuleContext; 
MiuLanguage_sinParser.IfRuleContext = IfRuleContext; 
MiuLanguage_sinParser.ElseRuleContext = ElseRuleContext; 
MiuLanguage_sinParser.ForRuleContext = ForRuleContext; 
MiuLanguage_sinParser.InRuleContext = InRuleContext; 
MiuLanguage_sinParser.DoubleDotRuleContext = DoubleDotRuleContext; 
MiuLanguage_sinParser.AddOperatorRuleContext = AddOperatorRuleContext; 
MiuLanguage_sinParser.ComparisonOperatorRuleContext = ComparisonOperatorRuleContext; 
MiuLanguage_sinParser.StringRuleContext = StringRuleContext; 
MiuLanguage_sinParser.CharRuleContext = CharRuleContext; 
MiuLanguage_sinParser.IntRuleContext = IntRuleContext; 
MiuLanguage_sinParser.FloatRuleContext = FloatRuleContext; 
MiuLanguage_sinParser.BoolRuleContext = BoolRuleContext; 
MiuLanguage_sinParser.DotRuleContext = DotRuleContext; 
MiuLanguage_sinParser.LparenRuleContext = LparenRuleContext; 
MiuLanguage_sinParser.RparenRuleContext = RparenRuleContext; 
MiuLanguage_sinParser.LbraceRuleContext = LbraceRuleContext; 
MiuLanguage_sinParser.RbraceRuleContext = RbraceRuleContext; 
MiuLanguage_sinParser.PRuleContext = PRuleContext; 

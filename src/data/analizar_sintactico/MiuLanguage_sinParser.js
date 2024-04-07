// Generated from ./MiuLanguage_sin.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiuLanguage_sinListener from './MiuLanguage_sinListener.js';
import MiuLanguage_sinVisitor from './MiuLanguage_sinVisitor.js';

const serializedATN = [4,1,36,448,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,1,0,1,0,5,0,135,8,0,10,0,12,0,138,9,0,1,0,3,0,141,
8,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,149,8,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,
5,2,159,8,2,10,2,12,2,162,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,171,8,3,1,
4,1,4,1,4,1,4,5,4,177,8,4,10,4,12,4,180,9,4,1,5,1,5,1,6,1,6,1,6,1,6,1,7,
1,7,5,7,190,8,7,10,7,12,7,193,9,7,1,7,1,7,1,8,1,8,5,8,199,8,8,10,8,12,8,
202,9,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,3,10,214,8,10,1,10,1,
10,1,10,1,11,1,11,1,11,5,11,222,8,11,10,11,12,11,225,9,11,1,12,1,12,1,12,
1,12,3,12,231,8,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,242,
8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,251,8,13,5,13,253,8,13,10,13,
12,13,256,9,13,1,14,1,14,1,14,1,14,3,14,262,8,14,1,15,1,15,1,15,1,15,1,15,
1,15,1,16,1,16,1,16,1,16,1,17,1,17,3,17,276,8,17,1,18,1,18,1,18,1,18,5,18,
282,8,18,10,18,12,18,285,9,18,1,18,3,18,288,8,18,1,19,1,19,1,19,1,20,1,20,
1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,
22,5,22,310,8,22,10,22,12,22,313,9,22,1,23,1,23,1,23,1,23,1,24,1,24,3,24,
321,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,331,8,25,1,26,1,26,
1,26,3,26,336,8,26,1,26,1,26,1,27,1,27,5,27,342,8,27,10,27,12,27,345,9,27,
1,28,1,28,1,28,1,28,3,28,351,8,28,1,28,1,28,1,29,1,29,1,29,1,29,5,29,359,
8,29,10,29,12,29,362,9,29,1,30,1,30,1,30,1,30,5,30,368,8,30,10,30,12,30,
371,9,30,1,31,1,31,1,31,1,31,1,31,3,31,378,8,31,1,32,1,32,1,33,1,33,1,34,
1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,
41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,46,1,47,1,47,1,48,1,48,
1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,1,53,1,54,1,54,1,55,1,55,1,
56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,60,1,60,1,61,1,61,1,62,1,62,1,63,
1,63,1,64,1,64,1,65,1,65,1,65,0,0,66,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,
118,120,122,124,126,128,130,0,0,429,0,136,1,0,0,0,2,144,1,0,0,0,4,153,1,
0,0,0,6,170,1,0,0,0,8,172,1,0,0,0,10,181,1,0,0,0,12,183,1,0,0,0,14,187,1,
0,0,0,16,196,1,0,0,0,18,206,1,0,0,0,20,210,1,0,0,0,22,218,1,0,0,0,24,226,
1,0,0,0,26,241,1,0,0,0,28,261,1,0,0,0,30,263,1,0,0,0,32,269,1,0,0,0,34,275,
1,0,0,0,36,277,1,0,0,0,38,289,1,0,0,0,40,292,1,0,0,0,42,297,1,0,0,0,44,305,
1,0,0,0,46,314,1,0,0,0,48,320,1,0,0,0,50,330,1,0,0,0,52,332,1,0,0,0,54,339,
1,0,0,0,56,346,1,0,0,0,58,354,1,0,0,0,60,363,1,0,0,0,62,377,1,0,0,0,64,379,
1,0,0,0,66,381,1,0,0,0,68,383,1,0,0,0,70,385,1,0,0,0,72,387,1,0,0,0,74,389,
1,0,0,0,76,391,1,0,0,0,78,393,1,0,0,0,80,395,1,0,0,0,82,397,1,0,0,0,84,399,
1,0,0,0,86,401,1,0,0,0,88,403,1,0,0,0,90,405,1,0,0,0,92,407,1,0,0,0,94,409,
1,0,0,0,96,411,1,0,0,0,98,413,1,0,0,0,100,415,1,0,0,0,102,417,1,0,0,0,104,
419,1,0,0,0,106,421,1,0,0,0,108,423,1,0,0,0,110,425,1,0,0,0,112,427,1,0,
0,0,114,429,1,0,0,0,116,431,1,0,0,0,118,433,1,0,0,0,120,435,1,0,0,0,122,
437,1,0,0,0,124,439,1,0,0,0,126,441,1,0,0,0,128,443,1,0,0,0,130,445,1,0,
0,0,132,135,3,4,2,0,133,135,3,2,1,0,134,132,1,0,0,0,134,133,1,0,0,0,135,
138,1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,140,1,0,0,0,138,136,1,0,
0,0,139,141,5,36,0,0,140,139,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,
143,5,0,0,1,143,1,1,0,0,0,144,145,3,72,36,0,145,146,3,74,37,0,146,148,3,
122,61,0,147,149,3,8,4,0,148,147,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,
150,151,3,124,62,0,151,152,3,6,3,0,152,3,1,0,0,0,153,154,3,76,38,0,154,160,
3,78,39,0,155,156,3,80,40,0,156,157,3,78,39,0,157,159,1,0,0,0,158,155,1,
0,0,0,159,162,1,0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,163,1,0,0,0,162,
160,1,0,0,0,163,164,3,82,41,0,164,5,1,0,0,0,165,166,3,84,42,0,166,167,3,
86,43,0,167,168,3,16,8,0,168,171,1,0,0,0,169,171,3,14,7,0,170,165,1,0,0,
0,170,169,1,0,0,0,171,7,1,0,0,0,172,178,3,12,6,0,173,174,3,88,44,0,174,175,
3,12,6,0,175,177,1,0,0,0,176,173,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,
178,179,1,0,0,0,179,9,1,0,0,0,180,178,1,0,0,0,181,182,5,36,0,0,182,11,1,
0,0,0,183,184,3,78,39,0,184,185,3,130,65,0,185,186,3,86,43,0,186,13,1,0,
0,0,187,191,3,126,63,0,188,190,3,28,14,0,189,188,1,0,0,0,190,193,1,0,0,0,
191,189,1,0,0,0,191,192,1,0,0,0,192,194,1,0,0,0,193,191,1,0,0,0,194,195,
3,128,64,0,195,15,1,0,0,0,196,200,3,126,63,0,197,199,3,28,14,0,198,197,1,
0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,203,1,0,0,0,202,
200,1,0,0,0,203,204,3,18,9,0,204,205,3,128,64,0,205,17,1,0,0,0,206,207,3,
90,45,0,207,208,3,48,24,0,208,209,3,82,41,0,209,19,1,0,0,0,210,211,3,74,
37,0,211,213,3,122,61,0,212,214,3,26,13,0,213,212,1,0,0,0,213,214,1,0,0,
0,214,215,1,0,0,0,215,216,3,124,62,0,216,217,3,82,41,0,217,21,1,0,0,0,218,
223,3,78,39,0,219,222,3,24,12,0,220,222,3,32,16,0,221,219,1,0,0,0,221,220,
1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,23,1,0,0,0,225,
223,1,0,0,0,226,227,3,120,60,0,227,228,3,74,37,0,228,230,3,122,61,0,229,
231,3,26,13,0,230,229,1,0,0,0,230,231,1,0,0,0,231,232,1,0,0,0,232,233,3,
124,62,0,233,234,3,82,41,0,234,25,1,0,0,0,235,242,3,22,11,0,236,242,3,110,
55,0,237,242,3,112,56,0,238,242,3,114,57,0,239,242,3,116,58,0,240,242,3,
118,59,0,241,235,1,0,0,0,241,236,1,0,0,0,241,237,1,0,0,0,241,238,1,0,0,0,
241,239,1,0,0,0,241,240,1,0,0,0,242,254,1,0,0,0,243,250,3,88,44,0,244,251,
3,22,11,0,245,251,3,110,55,0,246,251,3,112,56,0,247,251,3,114,57,0,248,251,
3,116,58,0,249,251,3,118,59,0,250,244,1,0,0,0,250,245,1,0,0,0,250,246,1,
0,0,0,250,247,1,0,0,0,250,248,1,0,0,0,250,249,1,0,0,0,251,253,1,0,0,0,252,
243,1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,27,1,0,0,
0,256,254,1,0,0,0,257,262,3,30,15,0,258,262,3,20,10,0,259,262,3,22,11,0,
260,262,3,34,17,0,261,257,1,0,0,0,261,258,1,0,0,0,261,259,1,0,0,0,261,260,
1,0,0,0,262,29,1,0,0,0,263,264,3,92,46,0,264,265,3,78,39,0,265,266,3,130,
65,0,266,267,3,86,43,0,267,268,3,32,16,0,268,31,1,0,0,0,269,270,3,94,47,
0,270,271,3,50,25,0,271,272,3,82,41,0,272,33,1,0,0,0,273,276,3,36,18,0,274,
276,3,42,21,0,275,273,1,0,0,0,275,274,1,0,0,0,276,35,1,0,0,0,277,278,3,96,
48,0,278,279,3,44,22,0,279,283,3,14,7,0,280,282,3,40,20,0,281,280,1,0,0,
0,282,285,1,0,0,0,283,281,1,0,0,0,283,284,1,0,0,0,284,287,1,0,0,0,285,283,
1,0,0,0,286,288,3,38,19,0,287,286,1,0,0,0,287,288,1,0,0,0,288,37,1,0,0,0,
289,290,3,98,49,0,290,291,3,14,7,0,291,39,1,0,0,0,292,293,3,98,49,0,293,
294,3,96,48,0,294,295,3,44,22,0,295,296,3,14,7,0,296,41,1,0,0,0,297,298,
3,100,50,0,298,299,3,78,39,0,299,300,3,102,51,0,300,301,3,114,57,0,301,302,
3,104,52,0,302,303,3,114,57,0,303,304,3,14,7,0,304,43,1,0,0,0,305,311,3,
46,23,0,306,307,3,106,53,0,307,308,3,46,23,0,308,310,1,0,0,0,309,306,1,0,
0,0,310,313,1,0,0,0,311,309,1,0,0,0,311,312,1,0,0,0,312,45,1,0,0,0,313,311,
1,0,0,0,314,315,3,50,25,0,315,316,3,108,54,0,316,317,3,50,25,0,317,47,1,
0,0,0,318,321,3,50,25,0,319,321,3,44,22,0,320,318,1,0,0,0,320,319,1,0,0,
0,321,49,1,0,0,0,322,331,3,52,26,0,323,331,3,54,27,0,324,331,3,58,29,0,325,
331,3,110,55,0,326,331,3,112,56,0,327,331,3,114,57,0,328,331,3,116,58,0,
329,331,3,118,59,0,330,322,1,0,0,0,330,323,1,0,0,0,330,324,1,0,0,0,330,325,
1,0,0,0,330,326,1,0,0,0,330,327,1,0,0,0,330,328,1,0,0,0,330,329,1,0,0,0,
331,51,1,0,0,0,332,333,3,74,37,0,333,335,3,122,61,0,334,336,3,26,13,0,335,
334,1,0,0,0,335,336,1,0,0,0,336,337,1,0,0,0,337,338,3,124,62,0,338,53,1,
0,0,0,339,343,3,78,39,0,340,342,3,56,28,0,341,340,1,0,0,0,342,345,1,0,0,
0,343,341,1,0,0,0,343,344,1,0,0,0,344,55,1,0,0,0,345,343,1,0,0,0,346,347,
3,120,60,0,347,348,3,74,37,0,348,350,3,122,61,0,349,351,3,26,13,0,350,349,
1,0,0,0,350,351,1,0,0,0,351,352,1,0,0,0,352,353,3,124,62,0,353,57,1,0,0,
0,354,360,3,60,30,0,355,356,3,106,53,0,356,357,3,60,30,0,357,359,1,0,0,0,
358,355,1,0,0,0,359,362,1,0,0,0,360,358,1,0,0,0,360,361,1,0,0,0,361,59,1,
0,0,0,362,360,1,0,0,0,363,369,3,54,27,0,364,365,3,62,31,0,365,366,3,54,27,
0,366,368,1,0,0,0,367,364,1,0,0,0,368,371,1,0,0,0,369,367,1,0,0,0,369,370,
1,0,0,0,370,61,1,0,0,0,371,369,1,0,0,0,372,378,1,0,0,0,373,378,3,64,32,0,
374,378,3,66,33,0,375,378,3,70,35,0,376,378,3,68,34,0,377,372,1,0,0,0,377,
373,1,0,0,0,377,374,1,0,0,0,377,375,1,0,0,0,377,376,1,0,0,0,378,63,1,0,0,
0,379,380,5,19,0,0,380,65,1,0,0,0,381,382,5,20,0,0,382,67,1,0,0,0,383,384,
5,21,0,0,384,69,1,0,0,0,385,386,5,22,0,0,386,71,1,0,0,0,387,388,5,4,0,0,
388,73,1,0,0,0,389,390,5,33,0,0,390,75,1,0,0,0,391,392,5,5,0,0,392,77,1,
0,0,0,393,394,5,34,0,0,394,79,1,0,0,0,395,396,5,15,0,0,396,81,1,0,0,0,397,
398,5,17,0,0,398,83,1,0,0,0,399,400,5,12,0,0,400,85,1,0,0,0,401,402,5,27,
0,0,402,87,1,0,0,0,403,404,5,16,0,0,404,89,1,0,0,0,405,406,5,11,0,0,406,
91,1,0,0,0,407,408,5,6,0,0,408,93,1,0,0,0,409,410,5,3,0,0,410,95,1,0,0,0,
411,412,5,8,0,0,412,97,1,0,0,0,413,414,5,9,0,0,414,99,1,0,0,0,415,416,5,
10,0,0,416,101,1,0,0,0,417,418,5,7,0,0,418,103,1,0,0,0,419,420,5,14,0,0,
420,105,1,0,0,0,421,422,5,2,0,0,422,107,1,0,0,0,423,424,5,1,0,0,424,109,
1,0,0,0,425,426,5,29,0,0,426,111,1,0,0,0,427,428,5,30,0,0,428,113,1,0,0,
0,429,430,5,32,0,0,430,115,1,0,0,0,431,432,5,31,0,0,432,117,1,0,0,0,433,
434,5,28,0,0,434,119,1,0,0,0,435,436,5,13,0,0,436,121,1,0,0,0,437,438,5,
23,0,0,438,123,1,0,0,0,439,440,5,24,0,0,440,125,1,0,0,0,441,442,5,25,0,0,
442,127,1,0,0,0,443,444,5,26,0,0,444,129,1,0,0,0,445,446,5,18,0,0,446,131,
1,0,0,0,29,134,136,140,148,160,170,178,191,200,213,221,223,230,241,250,254,
261,275,283,287,311,320,330,335,343,350,360,369,377];


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
                         "argList", "statement", "assignment", "assignametnVar", 
                         "controlStructure", "ifStatement", "elseStatement", 
                         "elseIfStatement", "forStatement", "comparisonExprADDRule", 
                         "comparisonExprRule", "exprReturnRule", "exprRule", 
                         "exprFunctionCallRule", "exprVarStatementRule", 
                         "exprFunctionCallVar", "arithmeticExprRule", "term", 
                         "mulOperatorRule", "multRule", "divRule", "sumRule", 
                         "subRule", "fnRule", "idfRule", "useRule", "idRule", 
                         "ppRule", "pcRule", "arrowRule", "typeRule", "commaRule", 
                         "returnRule", "letRule", "equalRule", "ifRule", 
                         "elseRule", "forRule", "inRule", "doubleDotRule", 
                         "addOperatorRule", "comparisonOperatorRule", "stringRule", 
                         "charRule", "intRule", "floatRule", "boolRule", 
                         "dotRule", "lparenRule", "rparenRule", "lbraceRule", 
                         "rbraceRule", "pRule" ];

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
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===5) {
	            this.state = 134;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 5:
	                this.state = 132;
	                this.moduleDeclaration();
	                break;
	            case 4:
	                this.state = 133;
	                this.functionDeclaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 139;
	            this.match(MiuLanguage_sinParser.INVALID);
	        }

	        this.state = 142;
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
	        this.state = 144;
	        this.fnRule();
	        this.state = 145;
	        this.idfRule();
	        this.state = 146;
	        this.lparenRule();
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 147;
	            this.paramList();
	        }

	        this.state = 150;
	        this.rparenRule();
	        this.state = 151;
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
	        this.state = 153;
	        this.useRule();
	        this.state = 154;
	        this.idRule();
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 155;
	            this.ppRule();
	            this.state = 156;
	            this.idRule();
	            this.state = 162;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 163;
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
	        this.state = 170;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 165;
	            this.arrowRule();
	            this.state = 166;
	            this.typeRule();
	            this.state = 167;
	            this.bodyRRule();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 169;
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
	        this.state = 172;
	        this.param();
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 173;
	            this.commaRule();
	            this.state = 174;
	            this.param();
	            this.state = 180;
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
	        this.state = 181;
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
	        this.state = 183;
	        this.idRule();
	        this.state = 184;
	        this.pRule();
	        this.state = 185;
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
	        this.state = 187;
	        this.lbraceRule();
	        this.state = 191;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 402653205) !== 0)) {
	            this.state = 188;
	            this.statement();
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 194;
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
	        this.state = 196;
	        this.lbraceRule();
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 402653205) !== 0)) {
	            this.state = 197;
	            this.statement();
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 203;
	        this.statementRRule();
	        this.state = 204;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.returnRule();
	        this.state = 207;
	        this.exprReturnRule();
	        this.state = 208;
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



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MiuLanguage_sinParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.idfRule();
	        this.state = 211;
	        this.lparenRule();
	        this.state = 213;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 95) !== 0)) {
	            this.state = 212;
	            this.argList();
	        }

	        this.state = 215;
	        this.rparenRule();
	        this.state = 216;
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



	varStatement() {
	    let localctx = new VarStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MiuLanguage_sinParser.RULE_varStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.idRule();
	        this.state = 223;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===13) {
	            this.state = 221;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 13:
	                this.state = 219;
	                this.functionCallVar();
	                break;
	            case 3:
	                this.state = 220;
	                this.assignametnVar();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 225;
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
	        this.state = 226;
	        this.dotRule();
	        this.state = 227;
	        this.idfRule();
	        this.state = 228;
	        this.lparenRule();
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 95) !== 0)) {
	            this.state = 229;
	            this.argList();
	        }

	        this.state = 232;
	        this.rparenRule();
	        this.state = 233;
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



	argList() {
	    let localctx = new ArgListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MiuLanguage_sinParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            this.state = 235;
	            this.varStatement();
	            break;
	        case 29:
	            this.state = 236;
	            this.stringRule();
	            break;
	        case 30:
	            this.state = 237;
	            this.charRule();
	            break;
	        case 32:
	            this.state = 238;
	            this.intRule();
	            break;
	        case 31:
	            this.state = 239;
	            this.floatRule();
	            break;
	        case 28:
	            this.state = 240;
	            this.boolRule();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 243;
	            this.commaRule();
	            this.state = 250;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 34:
	                this.state = 244;
	                this.varStatement();
	                break;
	            case 29:
	                this.state = 245;
	                this.stringRule();
	                break;
	            case 30:
	                this.state = 246;
	                this.charRule();
	                break;
	            case 32:
	                this.state = 247;
	                this.intRule();
	                break;
	            case 31:
	                this.state = 248;
	                this.floatRule();
	                break;
	            case 28:
	                this.state = 249;
	                this.boolRule();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 256;
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
	        this.state = 261;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 257;
	            this.assignment();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 258;
	            this.functionCall();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 259;
	            this.varStatement();
	            break;
	        case 8:
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 260;
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MiuLanguage_sinParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.letRule();
	        this.state = 264;
	        this.idRule();
	        this.state = 265;
	        this.pRule();
	        this.state = 266;
	        this.typeRule();
	        this.state = 267;
	        this.assignametnVar();
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
	    this.enterRule(localctx, 32, MiuLanguage_sinParser.RULE_assignametnVar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this.equalRule();
	        this.state = 270;
	        this.exprRule();
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



	controlStructure() {
	    let localctx = new ControlStructureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, MiuLanguage_sinParser.RULE_controlStructure);
	    try {
	        this.state = 275;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 273;
	            this.ifStatement();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 274;
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
	        this.state = 277;
	        this.ifRule();
	        this.state = 278;
	        this.comparisonExprADDRule();
	        this.state = 279;
	        this.bodyRule();
	        this.state = 283;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 280;
	                this.elseIfStatement(); 
	            }
	            this.state = 285;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	        this.state = 287;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 286;
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
	        this.state = 289;
	        this.elseRule();
	        this.state = 290;
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
	        this.state = 292;
	        this.elseRule();
	        this.state = 293;
	        this.ifRule();
	        this.state = 294;
	        this.comparisonExprADDRule();
	        this.state = 295;
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
	        this.state = 297;
	        this.forRule();
	        this.state = 298;
	        this.idRule();
	        this.state = 299;
	        this.inRule();
	        this.state = 300;
	        this.intRule();
	        this.state = 301;
	        this.doubleDotRule();
	        this.state = 302;
	        this.intRule();
	        this.state = 303;
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
	        this.state = 305;
	        this.comparisonExprRule();
	        this.state = 311;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 306;
	            this.addOperatorRule();
	            this.state = 307;
	            this.comparisonExprRule();
	            this.state = 313;
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
	        this.state = 314;
	        this.exprRule();
	        this.state = 315;
	        this.comparisonOperatorRule();
	        this.state = 316;
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
	    try {
	        this.state = 320;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 318;
	            this.exprRule();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 319;
	            this.comparisonExprADDRule();
	            break;

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
	        this.state = 330;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 322;
	            this.exprFunctionCallRule();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 323;
	            this.exprVarStatementRule();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 324;
	            this.arithmeticExprRule();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 325;
	            this.stringRule();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 326;
	            this.charRule();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 327;
	            this.intRule();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 328;
	            this.floatRule();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 329;
	            this.boolRule();
	            break;

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



	exprFunctionCallRule() {
	    let localctx = new ExprFunctionCallRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, MiuLanguage_sinParser.RULE_exprFunctionCallRule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
	        this.idfRule();
	        this.state = 333;
	        this.lparenRule();
	        this.state = 335;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 95) !== 0)) {
	            this.state = 334;
	            this.argList();
	        }

	        this.state = 337;
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



	exprVarStatementRule() {
	    let localctx = new ExprVarStatementRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, MiuLanguage_sinParser.RULE_exprVarStatementRule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 339;
	        this.idRule();
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 340;
	            this.exprFunctionCallVar();
	            this.state = 345;
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



	exprFunctionCallVar() {
	    let localctx = new ExprFunctionCallVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, MiuLanguage_sinParser.RULE_exprFunctionCallVar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        this.dotRule();
	        this.state = 347;
	        this.idfRule();
	        this.state = 348;
	        this.lparenRule();
	        this.state = 350;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 95) !== 0)) {
	            this.state = 349;
	            this.argList();
	        }

	        this.state = 352;
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



	arithmeticExprRule() {
	    let localctx = new ArithmeticExprRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, MiuLanguage_sinParser.RULE_arithmeticExprRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        this.term();
	        this.state = 360;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 355;
	                this.addOperatorRule();
	                this.state = 356;
	                this.term(); 
	            }
	            this.state = 362;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, MiuLanguage_sinParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 363;
	        this.exprVarStatementRule();
	        this.state = 369;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 32783) !== 0)) {
	            this.state = 364;
	            this.mulOperatorRule();
	            this.state = 365;
	            this.exprVarStatementRule();
	            this.state = 371;
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



	mulOperatorRule() {
	    let localctx = new MulOperatorRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, MiuLanguage_sinParser.RULE_mulOperatorRule);
	    try {
	        this.state = 377;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 373;
	            this.multRule();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 374;
	            this.divRule();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 375;
	            this.subRule();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 376;
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
	    this.enterRule(localctx, 64, MiuLanguage_sinParser.RULE_multRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
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
	    this.enterRule(localctx, 66, MiuLanguage_sinParser.RULE_divRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 381;
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
	    this.enterRule(localctx, 68, MiuLanguage_sinParser.RULE_sumRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 383;
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
	    this.enterRule(localctx, 70, MiuLanguage_sinParser.RULE_subRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 385;
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
	    this.enterRule(localctx, 72, MiuLanguage_sinParser.RULE_fnRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
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
	    this.enterRule(localctx, 74, MiuLanguage_sinParser.RULE_idfRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389;
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
	    this.enterRule(localctx, 76, MiuLanguage_sinParser.RULE_useRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 391;
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
	    this.enterRule(localctx, 78, MiuLanguage_sinParser.RULE_idRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
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
	    this.enterRule(localctx, 80, MiuLanguage_sinParser.RULE_ppRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
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
	    this.enterRule(localctx, 82, MiuLanguage_sinParser.RULE_pcRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 397;
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
	    this.enterRule(localctx, 84, MiuLanguage_sinParser.RULE_arrowRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 399;
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
	    this.enterRule(localctx, 86, MiuLanguage_sinParser.RULE_typeRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
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
	    this.enterRule(localctx, 88, MiuLanguage_sinParser.RULE_commaRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
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
	    this.enterRule(localctx, 90, MiuLanguage_sinParser.RULE_returnRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
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
	    this.enterRule(localctx, 92, MiuLanguage_sinParser.RULE_letRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
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
	    this.enterRule(localctx, 94, MiuLanguage_sinParser.RULE_equalRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 409;
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
	    this.enterRule(localctx, 96, MiuLanguage_sinParser.RULE_ifRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
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
	    this.enterRule(localctx, 98, MiuLanguage_sinParser.RULE_elseRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 413;
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
	    this.enterRule(localctx, 100, MiuLanguage_sinParser.RULE_forRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
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
	    this.enterRule(localctx, 102, MiuLanguage_sinParser.RULE_inRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 417;
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
	    this.enterRule(localctx, 104, MiuLanguage_sinParser.RULE_doubleDotRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 419;
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
	    this.enterRule(localctx, 106, MiuLanguage_sinParser.RULE_addOperatorRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421;
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
	    this.enterRule(localctx, 108, MiuLanguage_sinParser.RULE_comparisonOperatorRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 423;
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
	    this.enterRule(localctx, 110, MiuLanguage_sinParser.RULE_stringRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
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
	    this.enterRule(localctx, 112, MiuLanguage_sinParser.RULE_charRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 427;
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
	    this.enterRule(localctx, 114, MiuLanguage_sinParser.RULE_intRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
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
	    this.enterRule(localctx, 116, MiuLanguage_sinParser.RULE_floatRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
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
	    this.enterRule(localctx, 118, MiuLanguage_sinParser.RULE_boolRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 433;
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
	    this.enterRule(localctx, 120, MiuLanguage_sinParser.RULE_dotRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
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
	    this.enterRule(localctx, 122, MiuLanguage_sinParser.RULE_lparenRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 437;
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
	    this.enterRule(localctx, 124, MiuLanguage_sinParser.RULE_rparenRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 439;
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
	    this.enterRule(localctx, 126, MiuLanguage_sinParser.RULE_lbraceRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 441;
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
	    this.enterRule(localctx, 128, MiuLanguage_sinParser.RULE_rbraceRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 443;
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
	    this.enterRule(localctx, 130, MiuLanguage_sinParser.RULE_pRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 445;
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
MiuLanguage_sinParser.RULE_assignment = 15;
MiuLanguage_sinParser.RULE_assignametnVar = 16;
MiuLanguage_sinParser.RULE_controlStructure = 17;
MiuLanguage_sinParser.RULE_ifStatement = 18;
MiuLanguage_sinParser.RULE_elseStatement = 19;
MiuLanguage_sinParser.RULE_elseIfStatement = 20;
MiuLanguage_sinParser.RULE_forStatement = 21;
MiuLanguage_sinParser.RULE_comparisonExprADDRule = 22;
MiuLanguage_sinParser.RULE_comparisonExprRule = 23;
MiuLanguage_sinParser.RULE_exprReturnRule = 24;
MiuLanguage_sinParser.RULE_exprRule = 25;
MiuLanguage_sinParser.RULE_exprFunctionCallRule = 26;
MiuLanguage_sinParser.RULE_exprVarStatementRule = 27;
MiuLanguage_sinParser.RULE_exprFunctionCallVar = 28;
MiuLanguage_sinParser.RULE_arithmeticExprRule = 29;
MiuLanguage_sinParser.RULE_term = 30;
MiuLanguage_sinParser.RULE_mulOperatorRule = 31;
MiuLanguage_sinParser.RULE_multRule = 32;
MiuLanguage_sinParser.RULE_divRule = 33;
MiuLanguage_sinParser.RULE_sumRule = 34;
MiuLanguage_sinParser.RULE_subRule = 35;
MiuLanguage_sinParser.RULE_fnRule = 36;
MiuLanguage_sinParser.RULE_idfRule = 37;
MiuLanguage_sinParser.RULE_useRule = 38;
MiuLanguage_sinParser.RULE_idRule = 39;
MiuLanguage_sinParser.RULE_ppRule = 40;
MiuLanguage_sinParser.RULE_pcRule = 41;
MiuLanguage_sinParser.RULE_arrowRule = 42;
MiuLanguage_sinParser.RULE_typeRule = 43;
MiuLanguage_sinParser.RULE_commaRule = 44;
MiuLanguage_sinParser.RULE_returnRule = 45;
MiuLanguage_sinParser.RULE_letRule = 46;
MiuLanguage_sinParser.RULE_equalRule = 47;
MiuLanguage_sinParser.RULE_ifRule = 48;
MiuLanguage_sinParser.RULE_elseRule = 49;
MiuLanguage_sinParser.RULE_forRule = 50;
MiuLanguage_sinParser.RULE_inRule = 51;
MiuLanguage_sinParser.RULE_doubleDotRule = 52;
MiuLanguage_sinParser.RULE_addOperatorRule = 53;
MiuLanguage_sinParser.RULE_comparisonOperatorRule = 54;
MiuLanguage_sinParser.RULE_stringRule = 55;
MiuLanguage_sinParser.RULE_charRule = 56;
MiuLanguage_sinParser.RULE_intRule = 57;
MiuLanguage_sinParser.RULE_floatRule = 58;
MiuLanguage_sinParser.RULE_boolRule = 59;
MiuLanguage_sinParser.RULE_dotRule = 60;
MiuLanguage_sinParser.RULE_lparenRule = 61;
MiuLanguage_sinParser.RULE_rparenRule = 62;
MiuLanguage_sinParser.RULE_lbraceRule = 63;
MiuLanguage_sinParser.RULE_rbraceRule = 64;
MiuLanguage_sinParser.RULE_pRule = 65;

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

	pcRule() {
	    return this.getTypedRuleContext(PcRuleContext,0);
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

	pcRule() {
	    return this.getTypedRuleContext(PcRuleContext,0);
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

	pcRule() {
	    return this.getTypedRuleContext(PcRuleContext,0);
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

	pRule() {
	    return this.getTypedRuleContext(PRuleContext,0);
	};

	typeRule() {
	    return this.getTypedRuleContext(TypeRuleContext,0);
	};

	assignametnVar() {
	    return this.getTypedRuleContext(AssignametnVarContext,0);
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

	exprRule() {
	    return this.getTypedRuleContext(ExprRuleContext,0);
	};

	pcRule() {
	    return this.getTypedRuleContext(PcRuleContext,0);
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

	exprRule() {
	    return this.getTypedRuleContext(ExprRuleContext,0);
	};

	comparisonExprADDRule() {
	    return this.getTypedRuleContext(ComparisonExprADDRuleContext,0);
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

	exprFunctionCallRule() {
	    return this.getTypedRuleContext(ExprFunctionCallRuleContext,0);
	};

	exprVarStatementRule() {
	    return this.getTypedRuleContext(ExprVarStatementRuleContext,0);
	};

	arithmeticExprRule() {
	    return this.getTypedRuleContext(ArithmeticExprRuleContext,0);
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



class ExprFunctionCallRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_exprFunctionCallRule;
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
	        listener.enterExprFunctionCallRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitExprFunctionCallRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitExprFunctionCallRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprVarStatementRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_exprVarStatementRule;
    }

	idRule() {
	    return this.getTypedRuleContext(IdRuleContext,0);
	};

	exprFunctionCallVar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprFunctionCallVarContext);
	    } else {
	        return this.getTypedRuleContext(ExprFunctionCallVarContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterExprVarStatementRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitExprVarStatementRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitExprVarStatementRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprFunctionCallVarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_exprFunctionCallVar;
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
	        listener.enterExprFunctionCallVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitExprFunctionCallVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitExprFunctionCallVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArithmeticExprRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_arithmeticExprRule;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
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
	        listener.enterArithmeticExprRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitArithmeticExprRule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitArithmeticExprRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguage_sinParser.RULE_term;
    }

	exprVarStatementRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprVarStatementRuleContext);
	    } else {
	        return this.getTypedRuleContext(ExprVarStatementRuleContext,i);
	    }
	};

	mulOperatorRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MulOperatorRuleContext);
	    } else {
	        return this.getTypedRuleContext(MulOperatorRuleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitTerm(this);
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
MiuLanguage_sinParser.AssignmentContext = AssignmentContext; 
MiuLanguage_sinParser.AssignametnVarContext = AssignametnVarContext; 
MiuLanguage_sinParser.ControlStructureContext = ControlStructureContext; 
MiuLanguage_sinParser.IfStatementContext = IfStatementContext; 
MiuLanguage_sinParser.ElseStatementContext = ElseStatementContext; 
MiuLanguage_sinParser.ElseIfStatementContext = ElseIfStatementContext; 
MiuLanguage_sinParser.ForStatementContext = ForStatementContext; 
MiuLanguage_sinParser.ComparisonExprADDRuleContext = ComparisonExprADDRuleContext; 
MiuLanguage_sinParser.ComparisonExprRuleContext = ComparisonExprRuleContext; 
MiuLanguage_sinParser.ExprReturnRuleContext = ExprReturnRuleContext; 
MiuLanguage_sinParser.ExprRuleContext = ExprRuleContext; 
MiuLanguage_sinParser.ExprFunctionCallRuleContext = ExprFunctionCallRuleContext; 
MiuLanguage_sinParser.ExprVarStatementRuleContext = ExprVarStatementRuleContext; 
MiuLanguage_sinParser.ExprFunctionCallVarContext = ExprFunctionCallVarContext; 
MiuLanguage_sinParser.ArithmeticExprRuleContext = ArithmeticExprRuleContext; 
MiuLanguage_sinParser.TermContext = TermContext; 
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

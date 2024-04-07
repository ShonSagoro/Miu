// Generated from ./MiuLanguage_sin.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiuLanguage_sinListener from './MiuLanguage_sinListener.js';
import MiuLanguage_sinVisitor from './MiuLanguage_sinVisitor.js';

const serializedATN = [4,1,36,431,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
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
7,1,8,1,8,5,8,191,8,8,10,8,12,8,194,9,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,
1,10,1,10,3,10,206,8,10,1,10,1,10,1,10,1,11,1,11,1,11,5,11,214,8,11,10,11,
12,11,217,9,11,1,12,1,12,1,12,1,12,3,12,223,8,12,1,12,1,12,1,12,1,13,1,13,
1,13,1,13,1,13,1,13,3,13,234,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,
243,8,13,5,13,245,8,13,10,13,12,13,248,9,13,1,14,1,14,1,14,1,14,3,14,254,
8,14,1,15,1,15,1,15,1,15,1,15,5,15,261,8,15,10,15,12,15,264,9,15,1,15,1,
15,1,16,1,16,1,16,1,16,1,16,5,16,273,8,16,10,16,12,16,276,9,16,1,16,1,16,
1,16,1,16,1,16,5,16,283,8,16,10,16,12,16,286,9,16,1,16,1,16,1,17,1,17,3,
17,292,8,17,1,18,1,18,1,18,1,18,5,18,298,8,18,10,18,12,18,301,9,18,1,18,
3,18,304,8,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,5,22,326,8,22,10,22,12,22,329,9,
22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,5,24,339,8,24,10,24,12,24,342,
9,24,1,25,1,25,1,25,1,25,1,25,1,25,3,25,350,8,25,1,26,1,26,3,26,354,8,26,
1,27,1,27,1,27,1,27,1,27,3,27,361,8,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,
1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,
38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,
1,46,1,46,1,47,1,47,1,48,1,48,1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,
53,1,53,1,54,1,54,1,55,1,55,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,60,
1,60,1,61,1,61,1,61,0,0,62,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,
82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,
0,0,413,0,128,1,0,0,0,2,136,1,0,0,0,4,145,1,0,0,0,6,162,1,0,0,0,8,164,1,
0,0,0,10,173,1,0,0,0,12,175,1,0,0,0,14,179,1,0,0,0,16,188,1,0,0,0,18,198,
1,0,0,0,20,202,1,0,0,0,22,210,1,0,0,0,24,218,1,0,0,0,26,233,1,0,0,0,28,253,
1,0,0,0,30,255,1,0,0,0,32,267,1,0,0,0,34,291,1,0,0,0,36,293,1,0,0,0,38,305,
1,0,0,0,40,308,1,0,0,0,42,313,1,0,0,0,44,321,1,0,0,0,46,330,1,0,0,0,48,334,
1,0,0,0,50,349,1,0,0,0,52,353,1,0,0,0,54,360,1,0,0,0,56,362,1,0,0,0,58,364,
1,0,0,0,60,366,1,0,0,0,62,368,1,0,0,0,64,370,1,0,0,0,66,372,1,0,0,0,68,374,
1,0,0,0,70,376,1,0,0,0,72,378,1,0,0,0,74,380,1,0,0,0,76,382,1,0,0,0,78,384,
1,0,0,0,80,386,1,0,0,0,82,388,1,0,0,0,84,390,1,0,0,0,86,392,1,0,0,0,88,394,
1,0,0,0,90,396,1,0,0,0,92,398,1,0,0,0,94,400,1,0,0,0,96,402,1,0,0,0,98,404,
1,0,0,0,100,406,1,0,0,0,102,408,1,0,0,0,104,410,1,0,0,0,106,412,1,0,0,0,
108,414,1,0,0,0,110,416,1,0,0,0,112,418,1,0,0,0,114,420,1,0,0,0,116,422,
1,0,0,0,118,424,1,0,0,0,120,426,1,0,0,0,122,428,1,0,0,0,124,127,3,4,2,0,
125,127,3,2,1,0,126,124,1,0,0,0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,
1,0,0,0,128,129,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,131,133,5,36,0,0,
132,131,1,0,0,0,132,133,1,0,0,0,133,134,1,0,0,0,134,135,5,0,0,1,135,1,1,
0,0,0,136,137,3,64,32,0,137,138,3,66,33,0,138,140,3,114,57,0,139,141,3,8,
4,0,140,139,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,143,3,116,58,0,143,
144,3,6,3,0,144,3,1,0,0,0,145,146,3,68,34,0,146,152,3,70,35,0,147,148,3,
72,36,0,148,149,3,70,35,0,149,151,1,0,0,0,150,147,1,0,0,0,151,154,1,0,0,
0,152,150,1,0,0,0,152,153,1,0,0,0,153,155,1,0,0,0,154,152,1,0,0,0,155,156,
3,74,37,0,156,5,1,0,0,0,157,158,3,76,38,0,158,159,3,78,39,0,159,160,3,16,
8,0,160,163,1,0,0,0,161,163,3,14,7,0,162,157,1,0,0,0,162,161,1,0,0,0,163,
7,1,0,0,0,164,170,3,12,6,0,165,166,3,80,40,0,166,167,3,12,6,0,167,169,1,
0,0,0,168,165,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,
9,1,0,0,0,172,170,1,0,0,0,173,174,5,36,0,0,174,11,1,0,0,0,175,176,3,70,35,
0,176,177,3,122,61,0,177,178,3,78,39,0,178,13,1,0,0,0,179,183,3,118,59,0,
180,182,3,28,14,0,181,180,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,
1,0,0,0,184,186,1,0,0,0,185,183,1,0,0,0,186,187,3,120,60,0,187,15,1,0,0,
0,188,192,3,118,59,0,189,191,3,28,14,0,190,189,1,0,0,0,191,194,1,0,0,0,192,
190,1,0,0,0,192,193,1,0,0,0,193,195,1,0,0,0,194,192,1,0,0,0,195,196,3,18,
9,0,196,197,3,120,60,0,197,17,1,0,0,0,198,199,3,82,41,0,199,200,3,48,24,
0,200,201,3,74,37,0,201,19,1,0,0,0,202,203,3,66,33,0,203,205,3,114,57,0,
204,206,3,26,13,0,205,204,1,0,0,0,205,206,1,0,0,0,206,207,1,0,0,0,207,208,
3,116,58,0,208,209,3,74,37,0,209,21,1,0,0,0,210,215,3,70,35,0,211,214,3,
24,12,0,212,214,3,30,15,0,213,211,1,0,0,0,213,212,1,0,0,0,214,217,1,0,0,
0,215,213,1,0,0,0,215,216,1,0,0,0,216,23,1,0,0,0,217,215,1,0,0,0,218,219,
3,112,56,0,219,220,3,66,33,0,220,222,3,114,57,0,221,223,3,26,13,0,222,221,
1,0,0,0,222,223,1,0,0,0,223,224,1,0,0,0,224,225,3,116,58,0,225,226,3,74,
37,0,226,25,1,0,0,0,227,234,3,22,11,0,228,234,3,102,51,0,229,234,3,104,52,
0,230,234,3,106,53,0,231,234,3,108,54,0,232,234,3,110,55,0,233,227,1,0,0,
0,233,228,1,0,0,0,233,229,1,0,0,0,233,230,1,0,0,0,233,231,1,0,0,0,233,232,
1,0,0,0,234,246,1,0,0,0,235,242,3,80,40,0,236,243,3,22,11,0,237,243,3,102,
51,0,238,243,3,104,52,0,239,243,3,106,53,0,240,243,3,108,54,0,241,243,3,
110,55,0,242,236,1,0,0,0,242,237,1,0,0,0,242,238,1,0,0,0,242,239,1,0,0,0,
242,240,1,0,0,0,242,241,1,0,0,0,243,245,1,0,0,0,244,235,1,0,0,0,245,248,
1,0,0,0,246,244,1,0,0,0,246,247,1,0,0,0,247,27,1,0,0,0,248,246,1,0,0,0,249,
254,3,32,16,0,250,254,3,20,10,0,251,254,3,22,11,0,252,254,3,34,17,0,253,
249,1,0,0,0,253,250,1,0,0,0,253,251,1,0,0,0,253,252,1,0,0,0,254,29,1,0,0,
0,255,256,3,86,43,0,256,262,3,50,25,0,257,258,3,52,26,0,258,259,3,50,25,
0,259,261,1,0,0,0,260,257,1,0,0,0,261,264,1,0,0,0,262,260,1,0,0,0,262,263,
1,0,0,0,263,265,1,0,0,0,264,262,1,0,0,0,265,266,3,74,37,0,266,31,1,0,0,0,
267,268,3,84,42,0,268,274,3,70,35,0,269,270,3,122,61,0,270,271,3,78,39,0,
271,273,1,0,0,0,272,269,1,0,0,0,273,276,1,0,0,0,274,272,1,0,0,0,274,275,
1,0,0,0,275,277,1,0,0,0,276,274,1,0,0,0,277,278,3,86,43,0,278,284,3,50,25,
0,279,280,3,52,26,0,280,281,3,50,25,0,281,283,1,0,0,0,282,279,1,0,0,0,283,
286,1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,285,287,1,0,0,0,286,284,1,0,
0,0,287,288,3,74,37,0,288,33,1,0,0,0,289,292,3,36,18,0,290,292,3,42,21,0,
291,289,1,0,0,0,291,290,1,0,0,0,292,35,1,0,0,0,293,294,3,88,44,0,294,295,
3,44,22,0,295,299,3,14,7,0,296,298,3,40,20,0,297,296,1,0,0,0,298,301,1,0,
0,0,299,297,1,0,0,0,299,300,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,302,
304,3,38,19,0,303,302,1,0,0,0,303,304,1,0,0,0,304,37,1,0,0,0,305,306,3,90,
45,0,306,307,3,14,7,0,307,39,1,0,0,0,308,309,3,90,45,0,309,310,3,88,44,0,
310,311,3,44,22,0,311,312,3,14,7,0,312,41,1,0,0,0,313,314,3,92,46,0,314,
315,3,70,35,0,315,316,3,94,47,0,316,317,3,106,53,0,317,318,3,96,48,0,318,
319,3,106,53,0,319,320,3,14,7,0,320,43,1,0,0,0,321,327,3,46,23,0,322,323,
3,98,49,0,323,324,3,46,23,0,324,326,1,0,0,0,325,322,1,0,0,0,326,329,1,0,
0,0,327,325,1,0,0,0,327,328,1,0,0,0,328,45,1,0,0,0,329,327,1,0,0,0,330,331,
3,50,25,0,331,332,3,100,50,0,332,333,3,50,25,0,333,47,1,0,0,0,334,340,3,
50,25,0,335,336,3,52,26,0,336,337,3,50,25,0,337,339,1,0,0,0,338,335,1,0,
0,0,339,342,1,0,0,0,340,338,1,0,0,0,340,341,1,0,0,0,341,49,1,0,0,0,342,340,
1,0,0,0,343,350,3,70,35,0,344,350,3,102,51,0,345,350,3,104,52,0,346,350,
3,106,53,0,347,350,3,108,54,0,348,350,3,110,55,0,349,343,1,0,0,0,349,344,
1,0,0,0,349,345,1,0,0,0,349,346,1,0,0,0,349,347,1,0,0,0,349,348,1,0,0,0,
350,51,1,0,0,0,351,354,3,54,27,0,352,354,3,98,49,0,353,351,1,0,0,0,353,352,
1,0,0,0,354,53,1,0,0,0,355,361,1,0,0,0,356,361,3,56,28,0,357,361,3,58,29,
0,358,361,3,62,31,0,359,361,3,60,30,0,360,355,1,0,0,0,360,356,1,0,0,0,360,
357,1,0,0,0,360,358,1,0,0,0,360,359,1,0,0,0,361,55,1,0,0,0,362,363,5,19,
0,0,363,57,1,0,0,0,364,365,5,20,0,0,365,59,1,0,0,0,366,367,5,21,0,0,367,
61,1,0,0,0,368,369,5,22,0,0,369,63,1,0,0,0,370,371,5,4,0,0,371,65,1,0,0,
0,372,373,5,33,0,0,373,67,1,0,0,0,374,375,5,5,0,0,375,69,1,0,0,0,376,377,
5,34,0,0,377,71,1,0,0,0,378,379,5,15,0,0,379,73,1,0,0,0,380,381,5,17,0,0,
381,75,1,0,0,0,382,383,5,12,0,0,383,77,1,0,0,0,384,385,5,27,0,0,385,79,1,
0,0,0,386,387,5,16,0,0,387,81,1,0,0,0,388,389,5,11,0,0,389,83,1,0,0,0,390,
391,5,6,0,0,391,85,1,0,0,0,392,393,5,3,0,0,393,87,1,0,0,0,394,395,5,8,0,
0,395,89,1,0,0,0,396,397,5,9,0,0,397,91,1,0,0,0,398,399,5,10,0,0,399,93,
1,0,0,0,400,401,5,7,0,0,401,95,1,0,0,0,402,403,5,14,0,0,403,97,1,0,0,0,404,
405,5,2,0,0,405,99,1,0,0,0,406,407,5,1,0,0,407,101,1,0,0,0,408,409,5,29,
0,0,409,103,1,0,0,0,410,411,5,30,0,0,411,105,1,0,0,0,412,413,5,32,0,0,413,
107,1,0,0,0,414,415,5,31,0,0,415,109,1,0,0,0,416,417,5,28,0,0,417,111,1,
0,0,0,418,419,5,13,0,0,419,113,1,0,0,0,420,421,5,23,0,0,421,115,1,0,0,0,
422,423,5,24,0,0,423,117,1,0,0,0,424,425,5,25,0,0,425,119,1,0,0,0,426,427,
5,26,0,0,427,121,1,0,0,0,428,429,5,18,0,0,429,123,1,0,0,0,28,126,128,132,
140,152,162,170,183,192,205,213,215,222,233,242,246,253,262,274,284,291,
299,303,327,340,349,353,360];


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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.returnRule();
	        this.state = 199;
	        this.exprReturnRule();
	        this.state = 200;
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
	        this.state = 202;
	        this.idfRule();
	        this.state = 203;
	        this.lparenRule();
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 95) !== 0)) {
	            this.state = 204;
	            this.argList();
	        }

	        this.state = 207;
	        this.rparenRule();
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



	varStatement() {
	    let localctx = new VarStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MiuLanguage_sinParser.RULE_varStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.idRule();
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===13) {
	            this.state = 213;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 13:
	                this.state = 211;
	                this.functionCallVar();
	                break;
	            case 3:
	                this.state = 212;
	                this.assignametnVar();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 217;
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
	        this.state = 218;
	        this.dotRule();
	        this.state = 219;
	        this.idfRule();
	        this.state = 220;
	        this.lparenRule();
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 95) !== 0)) {
	            this.state = 221;
	            this.argList();
	        }

	        this.state = 224;
	        this.rparenRule();
	        this.state = 225;
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
	        this.state = 233;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            this.state = 227;
	            this.varStatement();
	            break;
	        case 29:
	            this.state = 228;
	            this.stringRule();
	            break;
	        case 30:
	            this.state = 229;
	            this.charRule();
	            break;
	        case 32:
	            this.state = 230;
	            this.intRule();
	            break;
	        case 31:
	            this.state = 231;
	            this.floatRule();
	            break;
	        case 28:
	            this.state = 232;
	            this.boolRule();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 246;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 235;
	            this.commaRule();
	            this.state = 242;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 34:
	                this.state = 236;
	                this.varStatement();
	                break;
	            case 29:
	                this.state = 237;
	                this.stringRule();
	                break;
	            case 30:
	                this.state = 238;
	                this.charRule();
	                break;
	            case 32:
	                this.state = 239;
	                this.intRule();
	                break;
	            case 31:
	                this.state = 240;
	                this.floatRule();
	                break;
	            case 28:
	                this.state = 241;
	                this.boolRule();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 248;
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
	        this.state = 253;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 249;
	            this.assignment();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 250;
	            this.functionCall();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 251;
	            this.varStatement();
	            break;
	        case 8:
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 252;
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
	        this.state = 255;
	        this.equalRule();
	        this.state = 256;
	        this.exprRule();
	        this.state = 262;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4034396164) !== 0) || _la===32 || _la===34) {
	            this.state = 257;
	            this.exprExtraRule();
	            this.state = 258;
	            this.exprRule();
	            this.state = 264;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 265;
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
	        this.state = 267;
	        this.letRule();
	        this.state = 268;
	        this.idRule();
	        this.state = 274;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 269;
	            this.pRule();
	            this.state = 270;
	            this.typeRule();
	            this.state = 276;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 277;
	        this.equalRule();
	        this.state = 278;
	        this.exprRule();
	        this.state = 284;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4034396164) !== 0) || _la===32 || _la===34) {
	            this.state = 279;
	            this.exprExtraRule();
	            this.state = 280;
	            this.exprRule();
	            this.state = 286;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 287;
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
	        this.state = 291;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 289;
	            this.ifStatement();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 290;
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
	        this.state = 293;
	        this.ifRule();
	        this.state = 294;
	        this.comparisonExprADDRule();
	        this.state = 295;
	        this.bodyRule();
	        this.state = 299;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 296;
	                this.elseIfStatement(); 
	            }
	            this.state = 301;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	        this.state = 303;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 302;
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
	        this.state = 305;
	        this.elseRule();
	        this.state = 306;
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
	        this.state = 308;
	        this.elseRule();
	        this.state = 309;
	        this.ifRule();
	        this.state = 310;
	        this.comparisonExprADDRule();
	        this.state = 311;
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
	        this.state = 313;
	        this.forRule();
	        this.state = 314;
	        this.idRule();
	        this.state = 315;
	        this.inRule();
	        this.state = 316;
	        this.intRule();
	        this.state = 317;
	        this.doubleDotRule();
	        this.state = 318;
	        this.intRule();
	        this.state = 319;
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
	        this.state = 321;
	        this.comparisonExprRule();
	        this.state = 327;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 322;
	            this.addOperatorRule();
	            this.state = 323;
	            this.comparisonExprRule();
	            this.state = 329;
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
	        this.state = 330;
	        this.exprRule();
	        this.state = 331;
	        this.comparisonOperatorRule();
	        this.state = 332;
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
	        this.state = 334;
	        this.exprRule();
	        this.state = 340;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4034396164) !== 0) || _la===32 || _la===34) {
	            this.state = 335;
	            this.exprExtraRule();
	            this.state = 336;
	            this.exprRule();
	            this.state = 342;
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
	        this.state = 349;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 343;
	            this.idRule();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 344;
	            this.stringRule();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 345;
	            this.charRule();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 346;
	            this.intRule();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 347;
	            this.floatRule();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 348;
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
	        this.state = 353;
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
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 351;
	            this.mulOperatorRule();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 352;
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
	        this.state = 360;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 34:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 356;
	            this.multRule();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 357;
	            this.divRule();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 358;
	            this.subRule();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 359;
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
	        this.state = 362;
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
	        this.state = 364;
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
	        this.state = 366;
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
	        this.state = 368;
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
	        this.state = 370;
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
	        this.state = 372;
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
	        this.state = 374;
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
	        this.state = 376;
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
	        this.state = 378;
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
	        this.state = 380;
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
	        this.state = 382;
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
	        this.state = 384;
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
	        this.state = 386;
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
	        this.state = 388;
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
	        this.state = 390;
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
	        this.state = 392;
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
	        this.state = 394;
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
	        this.state = 396;
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
	        this.state = 398;
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
	        this.state = 400;
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
	        this.state = 402;
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
	        this.state = 404;
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
	        this.state = 406;
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
	        this.state = 408;
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
	        this.state = 410;
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
	        this.state = 412;
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
	        this.state = 414;
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
	        this.state = 416;
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
	        this.state = 418;
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
	        this.state = 420;
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
	        this.state = 422;
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
	        this.state = 424;
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
	        this.state = 426;
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
	        this.state = 428;
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

	idRule() {
	    return this.getTypedRuleContext(IdRuleContext,0);
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

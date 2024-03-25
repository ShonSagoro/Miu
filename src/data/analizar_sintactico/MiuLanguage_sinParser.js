// Generated from MiuLanguage_sin.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiuLanguage_sinListener from './MiuLanguage_sinListener.js';
import MiuLanguage_sinVisitor from './MiuLanguage_sinVisitor.js';

const serializedATN = [4,1,32,353,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,1,0,1,0,5,0,109,8,0,10,0,12,0,112,
9,0,1,0,3,0,115,8,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,123,8,1,1,1,1,1,1,1,1,2,
1,2,1,2,1,2,1,2,5,2,133,8,2,10,2,12,2,136,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,3,3,145,8,3,1,4,1,4,1,4,1,4,5,4,151,8,4,10,4,12,4,154,9,4,1,5,1,5,1,6,
1,6,1,6,1,6,1,7,1,7,5,7,164,8,7,10,7,12,7,167,9,7,1,7,1,7,1,8,1,8,5,8,173,
8,8,10,8,12,8,176,9,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,3,10,188,
8,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,3,11,198,8,11,1,11,1,11,1,11,
1,12,1,12,1,12,1,12,1,12,1,12,3,12,209,8,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,3,12,218,8,12,5,12,220,8,12,10,12,12,12,223,9,12,1,13,1,13,1,13,1,13,
3,13,229,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,3,15,239,8,15,1,16,
1,16,1,16,1,16,5,16,245,8,16,10,16,12,16,248,9,16,1,16,1,16,1,16,3,16,253,
8,16,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
19,1,19,1,19,1,19,5,19,272,8,19,10,19,12,19,275,9,19,1,20,1,20,1,20,1,20,
1,21,1,21,3,21,283,8,21,1,22,1,22,1,22,1,22,1,22,1,22,3,22,291,8,22,1,23,
1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,
30,1,31,1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,
1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,
45,1,45,1,46,1,46,1,47,1,47,1,48,1,48,1,49,1,49,1,50,1,50,1,51,1,51,1,52,
1,52,1,52,0,0,53,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,
88,90,92,94,96,98,100,102,104,0,0,334,0,110,1,0,0,0,2,118,1,0,0,0,4,127,
1,0,0,0,6,144,1,0,0,0,8,146,1,0,0,0,10,155,1,0,0,0,12,157,1,0,0,0,14,161,
1,0,0,0,16,170,1,0,0,0,18,180,1,0,0,0,20,184,1,0,0,0,22,192,1,0,0,0,24,208,
1,0,0,0,26,228,1,0,0,0,28,230,1,0,0,0,30,238,1,0,0,0,32,240,1,0,0,0,34,254,
1,0,0,0,36,259,1,0,0,0,38,267,1,0,0,0,40,276,1,0,0,0,42,282,1,0,0,0,44,290,
1,0,0,0,46,292,1,0,0,0,48,294,1,0,0,0,50,296,1,0,0,0,52,298,1,0,0,0,54,300,
1,0,0,0,56,302,1,0,0,0,58,304,1,0,0,0,60,306,1,0,0,0,62,308,1,0,0,0,64,310,
1,0,0,0,66,312,1,0,0,0,68,314,1,0,0,0,70,316,1,0,0,0,72,318,1,0,0,0,74,320,
1,0,0,0,76,322,1,0,0,0,78,324,1,0,0,0,80,326,1,0,0,0,82,328,1,0,0,0,84,330,
1,0,0,0,86,332,1,0,0,0,88,334,1,0,0,0,90,336,1,0,0,0,92,338,1,0,0,0,94,340,
1,0,0,0,96,342,1,0,0,0,98,344,1,0,0,0,100,346,1,0,0,0,102,348,1,0,0,0,104,
350,1,0,0,0,106,109,3,4,2,0,107,109,3,2,1,0,108,106,1,0,0,0,108,107,1,0,
0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,114,1,0,0,0,112,
110,1,0,0,0,113,115,5,32,0,0,114,113,1,0,0,0,114,115,1,0,0,0,115,116,1,0,
0,0,116,117,5,0,0,1,117,1,1,0,0,0,118,119,3,46,23,0,119,120,3,48,24,0,120,
122,3,96,48,0,121,123,3,8,4,0,122,121,1,0,0,0,122,123,1,0,0,0,123,124,1,
0,0,0,124,125,3,98,49,0,125,126,3,6,3,0,126,3,1,0,0,0,127,128,3,50,25,0,
128,134,3,52,26,0,129,130,3,54,27,0,130,131,3,52,26,0,131,133,1,0,0,0,132,
129,1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,137,1,0,
0,0,136,134,1,0,0,0,137,138,3,56,28,0,138,5,1,0,0,0,139,140,3,58,29,0,140,
141,3,60,30,0,141,142,3,16,8,0,142,145,1,0,0,0,143,145,3,14,7,0,144,139,
1,0,0,0,144,143,1,0,0,0,145,7,1,0,0,0,146,152,3,12,6,0,147,148,3,62,31,0,
148,149,3,12,6,0,149,151,1,0,0,0,150,147,1,0,0,0,151,154,1,0,0,0,152,150,
1,0,0,0,152,153,1,0,0,0,153,9,1,0,0,0,154,152,1,0,0,0,155,156,5,32,0,0,156,
11,1,0,0,0,157,158,3,52,26,0,158,159,3,104,52,0,159,160,3,60,30,0,160,13,
1,0,0,0,161,165,3,100,50,0,162,164,3,26,13,0,163,162,1,0,0,0,164,167,1,0,
0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,168,1,0,0,0,167,165,1,0,0,0,168,
169,3,102,51,0,169,15,1,0,0,0,170,174,3,100,50,0,171,173,3,26,13,0,172,171,
1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,177,1,0,0,0,
176,174,1,0,0,0,177,178,3,18,9,0,178,179,3,102,51,0,179,17,1,0,0,0,180,181,
3,64,32,0,181,182,3,42,21,0,182,183,3,56,28,0,183,19,1,0,0,0,184,185,3,48,
24,0,185,187,3,96,48,0,186,188,3,24,12,0,187,186,1,0,0,0,187,188,1,0,0,0,
188,189,1,0,0,0,189,190,3,98,49,0,190,191,3,56,28,0,191,21,1,0,0,0,192,193,
3,52,26,0,193,194,3,94,47,0,194,195,3,48,24,0,195,197,3,96,48,0,196,198,
3,24,12,0,197,196,1,0,0,0,197,198,1,0,0,0,198,199,1,0,0,0,199,200,3,98,49,
0,200,201,3,56,28,0,201,23,1,0,0,0,202,209,3,52,26,0,203,209,3,84,42,0,204,
209,3,86,43,0,205,209,3,88,44,0,206,209,3,90,45,0,207,209,3,92,46,0,208,
202,1,0,0,0,208,203,1,0,0,0,208,204,1,0,0,0,208,205,1,0,0,0,208,206,1,0,
0,0,208,207,1,0,0,0,209,221,1,0,0,0,210,217,3,62,31,0,211,218,3,52,26,0,
212,218,3,84,42,0,213,218,3,86,43,0,214,218,3,88,44,0,215,218,3,90,45,0,
216,218,3,92,46,0,217,211,1,0,0,0,217,212,1,0,0,0,217,213,1,0,0,0,217,214,
1,0,0,0,217,215,1,0,0,0,217,216,1,0,0,0,218,220,1,0,0,0,219,210,1,0,0,0,
220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,25,1,0,0,0,223,221,1,
0,0,0,224,229,3,28,14,0,225,229,3,20,10,0,226,229,3,22,11,0,227,229,3,30,
15,0,228,224,1,0,0,0,228,225,1,0,0,0,228,226,1,0,0,0,228,227,1,0,0,0,229,
27,1,0,0,0,230,231,3,66,33,0,231,232,3,52,26,0,232,233,3,68,34,0,233,234,
3,44,22,0,234,235,3,56,28,0,235,29,1,0,0,0,236,239,3,32,16,0,237,239,3,36,
18,0,238,236,1,0,0,0,238,237,1,0,0,0,239,31,1,0,0,0,240,241,3,70,35,0,241,
242,3,38,19,0,242,246,3,14,7,0,243,245,3,34,17,0,244,243,1,0,0,0,245,248,
1,0,0,0,246,244,1,0,0,0,246,247,1,0,0,0,247,252,1,0,0,0,248,246,1,0,0,0,
249,250,3,72,36,0,250,251,3,14,7,0,251,253,1,0,0,0,252,249,1,0,0,0,252,253,
1,0,0,0,253,33,1,0,0,0,254,255,3,72,36,0,255,256,3,70,35,0,256,257,3,38,
19,0,257,258,3,14,7,0,258,35,1,0,0,0,259,260,3,74,37,0,260,261,3,52,26,0,
261,262,3,76,38,0,262,263,3,88,44,0,263,264,3,78,39,0,264,265,3,88,44,0,
265,266,3,14,7,0,266,37,1,0,0,0,267,273,3,40,20,0,268,269,3,80,40,0,269,
270,3,40,20,0,270,272,1,0,0,0,271,268,1,0,0,0,272,275,1,0,0,0,273,271,1,
0,0,0,273,274,1,0,0,0,274,39,1,0,0,0,275,273,1,0,0,0,276,277,3,44,22,0,277,
278,3,82,41,0,278,279,3,44,22,0,279,41,1,0,0,0,280,283,3,44,22,0,281,283,
3,38,19,0,282,280,1,0,0,0,282,281,1,0,0,0,283,43,1,0,0,0,284,291,3,52,26,
0,285,291,3,84,42,0,286,291,3,86,43,0,287,291,3,88,44,0,288,291,3,90,45,
0,289,291,3,92,46,0,290,284,1,0,0,0,290,285,1,0,0,0,290,286,1,0,0,0,290,
287,1,0,0,0,290,288,1,0,0,0,290,289,1,0,0,0,291,45,1,0,0,0,292,293,5,4,0,
0,293,47,1,0,0,0,294,295,5,29,0,0,295,49,1,0,0,0,296,297,5,5,0,0,297,51,
1,0,0,0,298,299,5,30,0,0,299,53,1,0,0,0,300,301,5,15,0,0,301,55,1,0,0,0,
302,303,5,17,0,0,303,57,1,0,0,0,304,305,5,12,0,0,305,59,1,0,0,0,306,307,
5,23,0,0,307,61,1,0,0,0,308,309,5,16,0,0,309,63,1,0,0,0,310,311,5,11,0,0,
311,65,1,0,0,0,312,313,5,6,0,0,313,67,1,0,0,0,314,315,5,3,0,0,315,69,1,0,
0,0,316,317,5,8,0,0,317,71,1,0,0,0,318,319,5,9,0,0,319,73,1,0,0,0,320,321,
5,10,0,0,321,75,1,0,0,0,322,323,5,7,0,0,323,77,1,0,0,0,324,325,5,14,0,0,
325,79,1,0,0,0,326,327,5,2,0,0,327,81,1,0,0,0,328,329,5,1,0,0,329,83,1,0,
0,0,330,331,5,25,0,0,331,85,1,0,0,0,332,333,5,26,0,0,333,87,1,0,0,0,334,
335,5,28,0,0,335,89,1,0,0,0,336,337,5,27,0,0,337,91,1,0,0,0,338,339,5,24,
0,0,339,93,1,0,0,0,340,341,5,13,0,0,341,95,1,0,0,0,342,343,5,19,0,0,343,
97,1,0,0,0,344,345,5,20,0,0,345,99,1,0,0,0,346,347,5,21,0,0,347,101,1,0,
0,0,348,349,5,22,0,0,349,103,1,0,0,0,350,351,5,18,0,0,351,105,1,0,0,0,21,
108,110,114,122,134,144,152,165,174,187,197,208,217,221,228,238,246,252,
273,282,290];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiuLanguage_sinParser extends antlr4.Parser {

    static grammarFileName = "MiuLanguage_sin.g4";
    static literalNames = [ null, null, null, "'='", "'fn'", "'use'", "'let'", 
                            "'in'", "'if'", "'else'", "'for'", "'return'", 
                            "'->'", "'.'", "'..'", "'::'", "','", "';'", 
                            "':'", "'('", "')'", "'{'", "'}'" ];
    static symbolicNames = [ null, "COMPARISON_OPERATOR", "ADD_OPERATOR", 
                             "EQUAL", "FN", "USE", "LET", "IN", "IF", "ELSE", 
                             "FOR", "RETURN", "ARROW", "DOT", "DOUBLE_DOT", 
                             "PP", "COMMA", "PC", "P", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "TYPE", "BOOL", "STRING", 
                             "CHAR", "FLOAT", "INT", "IDF", "ID", "WS", 
                             "INVALID" ];
    static ruleNames = [ "program", "functionDeclaration", "moduleDeclaration", 
                         "checkreturnFunctionRule", "paramList", "invalidRule", 
                         "param", "bodyRule", "bodyRRule", "statementRRule", 
                         "functionCall", "functionCallVar", "argList", "statement", 
                         "assignment", "controlStructure", "ifStatement", 
                         "elseIfStatement", "forStatement", "comparisonExprADDRule", 
                         "comparisonExprRule", "exprReturnRule", "exprRule", 
                         "fnRule", "idfRule", "useRule", "idRule", "ppRule", 
                         "pcRule", "arrowRule", "typeRule", "commaRule", 
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
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===5) {
	            this.state = 108;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 5:
	                this.state = 106;
	                this.moduleDeclaration();
	                break;
	            case 4:
	                this.state = 107;
	                this.functionDeclaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 113;
	            this.match(MiuLanguage_sinParser.INVALID);
	        }

	        this.state = 116;
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
	        this.state = 118;
	        this.fnRule();
	        this.state = 119;
	        this.idfRule();
	        this.state = 120;
	        this.lparenRule();
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 121;
	            this.paramList();
	        }

	        this.state = 124;
	        this.rparenRule();
	        this.state = 125;
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
	        this.state = 127;
	        this.useRule();
	        this.state = 128;
	        this.idRule();
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 129;
	            this.ppRule();
	            this.state = 130;
	            this.idRule();
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 137;
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
	        this.state = 144;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 139;
	            this.arrowRule();
	            this.state = 140;
	            this.typeRule();
	            this.state = 141;
	            this.bodyRRule();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 143;
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
	        this.state = 146;
	        this.param();
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 147;
	            this.commaRule();
	            this.state = 148;
	            this.param();
	            this.state = 154;
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
	        this.state = 155;
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
	        this.state = 157;
	        this.idRule();
	        this.state = 158;
	        this.pRule();
	        this.state = 159;
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
	        this.state = 161;
	        this.lbraceRule();
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1610614080) !== 0)) {
	            this.state = 162;
	            this.statement();
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 168;
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
	        this.state = 170;
	        this.lbraceRule();
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1610614080) !== 0)) {
	            this.state = 171;
	            this.statement();
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 177;
	        this.statementRRule();
	        this.state = 178;
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
	        this.state = 180;
	        this.returnRule();
	        this.state = 181;
	        this.exprReturnRule();
	        this.state = 182;
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
	        this.state = 184;
	        this.idfRule();
	        this.state = 185;
	        this.lparenRule();
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0)) {
	            this.state = 186;
	            this.argList();
	        }

	        this.state = 189;
	        this.rparenRule();
	        this.state = 190;
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



	functionCallVar() {
	    let localctx = new FunctionCallVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MiuLanguage_sinParser.RULE_functionCallVar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.idRule();
	        this.state = 193;
	        this.dotRule();
	        this.state = 194;
	        this.idfRule();
	        this.state = 195;
	        this.lparenRule();
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0)) {
	            this.state = 196;
	            this.argList();
	        }

	        this.state = 199;
	        this.rparenRule();
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



	argList() {
	    let localctx = new ArgListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MiuLanguage_sinParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.state = 202;
	            this.idRule();
	            break;
	        case 25:
	            this.state = 203;
	            this.stringRule();
	            break;
	        case 26:
	            this.state = 204;
	            this.charRule();
	            break;
	        case 28:
	            this.state = 205;
	            this.intRule();
	            break;
	        case 27:
	            this.state = 206;
	            this.floatRule();
	            break;
	        case 24:
	            this.state = 207;
	            this.boolRule();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 221;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 210;
	            this.commaRule();
	            this.state = 217;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 30:
	                this.state = 211;
	                this.idRule();
	                break;
	            case 25:
	                this.state = 212;
	                this.stringRule();
	                break;
	            case 26:
	                this.state = 213;
	                this.charRule();
	                break;
	            case 28:
	                this.state = 214;
	                this.intRule();
	                break;
	            case 27:
	                this.state = 215;
	                this.floatRule();
	                break;
	            case 24:
	                this.state = 216;
	                this.boolRule();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 223;
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
	    this.enterRule(localctx, 26, MiuLanguage_sinParser.RULE_statement);
	    try {
	        this.state = 228;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 224;
	            this.assignment();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 225;
	            this.functionCall();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 226;
	            this.functionCallVar();
	            break;
	        case 8:
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 227;
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
	    this.enterRule(localctx, 28, MiuLanguage_sinParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.letRule();
	        this.state = 231;
	        this.idRule();
	        this.state = 232;
	        this.equalRule();
	        this.state = 233;
	        this.exprRule();
	        this.state = 234;
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
	    this.enterRule(localctx, 30, MiuLanguage_sinParser.RULE_controlStructure);
	    try {
	        this.state = 238;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 236;
	            this.ifStatement();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 237;
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
	    this.enterRule(localctx, 32, MiuLanguage_sinParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.ifRule();
	        this.state = 241;
	        this.comparisonExprADDRule();
	        this.state = 242;
	        this.bodyRule();
	        this.state = 246;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 243;
	                this.elseIfStatement(); 
	            }
	            this.state = 248;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 249;
	            this.elseRule();
	            this.state = 250;
	            this.bodyRule();
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



	elseIfStatement() {
	    let localctx = new ElseIfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, MiuLanguage_sinParser.RULE_elseIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.elseRule();
	        this.state = 255;
	        this.ifRule();
	        this.state = 256;
	        this.comparisonExprADDRule();
	        this.state = 257;
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
	    this.enterRule(localctx, 36, MiuLanguage_sinParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.forRule();
	        this.state = 260;
	        this.idRule();
	        this.state = 261;
	        this.inRule();
	        this.state = 262;
	        this.intRule();
	        this.state = 263;
	        this.doubleDotRule();
	        this.state = 264;
	        this.intRule();
	        this.state = 265;
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
	    this.enterRule(localctx, 38, MiuLanguage_sinParser.RULE_comparisonExprADDRule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.comparisonExprRule();
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 268;
	            this.addOperatorRule();
	            this.state = 269;
	            this.comparisonExprRule();
	            this.state = 275;
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
	    this.enterRule(localctx, 40, MiuLanguage_sinParser.RULE_comparisonExprRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.exprRule();
	        this.state = 277;
	        this.comparisonOperatorRule();
	        this.state = 278;
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
	    this.enterRule(localctx, 42, MiuLanguage_sinParser.RULE_exprReturnRule);
	    try {
	        this.state = 282;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 280;
	            this.exprRule();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 281;
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
	    this.enterRule(localctx, 44, MiuLanguage_sinParser.RULE_exprRule);
	    try {
	        this.state = 290;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 284;
	            this.idRule();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 285;
	            this.stringRule();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 286;
	            this.charRule();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 287;
	            this.intRule();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 288;
	            this.floatRule();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 289;
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



	fnRule() {
	    let localctx = new FnRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, MiuLanguage_sinParser.RULE_fnRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
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
	    this.enterRule(localctx, 48, MiuLanguage_sinParser.RULE_idfRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
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
	    this.enterRule(localctx, 50, MiuLanguage_sinParser.RULE_useRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
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
	    this.enterRule(localctx, 52, MiuLanguage_sinParser.RULE_idRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
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
	    this.enterRule(localctx, 54, MiuLanguage_sinParser.RULE_ppRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
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
	    this.enterRule(localctx, 56, MiuLanguage_sinParser.RULE_pcRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
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
	    this.enterRule(localctx, 58, MiuLanguage_sinParser.RULE_arrowRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
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
	    this.enterRule(localctx, 60, MiuLanguage_sinParser.RULE_typeRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
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
	    this.enterRule(localctx, 62, MiuLanguage_sinParser.RULE_commaRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
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
	    this.enterRule(localctx, 64, MiuLanguage_sinParser.RULE_returnRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
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
	    this.enterRule(localctx, 66, MiuLanguage_sinParser.RULE_letRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
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
	    this.enterRule(localctx, 68, MiuLanguage_sinParser.RULE_equalRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
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
	    this.enterRule(localctx, 70, MiuLanguage_sinParser.RULE_ifRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
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
	    this.enterRule(localctx, 72, MiuLanguage_sinParser.RULE_elseRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
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
	    this.enterRule(localctx, 74, MiuLanguage_sinParser.RULE_forRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
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
	    this.enterRule(localctx, 76, MiuLanguage_sinParser.RULE_inRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
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
	    this.enterRule(localctx, 78, MiuLanguage_sinParser.RULE_doubleDotRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
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
	    this.enterRule(localctx, 80, MiuLanguage_sinParser.RULE_addOperatorRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
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
	    this.enterRule(localctx, 82, MiuLanguage_sinParser.RULE_comparisonOperatorRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
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
	    this.enterRule(localctx, 84, MiuLanguage_sinParser.RULE_stringRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
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
	    this.enterRule(localctx, 86, MiuLanguage_sinParser.RULE_charRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
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
	    this.enterRule(localctx, 88, MiuLanguage_sinParser.RULE_intRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
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
	    this.enterRule(localctx, 90, MiuLanguage_sinParser.RULE_floatRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
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
	    this.enterRule(localctx, 92, MiuLanguage_sinParser.RULE_boolRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
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
	    this.enterRule(localctx, 94, MiuLanguage_sinParser.RULE_dotRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
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
	    this.enterRule(localctx, 96, MiuLanguage_sinParser.RULE_lparenRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
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
	    this.enterRule(localctx, 98, MiuLanguage_sinParser.RULE_rparenRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
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
	    this.enterRule(localctx, 100, MiuLanguage_sinParser.RULE_lbraceRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
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
	    this.enterRule(localctx, 102, MiuLanguage_sinParser.RULE_rbraceRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
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
	    this.enterRule(localctx, 104, MiuLanguage_sinParser.RULE_pRule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 350;
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
MiuLanguage_sinParser.LPAREN = 19;
MiuLanguage_sinParser.RPAREN = 20;
MiuLanguage_sinParser.LBRACE = 21;
MiuLanguage_sinParser.RBRACE = 22;
MiuLanguage_sinParser.TYPE = 23;
MiuLanguage_sinParser.BOOL = 24;
MiuLanguage_sinParser.STRING = 25;
MiuLanguage_sinParser.CHAR = 26;
MiuLanguage_sinParser.FLOAT = 27;
MiuLanguage_sinParser.INT = 28;
MiuLanguage_sinParser.IDF = 29;
MiuLanguage_sinParser.ID = 30;
MiuLanguage_sinParser.WS = 31;
MiuLanguage_sinParser.INVALID = 32;

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
MiuLanguage_sinParser.RULE_functionCallVar = 11;
MiuLanguage_sinParser.RULE_argList = 12;
MiuLanguage_sinParser.RULE_statement = 13;
MiuLanguage_sinParser.RULE_assignment = 14;
MiuLanguage_sinParser.RULE_controlStructure = 15;
MiuLanguage_sinParser.RULE_ifStatement = 16;
MiuLanguage_sinParser.RULE_elseIfStatement = 17;
MiuLanguage_sinParser.RULE_forStatement = 18;
MiuLanguage_sinParser.RULE_comparisonExprADDRule = 19;
MiuLanguage_sinParser.RULE_comparisonExprRule = 20;
MiuLanguage_sinParser.RULE_exprReturnRule = 21;
MiuLanguage_sinParser.RULE_exprRule = 22;
MiuLanguage_sinParser.RULE_fnRule = 23;
MiuLanguage_sinParser.RULE_idfRule = 24;
MiuLanguage_sinParser.RULE_useRule = 25;
MiuLanguage_sinParser.RULE_idRule = 26;
MiuLanguage_sinParser.RULE_ppRule = 27;
MiuLanguage_sinParser.RULE_pcRule = 28;
MiuLanguage_sinParser.RULE_arrowRule = 29;
MiuLanguage_sinParser.RULE_typeRule = 30;
MiuLanguage_sinParser.RULE_commaRule = 31;
MiuLanguage_sinParser.RULE_returnRule = 32;
MiuLanguage_sinParser.RULE_letRule = 33;
MiuLanguage_sinParser.RULE_equalRule = 34;
MiuLanguage_sinParser.RULE_ifRule = 35;
MiuLanguage_sinParser.RULE_elseRule = 36;
MiuLanguage_sinParser.RULE_forRule = 37;
MiuLanguage_sinParser.RULE_inRule = 38;
MiuLanguage_sinParser.RULE_doubleDotRule = 39;
MiuLanguage_sinParser.RULE_addOperatorRule = 40;
MiuLanguage_sinParser.RULE_comparisonOperatorRule = 41;
MiuLanguage_sinParser.RULE_stringRule = 42;
MiuLanguage_sinParser.RULE_charRule = 43;
MiuLanguage_sinParser.RULE_intRule = 44;
MiuLanguage_sinParser.RULE_floatRule = 45;
MiuLanguage_sinParser.RULE_boolRule = 46;
MiuLanguage_sinParser.RULE_dotRule = 47;
MiuLanguage_sinParser.RULE_lparenRule = 48;
MiuLanguage_sinParser.RULE_rparenRule = 49;
MiuLanguage_sinParser.RULE_lbraceRule = 50;
MiuLanguage_sinParser.RULE_rbraceRule = 51;
MiuLanguage_sinParser.RULE_pRule = 52;

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

	idRule() {
	    return this.getTypedRuleContext(IdRuleContext,0);
	};

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

	functionCallVar() {
	    return this.getTypedRuleContext(FunctionCallVarContext,0);
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

	bodyRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BodyRuleContext);
	    } else {
	        return this.getTypedRuleContext(BodyRuleContext,i);
	    }
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

	elseRule() {
	    return this.getTypedRuleContext(ElseRuleContext,0);
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
MiuLanguage_sinParser.FunctionCallVarContext = FunctionCallVarContext; 
MiuLanguage_sinParser.ArgListContext = ArgListContext; 
MiuLanguage_sinParser.StatementContext = StatementContext; 
MiuLanguage_sinParser.AssignmentContext = AssignmentContext; 
MiuLanguage_sinParser.ControlStructureContext = ControlStructureContext; 
MiuLanguage_sinParser.IfStatementContext = IfStatementContext; 
MiuLanguage_sinParser.ElseIfStatementContext = ElseIfStatementContext; 
MiuLanguage_sinParser.ForStatementContext = ForStatementContext; 
MiuLanguage_sinParser.ComparisonExprADDRuleContext = ComparisonExprADDRuleContext; 
MiuLanguage_sinParser.ComparisonExprRuleContext = ComparisonExprRuleContext; 
MiuLanguage_sinParser.ExprReturnRuleContext = ExprReturnRuleContext; 
MiuLanguage_sinParser.ExprRuleContext = ExprRuleContext; 
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

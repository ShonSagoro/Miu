// Generated from ./src/data/MiuLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiuLanguageListener from './MiuLanguageListener.js';
const serializedATN = [4,1,32,200,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,1,0,1,1,1,1,1,1,1,
1,3,1,57,8,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,66,8,2,10,2,12,2,69,9,2,1,2,
1,2,1,3,1,3,1,3,1,3,3,3,77,8,3,1,4,1,4,1,4,5,4,82,8,4,10,4,12,4,85,9,4,1,
5,1,5,1,5,1,5,1,6,1,6,5,6,93,8,6,10,6,12,6,96,9,6,1,6,1,6,1,7,1,7,5,7,102,
8,7,10,7,12,7,105,9,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,3,9,117,8,
9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,127,8,10,1,10,1,10,1,10,1,11,
1,11,1,11,5,11,135,8,11,10,11,12,11,138,9,11,1,12,1,12,1,12,1,12,3,12,144,
8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,3,14,154,8,14,1,15,1,15,1,15,
1,15,5,15,160,8,15,10,15,12,15,163,9,15,1,15,1,15,3,15,167,8,15,1,16,1,16,
1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,5,
18,185,8,18,10,18,12,18,188,9,18,1,19,1,19,1,19,1,19,1,20,1,20,3,20,196,
8,20,1,21,1,21,1,21,0,0,22,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,42,0,2,1,0,1,30,2,0,24,28,30,30,195,0,47,1,0,0,0,2,52,1,0,0,
0,4,61,1,0,0,0,6,76,1,0,0,0,8,78,1,0,0,0,10,86,1,0,0,0,12,90,1,0,0,0,14,
99,1,0,0,0,16,109,1,0,0,0,18,113,1,0,0,0,20,121,1,0,0,0,22,131,1,0,0,0,24,
143,1,0,0,0,26,145,1,0,0,0,28,153,1,0,0,0,30,155,1,0,0,0,32,168,1,0,0,0,
34,173,1,0,0,0,36,181,1,0,0,0,38,189,1,0,0,0,40,195,1,0,0,0,42,197,1,0,0,
0,44,46,7,0,0,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,
48,50,1,0,0,0,49,47,1,0,0,0,50,51,5,0,0,1,51,1,1,0,0,0,52,53,5,4,0,0,53,
54,5,29,0,0,54,56,5,19,0,0,55,57,3,8,4,0,56,55,1,0,0,0,56,57,1,0,0,0,57,
58,1,0,0,0,58,59,5,20,0,0,59,60,3,6,3,0,60,3,1,0,0,0,61,62,5,5,0,0,62,67,
5,30,0,0,63,64,5,15,0,0,64,66,5,30,0,0,65,63,1,0,0,0,66,69,1,0,0,0,67,65,
1,0,0,0,67,68,1,0,0,0,68,70,1,0,0,0,69,67,1,0,0,0,70,71,5,17,0,0,71,5,1,
0,0,0,72,73,5,12,0,0,73,74,5,23,0,0,74,77,3,14,7,0,75,77,3,12,6,0,76,72,
1,0,0,0,76,75,1,0,0,0,77,7,1,0,0,0,78,83,3,10,5,0,79,80,5,16,0,0,80,82,3,
10,5,0,81,79,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,9,1,0,
0,0,85,83,1,0,0,0,86,87,5,30,0,0,87,88,5,18,0,0,88,89,5,23,0,0,89,11,1,0,
0,0,90,94,5,21,0,0,91,93,3,24,12,0,92,91,1,0,0,0,93,96,1,0,0,0,94,92,1,0,
0,0,94,95,1,0,0,0,95,97,1,0,0,0,96,94,1,0,0,0,97,98,5,22,0,0,98,13,1,0,0,
0,99,103,5,21,0,0,100,102,3,24,12,0,101,100,1,0,0,0,102,105,1,0,0,0,103,
101,1,0,0,0,103,104,1,0,0,0,104,106,1,0,0,0,105,103,1,0,0,0,106,107,3,16,
8,0,107,108,5,22,0,0,108,15,1,0,0,0,109,110,5,11,0,0,110,111,3,40,20,0,111,
112,5,17,0,0,112,17,1,0,0,0,113,114,5,29,0,0,114,116,5,19,0,0,115,117,3,
22,11,0,116,115,1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,119,5,20,0,0,
119,120,5,17,0,0,120,19,1,0,0,0,121,122,5,30,0,0,122,123,5,13,0,0,123,124,
5,29,0,0,124,126,5,19,0,0,125,127,3,22,11,0,126,125,1,0,0,0,126,127,1,0,
0,0,127,128,1,0,0,0,128,129,5,20,0,0,129,130,5,17,0,0,130,21,1,0,0,0,131,
136,7,1,0,0,132,133,5,16,0,0,133,135,7,1,0,0,134,132,1,0,0,0,135,138,1,0,
0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,23,1,0,0,0,138,136,1,0,0,0,139,144,
3,26,13,0,140,144,3,18,9,0,141,144,3,20,10,0,142,144,3,28,14,0,143,139,1,
0,0,0,143,140,1,0,0,0,143,141,1,0,0,0,143,142,1,0,0,0,144,25,1,0,0,0,145,
146,5,6,0,0,146,147,5,30,0,0,147,148,5,3,0,0,148,149,3,42,21,0,149,150,5,
17,0,0,150,27,1,0,0,0,151,154,3,30,15,0,152,154,3,34,17,0,153,151,1,0,0,
0,153,152,1,0,0,0,154,29,1,0,0,0,155,156,5,8,0,0,156,157,3,36,18,0,157,161,
3,12,6,0,158,160,3,32,16,0,159,158,1,0,0,0,160,163,1,0,0,0,161,159,1,0,0,
0,161,162,1,0,0,0,162,166,1,0,0,0,163,161,1,0,0,0,164,165,5,9,0,0,165,167,
3,12,6,0,166,164,1,0,0,0,166,167,1,0,0,0,167,31,1,0,0,0,168,169,5,9,0,0,
169,170,5,8,0,0,170,171,3,36,18,0,171,172,3,12,6,0,172,33,1,0,0,0,173,174,
5,10,0,0,174,175,5,30,0,0,175,176,5,7,0,0,176,177,5,28,0,0,177,178,5,14,
0,0,178,179,5,28,0,0,179,180,3,12,6,0,180,35,1,0,0,0,181,186,3,38,19,0,182,
183,5,2,0,0,183,185,3,38,19,0,184,182,1,0,0,0,185,188,1,0,0,0,186,184,1,
0,0,0,186,187,1,0,0,0,187,37,1,0,0,0,188,186,1,0,0,0,189,190,3,42,21,0,190,
191,5,1,0,0,191,192,3,42,21,0,192,39,1,0,0,0,193,196,3,42,21,0,194,196,3,
36,18,0,195,193,1,0,0,0,195,194,1,0,0,0,196,41,1,0,0,0,197,198,7,1,0,0,198,
43,1,0,0,0,16,47,56,67,76,83,94,103,116,126,136,143,153,161,166,186,195];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiuLanguageParser extends antlr4.Parser {

    static grammarFileName = "MiuLanguage.g4";
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
                         "checkreturnFunction", "paramList", "param", "body", 
                         "bodyR", "statementR", "functionCall", "functionCallVar", 
                         "argList", "statement", "assignment", "controlStructure", 
                         "ifStatement", "elseIfStatement", "forStatement", 
                         "comparisonExprADD", "comparisonExpr", "exprReturn", 
                         "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiuLanguageParser.ruleNames;
        this.literalNames = MiuLanguageParser.literalNames;
        this.symbolicNames = MiuLanguageParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiuLanguageParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147483646) !== 0)) {
	            this.state = 44;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147483646) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this.match(MiuLanguageParser.EOF);
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
	    this.enterRule(localctx, 2, MiuLanguageParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(MiuLanguageParser.FN);
	        this.state = 53;
	        this.match(MiuLanguageParser.IDF);
	        this.state = 54;
	        this.match(MiuLanguageParser.LPAREN);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 55;
	            this.paramList();
	        }

	        this.state = 58;
	        this.match(MiuLanguageParser.RPAREN);
	        this.state = 59;
	        this.checkreturnFunction();
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
	    this.enterRule(localctx, 4, MiuLanguageParser.RULE_moduleDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(MiuLanguageParser.USE);
	        this.state = 62;
	        this.match(MiuLanguageParser.ID);
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 63;
	            this.match(MiuLanguageParser.PP);
	            this.state = 64;
	            this.match(MiuLanguageParser.ID);
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 70;
	        this.match(MiuLanguageParser.PC);
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



	checkreturnFunction() {
	    let localctx = new CheckreturnFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiuLanguageParser.RULE_checkreturnFunction);
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            this.match(MiuLanguageParser.ARROW);
	            this.state = 73;
	            this.match(MiuLanguageParser.TYPE);
	            this.state = 74;
	            this.bodyR();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.body();
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
	    this.enterRule(localctx, 8, MiuLanguageParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.param();
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 79;
	            this.match(MiuLanguageParser.COMMA);
	            this.state = 80;
	            this.param();
	            this.state = 85;
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



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiuLanguageParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(MiuLanguageParser.ID);
	        this.state = 87;
	        this.match(MiuLanguageParser.P);
	        this.state = 88;
	        this.match(MiuLanguageParser.TYPE);
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



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiuLanguageParser.RULE_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(MiuLanguageParser.LBRACE);
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1610614080) !== 0)) {
	            this.state = 91;
	            this.statement();
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 97;
	        this.match(MiuLanguageParser.RBRACE);
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



	bodyR() {
	    let localctx = new BodyRContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiuLanguageParser.RULE_bodyR);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(MiuLanguageParser.LBRACE);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1610614080) !== 0)) {
	            this.state = 100;
	            this.statement();
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 106;
	        this.statementR();
	        this.state = 107;
	        this.match(MiuLanguageParser.RBRACE);
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



	statementR() {
	    let localctx = new StatementRContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiuLanguageParser.RULE_statementR);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(MiuLanguageParser.RETURN);
	        this.state = 110;
	        this.exprReturn();
	        this.state = 111;
	        this.match(MiuLanguageParser.PC);
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
	    this.enterRule(localctx, 18, MiuLanguageParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(MiuLanguageParser.IDF);
	        this.state = 114;
	        this.match(MiuLanguageParser.LPAREN);
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0)) {
	            this.state = 115;
	            this.argList();
	        }

	        this.state = 118;
	        this.match(MiuLanguageParser.RPAREN);
	        this.state = 119;
	        this.match(MiuLanguageParser.PC);
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
	    this.enterRule(localctx, 20, MiuLanguageParser.RULE_functionCallVar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(MiuLanguageParser.ID);
	        this.state = 122;
	        this.match(MiuLanguageParser.DOT);
	        this.state = 123;
	        this.match(MiuLanguageParser.IDF);
	        this.state = 124;
	        this.match(MiuLanguageParser.LPAREN);
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0)) {
	            this.state = 125;
	            this.argList();
	        }

	        this.state = 128;
	        this.match(MiuLanguageParser.RPAREN);
	        this.state = 129;
	        this.match(MiuLanguageParser.PC);
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
	    this.enterRule(localctx, 22, MiuLanguageParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 132;
	            this.match(MiuLanguageParser.COMMA);
	            this.state = 133;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 138;
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
	    this.enterRule(localctx, 24, MiuLanguageParser.RULE_statement);
	    try {
	        this.state = 143;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 139;
	            this.assignment();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 140;
	            this.functionCall();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 141;
	            this.functionCallVar();
	            break;
	        case 8:
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 142;
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
	    this.enterRule(localctx, 26, MiuLanguageParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(MiuLanguageParser.LET);
	        this.state = 146;
	        this.match(MiuLanguageParser.ID);
	        this.state = 147;
	        this.match(MiuLanguageParser.EQUAL);
	        this.state = 148;
	        this.expr();
	        this.state = 149;
	        this.match(MiuLanguageParser.PC);
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
	    this.enterRule(localctx, 28, MiuLanguageParser.RULE_controlStructure);
	    try {
	        this.state = 153;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.ifStatement();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
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
	    this.enterRule(localctx, 30, MiuLanguageParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(MiuLanguageParser.IF);
	        this.state = 156;
	        this.comparisonExprADD();
	        this.state = 157;
	        this.body();
	        this.state = 161;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 158;
	                this.elseIfStatement(); 
	            }
	            this.state = 163;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 164;
	            this.match(MiuLanguageParser.ELSE);
	            this.state = 165;
	            this.body();
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
	    this.enterRule(localctx, 32, MiuLanguageParser.RULE_elseIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(MiuLanguageParser.ELSE);
	        this.state = 169;
	        this.match(MiuLanguageParser.IF);
	        this.state = 170;
	        this.comparisonExprADD();
	        this.state = 171;
	        this.body();
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
	    this.enterRule(localctx, 34, MiuLanguageParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(MiuLanguageParser.FOR);
	        this.state = 174;
	        this.match(MiuLanguageParser.ID);
	        this.state = 175;
	        this.match(MiuLanguageParser.IN);
	        this.state = 176;
	        this.match(MiuLanguageParser.INT);
	        this.state = 177;
	        this.match(MiuLanguageParser.DOUBLE_DOT);
	        this.state = 178;
	        this.match(MiuLanguageParser.INT);
	        this.state = 179;
	        this.body();
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



	comparisonExprADD() {
	    let localctx = new ComparisonExprADDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, MiuLanguageParser.RULE_comparisonExprADD);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.comparisonExpr();
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 182;
	            this.match(MiuLanguageParser.ADD_OPERATOR);
	            this.state = 183;
	            this.comparisonExpr();
	            this.state = 188;
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



	comparisonExpr() {
	    let localctx = new ComparisonExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, MiuLanguageParser.RULE_comparisonExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.expr();
	        this.state = 190;
	        this.match(MiuLanguageParser.COMPARISON_OPERATOR);
	        this.state = 191;
	        this.expr();
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



	exprReturn() {
	    let localctx = new ExprReturnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, MiuLanguageParser.RULE_exprReturn);
	    try {
	        this.state = 195;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 194;
	            this.comparisonExprADD();
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, MiuLanguageParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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


}

MiuLanguageParser.EOF = antlr4.Token.EOF;
MiuLanguageParser.COMPARISON_OPERATOR = 1;
MiuLanguageParser.ADD_OPERATOR = 2;
MiuLanguageParser.EQUAL = 3;
MiuLanguageParser.FN = 4;
MiuLanguageParser.USE = 5;
MiuLanguageParser.LET = 6;
MiuLanguageParser.IN = 7;
MiuLanguageParser.IF = 8;
MiuLanguageParser.ELSE = 9;
MiuLanguageParser.FOR = 10;
MiuLanguageParser.RETURN = 11;
MiuLanguageParser.ARROW = 12;
MiuLanguageParser.DOT = 13;
MiuLanguageParser.DOUBLE_DOT = 14;
MiuLanguageParser.PP = 15;
MiuLanguageParser.COMMA = 16;
MiuLanguageParser.PC = 17;
MiuLanguageParser.P = 18;
MiuLanguageParser.LPAREN = 19;
MiuLanguageParser.RPAREN = 20;
MiuLanguageParser.LBRACE = 21;
MiuLanguageParser.RBRACE = 22;
MiuLanguageParser.TYPE = 23;
MiuLanguageParser.BOOL = 24;
MiuLanguageParser.STRING = 25;
MiuLanguageParser.CHAR = 26;
MiuLanguageParser.FLOAT = 27;
MiuLanguageParser.INT = 28;
MiuLanguageParser.IDF = 29;
MiuLanguageParser.ID = 30;
MiuLanguageParser.WS = 31;
MiuLanguageParser.INVALID = 32;

MiuLanguageParser.RULE_program = 0;
MiuLanguageParser.RULE_functionDeclaration = 1;
MiuLanguageParser.RULE_moduleDeclaration = 2;
MiuLanguageParser.RULE_checkreturnFunction = 3;
MiuLanguageParser.RULE_paramList = 4;
MiuLanguageParser.RULE_param = 5;
MiuLanguageParser.RULE_body = 6;
MiuLanguageParser.RULE_bodyR = 7;
MiuLanguageParser.RULE_statementR = 8;
MiuLanguageParser.RULE_functionCall = 9;
MiuLanguageParser.RULE_functionCallVar = 10;
MiuLanguageParser.RULE_argList = 11;
MiuLanguageParser.RULE_statement = 12;
MiuLanguageParser.RULE_assignment = 13;
MiuLanguageParser.RULE_controlStructure = 14;
MiuLanguageParser.RULE_ifStatement = 15;
MiuLanguageParser.RULE_elseIfStatement = 16;
MiuLanguageParser.RULE_forStatement = 17;
MiuLanguageParser.RULE_comparisonExprADD = 18;
MiuLanguageParser.RULE_comparisonExpr = 19;
MiuLanguageParser.RULE_exprReturn = 20;
MiuLanguageParser.RULE_expr = 21;

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
        this.ruleIndex = MiuLanguageParser.RULE_program;
    }

	EOF() {
	    return this.getToken(MiuLanguageParser.EOF, 0);
	};

	COMPARISON_OPERATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.COMPARISON_OPERATOR);
	    } else {
	        return this.getToken(MiuLanguageParser.COMPARISON_OPERATOR, i);
	    }
	};


	ADD_OPERATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.ADD_OPERATOR);
	    } else {
	        return this.getToken(MiuLanguageParser.ADD_OPERATOR, i);
	    }
	};


	EQUAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.EQUAL);
	    } else {
	        return this.getToken(MiuLanguageParser.EQUAL, i);
	    }
	};


	FN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.FN);
	    } else {
	        return this.getToken(MiuLanguageParser.FN, i);
	    }
	};


	USE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.USE);
	    } else {
	        return this.getToken(MiuLanguageParser.USE, i);
	    }
	};


	LET = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.LET);
	    } else {
	        return this.getToken(MiuLanguageParser.LET, i);
	    }
	};


	IN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.IN);
	    } else {
	        return this.getToken(MiuLanguageParser.IN, i);
	    }
	};


	IF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.IF);
	    } else {
	        return this.getToken(MiuLanguageParser.IF, i);
	    }
	};


	ELSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.ELSE);
	    } else {
	        return this.getToken(MiuLanguageParser.ELSE, i);
	    }
	};


	FOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.FOR);
	    } else {
	        return this.getToken(MiuLanguageParser.FOR, i);
	    }
	};


	RETURN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.RETURN);
	    } else {
	        return this.getToken(MiuLanguageParser.RETURN, i);
	    }
	};


	ARROW = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.ARROW);
	    } else {
	        return this.getToken(MiuLanguageParser.ARROW, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.DOT);
	    } else {
	        return this.getToken(MiuLanguageParser.DOT, i);
	    }
	};


	DOUBLE_DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.DOUBLE_DOT);
	    } else {
	        return this.getToken(MiuLanguageParser.DOUBLE_DOT, i);
	    }
	};


	PP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.PP);
	    } else {
	        return this.getToken(MiuLanguageParser.PP, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.COMMA);
	    } else {
	        return this.getToken(MiuLanguageParser.COMMA, i);
	    }
	};


	PC = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.PC);
	    } else {
	        return this.getToken(MiuLanguageParser.PC, i);
	    }
	};


	P = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.P);
	    } else {
	        return this.getToken(MiuLanguageParser.P, i);
	    }
	};


	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.LPAREN);
	    } else {
	        return this.getToken(MiuLanguageParser.LPAREN, i);
	    }
	};


	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.RPAREN);
	    } else {
	        return this.getToken(MiuLanguageParser.RPAREN, i);
	    }
	};


	LBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.LBRACE);
	    } else {
	        return this.getToken(MiuLanguageParser.LBRACE, i);
	    }
	};


	RBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.RBRACE);
	    } else {
	        return this.getToken(MiuLanguageParser.RBRACE, i);
	    }
	};


	TYPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.TYPE);
	    } else {
	        return this.getToken(MiuLanguageParser.TYPE, i);
	    }
	};


	BOOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.BOOL);
	    } else {
	        return this.getToken(MiuLanguageParser.BOOL, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.STRING);
	    } else {
	        return this.getToken(MiuLanguageParser.STRING, i);
	    }
	};


	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.CHAR);
	    } else {
	        return this.getToken(MiuLanguageParser.CHAR, i);
	    }
	};


	FLOAT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.FLOAT);
	    } else {
	        return this.getToken(MiuLanguageParser.FLOAT, i);
	    }
	};


	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.INT);
	    } else {
	        return this.getToken(MiuLanguageParser.INT, i);
	    }
	};


	IDF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.IDF);
	    } else {
	        return this.getToken(MiuLanguageParser.IDF, i);
	    }
	};


	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.ID);
	    } else {
	        return this.getToken(MiuLanguageParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitProgram(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_functionDeclaration;
    }

	FN() {
	    return this.getToken(MiuLanguageParser.FN, 0);
	};

	IDF() {
	    return this.getToken(MiuLanguageParser.IDF, 0);
	};

	LPAREN() {
	    return this.getToken(MiuLanguageParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(MiuLanguageParser.RPAREN, 0);
	};

	checkreturnFunction() {
	    return this.getTypedRuleContext(CheckreturnFunctionContext,0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitFunctionDeclaration(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_moduleDeclaration;
    }

	USE() {
	    return this.getToken(MiuLanguageParser.USE, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.ID);
	    } else {
	        return this.getToken(MiuLanguageParser.ID, i);
	    }
	};


	PC() {
	    return this.getToken(MiuLanguageParser.PC, 0);
	};

	PP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.PP);
	    } else {
	        return this.getToken(MiuLanguageParser.PP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterModuleDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitModuleDeclaration(this);
		}
	}


}



class CheckreturnFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_checkreturnFunction;
    }

	ARROW() {
	    return this.getToken(MiuLanguageParser.ARROW, 0);
	};

	TYPE() {
	    return this.getToken(MiuLanguageParser.TYPE, 0);
	};

	bodyR() {
	    return this.getTypedRuleContext(BodyRContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterCheckreturnFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitCheckreturnFunction(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_paramList;
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.COMMA);
	    } else {
	        return this.getToken(MiuLanguageParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterParamList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitParamList(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_param;
    }

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
	};

	P() {
	    return this.getToken(MiuLanguageParser.P, 0);
	};

	TYPE() {
	    return this.getToken(MiuLanguageParser.TYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitParam(this);
		}
	}


}



class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_body;
    }

	LBRACE() {
	    return this.getToken(MiuLanguageParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MiuLanguageParser.RBRACE, 0);
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
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitBody(this);
		}
	}


}



class BodyRContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_bodyR;
    }

	LBRACE() {
	    return this.getToken(MiuLanguageParser.LBRACE, 0);
	};

	statementR() {
	    return this.getTypedRuleContext(StatementRContext,0);
	};

	RBRACE() {
	    return this.getToken(MiuLanguageParser.RBRACE, 0);
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
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterBodyR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitBodyR(this);
		}
	}


}



class StatementRContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_statementR;
    }

	RETURN() {
	    return this.getToken(MiuLanguageParser.RETURN, 0);
	};

	exprReturn() {
	    return this.getTypedRuleContext(ExprReturnContext,0);
	};

	PC() {
	    return this.getToken(MiuLanguageParser.PC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterStatementR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitStatementR(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_functionCall;
    }

	IDF() {
	    return this.getToken(MiuLanguageParser.IDF, 0);
	};

	LPAREN() {
	    return this.getToken(MiuLanguageParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(MiuLanguageParser.RPAREN, 0);
	};

	PC() {
	    return this.getToken(MiuLanguageParser.PC, 0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitFunctionCall(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_functionCallVar;
    }

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
	};

	DOT() {
	    return this.getToken(MiuLanguageParser.DOT, 0);
	};

	IDF() {
	    return this.getToken(MiuLanguageParser.IDF, 0);
	};

	LPAREN() {
	    return this.getToken(MiuLanguageParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(MiuLanguageParser.RPAREN, 0);
	};

	PC() {
	    return this.getToken(MiuLanguageParser.PC, 0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterFunctionCallVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitFunctionCallVar(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_argList;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.ID);
	    } else {
	        return this.getToken(MiuLanguageParser.ID, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.STRING);
	    } else {
	        return this.getToken(MiuLanguageParser.STRING, i);
	    }
	};


	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.CHAR);
	    } else {
	        return this.getToken(MiuLanguageParser.CHAR, i);
	    }
	};


	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.INT);
	    } else {
	        return this.getToken(MiuLanguageParser.INT, i);
	    }
	};


	FLOAT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.FLOAT);
	    } else {
	        return this.getToken(MiuLanguageParser.FLOAT, i);
	    }
	};


	BOOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.BOOL);
	    } else {
	        return this.getToken(MiuLanguageParser.BOOL, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.COMMA);
	    } else {
	        return this.getToken(MiuLanguageParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterArgList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitArgList(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_statement;
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
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitStatement(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_assignment;
    }

	LET() {
	    return this.getToken(MiuLanguageParser.LET, 0);
	};

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
	};

	EQUAL() {
	    return this.getToken(MiuLanguageParser.EQUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PC() {
	    return this.getToken(MiuLanguageParser.PC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitAssignment(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_controlStructure;
    }

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterControlStructure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitControlStructure(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(MiuLanguageParser.IF, 0);
	};

	comparisonExprADD() {
	    return this.getTypedRuleContext(ComparisonExprADDContext,0);
	};

	body = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BodyContext);
	    } else {
	        return this.getTypedRuleContext(BodyContext,i);
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

	ELSE() {
	    return this.getToken(MiuLanguageParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitIfStatement(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_elseIfStatement;
    }

	ELSE() {
	    return this.getToken(MiuLanguageParser.ELSE, 0);
	};

	IF() {
	    return this.getToken(MiuLanguageParser.IF, 0);
	};

	comparisonExprADD() {
	    return this.getTypedRuleContext(ComparisonExprADDContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterElseIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitElseIfStatement(this);
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
        this.ruleIndex = MiuLanguageParser.RULE_forStatement;
    }

	FOR() {
	    return this.getToken(MiuLanguageParser.FOR, 0);
	};

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
	};

	IN() {
	    return this.getToken(MiuLanguageParser.IN, 0);
	};

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.INT);
	    } else {
	        return this.getToken(MiuLanguageParser.INT, i);
	    }
	};


	DOUBLE_DOT() {
	    return this.getToken(MiuLanguageParser.DOUBLE_DOT, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitForStatement(this);
		}
	}


}



class ComparisonExprADDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_comparisonExprADD;
    }

	comparisonExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComparisonExprContext);
	    } else {
	        return this.getTypedRuleContext(ComparisonExprContext,i);
	    }
	};

	ADD_OPERATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.ADD_OPERATOR);
	    } else {
	        return this.getToken(MiuLanguageParser.ADD_OPERATOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterComparisonExprADD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitComparisonExprADD(this);
		}
	}


}



class ComparisonExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_comparisonExpr;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMPARISON_OPERATOR() {
	    return this.getToken(MiuLanguageParser.COMPARISON_OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterComparisonExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitComparisonExpr(this);
		}
	}


}



class ExprReturnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_exprReturn;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	comparisonExprADD() {
	    return this.getTypedRuleContext(ComparisonExprADDContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterExprReturn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitExprReturn(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_expr;
    }

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
	};

	STRING() {
	    return this.getToken(MiuLanguageParser.STRING, 0);
	};

	CHAR() {
	    return this.getToken(MiuLanguageParser.CHAR, 0);
	};

	INT() {
	    return this.getToken(MiuLanguageParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(MiuLanguageParser.FLOAT, 0);
	};

	BOOL() {
	    return this.getToken(MiuLanguageParser.BOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitExpr(this);
		}
	}


}




MiuLanguageParser.ProgramContext = ProgramContext; 
MiuLanguageParser.FunctionDeclarationContext = FunctionDeclarationContext; 
MiuLanguageParser.ModuleDeclarationContext = ModuleDeclarationContext; 
MiuLanguageParser.CheckreturnFunctionContext = CheckreturnFunctionContext; 
MiuLanguageParser.ParamListContext = ParamListContext; 
MiuLanguageParser.ParamContext = ParamContext; 
MiuLanguageParser.BodyContext = BodyContext; 
MiuLanguageParser.BodyRContext = BodyRContext; 
MiuLanguageParser.StatementRContext = StatementRContext; 
MiuLanguageParser.FunctionCallContext = FunctionCallContext; 
MiuLanguageParser.FunctionCallVarContext = FunctionCallVarContext; 
MiuLanguageParser.ArgListContext = ArgListContext; 
MiuLanguageParser.StatementContext = StatementContext; 
MiuLanguageParser.AssignmentContext = AssignmentContext; 
MiuLanguageParser.ControlStructureContext = ControlStructureContext; 
MiuLanguageParser.IfStatementContext = IfStatementContext; 
MiuLanguageParser.ElseIfStatementContext = ElseIfStatementContext; 
MiuLanguageParser.ForStatementContext = ForStatementContext; 
MiuLanguageParser.ComparisonExprADDContext = ComparisonExprADDContext; 
MiuLanguageParser.ComparisonExprContext = ComparisonExprContext; 
MiuLanguageParser.ExprReturnContext = ExprReturnContext; 
MiuLanguageParser.ExprContext = ExprContext; 

// Generated from MiuLanguage_sin.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiuLanguage_sinListener from './MiuLanguage_sinListener.js';
import MiuLanguage_sinVisitor from './MiuLanguage_sinVisitor.js';

const serializedATN = [4,1,32,204,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,1,0,5,0,47,8,0,10,0,12,0,50,9,0,1,0,3,0,53,8,0,1,0,
1,0,1,1,1,1,1,1,1,1,3,1,61,8,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,5,2,70,8,2,10,
2,12,2,73,9,2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,81,8,3,1,4,1,4,1,4,5,4,86,8,4,
10,4,12,4,89,9,4,1,5,1,5,1,5,1,5,1,6,1,6,5,6,97,8,6,10,6,12,6,100,9,6,1,
6,1,6,1,7,1,7,5,7,106,8,7,10,7,12,7,109,9,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,
1,9,1,9,1,9,3,9,121,8,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,131,8,
10,1,10,1,10,1,10,1,11,1,11,1,11,5,11,139,8,11,10,11,12,11,142,9,11,1,12,
1,12,1,12,1,12,3,12,148,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,3,14,
158,8,14,1,15,1,15,1,15,1,15,5,15,164,8,15,10,15,12,15,167,9,15,1,15,1,15,
3,15,171,8,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,18,1,18,1,18,5,18,189,8,18,10,18,12,18,192,9,18,1,19,1,19,1,19,1,
19,1,20,1,20,3,20,200,8,20,1,21,1,21,1,21,0,0,22,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,38,40,42,0,1,2,0,24,28,30,30,201,0,48,1,0,0,0,
2,56,1,0,0,0,4,65,1,0,0,0,6,80,1,0,0,0,8,82,1,0,0,0,10,90,1,0,0,0,12,94,
1,0,0,0,14,103,1,0,0,0,16,113,1,0,0,0,18,117,1,0,0,0,20,125,1,0,0,0,22,135,
1,0,0,0,24,147,1,0,0,0,26,149,1,0,0,0,28,157,1,0,0,0,30,159,1,0,0,0,32,172,
1,0,0,0,34,177,1,0,0,0,36,185,1,0,0,0,38,193,1,0,0,0,40,199,1,0,0,0,42,201,
1,0,0,0,44,47,3,4,2,0,45,47,3,2,1,0,46,44,1,0,0,0,46,45,1,0,0,0,47,50,1,
0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,52,1,0,0,0,50,48,1,0,0,0,51,53,5,32,
0,0,52,51,1,0,0,0,52,53,1,0,0,0,53,54,1,0,0,0,54,55,5,0,0,1,55,1,1,0,0,0,
56,57,5,4,0,0,57,58,5,29,0,0,58,60,5,19,0,0,59,61,3,8,4,0,60,59,1,0,0,0,
60,61,1,0,0,0,61,62,1,0,0,0,62,63,5,20,0,0,63,64,3,6,3,0,64,3,1,0,0,0,65,
66,5,5,0,0,66,71,5,30,0,0,67,68,5,15,0,0,68,70,5,30,0,0,69,67,1,0,0,0,70,
73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,
5,17,0,0,75,5,1,0,0,0,76,77,5,12,0,0,77,78,5,23,0,0,78,81,3,14,7,0,79,81,
3,12,6,0,80,76,1,0,0,0,80,79,1,0,0,0,81,7,1,0,0,0,82,87,3,10,5,0,83,84,5,
16,0,0,84,86,3,10,5,0,85,83,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,
0,0,0,88,9,1,0,0,0,89,87,1,0,0,0,90,91,5,30,0,0,91,92,5,18,0,0,92,93,5,23,
0,0,93,11,1,0,0,0,94,98,5,21,0,0,95,97,3,24,12,0,96,95,1,0,0,0,97,100,1,
0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,98,1,0,0,0,101,102,
5,22,0,0,102,13,1,0,0,0,103,107,5,21,0,0,104,106,3,24,12,0,105,104,1,0,0,
0,106,109,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,110,1,0,0,0,109,107,
1,0,0,0,110,111,3,16,8,0,111,112,5,22,0,0,112,15,1,0,0,0,113,114,5,11,0,
0,114,115,3,40,20,0,115,116,5,17,0,0,116,17,1,0,0,0,117,118,5,29,0,0,118,
120,5,19,0,0,119,121,3,22,11,0,120,119,1,0,0,0,120,121,1,0,0,0,121,122,1,
0,0,0,122,123,5,20,0,0,123,124,5,17,0,0,124,19,1,0,0,0,125,126,5,30,0,0,
126,127,5,13,0,0,127,128,5,29,0,0,128,130,5,19,0,0,129,131,3,22,11,0,130,
129,1,0,0,0,130,131,1,0,0,0,131,132,1,0,0,0,132,133,5,20,0,0,133,134,5,17,
0,0,134,21,1,0,0,0,135,140,7,0,0,0,136,137,5,16,0,0,137,139,7,0,0,0,138,
136,1,0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,23,1,0,0,
0,142,140,1,0,0,0,143,148,3,26,13,0,144,148,3,18,9,0,145,148,3,20,10,0,146,
148,3,28,14,0,147,143,1,0,0,0,147,144,1,0,0,0,147,145,1,0,0,0,147,146,1,
0,0,0,148,25,1,0,0,0,149,150,5,6,0,0,150,151,5,30,0,0,151,152,5,3,0,0,152,
153,3,42,21,0,153,154,5,17,0,0,154,27,1,0,0,0,155,158,3,30,15,0,156,158,
3,34,17,0,157,155,1,0,0,0,157,156,1,0,0,0,158,29,1,0,0,0,159,160,5,8,0,0,
160,161,3,36,18,0,161,165,3,12,6,0,162,164,3,32,16,0,163,162,1,0,0,0,164,
167,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,170,1,0,0,0,167,165,1,0,
0,0,168,169,5,9,0,0,169,171,3,12,6,0,170,168,1,0,0,0,170,171,1,0,0,0,171,
31,1,0,0,0,172,173,5,9,0,0,173,174,5,8,0,0,174,175,3,36,18,0,175,176,3,12,
6,0,176,33,1,0,0,0,177,178,5,10,0,0,178,179,5,30,0,0,179,180,5,7,0,0,180,
181,5,28,0,0,181,182,5,14,0,0,182,183,5,28,0,0,183,184,3,12,6,0,184,35,1,
0,0,0,185,190,3,38,19,0,186,187,5,2,0,0,187,189,3,38,19,0,188,186,1,0,0,
0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,37,1,0,0,0,192,190,
1,0,0,0,193,194,3,42,21,0,194,195,5,1,0,0,195,196,3,42,21,0,196,39,1,0,0,
0,197,200,3,42,21,0,198,200,3,36,18,0,199,197,1,0,0,0,199,198,1,0,0,0,200,
41,1,0,0,0,201,202,7,0,0,0,202,43,1,0,0,0,18,46,48,52,60,71,80,87,98,107,
120,130,140,147,157,165,170,190,199];


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
                         "checkreturnFunction", "paramList", "param", "body", 
                         "bodyR", "statementR", "functionCall", "functionCallVar", 
                         "argList", "statement", "assignment", "controlStructure", 
                         "ifStatement", "elseIfStatement", "forStatement", 
                         "comparisonExprADD", "comparisonExpr", "exprReturn", 
                         "expr" ];

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
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===5) {
	            this.state = 46;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 5:
	                this.state = 44;
	                this.moduleDeclaration();
	                break;
	            case 4:
	                this.state = 45;
	                this.functionDeclaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 51;
	            this.match(MiuLanguage_sinParser.INVALID);
	        }

	        this.state = 54;
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
	        this.state = 56;
	        this.match(MiuLanguage_sinParser.FN);
	        this.state = 57;
	        this.match(MiuLanguage_sinParser.IDF);
	        this.state = 58;
	        this.match(MiuLanguage_sinParser.LPAREN);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 59;
	            this.paramList();
	        }

	        this.state = 62;
	        this.match(MiuLanguage_sinParser.RPAREN);
	        this.state = 63;
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
	    this.enterRule(localctx, 4, MiuLanguage_sinParser.RULE_moduleDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(MiuLanguage_sinParser.USE);
	        this.state = 66;
	        this.match(MiuLanguage_sinParser.ID);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 67;
	            this.match(MiuLanguage_sinParser.PP);
	            this.state = 68;
	            this.match(MiuLanguage_sinParser.ID);
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 74;
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



	checkreturnFunction() {
	    let localctx = new CheckreturnFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiuLanguage_sinParser.RULE_checkreturnFunction);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.match(MiuLanguage_sinParser.ARROW);
	            this.state = 77;
	            this.match(MiuLanguage_sinParser.TYPE);
	            this.state = 78;
	            this.bodyR();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
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
	    this.enterRule(localctx, 8, MiuLanguage_sinParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.param();
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 83;
	            this.match(MiuLanguage_sinParser.COMMA);
	            this.state = 84;
	            this.param();
	            this.state = 89;
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
	    this.enterRule(localctx, 10, MiuLanguage_sinParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(MiuLanguage_sinParser.ID);
	        this.state = 91;
	        this.match(MiuLanguage_sinParser.P);
	        this.state = 92;
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



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiuLanguage_sinParser.RULE_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(MiuLanguage_sinParser.LBRACE);
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1610614080) !== 0)) {
	            this.state = 95;
	            this.statement();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 101;
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



	bodyR() {
	    let localctx = new BodyRContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiuLanguage_sinParser.RULE_bodyR);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(MiuLanguage_sinParser.LBRACE);
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1610614080) !== 0)) {
	            this.state = 104;
	            this.statement();
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 110;
	        this.statementR();
	        this.state = 111;
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



	statementR() {
	    let localctx = new StatementRContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiuLanguage_sinParser.RULE_statementR);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(MiuLanguage_sinParser.RETURN);
	        this.state = 114;
	        this.exprReturn();
	        this.state = 115;
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



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiuLanguage_sinParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(MiuLanguage_sinParser.IDF);
	        this.state = 118;
	        this.match(MiuLanguage_sinParser.LPAREN);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0)) {
	            this.state = 119;
	            this.argList();
	        }

	        this.state = 122;
	        this.match(MiuLanguage_sinParser.RPAREN);
	        this.state = 123;
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



	functionCallVar() {
	    let localctx = new FunctionCallVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MiuLanguage_sinParser.RULE_functionCallVar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(MiuLanguage_sinParser.ID);
	        this.state = 126;
	        this.match(MiuLanguage_sinParser.DOT);
	        this.state = 127;
	        this.match(MiuLanguage_sinParser.IDF);
	        this.state = 128;
	        this.match(MiuLanguage_sinParser.LPAREN);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0)) {
	            this.state = 129;
	            this.argList();
	        }

	        this.state = 132;
	        this.match(MiuLanguage_sinParser.RPAREN);
	        this.state = 133;
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



	argList() {
	    let localctx = new ArgListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MiuLanguage_sinParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 136;
	            this.match(MiuLanguage_sinParser.COMMA);
	            this.state = 137;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 142;
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
	    this.enterRule(localctx, 24, MiuLanguage_sinParser.RULE_statement);
	    try {
	        this.state = 147;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            this.assignment();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 144;
	            this.functionCall();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 145;
	            this.functionCallVar();
	            break;
	        case 8:
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 146;
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
	    this.enterRule(localctx, 26, MiuLanguage_sinParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(MiuLanguage_sinParser.LET);
	        this.state = 150;
	        this.match(MiuLanguage_sinParser.ID);
	        this.state = 151;
	        this.match(MiuLanguage_sinParser.EQUAL);
	        this.state = 152;
	        this.expr();
	        this.state = 153;
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



	controlStructure() {
	    let localctx = new ControlStructureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MiuLanguage_sinParser.RULE_controlStructure);
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 155;
	            this.ifStatement();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
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
	    this.enterRule(localctx, 30, MiuLanguage_sinParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.match(MiuLanguage_sinParser.IF);
	        this.state = 160;
	        this.comparisonExprADD();
	        this.state = 161;
	        this.body();
	        this.state = 165;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 162;
	                this.elseIfStatement(); 
	            }
	            this.state = 167;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	        this.state = 170;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 168;
	            this.match(MiuLanguage_sinParser.ELSE);
	            this.state = 169;
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
	    this.enterRule(localctx, 32, MiuLanguage_sinParser.RULE_elseIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(MiuLanguage_sinParser.ELSE);
	        this.state = 173;
	        this.match(MiuLanguage_sinParser.IF);
	        this.state = 174;
	        this.comparisonExprADD();
	        this.state = 175;
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
	    this.enterRule(localctx, 34, MiuLanguage_sinParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(MiuLanguage_sinParser.FOR);
	        this.state = 178;
	        this.match(MiuLanguage_sinParser.ID);
	        this.state = 179;
	        this.match(MiuLanguage_sinParser.IN);
	        this.state = 180;
	        this.match(MiuLanguage_sinParser.INT);
	        this.state = 181;
	        this.match(MiuLanguage_sinParser.DOUBLE_DOT);
	        this.state = 182;
	        this.match(MiuLanguage_sinParser.INT);
	        this.state = 183;
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
	    this.enterRule(localctx, 36, MiuLanguage_sinParser.RULE_comparisonExprADD);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.comparisonExpr();
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 186;
	            this.match(MiuLanguage_sinParser.ADD_OPERATOR);
	            this.state = 187;
	            this.comparisonExpr();
	            this.state = 192;
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
	    this.enterRule(localctx, 38, MiuLanguage_sinParser.RULE_comparisonExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.expr();
	        this.state = 194;
	        this.match(MiuLanguage_sinParser.COMPARISON_OPERATOR);
	        this.state = 195;
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
	    this.enterRule(localctx, 40, MiuLanguage_sinParser.RULE_exprReturn);
	    try {
	        this.state = 199;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 197;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 198;
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
	    this.enterRule(localctx, 42, MiuLanguage_sinParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
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
MiuLanguage_sinParser.RULE_checkreturnFunction = 3;
MiuLanguage_sinParser.RULE_paramList = 4;
MiuLanguage_sinParser.RULE_param = 5;
MiuLanguage_sinParser.RULE_body = 6;
MiuLanguage_sinParser.RULE_bodyR = 7;
MiuLanguage_sinParser.RULE_statementR = 8;
MiuLanguage_sinParser.RULE_functionCall = 9;
MiuLanguage_sinParser.RULE_functionCallVar = 10;
MiuLanguage_sinParser.RULE_argList = 11;
MiuLanguage_sinParser.RULE_statement = 12;
MiuLanguage_sinParser.RULE_assignment = 13;
MiuLanguage_sinParser.RULE_controlStructure = 14;
MiuLanguage_sinParser.RULE_ifStatement = 15;
MiuLanguage_sinParser.RULE_elseIfStatement = 16;
MiuLanguage_sinParser.RULE_forStatement = 17;
MiuLanguage_sinParser.RULE_comparisonExprADD = 18;
MiuLanguage_sinParser.RULE_comparisonExpr = 19;
MiuLanguage_sinParser.RULE_exprReturn = 20;
MiuLanguage_sinParser.RULE_expr = 21;

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

	FN() {
	    return this.getToken(MiuLanguage_sinParser.FN, 0);
	};

	IDF() {
	    return this.getToken(MiuLanguage_sinParser.IDF, 0);
	};

	LPAREN() {
	    return this.getToken(MiuLanguage_sinParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(MiuLanguage_sinParser.RPAREN, 0);
	};

	checkreturnFunction() {
	    return this.getTypedRuleContext(CheckreturnFunctionContext,0);
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

	USE() {
	    return this.getToken(MiuLanguage_sinParser.USE, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_sinParser.ID);
	    } else {
	        return this.getToken(MiuLanguage_sinParser.ID, i);
	    }
	};


	PC() {
	    return this.getToken(MiuLanguage_sinParser.PC, 0);
	};

	PP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_sinParser.PP);
	    } else {
	        return this.getToken(MiuLanguage_sinParser.PP, i);
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
        this.ruleIndex = MiuLanguage_sinParser.RULE_checkreturnFunction;
    }

	ARROW() {
	    return this.getToken(MiuLanguage_sinParser.ARROW, 0);
	};

	TYPE() {
	    return this.getToken(MiuLanguage_sinParser.TYPE, 0);
	};

	bodyR() {
	    return this.getTypedRuleContext(BodyRContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterCheckreturnFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitCheckreturnFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitCheckreturnFunction(this);
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_sinParser.COMMA);
	    } else {
	        return this.getToken(MiuLanguage_sinParser.COMMA, i);
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

	ID() {
	    return this.getToken(MiuLanguage_sinParser.ID, 0);
	};

	P() {
	    return this.getToken(MiuLanguage_sinParser.P, 0);
	};

	TYPE() {
	    return this.getToken(MiuLanguage_sinParser.TYPE, 0);
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
        this.ruleIndex = MiuLanguage_sinParser.RULE_body;
    }

	LBRACE() {
	    return this.getToken(MiuLanguage_sinParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MiuLanguage_sinParser.RBRACE, 0);
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
	        listener.enterBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitBody(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = MiuLanguage_sinParser.RULE_bodyR;
    }

	LBRACE() {
	    return this.getToken(MiuLanguage_sinParser.LBRACE, 0);
	};

	statementR() {
	    return this.getTypedRuleContext(StatementRContext,0);
	};

	RBRACE() {
	    return this.getToken(MiuLanguage_sinParser.RBRACE, 0);
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
	        listener.enterBodyR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitBodyR(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitBodyR(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = MiuLanguage_sinParser.RULE_statementR;
    }

	RETURN() {
	    return this.getToken(MiuLanguage_sinParser.RETURN, 0);
	};

	exprReturn() {
	    return this.getTypedRuleContext(ExprReturnContext,0);
	};

	PC() {
	    return this.getToken(MiuLanguage_sinParser.PC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterStatementR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitStatementR(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitStatementR(this);
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

	IDF() {
	    return this.getToken(MiuLanguage_sinParser.IDF, 0);
	};

	LPAREN() {
	    return this.getToken(MiuLanguage_sinParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(MiuLanguage_sinParser.RPAREN, 0);
	};

	PC() {
	    return this.getToken(MiuLanguage_sinParser.PC, 0);
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

	ID() {
	    return this.getToken(MiuLanguage_sinParser.ID, 0);
	};

	DOT() {
	    return this.getToken(MiuLanguage_sinParser.DOT, 0);
	};

	IDF() {
	    return this.getToken(MiuLanguage_sinParser.IDF, 0);
	};

	LPAREN() {
	    return this.getToken(MiuLanguage_sinParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(MiuLanguage_sinParser.RPAREN, 0);
	};

	PC() {
	    return this.getToken(MiuLanguage_sinParser.PC, 0);
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

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_sinParser.ID);
	    } else {
	        return this.getToken(MiuLanguage_sinParser.ID, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_sinParser.STRING);
	    } else {
	        return this.getToken(MiuLanguage_sinParser.STRING, i);
	    }
	};


	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_sinParser.CHAR);
	    } else {
	        return this.getToken(MiuLanguage_sinParser.CHAR, i);
	    }
	};


	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_sinParser.INT);
	    } else {
	        return this.getToken(MiuLanguage_sinParser.INT, i);
	    }
	};


	FLOAT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_sinParser.FLOAT);
	    } else {
	        return this.getToken(MiuLanguage_sinParser.FLOAT, i);
	    }
	};


	BOOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_sinParser.BOOL);
	    } else {
	        return this.getToken(MiuLanguage_sinParser.BOOL, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_sinParser.COMMA);
	    } else {
	        return this.getToken(MiuLanguage_sinParser.COMMA, i);
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

	LET() {
	    return this.getToken(MiuLanguage_sinParser.LET, 0);
	};

	ID() {
	    return this.getToken(MiuLanguage_sinParser.ID, 0);
	};

	EQUAL() {
	    return this.getToken(MiuLanguage_sinParser.EQUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PC() {
	    return this.getToken(MiuLanguage_sinParser.PC, 0);
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

	IF() {
	    return this.getToken(MiuLanguage_sinParser.IF, 0);
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
	    return this.getToken(MiuLanguage_sinParser.ELSE, 0);
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

	ELSE() {
	    return this.getToken(MiuLanguage_sinParser.ELSE, 0);
	};

	IF() {
	    return this.getToken(MiuLanguage_sinParser.IF, 0);
	};

	comparisonExprADD() {
	    return this.getTypedRuleContext(ComparisonExprADDContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
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

	FOR() {
	    return this.getToken(MiuLanguage_sinParser.FOR, 0);
	};

	ID() {
	    return this.getToken(MiuLanguage_sinParser.ID, 0);
	};

	IN() {
	    return this.getToken(MiuLanguage_sinParser.IN, 0);
	};

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_sinParser.INT);
	    } else {
	        return this.getToken(MiuLanguage_sinParser.INT, i);
	    }
	};


	DOUBLE_DOT() {
	    return this.getToken(MiuLanguage_sinParser.DOUBLE_DOT, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
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
        this.ruleIndex = MiuLanguage_sinParser.RULE_comparisonExprADD;
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
	        return this.getTokens(MiuLanguage_sinParser.ADD_OPERATOR);
	    } else {
	        return this.getToken(MiuLanguage_sinParser.ADD_OPERATOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterComparisonExprADD(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitComparisonExprADD(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitComparisonExprADD(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = MiuLanguage_sinParser.RULE_comparisonExpr;
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
	    return this.getToken(MiuLanguage_sinParser.COMPARISON_OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterComparisonExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitComparisonExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitComparisonExpr(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = MiuLanguage_sinParser.RULE_exprReturn;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	comparisonExprADD() {
	    return this.getTypedRuleContext(ComparisonExprADDContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterExprReturn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitExprReturn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitExprReturn(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = MiuLanguage_sinParser.RULE_expr;
    }

	ID() {
	    return this.getToken(MiuLanguage_sinParser.ID, 0);
	};

	STRING() {
	    return this.getToken(MiuLanguage_sinParser.STRING, 0);
	};

	CHAR() {
	    return this.getToken(MiuLanguage_sinParser.CHAR, 0);
	};

	INT() {
	    return this.getToken(MiuLanguage_sinParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(MiuLanguage_sinParser.FLOAT, 0);
	};

	BOOL() {
	    return this.getToken(MiuLanguage_sinParser.BOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_sinListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_sinVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiuLanguage_sinParser.ProgramContext = ProgramContext; 
MiuLanguage_sinParser.FunctionDeclarationContext = FunctionDeclarationContext; 
MiuLanguage_sinParser.ModuleDeclarationContext = ModuleDeclarationContext; 
MiuLanguage_sinParser.CheckreturnFunctionContext = CheckreturnFunctionContext; 
MiuLanguage_sinParser.ParamListContext = ParamListContext; 
MiuLanguage_sinParser.ParamContext = ParamContext; 
MiuLanguage_sinParser.BodyContext = BodyContext; 
MiuLanguage_sinParser.BodyRContext = BodyRContext; 
MiuLanguage_sinParser.StatementRContext = StatementRContext; 
MiuLanguage_sinParser.FunctionCallContext = FunctionCallContext; 
MiuLanguage_sinParser.FunctionCallVarContext = FunctionCallVarContext; 
MiuLanguage_sinParser.ArgListContext = ArgListContext; 
MiuLanguage_sinParser.StatementContext = StatementContext; 
MiuLanguage_sinParser.AssignmentContext = AssignmentContext; 
MiuLanguage_sinParser.ControlStructureContext = ControlStructureContext; 
MiuLanguage_sinParser.IfStatementContext = IfStatementContext; 
MiuLanguage_sinParser.ElseIfStatementContext = ElseIfStatementContext; 
MiuLanguage_sinParser.ForStatementContext = ForStatementContext; 
MiuLanguage_sinParser.ComparisonExprADDContext = ComparisonExprADDContext; 
MiuLanguage_sinParser.ComparisonExprContext = ComparisonExprContext; 
MiuLanguage_sinParser.ExprReturnContext = ExprReturnContext; 
MiuLanguage_sinParser.ExprContext = ExprContext; 

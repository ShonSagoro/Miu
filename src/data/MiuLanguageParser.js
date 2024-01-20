// Generated from ./MiuLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiuLanguageListener from './MiuLanguageListener.js';
const serializedATN = [4,1,31,183,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,5,0,43,8,0,10,0,12,0,46,9,0,1,1,1,1,1,1,1,1,3,1,52,8,1,1,1,1,1,1,1,
1,2,1,2,1,2,1,2,5,2,61,8,2,10,2,12,2,64,9,2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,
72,8,3,1,4,1,4,1,4,5,4,77,8,4,10,4,12,4,80,9,4,1,5,1,5,1,5,1,5,1,6,1,6,5,
6,88,8,6,10,6,12,6,91,9,6,1,6,1,6,1,7,1,7,5,7,97,8,7,10,7,12,7,100,9,7,1,
7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,3,9,112,8,9,1,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,10,3,10,122,8,10,1,10,1,10,1,10,1,11,1,11,1,11,5,11,130,8,11,
10,11,12,11,133,9,11,1,12,1,12,1,12,1,12,3,12,139,8,12,1,13,1,13,1,13,1,
13,1,13,1,13,1,14,1,14,3,14,149,8,14,1,15,1,15,1,15,1,15,5,15,155,8,15,10,
15,12,15,158,9,15,1,15,1,15,3,15,162,8,15,1,16,1,16,1,16,1,16,1,16,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,0,
0,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,1,2,0,24,28,
30,30,179,0,44,1,0,0,0,2,47,1,0,0,0,4,56,1,0,0,0,6,71,1,0,0,0,8,73,1,0,0,
0,10,81,1,0,0,0,12,85,1,0,0,0,14,94,1,0,0,0,16,104,1,0,0,0,18,108,1,0,0,
0,20,116,1,0,0,0,22,126,1,0,0,0,24,138,1,0,0,0,26,140,1,0,0,0,28,148,1,0,
0,0,30,150,1,0,0,0,32,163,1,0,0,0,34,168,1,0,0,0,36,176,1,0,0,0,38,180,1,
0,0,0,40,43,3,4,2,0,41,43,3,2,1,0,42,40,1,0,0,0,42,41,1,0,0,0,43,46,1,0,
0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,1,1,0,0,0,46,44,1,0,0,0,47,48,5,1,0,0,
48,49,5,29,0,0,49,51,5,2,0,0,50,52,3,8,4,0,51,50,1,0,0,0,51,52,1,0,0,0,52,
53,1,0,0,0,53,54,5,3,0,0,54,55,3,6,3,0,55,3,1,0,0,0,56,57,5,4,0,0,57,62,
5,30,0,0,58,59,5,5,0,0,59,61,5,30,0,0,60,58,1,0,0,0,61,64,1,0,0,0,62,60,
1,0,0,0,62,63,1,0,0,0,63,65,1,0,0,0,64,62,1,0,0,0,65,66,5,6,0,0,66,5,1,0,
0,0,67,68,5,7,0,0,68,69,5,23,0,0,69,72,3,14,7,0,70,72,3,12,6,0,71,67,1,0,
0,0,71,70,1,0,0,0,72,7,1,0,0,0,73,78,3,10,5,0,74,75,5,8,0,0,75,77,3,10,5,
0,76,74,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,9,1,0,0,0,80,
78,1,0,0,0,81,82,5,30,0,0,82,83,5,9,0,0,83,84,5,23,0,0,84,11,1,0,0,0,85,
89,5,10,0,0,86,88,3,24,12,0,87,86,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,
90,1,0,0,0,90,92,1,0,0,0,91,89,1,0,0,0,92,93,5,11,0,0,93,13,1,0,0,0,94,98,
5,10,0,0,95,97,3,24,12,0,96,95,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,
1,0,0,0,99,101,1,0,0,0,100,98,1,0,0,0,101,102,3,16,8,0,102,103,5,11,0,0,
103,15,1,0,0,0,104,105,5,12,0,0,105,106,3,38,19,0,106,107,5,6,0,0,107,17,
1,0,0,0,108,109,5,29,0,0,109,111,5,2,0,0,110,112,3,22,11,0,111,110,1,0,0,
0,111,112,1,0,0,0,112,113,1,0,0,0,113,114,5,3,0,0,114,115,5,6,0,0,115,19,
1,0,0,0,116,117,5,30,0,0,117,118,5,13,0,0,118,119,5,29,0,0,119,121,5,2,0,
0,120,122,3,22,11,0,121,120,1,0,0,0,121,122,1,0,0,0,122,123,1,0,0,0,123,
124,5,3,0,0,124,125,5,6,0,0,125,21,1,0,0,0,126,131,7,0,0,0,127,128,5,8,0,
0,128,130,7,0,0,0,129,127,1,0,0,0,130,133,1,0,0,0,131,129,1,0,0,0,131,132,
1,0,0,0,132,23,1,0,0,0,133,131,1,0,0,0,134,139,3,26,13,0,135,139,3,18,9,
0,136,139,3,20,10,0,137,139,3,28,14,0,138,134,1,0,0,0,138,135,1,0,0,0,138,
136,1,0,0,0,138,137,1,0,0,0,139,25,1,0,0,0,140,141,5,14,0,0,141,142,5,30,
0,0,142,143,5,15,0,0,143,144,3,38,19,0,144,145,5,6,0,0,145,27,1,0,0,0,146,
149,3,30,15,0,147,149,3,34,17,0,148,146,1,0,0,0,148,147,1,0,0,0,149,29,1,
0,0,0,150,151,5,16,0,0,151,152,3,36,18,0,152,156,3,12,6,0,153,155,3,32,16,
0,154,153,1,0,0,0,155,158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,161,
1,0,0,0,158,156,1,0,0,0,159,160,5,17,0,0,160,162,3,12,6,0,161,159,1,0,0,
0,161,162,1,0,0,0,162,31,1,0,0,0,163,164,5,17,0,0,164,165,5,16,0,0,165,166,
3,36,18,0,166,167,3,12,6,0,167,33,1,0,0,0,168,169,5,18,0,0,169,170,5,30,
0,0,170,171,5,19,0,0,171,172,5,28,0,0,172,173,5,20,0,0,173,174,5,28,0,0,
174,175,3,12,6,0,175,35,1,0,0,0,176,177,3,38,19,0,177,178,5,21,0,0,178,179,
3,38,19,0,179,37,1,0,0,0,180,181,7,0,0,0,181,39,1,0,0,0,15,42,44,51,62,71,
78,89,98,111,121,131,138,148,156,161];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiuLanguageParser extends antlr4.Parser {

    static grammarFileName = "MiuLanguage.g4";
    static literalNames = [ null, "'fn'", "'('", "')'", "'use'", "'::'", 
                            "';'", "'->'", "','", "':'", "'{'", "'}'", "'return'", 
                            "'.'", "'let'", "'='", "'if'", "'else'", "'for'", 
                            "'in'", "'..'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "COMPARISON_OPERATOR", 
                             "ADD_OPERATOR", "TYPE", "BOOL", "STRING", "CHAR", 
                             "FLOAT", "INT", "IDF", "ID", "WS" ];
    static ruleNames = [ "program", "functionDeclaration", "moduleDeclaration", 
                         "checkreturnFunction", "paramList", "param", "body", 
                         "bodyR", "statementR", "functionCall", "functionCallVar", 
                         "argList", "statement", "assignment", "controlStructure", 
                         "ifStatement", "elseIfStatement", "forStatement", 
                         "comparisonExpr", "expr" ];

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
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===4) {
	            this.state = 42;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	                this.state = 40;
	                this.moduleDeclaration();
	                break;
	            case 1:
	                this.state = 41;
	                this.functionDeclaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 46;
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



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiuLanguageParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(MiuLanguageParser.T__0);
	        this.state = 48;
	        this.match(MiuLanguageParser.IDF);
	        this.state = 49;
	        this.match(MiuLanguageParser.T__1);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 50;
	            this.paramList();
	        }

	        this.state = 53;
	        this.match(MiuLanguageParser.T__2);
	        this.state = 54;
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
	        this.state = 56;
	        this.match(MiuLanguageParser.T__3);
	        this.state = 57;
	        this.match(MiuLanguageParser.ID);
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 58;
	            this.match(MiuLanguageParser.T__4);
	            this.state = 59;
	            this.match(MiuLanguageParser.ID);
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 65;
	        this.match(MiuLanguageParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.match(MiuLanguageParser.T__6);
	            this.state = 68;
	            this.match(MiuLanguageParser.TYPE);
	            this.state = 69;
	            this.bodyR();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
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
	        this.state = 73;
	        this.param();
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 74;
	            this.match(MiuLanguageParser.T__7);
	            this.state = 75;
	            this.param();
	            this.state = 80;
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
	        this.state = 81;
	        this.match(MiuLanguageParser.ID);
	        this.state = 82;
	        this.match(MiuLanguageParser.T__8);
	        this.state = 83;
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
	        this.state = 85;
	        this.match(MiuLanguageParser.T__9);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1610956800) !== 0)) {
	            this.state = 86;
	            this.statement();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 92;
	        this.match(MiuLanguageParser.T__10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 94;
	        this.match(MiuLanguageParser.T__9);
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1610956800) !== 0)) {
	            this.state = 95;
	            this.statement();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 101;
	        this.statementR();
	        this.state = 102;
	        this.match(MiuLanguageParser.T__10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 104;
	        this.match(MiuLanguageParser.T__11);
	        this.state = 105;
	        this.expr();
	        this.state = 106;
	        this.match(MiuLanguageParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 108;
	        this.match(MiuLanguageParser.IDF);
	        this.state = 109;
	        this.match(MiuLanguageParser.T__1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0)) {
	            this.state = 110;
	            this.argList();
	        }

	        this.state = 113;
	        this.match(MiuLanguageParser.T__2);
	        this.state = 114;
	        this.match(MiuLanguageParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 116;
	        this.match(MiuLanguageParser.ID);
	        this.state = 117;
	        this.match(MiuLanguageParser.T__12);
	        this.state = 118;
	        this.match(MiuLanguageParser.IDF);
	        this.state = 119;
	        this.match(MiuLanguageParser.T__1);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0)) {
	            this.state = 120;
	            this.argList();
	        }

	        this.state = 123;
	        this.match(MiuLanguageParser.T__2);
	        this.state = 124;
	        this.match(MiuLanguageParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 126;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 127;
	            this.match(MiuLanguageParser.T__7);
	            this.state = 128;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593835520) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 133;
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
	        this.state = 138;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 134;
	            this.assignment();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 135;
	            this.functionCall();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 136;
	            this.functionCallVar();
	            break;
	        case 16:
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 137;
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
	        this.state = 140;
	        this.match(MiuLanguageParser.T__13);
	        this.state = 141;
	        this.match(MiuLanguageParser.ID);
	        this.state = 142;
	        this.match(MiuLanguageParser.T__14);
	        this.state = 143;
	        this.expr();
	        this.state = 144;
	        this.match(MiuLanguageParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 148;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 146;
	            this.ifStatement();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 147;
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
	        this.state = 150;
	        this.match(MiuLanguageParser.T__15);
	        this.state = 151;
	        this.comparisonExpr();
	        this.state = 152;
	        this.body();
	        this.state = 156;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 153;
	                this.elseIfStatement(); 
	            }
	            this.state = 158;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 159;
	            this.match(MiuLanguageParser.T__16);
	            this.state = 160;
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
	        this.state = 163;
	        this.match(MiuLanguageParser.T__16);
	        this.state = 164;
	        this.match(MiuLanguageParser.T__15);
	        this.state = 165;
	        this.comparisonExpr();
	        this.state = 166;
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
	        this.state = 168;
	        this.match(MiuLanguageParser.T__17);
	        this.state = 169;
	        this.match(MiuLanguageParser.ID);
	        this.state = 170;
	        this.match(MiuLanguageParser.T__18);
	        this.state = 171;
	        this.match(MiuLanguageParser.INT);
	        this.state = 172;
	        this.match(MiuLanguageParser.T__19);
	        this.state = 173;
	        this.match(MiuLanguageParser.INT);
	        this.state = 174;
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



	comparisonExpr() {
	    let localctx = new ComparisonExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, MiuLanguageParser.RULE_comparisonExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.expr();
	        this.state = 177;
	        this.match(MiuLanguageParser.COMPARISON_OPERATOR);
	        this.state = 178;
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, MiuLanguageParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
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
MiuLanguageParser.T__0 = 1;
MiuLanguageParser.T__1 = 2;
MiuLanguageParser.T__2 = 3;
MiuLanguageParser.T__3 = 4;
MiuLanguageParser.T__4 = 5;
MiuLanguageParser.T__5 = 6;
MiuLanguageParser.T__6 = 7;
MiuLanguageParser.T__7 = 8;
MiuLanguageParser.T__8 = 9;
MiuLanguageParser.T__9 = 10;
MiuLanguageParser.T__10 = 11;
MiuLanguageParser.T__11 = 12;
MiuLanguageParser.T__12 = 13;
MiuLanguageParser.T__13 = 14;
MiuLanguageParser.T__14 = 15;
MiuLanguageParser.T__15 = 16;
MiuLanguageParser.T__16 = 17;
MiuLanguageParser.T__17 = 18;
MiuLanguageParser.T__18 = 19;
MiuLanguageParser.T__19 = 20;
MiuLanguageParser.COMPARISON_OPERATOR = 21;
MiuLanguageParser.ADD_OPERATOR = 22;
MiuLanguageParser.TYPE = 23;
MiuLanguageParser.BOOL = 24;
MiuLanguageParser.STRING = 25;
MiuLanguageParser.CHAR = 26;
MiuLanguageParser.FLOAT = 27;
MiuLanguageParser.INT = 28;
MiuLanguageParser.IDF = 29;
MiuLanguageParser.ID = 30;
MiuLanguageParser.WS = 31;

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
MiuLanguageParser.RULE_comparisonExpr = 18;
MiuLanguageParser.RULE_expr = 19;

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

	IDF() {
	    return this.getToken(MiuLanguageParser.IDF, 0);
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

	statementR() {
	    return this.getTypedRuleContext(StatementRContext,0);
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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

	IDF() {
	    return this.getToken(MiuLanguageParser.IDF, 0);
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

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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

	comparisonExpr() {
	    return this.getTypedRuleContext(ComparisonExprContext,0);
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

	comparisonExpr() {
	    return this.getTypedRuleContext(ComparisonExprContext,0);
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

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
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
MiuLanguageParser.ComparisonExprContext = ComparisonExprContext; 
MiuLanguageParser.ExprContext = ExprContext; 

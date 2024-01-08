// Generated from ./MiuLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiuLanguageListener from './MiuLanguageListener.js';
const serializedATN = [4,1,18,123,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,5,0,23,8,0,10,0,12,0,26,
9,0,1,1,1,1,4,1,30,8,1,11,1,12,1,31,1,1,1,1,4,1,36,8,1,11,1,12,1,37,5,1,
40,8,1,10,1,12,1,43,9,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,51,8,2,1,2,1,2,1,2,5,
2,56,8,2,10,2,12,2,59,9,2,1,2,1,2,1,3,4,3,64,8,3,11,3,12,3,65,1,3,1,3,1,
3,1,3,3,3,72,8,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,80,8,4,10,4,12,4,83,9,4,1,5,
4,5,86,8,5,11,5,12,5,87,1,5,1,5,1,5,1,6,1,6,1,6,3,6,96,8,6,1,7,4,7,99,8,
7,11,7,12,7,100,1,7,1,7,4,7,105,8,7,11,7,12,7,106,5,7,109,8,7,10,7,12,7,
112,9,7,1,8,1,8,1,9,1,9,1,9,3,9,119,8,9,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,
12,14,16,18,0,1,1,0,12,12,129,0,24,1,0,0,0,2,27,1,0,0,0,4,46,1,0,0,0,6,63,
1,0,0,0,8,76,1,0,0,0,10,85,1,0,0,0,12,95,1,0,0,0,14,98,1,0,0,0,16,113,1,
0,0,0,18,115,1,0,0,0,20,23,3,4,2,0,21,23,3,2,1,0,22,20,1,0,0,0,22,21,1,0,
0,0,23,26,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,1,1,0,0,0,26,24,1,0,0,0,
27,29,5,1,0,0,28,30,5,14,0,0,29,28,1,0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,
32,1,0,0,0,32,41,1,0,0,0,33,35,5,2,0,0,34,36,5,14,0,0,35,34,1,0,0,0,36,37,
1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,33,1,0,0,0,40,43,1,
0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,5,3,
0,0,45,3,1,0,0,0,46,47,5,4,0,0,47,48,5,15,0,0,48,50,5,5,0,0,49,51,3,8,4,
0,50,49,1,0,0,0,50,51,1,0,0,0,51,52,1,0,0,0,52,53,5,6,0,0,53,57,5,7,0,0,
54,56,3,16,8,0,55,54,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,
60,1,0,0,0,59,57,1,0,0,0,60,61,5,8,0,0,61,5,1,0,0,0,62,64,5,14,0,0,63,62,
1,0,0,0,64,65,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,68,5,
9,0,0,68,69,5,15,0,0,69,71,5,5,0,0,70,72,3,12,6,0,71,70,1,0,0,0,71,72,1,
0,0,0,72,73,1,0,0,0,73,74,5,6,0,0,74,75,5,3,0,0,75,7,1,0,0,0,76,81,3,10,
5,0,77,78,5,10,0,0,78,80,3,10,5,0,79,77,1,0,0,0,80,83,1,0,0,0,81,79,1,0,
0,0,81,82,1,0,0,0,82,9,1,0,0,0,83,81,1,0,0,0,84,86,5,14,0,0,85,84,1,0,0,
0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,90,5,11,0,0,
90,91,5,17,0,0,91,11,1,0,0,0,92,96,3,14,7,0,93,96,5,16,0,0,94,96,3,18,9,
0,95,92,1,0,0,0,95,93,1,0,0,0,95,94,1,0,0,0,96,13,1,0,0,0,97,99,5,14,0,0,
98,97,1,0,0,0,99,100,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,110,1,0,
0,0,102,104,5,10,0,0,103,105,5,14,0,0,104,103,1,0,0,0,105,106,1,0,0,0,106,
104,1,0,0,0,106,107,1,0,0,0,107,109,1,0,0,0,108,102,1,0,0,0,109,112,1,0,
0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,15,1,0,0,0,112,110,1,0,0,0,113,114,
3,6,3,0,114,17,1,0,0,0,115,118,5,12,0,0,116,119,5,13,0,0,117,119,8,0,0,0,
118,116,1,0,0,0,118,117,1,0,0,0,119,120,1,0,0,0,120,121,5,12,0,0,121,19,
1,0,0,0,16,22,24,31,37,41,50,57,65,71,81,87,95,100,106,110,118];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiuLanguageParser extends antlr4.Parser {

    static grammarFileName = "MiuLanguage.g4";
    static literalNames = [ null, "'use'", "'::'", "';'", "'fn'", "'('", 
                            "')'", "'{'", "'}'", "'.'", "','", "':'", "'''", 
                            "'\\''" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "Var", 
                             "Fname", "String", "Vtype", "WS" ];
    static ruleNames = [ "program", "modularCall", "function", "varFunctionStatement", 
                         "paramRe", "param", "param2", "paramSend", "statement", 
                         "char" ];

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
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===4) {
	            this.state = 22;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	                this.state = 20;
	                this.function_();
	                break;
	            case 1:
	                this.state = 21;
	                this.modularCall();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 26;
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



	modularCall() {
	    let localctx = new ModularCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiuLanguageParser.RULE_modularCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(MiuLanguageParser.T__0);
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.match(MiuLanguageParser.Var);
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 33;
	            this.match(MiuLanguageParser.T__1);
	            this.state = 35; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 34;
	                this.match(MiuLanguageParser.Var);
	                this.state = 37; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===14);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this.match(MiuLanguageParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiuLanguageParser.RULE_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(MiuLanguageParser.T__3);
	        this.state = 47;
	        this.match(MiuLanguageParser.Fname);
	        this.state = 48;
	        this.match(MiuLanguageParser.T__4);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 49;
	            this.paramRe();
	        }

	        this.state = 52;
	        this.match(MiuLanguageParser.T__5);
	        this.state = 53;
	        this.match(MiuLanguageParser.T__6);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 54;
	            this.statement();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 60;
	        this.match(MiuLanguageParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varFunctionStatement() {
	    let localctx = new VarFunctionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiuLanguageParser.RULE_varFunctionStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 62;
	            this.match(MiuLanguageParser.Var);
	            this.state = 65; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 67;
	        this.match(MiuLanguageParser.T__8);
	        this.state = 68;
	        this.match(MiuLanguageParser.Fname);
	        this.state = 69;
	        this.match(MiuLanguageParser.T__4);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 86016) !== 0)) {
	            this.state = 70;
	            this.param2();
	        }

	        this.state = 73;
	        this.match(MiuLanguageParser.T__5);
	        this.state = 74;
	        this.match(MiuLanguageParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paramRe() {
	    let localctx = new ParamReContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiuLanguageParser.RULE_paramRe);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.param();
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 77;
	            this.match(MiuLanguageParser.T__9);
	            this.state = 78;
	            this.param();
	            this.state = 83;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 84;
	            this.match(MiuLanguageParser.Var);
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 89;
	        this.match(MiuLanguageParser.T__10);
	        this.state = 90;
	        this.match(MiuLanguageParser.Vtype);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	param2() {
	    let localctx = new Param2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiuLanguageParser.RULE_param2);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.state = 92;
	            this.paramSend();
	            break;
	        case 16:
	            this.state = 93;
	            this.match(MiuLanguageParser.String);
	            break;
	        case 12:
	            this.state = 94;
	            this.char_();
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



	paramSend() {
	    let localctx = new ParamSendContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiuLanguageParser.RULE_paramSend);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 97;
	            this.match(MiuLanguageParser.Var);
	            this.state = 100; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 102;
	            this.match(MiuLanguageParser.T__9);
	            this.state = 104; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 103;
	                this.match(MiuLanguageParser.Var);
	                this.state = 106; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===14);
	            this.state = 112;
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
	    this.enterRule(localctx, 16, MiuLanguageParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.varFunctionStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	char_() {
	    let localctx = new CharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiuLanguageParser.RULE_char);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(MiuLanguageParser.T__11);
	        this.state = 118;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 116;
	            this.match(MiuLanguageParser.T__12);
	            break;

	        case 2:
	            this.state = 117;
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===12) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        }
	        this.state = 120;
	        this.match(MiuLanguageParser.T__11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
MiuLanguageParser.Var = 14;
MiuLanguageParser.Fname = 15;
MiuLanguageParser.String = 16;
MiuLanguageParser.Vtype = 17;
MiuLanguageParser.WS = 18;

MiuLanguageParser.RULE_program = 0;
MiuLanguageParser.RULE_modularCall = 1;
MiuLanguageParser.RULE_function = 2;
MiuLanguageParser.RULE_varFunctionStatement = 3;
MiuLanguageParser.RULE_paramRe = 4;
MiuLanguageParser.RULE_param = 5;
MiuLanguageParser.RULE_param2 = 6;
MiuLanguageParser.RULE_paramSend = 7;
MiuLanguageParser.RULE_statement = 8;
MiuLanguageParser.RULE_char = 9;

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

	function_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionContext);
	    } else {
	        return this.getTypedRuleContext(FunctionContext,i);
	    }
	};

	modularCall = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ModularCallContext);
	    } else {
	        return this.getTypedRuleContext(ModularCallContext,i);
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



class ModularCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_modularCall;
    }

	Var = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.Var);
	    } else {
	        return this.getToken(MiuLanguageParser.Var, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterModularCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitModularCall(this);
		}
	}


}



class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_function;
    }

	Fname() {
	    return this.getToken(MiuLanguageParser.Fname, 0);
	};

	paramRe() {
	    return this.getTypedRuleContext(ParamReContext,0);
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
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitFunction(this);
		}
	}


}



class VarFunctionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_varFunctionStatement;
    }

	Fname() {
	    return this.getToken(MiuLanguageParser.Fname, 0);
	};

	Var = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.Var);
	    } else {
	        return this.getToken(MiuLanguageParser.Var, i);
	    }
	};


	param2() {
	    return this.getTypedRuleContext(Param2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterVarFunctionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitVarFunctionStatement(this);
		}
	}


}



class ParamReContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_paramRe;
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
	        listener.enterParamRe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitParamRe(this);
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

	Vtype() {
	    return this.getToken(MiuLanguageParser.Vtype, 0);
	};

	Var = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.Var);
	    } else {
	        return this.getToken(MiuLanguageParser.Var, i);
	    }
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



class Param2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_param2;
    }

	paramSend() {
	    return this.getTypedRuleContext(ParamSendContext,0);
	};

	String() {
	    return this.getToken(MiuLanguageParser.String, 0);
	};

	char_() {
	    return this.getTypedRuleContext(CharContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterParam2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitParam2(this);
		}
	}


}



class ParamSendContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_paramSend;
    }

	Var = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.Var);
	    } else {
	        return this.getToken(MiuLanguageParser.Var, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterParamSend(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitParamSend(this);
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

	varFunctionStatement() {
	    return this.getTypedRuleContext(VarFunctionStatementContext,0);
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



class CharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_char;
    }


	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterChar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitChar(this);
		}
	}


}




MiuLanguageParser.ProgramContext = ProgramContext; 
MiuLanguageParser.ModularCallContext = ModularCallContext; 
MiuLanguageParser.FunctionContext = FunctionContext; 
MiuLanguageParser.VarFunctionStatementContext = VarFunctionStatementContext; 
MiuLanguageParser.ParamReContext = ParamReContext; 
MiuLanguageParser.ParamContext = ParamContext; 
MiuLanguageParser.Param2Context = Param2Context; 
MiuLanguageParser.ParamSendContext = ParamSendContext; 
MiuLanguageParser.StatementContext = StatementContext; 
MiuLanguageParser.CharContext = CharContext; 

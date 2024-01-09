// Generated from ./MiuLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiuLanguageListener from './MiuLanguageListener.js';
const serializedATN = [4,1,31,119,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,5,
0,27,8,0,10,0,12,0,30,9,0,1,1,1,1,1,1,5,1,35,8,1,10,1,12,1,38,9,1,1,1,1,
1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,49,8,3,1,3,1,3,1,3,5,3,54,8,3,10,3,12,
3,57,9,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,65,8,4,1,5,1,5,1,5,1,5,1,5,3,5,72,8,
5,1,5,1,5,1,5,1,6,1,6,1,6,3,6,80,8,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,88,8,7,
10,7,12,7,91,9,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,103,8,9,10,
9,12,9,106,9,9,1,9,1,9,1,10,1,10,1,10,3,10,113,8,10,1,11,1,11,1,11,1,11,
1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,1,2,0,19,20,28,30,120,0,28,
1,0,0,0,2,31,1,0,0,0,4,41,1,0,0,0,6,44,1,0,0,0,8,64,1,0,0,0,10,66,1,0,0,
0,12,76,1,0,0,0,14,84,1,0,0,0,16,92,1,0,0,0,18,94,1,0,0,0,20,112,1,0,0,0,
22,114,1,0,0,0,24,27,3,6,3,0,25,27,3,2,1,0,26,24,1,0,0,0,26,25,1,0,0,0,27,
30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,1,1,0,0,0,30,28,1,0,0,0,31,32,
5,1,0,0,32,36,5,20,0,0,33,35,3,4,2,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,
0,0,0,36,37,1,0,0,0,37,39,1,0,0,0,38,36,1,0,0,0,39,40,5,2,0,0,40,3,1,0,0,
0,41,42,5,3,0,0,42,43,5,20,0,0,43,5,1,0,0,0,44,45,5,4,0,0,45,46,5,20,0,0,
46,48,5,5,0,0,47,49,5,15,0,0,48,47,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,
51,5,6,0,0,51,55,5,7,0,0,52,54,3,8,4,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,
1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,59,5,8,0,0,59,7,1,0,
0,0,60,65,3,10,5,0,61,65,3,22,11,0,62,65,3,12,6,0,63,65,3,18,9,0,64,60,1,
0,0,0,64,61,1,0,0,0,64,62,1,0,0,0,64,63,1,0,0,0,65,9,1,0,0,0,66,67,5,20,
0,0,67,68,5,9,0,0,68,69,5,20,0,0,69,71,5,5,0,0,70,72,3,14,7,0,71,70,1,0,
0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,74,5,6,0,0,74,75,5,2,0,0,75,11,1,0,0,
0,76,77,5,20,0,0,77,79,5,5,0,0,78,80,3,14,7,0,79,78,1,0,0,0,79,80,1,0,0,
0,80,81,1,0,0,0,81,82,5,6,0,0,82,83,5,2,0,0,83,13,1,0,0,0,84,89,3,16,8,0,
85,86,5,10,0,0,86,88,3,16,8,0,87,85,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,
89,90,1,0,0,0,90,15,1,0,0,0,91,89,1,0,0,0,92,93,7,0,0,0,93,17,1,0,0,0,94,
95,5,11,0,0,95,96,5,20,0,0,96,97,5,12,0,0,97,98,5,29,0,0,98,99,5,13,0,0,
99,100,3,20,10,0,100,104,5,7,0,0,101,103,3,8,4,0,102,101,1,0,0,0,103,106,
1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,104,1,0,0,0,
107,108,5,8,0,0,108,19,1,0,0,0,109,113,3,12,6,0,110,113,3,10,5,0,111,113,
5,29,0,0,112,109,1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,21,1,0,0,0,
114,115,5,14,0,0,115,116,5,16,0,0,116,117,5,2,0,0,117,23,1,0,0,0,11,26,28,
36,48,55,64,71,79,89,104,112];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiuLanguageParser extends antlr4.Parser {

    static grammarFileName = "MiuLanguage.g4";
    static literalNames = [ null, "'use'", "';'", "'::'", "'fn'", "'('", 
                            "')'", "'{'", "'}'", "'.'", "','", "'for'", 
                            "'in'", "'..'", "'let'", null, null, null, null, 
                            null, null, null, null, "'int'", "'float'", 
                            "'char'", "'string'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "Param", 
                             "Var", "VarD", "VarT", "VSTR", "ID", "REST_ID", 
                             "TYPES", "TINT", "TFLO", "TCHA", "TSTR", "VALUES", 
                             "VCHA", "VINT", "VFLO", "WS" ];
    static ruleNames = [ "program", "modularCall", "anotherDirectory", "dFunc", 
                         "statement", "varFunc", "func", "param2", "vParam", 
                         "for", "range", "var" ];

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
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===4) {
	            this.state = 26;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	                this.state = 24;
	                this.dFunc();
	                break;
	            case 1:
	                this.state = 25;
	                this.modularCall();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 30;
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
	        this.state = 31;
	        this.match(MiuLanguageParser.T__0);
	        this.state = 32;
	        this.match(MiuLanguageParser.ID);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 33;
	            this.anotherDirectory();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
	        this.match(MiuLanguageParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	anotherDirectory() {
	    let localctx = new AnotherDirectoryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiuLanguageParser.RULE_anotherDirectory);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(MiuLanguageParser.T__2);
	        this.state = 42;
	        this.match(MiuLanguageParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dFunc() {
	    let localctx = new DFuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiuLanguageParser.RULE_dFunc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(MiuLanguageParser.T__3);
	        this.state = 45;
	        this.match(MiuLanguageParser.ID);
	        this.state = 46;
	        this.match(MiuLanguageParser.T__4);
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 47;
	            this.match(MiuLanguageParser.Param);
	        }

	        this.state = 50;
	        this.match(MiuLanguageParser.T__5);
	        this.state = 51;
	        this.match(MiuLanguageParser.T__6);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1067008) !== 0)) {
	            this.state = 52;
	            this.statement();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 58;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiuLanguageParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 60;
	            this.varFunc();
	            break;

	        case 2:
	            this.state = 61;
	            this.var_();
	            break;

	        case 3:
	            this.state = 62;
	            this.func();
	            break;

	        case 4:
	            this.state = 63;
	            this.for_();
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



	varFunc() {
	    let localctx = new VarFuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiuLanguageParser.RULE_varFunc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(MiuLanguageParser.ID);
	        this.state = 67;
	        this.match(MiuLanguageParser.T__8);
	        this.state = 68;
	        this.match(MiuLanguageParser.ID);
	        this.state = 69;
	        this.match(MiuLanguageParser.T__4);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1880621056) !== 0)) {
	            this.state = 70;
	            this.param2();
	        }

	        this.state = 73;
	        this.match(MiuLanguageParser.T__5);
	        this.state = 74;
	        this.match(MiuLanguageParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func() {
	    let localctx = new FuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiuLanguageParser.RULE_func);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(MiuLanguageParser.ID);
	        this.state = 77;
	        this.match(MiuLanguageParser.T__4);
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1880621056) !== 0)) {
	            this.state = 78;
	            this.param2();
	        }

	        this.state = 81;
	        this.match(MiuLanguageParser.T__5);
	        this.state = 82;
	        this.match(MiuLanguageParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 14, MiuLanguageParser.RULE_param2);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.vParam();
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 85;
	            this.match(MiuLanguageParser.T__9);
	            this.state = 86;
	            this.vParam();
	            this.state = 91;
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



	vParam() {
	    let localctx = new VParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiuLanguageParser.RULE_vParam);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1880621056) !== 0))) {
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



	for_() {
	    let localctx = new ForContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiuLanguageParser.RULE_for);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(MiuLanguageParser.T__10);
	        this.state = 95;
	        this.match(MiuLanguageParser.ID);
	        this.state = 96;
	        this.match(MiuLanguageParser.T__11);
	        this.state = 97;
	        this.match(MiuLanguageParser.VINT);
	        this.state = 98;
	        this.match(MiuLanguageParser.T__12);
	        this.state = 99;
	        this.range();
	        this.state = 100;
	        this.match(MiuLanguageParser.T__6);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1067008) !== 0)) {
	            this.state = 101;
	            this.statement();
	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 107;
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



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MiuLanguageParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 109;
	            this.func();
	            break;

	        case 2:
	            this.state = 110;
	            this.varFunc();
	            break;

	        case 3:
	            this.state = 111;
	            this.match(MiuLanguageParser.VINT);
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



	var_() {
	    let localctx = new VarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MiuLanguageParser.RULE_var);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(MiuLanguageParser.T__13);
	        this.state = 115;
	        this.match(MiuLanguageParser.Var);
	        this.state = 116;
	        this.match(MiuLanguageParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
MiuLanguageParser.Param = 15;
MiuLanguageParser.Var = 16;
MiuLanguageParser.VarD = 17;
MiuLanguageParser.VarT = 18;
MiuLanguageParser.VSTR = 19;
MiuLanguageParser.ID = 20;
MiuLanguageParser.REST_ID = 21;
MiuLanguageParser.TYPES = 22;
MiuLanguageParser.TINT = 23;
MiuLanguageParser.TFLO = 24;
MiuLanguageParser.TCHA = 25;
MiuLanguageParser.TSTR = 26;
MiuLanguageParser.VALUES = 27;
MiuLanguageParser.VCHA = 28;
MiuLanguageParser.VINT = 29;
MiuLanguageParser.VFLO = 30;
MiuLanguageParser.WS = 31;

MiuLanguageParser.RULE_program = 0;
MiuLanguageParser.RULE_modularCall = 1;
MiuLanguageParser.RULE_anotherDirectory = 2;
MiuLanguageParser.RULE_dFunc = 3;
MiuLanguageParser.RULE_statement = 4;
MiuLanguageParser.RULE_varFunc = 5;
MiuLanguageParser.RULE_func = 6;
MiuLanguageParser.RULE_param2 = 7;
MiuLanguageParser.RULE_vParam = 8;
MiuLanguageParser.RULE_for = 9;
MiuLanguageParser.RULE_range = 10;
MiuLanguageParser.RULE_var = 11;

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

	dFunc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DFuncContext);
	    } else {
	        return this.getTypedRuleContext(DFuncContext,i);
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

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
	};

	anotherDirectory = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AnotherDirectoryContext);
	    } else {
	        return this.getTypedRuleContext(AnotherDirectoryContext,i);
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



class AnotherDirectoryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_anotherDirectory;
    }

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterAnotherDirectory(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitAnotherDirectory(this);
		}
	}


}



class DFuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_dFunc;
    }

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
	};

	Param() {
	    return this.getToken(MiuLanguageParser.Param, 0);
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
	        listener.enterDFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitDFunc(this);
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

	varFunc() {
	    return this.getTypedRuleContext(VarFuncContext,0);
	};

	var_() {
	    return this.getTypedRuleContext(VarContext,0);
	};

	func() {
	    return this.getTypedRuleContext(FuncContext,0);
	};

	for_() {
	    return this.getTypedRuleContext(ForContext,0);
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



class VarFuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_varFunc;
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


	param2() {
	    return this.getTypedRuleContext(Param2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterVarFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitVarFunc(this);
		}
	}


}



class FuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_func;
    }

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
	};

	param2() {
	    return this.getTypedRuleContext(Param2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitFunc(this);
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

	vParam = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VParamContext);
	    } else {
	        return this.getTypedRuleContext(VParamContext,i);
	    }
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



class VParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_vParam;
    }

	VSTR() {
	    return this.getToken(MiuLanguageParser.VSTR, 0);
	};

	VINT() {
	    return this.getToken(MiuLanguageParser.VINT, 0);
	};

	VFLO() {
	    return this.getToken(MiuLanguageParser.VFLO, 0);
	};

	VCHA() {
	    return this.getToken(MiuLanguageParser.VCHA, 0);
	};

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterVParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitVParam(this);
		}
	}


}



class ForContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_for;
    }

	ID() {
	    return this.getToken(MiuLanguageParser.ID, 0);
	};

	VINT() {
	    return this.getToken(MiuLanguageParser.VINT, 0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
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
	        listener.enterFor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitFor(this);
		}
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_range;
    }

	func() {
	    return this.getTypedRuleContext(FuncContext,0);
	};

	varFunc() {
	    return this.getTypedRuleContext(VarFuncContext,0);
	};

	VINT() {
	    return this.getToken(MiuLanguageParser.VINT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitRange(this);
		}
	}


}



class VarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_var;
    }

	Var() {
	    return this.getToken(MiuLanguageParser.Var, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitVar(this);
		}
	}


}




MiuLanguageParser.ProgramContext = ProgramContext; 
MiuLanguageParser.ModularCallContext = ModularCallContext; 
MiuLanguageParser.AnotherDirectoryContext = AnotherDirectoryContext; 
MiuLanguageParser.DFuncContext = DFuncContext; 
MiuLanguageParser.StatementContext = StatementContext; 
MiuLanguageParser.VarFuncContext = VarFuncContext; 
MiuLanguageParser.FuncContext = FuncContext; 
MiuLanguageParser.Param2Context = Param2Context; 
MiuLanguageParser.VParamContext = VParamContext; 
MiuLanguageParser.ForContext = ForContext; 
MiuLanguageParser.RangeContext = RangeContext; 
MiuLanguageParser.VarContext = VarContext; 

// Generated from ./MiuLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiuLanguageListener from './MiuLanguageListener.js';
const serializedATN = [4,1,35,227,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,1,0,1,0,5,0,53,8,0,10,0,
12,0,56,9,0,1,1,1,1,1,1,5,1,61,8,1,10,1,12,1,64,9,1,1,1,1,1,1,2,1,2,1,2,
1,3,1,3,1,3,1,3,3,3,75,8,3,1,3,1,3,1,3,1,4,1,4,3,4,82,8,4,1,5,1,5,1,5,1,
5,5,5,88,8,5,10,5,12,5,91,9,5,1,5,1,5,1,6,1,6,1,7,1,7,5,7,99,8,7,10,7,12,
7,102,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,5,8,111,8,8,10,8,12,8,114,9,8,1,9,
1,9,1,9,1,9,1,9,3,9,121,8,9,1,10,1,10,1,10,1,10,1,10,3,10,128,8,10,1,10,
1,10,1,10,1,11,1,11,1,11,3,11,136,8,11,1,11,1,11,1,11,1,12,1,12,1,12,5,12,
144,8,12,10,12,12,12,147,9,12,1,13,1,13,4,13,151,8,13,11,13,12,13,152,1,
13,1,13,1,13,3,13,158,8,13,1,14,5,14,161,8,14,10,14,12,14,164,9,14,1,14,
1,14,1,15,1,15,1,15,1,15,1,16,1,16,4,16,174,8,16,11,16,12,16,175,3,16,178,
8,16,1,17,4,17,181,8,17,11,17,12,17,182,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,5,18,193,8,18,10,18,12,18,196,9,18,1,18,1,18,1,19,1,19,1,19,1,19,
1,20,1,20,3,20,206,8,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,3,22,
217,8,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,0,0,25,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,0,1,2,0,22,22,28,
28,228,0,54,1,0,0,0,2,57,1,0,0,0,4,67,1,0,0,0,6,70,1,0,0,0,8,81,1,0,0,0,
10,83,1,0,0,0,12,94,1,0,0,0,14,96,1,0,0,0,16,105,1,0,0,0,18,120,1,0,0,0,
20,122,1,0,0,0,22,132,1,0,0,0,24,140,1,0,0,0,26,157,1,0,0,0,28,162,1,0,0,
0,30,167,1,0,0,0,32,177,1,0,0,0,34,180,1,0,0,0,36,184,1,0,0,0,38,199,1,0,
0,0,40,203,1,0,0,0,42,209,1,0,0,0,44,214,1,0,0,0,46,218,1,0,0,0,48,222,1,
0,0,0,50,53,3,6,3,0,51,53,3,2,1,0,52,50,1,0,0,0,52,51,1,0,0,0,53,56,1,0,
0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,1,1,0,0,0,56,54,1,0,0,0,57,58,5,1,0,0,
58,62,5,22,0,0,59,61,3,4,2,0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,
63,1,0,0,0,63,65,1,0,0,0,64,62,1,0,0,0,65,66,5,2,0,0,66,3,1,0,0,0,67,68,
5,3,0,0,68,69,5,22,0,0,69,5,1,0,0,0,70,71,5,4,0,0,71,72,5,22,0,0,72,74,5,
5,0,0,73,75,3,16,8,0,74,73,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,77,5,6,
0,0,77,78,3,8,4,0,78,7,1,0,0,0,79,82,3,10,5,0,80,82,3,14,7,0,81,79,1,0,0,
0,81,80,1,0,0,0,82,9,1,0,0,0,83,84,5,7,0,0,84,85,3,12,6,0,85,89,5,8,0,0,
86,88,3,28,14,0,87,86,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,
90,92,1,0,0,0,91,89,1,0,0,0,92,93,5,9,0,0,93,11,1,0,0,0,94,95,5,21,0,0,95,
13,1,0,0,0,96,100,5,8,0,0,97,99,3,18,9,0,98,97,1,0,0,0,99,102,1,0,0,0,100,
98,1,0,0,0,100,101,1,0,0,0,101,103,1,0,0,0,102,100,1,0,0,0,103,104,5,9,0,
0,104,15,1,0,0,0,105,106,5,22,0,0,106,112,5,19,0,0,107,108,5,10,0,0,108,
109,5,22,0,0,109,111,5,19,0,0,110,107,1,0,0,0,111,114,1,0,0,0,112,110,1,
0,0,0,112,113,1,0,0,0,113,17,1,0,0,0,114,112,1,0,0,0,115,121,3,20,10,0,116,
121,3,38,19,0,117,121,3,22,11,0,118,121,3,36,18,0,119,121,3,42,21,0,120,
115,1,0,0,0,120,116,1,0,0,0,120,117,1,0,0,0,120,118,1,0,0,0,120,119,1,0,
0,0,121,19,1,0,0,0,122,123,5,22,0,0,123,124,5,11,0,0,124,125,5,22,0,0,125,
127,5,5,0,0,126,128,3,24,12,0,127,126,1,0,0,0,127,128,1,0,0,0,128,129,1,
0,0,0,129,130,5,6,0,0,130,131,5,2,0,0,131,21,1,0,0,0,132,133,5,22,0,0,133,
135,5,5,0,0,134,136,3,24,12,0,135,134,1,0,0,0,135,136,1,0,0,0,136,137,1,
0,0,0,137,138,5,6,0,0,138,139,5,2,0,0,139,23,1,0,0,0,140,145,3,26,13,0,141,
142,5,10,0,0,142,144,3,26,13,0,143,141,1,0,0,0,144,147,1,0,0,0,145,143,1,
0,0,0,145,146,1,0,0,0,146,25,1,0,0,0,147,145,1,0,0,0,148,158,5,23,0,0,149,
151,5,20,0,0,150,149,1,0,0,0,151,152,1,0,0,0,152,150,1,0,0,0,152,153,1,0,
0,0,153,158,1,0,0,0,154,158,5,29,0,0,155,158,5,30,0,0,156,158,5,22,0,0,157,
148,1,0,0,0,157,150,1,0,0,0,157,154,1,0,0,0,157,155,1,0,0,0,157,156,1,0,
0,0,158,27,1,0,0,0,159,161,3,18,9,0,160,159,1,0,0,0,161,164,1,0,0,0,162,
160,1,0,0,0,162,163,1,0,0,0,163,165,1,0,0,0,164,162,1,0,0,0,165,166,3,30,
15,0,166,29,1,0,0,0,167,168,5,12,0,0,168,169,3,32,16,0,169,170,5,2,0,0,170,
31,1,0,0,0,171,178,3,46,23,0,172,174,5,35,0,0,173,172,1,0,0,0,174,175,1,
0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,1,0,0,0,177,171,1,0,0,0,177,
173,1,0,0,0,178,33,1,0,0,0,179,181,5,20,0,0,180,179,1,0,0,0,181,182,1,0,
0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,35,1,0,0,0,184,185,5,13,0,0,185,
186,5,22,0,0,186,187,5,14,0,0,187,188,3,34,17,0,188,189,5,15,0,0,189,190,
3,34,17,0,190,194,5,8,0,0,191,193,3,18,9,0,192,191,1,0,0,0,193,196,1,0,0,
0,194,192,1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,194,1,0,0,0,197,198,
5,9,0,0,198,37,1,0,0,0,199,200,5,16,0,0,200,201,3,40,20,0,201,202,5,2,0,
0,202,39,1,0,0,0,203,205,5,22,0,0,204,206,5,19,0,0,205,204,1,0,0,0,205,206,
1,0,0,0,206,207,1,0,0,0,207,208,5,18,0,0,208,41,1,0,0,0,209,210,5,22,0,0,
210,211,5,17,0,0,211,212,5,28,0,0,212,213,5,2,0,0,213,43,1,0,0,0,214,216,
3,46,23,0,215,217,3,48,24,0,216,215,1,0,0,0,216,217,1,0,0,0,217,45,1,0,0,
0,218,219,7,0,0,0,219,220,5,32,0,0,220,221,7,0,0,0,221,47,1,0,0,0,222,223,
5,33,0,0,223,224,5,32,0,0,224,225,7,0,0,0,225,49,1,0,0,0,21,52,54,62,74,
81,89,100,112,120,127,135,145,152,157,162,175,177,182,194,205,216];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiuLanguageParser extends antlr4.Parser {

    static grammarFileName = "MiuLanguage.g4";
    static literalNames = [ null, "'use'", "';'", "'::'", "'fn'", "'('", 
                            "')'", "'->'", "'{'", "'}'", "','", "'.'", "'return'", 
                            "'for'", "'in'", "'..'", "'let'", "'='", null, 
                            null, null, null, null, null, "'int'", "'float'", 
                            "'char'", "'string'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "VarD", "VarT", "VINT", "TYPES", 
                             "L", "VSTR", "TINT", "TFLO", "TCHA", "TSTR", 
                             "VALUES", "VFLO", "VCHA", "R", "SIG", "ADDSIG", 
                             "WS", "ANY" ];
    static ruleNames = [ "program", "modularCall", "anotherDirectory", "dFunc", 
                         "dDFunc", "wRFunc", "types", "wORFunc", "param", 
                         "statement", "varFunc", "func", "param2", "vParam", 
                         "statementR", "returnStatement", "returnData", 
                         "range", "for", "var", "varG", "varA", "conditions", 
                         "condition", "addConditions" ];

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
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===4) {
	            this.state = 52;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	                this.state = 50;
	                this.dFunc();
	                break;
	            case 1:
	                this.state = 51;
	                this.modularCall();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 56;
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
	        this.state = 57;
	        this.match(MiuLanguageParser.T__0);
	        this.state = 58;
	        this.match(MiuLanguageParser.L);
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 59;
	            this.anotherDirectory();
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 65;
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
	        this.state = 67;
	        this.match(MiuLanguageParser.T__2);
	        this.state = 68;
	        this.match(MiuLanguageParser.L);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 70;
	        this.match(MiuLanguageParser.T__3);
	        this.state = 71;
	        this.match(MiuLanguageParser.L);
	        this.state = 72;
	        this.match(MiuLanguageParser.T__4);
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 73;
	            this.param();
	        }

	        this.state = 76;
	        this.match(MiuLanguageParser.T__5);
	        this.state = 77;
	        this.dDFunc();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dDFunc() {
	    let localctx = new DDFuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiuLanguageParser.RULE_dDFunc);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.state = 79;
	            this.wRFunc();
	            break;
	        case 8:
	            this.state = 80;
	            this.wORFunc();
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



	wRFunc() {
	    let localctx = new WRFuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiuLanguageParser.RULE_wRFunc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.match(MiuLanguageParser.T__6);
	        this.state = 84;
	        this.types();
	        this.state = 85;
	        this.match(MiuLanguageParser.T__7);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4272128) !== 0)) {
	            this.state = 86;
	            this.statementR();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 92;
	        this.match(MiuLanguageParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	types() {
	    let localctx = new TypesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiuLanguageParser.RULE_types);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(MiuLanguageParser.TYPES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wORFunc() {
	    let localctx = new WORFuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiuLanguageParser.RULE_wORFunc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(MiuLanguageParser.T__7);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4268032) !== 0)) {
	            this.state = 97;
	            this.statement();
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 103;
	        this.match(MiuLanguageParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 16, MiuLanguageParser.RULE_param);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(MiuLanguageParser.L);
	        this.state = 106;
	        this.match(MiuLanguageParser.VarT);
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 107;
	            this.match(MiuLanguageParser.T__9);
	            this.state = 108;
	            this.match(MiuLanguageParser.L);
	            this.state = 109;
	            this.match(MiuLanguageParser.VarT);
	            this.state = 114;
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
	    this.enterRule(localctx, 18, MiuLanguageParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 115;
	            this.varFunc();
	            break;

	        case 2:
	            this.state = 116;
	            this.var_();
	            break;

	        case 3:
	            this.state = 117;
	            this.func();
	            break;

	        case 4:
	            this.state = 118;
	            this.for_();
	            break;

	        case 5:
	            this.state = 119;
	            this.varA();
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
	    this.enterRule(localctx, 20, MiuLanguageParser.RULE_varFunc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(MiuLanguageParser.L);
	        this.state = 123;
	        this.match(MiuLanguageParser.T__10);
	        this.state = 124;
	        this.match(MiuLanguageParser.L);
	        this.state = 125;
	        this.match(MiuLanguageParser.T__4);
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1624244224) !== 0)) {
	            this.state = 126;
	            this.param2();
	        }

	        this.state = 129;
	        this.match(MiuLanguageParser.T__5);
	        this.state = 130;
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
	    this.enterRule(localctx, 22, MiuLanguageParser.RULE_func);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(MiuLanguageParser.L);
	        this.state = 133;
	        this.match(MiuLanguageParser.T__4);
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1624244224) !== 0)) {
	            this.state = 134;
	            this.param2();
	        }

	        this.state = 137;
	        this.match(MiuLanguageParser.T__5);
	        this.state = 138;
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
	    this.enterRule(localctx, 24, MiuLanguageParser.RULE_param2);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.vParam();
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 141;
	            this.match(MiuLanguageParser.T__9);
	            this.state = 142;
	            this.vParam();
	            this.state = 147;
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
	    this.enterRule(localctx, 26, MiuLanguageParser.RULE_vParam);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            this.state = 148;
	            this.match(MiuLanguageParser.VSTR);
	            break;
	        case 20:
	            this.state = 150; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 149;
	                this.match(MiuLanguageParser.VINT);
	                this.state = 152; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===20);
	            break;
	        case 29:
	            this.state = 154;
	            this.match(MiuLanguageParser.VFLO);
	            break;
	        case 30:
	            this.state = 155;
	            this.match(MiuLanguageParser.VCHA);
	            break;
	        case 22:
	            this.state = 156;
	            this.match(MiuLanguageParser.L);
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



	statementR() {
	    let localctx = new StatementRContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MiuLanguageParser.RULE_statementR);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4268032) !== 0)) {
	            this.state = 159;
	            this.statement();
	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 165;
	        this.returnStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MiuLanguageParser.RULE_returnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(MiuLanguageParser.T__11);
	        this.state = 168;
	        this.returnData();
	        this.state = 169;
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



	returnData() {
	    let localctx = new ReturnDataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, MiuLanguageParser.RULE_returnData);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	        case 28:
	            this.state = 171;
	            this.condition();
	            break;
	        case 35:
	            this.state = 173; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 172;
	                this.match(MiuLanguageParser.ANY);
	                this.state = 175; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===35);
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



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, MiuLanguageParser.RULE_range);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 179;
	            this.match(MiuLanguageParser.VINT);
	            this.state = 182; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===20);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 36, MiuLanguageParser.RULE_for);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(MiuLanguageParser.T__12);
	        this.state = 185;
	        this.match(MiuLanguageParser.L);
	        this.state = 186;
	        this.match(MiuLanguageParser.T__13);
	        this.state = 187;
	        this.range();
	        this.state = 188;
	        this.match(MiuLanguageParser.T__14);
	        this.state = 189;
	        this.range();
	        this.state = 190;
	        this.match(MiuLanguageParser.T__7);
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4268032) !== 0)) {
	            this.state = 191;
	            this.statement();
	            this.state = 196;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 197;
	        this.match(MiuLanguageParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 38, MiuLanguageParser.RULE_var);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(MiuLanguageParser.T__15);
	        this.state = 200;
	        this.varG();
	        this.state = 201;
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



	varG() {
	    let localctx = new VarGContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, MiuLanguageParser.RULE_varG);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(MiuLanguageParser.L);
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 204;
	            this.match(MiuLanguageParser.VarT);
	        }

	        this.state = 207;
	        this.match(MiuLanguageParser.VarD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varA() {
	    let localctx = new VarAContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, MiuLanguageParser.RULE_varA);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(MiuLanguageParser.L);
	        this.state = 210;
	        this.match(MiuLanguageParser.T__16);
	        this.state = 211;
	        this.match(MiuLanguageParser.VALUES);
	        this.state = 212;
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



	conditions() {
	    let localctx = new ConditionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, MiuLanguageParser.RULE_conditions);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.condition();
	        this.state = 216;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===33) {
	            this.state = 215;
	            this.addConditions();
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, MiuLanguageParser.RULE_condition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===28)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 219;
	        this.match(MiuLanguageParser.SIG);
	        this.state = 220;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===28)) {
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



	addConditions() {
	    let localctx = new AddConditionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, MiuLanguageParser.RULE_addConditions);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(MiuLanguageParser.ADDSIG);
	        this.state = 223;
	        this.match(MiuLanguageParser.SIG);
	        this.state = 224;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===28)) {
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
MiuLanguageParser.VarD = 18;
MiuLanguageParser.VarT = 19;
MiuLanguageParser.VINT = 20;
MiuLanguageParser.TYPES = 21;
MiuLanguageParser.L = 22;
MiuLanguageParser.VSTR = 23;
MiuLanguageParser.TINT = 24;
MiuLanguageParser.TFLO = 25;
MiuLanguageParser.TCHA = 26;
MiuLanguageParser.TSTR = 27;
MiuLanguageParser.VALUES = 28;
MiuLanguageParser.VFLO = 29;
MiuLanguageParser.VCHA = 30;
MiuLanguageParser.R = 31;
MiuLanguageParser.SIG = 32;
MiuLanguageParser.ADDSIG = 33;
MiuLanguageParser.WS = 34;
MiuLanguageParser.ANY = 35;

MiuLanguageParser.RULE_program = 0;
MiuLanguageParser.RULE_modularCall = 1;
MiuLanguageParser.RULE_anotherDirectory = 2;
MiuLanguageParser.RULE_dFunc = 3;
MiuLanguageParser.RULE_dDFunc = 4;
MiuLanguageParser.RULE_wRFunc = 5;
MiuLanguageParser.RULE_types = 6;
MiuLanguageParser.RULE_wORFunc = 7;
MiuLanguageParser.RULE_param = 8;
MiuLanguageParser.RULE_statement = 9;
MiuLanguageParser.RULE_varFunc = 10;
MiuLanguageParser.RULE_func = 11;
MiuLanguageParser.RULE_param2 = 12;
MiuLanguageParser.RULE_vParam = 13;
MiuLanguageParser.RULE_statementR = 14;
MiuLanguageParser.RULE_returnStatement = 15;
MiuLanguageParser.RULE_returnData = 16;
MiuLanguageParser.RULE_range = 17;
MiuLanguageParser.RULE_for = 18;
MiuLanguageParser.RULE_var = 19;
MiuLanguageParser.RULE_varG = 20;
MiuLanguageParser.RULE_varA = 21;
MiuLanguageParser.RULE_conditions = 22;
MiuLanguageParser.RULE_condition = 23;
MiuLanguageParser.RULE_addConditions = 24;

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

	L() {
	    return this.getToken(MiuLanguageParser.L, 0);
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

	L() {
	    return this.getToken(MiuLanguageParser.L, 0);
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

	L() {
	    return this.getToken(MiuLanguageParser.L, 0);
	};

	dDFunc() {
	    return this.getTypedRuleContext(DDFuncContext,0);
	};

	param() {
	    return this.getTypedRuleContext(ParamContext,0);
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



class DDFuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_dDFunc;
    }

	wRFunc() {
	    return this.getTypedRuleContext(WRFuncContext,0);
	};

	wORFunc() {
	    return this.getTypedRuleContext(WORFuncContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterDDFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitDDFunc(this);
		}
	}


}



class WRFuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_wRFunc;
    }

	types() {
	    return this.getTypedRuleContext(TypesContext,0);
	};

	statementR = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementRContext);
	    } else {
	        return this.getTypedRuleContext(StatementRContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterWRFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitWRFunc(this);
		}
	}


}



class TypesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_types;
    }

	TYPES() {
	    return this.getToken(MiuLanguageParser.TYPES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterTypes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitTypes(this);
		}
	}


}



class WORFuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_wORFunc;
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
	        listener.enterWORFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitWORFunc(this);
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

	L = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.L);
	    } else {
	        return this.getToken(MiuLanguageParser.L, i);
	    }
	};


	VarT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.VarT);
	    } else {
	        return this.getToken(MiuLanguageParser.VarT, i);
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

	varA() {
	    return this.getTypedRuleContext(VarAContext,0);
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

	L = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.L);
	    } else {
	        return this.getToken(MiuLanguageParser.L, i);
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

	L() {
	    return this.getToken(MiuLanguageParser.L, 0);
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

	VFLO() {
	    return this.getToken(MiuLanguageParser.VFLO, 0);
	};

	VCHA() {
	    return this.getToken(MiuLanguageParser.VCHA, 0);
	};

	L() {
	    return this.getToken(MiuLanguageParser.L, 0);
	};

	VINT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.VINT);
	    } else {
	        return this.getToken(MiuLanguageParser.VINT, i);
	    }
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

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
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
	        listener.enterStatementR(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitStatementR(this);
		}
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_returnStatement;
    }

	returnData() {
	    return this.getTypedRuleContext(ReturnDataContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitReturnStatement(this);
		}
	}


}



class ReturnDataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_returnData;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	ANY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.ANY);
	    } else {
	        return this.getToken(MiuLanguageParser.ANY, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterReturnData(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitReturnData(this);
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

	VINT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.VINT);
	    } else {
	        return this.getToken(MiuLanguageParser.VINT, i);
	    }
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

	L() {
	    return this.getToken(MiuLanguageParser.L, 0);
	};

	range = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RangeContext);
	    } else {
	        return this.getTypedRuleContext(RangeContext,i);
	    }
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

	varG() {
	    return this.getTypedRuleContext(VarGContext,0);
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



class VarGContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_varG;
    }

	L() {
	    return this.getToken(MiuLanguageParser.L, 0);
	};

	VarD() {
	    return this.getToken(MiuLanguageParser.VarD, 0);
	};

	VarT() {
	    return this.getToken(MiuLanguageParser.VarT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterVarG(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitVarG(this);
		}
	}


}



class VarAContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_varA;
    }

	L() {
	    return this.getToken(MiuLanguageParser.L, 0);
	};

	VALUES() {
	    return this.getToken(MiuLanguageParser.VALUES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterVarA(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitVarA(this);
		}
	}


}



class ConditionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_conditions;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	addConditions() {
	    return this.getTypedRuleContext(AddConditionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterConditions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitConditions(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_condition;
    }

	SIG() {
	    return this.getToken(MiuLanguageParser.SIG, 0);
	};

	VALUES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.VALUES);
	    } else {
	        return this.getToken(MiuLanguageParser.VALUES, i);
	    }
	};


	L = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguageParser.L);
	    } else {
	        return this.getToken(MiuLanguageParser.L, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitCondition(this);
		}
	}


}



class AddConditionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiuLanguageParser.RULE_addConditions;
    }

	ADDSIG() {
	    return this.getToken(MiuLanguageParser.ADDSIG, 0);
	};

	SIG() {
	    return this.getToken(MiuLanguageParser.SIG, 0);
	};

	VALUES() {
	    return this.getToken(MiuLanguageParser.VALUES, 0);
	};

	L() {
	    return this.getToken(MiuLanguageParser.L, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.enterAddConditions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguageListener ) {
	        listener.exitAddConditions(this);
		}
	}


}




MiuLanguageParser.ProgramContext = ProgramContext; 
MiuLanguageParser.ModularCallContext = ModularCallContext; 
MiuLanguageParser.AnotherDirectoryContext = AnotherDirectoryContext; 
MiuLanguageParser.DFuncContext = DFuncContext; 
MiuLanguageParser.DDFuncContext = DDFuncContext; 
MiuLanguageParser.WRFuncContext = WRFuncContext; 
MiuLanguageParser.TypesContext = TypesContext; 
MiuLanguageParser.WORFuncContext = WORFuncContext; 
MiuLanguageParser.ParamContext = ParamContext; 
MiuLanguageParser.StatementContext = StatementContext; 
MiuLanguageParser.VarFuncContext = VarFuncContext; 
MiuLanguageParser.FuncContext = FuncContext; 
MiuLanguageParser.Param2Context = Param2Context; 
MiuLanguageParser.VParamContext = VParamContext; 
MiuLanguageParser.StatementRContext = StatementRContext; 
MiuLanguageParser.ReturnStatementContext = ReturnStatementContext; 
MiuLanguageParser.ReturnDataContext = ReturnDataContext; 
MiuLanguageParser.RangeContext = RangeContext; 
MiuLanguageParser.ForContext = ForContext; 
MiuLanguageParser.VarContext = VarContext; 
MiuLanguageParser.VarGContext = VarGContext; 
MiuLanguageParser.VarAContext = VarAContext; 
MiuLanguageParser.ConditionsContext = ConditionsContext; 
MiuLanguageParser.ConditionContext = ConditionContext; 
MiuLanguageParser.AddConditionsContext = AddConditionsContext; 

// Generated from ./MiuLanguage_lex.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiuLanguage_lexListener from './MiuLanguage_lexListener.js';
import MiuLanguage_lexVisitor from './MiuLanguage_lexVisitor.js';

const serializedATN = [4,1,35,11,2,0,7,0,1,0,5,0,4,8,0,10,0,12,0,7,9,0,1,
0,1,0,1,0,0,0,1,0,0,1,1,0,1,34,10,0,5,1,0,0,0,2,4,7,0,0,0,3,2,1,0,0,0,4,
7,1,0,0,0,5,3,1,0,0,0,5,6,1,0,0,0,6,8,1,0,0,0,7,5,1,0,0,0,8,9,5,0,0,1,9,
1,1,0,0,0,1,5];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiuLanguage_lexParser extends antlr4.Parser {

    static grammarFileName = "MiuLanguage_lex.g4";
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
                             "INT", "IDF", "ID", "WS" ];
    static ruleNames = [ "program" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiuLanguage_lexParser.ruleNames;
        this.literalNames = MiuLanguage_lexParser.literalNames;
        this.symbolicNames = MiuLanguage_lexParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiuLanguage_lexParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 5;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0)) {
	            this.state = 2;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 7;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 8;
	        this.match(MiuLanguage_lexParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

MiuLanguage_lexParser.EOF = antlr4.Token.EOF;
MiuLanguage_lexParser.COMPARISON_OPERATOR = 1;
MiuLanguage_lexParser.ADD_OPERATOR = 2;
MiuLanguage_lexParser.EQUAL = 3;
MiuLanguage_lexParser.FN = 4;
MiuLanguage_lexParser.USE = 5;
MiuLanguage_lexParser.LET = 6;
MiuLanguage_lexParser.IN = 7;
MiuLanguage_lexParser.IF = 8;
MiuLanguage_lexParser.ELSE = 9;
MiuLanguage_lexParser.FOR = 10;
MiuLanguage_lexParser.RETURN = 11;
MiuLanguage_lexParser.ARROW = 12;
MiuLanguage_lexParser.DOT = 13;
MiuLanguage_lexParser.DOUBLE_DOT = 14;
MiuLanguage_lexParser.PP = 15;
MiuLanguage_lexParser.COMMA = 16;
MiuLanguage_lexParser.PC = 17;
MiuLanguage_lexParser.P = 18;
MiuLanguage_lexParser.MULT = 19;
MiuLanguage_lexParser.DIV = 20;
MiuLanguage_lexParser.SUM = 21;
MiuLanguage_lexParser.SUB = 22;
MiuLanguage_lexParser.LPAREN = 23;
MiuLanguage_lexParser.RPAREN = 24;
MiuLanguage_lexParser.LBRACE = 25;
MiuLanguage_lexParser.RBRACE = 26;
MiuLanguage_lexParser.TYPE = 27;
MiuLanguage_lexParser.BOOL = 28;
MiuLanguage_lexParser.STRING = 29;
MiuLanguage_lexParser.CHAR = 30;
MiuLanguage_lexParser.FLOAT = 31;
MiuLanguage_lexParser.INT = 32;
MiuLanguage_lexParser.IDF = 33;
MiuLanguage_lexParser.ID = 34;
MiuLanguage_lexParser.WS = 35;

MiuLanguage_lexParser.RULE_program = 0;

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
        this.ruleIndex = MiuLanguage_lexParser.RULE_program;
    }

	EOF() {
	    return this.getToken(MiuLanguage_lexParser.EOF, 0);
	};

	COMPARISON_OPERATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.COMPARISON_OPERATOR);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.COMPARISON_OPERATOR, i);
	    }
	};


	ADD_OPERATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.ADD_OPERATOR);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.ADD_OPERATOR, i);
	    }
	};


	EQUAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.EQUAL);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.EQUAL, i);
	    }
	};


	FN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.FN);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.FN, i);
	    }
	};


	USE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.USE);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.USE, i);
	    }
	};


	LET = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.LET);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.LET, i);
	    }
	};


	IN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.IN);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.IN, i);
	    }
	};


	IF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.IF);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.IF, i);
	    }
	};


	ELSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.ELSE);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.ELSE, i);
	    }
	};


	FOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.FOR);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.FOR, i);
	    }
	};


	RETURN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.RETURN);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.RETURN, i);
	    }
	};


	ARROW = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.ARROW);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.ARROW, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.DOT);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.DOT, i);
	    }
	};


	DOUBLE_DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.DOUBLE_DOT);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.DOUBLE_DOT, i);
	    }
	};


	PP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.PP);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.PP, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.COMMA);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.COMMA, i);
	    }
	};


	PC = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.PC);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.PC, i);
	    }
	};


	P = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.P);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.P, i);
	    }
	};


	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.LPAREN);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.LPAREN, i);
	    }
	};


	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.RPAREN);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.RPAREN, i);
	    }
	};


	LBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.LBRACE);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.LBRACE, i);
	    }
	};


	RBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.RBRACE);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.RBRACE, i);
	    }
	};


	TYPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.TYPE);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.TYPE, i);
	    }
	};


	BOOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.BOOL);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.BOOL, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.STRING);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.STRING, i);
	    }
	};


	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.CHAR);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.CHAR, i);
	    }
	};


	FLOAT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.FLOAT);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.FLOAT, i);
	    }
	};


	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.INT);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.INT, i);
	    }
	};


	IDF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.IDF);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.IDF, i);
	    }
	};


	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.ID);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.ID, i);
	    }
	};


	SUB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.SUB);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.SUB, i);
	    }
	};


	SUM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.SUM);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.SUM, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.DIV);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.DIV, i);
	    }
	};


	MULT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiuLanguage_lexParser.MULT);
	    } else {
	        return this.getToken(MiuLanguage_lexParser.MULT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiuLanguage_lexListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiuLanguage_lexListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiuLanguage_lexVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiuLanguage_lexParser.ProgramContext = ProgramContext; 

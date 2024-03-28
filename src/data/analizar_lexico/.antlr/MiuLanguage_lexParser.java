// Generated from c:/Users/ramos/OneDrive/Documentos/code_work/vite_projects/Miu/src/data/analizar_lexico/MiuLanguage_lex.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MiuLanguage_lexParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMPARISON_OPERATOR=1, ADD_OPERATOR=2, EQUAL=3, FN=4, USE=5, LET=6, IN=7, 
		IF=8, ELSE=9, FOR=10, RETURN=11, ARROW=12, DOT=13, DOUBLE_DOT=14, PP=15, 
		COMMA=16, PC=17, P=18, MULT=19, DIV=20, SUM=21, SUB=22, LPAREN=23, RPAREN=24, 
		LBRACE=25, RBRACE=26, TYPE=27, BOOL=28, STRING=29, CHAR=30, FLOAT=31, 
		INT=32, IDF=33, ID=34, WS=35;
	public static final int
		RULE_program = 0;
	private static String[] makeRuleNames() {
		return new String[] {
			"program"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'='", "'fn'", "'use'", "'let'", "'in'", "'if'", "'else'", 
			"'for'", "'return'", "'->'", "'.'", "'..'", "'::'", "','", "';'", "':'", 
			"'*'", "'/'", "'+'", "'-'", "'('", "')'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMPARISON_OPERATOR", "ADD_OPERATOR", "EQUAL", "FN", "USE", "LET", 
			"IN", "IF", "ELSE", "FOR", "RETURN", "ARROW", "DOT", "DOUBLE_DOT", "PP", 
			"COMMA", "PC", "P", "MULT", "DIV", "SUM", "SUB", "LPAREN", "RPAREN", 
			"LBRACE", "RBRACE", "TYPE", "BOOL", "STRING", "CHAR", "FLOAT", "INT", 
			"IDF", "ID", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MiuLanguage_lex.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MiuLanguage_lexParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(MiuLanguage_lexParser.EOF, 0); }
		public List<TerminalNode> COMPARISON_OPERATOR() { return getTokens(MiuLanguage_lexParser.COMPARISON_OPERATOR); }
		public TerminalNode COMPARISON_OPERATOR(int i) {
			return getToken(MiuLanguage_lexParser.COMPARISON_OPERATOR, i);
		}
		public List<TerminalNode> ADD_OPERATOR() { return getTokens(MiuLanguage_lexParser.ADD_OPERATOR); }
		public TerminalNode ADD_OPERATOR(int i) {
			return getToken(MiuLanguage_lexParser.ADD_OPERATOR, i);
		}
		public List<TerminalNode> EQUAL() { return getTokens(MiuLanguage_lexParser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(MiuLanguage_lexParser.EQUAL, i);
		}
		public List<TerminalNode> FN() { return getTokens(MiuLanguage_lexParser.FN); }
		public TerminalNode FN(int i) {
			return getToken(MiuLanguage_lexParser.FN, i);
		}
		public List<TerminalNode> USE() { return getTokens(MiuLanguage_lexParser.USE); }
		public TerminalNode USE(int i) {
			return getToken(MiuLanguage_lexParser.USE, i);
		}
		public List<TerminalNode> LET() { return getTokens(MiuLanguage_lexParser.LET); }
		public TerminalNode LET(int i) {
			return getToken(MiuLanguage_lexParser.LET, i);
		}
		public List<TerminalNode> IN() { return getTokens(MiuLanguage_lexParser.IN); }
		public TerminalNode IN(int i) {
			return getToken(MiuLanguage_lexParser.IN, i);
		}
		public List<TerminalNode> IF() { return getTokens(MiuLanguage_lexParser.IF); }
		public TerminalNode IF(int i) {
			return getToken(MiuLanguage_lexParser.IF, i);
		}
		public List<TerminalNode> ELSE() { return getTokens(MiuLanguage_lexParser.ELSE); }
		public TerminalNode ELSE(int i) {
			return getToken(MiuLanguage_lexParser.ELSE, i);
		}
		public List<TerminalNode> FOR() { return getTokens(MiuLanguage_lexParser.FOR); }
		public TerminalNode FOR(int i) {
			return getToken(MiuLanguage_lexParser.FOR, i);
		}
		public List<TerminalNode> RETURN() { return getTokens(MiuLanguage_lexParser.RETURN); }
		public TerminalNode RETURN(int i) {
			return getToken(MiuLanguage_lexParser.RETURN, i);
		}
		public List<TerminalNode> ARROW() { return getTokens(MiuLanguage_lexParser.ARROW); }
		public TerminalNode ARROW(int i) {
			return getToken(MiuLanguage_lexParser.ARROW, i);
		}
		public List<TerminalNode> DOT() { return getTokens(MiuLanguage_lexParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(MiuLanguage_lexParser.DOT, i);
		}
		public List<TerminalNode> DOUBLE_DOT() { return getTokens(MiuLanguage_lexParser.DOUBLE_DOT); }
		public TerminalNode DOUBLE_DOT(int i) {
			return getToken(MiuLanguage_lexParser.DOUBLE_DOT, i);
		}
		public List<TerminalNode> PP() { return getTokens(MiuLanguage_lexParser.PP); }
		public TerminalNode PP(int i) {
			return getToken(MiuLanguage_lexParser.PP, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MiuLanguage_lexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MiuLanguage_lexParser.COMMA, i);
		}
		public List<TerminalNode> PC() { return getTokens(MiuLanguage_lexParser.PC); }
		public TerminalNode PC(int i) {
			return getToken(MiuLanguage_lexParser.PC, i);
		}
		public List<TerminalNode> P() { return getTokens(MiuLanguage_lexParser.P); }
		public TerminalNode P(int i) {
			return getToken(MiuLanguage_lexParser.P, i);
		}
		public List<TerminalNode> LPAREN() { return getTokens(MiuLanguage_lexParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(MiuLanguage_lexParser.LPAREN, i);
		}
		public List<TerminalNode> RPAREN() { return getTokens(MiuLanguage_lexParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(MiuLanguage_lexParser.RPAREN, i);
		}
		public List<TerminalNode> LBRACE() { return getTokens(MiuLanguage_lexParser.LBRACE); }
		public TerminalNode LBRACE(int i) {
			return getToken(MiuLanguage_lexParser.LBRACE, i);
		}
		public List<TerminalNode> RBRACE() { return getTokens(MiuLanguage_lexParser.RBRACE); }
		public TerminalNode RBRACE(int i) {
			return getToken(MiuLanguage_lexParser.RBRACE, i);
		}
		public List<TerminalNode> TYPE() { return getTokens(MiuLanguage_lexParser.TYPE); }
		public TerminalNode TYPE(int i) {
			return getToken(MiuLanguage_lexParser.TYPE, i);
		}
		public List<TerminalNode> BOOL() { return getTokens(MiuLanguage_lexParser.BOOL); }
		public TerminalNode BOOL(int i) {
			return getToken(MiuLanguage_lexParser.BOOL, i);
		}
		public List<TerminalNode> STRING() { return getTokens(MiuLanguage_lexParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(MiuLanguage_lexParser.STRING, i);
		}
		public List<TerminalNode> CHAR() { return getTokens(MiuLanguage_lexParser.CHAR); }
		public TerminalNode CHAR(int i) {
			return getToken(MiuLanguage_lexParser.CHAR, i);
		}
		public List<TerminalNode> FLOAT() { return getTokens(MiuLanguage_lexParser.FLOAT); }
		public TerminalNode FLOAT(int i) {
			return getToken(MiuLanguage_lexParser.FLOAT, i);
		}
		public List<TerminalNode> INT() { return getTokens(MiuLanguage_lexParser.INT); }
		public TerminalNode INT(int i) {
			return getToken(MiuLanguage_lexParser.INT, i);
		}
		public List<TerminalNode> IDF() { return getTokens(MiuLanguage_lexParser.IDF); }
		public TerminalNode IDF(int i) {
			return getToken(MiuLanguage_lexParser.IDF, i);
		}
		public List<TerminalNode> ID() { return getTokens(MiuLanguage_lexParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MiuLanguage_lexParser.ID, i);
		}
		public List<TerminalNode> SUB() { return getTokens(MiuLanguage_lexParser.SUB); }
		public TerminalNode SUB(int i) {
			return getToken(MiuLanguage_lexParser.SUB, i);
		}
		public List<TerminalNode> SUM() { return getTokens(MiuLanguage_lexParser.SUM); }
		public TerminalNode SUM(int i) {
			return getToken(MiuLanguage_lexParser.SUM, i);
		}
		public List<TerminalNode> DIV() { return getTokens(MiuLanguage_lexParser.DIV); }
		public TerminalNode DIV(int i) {
			return getToken(MiuLanguage_lexParser.DIV, i);
		}
		public List<TerminalNode> MULT() { return getTokens(MiuLanguage_lexParser.MULT); }
		public TerminalNode MULT(int i) {
			return getToken(MiuLanguage_lexParser.MULT, i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(5);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 34359738366L) != 0)) {
				{
				{
				setState(2);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 34359738366L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(7);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(8);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001#\u000b\u0002\u0000\u0007\u0000\u0001\u0000\u0005\u0000\u0004"+
		"\b\u0000\n\u0000\f\u0000\u0007\t\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0000\u0000\u0001\u0000\u0000\u0001\u0001\u0000\u0001\"\n\u0000\u0005"+
		"\u0001\u0000\u0000\u0000\u0002\u0004\u0007\u0000\u0000\u0000\u0003\u0002"+
		"\u0001\u0000\u0000\u0000\u0004\u0007\u0001\u0000\u0000\u0000\u0005\u0003"+
		"\u0001\u0000\u0000\u0000\u0005\u0006\u0001\u0000\u0000\u0000\u0006\b\u0001"+
		"\u0000\u0000\u0000\u0007\u0005\u0001\u0000\u0000\u0000\b\t\u0005\u0000"+
		"\u0000\u0001\t\u0001\u0001\u0000\u0000\u0000\u0001\u0005";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
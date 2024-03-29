// Generated from MiuLanguage_lex.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MiuLanguage_lexLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMPARISON_OPERATOR=1, ADD_OPERATOR=2, EQUAL=3, FN=4, USE=5, LET=6, IN=7, 
		IF=8, ELSE=9, FOR=10, RETURN=11, ARROW=12, DOT=13, DOUBLE_DOT=14, PP=15, 
		COMMA=16, PC=17, P=18, LPAREN=19, RPAREN=20, LBRACE=21, RBRACE=22, TYPE=23, 
		BOOL=24, STRING=25, CHAR=26, FLOAT=27, INT=28, IDF=29, ID=30, WS=31;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"COMPARISON_OPERATOR", "ADD_OPERATOR", "EQ", "AND", "OR", "NEQ", "GT", 
			"LT", "GTEQ", "LTEQ", "EQUAL", "FN", "USE", "LET", "IN", "IF", "ELSE", 
			"FOR", "RETURN", "ARROW", "DOT", "DOUBLE_DOT", "PP", "COMMA", "PC", "P", 
			"LPAREN", "RPAREN", "LBRACE", "RBRACE", "TYPE", "BOOL", "STRING", "CHAR", 
			"FLOAT", "INT", "IDF", "ID", "IDN", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'='", "'fn'", "'use'", "'let'", "'in'", "'if'", "'else'", 
			"'for'", "'return'", "'->'", "'.'", "'..'", "'::'", "','", "';'", "':'", 
			"'('", "')'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "COMPARISON_OPERATOR", "ADD_OPERATOR", "EQUAL", "FN", "USE", "LET", 
			"IN", "IF", "ELSE", "FOR", "RETURN", "ARROW", "DOT", "DOUBLE_DOT", "PP", 
			"COMMA", "PC", "P", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "TYPE", "BOOL", 
			"STRING", "CHAR", "FLOAT", "INT", "IDF", "ID", "WS"
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


	public MiuLanguage_lexLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MiuLanguage_lex.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u001f\u0106\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a"+
		"\u0002\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d"+
		"\u0002\u001e\u0007\u001e\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!"+
		"\u0007!\u0002\"\u0007\"\u0002#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002"+
		"&\u0007&\u0002\'\u0007\'\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0003\u0000X\b\u0000\u0001\u0001\u0001\u0001"+
		"\u0003\u0001\\\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r"+
		"\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0017"+
		"\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u001a"+
		"\u0001\u001a\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001d"+
		"\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003\u001e"+
		"\u00c6\b\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f"+
		"\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0003\u001f\u00d1\b\u001f"+
		"\u0001 \u0001 \u0005 \u00d5\b \n \f \u00d8\t \u0001 \u0001 \u0001!\u0001"+
		"!\u0001!\u0001!\u0001\"\u0004\"\u00e1\b\"\u000b\"\f\"\u00e2\u0001\"\u0001"+
		"\"\u0004\"\u00e7\b\"\u000b\"\f\"\u00e8\u0001#\u0004#\u00ec\b#\u000b#\f"+
		"#\u00ed\u0001$\u0001$\u0005$\u00f2\b$\n$\f$\u00f5\t$\u0001%\u0001%\u0005"+
		"%\u00f9\b%\n%\f%\u00fc\t%\u0001&\u0001&\u0001\'\u0004\'\u0101\b\'\u000b"+
		"\'\f\'\u0102\u0001\'\u0001\'\u0000\u0000(\u0001\u0001\u0003\u0002\u0005"+
		"\u0000\u0007\u0000\t\u0000\u000b\u0000\r\u0000\u000f\u0000\u0011\u0000"+
		"\u0013\u0000\u0015\u0003\u0017\u0004\u0019\u0005\u001b\u0006\u001d\u0007"+
		"\u001f\b!\t#\n%\u000b\'\f)\r+\u000e-\u000f/\u00101\u00113\u00125\u0013"+
		"7\u00149\u0015;\u0016=\u0017?\u0018A\u0019C\u001aE\u001bG\u001cI\u001d"+
		"K\u001eM\u0000O\u001f\u0001\u0000\u0007\u0001\u0000\"\"\u0001\u0000\'"+
		"\'\u0001\u000009\u0001\u0000AZ\u0002\u0000AZaz\u0003\u000009AZaz\u0003"+
		"\u0000\t\n\r\r  \u010e\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017"+
		"\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b"+
		"\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f"+
		"\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000"+
		"\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000"+
		"\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000"+
		"-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u00001\u0001"+
		"\u0000\u0000\u0000\u00003\u0001\u0000\u0000\u0000\u00005\u0001\u0000\u0000"+
		"\u0000\u00007\u0001\u0000\u0000\u0000\u00009\u0001\u0000\u0000\u0000\u0000"+
		";\u0001\u0000\u0000\u0000\u0000=\u0001\u0000\u0000\u0000\u0000?\u0001"+
		"\u0000\u0000\u0000\u0000A\u0001\u0000\u0000\u0000\u0000C\u0001\u0000\u0000"+
		"\u0000\u0000E\u0001\u0000\u0000\u0000\u0000G\u0001\u0000\u0000\u0000\u0000"+
		"I\u0001\u0000\u0000\u0000\u0000K\u0001\u0000\u0000\u0000\u0000O\u0001"+
		"\u0000\u0000\u0000\u0001W\u0001\u0000\u0000\u0000\u0003[\u0001\u0000\u0000"+
		"\u0000\u0005]\u0001\u0000\u0000\u0000\u0007`\u0001\u0000\u0000\u0000\t"+
		"c\u0001\u0000\u0000\u0000\u000bf\u0001\u0000\u0000\u0000\ri\u0001\u0000"+
		"\u0000\u0000\u000fk\u0001\u0000\u0000\u0000\u0011m\u0001\u0000\u0000\u0000"+
		"\u0013p\u0001\u0000\u0000\u0000\u0015s\u0001\u0000\u0000\u0000\u0017u"+
		"\u0001\u0000\u0000\u0000\u0019x\u0001\u0000\u0000\u0000\u001b|\u0001\u0000"+
		"\u0000\u0000\u001d\u0080\u0001\u0000\u0000\u0000\u001f\u0083\u0001\u0000"+
		"\u0000\u0000!\u0086\u0001\u0000\u0000\u0000#\u008b\u0001\u0000\u0000\u0000"+
		"%\u008f\u0001\u0000\u0000\u0000\'\u0096\u0001\u0000\u0000\u0000)\u0099"+
		"\u0001\u0000\u0000\u0000+\u009b\u0001\u0000\u0000\u0000-\u009e\u0001\u0000"+
		"\u0000\u0000/\u00a1\u0001\u0000\u0000\u00001\u00a3\u0001\u0000\u0000\u0000"+
		"3\u00a5\u0001\u0000\u0000\u00005\u00a7\u0001\u0000\u0000\u00007\u00a9"+
		"\u0001\u0000\u0000\u00009\u00ab\u0001\u0000\u0000\u0000;\u00ad\u0001\u0000"+
		"\u0000\u0000=\u00c5\u0001\u0000\u0000\u0000?\u00d0\u0001\u0000\u0000\u0000"+
		"A\u00d2\u0001\u0000\u0000\u0000C\u00db\u0001\u0000\u0000\u0000E\u00e0"+
		"\u0001\u0000\u0000\u0000G\u00eb\u0001\u0000\u0000\u0000I\u00ef\u0001\u0000"+
		"\u0000\u0000K\u00f6\u0001\u0000\u0000\u0000M\u00fd\u0001\u0000\u0000\u0000"+
		"O\u0100\u0001\u0000\u0000\u0000QX\u0003\u0005\u0002\u0000RX\u0003\u000b"+
		"\u0005\u0000SX\u0003\r\u0006\u0000TX\u0003\u000f\u0007\u0000UX\u0003\u0011"+
		"\b\u0000VX\u0003\u0013\t\u0000WQ\u0001\u0000\u0000\u0000WR\u0001\u0000"+
		"\u0000\u0000WS\u0001\u0000\u0000\u0000WT\u0001\u0000\u0000\u0000WU\u0001"+
		"\u0000\u0000\u0000WV\u0001\u0000\u0000\u0000X\u0002\u0001\u0000\u0000"+
		"\u0000Y\\\u0003\u0007\u0003\u0000Z\\\u0003\t\u0004\u0000[Y\u0001\u0000"+
		"\u0000\u0000[Z\u0001\u0000\u0000\u0000\\\u0004\u0001\u0000\u0000\u0000"+
		"]^\u0005=\u0000\u0000^_\u0005=\u0000\u0000_\u0006\u0001\u0000\u0000\u0000"+
		"`a\u0005&\u0000\u0000ab\u0005&\u0000\u0000b\b\u0001\u0000\u0000\u0000"+
		"cd\u0005|\u0000\u0000de\u0005|\u0000\u0000e\n\u0001\u0000\u0000\u0000"+
		"fg\u0005!\u0000\u0000gh\u0005=\u0000\u0000h\f\u0001\u0000\u0000\u0000"+
		"ij\u0005>\u0000\u0000j\u000e\u0001\u0000\u0000\u0000kl\u0005<\u0000\u0000"+
		"l\u0010\u0001\u0000\u0000\u0000mn\u0005>\u0000\u0000no\u0005=\u0000\u0000"+
		"o\u0012\u0001\u0000\u0000\u0000pq\u0005<\u0000\u0000qr\u0005=\u0000\u0000"+
		"r\u0014\u0001\u0000\u0000\u0000st\u0005=\u0000\u0000t\u0016\u0001\u0000"+
		"\u0000\u0000uv\u0005f\u0000\u0000vw\u0005n\u0000\u0000w\u0018\u0001\u0000"+
		"\u0000\u0000xy\u0005u\u0000\u0000yz\u0005s\u0000\u0000z{\u0005e\u0000"+
		"\u0000{\u001a\u0001\u0000\u0000\u0000|}\u0005l\u0000\u0000}~\u0005e\u0000"+
		"\u0000~\u007f\u0005t\u0000\u0000\u007f\u001c\u0001\u0000\u0000\u0000\u0080"+
		"\u0081\u0005i\u0000\u0000\u0081\u0082\u0005n\u0000\u0000\u0082\u001e\u0001"+
		"\u0000\u0000\u0000\u0083\u0084\u0005i\u0000\u0000\u0084\u0085\u0005f\u0000"+
		"\u0000\u0085 \u0001\u0000\u0000\u0000\u0086\u0087\u0005e\u0000\u0000\u0087"+
		"\u0088\u0005l\u0000\u0000\u0088\u0089\u0005s\u0000\u0000\u0089\u008a\u0005"+
		"e\u0000\u0000\u008a\"\u0001\u0000\u0000\u0000\u008b\u008c\u0005f\u0000"+
		"\u0000\u008c\u008d\u0005o\u0000\u0000\u008d\u008e\u0005r\u0000\u0000\u008e"+
		"$\u0001\u0000\u0000\u0000\u008f\u0090\u0005r\u0000\u0000\u0090\u0091\u0005"+
		"e\u0000\u0000\u0091\u0092\u0005t\u0000\u0000\u0092\u0093\u0005u\u0000"+
		"\u0000\u0093\u0094\u0005r\u0000\u0000\u0094\u0095\u0005n\u0000\u0000\u0095"+
		"&\u0001\u0000\u0000\u0000\u0096\u0097\u0005-\u0000\u0000\u0097\u0098\u0005"+
		">\u0000\u0000\u0098(\u0001\u0000\u0000\u0000\u0099\u009a\u0005.\u0000"+
		"\u0000\u009a*\u0001\u0000\u0000\u0000\u009b\u009c\u0005.\u0000\u0000\u009c"+
		"\u009d\u0005.\u0000\u0000\u009d,\u0001\u0000\u0000\u0000\u009e\u009f\u0005"+
		":\u0000\u0000\u009f\u00a0\u0005:\u0000\u0000\u00a0.\u0001\u0000\u0000"+
		"\u0000\u00a1\u00a2\u0005,\u0000\u0000\u00a20\u0001\u0000\u0000\u0000\u00a3"+
		"\u00a4\u0005;\u0000\u0000\u00a42\u0001\u0000\u0000\u0000\u00a5\u00a6\u0005"+
		":\u0000\u0000\u00a64\u0001\u0000\u0000\u0000\u00a7\u00a8\u0005(\u0000"+
		"\u0000\u00a86\u0001\u0000\u0000\u0000\u00a9\u00aa\u0005)\u0000\u0000\u00aa"+
		"8\u0001\u0000\u0000\u0000\u00ab\u00ac\u0005{\u0000\u0000\u00ac:\u0001"+
		"\u0000\u0000\u0000\u00ad\u00ae\u0005}\u0000\u0000\u00ae<\u0001\u0000\u0000"+
		"\u0000\u00af\u00b0\u0005i\u0000\u0000\u00b0\u00b1\u0005n\u0000\u0000\u00b1"+
		"\u00c6\u0005t\u0000\u0000\u00b2\u00b3\u0005f\u0000\u0000\u00b3\u00b4\u0005"+
		"l\u0000\u0000\u00b4\u00b5\u0005o\u0000\u0000\u00b5\u00b6\u0005a\u0000"+
		"\u0000\u00b6\u00c6\u0005t\u0000\u0000\u00b7\u00b8\u0005b\u0000\u0000\u00b8"+
		"\u00b9\u0005o\u0000\u0000\u00b9\u00ba\u0005o\u0000\u0000\u00ba\u00c6\u0005"+
		"l\u0000\u0000\u00bb\u00bc\u0005s\u0000\u0000\u00bc\u00bd\u0005t\u0000"+
		"\u0000\u00bd\u00be\u0005r\u0000\u0000\u00be\u00bf\u0005i\u0000\u0000\u00bf"+
		"\u00c0\u0005n\u0000\u0000\u00c0\u00c6\u0005g\u0000\u0000\u00c1\u00c2\u0005"+
		"c\u0000\u0000\u00c2\u00c3\u0005h\u0000\u0000\u00c3\u00c4\u0005a\u0000"+
		"\u0000\u00c4\u00c6\u0005r\u0000\u0000\u00c5\u00af\u0001\u0000\u0000\u0000"+
		"\u00c5\u00b2\u0001\u0000\u0000\u0000\u00c5\u00b7\u0001\u0000\u0000\u0000"+
		"\u00c5\u00bb\u0001\u0000\u0000\u0000\u00c5\u00c1\u0001\u0000\u0000\u0000"+
		"\u00c6>\u0001\u0000\u0000\u0000\u00c7\u00c8\u0005t\u0000\u0000\u00c8\u00c9"+
		"\u0005r\u0000\u0000\u00c9\u00ca\u0005u\u0000\u0000\u00ca\u00d1\u0005e"+
		"\u0000\u0000\u00cb\u00cc\u0005f\u0000\u0000\u00cc\u00cd\u0005a\u0000\u0000"+
		"\u00cd\u00ce\u0005l\u0000\u0000\u00ce\u00cf\u0005s\u0000\u0000\u00cf\u00d1"+
		"\u0005e\u0000\u0000\u00d0\u00c7\u0001\u0000\u0000\u0000\u00d0\u00cb\u0001"+
		"\u0000\u0000\u0000\u00d1@\u0001\u0000\u0000\u0000\u00d2\u00d6\u0005\""+
		"\u0000\u0000\u00d3\u00d5\b\u0000\u0000\u0000\u00d4\u00d3\u0001\u0000\u0000"+
		"\u0000\u00d5\u00d8\u0001\u0000\u0000\u0000\u00d6\u00d4\u0001\u0000\u0000"+
		"\u0000\u00d6\u00d7\u0001\u0000\u0000\u0000\u00d7\u00d9\u0001\u0000\u0000"+
		"\u0000\u00d8\u00d6\u0001\u0000\u0000\u0000\u00d9\u00da\u0005\"\u0000\u0000"+
		"\u00daB\u0001\u0000\u0000\u0000\u00db\u00dc\u0005\'\u0000\u0000\u00dc"+
		"\u00dd\b\u0001\u0000\u0000\u00dd\u00de\u0005\'\u0000\u0000\u00deD\u0001"+
		"\u0000\u0000\u0000\u00df\u00e1\u0007\u0002\u0000\u0000\u00e0\u00df\u0001"+
		"\u0000\u0000\u0000\u00e1\u00e2\u0001\u0000\u0000\u0000\u00e2\u00e0\u0001"+
		"\u0000\u0000\u0000\u00e2\u00e3\u0001\u0000\u0000\u0000\u00e3\u00e4\u0001"+
		"\u0000\u0000\u0000\u00e4\u00e6\u0003)\u0014\u0000\u00e5\u00e7\u0007\u0002"+
		"\u0000\u0000\u00e6\u00e5\u0001\u0000\u0000\u0000\u00e7\u00e8\u0001\u0000"+
		"\u0000\u0000\u00e8\u00e6\u0001\u0000\u0000\u0000\u00e8\u00e9\u0001\u0000"+
		"\u0000\u0000\u00e9F\u0001\u0000\u0000\u0000\u00ea\u00ec\u0007\u0002\u0000"+
		"\u0000\u00eb\u00ea\u0001\u0000\u0000\u0000\u00ec\u00ed\u0001\u0000\u0000"+
		"\u0000\u00ed\u00eb\u0001\u0000\u0000\u0000\u00ed\u00ee\u0001\u0000\u0000"+
		"\u0000\u00eeH\u0001\u0000\u0000\u0000\u00ef\u00f3\u0007\u0003\u0000\u0000"+
		"\u00f0\u00f2\u0003M&\u0000\u00f1\u00f0\u0001\u0000\u0000\u0000\u00f2\u00f5"+
		"\u0001\u0000\u0000\u0000\u00f3\u00f1\u0001\u0000\u0000\u0000\u00f3\u00f4"+
		"\u0001\u0000\u0000\u0000\u00f4J\u0001\u0000\u0000\u0000\u00f5\u00f3\u0001"+
		"\u0000\u0000\u0000\u00f6\u00fa\u0007\u0004\u0000\u0000\u00f7\u00f9\u0003"+
		"M&\u0000\u00f8\u00f7\u0001\u0000\u0000\u0000\u00f9\u00fc\u0001\u0000\u0000"+
		"\u0000\u00fa\u00f8\u0001\u0000\u0000\u0000\u00fa\u00fb\u0001\u0000\u0000"+
		"\u0000\u00fbL\u0001\u0000\u0000\u0000\u00fc\u00fa\u0001\u0000\u0000\u0000"+
		"\u00fd\u00fe\u0007\u0005\u0000\u0000\u00feN\u0001\u0000\u0000\u0000\u00ff"+
		"\u0101\u0007\u0006\u0000\u0000\u0100\u00ff\u0001\u0000\u0000\u0000\u0101"+
		"\u0102\u0001\u0000\u0000\u0000\u0102\u0100\u0001\u0000\u0000\u0000\u0102"+
		"\u0103\u0001\u0000\u0000\u0000\u0103\u0104\u0001\u0000\u0000\u0000\u0104"+
		"\u0105\u0006\'\u0000\u0000\u0105P\u0001\u0000\u0000\u0000\f\u0000W[\u00c5"+
		"\u00d0\u00d6\u00e2\u00e8\u00ed\u00f3\u00fa\u0102\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
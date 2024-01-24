// Generated from c:/Users/ramos/Documents/Vite_project/Miu/src/data/MiuLanguage.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MiuLanguageLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, COMPARISON_OPERATOR=20, ADD_OPERATOR=21, TYPE=22, 
		BOOL=23, STRING=24, CHAR=25, FLOAT=26, INT=27, IDF=28, ID=29, WS=30, INVALID=31;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
			"T__17", "T__18", "COMPARISON_OPERATOR", "ADD_OPERATOR", "EQ", "AND", 
			"OR", "NEQ", "GT", "LT", "GTEQ", "LTEQ", "TYPE", "BOOL", "STRING", "CHAR", 
			"FLOAT", "INT", "IDF", "ID", "IDN", "WS", "INVALID"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'fn'", "'('", "')'", "'use'", "'::'", "';'", "'return'", "','", 
			"':'", "'{'", "'}'", "'.'", "'let'", "'='", "'if'", "'else'", "'for'", 
			"'in'", "'..'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "COMPARISON_OPERATOR", 
			"ADD_OPERATOR", "TYPE", "BOOL", "STRING", "CHAR", "FLOAT", "INT", "IDF", 
			"ID", "WS", "INVALID"
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


	public MiuLanguageLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MiuLanguage.g4"; }

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
		"\u0004\u0000\u001f\u0105\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
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
		"&\u0007&\u0002\'\u0007\'\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0003\u0013\u0091\b\u0013\u0001\u0014\u0001\u0014\u0003\u0014"+
		"\u0095\b\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016"+
		"\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0001\u001d\u0003\u001d\u00c3\b\u001d\u0001\u001e"+
		"\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0001\u001e\u0003\u001e\u00ce\b\u001e\u0001\u001f\u0001\u001f"+
		"\u0005\u001f\u00d2\b\u001f\n\u001f\f\u001f\u00d5\t\u001f\u0001\u001f\u0001"+
		"\u001f\u0001 \u0001 \u0001 \u0001 \u0001!\u0004!\u00de\b!\u000b!\f!\u00df"+
		"\u0001!\u0001!\u0004!\u00e4\b!\u000b!\f!\u00e5\u0001\"\u0004\"\u00e9\b"+
		"\"\u000b\"\f\"\u00ea\u0001#\u0001#\u0005#\u00ef\b#\n#\f#\u00f2\t#\u0001"+
		"$\u0001$\u0005$\u00f6\b$\n$\f$\u00f9\t$\u0001%\u0001%\u0001&\u0004&\u00fe"+
		"\b&\u000b&\f&\u00ff\u0001&\u0001&\u0001\'\u0001\'\u0000\u0000(\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f"+
		"\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0000-\u0000/\u0000"+
		"1\u00003\u00005\u00007\u00009\u0000;\u0016=\u0017?\u0018A\u0019C\u001a"+
		"E\u001bG\u001cI\u001dK\u0000M\u001eO\u001f\u0001\u0000\u0007\u0001\u0000"+
		"\"\"\u0001\u0000\'\'\u0001\u000009\u0001\u0000AZ\u0002\u0000AZaz\u0003"+
		"\u000009AZaz\u0003\u0000\t\n\r\r  \u010d\u0000\u0001\u0001\u0000\u0000"+
		"\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000"+
		"\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000"+
		"\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000"+
		"\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000"+
		"\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000"+
		"\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000"+
		"\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000"+
		"\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001"+
		"\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000"+
		"\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000;\u0001\u0000\u0000\u0000"+
		"\u0000=\u0001\u0000\u0000\u0000\u0000?\u0001\u0000\u0000\u0000\u0000A"+
		"\u0001\u0000\u0000\u0000\u0000C\u0001\u0000\u0000\u0000\u0000E\u0001\u0000"+
		"\u0000\u0000\u0000G\u0001\u0000\u0000\u0000\u0000I\u0001\u0000\u0000\u0000"+
		"\u0000M\u0001\u0000\u0000\u0000\u0000O\u0001\u0000\u0000\u0000\u0001Q"+
		"\u0001\u0000\u0000\u0000\u0003T\u0001\u0000\u0000\u0000\u0005V\u0001\u0000"+
		"\u0000\u0000\u0007X\u0001\u0000\u0000\u0000\t\\\u0001\u0000\u0000\u0000"+
		"\u000b_\u0001\u0000\u0000\u0000\ra\u0001\u0000\u0000\u0000\u000fh\u0001"+
		"\u0000\u0000\u0000\u0011j\u0001\u0000\u0000\u0000\u0013l\u0001\u0000\u0000"+
		"\u0000\u0015n\u0001\u0000\u0000\u0000\u0017p\u0001\u0000\u0000\u0000\u0019"+
		"r\u0001\u0000\u0000\u0000\u001bv\u0001\u0000\u0000\u0000\u001dx\u0001"+
		"\u0000\u0000\u0000\u001f{\u0001\u0000\u0000\u0000!\u0080\u0001\u0000\u0000"+
		"\u0000#\u0084\u0001\u0000\u0000\u0000%\u0087\u0001\u0000\u0000\u0000\'"+
		"\u0090\u0001\u0000\u0000\u0000)\u0094\u0001\u0000\u0000\u0000+\u0096\u0001"+
		"\u0000\u0000\u0000-\u0099\u0001\u0000\u0000\u0000/\u009c\u0001\u0000\u0000"+
		"\u00001\u009f\u0001\u0000\u0000\u00003\u00a2\u0001\u0000\u0000\u00005"+
		"\u00a4\u0001\u0000\u0000\u00007\u00a6\u0001\u0000\u0000\u00009\u00a9\u0001"+
		"\u0000\u0000\u0000;\u00c2\u0001\u0000\u0000\u0000=\u00cd\u0001\u0000\u0000"+
		"\u0000?\u00cf\u0001\u0000\u0000\u0000A\u00d8\u0001\u0000\u0000\u0000C"+
		"\u00dd\u0001\u0000\u0000\u0000E\u00e8\u0001\u0000\u0000\u0000G\u00ec\u0001"+
		"\u0000\u0000\u0000I\u00f3\u0001\u0000\u0000\u0000K\u00fa\u0001\u0000\u0000"+
		"\u0000M\u00fd\u0001\u0000\u0000\u0000O\u0103\u0001\u0000\u0000\u0000Q"+
		"R\u0005f\u0000\u0000RS\u0005n\u0000\u0000S\u0002\u0001\u0000\u0000\u0000"+
		"TU\u0005(\u0000\u0000U\u0004\u0001\u0000\u0000\u0000VW\u0005)\u0000\u0000"+
		"W\u0006\u0001\u0000\u0000\u0000XY\u0005u\u0000\u0000YZ\u0005s\u0000\u0000"+
		"Z[\u0005e\u0000\u0000[\b\u0001\u0000\u0000\u0000\\]\u0005:\u0000\u0000"+
		"]^\u0005:\u0000\u0000^\n\u0001\u0000\u0000\u0000_`\u0005;\u0000\u0000"+
		"`\f\u0001\u0000\u0000\u0000ab\u0005r\u0000\u0000bc\u0005e\u0000\u0000"+
		"cd\u0005t\u0000\u0000de\u0005u\u0000\u0000ef\u0005r\u0000\u0000fg\u0005"+
		"n\u0000\u0000g\u000e\u0001\u0000\u0000\u0000hi\u0005,\u0000\u0000i\u0010"+
		"\u0001\u0000\u0000\u0000jk\u0005:\u0000\u0000k\u0012\u0001\u0000\u0000"+
		"\u0000lm\u0005{\u0000\u0000m\u0014\u0001\u0000\u0000\u0000no\u0005}\u0000"+
		"\u0000o\u0016\u0001\u0000\u0000\u0000pq\u0005.\u0000\u0000q\u0018\u0001"+
		"\u0000\u0000\u0000rs\u0005l\u0000\u0000st\u0005e\u0000\u0000tu\u0005t"+
		"\u0000\u0000u\u001a\u0001\u0000\u0000\u0000vw\u0005=\u0000\u0000w\u001c"+
		"\u0001\u0000\u0000\u0000xy\u0005i\u0000\u0000yz\u0005f\u0000\u0000z\u001e"+
		"\u0001\u0000\u0000\u0000{|\u0005e\u0000\u0000|}\u0005l\u0000\u0000}~\u0005"+
		"s\u0000\u0000~\u007f\u0005e\u0000\u0000\u007f \u0001\u0000\u0000\u0000"+
		"\u0080\u0081\u0005f\u0000\u0000\u0081\u0082\u0005o\u0000\u0000\u0082\u0083"+
		"\u0005r\u0000\u0000\u0083\"\u0001\u0000\u0000\u0000\u0084\u0085\u0005"+
		"i\u0000\u0000\u0085\u0086\u0005n\u0000\u0000\u0086$\u0001\u0000\u0000"+
		"\u0000\u0087\u0088\u0005.\u0000\u0000\u0088\u0089\u0005.\u0000\u0000\u0089"+
		"&\u0001\u0000\u0000\u0000\u008a\u0091\u0003+\u0015\u0000\u008b\u0091\u0003"+
		"1\u0018\u0000\u008c\u0091\u00033\u0019\u0000\u008d\u0091\u00035\u001a"+
		"\u0000\u008e\u0091\u00037\u001b\u0000\u008f\u0091\u00039\u001c\u0000\u0090"+
		"\u008a\u0001\u0000\u0000\u0000\u0090\u008b\u0001\u0000\u0000\u0000\u0090"+
		"\u008c\u0001\u0000\u0000\u0000\u0090\u008d\u0001\u0000\u0000\u0000\u0090"+
		"\u008e\u0001\u0000\u0000\u0000\u0090\u008f\u0001\u0000\u0000\u0000\u0091"+
		"(\u0001\u0000\u0000\u0000\u0092\u0095\u0003-\u0016\u0000\u0093\u0095\u0003"+
		"/\u0017\u0000\u0094\u0092\u0001\u0000\u0000\u0000\u0094\u0093\u0001\u0000"+
		"\u0000\u0000\u0095*\u0001\u0000\u0000\u0000\u0096\u0097\u0005=\u0000\u0000"+
		"\u0097\u0098\u0005=\u0000\u0000\u0098,\u0001\u0000\u0000\u0000\u0099\u009a"+
		"\u0005&\u0000\u0000\u009a\u009b\u0005&\u0000\u0000\u009b.\u0001\u0000"+
		"\u0000\u0000\u009c\u009d\u0005|\u0000\u0000\u009d\u009e\u0005|\u0000\u0000"+
		"\u009e0\u0001\u0000\u0000\u0000\u009f\u00a0\u0005!\u0000\u0000\u00a0\u00a1"+
		"\u0005=\u0000\u0000\u00a12\u0001\u0000\u0000\u0000\u00a2\u00a3\u0005>"+
		"\u0000\u0000\u00a34\u0001\u0000\u0000\u0000\u00a4\u00a5\u0005<\u0000\u0000"+
		"\u00a56\u0001\u0000\u0000\u0000\u00a6\u00a7\u0005>\u0000\u0000\u00a7\u00a8"+
		"\u0005=\u0000\u0000\u00a88\u0001\u0000\u0000\u0000\u00a9\u00aa\u0005<"+
		"\u0000\u0000\u00aa\u00ab\u0005=\u0000\u0000\u00ab:\u0001\u0000\u0000\u0000"+
		"\u00ac\u00ad\u0005i\u0000\u0000\u00ad\u00ae\u0005n\u0000\u0000\u00ae\u00c3"+
		"\u0005t\u0000\u0000\u00af\u00b0\u0005f\u0000\u0000\u00b0\u00b1\u0005l"+
		"\u0000\u0000\u00b1\u00b2\u0005o\u0000\u0000\u00b2\u00b3\u0005a\u0000\u0000"+
		"\u00b3\u00c3\u0005t\u0000\u0000\u00b4\u00b5\u0005b\u0000\u0000\u00b5\u00b6"+
		"\u0005o\u0000\u0000\u00b6\u00b7\u0005o\u0000\u0000\u00b7\u00c3\u0005l"+
		"\u0000\u0000\u00b8\u00b9\u0005s\u0000\u0000\u00b9\u00ba\u0005t\u0000\u0000"+
		"\u00ba\u00bb\u0005r\u0000\u0000\u00bb\u00bc\u0005i\u0000\u0000\u00bc\u00bd"+
		"\u0005n\u0000\u0000\u00bd\u00c3\u0005g\u0000\u0000\u00be\u00bf\u0005c"+
		"\u0000\u0000\u00bf\u00c0\u0005h\u0000\u0000\u00c0\u00c1\u0005a\u0000\u0000"+
		"\u00c1\u00c3\u0005r\u0000\u0000\u00c2\u00ac\u0001\u0000\u0000\u0000\u00c2"+
		"\u00af\u0001\u0000\u0000\u0000\u00c2\u00b4\u0001\u0000\u0000\u0000\u00c2"+
		"\u00b8\u0001\u0000\u0000\u0000\u00c2\u00be\u0001\u0000\u0000\u0000\u00c3"+
		"<\u0001\u0000\u0000\u0000\u00c4\u00c5\u0005t\u0000\u0000\u00c5\u00c6\u0005"+
		"r\u0000\u0000\u00c6\u00c7\u0005u\u0000\u0000\u00c7\u00ce\u0005e\u0000"+
		"\u0000\u00c8\u00c9\u0005f\u0000\u0000\u00c9\u00ca\u0005a\u0000\u0000\u00ca"+
		"\u00cb\u0005l\u0000\u0000\u00cb\u00cc\u0005s\u0000\u0000\u00cc\u00ce\u0005"+
		"e\u0000\u0000\u00cd\u00c4\u0001\u0000\u0000\u0000\u00cd\u00c8\u0001\u0000"+
		"\u0000\u0000\u00ce>\u0001\u0000\u0000\u0000\u00cf\u00d3\u0005\"\u0000"+
		"\u0000\u00d0\u00d2\b\u0000\u0000\u0000\u00d1\u00d0\u0001\u0000\u0000\u0000"+
		"\u00d2\u00d5\u0001\u0000\u0000\u0000\u00d3\u00d1\u0001\u0000\u0000\u0000"+
		"\u00d3\u00d4\u0001\u0000\u0000\u0000\u00d4\u00d6\u0001\u0000\u0000\u0000"+
		"\u00d5\u00d3\u0001\u0000\u0000\u0000\u00d6\u00d7\u0005\"\u0000\u0000\u00d7"+
		"@\u0001\u0000\u0000\u0000\u00d8\u00d9\u0005\'\u0000\u0000\u00d9\u00da"+
		"\b\u0001\u0000\u0000\u00da\u00db\u0005\'\u0000\u0000\u00dbB\u0001\u0000"+
		"\u0000\u0000\u00dc\u00de\u0007\u0002\u0000\u0000\u00dd\u00dc\u0001\u0000"+
		"\u0000\u0000\u00de\u00df\u0001\u0000\u0000\u0000\u00df\u00dd\u0001\u0000"+
		"\u0000\u0000\u00df\u00e0\u0001\u0000\u0000\u0000\u00e0\u00e1\u0001\u0000"+
		"\u0000\u0000\u00e1\u00e3\u0005.\u0000\u0000\u00e2\u00e4\u0007\u0002\u0000"+
		"\u0000\u00e3\u00e2\u0001\u0000\u0000\u0000\u00e4\u00e5\u0001\u0000\u0000"+
		"\u0000\u00e5\u00e3\u0001\u0000\u0000\u0000\u00e5\u00e6\u0001\u0000\u0000"+
		"\u0000\u00e6D\u0001\u0000\u0000\u0000\u00e7\u00e9\u0007\u0002\u0000\u0000"+
		"\u00e8\u00e7\u0001\u0000\u0000\u0000\u00e9\u00ea\u0001\u0000\u0000\u0000"+
		"\u00ea\u00e8\u0001\u0000\u0000\u0000\u00ea\u00eb\u0001\u0000\u0000\u0000"+
		"\u00ebF\u0001\u0000\u0000\u0000\u00ec\u00f0\u0007\u0003\u0000\u0000\u00ed"+
		"\u00ef\u0003K%\u0000\u00ee\u00ed\u0001\u0000\u0000\u0000\u00ef\u00f2\u0001"+
		"\u0000\u0000\u0000\u00f0\u00ee\u0001\u0000\u0000\u0000\u00f0\u00f1\u0001"+
		"\u0000\u0000\u0000\u00f1H\u0001\u0000\u0000\u0000\u00f2\u00f0\u0001\u0000"+
		"\u0000\u0000\u00f3\u00f7\u0007\u0004\u0000\u0000\u00f4\u00f6\u0003K%\u0000"+
		"\u00f5\u00f4\u0001\u0000\u0000\u0000\u00f6\u00f9\u0001\u0000\u0000\u0000"+
		"\u00f7\u00f5\u0001\u0000\u0000\u0000\u00f7\u00f8\u0001\u0000\u0000\u0000"+
		"\u00f8J\u0001\u0000\u0000\u0000\u00f9\u00f7\u0001\u0000\u0000\u0000\u00fa"+
		"\u00fb\u0007\u0005\u0000\u0000\u00fbL\u0001\u0000\u0000\u0000\u00fc\u00fe"+
		"\u0007\u0006\u0000\u0000\u00fd\u00fc\u0001\u0000\u0000\u0000\u00fe\u00ff"+
		"\u0001\u0000\u0000\u0000\u00ff\u00fd\u0001\u0000\u0000\u0000\u00ff\u0100"+
		"\u0001\u0000\u0000\u0000\u0100\u0101\u0001\u0000\u0000\u0000\u0101\u0102"+
		"\u0006&\u0000\u0000\u0102N\u0001\u0000\u0000\u0000\u0103\u0104\t\u0000"+
		"\u0000\u0000\u0104P\u0001\u0000\u0000\u0000\f\u0000\u0090\u0094\u00c2"+
		"\u00cd\u00d3\u00df\u00e5\u00ea\u00f0\u00f7\u00ff\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
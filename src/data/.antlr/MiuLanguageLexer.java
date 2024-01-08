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
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, Param=15, VarD=16, VarT=17, 
		ID=18, REST_ID=19, TYPES=20, TINT=21, TFLO=22, TCHA=23, TSTR=24, VALUES=25, 
		VSTR=26, VCHA=27, VINT=28, VFLO=29, WS=30;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "Param", "VarD", "VarT", 
			"ID", "REST_ID", "TYPES", "TINT", "TFLO", "TCHA", "TSTR", "VALUES", "VSTR", 
			"VCHA", "VINT", "VFLO", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'use'", "';'", "'::'", "'fn'", "'('", "')'", "'{'", "'}'", "'.'", 
			"','", "'for'", "'in'", "'..'", "'let'", null, null, null, null, null, 
			null, "'int'", "'float'", "'char'", "'string'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "Param", "VarD", "VarT", "ID", "REST_ID", "TYPES", 
			"TINT", "TFLO", "TCHA", "TSTR", "VALUES", "VSTR", "VCHA", "VINT", "VFLO", 
			"WS"
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
		"\u0004\u0000\u001e\u00d7\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a"+
		"\u0002\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f"+
		"\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0005"+
		"\u000el\b\u000e\n\u000e\f\u000eo\t\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003"+
		"\u0010\u0085\b\u0010\u0001\u0011\u0001\u0011\u0005\u0011\u0089\b\u0011"+
		"\n\u0011\f\u0011\u008c\t\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u0094\b\u0013\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0003\u0018\u00b0\b\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0005\u0019\u00b6\b\u0019\n\u0019\f\u0019\u00b9\t\u0019\u0001\u0019"+
		"\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0005\u001a"+
		"\u00c1\b\u001a\n\u001a\f\u001a\u00c4\t\u001a\u0001\u001a\u0001\u001a\u0001"+
		"\u001b\u0004\u001b\u00c9\b\u001b\u000b\u001b\f\u001b\u00ca\u0001\u001c"+
		"\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001d\u0004\u001d\u00d2\b\u001d"+
		"\u000b\u001d\f\u001d\u00d3\u0001\u001d\u0001\u001d\u0002\u00b7\u00c2\u0000"+
		"\u001e\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006"+
		"\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e"+
		"\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017"+
		"/\u00181\u00193\u001a5\u001b7\u001c9\u001d;\u001e\u0001\u0000\u0004\u0002"+
		"\u0000AZaz\u0003\u000009AZaz\u0001\u000009\u0003\u0000\t\n\r\r  \u00e7"+
		"\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000"+
		"\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000"+
		"\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000"+
		"\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000"+
		"\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000"+
		"\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/"+
		"\u0001\u0000\u0000\u0000\u00001\u0001\u0000\u0000\u0000\u00003\u0001\u0000"+
		"\u0000\u0000\u00005\u0001\u0000\u0000\u0000\u00007\u0001\u0000\u0000\u0000"+
		"\u00009\u0001\u0000\u0000\u0000\u0000;\u0001\u0000\u0000\u0000\u0001="+
		"\u0001\u0000\u0000\u0000\u0003A\u0001\u0000\u0000\u0000\u0005C\u0001\u0000"+
		"\u0000\u0000\u0007F\u0001\u0000\u0000\u0000\tI\u0001\u0000\u0000\u0000"+
		"\u000bK\u0001\u0000\u0000\u0000\rM\u0001\u0000\u0000\u0000\u000fO\u0001"+
		"\u0000\u0000\u0000\u0011Q\u0001\u0000\u0000\u0000\u0013S\u0001\u0000\u0000"+
		"\u0000\u0015U\u0001\u0000\u0000\u0000\u0017Y\u0001\u0000\u0000\u0000\u0019"+
		"\\\u0001\u0000\u0000\u0000\u001b_\u0001\u0000\u0000\u0000\u001dc\u0001"+
		"\u0000\u0000\u0000\u001fp\u0001\u0000\u0000\u0000!s\u0001\u0000\u0000"+
		"\u0000#\u0086\u0001\u0000\u0000\u0000%\u008d\u0001\u0000\u0000\u0000\'"+
		"\u0093\u0001\u0000\u0000\u0000)\u0095\u0001\u0000\u0000\u0000+\u0099\u0001"+
		"\u0000\u0000\u0000-\u009f\u0001\u0000\u0000\u0000/\u00a4\u0001\u0000\u0000"+
		"\u00001\u00af\u0001\u0000\u0000\u00003\u00b1\u0001\u0000\u0000\u00005"+
		"\u00bc\u0001\u0000\u0000\u00007\u00c8\u0001\u0000\u0000\u00009\u00cc\u0001"+
		"\u0000\u0000\u0000;\u00d1\u0001\u0000\u0000\u0000=>\u0005u\u0000\u0000"+
		">?\u0005s\u0000\u0000?@\u0005e\u0000\u0000@\u0002\u0001\u0000\u0000\u0000"+
		"AB\u0005;\u0000\u0000B\u0004\u0001\u0000\u0000\u0000CD\u0005:\u0000\u0000"+
		"DE\u0005:\u0000\u0000E\u0006\u0001\u0000\u0000\u0000FG\u0005f\u0000\u0000"+
		"GH\u0005n\u0000\u0000H\b\u0001\u0000\u0000\u0000IJ\u0005(\u0000\u0000"+
		"J\n\u0001\u0000\u0000\u0000KL\u0005)\u0000\u0000L\f\u0001\u0000\u0000"+
		"\u0000MN\u0005{\u0000\u0000N\u000e\u0001\u0000\u0000\u0000OP\u0005}\u0000"+
		"\u0000P\u0010\u0001\u0000\u0000\u0000QR\u0005.\u0000\u0000R\u0012\u0001"+
		"\u0000\u0000\u0000ST\u0005,\u0000\u0000T\u0014\u0001\u0000\u0000\u0000"+
		"UV\u0005f\u0000\u0000VW\u0005o\u0000\u0000WX\u0005r\u0000\u0000X\u0016"+
		"\u0001\u0000\u0000\u0000YZ\u0005i\u0000\u0000Z[\u0005n\u0000\u0000[\u0018"+
		"\u0001\u0000\u0000\u0000\\]\u0005.\u0000\u0000]^\u0005.\u0000\u0000^\u001a"+
		"\u0001\u0000\u0000\u0000_`\u0005l\u0000\u0000`a\u0005e\u0000\u0000ab\u0005"+
		"t\u0000\u0000b\u001c\u0001\u0000\u0000\u0000cd\u0003#\u0011\u0000de\u0005"+
		":\u0000\u0000em\u0003\'\u0013\u0000fg\u0005,\u0000\u0000gh\u0003#\u0011"+
		"\u0000hi\u0005:\u0000\u0000ij\u0003\'\u0013\u0000jl\u0001\u0000\u0000"+
		"\u0000kf\u0001\u0000\u0000\u0000lo\u0001\u0000\u0000\u0000mk\u0001\u0000"+
		"\u0000\u0000mn\u0001\u0000\u0000\u0000n\u001e\u0001\u0000\u0000\u0000"+
		"om\u0001\u0000\u0000\u0000pq\u0005=\u0000\u0000qr\u00031\u0018\u0000r"+
		" \u0001\u0000\u0000\u0000s\u0084\u0005:\u0000\u0000tu\u0003)\u0014\u0000"+
		"uv\u0005=\u0000\u0000vw\u00037\u001b\u0000w\u0085\u0001\u0000\u0000\u0000"+
		"xy\u0003+\u0015\u0000yz\u0005=\u0000\u0000z{\u00039\u001c\u0000{\u0085"+
		"\u0001\u0000\u0000\u0000|}\u0003-\u0016\u0000}~\u0005=\u0000\u0000~\u007f"+
		"\u00035\u001a\u0000\u007f\u0085\u0001\u0000\u0000\u0000\u0080\u0081\u0003"+
		"/\u0017\u0000\u0081\u0082\u0005=\u0000\u0000\u0082\u0083\u00033\u0019"+
		"\u0000\u0083\u0085\u0001\u0000\u0000\u0000\u0084t\u0001\u0000\u0000\u0000"+
		"\u0084x\u0001\u0000\u0000\u0000\u0084|\u0001\u0000\u0000\u0000\u0084\u0080"+
		"\u0001\u0000\u0000\u0000\u0085\"\u0001\u0000\u0000\u0000\u0086\u008a\u0007"+
		"\u0000\u0000\u0000\u0087\u0089\u0003%\u0012\u0000\u0088\u0087\u0001\u0000"+
		"\u0000\u0000\u0089\u008c\u0001\u0000\u0000\u0000\u008a\u0088\u0001\u0000"+
		"\u0000\u0000\u008a\u008b\u0001\u0000\u0000\u0000\u008b$\u0001\u0000\u0000"+
		"\u0000\u008c\u008a\u0001\u0000\u0000\u0000\u008d\u008e\u0007\u0001\u0000"+
		"\u0000\u008e&\u0001\u0000\u0000\u0000\u008f\u0094\u0003)\u0014\u0000\u0090"+
		"\u0094\u0003+\u0015\u0000\u0091\u0094\u0003-\u0016\u0000\u0092\u0094\u0003"+
		"/\u0017\u0000\u0093\u008f\u0001\u0000\u0000\u0000\u0093\u0090\u0001\u0000"+
		"\u0000\u0000\u0093\u0091\u0001\u0000\u0000\u0000\u0093\u0092\u0001\u0000"+
		"\u0000\u0000\u0094(\u0001\u0000\u0000\u0000\u0095\u0096\u0005i\u0000\u0000"+
		"\u0096\u0097\u0005n\u0000\u0000\u0097\u0098\u0005t\u0000\u0000\u0098*"+
		"\u0001\u0000\u0000\u0000\u0099\u009a\u0005f\u0000\u0000\u009a\u009b\u0005"+
		"l\u0000\u0000\u009b\u009c\u0005o\u0000\u0000\u009c\u009d\u0005a\u0000"+
		"\u0000\u009d\u009e\u0005t\u0000\u0000\u009e,\u0001\u0000\u0000\u0000\u009f"+
		"\u00a0\u0005c\u0000\u0000\u00a0\u00a1\u0005h\u0000\u0000\u00a1\u00a2\u0005"+
		"a\u0000\u0000\u00a2\u00a3\u0005r\u0000\u0000\u00a3.\u0001\u0000\u0000"+
		"\u0000\u00a4\u00a5\u0005s\u0000\u0000\u00a5\u00a6\u0005t\u0000\u0000\u00a6"+
		"\u00a7\u0005r\u0000\u0000\u00a7\u00a8\u0005i\u0000\u0000\u00a8\u00a9\u0005"+
		"n\u0000\u0000\u00a9\u00aa\u0005g\u0000\u0000\u00aa0\u0001\u0000\u0000"+
		"\u0000\u00ab\u00b0\u00033\u0019\u0000\u00ac\u00b0\u00037\u001b\u0000\u00ad"+
		"\u00b0\u00039\u001c\u0000\u00ae\u00b0\u00035\u001a\u0000\u00af\u00ab\u0001"+
		"\u0000\u0000\u0000\u00af\u00ac\u0001\u0000\u0000\u0000\u00af\u00ad\u0001"+
		"\u0000\u0000\u0000\u00af\u00ae\u0001\u0000\u0000\u0000\u00b02\u0001\u0000"+
		"\u0000\u0000\u00b1\u00b7\u0005\"\u0000\u0000\u00b2\u00b3\u0005\\\u0000"+
		"\u0000\u00b3\u00b6\u0005\"\u0000\u0000\u00b4\u00b6\t\u0000\u0000\u0000"+
		"\u00b5\u00b2\u0001\u0000\u0000\u0000\u00b5\u00b4\u0001\u0000\u0000\u0000"+
		"\u00b6\u00b9\u0001\u0000\u0000\u0000\u00b7\u00b8\u0001\u0000\u0000\u0000"+
		"\u00b7\u00b5\u0001\u0000\u0000\u0000\u00b8\u00ba\u0001\u0000\u0000\u0000"+
		"\u00b9\u00b7\u0001\u0000\u0000\u0000\u00ba\u00bb\u0005\"\u0000\u0000\u00bb"+
		"4\u0001\u0000\u0000\u0000\u00bc\u00c2\u0005\'\u0000\u0000\u00bd\u00be"+
		"\u0005\\\u0000\u0000\u00be\u00c1\u0005\'\u0000\u0000\u00bf\u00c1\t\u0000"+
		"\u0000\u0000\u00c0\u00bd\u0001\u0000\u0000\u0000\u00c0\u00bf\u0001\u0000"+
		"\u0000\u0000\u00c1\u00c4\u0001\u0000\u0000\u0000\u00c2\u00c3\u0001\u0000"+
		"\u0000\u0000\u00c2\u00c0\u0001\u0000\u0000\u0000\u00c3\u00c5\u0001\u0000"+
		"\u0000\u0000\u00c4\u00c2\u0001\u0000\u0000\u0000\u00c5\u00c6\u0005\'\u0000"+
		"\u0000\u00c66\u0001\u0000\u0000\u0000\u00c7\u00c9\u0007\u0002\u0000\u0000"+
		"\u00c8\u00c7\u0001\u0000\u0000\u0000\u00c9\u00ca\u0001\u0000\u0000\u0000"+
		"\u00ca\u00c8\u0001\u0000\u0000\u0000\u00ca\u00cb\u0001\u0000\u0000\u0000"+
		"\u00cb8\u0001\u0000\u0000\u0000\u00cc\u00cd\u00037\u001b\u0000\u00cd\u00ce"+
		"\u0005.\u0000\u0000\u00ce\u00cf\u00037\u001b\u0000\u00cf:\u0001\u0000"+
		"\u0000\u0000\u00d0\u00d2\u0007\u0003\u0000\u0000\u00d1\u00d0\u0001\u0000"+
		"\u0000\u0000\u00d2\u00d3\u0001\u0000\u0000\u0000\u00d3\u00d1\u0001\u0000"+
		"\u0000\u0000\u00d3\u00d4\u0001\u0000\u0000\u0000\u00d4\u00d5\u0001\u0000"+
		"\u0000\u0000\u00d5\u00d6\u0006\u001d\u0000\u0000\u00d6<\u0001\u0000\u0000"+
		"\u0000\f\u0000m\u0084\u008a\u0093\u00af\u00b5\u00b7\u00c0\u00c2\u00ca"+
		"\u00d3\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
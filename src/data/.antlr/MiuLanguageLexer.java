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
		VarD=18, VarT=19, VINT=20, TYPES=21, L=22, VSTR=23, TINT=24, TFLO=25, 
		TCHA=26, TSTR=27, VALUES=28, VFLO=29, VCHA=30, R=31, SIG=32, ADDSIG=33, 
		WS=34, ANY=35;
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
			"VarD", "VarT", "VINT", "TYPES", "L", "VSTR", "TINT", "TFLO", "TCHA", 
			"TSTR", "VALUES", "VFLO", "VCHA", "R", "SIG", "ADDSIG", "WS", "ANY"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'use'", "';'", "'::'", "'fn'", "'('", "')'", "'->'", "'{'", "'}'", 
			"','", "'.'", "'return'", "'for'", "'in'", "'..'", "'let'", "'='", null, 
			null, null, null, null, null, "'int'", "'float'", "'char'", "'string'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "VarD", "VarT", "VINT", "TYPES", 
			"L", "VSTR", "TINT", "TFLO", "TCHA", "TSTR", "VALUES", "VFLO", "VCHA", 
			"R", "SIG", "ADDSIG", "WS", "ANY"
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
		"\u0004\u0000#\u00ef\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002"+
		"\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002"+
		"\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002"+
		"\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002"+
		"\u001e\u0007\u001e\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007"+
		"!\u0002\"\u0007\"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011"+
		"\u0001\u0011\u0003\u0011|\b\u0011\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0001\u0012\u0003\u0012\u0082\b\u0012\u0001\u0012\u0001\u0012\u0001\u0013"+
		"\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0003\u0014"+
		"\u008c\b\u0014\u0001\u0015\u0001\u0015\u0005\u0015\u0090\b\u0015\n\u0015"+
		"\f\u0015\u0093\t\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0005\u0016\u0099\b\u0016\n\u0016\f\u0016\u009c\t\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001"+
		"\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0001"+
		"\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u00ba\b\u001b\u0001\u001c\u0004"+
		"\u001c\u00bd\b\u001c\u000b\u001c\f\u001c\u00be\u0001\u001c\u0001\u001c"+
		"\u0004\u001c\u00c3\b\u001c\u000b\u001c\f\u001c\u00c4\u0001\u001d\u0001"+
		"\u001d\u0001\u001d\u0001\u001d\u0005\u001d\u00cb\b\u001d\n\u001d\f\u001d"+
		"\u00ce\t\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0003\u001e"+
		"\u00d4\b\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f"+
		"\u0001\u001f\u0001\u001f\u0001\u001f\u0001\u001f\u0003\u001f\u00df\b\u001f"+
		"\u0001 \u0001 \u0001 \u0001 \u0003 \u00e5\b \u0001!\u0004!\u00e8\b!\u000b"+
		"!\f!\u00e9\u0001!\u0001!\u0001\"\u0001\"\u0002\u009a\u00cc\u0000#\u0001"+
		"\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007"+
		"\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d"+
		"\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017/"+
		"\u00181\u00193\u001a5\u001b7\u001c9\u001d;\u001e=\u001f? A!C\"E#\u0001"+
		"\u0000\u0004\u0001\u000009\u0002\u0000AZaz\u0002\u0000<<>>\u0003\u0000"+
		"\t\n\r\r  \u0104\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000"+
		"\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000"+
		"\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000"+
		"\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000"+
		"\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000"+
		"%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001"+
		"\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000"+
		"\u0000\u0000/\u0001\u0000\u0000\u0000\u00001\u0001\u0000\u0000\u0000\u0000"+
		"3\u0001\u0000\u0000\u0000\u00005\u0001\u0000\u0000\u0000\u00007\u0001"+
		"\u0000\u0000\u0000\u00009\u0001\u0000\u0000\u0000\u0000;\u0001\u0000\u0000"+
		"\u0000\u0000=\u0001\u0000\u0000\u0000\u0000?\u0001\u0000\u0000\u0000\u0000"+
		"A\u0001\u0000\u0000\u0000\u0000C\u0001\u0000\u0000\u0000\u0000E\u0001"+
		"\u0000\u0000\u0000\u0001G\u0001\u0000\u0000\u0000\u0003K\u0001\u0000\u0000"+
		"\u0000\u0005M\u0001\u0000\u0000\u0000\u0007P\u0001\u0000\u0000\u0000\t"+
		"S\u0001\u0000\u0000\u0000\u000bU\u0001\u0000\u0000\u0000\rW\u0001\u0000"+
		"\u0000\u0000\u000fZ\u0001\u0000\u0000\u0000\u0011\\\u0001\u0000\u0000"+
		"\u0000\u0013^\u0001\u0000\u0000\u0000\u0015`\u0001\u0000\u0000\u0000\u0017"+
		"b\u0001\u0000\u0000\u0000\u0019i\u0001\u0000\u0000\u0000\u001bm\u0001"+
		"\u0000\u0000\u0000\u001dp\u0001\u0000\u0000\u0000\u001fs\u0001\u0000\u0000"+
		"\u0000!w\u0001\u0000\u0000\u0000#y\u0001\u0000\u0000\u0000%\u007f\u0001"+
		"\u0000\u0000\u0000\'\u0085\u0001\u0000\u0000\u0000)\u008b\u0001\u0000"+
		"\u0000\u0000+\u008d\u0001\u0000\u0000\u0000-\u0094\u0001\u0000\u0000\u0000"+
		"/\u009f\u0001\u0000\u0000\u00001\u00a3\u0001\u0000\u0000\u00003\u00a9"+
		"\u0001\u0000\u0000\u00005\u00ae\u0001\u0000\u0000\u00007\u00b9\u0001\u0000"+
		"\u0000\u00009\u00bc\u0001\u0000\u0000\u0000;\u00c6\u0001\u0000\u0000\u0000"+
		"=\u00d3\u0001\u0000\u0000\u0000?\u00de\u0001\u0000\u0000\u0000A\u00e4"+
		"\u0001\u0000\u0000\u0000C\u00e7\u0001\u0000\u0000\u0000E\u00ed\u0001\u0000"+
		"\u0000\u0000GH\u0005u\u0000\u0000HI\u0005s\u0000\u0000IJ\u0005e\u0000"+
		"\u0000J\u0002\u0001\u0000\u0000\u0000KL\u0005;\u0000\u0000L\u0004\u0001"+
		"\u0000\u0000\u0000MN\u0005:\u0000\u0000NO\u0005:\u0000\u0000O\u0006\u0001"+
		"\u0000\u0000\u0000PQ\u0005f\u0000\u0000QR\u0005n\u0000\u0000R\b\u0001"+
		"\u0000\u0000\u0000ST\u0005(\u0000\u0000T\n\u0001\u0000\u0000\u0000UV\u0005"+
		")\u0000\u0000V\f\u0001\u0000\u0000\u0000WX\u0005-\u0000\u0000XY\u0005"+
		">\u0000\u0000Y\u000e\u0001\u0000\u0000\u0000Z[\u0005{\u0000\u0000[\u0010"+
		"\u0001\u0000\u0000\u0000\\]\u0005}\u0000\u0000]\u0012\u0001\u0000\u0000"+
		"\u0000^_\u0005,\u0000\u0000_\u0014\u0001\u0000\u0000\u0000`a\u0005.\u0000"+
		"\u0000a\u0016\u0001\u0000\u0000\u0000bc\u0005r\u0000\u0000cd\u0005e\u0000"+
		"\u0000de\u0005t\u0000\u0000ef\u0005u\u0000\u0000fg\u0005r\u0000\u0000"+
		"gh\u0005n\u0000\u0000h\u0018\u0001\u0000\u0000\u0000ij\u0005f\u0000\u0000"+
		"jk\u0005o\u0000\u0000kl\u0005r\u0000\u0000l\u001a\u0001\u0000\u0000\u0000"+
		"mn\u0005i\u0000\u0000no\u0005n\u0000\u0000o\u001c\u0001\u0000\u0000\u0000"+
		"pq\u0005.\u0000\u0000qr\u0005.\u0000\u0000r\u001e\u0001\u0000\u0000\u0000"+
		"st\u0005l\u0000\u0000tu\u0005e\u0000\u0000uv\u0005t\u0000\u0000v \u0001"+
		"\u0000\u0000\u0000wx\u0005=\u0000\u0000x\"\u0001\u0000\u0000\u0000y{\u0005"+
		"=\u0000\u0000z|\u0003C!\u0000{z\u0001\u0000\u0000\u0000{|\u0001\u0000"+
		"\u0000\u0000|}\u0001\u0000\u0000\u0000}~\u00037\u001b\u0000~$\u0001\u0000"+
		"\u0000\u0000\u007f\u0081\u0005:\u0000\u0000\u0080\u0082\u0003C!\u0000"+
		"\u0081\u0080\u0001\u0000\u0000\u0000\u0081\u0082\u0001\u0000\u0000\u0000"+
		"\u0082\u0083\u0001\u0000\u0000\u0000\u0083\u0084\u0003)\u0014\u0000\u0084"+
		"&\u0001\u0000\u0000\u0000\u0085\u0086\u0007\u0000\u0000\u0000\u0086(\u0001"+
		"\u0000\u0000\u0000\u0087\u008c\u0003/\u0017\u0000\u0088\u008c\u00031\u0018"+
		"\u0000\u0089\u008c\u00033\u0019\u0000\u008a\u008c\u00035\u001a\u0000\u008b"+
		"\u0087\u0001\u0000\u0000\u0000\u008b\u0088\u0001\u0000\u0000\u0000\u008b"+
		"\u0089\u0001\u0000\u0000\u0000\u008b\u008a\u0001\u0000\u0000\u0000\u008c"+
		"*\u0001\u0000\u0000\u0000\u008d\u0091\u0007\u0001\u0000\u0000\u008e\u0090"+
		"\u0003=\u001e\u0000\u008f\u008e\u0001\u0000\u0000\u0000\u0090\u0093\u0001"+
		"\u0000\u0000\u0000\u0091\u008f\u0001\u0000\u0000\u0000\u0091\u0092\u0001"+
		"\u0000\u0000\u0000\u0092,\u0001\u0000\u0000\u0000\u0093\u0091\u0001\u0000"+
		"\u0000\u0000\u0094\u009a\u0005\"\u0000\u0000\u0095\u0096\u0005\\\u0000"+
		"\u0000\u0096\u0099\u0005\"\u0000\u0000\u0097\u0099\t\u0000\u0000\u0000"+
		"\u0098\u0095\u0001\u0000\u0000\u0000\u0098\u0097\u0001\u0000\u0000\u0000"+
		"\u0099\u009c\u0001\u0000\u0000\u0000\u009a\u009b\u0001\u0000\u0000\u0000"+
		"\u009a\u0098\u0001\u0000\u0000\u0000\u009b\u009d\u0001\u0000\u0000\u0000"+
		"\u009c\u009a\u0001\u0000\u0000\u0000\u009d\u009e\u0005\"\u0000\u0000\u009e"+
		".\u0001\u0000\u0000\u0000\u009f\u00a0\u0005i\u0000\u0000\u00a0\u00a1\u0005"+
		"n\u0000\u0000\u00a1\u00a2\u0005t\u0000\u0000\u00a20\u0001\u0000\u0000"+
		"\u0000\u00a3\u00a4\u0005f\u0000\u0000\u00a4\u00a5\u0005l\u0000\u0000\u00a5"+
		"\u00a6\u0005o\u0000\u0000\u00a6\u00a7\u0005a\u0000\u0000\u00a7\u00a8\u0005"+
		"t\u0000\u0000\u00a82\u0001\u0000\u0000\u0000\u00a9\u00aa\u0005c\u0000"+
		"\u0000\u00aa\u00ab\u0005h\u0000\u0000\u00ab\u00ac\u0005a\u0000\u0000\u00ac"+
		"\u00ad\u0005r\u0000\u0000\u00ad4\u0001\u0000\u0000\u0000\u00ae\u00af\u0005"+
		"s\u0000\u0000\u00af\u00b0\u0005t\u0000\u0000\u00b0\u00b1\u0005r\u0000"+
		"\u0000\u00b1\u00b2\u0005i\u0000\u0000\u00b2\u00b3\u0005n\u0000\u0000\u00b3"+
		"\u00b4\u0005g\u0000\u0000\u00b46\u0001\u0000\u0000\u0000\u00b5\u00ba\u0003"+
		"-\u0016\u0000\u00b6\u00ba\u0003\'\u0013\u0000\u00b7\u00ba\u00039\u001c"+
		"\u0000\u00b8\u00ba\u0003;\u001d\u0000\u00b9\u00b5\u0001\u0000\u0000\u0000"+
		"\u00b9\u00b6\u0001\u0000\u0000\u0000\u00b9\u00b7\u0001\u0000\u0000\u0000"+
		"\u00b9\u00b8\u0001\u0000\u0000\u0000\u00ba8\u0001\u0000\u0000\u0000\u00bb"+
		"\u00bd\u0003\'\u0013\u0000\u00bc\u00bb\u0001\u0000\u0000\u0000\u00bd\u00be"+
		"\u0001\u0000\u0000\u0000\u00be\u00bc\u0001\u0000\u0000\u0000\u00be\u00bf"+
		"\u0001\u0000\u0000\u0000\u00bf\u00c0\u0001\u0000\u0000\u0000\u00c0\u00c2"+
		"\u0005.\u0000\u0000\u00c1\u00c3\u0003\'\u0013\u0000\u00c2\u00c1\u0001"+
		"\u0000\u0000\u0000\u00c3\u00c4\u0001\u0000\u0000\u0000\u00c4\u00c2\u0001"+
		"\u0000\u0000\u0000\u00c4\u00c5\u0001\u0000\u0000\u0000\u00c5:\u0001\u0000"+
		"\u0000\u0000\u00c6\u00cc\u0005\'\u0000\u0000\u00c7\u00c8\u0005\\\u0000"+
		"\u0000\u00c8\u00cb\u0005\'\u0000\u0000\u00c9\u00cb\t\u0000\u0000\u0000"+
		"\u00ca\u00c7\u0001\u0000\u0000\u0000\u00ca\u00c9\u0001\u0000\u0000\u0000"+
		"\u00cb\u00ce\u0001\u0000\u0000\u0000\u00cc\u00cd\u0001\u0000\u0000\u0000"+
		"\u00cc\u00ca\u0001\u0000\u0000\u0000\u00cd\u00cf\u0001\u0000\u0000\u0000"+
		"\u00ce\u00cc\u0001\u0000\u0000\u0000\u00cf\u00d0\u0005\'\u0000\u0000\u00d0"+
		"<\u0001\u0000\u0000\u0000\u00d1\u00d4\u0007\u0001\u0000\u0000\u00d2\u00d4"+
		"\u0003\'\u0013\u0000\u00d3\u00d1\u0001\u0000\u0000\u0000\u00d3\u00d2\u0001"+
		"\u0000\u0000\u0000\u00d4>\u0001\u0000\u0000\u0000\u00d5\u00d6\u0005=\u0000"+
		"\u0000\u00d6\u00df\u0005=\u0000\u0000\u00d7\u00d8\u0005>\u0000\u0000\u00d8"+
		"\u00df\u0005=\u0000\u0000\u00d9\u00da\u0005<\u0000\u0000\u00da\u00df\u0005"+
		"=\u0000\u0000\u00db\u00dc\u0005!\u0000\u0000\u00dc\u00df\u0005=\u0000"+
		"\u0000\u00dd\u00df\u0007\u0002\u0000\u0000\u00de\u00d5\u0001\u0000\u0000"+
		"\u0000\u00de\u00d7\u0001\u0000\u0000\u0000\u00de\u00d9\u0001\u0000\u0000"+
		"\u0000\u00de\u00db\u0001\u0000\u0000\u0000\u00de\u00dd\u0001\u0000\u0000"+
		"\u0000\u00df@\u0001\u0000\u0000\u0000\u00e0\u00e1\u0005&\u0000\u0000\u00e1"+
		"\u00e5\u0005&\u0000\u0000\u00e2\u00e3\u0005|\u0000\u0000\u00e3\u00e5\u0005"+
		"|\u0000\u0000\u00e4\u00e0\u0001\u0000\u0000\u0000\u00e4\u00e2\u0001\u0000"+
		"\u0000\u0000\u00e5B\u0001\u0000\u0000\u0000\u00e6\u00e8\u0007\u0003\u0000"+
		"\u0000\u00e7\u00e6\u0001\u0000\u0000\u0000\u00e8\u00e9\u0001\u0000\u0000"+
		"\u0000\u00e9\u00e7\u0001\u0000\u0000\u0000\u00e9\u00ea\u0001\u0000\u0000"+
		"\u0000\u00ea\u00eb\u0001\u0000\u0000\u0000\u00eb\u00ec\u0006!\u0000\u0000"+
		"\u00ecD\u0001\u0000\u0000\u0000\u00ed\u00ee\t\u0000\u0000\u0000\u00ee"+
		"F\u0001\u0000\u0000\u0000\u0010\u0000{\u0081\u008b\u0091\u0098\u009a\u00b9"+
		"\u00be\u00c4\u00ca\u00cc\u00d3\u00de\u00e4\u00e9\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
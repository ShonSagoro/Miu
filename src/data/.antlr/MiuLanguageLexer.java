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
		T__9=10, T__10=11, T__11=12, T__12=13, Var=14, Fname=15, String=16, Vtype=17, 
		WS=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "Var", "Fname", "String", "Vtype", 
			"WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'use'", "'::'", "';'", "'fn'", "'('", "')'", "'{'", "'}'", "'.'", 
			"','", "':'", "'''", "'\\''"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "Var", "Fname", "String", "Vtype", "WS"
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
		"\u0004\u0000\u0012~\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0005\u000eI\b\u000e\n\u000e\f\u000eL\t\u000e\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0005\u000fR\b\u000f\n\u000f\f\u000f"+
		"U\t\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0005\u000f\\\b\u000f\n\u000f\f\u000f_\t\u000f\u0001\u000f\u0003\u000f"+
		"b\b\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0003\u0010v\b\u0010\u0001\u0011\u0004\u0011y\b\u0011\u000b"+
		"\u0011\f\u0011z\u0001\u0011\u0001\u0011\u0000\u0000\u0012\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f"+
		"\u001f\u0010!\u0011#\u0012\u0001\u0000\u0005\u0003\u000009AZaz\u0001\u0000"+
		"AZ\u0001\u0000\"\"\u0001\u0000\'\'\u0003\u0000\t\n\r\r  \u0087\u0000\u0001"+
		"\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005"+
		"\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001"+
		"\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000"+
		"\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000"+
		"\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000"+
		"\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000"+
		"\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000"+
		"\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000"+
		"\u0000\u0000#\u0001\u0000\u0000\u0000\u0001%\u0001\u0000\u0000\u0000\u0003"+
		")\u0001\u0000\u0000\u0000\u0005,\u0001\u0000\u0000\u0000\u0007.\u0001"+
		"\u0000\u0000\u0000\t1\u0001\u0000\u0000\u0000\u000b3\u0001\u0000\u0000"+
		"\u0000\r5\u0001\u0000\u0000\u0000\u000f7\u0001\u0000\u0000\u0000\u0011"+
		"9\u0001\u0000\u0000\u0000\u0013;\u0001\u0000\u0000\u0000\u0015=\u0001"+
		"\u0000\u0000\u0000\u0017?\u0001\u0000\u0000\u0000\u0019A\u0001\u0000\u0000"+
		"\u0000\u001bD\u0001\u0000\u0000\u0000\u001dF\u0001\u0000\u0000\u0000\u001f"+
		"a\u0001\u0000\u0000\u0000!u\u0001\u0000\u0000\u0000#x\u0001\u0000\u0000"+
		"\u0000%&\u0005u\u0000\u0000&\'\u0005s\u0000\u0000\'(\u0005e\u0000\u0000"+
		"(\u0002\u0001\u0000\u0000\u0000)*\u0005:\u0000\u0000*+\u0005:\u0000\u0000"+
		"+\u0004\u0001\u0000\u0000\u0000,-\u0005;\u0000\u0000-\u0006\u0001\u0000"+
		"\u0000\u0000./\u0005f\u0000\u0000/0\u0005n\u0000\u00000\b\u0001\u0000"+
		"\u0000\u000012\u0005(\u0000\u00002\n\u0001\u0000\u0000\u000034\u0005)"+
		"\u0000\u00004\f\u0001\u0000\u0000\u000056\u0005{\u0000\u00006\u000e\u0001"+
		"\u0000\u0000\u000078\u0005}\u0000\u00008\u0010\u0001\u0000\u0000\u0000"+
		"9:\u0005.\u0000\u0000:\u0012\u0001\u0000\u0000\u0000;<\u0005,\u0000\u0000"+
		"<\u0014\u0001\u0000\u0000\u0000=>\u0005:\u0000\u0000>\u0016\u0001\u0000"+
		"\u0000\u0000?@\u0005\'\u0000\u0000@\u0018\u0001\u0000\u0000\u0000AB\u0005"+
		"\\\u0000\u0000BC\u0005\'\u0000\u0000C\u001a\u0001\u0000\u0000\u0000DE"+
		"\u0007\u0000\u0000\u0000E\u001c\u0001\u0000\u0000\u0000FJ\u0007\u0001"+
		"\u0000\u0000GI\u0003\u001b\r\u0000HG\u0001\u0000\u0000\u0000IL\u0001\u0000"+
		"\u0000\u0000JH\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000\u0000K\u001e"+
		"\u0001\u0000\u0000\u0000LJ\u0001\u0000\u0000\u0000MS\u0005\"\u0000\u0000"+
		"NO\u0005\\\u0000\u0000OR\u0005\"\u0000\u0000PR\b\u0002\u0000\u0000QN\u0001"+
		"\u0000\u0000\u0000QP\u0001\u0000\u0000\u0000RU\u0001\u0000\u0000\u0000"+
		"SQ\u0001\u0000\u0000\u0000ST\u0001\u0000\u0000\u0000TV\u0001\u0000\u0000"+
		"\u0000US\u0001\u0000\u0000\u0000Vb\u0005\"\u0000\u0000W]\u0005\'\u0000"+
		"\u0000XY\u0005\\\u0000\u0000Y\\\u0005\'\u0000\u0000Z\\\b\u0003\u0000\u0000"+
		"[X\u0001\u0000\u0000\u0000[Z\u0001\u0000\u0000\u0000\\_\u0001\u0000\u0000"+
		"\u0000][\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000^`\u0001\u0000"+
		"\u0000\u0000_]\u0001\u0000\u0000\u0000`b\u0005\'\u0000\u0000aM\u0001\u0000"+
		"\u0000\u0000aW\u0001\u0000\u0000\u0000b \u0001\u0000\u0000\u0000cd\u0005"+
		"i\u0000\u0000de\u0005n\u0000\u0000ev\u0005t\u0000\u0000fg\u0005f\u0000"+
		"\u0000gh\u0005l\u0000\u0000hi\u0005o\u0000\u0000ij\u0005a\u0000\u0000"+
		"jv\u0005t\u0000\u0000kl\u0005c\u0000\u0000lm\u0005h\u0000\u0000mn\u0005"+
		"a\u0000\u0000nv\u0005r\u0000\u0000op\u0005s\u0000\u0000pq\u0005t\u0000"+
		"\u0000qr\u0005r\u0000\u0000rs\u0005i\u0000\u0000st\u0005n\u0000\u0000"+
		"tv\u0005g\u0000\u0000uc\u0001\u0000\u0000\u0000uf\u0001\u0000\u0000\u0000"+
		"uk\u0001\u0000\u0000\u0000uo\u0001\u0000\u0000\u0000v\"\u0001\u0000\u0000"+
		"\u0000wy\u0007\u0004\u0000\u0000xw\u0001\u0000\u0000\u0000yz\u0001\u0000"+
		"\u0000\u0000zx\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000{|\u0001"+
		"\u0000\u0000\u0000|}\u0006\u0011\u0000\u0000}$\u0001\u0000\u0000\u0000"+
		"\t\u0000JQS[]auz\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
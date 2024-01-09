// Generated from c:/Users/ramos/Documents/Vite_project/Miu/src/data/MiuLanguage.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MiuLanguageParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, Param=15, Var=16, VarD=17, 
		VarT=18, VSTR=19, ID=20, REST_ID=21, TYPES=22, TINT=23, TFLO=24, TCHA=25, 
		TSTR=26, VALUES=27, VCHA=28, VINT=29, VFLO=30, WS=31;
	public static final int
		RULE_program = 0, RULE_modularCall = 1, RULE_anotherDirectory = 2, RULE_dFunc = 3, 
		RULE_statement = 4, RULE_varFunc = 5, RULE_func = 6, RULE_param2 = 7, 
		RULE_vParam = 8, RULE_for = 9, RULE_range = 10, RULE_var = 11;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "modularCall", "anotherDirectory", "dFunc", "statement", "varFunc", 
			"func", "param2", "vParam", "for", "range", "var"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'use'", "';'", "'::'", "'fn'", "'('", "')'", "'{'", "'}'", "'.'", 
			"','", "'for'", "'in'", "'..'", "'let'", null, null, null, null, null, 
			null, null, null, "'int'", "'float'", "'char'", "'string'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "Param", "Var", "VarD", "VarT", "VSTR", "ID", "REST_ID", 
			"TYPES", "TINT", "TFLO", "TCHA", "TSTR", "VALUES", "VCHA", "VINT", "VFLO", 
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

	@Override
	public String getGrammarFileName() { return "MiuLanguage.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MiuLanguageParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public List<DFuncContext> dFunc() {
			return getRuleContexts(DFuncContext.class);
		}
		public DFuncContext dFunc(int i) {
			return getRuleContext(DFuncContext.class,i);
		}
		public List<ModularCallContext> modularCall() {
			return getRuleContexts(ModularCallContext.class);
		}
		public ModularCallContext modularCall(int i) {
			return getRuleContext(ModularCallContext.class,i);
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
			setState(28);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==T__3) {
				{
				setState(26);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__3:
					{
					setState(24);
					dFunc();
					}
					break;
				case T__0:
					{
					setState(25);
					modularCall();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(30);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
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

	@SuppressWarnings("CheckReturnValue")
	public static class ModularCallContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MiuLanguageParser.ID, 0); }
		public List<AnotherDirectoryContext> anotherDirectory() {
			return getRuleContexts(AnotherDirectoryContext.class);
		}
		public AnotherDirectoryContext anotherDirectory(int i) {
			return getRuleContext(AnotherDirectoryContext.class,i);
		}
		public ModularCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modularCall; }
	}

	public final ModularCallContext modularCall() throws RecognitionException {
		ModularCallContext _localctx = new ModularCallContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_modularCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			match(T__0);
			setState(32);
			match(ID);
			setState(36);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(33);
				anotherDirectory();
				}
				}
				setState(38);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(39);
			match(T__1);
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

	@SuppressWarnings("CheckReturnValue")
	public static class AnotherDirectoryContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MiuLanguageParser.ID, 0); }
		public AnotherDirectoryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_anotherDirectory; }
	}

	public final AnotherDirectoryContext anotherDirectory() throws RecognitionException {
		AnotherDirectoryContext _localctx = new AnotherDirectoryContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_anotherDirectory);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(41);
			match(T__2);
			setState(42);
			match(ID);
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

	@SuppressWarnings("CheckReturnValue")
	public static class DFuncContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MiuLanguageParser.ID, 0); }
		public TerminalNode Param() { return getToken(MiuLanguageParser.Param, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public DFuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dFunc; }
	}

	public final DFuncContext dFunc() throws RecognitionException {
		DFuncContext _localctx = new DFuncContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_dFunc);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			match(T__3);
			setState(45);
			match(ID);
			setState(46);
			match(T__4);
			setState(48);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Param) {
				{
				setState(47);
				match(Param);
				}
			}

			setState(50);
			match(T__5);
			setState(51);
			match(T__6);
			setState(55);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1067008L) != 0)) {
				{
				{
				setState(52);
				statement();
				}
				}
				setState(57);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(58);
			match(T__7);
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

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public VarFuncContext varFunc() {
			return getRuleContext(VarFuncContext.class,0);
		}
		public VarContext var() {
			return getRuleContext(VarContext.class,0);
		}
		public FuncContext func() {
			return getRuleContext(FuncContext.class,0);
		}
		public ForContext for_() {
			return getRuleContext(ForContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(60);
				varFunc();
				}
				break;
			case 2:
				{
				setState(61);
				var();
				}
				break;
			case 3:
				{
				setState(62);
				func();
				}
				break;
			case 4:
				{
				setState(63);
				for_();
				}
				break;
			}
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

	@SuppressWarnings("CheckReturnValue")
	public static class VarFuncContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MiuLanguageParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MiuLanguageParser.ID, i);
		}
		public Param2Context param2() {
			return getRuleContext(Param2Context.class,0);
		}
		public VarFuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varFunc; }
	}

	public final VarFuncContext varFunc() throws RecognitionException {
		VarFuncContext _localctx = new VarFuncContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_varFunc);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			match(ID);
			setState(67);
			match(T__8);
			setState(68);
			match(ID);
			setState(69);
			match(T__4);
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1880621056L) != 0)) {
				{
				setState(70);
				param2();
				}
			}

			setState(73);
			match(T__5);
			setState(74);
			match(T__1);
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

	@SuppressWarnings("CheckReturnValue")
	public static class FuncContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MiuLanguageParser.ID, 0); }
		public Param2Context param2() {
			return getRuleContext(Param2Context.class,0);
		}
		public FuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func; }
	}

	public final FuncContext func() throws RecognitionException {
		FuncContext _localctx = new FuncContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_func);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			match(ID);
			setState(77);
			match(T__4);
			setState(79);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1880621056L) != 0)) {
				{
				setState(78);
				param2();
				}
			}

			setState(81);
			match(T__5);
			setState(82);
			match(T__1);
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

	@SuppressWarnings("CheckReturnValue")
	public static class Param2Context extends ParserRuleContext {
		public List<VParamContext> vParam() {
			return getRuleContexts(VParamContext.class);
		}
		public VParamContext vParam(int i) {
			return getRuleContext(VParamContext.class,i);
		}
		public Param2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param2; }
	}

	public final Param2Context param2() throws RecognitionException {
		Param2Context _localctx = new Param2Context(_ctx, getState());
		enterRule(_localctx, 14, RULE_param2);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			vParam();
			setState(89);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__9) {
				{
				{
				setState(85);
				match(T__9);
				setState(86);
				vParam();
				}
				}
				setState(91);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
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

	@SuppressWarnings("CheckReturnValue")
	public static class VParamContext extends ParserRuleContext {
		public TerminalNode VSTR() { return getToken(MiuLanguageParser.VSTR, 0); }
		public TerminalNode VINT() { return getToken(MiuLanguageParser.VINT, 0); }
		public TerminalNode VFLO() { return getToken(MiuLanguageParser.VFLO, 0); }
		public TerminalNode VCHA() { return getToken(MiuLanguageParser.VCHA, 0); }
		public TerminalNode ID() { return getToken(MiuLanguageParser.ID, 0); }
		public VParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vParam; }
	}

	public final VParamContext vParam() throws RecognitionException {
		VParamContext _localctx = new VParamContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_vParam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1880621056L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
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

	@SuppressWarnings("CheckReturnValue")
	public static class ForContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MiuLanguageParser.ID, 0); }
		public TerminalNode VINT() { return getToken(MiuLanguageParser.VINT, 0); }
		public RangeContext range() {
			return getRuleContext(RangeContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ForContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for; }
	}

	public final ForContext for_() throws RecognitionException {
		ForContext _localctx = new ForContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_for);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(94);
			match(T__10);
			setState(95);
			match(ID);
			setState(96);
			match(T__11);
			setState(97);
			match(VINT);
			setState(98);
			match(T__12);
			setState(99);
			range();
			setState(100);
			match(T__6);
			setState(104);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1067008L) != 0)) {
				{
				{
				setState(101);
				statement();
				}
				}
				setState(106);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(107);
			match(T__7);
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

	@SuppressWarnings("CheckReturnValue")
	public static class RangeContext extends ParserRuleContext {
		public FuncContext func() {
			return getRuleContext(FuncContext.class,0);
		}
		public VarFuncContext varFunc() {
			return getRuleContext(VarFuncContext.class,0);
		}
		public TerminalNode VINT() { return getToken(MiuLanguageParser.VINT, 0); }
		public RangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_range; }
	}

	public final RangeContext range() throws RecognitionException {
		RangeContext _localctx = new RangeContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_range);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(109);
				func();
				}
				break;
			case 2:
				{
				setState(110);
				varFunc();
				}
				break;
			case 3:
				{
				setState(111);
				match(VINT);
				}
				break;
			}
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

	@SuppressWarnings("CheckReturnValue")
	public static class VarContext extends ParserRuleContext {
		public TerminalNode Var() { return getToken(MiuLanguageParser.Var, 0); }
		public VarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var; }
	}

	public final VarContext var() throws RecognitionException {
		VarContext _localctx = new VarContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_var);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			match(T__13);
			setState(115);
			match(Var);
			setState(116);
			match(T__1);
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
		"\u0004\u0001\u001fw\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0001"+
		"\u0000\u0001\u0000\u0005\u0000\u001b\b\u0000\n\u0000\f\u0000\u001e\t\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001#\b\u0001\n\u0001\f\u0001"+
		"&\t\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00031\b\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u00036\b\u0003\n\u0003\f\u0003"+
		"9\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0003\u0004A\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0003\u0005H\b\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006P\b\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0005\u0007X\b\u0007\n\u0007\f\u0007[\t\u0007\u0001\b\u0001\b\u0001\t"+
		"\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0005\tg\b\t"+
		"\n\t\f\tj\t\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0003\nq\b\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0000\u0000\f\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0000\u0001\u0002"+
		"\u0000\u0013\u0014\u001c\u001ex\u0000\u001c\u0001\u0000\u0000\u0000\u0002"+
		"\u001f\u0001\u0000\u0000\u0000\u0004)\u0001\u0000\u0000\u0000\u0006,\u0001"+
		"\u0000\u0000\u0000\b@\u0001\u0000\u0000\u0000\nB\u0001\u0000\u0000\u0000"+
		"\fL\u0001\u0000\u0000\u0000\u000eT\u0001\u0000\u0000\u0000\u0010\\\u0001"+
		"\u0000\u0000\u0000\u0012^\u0001\u0000\u0000\u0000\u0014p\u0001\u0000\u0000"+
		"\u0000\u0016r\u0001\u0000\u0000\u0000\u0018\u001b\u0003\u0006\u0003\u0000"+
		"\u0019\u001b\u0003\u0002\u0001\u0000\u001a\u0018\u0001\u0000\u0000\u0000"+
		"\u001a\u0019\u0001\u0000\u0000\u0000\u001b\u001e\u0001\u0000\u0000\u0000"+
		"\u001c\u001a\u0001\u0000\u0000\u0000\u001c\u001d\u0001\u0000\u0000\u0000"+
		"\u001d\u0001\u0001\u0000\u0000\u0000\u001e\u001c\u0001\u0000\u0000\u0000"+
		"\u001f \u0005\u0001\u0000\u0000 $\u0005\u0014\u0000\u0000!#\u0003\u0004"+
		"\u0002\u0000\"!\u0001\u0000\u0000\u0000#&\u0001\u0000\u0000\u0000$\"\u0001"+
		"\u0000\u0000\u0000$%\u0001\u0000\u0000\u0000%\'\u0001\u0000\u0000\u0000"+
		"&$\u0001\u0000\u0000\u0000\'(\u0005\u0002\u0000\u0000(\u0003\u0001\u0000"+
		"\u0000\u0000)*\u0005\u0003\u0000\u0000*+\u0005\u0014\u0000\u0000+\u0005"+
		"\u0001\u0000\u0000\u0000,-\u0005\u0004\u0000\u0000-.\u0005\u0014\u0000"+
		"\u0000.0\u0005\u0005\u0000\u0000/1\u0005\u000f\u0000\u00000/\u0001\u0000"+
		"\u0000\u000001\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u000023\u0005"+
		"\u0006\u0000\u000037\u0005\u0007\u0000\u000046\u0003\b\u0004\u000054\u0001"+
		"\u0000\u0000\u000069\u0001\u0000\u0000\u000075\u0001\u0000\u0000\u0000"+
		"78\u0001\u0000\u0000\u00008:\u0001\u0000\u0000\u000097\u0001\u0000\u0000"+
		"\u0000:;\u0005\b\u0000\u0000;\u0007\u0001\u0000\u0000\u0000<A\u0003\n"+
		"\u0005\u0000=A\u0003\u0016\u000b\u0000>A\u0003\f\u0006\u0000?A\u0003\u0012"+
		"\t\u0000@<\u0001\u0000\u0000\u0000@=\u0001\u0000\u0000\u0000@>\u0001\u0000"+
		"\u0000\u0000@?\u0001\u0000\u0000\u0000A\t\u0001\u0000\u0000\u0000BC\u0005"+
		"\u0014\u0000\u0000CD\u0005\t\u0000\u0000DE\u0005\u0014\u0000\u0000EG\u0005"+
		"\u0005\u0000\u0000FH\u0003\u000e\u0007\u0000GF\u0001\u0000\u0000\u0000"+
		"GH\u0001\u0000\u0000\u0000HI\u0001\u0000\u0000\u0000IJ\u0005\u0006\u0000"+
		"\u0000JK\u0005\u0002\u0000\u0000K\u000b\u0001\u0000\u0000\u0000LM\u0005"+
		"\u0014\u0000\u0000MO\u0005\u0005\u0000\u0000NP\u0003\u000e\u0007\u0000"+
		"ON\u0001\u0000\u0000\u0000OP\u0001\u0000\u0000\u0000PQ\u0001\u0000\u0000"+
		"\u0000QR\u0005\u0006\u0000\u0000RS\u0005\u0002\u0000\u0000S\r\u0001\u0000"+
		"\u0000\u0000TY\u0003\u0010\b\u0000UV\u0005\n\u0000\u0000VX\u0003\u0010"+
		"\b\u0000WU\u0001\u0000\u0000\u0000X[\u0001\u0000\u0000\u0000YW\u0001\u0000"+
		"\u0000\u0000YZ\u0001\u0000\u0000\u0000Z\u000f\u0001\u0000\u0000\u0000"+
		"[Y\u0001\u0000\u0000\u0000\\]\u0007\u0000\u0000\u0000]\u0011\u0001\u0000"+
		"\u0000\u0000^_\u0005\u000b\u0000\u0000_`\u0005\u0014\u0000\u0000`a\u0005"+
		"\f\u0000\u0000ab\u0005\u001d\u0000\u0000bc\u0005\r\u0000\u0000cd\u0003"+
		"\u0014\n\u0000dh\u0005\u0007\u0000\u0000eg\u0003\b\u0004\u0000fe\u0001"+
		"\u0000\u0000\u0000gj\u0001\u0000\u0000\u0000hf\u0001\u0000\u0000\u0000"+
		"hi\u0001\u0000\u0000\u0000ik\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000"+
		"\u0000kl\u0005\b\u0000\u0000l\u0013\u0001\u0000\u0000\u0000mq\u0003\f"+
		"\u0006\u0000nq\u0003\n\u0005\u0000oq\u0005\u001d\u0000\u0000pm\u0001\u0000"+
		"\u0000\u0000pn\u0001\u0000\u0000\u0000po\u0001\u0000\u0000\u0000q\u0015"+
		"\u0001\u0000\u0000\u0000rs\u0005\u000e\u0000\u0000st\u0005\u0010\u0000"+
		"\u0000tu\u0005\u0002\u0000\u0000u\u0017\u0001\u0000\u0000\u0000\u000b"+
		"\u001a\u001c$07@GOYhp";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
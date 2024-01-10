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
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		VarD=18, VarT=19, VINT=20, TYPES=21, L=22, VSTR=23, TINT=24, TFLO=25, 
		TCHA=26, TSTR=27, VALUES=28, VFLO=29, VCHA=30, R=31, SIG=32, ADDSIG=33, 
		WS=34, ANY=35;
	public static final int
		RULE_program = 0, RULE_modularCall = 1, RULE_anotherDirectory = 2, RULE_dFunc = 3, 
		RULE_dDFunc = 4, RULE_wRFunc = 5, RULE_types = 6, RULE_wORFunc = 7, RULE_param = 8, 
		RULE_statement = 9, RULE_varFunc = 10, RULE_func = 11, RULE_param2 = 12, 
		RULE_vParam = 13, RULE_statementR = 14, RULE_returnStatement = 15, RULE_returnData = 16, 
		RULE_range = 17, RULE_for = 18, RULE_var = 19, RULE_varG = 20, RULE_varA = 21, 
		RULE_conditions = 22, RULE_condition = 23, RULE_addConditions = 24;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "modularCall", "anotherDirectory", "dFunc", "dDFunc", "wRFunc", 
			"types", "wORFunc", "param", "statement", "varFunc", "func", "param2", 
			"vParam", "statementR", "returnStatement", "returnData", "range", "for", 
			"var", "varG", "varA", "conditions", "condition", "addConditions"
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
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==T__3) {
				{
				setState(52);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__3:
					{
					setState(50);
					dFunc();
					}
					break;
				case T__0:
					{
					setState(51);
					modularCall();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(56);
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
		public TerminalNode L() { return getToken(MiuLanguageParser.L, 0); }
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
			setState(57);
			match(T__0);
			setState(58);
			match(L);
			setState(62);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(59);
				anotherDirectory();
				}
				}
				setState(64);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(65);
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
		public TerminalNode L() { return getToken(MiuLanguageParser.L, 0); }
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
			setState(67);
			match(T__2);
			setState(68);
			match(L);
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
		public TerminalNode L() { return getToken(MiuLanguageParser.L, 0); }
		public DDFuncContext dDFunc() {
			return getRuleContext(DDFuncContext.class,0);
		}
		public ParamContext param() {
			return getRuleContext(ParamContext.class,0);
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
			setState(70);
			match(T__3);
			setState(71);
			match(L);
			setState(72);
			match(T__4);
			setState(74);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==L) {
				{
				setState(73);
				param();
				}
			}

			setState(76);
			match(T__5);
			setState(77);
			dDFunc();
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
	public static class DDFuncContext extends ParserRuleContext {
		public WRFuncContext wRFunc() {
			return getRuleContext(WRFuncContext.class,0);
		}
		public WORFuncContext wORFunc() {
			return getRuleContext(WORFuncContext.class,0);
		}
		public DDFuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dDFunc; }
	}

	public final DDFuncContext dDFunc() throws RecognitionException {
		DDFuncContext _localctx = new DDFuncContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_dDFunc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__6:
				{
				setState(79);
				wRFunc();
				}
				break;
			case T__7:
				{
				setState(80);
				wORFunc();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class WRFuncContext extends ParserRuleContext {
		public TypesContext types() {
			return getRuleContext(TypesContext.class,0);
		}
		public List<StatementRContext> statementR() {
			return getRuleContexts(StatementRContext.class);
		}
		public StatementRContext statementR(int i) {
			return getRuleContext(StatementRContext.class,i);
		}
		public WRFuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wRFunc; }
	}

	public final WRFuncContext wRFunc() throws RecognitionException {
		WRFuncContext _localctx = new WRFuncContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_wRFunc);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			match(T__6);
			setState(84);
			types();
			setState(85);
			match(T__7);
			setState(89);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4272128L) != 0)) {
				{
				{
				setState(86);
				statementR();
				}
				}
				setState(91);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(92);
			match(T__8);
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
	public static class TypesContext extends ParserRuleContext {
		public TerminalNode TYPES() { return getToken(MiuLanguageParser.TYPES, 0); }
		public TypesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_types; }
	}

	public final TypesContext types() throws RecognitionException {
		TypesContext _localctx = new TypesContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_types);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(94);
			match(TYPES);
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
	public static class WORFuncContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public WORFuncContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wORFunc; }
	}

	public final WORFuncContext wORFunc() throws RecognitionException {
		WORFuncContext _localctx = new WORFuncContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_wORFunc);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			match(T__7);
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4268032L) != 0)) {
				{
				{
				setState(97);
				statement();
				}
				}
				setState(102);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(103);
			match(T__8);
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
	public static class ParamContext extends ParserRuleContext {
		public List<TerminalNode> L() { return getTokens(MiuLanguageParser.L); }
		public TerminalNode L(int i) {
			return getToken(MiuLanguageParser.L, i);
		}
		public List<TerminalNode> VarT() { return getTokens(MiuLanguageParser.VarT); }
		public TerminalNode VarT(int i) {
			return getToken(MiuLanguageParser.VarT, i);
		}
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			match(L);
			setState(106);
			match(VarT);
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__9) {
				{
				{
				setState(107);
				match(T__9);
				setState(108);
				match(L);
				setState(109);
				match(VarT);
				}
				}
				setState(114);
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
		public VarAContext varA() {
			return getRuleContext(VarAContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(115);
				varFunc();
				}
				break;
			case 2:
				{
				setState(116);
				var();
				}
				break;
			case 3:
				{
				setState(117);
				func();
				}
				break;
			case 4:
				{
				setState(118);
				for_();
				}
				break;
			case 5:
				{
				setState(119);
				varA();
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
		public List<TerminalNode> L() { return getTokens(MiuLanguageParser.L); }
		public TerminalNode L(int i) {
			return getToken(MiuLanguageParser.L, i);
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
		enterRule(_localctx, 20, RULE_varFunc);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(L);
			setState(123);
			match(T__10);
			setState(124);
			match(L);
			setState(125);
			match(T__4);
			setState(127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1624244224L) != 0)) {
				{
				setState(126);
				param2();
				}
			}

			setState(129);
			match(T__5);
			setState(130);
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
		public TerminalNode L() { return getToken(MiuLanguageParser.L, 0); }
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
		enterRule(_localctx, 22, RULE_func);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(132);
			match(L);
			setState(133);
			match(T__4);
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1624244224L) != 0)) {
				{
				setState(134);
				param2();
				}
			}

			setState(137);
			match(T__5);
			setState(138);
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
		enterRule(_localctx, 24, RULE_param2);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			vParam();
			setState(145);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__9) {
				{
				{
				setState(141);
				match(T__9);
				setState(142);
				vParam();
				}
				}
				setState(147);
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
		public TerminalNode VFLO() { return getToken(MiuLanguageParser.VFLO, 0); }
		public TerminalNode VCHA() { return getToken(MiuLanguageParser.VCHA, 0); }
		public TerminalNode L() { return getToken(MiuLanguageParser.L, 0); }
		public List<TerminalNode> VINT() { return getTokens(MiuLanguageParser.VINT); }
		public TerminalNode VINT(int i) {
			return getToken(MiuLanguageParser.VINT, i);
		}
		public VParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vParam; }
	}

	public final VParamContext vParam() throws RecognitionException {
		VParamContext _localctx = new VParamContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_vParam);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VSTR:
				{
				setState(148);
				match(VSTR);
				}
				break;
			case VINT:
				{
				setState(150); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(149);
					match(VINT);
					}
					}
					setState(152); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==VINT );
				}
				break;
			case VFLO:
				{
				setState(154);
				match(VFLO);
				}
				break;
			case VCHA:
				{
				setState(155);
				match(VCHA);
				}
				break;
			case L:
				{
				setState(156);
				match(L);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class StatementRContext extends ParserRuleContext {
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StatementRContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementR; }
	}

	public final StatementRContext statementR() throws RecognitionException {
		StatementRContext _localctx = new StatementRContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_statementR);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4268032L) != 0)) {
				{
				{
				setState(159);
				statement();
				}
				}
				setState(164);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(165);
			returnStatement();
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
	public static class ReturnStatementContext extends ParserRuleContext {
		public ReturnDataContext returnData() {
			return getRuleContext(ReturnDataContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			match(T__11);
			setState(168);
			returnData();
			setState(169);
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
	public static class ReturnDataContext extends ParserRuleContext {
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public List<TerminalNode> ANY() { return getTokens(MiuLanguageParser.ANY); }
		public TerminalNode ANY(int i) {
			return getToken(MiuLanguageParser.ANY, i);
		}
		public ReturnDataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnData; }
	}

	public final ReturnDataContext returnData() throws RecognitionException {
		ReturnDataContext _localctx = new ReturnDataContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_returnData);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case L:
			case VALUES:
				{
				setState(171);
				condition();
				}
				break;
			case ANY:
				{
				setState(173); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(172);
					match(ANY);
					}
					}
					setState(175); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==ANY );
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class RangeContext extends ParserRuleContext {
		public List<TerminalNode> VINT() { return getTokens(MiuLanguageParser.VINT); }
		public TerminalNode VINT(int i) {
			return getToken(MiuLanguageParser.VINT, i);
		}
		public RangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_range; }
	}

	public final RangeContext range() throws RecognitionException {
		RangeContext _localctx = new RangeContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_range);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(180); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(179);
				match(VINT);
				}
				}
				setState(182); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==VINT );
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
		public TerminalNode L() { return getToken(MiuLanguageParser.L, 0); }
		public List<RangeContext> range() {
			return getRuleContexts(RangeContext.class);
		}
		public RangeContext range(int i) {
			return getRuleContext(RangeContext.class,i);
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
		enterRule(_localctx, 36, RULE_for);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(T__12);
			setState(185);
			match(L);
			setState(186);
			match(T__13);
			setState(187);
			range();
			setState(188);
			match(T__14);
			setState(189);
			range();
			setState(190);
			match(T__7);
			setState(194);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4268032L) != 0)) {
				{
				{
				setState(191);
				statement();
				}
				}
				setState(196);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(197);
			match(T__8);
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
		public VarGContext varG() {
			return getRuleContext(VarGContext.class,0);
		}
		public VarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var; }
	}

	public final VarContext var() throws RecognitionException {
		VarContext _localctx = new VarContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_var);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(199);
			match(T__15);
			setState(200);
			varG();
			setState(201);
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
	public static class VarGContext extends ParserRuleContext {
		public TerminalNode L() { return getToken(MiuLanguageParser.L, 0); }
		public TerminalNode VarD() { return getToken(MiuLanguageParser.VarD, 0); }
		public TerminalNode VarT() { return getToken(MiuLanguageParser.VarT, 0); }
		public VarGContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varG; }
	}

	public final VarGContext varG() throws RecognitionException {
		VarGContext _localctx = new VarGContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_varG);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			match(L);
			setState(205);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VarT) {
				{
				setState(204);
				match(VarT);
				}
			}

			setState(207);
			match(VarD);
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
	public static class VarAContext extends ParserRuleContext {
		public TerminalNode L() { return getToken(MiuLanguageParser.L, 0); }
		public TerminalNode VALUES() { return getToken(MiuLanguageParser.VALUES, 0); }
		public VarAContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varA; }
	}

	public final VarAContext varA() throws RecognitionException {
		VarAContext _localctx = new VarAContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_varA);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(L);
			setState(210);
			match(T__16);
			setState(211);
			match(VALUES);
			setState(212);
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
	public static class ConditionsContext extends ParserRuleContext {
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public AddConditionsContext addConditions() {
			return getRuleContext(AddConditionsContext.class,0);
		}
		public ConditionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditions; }
	}

	public final ConditionsContext conditions() throws RecognitionException {
		ConditionsContext _localctx = new ConditionsContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_conditions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
			condition();
			setState(216);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ADDSIG) {
				{
				setState(215);
				addConditions();
				}
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
	public static class ConditionContext extends ParserRuleContext {
		public TerminalNode SIG() { return getToken(MiuLanguageParser.SIG, 0); }
		public List<TerminalNode> VALUES() { return getTokens(MiuLanguageParser.VALUES); }
		public TerminalNode VALUES(int i) {
			return getToken(MiuLanguageParser.VALUES, i);
		}
		public List<TerminalNode> L() { return getTokens(MiuLanguageParser.L); }
		public TerminalNode L(int i) {
			return getToken(MiuLanguageParser.L, i);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_condition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			_la = _input.LA(1);
			if ( !(_la==L || _la==VALUES) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(219);
			match(SIG);
			setState(220);
			_la = _input.LA(1);
			if ( !(_la==L || _la==VALUES) ) {
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
	public static class AddConditionsContext extends ParserRuleContext {
		public TerminalNode ADDSIG() { return getToken(MiuLanguageParser.ADDSIG, 0); }
		public TerminalNode SIG() { return getToken(MiuLanguageParser.SIG, 0); }
		public TerminalNode VALUES() { return getToken(MiuLanguageParser.VALUES, 0); }
		public TerminalNode L() { return getToken(MiuLanguageParser.L, 0); }
		public AddConditionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addConditions; }
	}

	public final AddConditionsContext addConditions() throws RecognitionException {
		AddConditionsContext _localctx = new AddConditionsContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_addConditions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
			match(ADDSIG);
			setState(223);
			match(SIG);
			setState(224);
			_la = _input.LA(1);
			if ( !(_la==L || _la==VALUES) ) {
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

	public static final String _serializedATN =
		"\u0004\u0001#\u00e3\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0001\u0000\u0001\u0000\u0005\u00005\b\u0000\n\u0000\f\u00008\t\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001=\b\u0001\n\u0001\f\u0001"+
		"@\t\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003K\b\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0003\u0004"+
		"R\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005"+
		"X\b\u0005\n\u0005\f\u0005[\t\u0005\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0005\u0007c\b\u0007\n\u0007\f\u0007"+
		"f\t\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0005\bo\b\b\n\b\f\br\t\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003"+
		"\ty\b\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u0080\b\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u0088"+
		"\b\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0005"+
		"\f\u0090\b\f\n\f\f\f\u0093\t\f\u0001\r\u0001\r\u0004\r\u0097\b\r\u000b"+
		"\r\f\r\u0098\u0001\r\u0001\r\u0001\r\u0003\r\u009e\b\r\u0001\u000e\u0005"+
		"\u000e\u00a1\b\u000e\n\u000e\f\u000e\u00a4\t\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010"+
		"\u0004\u0010\u00ae\b\u0010\u000b\u0010\f\u0010\u00af\u0003\u0010\u00b2"+
		"\b\u0010\u0001\u0011\u0004\u0011\u00b5\b\u0011\u000b\u0011\f\u0011\u00b6"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0005\u0012\u00c1\b\u0012\n\u0012\f\u0012\u00c4"+
		"\t\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0014\u0001\u0014\u0003\u0014\u00ce\b\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0016\u0001\u0016\u0003\u0016\u00d9\b\u0016\u0001\u0017\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0000\u0000\u0019\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.0\u0000\u0001\u0002\u0000"+
		"\u0016\u0016\u001c\u001c\u00e4\u00006\u0001\u0000\u0000\u0000\u00029\u0001"+
		"\u0000\u0000\u0000\u0004C\u0001\u0000\u0000\u0000\u0006F\u0001\u0000\u0000"+
		"\u0000\bQ\u0001\u0000\u0000\u0000\nS\u0001\u0000\u0000\u0000\f^\u0001"+
		"\u0000\u0000\u0000\u000e`\u0001\u0000\u0000\u0000\u0010i\u0001\u0000\u0000"+
		"\u0000\u0012x\u0001\u0000\u0000\u0000\u0014z\u0001\u0000\u0000\u0000\u0016"+
		"\u0084\u0001\u0000\u0000\u0000\u0018\u008c\u0001\u0000\u0000\u0000\u001a"+
		"\u009d\u0001\u0000\u0000\u0000\u001c\u00a2\u0001\u0000\u0000\u0000\u001e"+
		"\u00a7\u0001\u0000\u0000\u0000 \u00b1\u0001\u0000\u0000\u0000\"\u00b4"+
		"\u0001\u0000\u0000\u0000$\u00b8\u0001\u0000\u0000\u0000&\u00c7\u0001\u0000"+
		"\u0000\u0000(\u00cb\u0001\u0000\u0000\u0000*\u00d1\u0001\u0000\u0000\u0000"+
		",\u00d6\u0001\u0000\u0000\u0000.\u00da\u0001\u0000\u0000\u00000\u00de"+
		"\u0001\u0000\u0000\u000025\u0003\u0006\u0003\u000035\u0003\u0002\u0001"+
		"\u000042\u0001\u0000\u0000\u000043\u0001\u0000\u0000\u000058\u0001\u0000"+
		"\u0000\u000064\u0001\u0000\u0000\u000067\u0001\u0000\u0000\u00007\u0001"+
		"\u0001\u0000\u0000\u000086\u0001\u0000\u0000\u00009:\u0005\u0001\u0000"+
		"\u0000:>\u0005\u0016\u0000\u0000;=\u0003\u0004\u0002\u0000<;\u0001\u0000"+
		"\u0000\u0000=@\u0001\u0000\u0000\u0000><\u0001\u0000\u0000\u0000>?\u0001"+
		"\u0000\u0000\u0000?A\u0001\u0000\u0000\u0000@>\u0001\u0000\u0000\u0000"+
		"AB\u0005\u0002\u0000\u0000B\u0003\u0001\u0000\u0000\u0000CD\u0005\u0003"+
		"\u0000\u0000DE\u0005\u0016\u0000\u0000E\u0005\u0001\u0000\u0000\u0000"+
		"FG\u0005\u0004\u0000\u0000GH\u0005\u0016\u0000\u0000HJ\u0005\u0005\u0000"+
		"\u0000IK\u0003\u0010\b\u0000JI\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000"+
		"\u0000KL\u0001\u0000\u0000\u0000LM\u0005\u0006\u0000\u0000MN\u0003\b\u0004"+
		"\u0000N\u0007\u0001\u0000\u0000\u0000OR\u0003\n\u0005\u0000PR\u0003\u000e"+
		"\u0007\u0000QO\u0001\u0000\u0000\u0000QP\u0001\u0000\u0000\u0000R\t\u0001"+
		"\u0000\u0000\u0000ST\u0005\u0007\u0000\u0000TU\u0003\f\u0006\u0000UY\u0005"+
		"\b\u0000\u0000VX\u0003\u001c\u000e\u0000WV\u0001\u0000\u0000\u0000X[\u0001"+
		"\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000"+
		"Z\\\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000\\]\u0005\t\u0000"+
		"\u0000]\u000b\u0001\u0000\u0000\u0000^_\u0005\u0015\u0000\u0000_\r\u0001"+
		"\u0000\u0000\u0000`d\u0005\b\u0000\u0000ac\u0003\u0012\t\u0000ba\u0001"+
		"\u0000\u0000\u0000cf\u0001\u0000\u0000\u0000db\u0001\u0000\u0000\u0000"+
		"de\u0001\u0000\u0000\u0000eg\u0001\u0000\u0000\u0000fd\u0001\u0000\u0000"+
		"\u0000gh\u0005\t\u0000\u0000h\u000f\u0001\u0000\u0000\u0000ij\u0005\u0016"+
		"\u0000\u0000jp\u0005\u0013\u0000\u0000kl\u0005\n\u0000\u0000lm\u0005\u0016"+
		"\u0000\u0000mo\u0005\u0013\u0000\u0000nk\u0001\u0000\u0000\u0000or\u0001"+
		"\u0000\u0000\u0000pn\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000"+
		"q\u0011\u0001\u0000\u0000\u0000rp\u0001\u0000\u0000\u0000sy\u0003\u0014"+
		"\n\u0000ty\u0003&\u0013\u0000uy\u0003\u0016\u000b\u0000vy\u0003$\u0012"+
		"\u0000wy\u0003*\u0015\u0000xs\u0001\u0000\u0000\u0000xt\u0001\u0000\u0000"+
		"\u0000xu\u0001\u0000\u0000\u0000xv\u0001\u0000\u0000\u0000xw\u0001\u0000"+
		"\u0000\u0000y\u0013\u0001\u0000\u0000\u0000z{\u0005\u0016\u0000\u0000"+
		"{|\u0005\u000b\u0000\u0000|}\u0005\u0016\u0000\u0000}\u007f\u0005\u0005"+
		"\u0000\u0000~\u0080\u0003\u0018\f\u0000\u007f~\u0001\u0000\u0000\u0000"+
		"\u007f\u0080\u0001\u0000\u0000\u0000\u0080\u0081\u0001\u0000\u0000\u0000"+
		"\u0081\u0082\u0005\u0006\u0000\u0000\u0082\u0083\u0005\u0002\u0000\u0000"+
		"\u0083\u0015\u0001\u0000\u0000\u0000\u0084\u0085\u0005\u0016\u0000\u0000"+
		"\u0085\u0087\u0005\u0005\u0000\u0000\u0086\u0088\u0003\u0018\f\u0000\u0087"+
		"\u0086\u0001\u0000\u0000\u0000\u0087\u0088\u0001\u0000\u0000\u0000\u0088"+
		"\u0089\u0001\u0000\u0000\u0000\u0089\u008a\u0005\u0006\u0000\u0000\u008a"+
		"\u008b\u0005\u0002\u0000\u0000\u008b\u0017\u0001\u0000\u0000\u0000\u008c"+
		"\u0091\u0003\u001a\r\u0000\u008d\u008e\u0005\n\u0000\u0000\u008e\u0090"+
		"\u0003\u001a\r\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u0090\u0093\u0001"+
		"\u0000\u0000\u0000\u0091\u008f\u0001\u0000\u0000\u0000\u0091\u0092\u0001"+
		"\u0000\u0000\u0000\u0092\u0019\u0001\u0000\u0000\u0000\u0093\u0091\u0001"+
		"\u0000\u0000\u0000\u0094\u009e\u0005\u0017\u0000\u0000\u0095\u0097\u0005"+
		"\u0014\u0000\u0000\u0096\u0095\u0001\u0000\u0000\u0000\u0097\u0098\u0001"+
		"\u0000\u0000\u0000\u0098\u0096\u0001\u0000\u0000\u0000\u0098\u0099\u0001"+
		"\u0000\u0000\u0000\u0099\u009e\u0001\u0000\u0000\u0000\u009a\u009e\u0005"+
		"\u001d\u0000\u0000\u009b\u009e\u0005\u001e\u0000\u0000\u009c\u009e\u0005"+
		"\u0016\u0000\u0000\u009d\u0094\u0001\u0000\u0000\u0000\u009d\u0096\u0001"+
		"\u0000\u0000\u0000\u009d\u009a\u0001\u0000\u0000\u0000\u009d\u009b\u0001"+
		"\u0000\u0000\u0000\u009d\u009c\u0001\u0000\u0000\u0000\u009e\u001b\u0001"+
		"\u0000\u0000\u0000\u009f\u00a1\u0003\u0012\t\u0000\u00a0\u009f\u0001\u0000"+
		"\u0000\u0000\u00a1\u00a4\u0001\u0000\u0000\u0000\u00a2\u00a0\u0001\u0000"+
		"\u0000\u0000\u00a2\u00a3\u0001\u0000\u0000\u0000\u00a3\u00a5\u0001\u0000"+
		"\u0000\u0000\u00a4\u00a2\u0001\u0000\u0000\u0000\u00a5\u00a6\u0003\u001e"+
		"\u000f\u0000\u00a6\u001d\u0001\u0000\u0000\u0000\u00a7\u00a8\u0005\f\u0000"+
		"\u0000\u00a8\u00a9\u0003 \u0010\u0000\u00a9\u00aa\u0005\u0002\u0000\u0000"+
		"\u00aa\u001f\u0001\u0000\u0000\u0000\u00ab\u00b2\u0003.\u0017\u0000\u00ac"+
		"\u00ae\u0005#\u0000\u0000\u00ad\u00ac\u0001\u0000\u0000\u0000\u00ae\u00af"+
		"\u0001\u0000\u0000\u0000\u00af\u00ad\u0001\u0000\u0000\u0000\u00af\u00b0"+
		"\u0001\u0000\u0000\u0000\u00b0\u00b2\u0001\u0000\u0000\u0000\u00b1\u00ab"+
		"\u0001\u0000\u0000\u0000\u00b1\u00ad\u0001\u0000\u0000\u0000\u00b2!\u0001"+
		"\u0000\u0000\u0000\u00b3\u00b5\u0005\u0014\u0000\u0000\u00b4\u00b3\u0001"+
		"\u0000\u0000\u0000\u00b5\u00b6\u0001\u0000\u0000\u0000\u00b6\u00b4\u0001"+
		"\u0000\u0000\u0000\u00b6\u00b7\u0001\u0000\u0000\u0000\u00b7#\u0001\u0000"+
		"\u0000\u0000\u00b8\u00b9\u0005\r\u0000\u0000\u00b9\u00ba\u0005\u0016\u0000"+
		"\u0000\u00ba\u00bb\u0005\u000e\u0000\u0000\u00bb\u00bc\u0003\"\u0011\u0000"+
		"\u00bc\u00bd\u0005\u000f\u0000\u0000\u00bd\u00be\u0003\"\u0011\u0000\u00be"+
		"\u00c2\u0005\b\u0000\u0000\u00bf\u00c1\u0003\u0012\t\u0000\u00c0\u00bf"+
		"\u0001\u0000\u0000\u0000\u00c1\u00c4\u0001\u0000\u0000\u0000\u00c2\u00c0"+
		"\u0001\u0000\u0000\u0000\u00c2\u00c3\u0001\u0000\u0000\u0000\u00c3\u00c5"+
		"\u0001\u0000\u0000\u0000\u00c4\u00c2\u0001\u0000\u0000\u0000\u00c5\u00c6"+
		"\u0005\t\u0000\u0000\u00c6%\u0001\u0000\u0000\u0000\u00c7\u00c8\u0005"+
		"\u0010\u0000\u0000\u00c8\u00c9\u0003(\u0014\u0000\u00c9\u00ca\u0005\u0002"+
		"\u0000\u0000\u00ca\'\u0001\u0000\u0000\u0000\u00cb\u00cd\u0005\u0016\u0000"+
		"\u0000\u00cc\u00ce\u0005\u0013\u0000\u0000\u00cd\u00cc\u0001\u0000\u0000"+
		"\u0000\u00cd\u00ce\u0001\u0000\u0000\u0000\u00ce\u00cf\u0001\u0000\u0000"+
		"\u0000\u00cf\u00d0\u0005\u0012\u0000\u0000\u00d0)\u0001\u0000\u0000\u0000"+
		"\u00d1\u00d2\u0005\u0016\u0000\u0000\u00d2\u00d3\u0005\u0011\u0000\u0000"+
		"\u00d3\u00d4\u0005\u001c\u0000\u0000\u00d4\u00d5\u0005\u0002\u0000\u0000"+
		"\u00d5+\u0001\u0000\u0000\u0000\u00d6\u00d8\u0003.\u0017\u0000\u00d7\u00d9"+
		"\u00030\u0018\u0000\u00d8\u00d7\u0001\u0000\u0000\u0000\u00d8\u00d9\u0001"+
		"\u0000\u0000\u0000\u00d9-\u0001\u0000\u0000\u0000\u00da\u00db\u0007\u0000"+
		"\u0000\u0000\u00db\u00dc\u0005 \u0000\u0000\u00dc\u00dd\u0007\u0000\u0000"+
		"\u0000\u00dd/\u0001\u0000\u0000\u0000\u00de\u00df\u0005!\u0000\u0000\u00df"+
		"\u00e0\u0005 \u0000\u0000\u00e0\u00e1\u0007\u0000\u0000\u0000\u00e11\u0001"+
		"\u0000\u0000\u0000\u001546>JQYdpx\u007f\u0087\u0091\u0098\u009d\u00a2"+
		"\u00af\u00b1\u00b6\u00c2\u00cd\u00d8";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
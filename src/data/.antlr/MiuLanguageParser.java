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
		T__9=10, T__10=11, T__11=12, T__12=13, Var=14, Fname=15, String=16, Vtype=17, 
		WS=18;
	public static final int
		RULE_program = 0, RULE_modularCall = 1, RULE_function = 2, RULE_varFunctionStatement = 3, 
		RULE_paramRe = 4, RULE_param = 5, RULE_param2 = 6, RULE_paramSend = 7, 
		RULE_statement = 8, RULE_char = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "modularCall", "function", "varFunctionStatement", "paramRe", 
			"param", "param2", "paramSend", "statement", "char"
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
		public List<FunctionContext> function() {
			return getRuleContexts(FunctionContext.class);
		}
		public FunctionContext function(int i) {
			return getRuleContext(FunctionContext.class,i);
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
			setState(24);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==T__3) {
				{
				setState(22);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__3:
					{
					setState(20);
					function();
					}
					break;
				case T__0:
					{
					setState(21);
					modularCall();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(26);
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
		public List<TerminalNode> Var() { return getTokens(MiuLanguageParser.Var); }
		public TerminalNode Var(int i) {
			return getToken(MiuLanguageParser.Var, i);
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
			setState(27);
			match(T__0);
			setState(29); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(28);
				match(Var);
				}
				}
				setState(31); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Var );
			setState(41);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(33);
				match(T__1);
				setState(35); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(34);
					match(Var);
					}
					}
					setState(37); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==Var );
				}
				}
				setState(43);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(44);
			match(T__2);
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
	public static class FunctionContext extends ParserRuleContext {
		public TerminalNode Fname() { return getToken(MiuLanguageParser.Fname, 0); }
		public ParamReContext paramRe() {
			return getRuleContext(ParamReContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public FunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function; }
	}

	public final FunctionContext function() throws RecognitionException {
		FunctionContext _localctx = new FunctionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_function);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			match(T__3);
			setState(47);
			match(Fname);
			setState(48);
			match(T__4);
			setState(50);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Var) {
				{
				setState(49);
				paramRe();
				}
			}

			setState(52);
			match(T__5);
			setState(53);
			match(T__6);
			setState(57);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Var) {
				{
				{
				setState(54);
				statement();
				}
				}
				setState(59);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(60);
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
	public static class VarFunctionStatementContext extends ParserRuleContext {
		public TerminalNode Fname() { return getToken(MiuLanguageParser.Fname, 0); }
		public List<TerminalNode> Var() { return getTokens(MiuLanguageParser.Var); }
		public TerminalNode Var(int i) {
			return getToken(MiuLanguageParser.Var, i);
		}
		public Param2Context param2() {
			return getRuleContext(Param2Context.class,0);
		}
		public VarFunctionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varFunctionStatement; }
	}

	public final VarFunctionStatementContext varFunctionStatement() throws RecognitionException {
		VarFunctionStatementContext _localctx = new VarFunctionStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_varFunctionStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(62);
				match(Var);
				}
				}
				setState(65); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Var );
			setState(67);
			match(T__8);
			setState(68);
			match(Fname);
			setState(69);
			match(T__4);
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 86016L) != 0)) {
				{
				setState(70);
				param2();
				}
			}

			setState(73);
			match(T__5);
			setState(74);
			match(T__2);
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
	public static class ParamReContext extends ParserRuleContext {
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public ParamReContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramRe; }
	}

	public final ParamReContext paramRe() throws RecognitionException {
		ParamReContext _localctx = new ParamReContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_paramRe);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			param();
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__9) {
				{
				{
				setState(77);
				match(T__9);
				setState(78);
				param();
				}
				}
				setState(83);
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
	public static class ParamContext extends ParserRuleContext {
		public TerminalNode Vtype() { return getToken(MiuLanguageParser.Vtype, 0); }
		public List<TerminalNode> Var() { return getTokens(MiuLanguageParser.Var); }
		public TerminalNode Var(int i) {
			return getToken(MiuLanguageParser.Var, i);
		}
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_param);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(84);
				match(Var);
				}
				}
				setState(87); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Var );
			setState(89);
			match(T__10);
			setState(90);
			match(Vtype);
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
		public ParamSendContext paramSend() {
			return getRuleContext(ParamSendContext.class,0);
		}
		public TerminalNode String() { return getToken(MiuLanguageParser.String, 0); }
		public CharContext char_() {
			return getRuleContext(CharContext.class,0);
		}
		public Param2Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param2; }
	}

	public final Param2Context param2() throws RecognitionException {
		Param2Context _localctx = new Param2Context(_ctx, getState());
		enterRule(_localctx, 12, RULE_param2);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Var:
				{
				setState(92);
				paramSend();
				}
				break;
			case String:
				{
				setState(93);
				match(String);
				}
				break;
			case T__11:
				{
				setState(94);
				char_();
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
	public static class ParamSendContext extends ParserRuleContext {
		public List<TerminalNode> Var() { return getTokens(MiuLanguageParser.Var); }
		public TerminalNode Var(int i) {
			return getToken(MiuLanguageParser.Var, i);
		}
		public ParamSendContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramSend; }
	}

	public final ParamSendContext paramSend() throws RecognitionException {
		ParamSendContext _localctx = new ParamSendContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_paramSend);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(98); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(97);
				match(Var);
				}
				}
				setState(100); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Var );
			setState(110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__9) {
				{
				{
				setState(102);
				match(T__9);
				setState(104); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(103);
					match(Var);
					}
					}
					setState(106); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==Var );
				}
				}
				setState(112);
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
		public VarFunctionStatementContext varFunctionStatement() {
			return getRuleContext(VarFunctionStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
			varFunctionStatement();
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
	public static class CharContext extends ParserRuleContext {
		public CharContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_char; }
	}

	public final CharContext char_() throws RecognitionException {
		CharContext _localctx = new CharContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_char);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			match(T__11);
			setState(118);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				{
				setState(116);
				match(T__12);
				}
				break;
			case 2:
				{
				setState(117);
				_la = _input.LA(1);
				if ( _la <= 0 || (_la==T__11) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
			setState(120);
			match(T__11);
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
		"\u0004\u0001\u0012{\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0001\u0000\u0001\u0000\u0005\u0000\u0017\b"+
		"\u0000\n\u0000\f\u0000\u001a\t\u0000\u0001\u0001\u0001\u0001\u0004\u0001"+
		"\u001e\b\u0001\u000b\u0001\f\u0001\u001f\u0001\u0001\u0001\u0001\u0004"+
		"\u0001$\b\u0001\u000b\u0001\f\u0001%\u0005\u0001(\b\u0001\n\u0001\f\u0001"+
		"+\t\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u00023\b\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0005\u00028\b\u0002\n\u0002\f\u0002;\t\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0004\u0003@\b\u0003\u000b\u0003\f\u0003A\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0003\u0003H\b\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004P\b"+
		"\u0004\n\u0004\f\u0004S\t\u0004\u0001\u0005\u0004\u0005V\b\u0005\u000b"+
		"\u0005\f\u0005W\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0003\u0006`\b\u0006\u0001\u0007\u0004\u0007c\b\u0007"+
		"\u000b\u0007\f\u0007d\u0001\u0007\u0001\u0007\u0004\u0007i\b\u0007\u000b"+
		"\u0007\f\u0007j\u0005\u0007m\b\u0007\n\u0007\f\u0007p\t\u0007\u0001\b"+
		"\u0001\b\u0001\t\u0001\t\u0001\t\u0003\tw\b\t\u0001\t\u0001\t\u0001\t"+
		"\u0000\u0000\n\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0000\u0001"+
		"\u0001\u0000\f\f\u0081\u0000\u0018\u0001\u0000\u0000\u0000\u0002\u001b"+
		"\u0001\u0000\u0000\u0000\u0004.\u0001\u0000\u0000\u0000\u0006?\u0001\u0000"+
		"\u0000\u0000\bL\u0001\u0000\u0000\u0000\nU\u0001\u0000\u0000\u0000\f_"+
		"\u0001\u0000\u0000\u0000\u000eb\u0001\u0000\u0000\u0000\u0010q\u0001\u0000"+
		"\u0000\u0000\u0012s\u0001\u0000\u0000\u0000\u0014\u0017\u0003\u0004\u0002"+
		"\u0000\u0015\u0017\u0003\u0002\u0001\u0000\u0016\u0014\u0001\u0000\u0000"+
		"\u0000\u0016\u0015\u0001\u0000\u0000\u0000\u0017\u001a\u0001\u0000\u0000"+
		"\u0000\u0018\u0016\u0001\u0000\u0000\u0000\u0018\u0019\u0001\u0000\u0000"+
		"\u0000\u0019\u0001\u0001\u0000\u0000\u0000\u001a\u0018\u0001\u0000\u0000"+
		"\u0000\u001b\u001d\u0005\u0001\u0000\u0000\u001c\u001e\u0005\u000e\u0000"+
		"\u0000\u001d\u001c\u0001\u0000\u0000\u0000\u001e\u001f\u0001\u0000\u0000"+
		"\u0000\u001f\u001d\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000\u0000"+
		" )\u0001\u0000\u0000\u0000!#\u0005\u0002\u0000\u0000\"$\u0005\u000e\u0000"+
		"\u0000#\"\u0001\u0000\u0000\u0000$%\u0001\u0000\u0000\u0000%#\u0001\u0000"+
		"\u0000\u0000%&\u0001\u0000\u0000\u0000&(\u0001\u0000\u0000\u0000\'!\u0001"+
		"\u0000\u0000\u0000(+\u0001\u0000\u0000\u0000)\'\u0001\u0000\u0000\u0000"+
		")*\u0001\u0000\u0000\u0000*,\u0001\u0000\u0000\u0000+)\u0001\u0000\u0000"+
		"\u0000,-\u0005\u0003\u0000\u0000-\u0003\u0001\u0000\u0000\u0000./\u0005"+
		"\u0004\u0000\u0000/0\u0005\u000f\u0000\u000002\u0005\u0005\u0000\u0000"+
		"13\u0003\b\u0004\u000021\u0001\u0000\u0000\u000023\u0001\u0000\u0000\u0000"+
		"34\u0001\u0000\u0000\u000045\u0005\u0006\u0000\u000059\u0005\u0007\u0000"+
		"\u000068\u0003\u0010\b\u000076\u0001\u0000\u0000\u00008;\u0001\u0000\u0000"+
		"\u000097\u0001\u0000\u0000\u00009:\u0001\u0000\u0000\u0000:<\u0001\u0000"+
		"\u0000\u0000;9\u0001\u0000\u0000\u0000<=\u0005\b\u0000\u0000=\u0005\u0001"+
		"\u0000\u0000\u0000>@\u0005\u000e\u0000\u0000?>\u0001\u0000\u0000\u0000"+
		"@A\u0001\u0000\u0000\u0000A?\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000"+
		"\u0000BC\u0001\u0000\u0000\u0000CD\u0005\t\u0000\u0000DE\u0005\u000f\u0000"+
		"\u0000EG\u0005\u0005\u0000\u0000FH\u0003\f\u0006\u0000GF\u0001\u0000\u0000"+
		"\u0000GH\u0001\u0000\u0000\u0000HI\u0001\u0000\u0000\u0000IJ\u0005\u0006"+
		"\u0000\u0000JK\u0005\u0003\u0000\u0000K\u0007\u0001\u0000\u0000\u0000"+
		"LQ\u0003\n\u0005\u0000MN\u0005\n\u0000\u0000NP\u0003\n\u0005\u0000OM\u0001"+
		"\u0000\u0000\u0000PS\u0001\u0000\u0000\u0000QO\u0001\u0000\u0000\u0000"+
		"QR\u0001\u0000\u0000\u0000R\t\u0001\u0000\u0000\u0000SQ\u0001\u0000\u0000"+
		"\u0000TV\u0005\u000e\u0000\u0000UT\u0001\u0000\u0000\u0000VW\u0001\u0000"+
		"\u0000\u0000WU\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000XY\u0001"+
		"\u0000\u0000\u0000YZ\u0005\u000b\u0000\u0000Z[\u0005\u0011\u0000\u0000"+
		"[\u000b\u0001\u0000\u0000\u0000\\`\u0003\u000e\u0007\u0000]`\u0005\u0010"+
		"\u0000\u0000^`\u0003\u0012\t\u0000_\\\u0001\u0000\u0000\u0000_]\u0001"+
		"\u0000\u0000\u0000_^\u0001\u0000\u0000\u0000`\r\u0001\u0000\u0000\u0000"+
		"ac\u0005\u000e\u0000\u0000ba\u0001\u0000\u0000\u0000cd\u0001\u0000\u0000"+
		"\u0000db\u0001\u0000\u0000\u0000de\u0001\u0000\u0000\u0000en\u0001\u0000"+
		"\u0000\u0000fh\u0005\n\u0000\u0000gi\u0005\u000e\u0000\u0000hg\u0001\u0000"+
		"\u0000\u0000ij\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000jk\u0001"+
		"\u0000\u0000\u0000km\u0001\u0000\u0000\u0000lf\u0001\u0000\u0000\u0000"+
		"mp\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000no\u0001\u0000\u0000"+
		"\u0000o\u000f\u0001\u0000\u0000\u0000pn\u0001\u0000\u0000\u0000qr\u0003"+
		"\u0006\u0003\u0000r\u0011\u0001\u0000\u0000\u0000sv\u0005\f\u0000\u0000"+
		"tw\u0005\r\u0000\u0000uw\b\u0000\u0000\u0000vt\u0001\u0000\u0000\u0000"+
		"vu\u0001\u0000\u0000\u0000wx\u0001\u0000\u0000\u0000xy\u0005\f\u0000\u0000"+
		"y\u0013\u0001\u0000\u0000\u0000\u0010\u0016\u0018\u001f%)29AGQW_djnv";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
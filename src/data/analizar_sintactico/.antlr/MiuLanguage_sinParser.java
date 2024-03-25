// Generated from c:/Users/ramos/OneDrive/Documentos/code_work/vite_projects/Miu/src/data/analizar_sintactico/MiuLanguage_sin.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MiuLanguage_sinParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		COMPARISON_OPERATOR=1, ADD_OPERATOR=2, EQUAL=3, FN=4, USE=5, LET=6, IN=7, 
		IF=8, ELSE=9, FOR=10, RETURN=11, ARROW=12, DOT=13, DOUBLE_DOT=14, PP=15, 
		COMMA=16, PC=17, P=18, LPAREN=19, RPAREN=20, LBRACE=21, RBRACE=22, TYPE=23, 
		BOOL=24, STRING=25, CHAR=26, FLOAT=27, INT=28, IDF=29, ID=30, WS=31, INVALID=32;
	public static final int
		RULE_program = 0, RULE_functionDeclaration = 1, RULE_moduleDeclaration = 2, 
		RULE_checkreturnFunctionRule = 3, RULE_paramList = 4, RULE_invalidRule = 5, 
		RULE_param = 6, RULE_bodyRule = 7, RULE_bodyRRule = 8, RULE_statementRRule = 9, 
		RULE_functionCall = 10, RULE_functionCallVar = 11, RULE_argList = 12, 
		RULE_statement = 13, RULE_assignment = 14, RULE_controlStructure = 15, 
		RULE_ifStatement = 16, RULE_elseIfStatement = 17, RULE_forStatement = 18, 
		RULE_comparisonExprADDRule = 19, RULE_comparisonExprRule = 20, RULE_exprReturnRule = 21, 
		RULE_exprRule = 22, RULE_fnRule = 23, RULE_idfRule = 24, RULE_useRule = 25, 
		RULE_idRule = 26, RULE_ppRule = 27, RULE_pcRule = 28, RULE_arrowRule = 29, 
		RULE_typeRule = 30, RULE_commaRule = 31, RULE_returnRule = 32, RULE_letRule = 33, 
		RULE_equalRule = 34, RULE_ifRule = 35, RULE_elseRule = 36, RULE_forRule = 37, 
		RULE_inRule = 38, RULE_doubleDotRule = 39, RULE_addOperatorRule = 40, 
		RULE_comparisonOperatorRule = 41, RULE_stringRule = 42, RULE_charRule = 43, 
		RULE_intRule = 44, RULE_floatRule = 45, RULE_boolRule = 46, RULE_dotRule = 47, 
		RULE_lparenRule = 48, RULE_rparenRule = 49, RULE_lbraceRule = 50, RULE_rbraceRule = 51, 
		RULE_pRule = 52;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "functionDeclaration", "moduleDeclaration", "checkreturnFunctionRule", 
			"paramList", "invalidRule", "param", "bodyRule", "bodyRRule", "statementRRule", 
			"functionCall", "functionCallVar", "argList", "statement", "assignment", 
			"controlStructure", "ifStatement", "elseIfStatement", "forStatement", 
			"comparisonExprADDRule", "comparisonExprRule", "exprReturnRule", "exprRule", 
			"fnRule", "idfRule", "useRule", "idRule", "ppRule", "pcRule", "arrowRule", 
			"typeRule", "commaRule", "returnRule", "letRule", "equalRule", "ifRule", 
			"elseRule", "forRule", "inRule", "doubleDotRule", "addOperatorRule", 
			"comparisonOperatorRule", "stringRule", "charRule", "intRule", "floatRule", 
			"boolRule", "dotRule", "lparenRule", "rparenRule", "lbraceRule", "rbraceRule", 
			"pRule"
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
			"STRING", "CHAR", "FLOAT", "INT", "IDF", "ID", "WS", "INVALID"
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
	public String getGrammarFileName() { return "MiuLanguage_sin.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MiuLanguage_sinParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(MiuLanguage_sinParser.EOF, 0); }
		public List<ModuleDeclarationContext> moduleDeclaration() {
			return getRuleContexts(ModuleDeclarationContext.class);
		}
		public ModuleDeclarationContext moduleDeclaration(int i) {
			return getRuleContext(ModuleDeclarationContext.class,i);
		}
		public List<FunctionDeclarationContext> functionDeclaration() {
			return getRuleContexts(FunctionDeclarationContext.class);
		}
		public FunctionDeclarationContext functionDeclaration(int i) {
			return getRuleContext(FunctionDeclarationContext.class,i);
		}
		public TerminalNode INVALID() { return getToken(MiuLanguage_sinParser.INVALID, 0); }
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
			setState(110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==FN || _la==USE) {
				{
				setState(108);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case USE:
					{
					setState(106);
					moduleDeclaration();
					}
					break;
				case FN:
					{
					setState(107);
					functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(112);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INVALID) {
				{
				setState(113);
				match(INVALID);
				}
			}

			setState(116);
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

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDeclarationContext extends ParserRuleContext {
		public FnRuleContext fnRule() {
			return getRuleContext(FnRuleContext.class,0);
		}
		public IdfRuleContext idfRule() {
			return getRuleContext(IdfRuleContext.class,0);
		}
		public LparenRuleContext lparenRule() {
			return getRuleContext(LparenRuleContext.class,0);
		}
		public RparenRuleContext rparenRule() {
			return getRuleContext(RparenRuleContext.class,0);
		}
		public CheckreturnFunctionRuleContext checkreturnFunctionRule() {
			return getRuleContext(CheckreturnFunctionRuleContext.class,0);
		}
		public ParamListContext paramList() {
			return getRuleContext(ParamListContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			fnRule();
			setState(119);
			idfRule();
			setState(120);
			lparenRule();
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(121);
				paramList();
				}
			}

			setState(124);
			rparenRule();
			setState(125);
			checkreturnFunctionRule();
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
	public static class ModuleDeclarationContext extends ParserRuleContext {
		public UseRuleContext useRule() {
			return getRuleContext(UseRuleContext.class,0);
		}
		public List<IdRuleContext> idRule() {
			return getRuleContexts(IdRuleContext.class);
		}
		public IdRuleContext idRule(int i) {
			return getRuleContext(IdRuleContext.class,i);
		}
		public PcRuleContext pcRule() {
			return getRuleContext(PcRuleContext.class,0);
		}
		public List<PpRuleContext> ppRule() {
			return getRuleContexts(PpRuleContext.class);
		}
		public PpRuleContext ppRule(int i) {
			return getRuleContext(PpRuleContext.class,i);
		}
		public ModuleDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleDeclaration; }
	}

	public final ModuleDeclarationContext moduleDeclaration() throws RecognitionException {
		ModuleDeclarationContext _localctx = new ModuleDeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_moduleDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			useRule();
			setState(128);
			idRule();
			setState(134);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PP) {
				{
				{
				setState(129);
				ppRule();
				setState(130);
				idRule();
				}
				}
				setState(136);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(137);
			pcRule();
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
	public static class CheckreturnFunctionRuleContext extends ParserRuleContext {
		public ArrowRuleContext arrowRule() {
			return getRuleContext(ArrowRuleContext.class,0);
		}
		public TypeRuleContext typeRule() {
			return getRuleContext(TypeRuleContext.class,0);
		}
		public BodyRRuleContext bodyRRule() {
			return getRuleContext(BodyRRuleContext.class,0);
		}
		public BodyRuleContext bodyRule() {
			return getRuleContext(BodyRuleContext.class,0);
		}
		public CheckreturnFunctionRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_checkreturnFunctionRule; }
	}

	public final CheckreturnFunctionRuleContext checkreturnFunctionRule() throws RecognitionException {
		CheckreturnFunctionRuleContext _localctx = new CheckreturnFunctionRuleContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_checkreturnFunctionRule);
		try {
			setState(144);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ARROW:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(139);
				arrowRule();
				setState(140);
				typeRule();
				setState(141);
				bodyRRule();
				}
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(143);
				bodyRule();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class ParamListContext extends ParserRuleContext {
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public List<CommaRuleContext> commaRule() {
			return getRuleContexts(CommaRuleContext.class);
		}
		public CommaRuleContext commaRule(int i) {
			return getRuleContext(CommaRuleContext.class,i);
		}
		public ParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramList; }
	}

	public final ParamListContext paramList() throws RecognitionException {
		ParamListContext _localctx = new ParamListContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_paramList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			param();
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(147);
				commaRule();
				setState(148);
				param();
				}
				}
				setState(154);
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
	public static class InvalidRuleContext extends ParserRuleContext {
		public TerminalNode INVALID() { return getToken(MiuLanguage_sinParser.INVALID, 0); }
		public InvalidRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_invalidRule; }
	}

	public final InvalidRuleContext invalidRule() throws RecognitionException {
		InvalidRuleContext _localctx = new InvalidRuleContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_invalidRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			match(INVALID);
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
		public IdRuleContext idRule() {
			return getRuleContext(IdRuleContext.class,0);
		}
		public PRuleContext pRule() {
			return getRuleContext(PRuleContext.class,0);
		}
		public TypeRuleContext typeRule() {
			return getRuleContext(TypeRuleContext.class,0);
		}
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			idRule();
			setState(158);
			pRule();
			setState(159);
			typeRule();
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
	public static class BodyRuleContext extends ParserRuleContext {
		public LbraceRuleContext lbraceRule() {
			return getRuleContext(LbraceRuleContext.class,0);
		}
		public RbraceRuleContext rbraceRule() {
			return getRuleContext(RbraceRuleContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BodyRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bodyRule; }
	}

	public final BodyRuleContext bodyRule() throws RecognitionException {
		BodyRuleContext _localctx = new BodyRuleContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_bodyRule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			lbraceRule();
			setState(165);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1610614080L) != 0)) {
				{
				{
				setState(162);
				statement();
				}
				}
				setState(167);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(168);
			rbraceRule();
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
	public static class BodyRRuleContext extends ParserRuleContext {
		public LbraceRuleContext lbraceRule() {
			return getRuleContext(LbraceRuleContext.class,0);
		}
		public StatementRRuleContext statementRRule() {
			return getRuleContext(StatementRRuleContext.class,0);
		}
		public RbraceRuleContext rbraceRule() {
			return getRuleContext(RbraceRuleContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BodyRRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bodyRRule; }
	}

	public final BodyRRuleContext bodyRRule() throws RecognitionException {
		BodyRRuleContext _localctx = new BodyRRuleContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_bodyRRule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			lbraceRule();
			setState(174);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1610614080L) != 0)) {
				{
				{
				setState(171);
				statement();
				}
				}
				setState(176);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(177);
			statementRRule();
			setState(178);
			rbraceRule();
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
	public static class StatementRRuleContext extends ParserRuleContext {
		public ReturnRuleContext returnRule() {
			return getRuleContext(ReturnRuleContext.class,0);
		}
		public ExprReturnRuleContext exprReturnRule() {
			return getRuleContext(ExprReturnRuleContext.class,0);
		}
		public PcRuleContext pcRule() {
			return getRuleContext(PcRuleContext.class,0);
		}
		public StatementRRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementRRule; }
	}

	public final StatementRRuleContext statementRRule() throws RecognitionException {
		StatementRRuleContext _localctx = new StatementRRuleContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_statementRRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(180);
			returnRule();
			setState(181);
			exprReturnRule();
			setState(182);
			pcRule();
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
	public static class FunctionCallContext extends ParserRuleContext {
		public IdfRuleContext idfRule() {
			return getRuleContext(IdfRuleContext.class,0);
		}
		public LparenRuleContext lparenRule() {
			return getRuleContext(LparenRuleContext.class,0);
		}
		public RparenRuleContext rparenRule() {
			return getRuleContext(RparenRuleContext.class,0);
		}
		public PcRuleContext pcRule() {
			return getRuleContext(PcRuleContext.class,0);
		}
		public ArgListContext argList() {
			return getRuleContext(ArgListContext.class,0);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			idfRule();
			setState(185);
			lparenRule();
			setState(187);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1593835520L) != 0)) {
				{
				setState(186);
				argList();
				}
			}

			setState(189);
			rparenRule();
			setState(190);
			pcRule();
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
	public static class FunctionCallVarContext extends ParserRuleContext {
		public IdRuleContext idRule() {
			return getRuleContext(IdRuleContext.class,0);
		}
		public DotRuleContext dotRule() {
			return getRuleContext(DotRuleContext.class,0);
		}
		public IdfRuleContext idfRule() {
			return getRuleContext(IdfRuleContext.class,0);
		}
		public LparenRuleContext lparenRule() {
			return getRuleContext(LparenRuleContext.class,0);
		}
		public RparenRuleContext rparenRule() {
			return getRuleContext(RparenRuleContext.class,0);
		}
		public PcRuleContext pcRule() {
			return getRuleContext(PcRuleContext.class,0);
		}
		public ArgListContext argList() {
			return getRuleContext(ArgListContext.class,0);
		}
		public FunctionCallVarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCallVar; }
	}

	public final FunctionCallVarContext functionCallVar() throws RecognitionException {
		FunctionCallVarContext _localctx = new FunctionCallVarContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_functionCallVar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			idRule();
			setState(193);
			dotRule();
			setState(194);
			idfRule();
			setState(195);
			lparenRule();
			setState(197);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1593835520L) != 0)) {
				{
				setState(196);
				argList();
				}
			}

			setState(199);
			rparenRule();
			setState(200);
			pcRule();
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
	public static class ArgListContext extends ParserRuleContext {
		public List<IdRuleContext> idRule() {
			return getRuleContexts(IdRuleContext.class);
		}
		public IdRuleContext idRule(int i) {
			return getRuleContext(IdRuleContext.class,i);
		}
		public List<StringRuleContext> stringRule() {
			return getRuleContexts(StringRuleContext.class);
		}
		public StringRuleContext stringRule(int i) {
			return getRuleContext(StringRuleContext.class,i);
		}
		public List<CharRuleContext> charRule() {
			return getRuleContexts(CharRuleContext.class);
		}
		public CharRuleContext charRule(int i) {
			return getRuleContext(CharRuleContext.class,i);
		}
		public List<IntRuleContext> intRule() {
			return getRuleContexts(IntRuleContext.class);
		}
		public IntRuleContext intRule(int i) {
			return getRuleContext(IntRuleContext.class,i);
		}
		public List<FloatRuleContext> floatRule() {
			return getRuleContexts(FloatRuleContext.class);
		}
		public FloatRuleContext floatRule(int i) {
			return getRuleContext(FloatRuleContext.class,i);
		}
		public List<BoolRuleContext> boolRule() {
			return getRuleContexts(BoolRuleContext.class);
		}
		public BoolRuleContext boolRule(int i) {
			return getRuleContext(BoolRuleContext.class,i);
		}
		public List<CommaRuleContext> commaRule() {
			return getRuleContexts(CommaRuleContext.class);
		}
		public CommaRuleContext commaRule(int i) {
			return getRuleContext(CommaRuleContext.class,i);
		}
		public ArgListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argList; }
	}

	public final ArgListContext argList() throws RecognitionException {
		ArgListContext _localctx = new ArgListContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_argList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(202);
				idRule();
				}
				break;
			case STRING:
				{
				setState(203);
				stringRule();
				}
				break;
			case CHAR:
				{
				setState(204);
				charRule();
				}
				break;
			case INT:
				{
				setState(205);
				intRule();
				}
				break;
			case FLOAT:
				{
				setState(206);
				floatRule();
				}
				break;
			case BOOL:
				{
				setState(207);
				boolRule();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(221);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(210);
				commaRule();
				setState(217);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(211);
					idRule();
					}
					break;
				case STRING:
					{
					setState(212);
					stringRule();
					}
					break;
				case CHAR:
					{
					setState(213);
					charRule();
					}
					break;
				case INT:
					{
					setState(214);
					intRule();
					}
					break;
				case FLOAT:
					{
					setState(215);
					floatRule();
					}
					break;
				case BOOL:
					{
					setState(216);
					boolRule();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(223);
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
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public FunctionCallVarContext functionCallVar() {
			return getRuleContext(FunctionCallVarContext.class,0);
		}
		public ControlStructureContext controlStructure() {
			return getRuleContext(ControlStructureContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_statement);
		try {
			setState(228);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LET:
				enterOuterAlt(_localctx, 1);
				{
				setState(224);
				assignment();
				}
				break;
			case IDF:
				enterOuterAlt(_localctx, 2);
				{
				setState(225);
				functionCall();
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 3);
				{
				setState(226);
				functionCallVar();
				}
				break;
			case IF:
			case FOR:
				enterOuterAlt(_localctx, 4);
				{
				setState(227);
				controlStructure();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class AssignmentContext extends ParserRuleContext {
		public LetRuleContext letRule() {
			return getRuleContext(LetRuleContext.class,0);
		}
		public IdRuleContext idRule() {
			return getRuleContext(IdRuleContext.class,0);
		}
		public EqualRuleContext equalRule() {
			return getRuleContext(EqualRuleContext.class,0);
		}
		public ExprRuleContext exprRule() {
			return getRuleContext(ExprRuleContext.class,0);
		}
		public PcRuleContext pcRule() {
			return getRuleContext(PcRuleContext.class,0);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(230);
			letRule();
			setState(231);
			idRule();
			setState(232);
			equalRule();
			setState(233);
			exprRule();
			setState(234);
			pcRule();
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
	public static class ControlStructureContext extends ParserRuleContext {
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public ForStatementContext forStatement() {
			return getRuleContext(ForStatementContext.class,0);
		}
		public ControlStructureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_controlStructure; }
	}

	public final ControlStructureContext controlStructure() throws RecognitionException {
		ControlStructureContext _localctx = new ControlStructureContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_controlStructure);
		try {
			setState(238);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(236);
				ifStatement();
				}
				break;
			case FOR:
				enterOuterAlt(_localctx, 2);
				{
				setState(237);
				forStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class IfStatementContext extends ParserRuleContext {
		public IfRuleContext ifRule() {
			return getRuleContext(IfRuleContext.class,0);
		}
		public ComparisonExprADDRuleContext comparisonExprADDRule() {
			return getRuleContext(ComparisonExprADDRuleContext.class,0);
		}
		public List<BodyRuleContext> bodyRule() {
			return getRuleContexts(BodyRuleContext.class);
		}
		public BodyRuleContext bodyRule(int i) {
			return getRuleContext(BodyRuleContext.class,i);
		}
		public List<ElseIfStatementContext> elseIfStatement() {
			return getRuleContexts(ElseIfStatementContext.class);
		}
		public ElseIfStatementContext elseIfStatement(int i) {
			return getRuleContext(ElseIfStatementContext.class,i);
		}
		public ElseRuleContext elseRule() {
			return getRuleContext(ElseRuleContext.class,0);
		}
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_ifStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			ifRule();
			setState(241);
			comparisonExprADDRule();
			setState(242);
			bodyRule();
			setState(246);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(243);
					elseIfStatement();
					}
					} 
				}
				setState(248);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			}
			setState(252);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(249);
				elseRule();
				setState(250);
				bodyRule();
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
	public static class ElseIfStatementContext extends ParserRuleContext {
		public ElseRuleContext elseRule() {
			return getRuleContext(ElseRuleContext.class,0);
		}
		public IfRuleContext ifRule() {
			return getRuleContext(IfRuleContext.class,0);
		}
		public ComparisonExprADDRuleContext comparisonExprADDRule() {
			return getRuleContext(ComparisonExprADDRuleContext.class,0);
		}
		public BodyRuleContext bodyRule() {
			return getRuleContext(BodyRuleContext.class,0);
		}
		public ElseIfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfStatement; }
	}

	public final ElseIfStatementContext elseIfStatement() throws RecognitionException {
		ElseIfStatementContext _localctx = new ElseIfStatementContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_elseIfStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(254);
			elseRule();
			setState(255);
			ifRule();
			setState(256);
			comparisonExprADDRule();
			setState(257);
			bodyRule();
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
	public static class ForStatementContext extends ParserRuleContext {
		public ForRuleContext forRule() {
			return getRuleContext(ForRuleContext.class,0);
		}
		public IdRuleContext idRule() {
			return getRuleContext(IdRuleContext.class,0);
		}
		public InRuleContext inRule() {
			return getRuleContext(InRuleContext.class,0);
		}
		public List<IntRuleContext> intRule() {
			return getRuleContexts(IntRuleContext.class);
		}
		public IntRuleContext intRule(int i) {
			return getRuleContext(IntRuleContext.class,i);
		}
		public DoubleDotRuleContext doubleDotRule() {
			return getRuleContext(DoubleDotRuleContext.class,0);
		}
		public BodyRuleContext bodyRule() {
			return getRuleContext(BodyRuleContext.class,0);
		}
		public ForStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStatement; }
	}

	public final ForStatementContext forStatement() throws RecognitionException {
		ForStatementContext _localctx = new ForStatementContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_forStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			forRule();
			setState(260);
			idRule();
			setState(261);
			inRule();
			setState(262);
			intRule();
			setState(263);
			doubleDotRule();
			setState(264);
			intRule();
			setState(265);
			bodyRule();
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
	public static class ComparisonExprADDRuleContext extends ParserRuleContext {
		public List<ComparisonExprRuleContext> comparisonExprRule() {
			return getRuleContexts(ComparisonExprRuleContext.class);
		}
		public ComparisonExprRuleContext comparisonExprRule(int i) {
			return getRuleContext(ComparisonExprRuleContext.class,i);
		}
		public List<AddOperatorRuleContext> addOperatorRule() {
			return getRuleContexts(AddOperatorRuleContext.class);
		}
		public AddOperatorRuleContext addOperatorRule(int i) {
			return getRuleContext(AddOperatorRuleContext.class,i);
		}
		public ComparisonExprADDRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparisonExprADDRule; }
	}

	public final ComparisonExprADDRuleContext comparisonExprADDRule() throws RecognitionException {
		ComparisonExprADDRuleContext _localctx = new ComparisonExprADDRuleContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_comparisonExprADDRule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			comparisonExprRule();
			setState(273);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ADD_OPERATOR) {
				{
				{
				setState(268);
				addOperatorRule();
				setState(269);
				comparisonExprRule();
				}
				}
				setState(275);
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
	public static class ComparisonExprRuleContext extends ParserRuleContext {
		public List<ExprRuleContext> exprRule() {
			return getRuleContexts(ExprRuleContext.class);
		}
		public ExprRuleContext exprRule(int i) {
			return getRuleContext(ExprRuleContext.class,i);
		}
		public ComparisonOperatorRuleContext comparisonOperatorRule() {
			return getRuleContext(ComparisonOperatorRuleContext.class,0);
		}
		public ComparisonExprRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparisonExprRule; }
	}

	public final ComparisonExprRuleContext comparisonExprRule() throws RecognitionException {
		ComparisonExprRuleContext _localctx = new ComparisonExprRuleContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_comparisonExprRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(276);
			exprRule();
			setState(277);
			comparisonOperatorRule();
			setState(278);
			exprRule();
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
	public static class ExprReturnRuleContext extends ParserRuleContext {
		public ExprRuleContext exprRule() {
			return getRuleContext(ExprRuleContext.class,0);
		}
		public ComparisonExprADDRuleContext comparisonExprADDRule() {
			return getRuleContext(ComparisonExprADDRuleContext.class,0);
		}
		public ExprReturnRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprReturnRule; }
	}

	public final ExprReturnRuleContext exprReturnRule() throws RecognitionException {
		ExprReturnRuleContext _localctx = new ExprReturnRuleContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_exprReturnRule);
		try {
			setState(282);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(280);
				exprRule();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(281);
				comparisonExprADDRule();
				}
				break;
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
	public static class ExprRuleContext extends ParserRuleContext {
		public IdRuleContext idRule() {
			return getRuleContext(IdRuleContext.class,0);
		}
		public StringRuleContext stringRule() {
			return getRuleContext(StringRuleContext.class,0);
		}
		public CharRuleContext charRule() {
			return getRuleContext(CharRuleContext.class,0);
		}
		public IntRuleContext intRule() {
			return getRuleContext(IntRuleContext.class,0);
		}
		public FloatRuleContext floatRule() {
			return getRuleContext(FloatRuleContext.class,0);
		}
		public BoolRuleContext boolRule() {
			return getRuleContext(BoolRuleContext.class,0);
		}
		public ExprRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprRule; }
	}

	public final ExprRuleContext exprRule() throws RecognitionException {
		ExprRuleContext _localctx = new ExprRuleContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_exprRule);
		try {
			setState(290);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(284);
				idRule();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(285);
				stringRule();
				}
				break;
			case CHAR:
				enterOuterAlt(_localctx, 3);
				{
				setState(286);
				charRule();
				}
				break;
			case INT:
				enterOuterAlt(_localctx, 4);
				{
				setState(287);
				intRule();
				}
				break;
			case FLOAT:
				enterOuterAlt(_localctx, 5);
				{
				setState(288);
				floatRule();
				}
				break;
			case BOOL:
				enterOuterAlt(_localctx, 6);
				{
				setState(289);
				boolRule();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class FnRuleContext extends ParserRuleContext {
		public TerminalNode FN() { return getToken(MiuLanguage_sinParser.FN, 0); }
		public FnRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnRule; }
	}

	public final FnRuleContext fnRule() throws RecognitionException {
		FnRuleContext _localctx = new FnRuleContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_fnRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(292);
			match(FN);
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
	public static class IdfRuleContext extends ParserRuleContext {
		public TerminalNode IDF() { return getToken(MiuLanguage_sinParser.IDF, 0); }
		public IdfRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idfRule; }
	}

	public final IdfRuleContext idfRule() throws RecognitionException {
		IdfRuleContext _localctx = new IdfRuleContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_idfRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(294);
			match(IDF);
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
	public static class UseRuleContext extends ParserRuleContext {
		public TerminalNode USE() { return getToken(MiuLanguage_sinParser.USE, 0); }
		public UseRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_useRule; }
	}

	public final UseRuleContext useRule() throws RecognitionException {
		UseRuleContext _localctx = new UseRuleContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_useRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(296);
			match(USE);
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
	public static class IdRuleContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MiuLanguage_sinParser.ID, 0); }
		public IdRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idRule; }
	}

	public final IdRuleContext idRule() throws RecognitionException {
		IdRuleContext _localctx = new IdRuleContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_idRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(298);
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
	public static class PpRuleContext extends ParserRuleContext {
		public TerminalNode PP() { return getToken(MiuLanguage_sinParser.PP, 0); }
		public PpRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ppRule; }
	}

	public final PpRuleContext ppRule() throws RecognitionException {
		PpRuleContext _localctx = new PpRuleContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_ppRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(300);
			match(PP);
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
	public static class PcRuleContext extends ParserRuleContext {
		public TerminalNode PC() { return getToken(MiuLanguage_sinParser.PC, 0); }
		public PcRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pcRule; }
	}

	public final PcRuleContext pcRule() throws RecognitionException {
		PcRuleContext _localctx = new PcRuleContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_pcRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(302);
			match(PC);
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
	public static class ArrowRuleContext extends ParserRuleContext {
		public TerminalNode ARROW() { return getToken(MiuLanguage_sinParser.ARROW, 0); }
		public ArrowRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrowRule; }
	}

	public final ArrowRuleContext arrowRule() throws RecognitionException {
		ArrowRuleContext _localctx = new ArrowRuleContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_arrowRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(304);
			match(ARROW);
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
	public static class TypeRuleContext extends ParserRuleContext {
		public TerminalNode TYPE() { return getToken(MiuLanguage_sinParser.TYPE, 0); }
		public TypeRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeRule; }
	}

	public final TypeRuleContext typeRule() throws RecognitionException {
		TypeRuleContext _localctx = new TypeRuleContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_typeRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(306);
			match(TYPE);
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
	public static class CommaRuleContext extends ParserRuleContext {
		public TerminalNode COMMA() { return getToken(MiuLanguage_sinParser.COMMA, 0); }
		public CommaRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commaRule; }
	}

	public final CommaRuleContext commaRule() throws RecognitionException {
		CommaRuleContext _localctx = new CommaRuleContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_commaRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(308);
			match(COMMA);
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
	public static class ReturnRuleContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(MiuLanguage_sinParser.RETURN, 0); }
		public ReturnRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnRule; }
	}

	public final ReturnRuleContext returnRule() throws RecognitionException {
		ReturnRuleContext _localctx = new ReturnRuleContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_returnRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(310);
			match(RETURN);
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
	public static class LetRuleContext extends ParserRuleContext {
		public TerminalNode LET() { return getToken(MiuLanguage_sinParser.LET, 0); }
		public LetRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_letRule; }
	}

	public final LetRuleContext letRule() throws RecognitionException {
		LetRuleContext _localctx = new LetRuleContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_letRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(312);
			match(LET);
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
	public static class EqualRuleContext extends ParserRuleContext {
		public TerminalNode EQUAL() { return getToken(MiuLanguage_sinParser.EQUAL, 0); }
		public EqualRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_equalRule; }
	}

	public final EqualRuleContext equalRule() throws RecognitionException {
		EqualRuleContext _localctx = new EqualRuleContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_equalRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(314);
			match(EQUAL);
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
	public static class IfRuleContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(MiuLanguage_sinParser.IF, 0); }
		public IfRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifRule; }
	}

	public final IfRuleContext ifRule() throws RecognitionException {
		IfRuleContext _localctx = new IfRuleContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_ifRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(316);
			match(IF);
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
	public static class ElseRuleContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(MiuLanguage_sinParser.ELSE, 0); }
		public ElseRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseRule; }
	}

	public final ElseRuleContext elseRule() throws RecognitionException {
		ElseRuleContext _localctx = new ElseRuleContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_elseRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(318);
			match(ELSE);
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
	public static class ForRuleContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(MiuLanguage_sinParser.FOR, 0); }
		public ForRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forRule; }
	}

	public final ForRuleContext forRule() throws RecognitionException {
		ForRuleContext _localctx = new ForRuleContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_forRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			match(FOR);
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
	public static class InRuleContext extends ParserRuleContext {
		public TerminalNode IN() { return getToken(MiuLanguage_sinParser.IN, 0); }
		public InRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inRule; }
	}

	public final InRuleContext inRule() throws RecognitionException {
		InRuleContext _localctx = new InRuleContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_inRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(322);
			match(IN);
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
	public static class DoubleDotRuleContext extends ParserRuleContext {
		public TerminalNode DOUBLE_DOT() { return getToken(MiuLanguage_sinParser.DOUBLE_DOT, 0); }
		public DoubleDotRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doubleDotRule; }
	}

	public final DoubleDotRuleContext doubleDotRule() throws RecognitionException {
		DoubleDotRuleContext _localctx = new DoubleDotRuleContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_doubleDotRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(324);
			match(DOUBLE_DOT);
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
	public static class AddOperatorRuleContext extends ParserRuleContext {
		public TerminalNode ADD_OPERATOR() { return getToken(MiuLanguage_sinParser.ADD_OPERATOR, 0); }
		public AddOperatorRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addOperatorRule; }
	}

	public final AddOperatorRuleContext addOperatorRule() throws RecognitionException {
		AddOperatorRuleContext _localctx = new AddOperatorRuleContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_addOperatorRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(326);
			match(ADD_OPERATOR);
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
	public static class ComparisonOperatorRuleContext extends ParserRuleContext {
		public TerminalNode COMPARISON_OPERATOR() { return getToken(MiuLanguage_sinParser.COMPARISON_OPERATOR, 0); }
		public ComparisonOperatorRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparisonOperatorRule; }
	}

	public final ComparisonOperatorRuleContext comparisonOperatorRule() throws RecognitionException {
		ComparisonOperatorRuleContext _localctx = new ComparisonOperatorRuleContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_comparisonOperatorRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(328);
			match(COMPARISON_OPERATOR);
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
	public static class StringRuleContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(MiuLanguage_sinParser.STRING, 0); }
		public StringRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringRule; }
	}

	public final StringRuleContext stringRule() throws RecognitionException {
		StringRuleContext _localctx = new StringRuleContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_stringRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(330);
			match(STRING);
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
	public static class CharRuleContext extends ParserRuleContext {
		public TerminalNode CHAR() { return getToken(MiuLanguage_sinParser.CHAR, 0); }
		public CharRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_charRule; }
	}

	public final CharRuleContext charRule() throws RecognitionException {
		CharRuleContext _localctx = new CharRuleContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_charRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
			match(CHAR);
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
	public static class IntRuleContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(MiuLanguage_sinParser.INT, 0); }
		public IntRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_intRule; }
	}

	public final IntRuleContext intRule() throws RecognitionException {
		IntRuleContext _localctx = new IntRuleContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_intRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(334);
			match(INT);
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
	public static class FloatRuleContext extends ParserRuleContext {
		public TerminalNode FLOAT() { return getToken(MiuLanguage_sinParser.FLOAT, 0); }
		public FloatRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_floatRule; }
	}

	public final FloatRuleContext floatRule() throws RecognitionException {
		FloatRuleContext _localctx = new FloatRuleContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_floatRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(336);
			match(FLOAT);
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
	public static class BoolRuleContext extends ParserRuleContext {
		public TerminalNode BOOL() { return getToken(MiuLanguage_sinParser.BOOL, 0); }
		public BoolRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolRule; }
	}

	public final BoolRuleContext boolRule() throws RecognitionException {
		BoolRuleContext _localctx = new BoolRuleContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_boolRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
			match(BOOL);
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
	public static class DotRuleContext extends ParserRuleContext {
		public TerminalNode DOT() { return getToken(MiuLanguage_sinParser.DOT, 0); }
		public DotRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dotRule; }
	}

	public final DotRuleContext dotRule() throws RecognitionException {
		DotRuleContext _localctx = new DotRuleContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_dotRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(340);
			match(DOT);
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
	public static class LparenRuleContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(MiuLanguage_sinParser.LPAREN, 0); }
		public LparenRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lparenRule; }
	}

	public final LparenRuleContext lparenRule() throws RecognitionException {
		LparenRuleContext _localctx = new LparenRuleContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_lparenRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(342);
			match(LPAREN);
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
	public static class RparenRuleContext extends ParserRuleContext {
		public TerminalNode RPAREN() { return getToken(MiuLanguage_sinParser.RPAREN, 0); }
		public RparenRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rparenRule; }
	}

	public final RparenRuleContext rparenRule() throws RecognitionException {
		RparenRuleContext _localctx = new RparenRuleContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_rparenRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(344);
			match(RPAREN);
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
	public static class LbraceRuleContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(MiuLanguage_sinParser.LBRACE, 0); }
		public LbraceRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lbraceRule; }
	}

	public final LbraceRuleContext lbraceRule() throws RecognitionException {
		LbraceRuleContext _localctx = new LbraceRuleContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_lbraceRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
			match(LBRACE);
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
	public static class RbraceRuleContext extends ParserRuleContext {
		public TerminalNode RBRACE() { return getToken(MiuLanguage_sinParser.RBRACE, 0); }
		public RbraceRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rbraceRule; }
	}

	public final RbraceRuleContext rbraceRule() throws RecognitionException {
		RbraceRuleContext _localctx = new RbraceRuleContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_rbraceRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(348);
			match(RBRACE);
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
	public static class PRuleContext extends ParserRuleContext {
		public TerminalNode P() { return getToken(MiuLanguage_sinParser.P, 0); }
		public PRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pRule; }
	}

	public final PRuleContext pRule() throws RecognitionException {
		PRuleContext _localctx = new PRuleContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_pRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			match(P);
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
		"\u0004\u0001 \u0161\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002"+
		"-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u00071\u0002"+
		"2\u00072\u00023\u00073\u00024\u00074\u0001\u0000\u0001\u0000\u0005\u0000"+
		"m\b\u0000\n\u0000\f\u0000p\t\u0000\u0001\u0000\u0003\u0000s\b\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003"+
		"\u0001{\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002\u0085\b\u0002\n"+
		"\u0002\f\u0002\u0088\t\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003\u0091\b\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004\u0097\b\u0004\n"+
		"\u0004\f\u0004\u009a\t\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0005\u0007\u00a4"+
		"\b\u0007\n\u0007\f\u0007\u00a7\t\u0007\u0001\u0007\u0001\u0007\u0001\b"+
		"\u0001\b\u0005\b\u00ad\b\b\n\b\f\b\u00b0\t\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0003\n\u00bc\b\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0003\u000b\u00c6\b\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f\u00d1\b\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f\u00da\b\f\u0005\f\u00dc"+
		"\b\f\n\f\f\f\u00df\t\f\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u00e5\b"+
		"\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0001\u000f\u0003\u000f\u00ef\b\u000f\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0005\u0010\u00f5\b\u0010\n\u0010\f\u0010\u00f8"+
		"\t\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u00fd\b\u0010"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0005\u0013"+
		"\u0110\b\u0013\n\u0013\f\u0013\u0113\t\u0013\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0003\u0015\u011b\b\u0015\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0003"+
		"\u0016\u0123\b\u0016\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001"+
		"\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0001"+
		"\u001c\u0001\u001c\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001"+
		"\u001f\u0001\u001f\u0001 \u0001 \u0001!\u0001!\u0001\"\u0001\"\u0001#"+
		"\u0001#\u0001$\u0001$\u0001%\u0001%\u0001&\u0001&\u0001\'\u0001\'\u0001"+
		"(\u0001(\u0001)\u0001)\u0001*\u0001*\u0001+\u0001+\u0001,\u0001,\u0001"+
		"-\u0001-\u0001.\u0001.\u0001/\u0001/\u00010\u00010\u00011\u00011\u0001"+
		"2\u00012\u00013\u00013\u00014\u00014\u00014\u0000\u00005\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \""+
		"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfh\u0000\u0000\u014e\u0000n\u0001\u0000"+
		"\u0000\u0000\u0002v\u0001\u0000\u0000\u0000\u0004\u007f\u0001\u0000\u0000"+
		"\u0000\u0006\u0090\u0001\u0000\u0000\u0000\b\u0092\u0001\u0000\u0000\u0000"+
		"\n\u009b\u0001\u0000\u0000\u0000\f\u009d\u0001\u0000\u0000\u0000\u000e"+
		"\u00a1\u0001\u0000\u0000\u0000\u0010\u00aa\u0001\u0000\u0000\u0000\u0012"+
		"\u00b4\u0001\u0000\u0000\u0000\u0014\u00b8\u0001\u0000\u0000\u0000\u0016"+
		"\u00c0\u0001\u0000\u0000\u0000\u0018\u00d0\u0001\u0000\u0000\u0000\u001a"+
		"\u00e4\u0001\u0000\u0000\u0000\u001c\u00e6\u0001\u0000\u0000\u0000\u001e"+
		"\u00ee\u0001\u0000\u0000\u0000 \u00f0\u0001\u0000\u0000\u0000\"\u00fe"+
		"\u0001\u0000\u0000\u0000$\u0103\u0001\u0000\u0000\u0000&\u010b\u0001\u0000"+
		"\u0000\u0000(\u0114\u0001\u0000\u0000\u0000*\u011a\u0001\u0000\u0000\u0000"+
		",\u0122\u0001\u0000\u0000\u0000.\u0124\u0001\u0000\u0000\u00000\u0126"+
		"\u0001\u0000\u0000\u00002\u0128\u0001\u0000\u0000\u00004\u012a\u0001\u0000"+
		"\u0000\u00006\u012c\u0001\u0000\u0000\u00008\u012e\u0001\u0000\u0000\u0000"+
		":\u0130\u0001\u0000\u0000\u0000<\u0132\u0001\u0000\u0000\u0000>\u0134"+
		"\u0001\u0000\u0000\u0000@\u0136\u0001\u0000\u0000\u0000B\u0138\u0001\u0000"+
		"\u0000\u0000D\u013a\u0001\u0000\u0000\u0000F\u013c\u0001\u0000\u0000\u0000"+
		"H\u013e\u0001\u0000\u0000\u0000J\u0140\u0001\u0000\u0000\u0000L\u0142"+
		"\u0001\u0000\u0000\u0000N\u0144\u0001\u0000\u0000\u0000P\u0146\u0001\u0000"+
		"\u0000\u0000R\u0148\u0001\u0000\u0000\u0000T\u014a\u0001\u0000\u0000\u0000"+
		"V\u014c\u0001\u0000\u0000\u0000X\u014e\u0001\u0000\u0000\u0000Z\u0150"+
		"\u0001\u0000\u0000\u0000\\\u0152\u0001\u0000\u0000\u0000^\u0154\u0001"+
		"\u0000\u0000\u0000`\u0156\u0001\u0000\u0000\u0000b\u0158\u0001\u0000\u0000"+
		"\u0000d\u015a\u0001\u0000\u0000\u0000f\u015c\u0001\u0000\u0000\u0000h"+
		"\u015e\u0001\u0000\u0000\u0000jm\u0003\u0004\u0002\u0000km\u0003\u0002"+
		"\u0001\u0000lj\u0001\u0000\u0000\u0000lk\u0001\u0000\u0000\u0000mp\u0001"+
		"\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000no\u0001\u0000\u0000\u0000"+
		"or\u0001\u0000\u0000\u0000pn\u0001\u0000\u0000\u0000qs\u0005 \u0000\u0000"+
		"rq\u0001\u0000\u0000\u0000rs\u0001\u0000\u0000\u0000st\u0001\u0000\u0000"+
		"\u0000tu\u0005\u0000\u0000\u0001u\u0001\u0001\u0000\u0000\u0000vw\u0003"+
		".\u0017\u0000wx\u00030\u0018\u0000xz\u0003`0\u0000y{\u0003\b\u0004\u0000"+
		"zy\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000{|\u0001\u0000\u0000"+
		"\u0000|}\u0003b1\u0000}~\u0003\u0006\u0003\u0000~\u0003\u0001\u0000\u0000"+
		"\u0000\u007f\u0080\u00032\u0019\u0000\u0080\u0086\u00034\u001a\u0000\u0081"+
		"\u0082\u00036\u001b\u0000\u0082\u0083\u00034\u001a\u0000\u0083\u0085\u0001"+
		"\u0000\u0000\u0000\u0084\u0081\u0001\u0000\u0000\u0000\u0085\u0088\u0001"+
		"\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000\u0086\u0087\u0001"+
		"\u0000\u0000\u0000\u0087\u0089\u0001\u0000\u0000\u0000\u0088\u0086\u0001"+
		"\u0000\u0000\u0000\u0089\u008a\u00038\u001c\u0000\u008a\u0005\u0001\u0000"+
		"\u0000\u0000\u008b\u008c\u0003:\u001d\u0000\u008c\u008d\u0003<\u001e\u0000"+
		"\u008d\u008e\u0003\u0010\b\u0000\u008e\u0091\u0001\u0000\u0000\u0000\u008f"+
		"\u0091\u0003\u000e\u0007\u0000\u0090\u008b\u0001\u0000\u0000\u0000\u0090"+
		"\u008f\u0001\u0000\u0000\u0000\u0091\u0007\u0001\u0000\u0000\u0000\u0092"+
		"\u0098\u0003\f\u0006\u0000\u0093\u0094\u0003>\u001f\u0000\u0094\u0095"+
		"\u0003\f\u0006\u0000\u0095\u0097\u0001\u0000\u0000\u0000\u0096\u0093\u0001"+
		"\u0000\u0000\u0000\u0097\u009a\u0001\u0000\u0000\u0000\u0098\u0096\u0001"+
		"\u0000\u0000\u0000\u0098\u0099\u0001\u0000\u0000\u0000\u0099\t\u0001\u0000"+
		"\u0000\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009b\u009c\u0005 \u0000"+
		"\u0000\u009c\u000b\u0001\u0000\u0000\u0000\u009d\u009e\u00034\u001a\u0000"+
		"\u009e\u009f\u0003h4\u0000\u009f\u00a0\u0003<\u001e\u0000\u00a0\r\u0001"+
		"\u0000\u0000\u0000\u00a1\u00a5\u0003d2\u0000\u00a2\u00a4\u0003\u001a\r"+
		"\u0000\u00a3\u00a2\u0001\u0000\u0000\u0000\u00a4\u00a7\u0001\u0000\u0000"+
		"\u0000\u00a5\u00a3\u0001\u0000\u0000\u0000\u00a5\u00a6\u0001\u0000\u0000"+
		"\u0000\u00a6\u00a8\u0001\u0000\u0000\u0000\u00a7\u00a5\u0001\u0000\u0000"+
		"\u0000\u00a8\u00a9\u0003f3\u0000\u00a9\u000f\u0001\u0000\u0000\u0000\u00aa"+
		"\u00ae\u0003d2\u0000\u00ab\u00ad\u0003\u001a\r\u0000\u00ac\u00ab\u0001"+
		"\u0000\u0000\u0000\u00ad\u00b0\u0001\u0000\u0000\u0000\u00ae\u00ac\u0001"+
		"\u0000\u0000\u0000\u00ae\u00af\u0001\u0000\u0000\u0000\u00af\u00b1\u0001"+
		"\u0000\u0000\u0000\u00b0\u00ae\u0001\u0000\u0000\u0000\u00b1\u00b2\u0003"+
		"\u0012\t\u0000\u00b2\u00b3\u0003f3\u0000\u00b3\u0011\u0001\u0000\u0000"+
		"\u0000\u00b4\u00b5\u0003@ \u0000\u00b5\u00b6\u0003*\u0015\u0000\u00b6"+
		"\u00b7\u00038\u001c\u0000\u00b7\u0013\u0001\u0000\u0000\u0000\u00b8\u00b9"+
		"\u00030\u0018\u0000\u00b9\u00bb\u0003`0\u0000\u00ba\u00bc\u0003\u0018"+
		"\f\u0000\u00bb\u00ba\u0001\u0000\u0000\u0000\u00bb\u00bc\u0001\u0000\u0000"+
		"\u0000\u00bc\u00bd\u0001\u0000\u0000\u0000\u00bd\u00be\u0003b1\u0000\u00be"+
		"\u00bf\u00038\u001c\u0000\u00bf\u0015\u0001\u0000\u0000\u0000\u00c0\u00c1"+
		"\u00034\u001a\u0000\u00c1\u00c2\u0003^/\u0000\u00c2\u00c3\u00030\u0018"+
		"\u0000\u00c3\u00c5\u0003`0\u0000\u00c4\u00c6\u0003\u0018\f\u0000\u00c5"+
		"\u00c4\u0001\u0000\u0000\u0000\u00c5\u00c6\u0001\u0000\u0000\u0000\u00c6"+
		"\u00c7\u0001\u0000\u0000\u0000\u00c7\u00c8\u0003b1\u0000\u00c8\u00c9\u0003"+
		"8\u001c\u0000\u00c9\u0017\u0001\u0000\u0000\u0000\u00ca\u00d1\u00034\u001a"+
		"\u0000\u00cb\u00d1\u0003T*\u0000\u00cc\u00d1\u0003V+\u0000\u00cd\u00d1"+
		"\u0003X,\u0000\u00ce\u00d1\u0003Z-\u0000\u00cf\u00d1\u0003\\.\u0000\u00d0"+
		"\u00ca\u0001\u0000\u0000\u0000\u00d0\u00cb\u0001\u0000\u0000\u0000\u00d0"+
		"\u00cc\u0001\u0000\u0000\u0000\u00d0\u00cd\u0001\u0000\u0000\u0000\u00d0"+
		"\u00ce\u0001\u0000\u0000\u0000\u00d0\u00cf\u0001\u0000\u0000\u0000\u00d1"+
		"\u00dd\u0001\u0000\u0000\u0000\u00d2\u00d9\u0003>\u001f\u0000\u00d3\u00da"+
		"\u00034\u001a\u0000\u00d4\u00da\u0003T*\u0000\u00d5\u00da\u0003V+\u0000"+
		"\u00d6\u00da\u0003X,\u0000\u00d7\u00da\u0003Z-\u0000\u00d8\u00da\u0003"+
		"\\.\u0000\u00d9\u00d3\u0001\u0000\u0000\u0000\u00d9\u00d4\u0001\u0000"+
		"\u0000\u0000\u00d9\u00d5\u0001\u0000\u0000\u0000\u00d9\u00d6\u0001\u0000"+
		"\u0000\u0000\u00d9\u00d7\u0001\u0000\u0000\u0000\u00d9\u00d8\u0001\u0000"+
		"\u0000\u0000\u00da\u00dc\u0001\u0000\u0000\u0000\u00db\u00d2\u0001\u0000"+
		"\u0000\u0000\u00dc\u00df\u0001\u0000\u0000\u0000\u00dd\u00db\u0001\u0000"+
		"\u0000\u0000\u00dd\u00de\u0001\u0000\u0000\u0000\u00de\u0019\u0001\u0000"+
		"\u0000\u0000\u00df\u00dd\u0001\u0000\u0000\u0000\u00e0\u00e5\u0003\u001c"+
		"\u000e\u0000\u00e1\u00e5\u0003\u0014\n\u0000\u00e2\u00e5\u0003\u0016\u000b"+
		"\u0000\u00e3\u00e5\u0003\u001e\u000f\u0000\u00e4\u00e0\u0001\u0000\u0000"+
		"\u0000\u00e4\u00e1\u0001\u0000\u0000\u0000\u00e4\u00e2\u0001\u0000\u0000"+
		"\u0000\u00e4\u00e3\u0001\u0000\u0000\u0000\u00e5\u001b\u0001\u0000\u0000"+
		"\u0000\u00e6\u00e7\u0003B!\u0000\u00e7\u00e8\u00034\u001a\u0000\u00e8"+
		"\u00e9\u0003D\"\u0000\u00e9\u00ea\u0003,\u0016\u0000\u00ea\u00eb\u0003"+
		"8\u001c\u0000\u00eb\u001d\u0001\u0000\u0000\u0000\u00ec\u00ef\u0003 \u0010"+
		"\u0000\u00ed\u00ef\u0003$\u0012\u0000\u00ee\u00ec\u0001\u0000\u0000\u0000"+
		"\u00ee\u00ed\u0001\u0000\u0000\u0000\u00ef\u001f\u0001\u0000\u0000\u0000"+
		"\u00f0\u00f1\u0003F#\u0000\u00f1\u00f2\u0003&\u0013\u0000\u00f2\u00f6"+
		"\u0003\u000e\u0007\u0000\u00f3\u00f5\u0003\"\u0011\u0000\u00f4\u00f3\u0001"+
		"\u0000\u0000\u0000\u00f5\u00f8\u0001\u0000\u0000\u0000\u00f6\u00f4\u0001"+
		"\u0000\u0000\u0000\u00f6\u00f7\u0001\u0000\u0000\u0000\u00f7\u00fc\u0001"+
		"\u0000\u0000\u0000\u00f8\u00f6\u0001\u0000\u0000\u0000\u00f9\u00fa\u0003"+
		"H$\u0000\u00fa\u00fb\u0003\u000e\u0007\u0000\u00fb\u00fd\u0001\u0000\u0000"+
		"\u0000\u00fc\u00f9\u0001\u0000\u0000\u0000\u00fc\u00fd\u0001\u0000\u0000"+
		"\u0000\u00fd!\u0001\u0000\u0000\u0000\u00fe\u00ff\u0003H$\u0000\u00ff"+
		"\u0100\u0003F#\u0000\u0100\u0101\u0003&\u0013\u0000\u0101\u0102\u0003"+
		"\u000e\u0007\u0000\u0102#\u0001\u0000\u0000\u0000\u0103\u0104\u0003J%"+
		"\u0000\u0104\u0105\u00034\u001a\u0000\u0105\u0106\u0003L&\u0000\u0106"+
		"\u0107\u0003X,\u0000\u0107\u0108\u0003N\'\u0000\u0108\u0109\u0003X,\u0000"+
		"\u0109\u010a\u0003\u000e\u0007\u0000\u010a%\u0001\u0000\u0000\u0000\u010b"+
		"\u0111\u0003(\u0014\u0000\u010c\u010d\u0003P(\u0000\u010d\u010e\u0003"+
		"(\u0014\u0000\u010e\u0110\u0001\u0000\u0000\u0000\u010f\u010c\u0001\u0000"+
		"\u0000\u0000\u0110\u0113\u0001\u0000\u0000\u0000\u0111\u010f\u0001\u0000"+
		"\u0000\u0000\u0111\u0112\u0001\u0000\u0000\u0000\u0112\'\u0001\u0000\u0000"+
		"\u0000\u0113\u0111\u0001\u0000\u0000\u0000\u0114\u0115\u0003,\u0016\u0000"+
		"\u0115\u0116\u0003R)\u0000\u0116\u0117\u0003,\u0016\u0000\u0117)\u0001"+
		"\u0000\u0000\u0000\u0118\u011b\u0003,\u0016\u0000\u0119\u011b\u0003&\u0013"+
		"\u0000\u011a\u0118\u0001\u0000\u0000\u0000\u011a\u0119\u0001\u0000\u0000"+
		"\u0000\u011b+\u0001\u0000\u0000\u0000\u011c\u0123\u00034\u001a\u0000\u011d"+
		"\u0123\u0003T*\u0000\u011e\u0123\u0003V+\u0000\u011f\u0123\u0003X,\u0000"+
		"\u0120\u0123\u0003Z-\u0000\u0121\u0123\u0003\\.\u0000\u0122\u011c\u0001"+
		"\u0000\u0000\u0000\u0122\u011d\u0001\u0000\u0000\u0000\u0122\u011e\u0001"+
		"\u0000\u0000\u0000\u0122\u011f\u0001\u0000\u0000\u0000\u0122\u0120\u0001"+
		"\u0000\u0000\u0000\u0122\u0121\u0001\u0000\u0000\u0000\u0123-\u0001\u0000"+
		"\u0000\u0000\u0124\u0125\u0005\u0004\u0000\u0000\u0125/\u0001\u0000\u0000"+
		"\u0000\u0126\u0127\u0005\u001d\u0000\u0000\u01271\u0001\u0000\u0000\u0000"+
		"\u0128\u0129\u0005\u0005\u0000\u0000\u01293\u0001\u0000\u0000\u0000\u012a"+
		"\u012b\u0005\u001e\u0000\u0000\u012b5\u0001\u0000\u0000\u0000\u012c\u012d"+
		"\u0005\u000f\u0000\u0000\u012d7\u0001\u0000\u0000\u0000\u012e\u012f\u0005"+
		"\u0011\u0000\u0000\u012f9\u0001\u0000\u0000\u0000\u0130\u0131\u0005\f"+
		"\u0000\u0000\u0131;\u0001\u0000\u0000\u0000\u0132\u0133\u0005\u0017\u0000"+
		"\u0000\u0133=\u0001\u0000\u0000\u0000\u0134\u0135\u0005\u0010\u0000\u0000"+
		"\u0135?\u0001\u0000\u0000\u0000\u0136\u0137\u0005\u000b\u0000\u0000\u0137"+
		"A\u0001\u0000\u0000\u0000\u0138\u0139\u0005\u0006\u0000\u0000\u0139C\u0001"+
		"\u0000\u0000\u0000\u013a\u013b\u0005\u0003\u0000\u0000\u013bE\u0001\u0000"+
		"\u0000\u0000\u013c\u013d\u0005\b\u0000\u0000\u013dG\u0001\u0000\u0000"+
		"\u0000\u013e\u013f\u0005\t\u0000\u0000\u013fI\u0001\u0000\u0000\u0000"+
		"\u0140\u0141\u0005\n\u0000\u0000\u0141K\u0001\u0000\u0000\u0000\u0142"+
		"\u0143\u0005\u0007\u0000\u0000\u0143M\u0001\u0000\u0000\u0000\u0144\u0145"+
		"\u0005\u000e\u0000\u0000\u0145O\u0001\u0000\u0000\u0000\u0146\u0147\u0005"+
		"\u0002\u0000\u0000\u0147Q\u0001\u0000\u0000\u0000\u0148\u0149\u0005\u0001"+
		"\u0000\u0000\u0149S\u0001\u0000\u0000\u0000\u014a\u014b\u0005\u0019\u0000"+
		"\u0000\u014bU\u0001\u0000\u0000\u0000\u014c\u014d\u0005\u001a\u0000\u0000"+
		"\u014dW\u0001\u0000\u0000\u0000\u014e\u014f\u0005\u001c\u0000\u0000\u014f"+
		"Y\u0001\u0000\u0000\u0000\u0150\u0151\u0005\u001b\u0000\u0000\u0151[\u0001"+
		"\u0000\u0000\u0000\u0152\u0153\u0005\u0018\u0000\u0000\u0153]\u0001\u0000"+
		"\u0000\u0000\u0154\u0155\u0005\r\u0000\u0000\u0155_\u0001\u0000\u0000"+
		"\u0000\u0156\u0157\u0005\u0013\u0000\u0000\u0157a\u0001\u0000\u0000\u0000"+
		"\u0158\u0159\u0005\u0014\u0000\u0000\u0159c\u0001\u0000\u0000\u0000\u015a"+
		"\u015b\u0005\u0015\u0000\u0000\u015be\u0001\u0000\u0000\u0000\u015c\u015d"+
		"\u0005\u0016\u0000\u0000\u015dg\u0001\u0000\u0000\u0000\u015e\u015f\u0005"+
		"\u0012\u0000\u0000\u015fi\u0001\u0000\u0000\u0000\u0015lnrz\u0086\u0090"+
		"\u0098\u00a5\u00ae\u00bb\u00c5\u00d0\u00d9\u00dd\u00e4\u00ee\u00f6\u00fc"+
		"\u0111\u011a\u0122";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
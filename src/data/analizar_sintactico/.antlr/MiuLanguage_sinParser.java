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
		COMMA=16, PC=17, P=18, MULT=19, DIV=20, SUM=21, SUB=22, LPAREN=23, RPAREN=24, 
		LBRACE=25, RBRACE=26, TYPE=27, BOOL=28, STRING=29, CHAR=30, FLOAT=31, 
		INT=32, IDF=33, ID=34, WS=35, INVALID=36;
	public static final int
		RULE_program = 0, RULE_functionDeclaration = 1, RULE_moduleDeclaration = 2, 
		RULE_checkreturnFunctionRule = 3, RULE_paramList = 4, RULE_invalidRule = 5, 
		RULE_param = 6, RULE_bodyRule = 7, RULE_bodyRRule = 8, RULE_statementRRule = 9, 
		RULE_functionCall = 10, RULE_varStatement = 11, RULE_functionCallVar = 12, 
		RULE_argList = 13, RULE_statement = 14, RULE_assignametnVar = 15, RULE_assignment = 16, 
		RULE_controlStructure = 17, RULE_ifStatement = 18, RULE_elseStatement = 19, 
		RULE_elseIfStatement = 20, RULE_forStatement = 21, RULE_comparisonExprADDRule = 22, 
		RULE_comparisonExprRule = 23, RULE_exprReturnRule = 24, RULE_exprRule = 25, 
		RULE_exprExtraRule = 26, RULE_mulOperatorRule = 27, RULE_multRule = 28, 
		RULE_divRule = 29, RULE_sumRule = 30, RULE_subRule = 31, RULE_fnRule = 32, 
		RULE_idfRule = 33, RULE_useRule = 34, RULE_idRule = 35, RULE_ppRule = 36, 
		RULE_pcRule = 37, RULE_arrowRule = 38, RULE_typeRule = 39, RULE_commaRule = 40, 
		RULE_returnRule = 41, RULE_letRule = 42, RULE_equalRule = 43, RULE_ifRule = 44, 
		RULE_elseRule = 45, RULE_forRule = 46, RULE_inRule = 47, RULE_doubleDotRule = 48, 
		RULE_addOperatorRule = 49, RULE_comparisonOperatorRule = 50, RULE_stringRule = 51, 
		RULE_charRule = 52, RULE_intRule = 53, RULE_floatRule = 54, RULE_boolRule = 55, 
		RULE_dotRule = 56, RULE_lparenRule = 57, RULE_rparenRule = 58, RULE_lbraceRule = 59, 
		RULE_rbraceRule = 60, RULE_pRule = 61;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "functionDeclaration", "moduleDeclaration", "checkreturnFunctionRule", 
			"paramList", "invalidRule", "param", "bodyRule", "bodyRRule", "statementRRule", 
			"functionCall", "varStatement", "functionCallVar", "argList", "statement", 
			"assignametnVar", "assignment", "controlStructure", "ifStatement", "elseStatement", 
			"elseIfStatement", "forStatement", "comparisonExprADDRule", "comparisonExprRule", 
			"exprReturnRule", "exprRule", "exprExtraRule", "mulOperatorRule", "multRule", 
			"divRule", "sumRule", "subRule", "fnRule", "idfRule", "useRule", "idRule", 
			"ppRule", "pcRule", "arrowRule", "typeRule", "commaRule", "returnRule", 
			"letRule", "equalRule", "ifRule", "elseRule", "forRule", "inRule", "doubleDotRule", 
			"addOperatorRule", "comparisonOperatorRule", "stringRule", "charRule", 
			"intRule", "floatRule", "boolRule", "dotRule", "lparenRule", "rparenRule", 
			"lbraceRule", "rbraceRule", "pRule"
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
			"IDF", "ID", "WS", "INVALID"
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
			setState(128);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==FN || _la==USE) {
				{
				setState(126);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case USE:
					{
					setState(124);
					moduleDeclaration();
					}
					break;
				case FN:
					{
					setState(125);
					functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(130);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(132);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INVALID) {
				{
				setState(131);
				match(INVALID);
				}
			}

			setState(134);
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
			setState(136);
			fnRule();
			setState(137);
			idfRule();
			setState(138);
			lparenRule();
			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(139);
				paramList();
				}
			}

			setState(142);
			rparenRule();
			setState(143);
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
			setState(145);
			useRule();
			setState(146);
			idRule();
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PP) {
				{
				{
				setState(147);
				ppRule();
				setState(148);
				idRule();
				}
				}
				setState(154);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(155);
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
			setState(162);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ARROW:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(157);
				arrowRule();
				setState(158);
				typeRule();
				setState(159);
				bodyRRule();
				}
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(161);
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
			setState(164);
			param();
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(165);
				commaRule();
				setState(166);
				param();
				}
				}
				setState(172);
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
			setState(173);
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
			setState(175);
			idRule();
			setState(176);
			pRule();
			setState(177);
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
			setState(179);
			lbraceRule();
			setState(183);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 25769805120L) != 0)) {
				{
				{
				setState(180);
				statement();
				}
				}
				setState(185);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(186);
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
			setState(188);
			lbraceRule();
			setState(192);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 25769805120L) != 0)) {
				{
				{
				setState(189);
				statement();
				}
				}
				setState(194);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(195);
			statementRRule();
			setState(196);
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
			setState(198);
			returnRule();
			setState(199);
			exprReturnRule();
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
			setState(202);
			idfRule();
			setState(203);
			lparenRule();
			setState(205);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 25501368320L) != 0)) {
				{
				setState(204);
				argList();
				}
			}

			setState(207);
			rparenRule();
			setState(208);
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
	public static class VarStatementContext extends ParserRuleContext {
		public IdRuleContext idRule() {
			return getRuleContext(IdRuleContext.class,0);
		}
		public List<FunctionCallVarContext> functionCallVar() {
			return getRuleContexts(FunctionCallVarContext.class);
		}
		public FunctionCallVarContext functionCallVar(int i) {
			return getRuleContext(FunctionCallVarContext.class,i);
		}
		public List<AssignametnVarContext> assignametnVar() {
			return getRuleContexts(AssignametnVarContext.class);
		}
		public AssignametnVarContext assignametnVar(int i) {
			return getRuleContext(AssignametnVarContext.class,i);
		}
		public VarStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varStatement; }
	}

	public final VarStatementContext varStatement() throws RecognitionException {
		VarStatementContext _localctx = new VarStatementContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_varStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			idRule();
			setState(215);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==EQUAL || _la==DOT) {
				{
				setState(213);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case DOT:
					{
					setState(211);
					functionCallVar();
					}
					break;
				case EQUAL:
					{
					setState(212);
					assignametnVar();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(217);
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
	public static class FunctionCallVarContext extends ParserRuleContext {
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
		enterRule(_localctx, 24, RULE_functionCallVar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			dotRule();
			setState(219);
			idfRule();
			setState(220);
			lparenRule();
			setState(222);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 25501368320L) != 0)) {
				{
				setState(221);
				argList();
				}
			}

			setState(224);
			rparenRule();
			setState(225);
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
		public List<VarStatementContext> varStatement() {
			return getRuleContexts(VarStatementContext.class);
		}
		public VarStatementContext varStatement(int i) {
			return getRuleContext(VarStatementContext.class,i);
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
		enterRule(_localctx, 26, RULE_argList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(227);
				varStatement();
				}
				break;
			case STRING:
				{
				setState(228);
				stringRule();
				}
				break;
			case CHAR:
				{
				setState(229);
				charRule();
				}
				break;
			case INT:
				{
				setState(230);
				intRule();
				}
				break;
			case FLOAT:
				{
				setState(231);
				floatRule();
				}
				break;
			case BOOL:
				{
				setState(232);
				boolRule();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(246);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(235);
				commaRule();
				setState(242);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case ID:
					{
					setState(236);
					varStatement();
					}
					break;
				case STRING:
					{
					setState(237);
					stringRule();
					}
					break;
				case CHAR:
					{
					setState(238);
					charRule();
					}
					break;
				case INT:
					{
					setState(239);
					intRule();
					}
					break;
				case FLOAT:
					{
					setState(240);
					floatRule();
					}
					break;
				case BOOL:
					{
					setState(241);
					boolRule();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(248);
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
		public VarStatementContext varStatement() {
			return getRuleContext(VarStatementContext.class,0);
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
		enterRule(_localctx, 28, RULE_statement);
		try {
			setState(253);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LET:
				enterOuterAlt(_localctx, 1);
				{
				setState(249);
				assignment();
				}
				break;
			case IDF:
				enterOuterAlt(_localctx, 2);
				{
				setState(250);
				functionCall();
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 3);
				{
				setState(251);
				varStatement();
				}
				break;
			case IF:
			case FOR:
				enterOuterAlt(_localctx, 4);
				{
				setState(252);
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
	public static class AssignametnVarContext extends ParserRuleContext {
		public EqualRuleContext equalRule() {
			return getRuleContext(EqualRuleContext.class,0);
		}
		public List<ExprRuleContext> exprRule() {
			return getRuleContexts(ExprRuleContext.class);
		}
		public ExprRuleContext exprRule(int i) {
			return getRuleContext(ExprRuleContext.class,i);
		}
		public PcRuleContext pcRule() {
			return getRuleContext(PcRuleContext.class,0);
		}
		public List<ExprExtraRuleContext> exprExtraRule() {
			return getRuleContexts(ExprExtraRuleContext.class);
		}
		public ExprExtraRuleContext exprExtraRule(int i) {
			return getRuleContext(ExprExtraRuleContext.class,i);
		}
		public AssignametnVarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignametnVar; }
	}

	public final AssignametnVarContext assignametnVar() throws RecognitionException {
		AssignametnVarContext _localctx = new AssignametnVarContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_assignametnVar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
			equalRule();
			setState(256);
			exprRule();
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 25509232644L) != 0)) {
				{
				{
				setState(257);
				exprExtraRule();
				setState(258);
				exprRule();
				}
				}
				setState(264);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(265);
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
		public List<ExprRuleContext> exprRule() {
			return getRuleContexts(ExprRuleContext.class);
		}
		public ExprRuleContext exprRule(int i) {
			return getRuleContext(ExprRuleContext.class,i);
		}
		public PcRuleContext pcRule() {
			return getRuleContext(PcRuleContext.class,0);
		}
		public List<PRuleContext> pRule() {
			return getRuleContexts(PRuleContext.class);
		}
		public PRuleContext pRule(int i) {
			return getRuleContext(PRuleContext.class,i);
		}
		public List<TypeRuleContext> typeRule() {
			return getRuleContexts(TypeRuleContext.class);
		}
		public TypeRuleContext typeRule(int i) {
			return getRuleContext(TypeRuleContext.class,i);
		}
		public List<ExprExtraRuleContext> exprExtraRule() {
			return getRuleContexts(ExprExtraRuleContext.class);
		}
		public ExprExtraRuleContext exprExtraRule(int i) {
			return getRuleContext(ExprExtraRuleContext.class,i);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_assignment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			letRule();
			setState(268);
			idRule();
			setState(274);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==P) {
				{
				{
				setState(269);
				pRule();
				setState(270);
				typeRule();
				}
				}
				setState(276);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(277);
			equalRule();
			setState(278);
			exprRule();
			setState(284);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 25509232644L) != 0)) {
				{
				{
				setState(279);
				exprExtraRule();
				setState(280);
				exprRule();
				}
				}
				setState(286);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(287);
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
		enterRule(_localctx, 34, RULE_controlStructure);
		try {
			setState(291);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(289);
				ifStatement();
				}
				break;
			case FOR:
				enterOuterAlt(_localctx, 2);
				{
				setState(290);
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
		public BodyRuleContext bodyRule() {
			return getRuleContext(BodyRuleContext.class,0);
		}
		public List<ElseIfStatementContext> elseIfStatement() {
			return getRuleContexts(ElseIfStatementContext.class);
		}
		public ElseIfStatementContext elseIfStatement(int i) {
			return getRuleContext(ElseIfStatementContext.class,i);
		}
		public ElseStatementContext elseStatement() {
			return getRuleContext(ElseStatementContext.class,0);
		}
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_ifStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(293);
			ifRule();
			setState(294);
			comparisonExprADDRule();
			setState(295);
			bodyRule();
			setState(299);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(296);
					elseIfStatement();
					}
					} 
				}
				setState(301);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			}
			setState(303);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(302);
				elseStatement();
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
	public static class ElseStatementContext extends ParserRuleContext {
		public ElseRuleContext elseRule() {
			return getRuleContext(ElseRuleContext.class,0);
		}
		public BodyRuleContext bodyRule() {
			return getRuleContext(BodyRuleContext.class,0);
		}
		public ElseStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseStatement; }
	}

	public final ElseStatementContext elseStatement() throws RecognitionException {
		ElseStatementContext _localctx = new ElseStatementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_elseStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			elseRule();
			setState(306);
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
		enterRule(_localctx, 40, RULE_elseIfStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(308);
			elseRule();
			setState(309);
			ifRule();
			setState(310);
			comparisonExprADDRule();
			setState(311);
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
		enterRule(_localctx, 42, RULE_forStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(313);
			forRule();
			setState(314);
			idRule();
			setState(315);
			inRule();
			setState(316);
			intRule();
			setState(317);
			doubleDotRule();
			setState(318);
			intRule();
			setState(319);
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
		enterRule(_localctx, 44, RULE_comparisonExprADDRule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			comparisonExprRule();
			setState(327);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ADD_OPERATOR) {
				{
				{
				setState(322);
				addOperatorRule();
				setState(323);
				comparisonExprRule();
				}
				}
				setState(329);
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
		enterRule(_localctx, 46, RULE_comparisonExprRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(330);
			exprRule();
			setState(331);
			comparisonOperatorRule();
			setState(332);
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
		public List<ExprRuleContext> exprRule() {
			return getRuleContexts(ExprRuleContext.class);
		}
		public ExprRuleContext exprRule(int i) {
			return getRuleContext(ExprRuleContext.class,i);
		}
		public List<ExprExtraRuleContext> exprExtraRule() {
			return getRuleContexts(ExprExtraRuleContext.class);
		}
		public ExprExtraRuleContext exprExtraRule(int i) {
			return getRuleContext(ExprExtraRuleContext.class,i);
		}
		public ExprReturnRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprReturnRule; }
	}

	public final ExprReturnRuleContext exprReturnRule() throws RecognitionException {
		ExprReturnRuleContext _localctx = new ExprReturnRuleContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_exprReturnRule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(334);
			exprRule();
			setState(340);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 25509232644L) != 0)) {
				{
				{
				setState(335);
				exprExtraRule();
				setState(336);
				exprRule();
				}
				}
				setState(342);
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
		enterRule(_localctx, 50, RULE_exprRule);
		try {
			setState(349);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(343);
				idRule();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(344);
				stringRule();
				}
				break;
			case CHAR:
				enterOuterAlt(_localctx, 3);
				{
				setState(345);
				charRule();
				}
				break;
			case INT:
				enterOuterAlt(_localctx, 4);
				{
				setState(346);
				intRule();
				}
				break;
			case FLOAT:
				enterOuterAlt(_localctx, 5);
				{
				setState(347);
				floatRule();
				}
				break;
			case BOOL:
				enterOuterAlt(_localctx, 6);
				{
				setState(348);
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
	public static class ExprExtraRuleContext extends ParserRuleContext {
		public MulOperatorRuleContext mulOperatorRule() {
			return getRuleContext(MulOperatorRuleContext.class,0);
		}
		public AddOperatorRuleContext addOperatorRule() {
			return getRuleContext(AddOperatorRuleContext.class,0);
		}
		public ExprExtraRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprExtraRule; }
	}

	public final ExprExtraRuleContext exprExtraRule() throws RecognitionException {
		ExprExtraRuleContext _localctx = new ExprExtraRuleContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_exprExtraRule);
		try {
			setState(353);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MULT:
			case DIV:
			case SUM:
			case SUB:
			case BOOL:
			case STRING:
			case CHAR:
			case FLOAT:
			case INT:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(351);
				mulOperatorRule();
				}
				break;
			case ADD_OPERATOR:
				enterOuterAlt(_localctx, 2);
				{
				setState(352);
				addOperatorRule();
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
	public static class MulOperatorRuleContext extends ParserRuleContext {
		public MultRuleContext multRule() {
			return getRuleContext(MultRuleContext.class,0);
		}
		public DivRuleContext divRule() {
			return getRuleContext(DivRuleContext.class,0);
		}
		public SubRuleContext subRule() {
			return getRuleContext(SubRuleContext.class,0);
		}
		public SumRuleContext sumRule() {
			return getRuleContext(SumRuleContext.class,0);
		}
		public MulOperatorRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mulOperatorRule; }
	}

	public final MulOperatorRuleContext mulOperatorRule() throws RecognitionException {
		MulOperatorRuleContext _localctx = new MulOperatorRuleContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_mulOperatorRule);
		try {
			setState(360);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOL:
			case STRING:
			case CHAR:
			case FLOAT:
			case INT:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case MULT:
				enterOuterAlt(_localctx, 2);
				{
				setState(356);
				multRule();
				}
				break;
			case DIV:
				enterOuterAlt(_localctx, 3);
				{
				setState(357);
				divRule();
				}
				break;
			case SUB:
				enterOuterAlt(_localctx, 4);
				{
				setState(358);
				subRule();
				}
				break;
			case SUM:
				enterOuterAlt(_localctx, 5);
				{
				setState(359);
				sumRule();
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
	public static class MultRuleContext extends ParserRuleContext {
		public TerminalNode MULT() { return getToken(MiuLanguage_sinParser.MULT, 0); }
		public MultRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multRule; }
	}

	public final MultRuleContext multRule() throws RecognitionException {
		MultRuleContext _localctx = new MultRuleContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_multRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(362);
			match(MULT);
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
	public static class DivRuleContext extends ParserRuleContext {
		public TerminalNode DIV() { return getToken(MiuLanguage_sinParser.DIV, 0); }
		public DivRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_divRule; }
	}

	public final DivRuleContext divRule() throws RecognitionException {
		DivRuleContext _localctx = new DivRuleContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_divRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			match(DIV);
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
	public static class SumRuleContext extends ParserRuleContext {
		public TerminalNode SUM() { return getToken(MiuLanguage_sinParser.SUM, 0); }
		public SumRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sumRule; }
	}

	public final SumRuleContext sumRule() throws RecognitionException {
		SumRuleContext _localctx = new SumRuleContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_sumRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(366);
			match(SUM);
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
	public static class SubRuleContext extends ParserRuleContext {
		public TerminalNode SUB() { return getToken(MiuLanguage_sinParser.SUB, 0); }
		public SubRuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subRule; }
	}

	public final SubRuleContext subRule() throws RecognitionException {
		SubRuleContext _localctx = new SubRuleContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_subRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(368);
			match(SUB);
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
		enterRule(_localctx, 64, RULE_fnRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(370);
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
		enterRule(_localctx, 66, RULE_idfRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(372);
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
		enterRule(_localctx, 68, RULE_useRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
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
		enterRule(_localctx, 70, RULE_idRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(376);
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
		enterRule(_localctx, 72, RULE_ppRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(378);
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
		enterRule(_localctx, 74, RULE_pcRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(380);
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
		enterRule(_localctx, 76, RULE_arrowRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(382);
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
		enterRule(_localctx, 78, RULE_typeRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(384);
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
		enterRule(_localctx, 80, RULE_commaRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(386);
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
		enterRule(_localctx, 82, RULE_returnRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(388);
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
		enterRule(_localctx, 84, RULE_letRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(390);
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
		enterRule(_localctx, 86, RULE_equalRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(392);
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
		enterRule(_localctx, 88, RULE_ifRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(394);
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
		enterRule(_localctx, 90, RULE_elseRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(396);
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
		enterRule(_localctx, 92, RULE_forRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(398);
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
		enterRule(_localctx, 94, RULE_inRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(400);
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
		enterRule(_localctx, 96, RULE_doubleDotRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(402);
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
		enterRule(_localctx, 98, RULE_addOperatorRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(404);
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
		enterRule(_localctx, 100, RULE_comparisonOperatorRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(406);
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
		enterRule(_localctx, 102, RULE_stringRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(408);
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
		enterRule(_localctx, 104, RULE_charRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(410);
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
		enterRule(_localctx, 106, RULE_intRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(412);
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
		enterRule(_localctx, 108, RULE_floatRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(414);
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
		enterRule(_localctx, 110, RULE_boolRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(416);
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
		enterRule(_localctx, 112, RULE_dotRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(418);
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
		enterRule(_localctx, 114, RULE_lparenRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(420);
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
		enterRule(_localctx, 116, RULE_rparenRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(422);
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
		enterRule(_localctx, 118, RULE_lbraceRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(424);
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
		enterRule(_localctx, 120, RULE_rbraceRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(426);
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
		enterRule(_localctx, 122, RULE_pRule);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
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
		"\u0004\u0001$\u01af\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"2\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u00026\u00076\u0002"+
		"7\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007;\u0002"+
		"<\u0007<\u0002=\u0007=\u0001\u0000\u0001\u0000\u0005\u0000\u007f\b\u0000"+
		"\n\u0000\f\u0000\u0082\t\u0000\u0001\u0000\u0003\u0000\u0085\b\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003"+
		"\u0001\u008d\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002\u0097\b\u0002\n"+
		"\u0002\f\u0002\u009a\t\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003\u00a3\b\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004\u00a9\b\u0004\n"+
		"\u0004\f\u0004\u00ac\t\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0005\u0007\u00b6"+
		"\b\u0007\n\u0007\f\u0007\u00b9\t\u0007\u0001\u0007\u0001\u0007\u0001\b"+
		"\u0001\b\u0005\b\u00bf\b\b\n\b\f\b\u00c2\t\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0003\n\u00ce\b\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u00d6"+
		"\b\u000b\n\u000b\f\u000b\u00d9\t\u000b\u0001\f\u0001\f\u0001\f\u0001\f"+
		"\u0003\f\u00df\b\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0003\r\u00ea\b\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0003\r\u00f3\b\r\u0005\r\u00f5\b\r\n\r\f\r\u00f8\t"+
		"\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u00fe\b"+
		"\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0005"+
		"\u000f\u0105\b\u000f\n\u000f\f\u000f\u0108\t\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0005\u0010"+
		"\u0111\b\u0010\n\u0010\f\u0010\u0114\t\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0005\u0010\u011b\b\u0010\n\u0010\f\u0010"+
		"\u011e\t\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0003\u0011"+
		"\u0124\b\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0005\u0012"+
		"\u012a\b\u0012\n\u0012\f\u0012\u012d\t\u0012\u0001\u0012\u0003\u0012\u0130"+
		"\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0005\u0016\u0146\b\u0016\n\u0016\f\u0016"+
		"\u0149\t\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0005\u0018\u0153\b\u0018\n\u0018"+
		"\f\u0018\u0156\t\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019"+
		"\u0001\u0019\u0001\u0019\u0003\u0019\u015e\b\u0019\u0001\u001a\u0001\u001a"+
		"\u0003\u001a\u0162\b\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0003\u001b\u0169\b\u001b\u0001\u001c\u0001\u001c\u0001\u001d"+
		"\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001 \u0001"+
		" \u0001!\u0001!\u0001\"\u0001\"\u0001#\u0001#\u0001$\u0001$\u0001%\u0001"+
		"%\u0001&\u0001&\u0001\'\u0001\'\u0001(\u0001(\u0001)\u0001)\u0001*\u0001"+
		"*\u0001+\u0001+\u0001,\u0001,\u0001-\u0001-\u0001.\u0001.\u0001/\u0001"+
		"/\u00010\u00010\u00011\u00011\u00012\u00012\u00013\u00013\u00014\u0001"+
		"4\u00015\u00015\u00016\u00016\u00017\u00017\u00018\u00018\u00019\u0001"+
		"9\u0001:\u0001:\u0001;\u0001;\u0001<\u0001<\u0001=\u0001=\u0001=\u0000"+
		"\u0000>\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz\u0000"+
		"\u0000\u019d\u0000\u0080\u0001\u0000\u0000\u0000\u0002\u0088\u0001\u0000"+
		"\u0000\u0000\u0004\u0091\u0001\u0000\u0000\u0000\u0006\u00a2\u0001\u0000"+
		"\u0000\u0000\b\u00a4\u0001\u0000\u0000\u0000\n\u00ad\u0001\u0000\u0000"+
		"\u0000\f\u00af\u0001\u0000\u0000\u0000\u000e\u00b3\u0001\u0000\u0000\u0000"+
		"\u0010\u00bc\u0001\u0000\u0000\u0000\u0012\u00c6\u0001\u0000\u0000\u0000"+
		"\u0014\u00ca\u0001\u0000\u0000\u0000\u0016\u00d2\u0001\u0000\u0000\u0000"+
		"\u0018\u00da\u0001\u0000\u0000\u0000\u001a\u00e9\u0001\u0000\u0000\u0000"+
		"\u001c\u00fd\u0001\u0000\u0000\u0000\u001e\u00ff\u0001\u0000\u0000\u0000"+
		" \u010b\u0001\u0000\u0000\u0000\"\u0123\u0001\u0000\u0000\u0000$\u0125"+
		"\u0001\u0000\u0000\u0000&\u0131\u0001\u0000\u0000\u0000(\u0134\u0001\u0000"+
		"\u0000\u0000*\u0139\u0001\u0000\u0000\u0000,\u0141\u0001\u0000\u0000\u0000"+
		".\u014a\u0001\u0000\u0000\u00000\u014e\u0001\u0000\u0000\u00002\u015d"+
		"\u0001\u0000\u0000\u00004\u0161\u0001\u0000\u0000\u00006\u0168\u0001\u0000"+
		"\u0000\u00008\u016a\u0001\u0000\u0000\u0000:\u016c\u0001\u0000\u0000\u0000"+
		"<\u016e\u0001\u0000\u0000\u0000>\u0170\u0001\u0000\u0000\u0000@\u0172"+
		"\u0001\u0000\u0000\u0000B\u0174\u0001\u0000\u0000\u0000D\u0176\u0001\u0000"+
		"\u0000\u0000F\u0178\u0001\u0000\u0000\u0000H\u017a\u0001\u0000\u0000\u0000"+
		"J\u017c\u0001\u0000\u0000\u0000L\u017e\u0001\u0000\u0000\u0000N\u0180"+
		"\u0001\u0000\u0000\u0000P\u0182\u0001\u0000\u0000\u0000R\u0184\u0001\u0000"+
		"\u0000\u0000T\u0186\u0001\u0000\u0000\u0000V\u0188\u0001\u0000\u0000\u0000"+
		"X\u018a\u0001\u0000\u0000\u0000Z\u018c\u0001\u0000\u0000\u0000\\\u018e"+
		"\u0001\u0000\u0000\u0000^\u0190\u0001\u0000\u0000\u0000`\u0192\u0001\u0000"+
		"\u0000\u0000b\u0194\u0001\u0000\u0000\u0000d\u0196\u0001\u0000\u0000\u0000"+
		"f\u0198\u0001\u0000\u0000\u0000h\u019a\u0001\u0000\u0000\u0000j\u019c"+
		"\u0001\u0000\u0000\u0000l\u019e\u0001\u0000\u0000\u0000n\u01a0\u0001\u0000"+
		"\u0000\u0000p\u01a2\u0001\u0000\u0000\u0000r\u01a4\u0001\u0000\u0000\u0000"+
		"t\u01a6\u0001\u0000\u0000\u0000v\u01a8\u0001\u0000\u0000\u0000x\u01aa"+
		"\u0001\u0000\u0000\u0000z\u01ac\u0001\u0000\u0000\u0000|\u007f\u0003\u0004"+
		"\u0002\u0000}\u007f\u0003\u0002\u0001\u0000~|\u0001\u0000\u0000\u0000"+
		"~}\u0001\u0000\u0000\u0000\u007f\u0082\u0001\u0000\u0000\u0000\u0080~"+
		"\u0001\u0000\u0000\u0000\u0080\u0081\u0001\u0000\u0000\u0000\u0081\u0084"+
		"\u0001\u0000\u0000\u0000\u0082\u0080\u0001\u0000\u0000\u0000\u0083\u0085"+
		"\u0005$\u0000\u0000\u0084\u0083\u0001\u0000\u0000\u0000\u0084\u0085\u0001"+
		"\u0000\u0000\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086\u0087\u0005"+
		"\u0000\u0000\u0001\u0087\u0001\u0001\u0000\u0000\u0000\u0088\u0089\u0003"+
		"@ \u0000\u0089\u008a\u0003B!\u0000\u008a\u008c\u0003r9\u0000\u008b\u008d"+
		"\u0003\b\u0004\u0000\u008c\u008b\u0001\u0000\u0000\u0000\u008c\u008d\u0001"+
		"\u0000\u0000\u0000\u008d\u008e\u0001\u0000\u0000\u0000\u008e\u008f\u0003"+
		"t:\u0000\u008f\u0090\u0003\u0006\u0003\u0000\u0090\u0003\u0001\u0000\u0000"+
		"\u0000\u0091\u0092\u0003D\"\u0000\u0092\u0098\u0003F#\u0000\u0093\u0094"+
		"\u0003H$\u0000\u0094\u0095\u0003F#\u0000\u0095\u0097\u0001\u0000\u0000"+
		"\u0000\u0096\u0093\u0001\u0000\u0000\u0000\u0097\u009a\u0001\u0000\u0000"+
		"\u0000\u0098\u0096\u0001\u0000\u0000\u0000\u0098\u0099\u0001\u0000\u0000"+
		"\u0000\u0099\u009b\u0001\u0000\u0000\u0000\u009a\u0098\u0001\u0000\u0000"+
		"\u0000\u009b\u009c\u0003J%\u0000\u009c\u0005\u0001\u0000\u0000\u0000\u009d"+
		"\u009e\u0003L&\u0000\u009e\u009f\u0003N\'\u0000\u009f\u00a0\u0003\u0010"+
		"\b\u0000\u00a0\u00a3\u0001\u0000\u0000\u0000\u00a1\u00a3\u0003\u000e\u0007"+
		"\u0000\u00a2\u009d\u0001\u0000\u0000\u0000\u00a2\u00a1\u0001\u0000\u0000"+
		"\u0000\u00a3\u0007\u0001\u0000\u0000\u0000\u00a4\u00aa\u0003\f\u0006\u0000"+
		"\u00a5\u00a6\u0003P(\u0000\u00a6\u00a7\u0003\f\u0006\u0000\u00a7\u00a9"+
		"\u0001\u0000\u0000\u0000\u00a8\u00a5\u0001\u0000\u0000\u0000\u00a9\u00ac"+
		"\u0001\u0000\u0000\u0000\u00aa\u00a8\u0001\u0000\u0000\u0000\u00aa\u00ab"+
		"\u0001\u0000\u0000\u0000\u00ab\t\u0001\u0000\u0000\u0000\u00ac\u00aa\u0001"+
		"\u0000\u0000\u0000\u00ad\u00ae\u0005$\u0000\u0000\u00ae\u000b\u0001\u0000"+
		"\u0000\u0000\u00af\u00b0\u0003F#\u0000\u00b0\u00b1\u0003z=\u0000\u00b1"+
		"\u00b2\u0003N\'\u0000\u00b2\r\u0001\u0000\u0000\u0000\u00b3\u00b7\u0003"+
		"v;\u0000\u00b4\u00b6\u0003\u001c\u000e\u0000\u00b5\u00b4\u0001\u0000\u0000"+
		"\u0000\u00b6\u00b9\u0001\u0000\u0000\u0000\u00b7\u00b5\u0001\u0000\u0000"+
		"\u0000\u00b7\u00b8\u0001\u0000\u0000\u0000\u00b8\u00ba\u0001\u0000\u0000"+
		"\u0000\u00b9\u00b7\u0001\u0000\u0000\u0000\u00ba\u00bb\u0003x<\u0000\u00bb"+
		"\u000f\u0001\u0000\u0000\u0000\u00bc\u00c0\u0003v;\u0000\u00bd\u00bf\u0003"+
		"\u001c\u000e\u0000\u00be\u00bd\u0001\u0000\u0000\u0000\u00bf\u00c2\u0001"+
		"\u0000\u0000\u0000\u00c0\u00be\u0001\u0000\u0000\u0000\u00c0\u00c1\u0001"+
		"\u0000\u0000\u0000\u00c1\u00c3\u0001\u0000\u0000\u0000\u00c2\u00c0\u0001"+
		"\u0000\u0000\u0000\u00c3\u00c4\u0003\u0012\t\u0000\u00c4\u00c5\u0003x"+
		"<\u0000\u00c5\u0011\u0001\u0000\u0000\u0000\u00c6\u00c7\u0003R)\u0000"+
		"\u00c7\u00c8\u00030\u0018\u0000\u00c8\u00c9\u0003J%\u0000\u00c9\u0013"+
		"\u0001\u0000\u0000\u0000\u00ca\u00cb\u0003B!\u0000\u00cb\u00cd\u0003r"+
		"9\u0000\u00cc\u00ce\u0003\u001a\r\u0000\u00cd\u00cc\u0001\u0000\u0000"+
		"\u0000\u00cd\u00ce\u0001\u0000\u0000\u0000\u00ce\u00cf\u0001\u0000\u0000"+
		"\u0000\u00cf\u00d0\u0003t:\u0000\u00d0\u00d1\u0003J%\u0000\u00d1\u0015"+
		"\u0001\u0000\u0000\u0000\u00d2\u00d7\u0003F#\u0000\u00d3\u00d6\u0003\u0018"+
		"\f\u0000\u00d4\u00d6\u0003\u001e\u000f\u0000\u00d5\u00d3\u0001\u0000\u0000"+
		"\u0000\u00d5\u00d4\u0001\u0000\u0000\u0000\u00d6\u00d9\u0001\u0000\u0000"+
		"\u0000\u00d7\u00d5\u0001\u0000\u0000\u0000\u00d7\u00d8\u0001\u0000\u0000"+
		"\u0000\u00d8\u0017\u0001\u0000\u0000\u0000\u00d9\u00d7\u0001\u0000\u0000"+
		"\u0000\u00da\u00db\u0003p8\u0000\u00db\u00dc\u0003B!\u0000\u00dc\u00de"+
		"\u0003r9\u0000\u00dd\u00df\u0003\u001a\r\u0000\u00de\u00dd\u0001\u0000"+
		"\u0000\u0000\u00de\u00df\u0001\u0000\u0000\u0000\u00df\u00e0\u0001\u0000"+
		"\u0000\u0000\u00e0\u00e1\u0003t:\u0000\u00e1\u00e2\u0003J%\u0000\u00e2"+
		"\u0019\u0001\u0000\u0000\u0000\u00e3\u00ea\u0003\u0016\u000b\u0000\u00e4"+
		"\u00ea\u0003f3\u0000\u00e5\u00ea\u0003h4\u0000\u00e6\u00ea\u0003j5\u0000"+
		"\u00e7\u00ea\u0003l6\u0000\u00e8\u00ea\u0003n7\u0000\u00e9\u00e3\u0001"+
		"\u0000\u0000\u0000\u00e9\u00e4\u0001\u0000\u0000\u0000\u00e9\u00e5\u0001"+
		"\u0000\u0000\u0000\u00e9\u00e6\u0001\u0000\u0000\u0000\u00e9\u00e7\u0001"+
		"\u0000\u0000\u0000\u00e9\u00e8\u0001\u0000\u0000\u0000\u00ea\u00f6\u0001"+
		"\u0000\u0000\u0000\u00eb\u00f2\u0003P(\u0000\u00ec\u00f3\u0003\u0016\u000b"+
		"\u0000\u00ed\u00f3\u0003f3\u0000\u00ee\u00f3\u0003h4\u0000\u00ef\u00f3"+
		"\u0003j5\u0000\u00f0\u00f3\u0003l6\u0000\u00f1\u00f3\u0003n7\u0000\u00f2"+
		"\u00ec\u0001\u0000\u0000\u0000\u00f2\u00ed\u0001\u0000\u0000\u0000\u00f2"+
		"\u00ee\u0001\u0000\u0000\u0000\u00f2\u00ef\u0001\u0000\u0000\u0000\u00f2"+
		"\u00f0\u0001\u0000\u0000\u0000\u00f2\u00f1\u0001\u0000\u0000\u0000\u00f3"+
		"\u00f5\u0001\u0000\u0000\u0000\u00f4\u00eb\u0001\u0000\u0000\u0000\u00f5"+
		"\u00f8\u0001\u0000\u0000\u0000\u00f6\u00f4\u0001\u0000\u0000\u0000\u00f6"+
		"\u00f7\u0001\u0000\u0000\u0000\u00f7\u001b\u0001\u0000\u0000\u0000\u00f8"+
		"\u00f6\u0001\u0000\u0000\u0000\u00f9\u00fe\u0003 \u0010\u0000\u00fa\u00fe"+
		"\u0003\u0014\n\u0000\u00fb\u00fe\u0003\u0016\u000b\u0000\u00fc\u00fe\u0003"+
		"\"\u0011\u0000\u00fd\u00f9\u0001\u0000\u0000\u0000\u00fd\u00fa\u0001\u0000"+
		"\u0000\u0000\u00fd\u00fb\u0001\u0000\u0000\u0000\u00fd\u00fc\u0001\u0000"+
		"\u0000\u0000\u00fe\u001d\u0001\u0000\u0000\u0000\u00ff\u0100\u0003V+\u0000"+
		"\u0100\u0106\u00032\u0019\u0000\u0101\u0102\u00034\u001a\u0000\u0102\u0103"+
		"\u00032\u0019\u0000\u0103\u0105\u0001\u0000\u0000\u0000\u0104\u0101\u0001"+
		"\u0000\u0000\u0000\u0105\u0108\u0001\u0000\u0000\u0000\u0106\u0104\u0001"+
		"\u0000\u0000\u0000\u0106\u0107\u0001\u0000\u0000\u0000\u0107\u0109\u0001"+
		"\u0000\u0000\u0000\u0108\u0106\u0001\u0000\u0000\u0000\u0109\u010a\u0003"+
		"J%\u0000\u010a\u001f\u0001\u0000\u0000\u0000\u010b\u010c\u0003T*\u0000"+
		"\u010c\u0112\u0003F#\u0000\u010d\u010e\u0003z=\u0000\u010e\u010f\u0003"+
		"N\'\u0000\u010f\u0111\u0001\u0000\u0000\u0000\u0110\u010d\u0001\u0000"+
		"\u0000\u0000\u0111\u0114\u0001\u0000\u0000\u0000\u0112\u0110\u0001\u0000"+
		"\u0000\u0000\u0112\u0113\u0001\u0000\u0000\u0000\u0113\u0115\u0001\u0000"+
		"\u0000\u0000\u0114\u0112\u0001\u0000\u0000\u0000\u0115\u0116\u0003V+\u0000"+
		"\u0116\u011c\u00032\u0019\u0000\u0117\u0118\u00034\u001a\u0000\u0118\u0119"+
		"\u00032\u0019\u0000\u0119\u011b\u0001\u0000\u0000\u0000\u011a\u0117\u0001"+
		"\u0000\u0000\u0000\u011b\u011e\u0001\u0000\u0000\u0000\u011c\u011a\u0001"+
		"\u0000\u0000\u0000\u011c\u011d\u0001\u0000\u0000\u0000\u011d\u011f\u0001"+
		"\u0000\u0000\u0000\u011e\u011c\u0001\u0000\u0000\u0000\u011f\u0120\u0003"+
		"J%\u0000\u0120!\u0001\u0000\u0000\u0000\u0121\u0124\u0003$\u0012\u0000"+
		"\u0122\u0124\u0003*\u0015\u0000\u0123\u0121\u0001\u0000\u0000\u0000\u0123"+
		"\u0122\u0001\u0000\u0000\u0000\u0124#\u0001\u0000\u0000\u0000\u0125\u0126"+
		"\u0003X,\u0000\u0126\u0127\u0003,\u0016\u0000\u0127\u012b\u0003\u000e"+
		"\u0007\u0000\u0128\u012a\u0003(\u0014\u0000\u0129\u0128\u0001\u0000\u0000"+
		"\u0000\u012a\u012d\u0001\u0000\u0000\u0000\u012b\u0129\u0001\u0000\u0000"+
		"\u0000\u012b\u012c\u0001\u0000\u0000\u0000\u012c\u012f\u0001\u0000\u0000"+
		"\u0000\u012d\u012b\u0001\u0000\u0000\u0000\u012e\u0130\u0003&\u0013\u0000"+
		"\u012f\u012e\u0001\u0000\u0000\u0000\u012f\u0130\u0001\u0000\u0000\u0000"+
		"\u0130%\u0001\u0000\u0000\u0000\u0131\u0132\u0003Z-\u0000\u0132\u0133"+
		"\u0003\u000e\u0007\u0000\u0133\'\u0001\u0000\u0000\u0000\u0134\u0135\u0003"+
		"Z-\u0000\u0135\u0136\u0003X,\u0000\u0136\u0137\u0003,\u0016\u0000\u0137"+
		"\u0138\u0003\u000e\u0007\u0000\u0138)\u0001\u0000\u0000\u0000\u0139\u013a"+
		"\u0003\\.\u0000\u013a\u013b\u0003F#\u0000\u013b\u013c\u0003^/\u0000\u013c"+
		"\u013d\u0003j5\u0000\u013d\u013e\u0003`0\u0000\u013e\u013f\u0003j5\u0000"+
		"\u013f\u0140\u0003\u000e\u0007\u0000\u0140+\u0001\u0000\u0000\u0000\u0141"+
		"\u0147\u0003.\u0017\u0000\u0142\u0143\u0003b1\u0000\u0143\u0144\u0003"+
		".\u0017\u0000\u0144\u0146\u0001\u0000\u0000\u0000\u0145\u0142\u0001\u0000"+
		"\u0000\u0000\u0146\u0149\u0001\u0000\u0000\u0000\u0147\u0145\u0001\u0000"+
		"\u0000\u0000\u0147\u0148\u0001\u0000\u0000\u0000\u0148-\u0001\u0000\u0000"+
		"\u0000\u0149\u0147\u0001\u0000\u0000\u0000\u014a\u014b\u00032\u0019\u0000"+
		"\u014b\u014c\u0003d2\u0000\u014c\u014d\u00032\u0019\u0000\u014d/\u0001"+
		"\u0000\u0000\u0000\u014e\u0154\u00032\u0019\u0000\u014f\u0150\u00034\u001a"+
		"\u0000\u0150\u0151\u00032\u0019\u0000\u0151\u0153\u0001\u0000\u0000\u0000"+
		"\u0152\u014f\u0001\u0000\u0000\u0000\u0153\u0156\u0001\u0000\u0000\u0000"+
		"\u0154\u0152\u0001\u0000\u0000\u0000\u0154\u0155\u0001\u0000\u0000\u0000"+
		"\u01551\u0001\u0000\u0000\u0000\u0156\u0154\u0001\u0000\u0000\u0000\u0157"+
		"\u015e\u0003F#\u0000\u0158\u015e\u0003f3\u0000\u0159\u015e\u0003h4\u0000"+
		"\u015a\u015e\u0003j5\u0000\u015b\u015e\u0003l6\u0000\u015c\u015e\u0003"+
		"n7\u0000\u015d\u0157\u0001\u0000\u0000\u0000\u015d\u0158\u0001\u0000\u0000"+
		"\u0000\u015d\u0159\u0001\u0000\u0000\u0000\u015d\u015a\u0001\u0000\u0000"+
		"\u0000\u015d\u015b\u0001\u0000\u0000\u0000\u015d\u015c\u0001\u0000\u0000"+
		"\u0000\u015e3\u0001\u0000\u0000\u0000\u015f\u0162\u00036\u001b\u0000\u0160"+
		"\u0162\u0003b1\u0000\u0161\u015f\u0001\u0000\u0000\u0000\u0161\u0160\u0001"+
		"\u0000\u0000\u0000\u01625\u0001\u0000\u0000\u0000\u0163\u0169\u0001\u0000"+
		"\u0000\u0000\u0164\u0169\u00038\u001c\u0000\u0165\u0169\u0003:\u001d\u0000"+
		"\u0166\u0169\u0003>\u001f\u0000\u0167\u0169\u0003<\u001e\u0000\u0168\u0163"+
		"\u0001\u0000\u0000\u0000\u0168\u0164\u0001\u0000\u0000\u0000\u0168\u0165"+
		"\u0001\u0000\u0000\u0000\u0168\u0166\u0001\u0000\u0000\u0000\u0168\u0167"+
		"\u0001\u0000\u0000\u0000\u01697\u0001\u0000\u0000\u0000\u016a\u016b\u0005"+
		"\u0013\u0000\u0000\u016b9\u0001\u0000\u0000\u0000\u016c\u016d\u0005\u0014"+
		"\u0000\u0000\u016d;\u0001\u0000\u0000\u0000\u016e\u016f\u0005\u0015\u0000"+
		"\u0000\u016f=\u0001\u0000\u0000\u0000\u0170\u0171\u0005\u0016\u0000\u0000"+
		"\u0171?\u0001\u0000\u0000\u0000\u0172\u0173\u0005\u0004\u0000\u0000\u0173"+
		"A\u0001\u0000\u0000\u0000\u0174\u0175\u0005!\u0000\u0000\u0175C\u0001"+
		"\u0000\u0000\u0000\u0176\u0177\u0005\u0005\u0000\u0000\u0177E\u0001\u0000"+
		"\u0000\u0000\u0178\u0179\u0005\"\u0000\u0000\u0179G\u0001\u0000\u0000"+
		"\u0000\u017a\u017b\u0005\u000f\u0000\u0000\u017bI\u0001\u0000\u0000\u0000"+
		"\u017c\u017d\u0005\u0011\u0000\u0000\u017dK\u0001\u0000\u0000\u0000\u017e"+
		"\u017f\u0005\f\u0000\u0000\u017fM\u0001\u0000\u0000\u0000\u0180\u0181"+
		"\u0005\u001b\u0000\u0000\u0181O\u0001\u0000\u0000\u0000\u0182\u0183\u0005"+
		"\u0010\u0000\u0000\u0183Q\u0001\u0000\u0000\u0000\u0184\u0185\u0005\u000b"+
		"\u0000\u0000\u0185S\u0001\u0000\u0000\u0000\u0186\u0187\u0005\u0006\u0000"+
		"\u0000\u0187U\u0001\u0000\u0000\u0000\u0188\u0189\u0005\u0003\u0000\u0000"+
		"\u0189W\u0001\u0000\u0000\u0000\u018a\u018b\u0005\b\u0000\u0000\u018b"+
		"Y\u0001\u0000\u0000\u0000\u018c\u018d\u0005\t\u0000\u0000\u018d[\u0001"+
		"\u0000\u0000\u0000\u018e\u018f\u0005\n\u0000\u0000\u018f]\u0001\u0000"+
		"\u0000\u0000\u0190\u0191\u0005\u0007\u0000\u0000\u0191_\u0001\u0000\u0000"+
		"\u0000\u0192\u0193\u0005\u000e\u0000\u0000\u0193a\u0001\u0000\u0000\u0000"+
		"\u0194\u0195\u0005\u0002\u0000\u0000\u0195c\u0001\u0000\u0000\u0000\u0196"+
		"\u0197\u0005\u0001\u0000\u0000\u0197e\u0001\u0000\u0000\u0000\u0198\u0199"+
		"\u0005\u001d\u0000\u0000\u0199g\u0001\u0000\u0000\u0000\u019a\u019b\u0005"+
		"\u001e\u0000\u0000\u019bi\u0001\u0000\u0000\u0000\u019c\u019d\u0005 \u0000"+
		"\u0000\u019dk\u0001\u0000\u0000\u0000\u019e\u019f\u0005\u001f\u0000\u0000"+
		"\u019fm\u0001\u0000\u0000\u0000\u01a0\u01a1\u0005\u001c\u0000\u0000\u01a1"+
		"o\u0001\u0000\u0000\u0000\u01a2\u01a3\u0005\r\u0000\u0000\u01a3q\u0001"+
		"\u0000\u0000\u0000\u01a4\u01a5\u0005\u0017\u0000\u0000\u01a5s\u0001\u0000"+
		"\u0000\u0000\u01a6\u01a7\u0005\u0018\u0000\u0000\u01a7u\u0001\u0000\u0000"+
		"\u0000\u01a8\u01a9\u0005\u0019\u0000\u0000\u01a9w\u0001\u0000\u0000\u0000"+
		"\u01aa\u01ab\u0005\u001a\u0000\u0000\u01aby\u0001\u0000\u0000\u0000\u01ac"+
		"\u01ad\u0005\u0012\u0000\u0000\u01ad{\u0001\u0000\u0000\u0000\u001c~\u0080"+
		"\u0084\u008c\u0098\u00a2\u00aa\u00b7\u00c0\u00cd\u00d5\u00d7\u00de\u00e9"+
		"\u00f2\u00f6\u00fd\u0106\u0112\u011c\u0123\u012b\u012f\u0147\u0154\u015d"+
		"\u0161\u0168";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
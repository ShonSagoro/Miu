// Generated from c:/Users/ramos/Documents/Vite_project/Miu/src/data/analizar_sintactico/MiuLanguage.g4 by ANTLR 4.13.1
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
		COMPARISON_OPERATOR=1, ADD_OPERATOR=2, EQUAL=3, FN=4, USE=5, LET=6, IN=7, 
		IF=8, ELSE=9, FOR=10, RETURN=11, ARROW=12, DOT=13, DOUBLE_DOT=14, PP=15, 
		COMMA=16, PC=17, P=18, LPAREN=19, RPAREN=20, LBRACE=21, RBRACE=22, TYPE=23, 
		BOOL=24, STRING=25, CHAR=26, FLOAT=27, INT=28, IDF=29, ID=30, WS=31, INVALID=32;
	public static final int
		RULE_program = 0, RULE_functionDeclaration = 1, RULE_moduleDeclaration = 2, 
		RULE_checkreturnFunction = 3, RULE_paramList = 4, RULE_param = 5, RULE_body = 6, 
		RULE_bodyR = 7, RULE_statementR = 8, RULE_functionCall = 9, RULE_functionCallVar = 10, 
		RULE_argList = 11, RULE_statement = 12, RULE_assignment = 13, RULE_controlStructure = 14, 
		RULE_ifStatement = 15, RULE_elseIfStatement = 16, RULE_forStatement = 17, 
		RULE_comparisonExprADD = 18, RULE_comparisonExpr = 19, RULE_exprReturn = 20, 
		RULE_expr = 21;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "functionDeclaration", "moduleDeclaration", "checkreturnFunction", 
			"paramList", "param", "body", "bodyR", "statementR", "functionCall", 
			"functionCallVar", "argList", "statement", "assignment", "controlStructure", 
			"ifStatement", "elseIfStatement", "forStatement", "comparisonExprADD", 
			"comparisonExpr", "exprReturn", "expr"
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
		public TerminalNode EOF() { return getToken(MiuLanguageParser.EOF, 0); }
		public List<TerminalNode> COMPARISON_OPERATOR() { return getTokens(MiuLanguageParser.COMPARISON_OPERATOR); }
		public TerminalNode COMPARISON_OPERATOR(int i) {
			return getToken(MiuLanguageParser.COMPARISON_OPERATOR, i);
		}
		public List<TerminalNode> ADD_OPERATOR() { return getTokens(MiuLanguageParser.ADD_OPERATOR); }
		public TerminalNode ADD_OPERATOR(int i) {
			return getToken(MiuLanguageParser.ADD_OPERATOR, i);
		}
		public List<TerminalNode> EQUAL() { return getTokens(MiuLanguageParser.EQUAL); }
		public TerminalNode EQUAL(int i) {
			return getToken(MiuLanguageParser.EQUAL, i);
		}
		public List<TerminalNode> FN() { return getTokens(MiuLanguageParser.FN); }
		public TerminalNode FN(int i) {
			return getToken(MiuLanguageParser.FN, i);
		}
		public List<TerminalNode> USE() { return getTokens(MiuLanguageParser.USE); }
		public TerminalNode USE(int i) {
			return getToken(MiuLanguageParser.USE, i);
		}
		public List<TerminalNode> LET() { return getTokens(MiuLanguageParser.LET); }
		public TerminalNode LET(int i) {
			return getToken(MiuLanguageParser.LET, i);
		}
		public List<TerminalNode> IN() { return getTokens(MiuLanguageParser.IN); }
		public TerminalNode IN(int i) {
			return getToken(MiuLanguageParser.IN, i);
		}
		public List<TerminalNode> IF() { return getTokens(MiuLanguageParser.IF); }
		public TerminalNode IF(int i) {
			return getToken(MiuLanguageParser.IF, i);
		}
		public List<TerminalNode> ELSE() { return getTokens(MiuLanguageParser.ELSE); }
		public TerminalNode ELSE(int i) {
			return getToken(MiuLanguageParser.ELSE, i);
		}
		public List<TerminalNode> FOR() { return getTokens(MiuLanguageParser.FOR); }
		public TerminalNode FOR(int i) {
			return getToken(MiuLanguageParser.FOR, i);
		}
		public List<TerminalNode> RETURN() { return getTokens(MiuLanguageParser.RETURN); }
		public TerminalNode RETURN(int i) {
			return getToken(MiuLanguageParser.RETURN, i);
		}
		public List<TerminalNode> ARROW() { return getTokens(MiuLanguageParser.ARROW); }
		public TerminalNode ARROW(int i) {
			return getToken(MiuLanguageParser.ARROW, i);
		}
		public List<TerminalNode> DOT() { return getTokens(MiuLanguageParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(MiuLanguageParser.DOT, i);
		}
		public List<TerminalNode> DOUBLE_DOT() { return getTokens(MiuLanguageParser.DOUBLE_DOT); }
		public TerminalNode DOUBLE_DOT(int i) {
			return getToken(MiuLanguageParser.DOUBLE_DOT, i);
		}
		public List<TerminalNode> PP() { return getTokens(MiuLanguageParser.PP); }
		public TerminalNode PP(int i) {
			return getToken(MiuLanguageParser.PP, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MiuLanguageParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MiuLanguageParser.COMMA, i);
		}
		public List<TerminalNode> PC() { return getTokens(MiuLanguageParser.PC); }
		public TerminalNode PC(int i) {
			return getToken(MiuLanguageParser.PC, i);
		}
		public List<TerminalNode> P() { return getTokens(MiuLanguageParser.P); }
		public TerminalNode P(int i) {
			return getToken(MiuLanguageParser.P, i);
		}
		public List<TerminalNode> LPAREN() { return getTokens(MiuLanguageParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(MiuLanguageParser.LPAREN, i);
		}
		public List<TerminalNode> RPAREN() { return getTokens(MiuLanguageParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(MiuLanguageParser.RPAREN, i);
		}
		public List<TerminalNode> LBRACE() { return getTokens(MiuLanguageParser.LBRACE); }
		public TerminalNode LBRACE(int i) {
			return getToken(MiuLanguageParser.LBRACE, i);
		}
		public List<TerminalNode> RBRACE() { return getTokens(MiuLanguageParser.RBRACE); }
		public TerminalNode RBRACE(int i) {
			return getToken(MiuLanguageParser.RBRACE, i);
		}
		public List<TerminalNode> TYPE() { return getTokens(MiuLanguageParser.TYPE); }
		public TerminalNode TYPE(int i) {
			return getToken(MiuLanguageParser.TYPE, i);
		}
		public List<TerminalNode> BOOL() { return getTokens(MiuLanguageParser.BOOL); }
		public TerminalNode BOOL(int i) {
			return getToken(MiuLanguageParser.BOOL, i);
		}
		public List<TerminalNode> STRING() { return getTokens(MiuLanguageParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(MiuLanguageParser.STRING, i);
		}
		public List<TerminalNode> CHAR() { return getTokens(MiuLanguageParser.CHAR); }
		public TerminalNode CHAR(int i) {
			return getToken(MiuLanguageParser.CHAR, i);
		}
		public List<TerminalNode> FLOAT() { return getTokens(MiuLanguageParser.FLOAT); }
		public TerminalNode FLOAT(int i) {
			return getToken(MiuLanguageParser.FLOAT, i);
		}
		public List<TerminalNode> INT() { return getTokens(MiuLanguageParser.INT); }
		public TerminalNode INT(int i) {
			return getToken(MiuLanguageParser.INT, i);
		}
		public List<TerminalNode> IDF() { return getTokens(MiuLanguageParser.IDF); }
		public TerminalNode IDF(int i) {
			return getToken(MiuLanguageParser.IDF, i);
		}
		public List<TerminalNode> ID() { return getTokens(MiuLanguageParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MiuLanguageParser.ID, i);
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
			setState(47);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 2147483646L) != 0)) {
				{
				{
				setState(44);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 2147483646L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(49);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(50);
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
		public TerminalNode FN() { return getToken(MiuLanguageParser.FN, 0); }
		public TerminalNode IDF() { return getToken(MiuLanguageParser.IDF, 0); }
		public TerminalNode LPAREN() { return getToken(MiuLanguageParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MiuLanguageParser.RPAREN, 0); }
		public CheckreturnFunctionContext checkreturnFunction() {
			return getRuleContext(CheckreturnFunctionContext.class,0);
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
			setState(52);
			match(FN);
			setState(53);
			match(IDF);
			setState(54);
			match(LPAREN);
			setState(56);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(55);
				paramList();
				}
			}

			setState(58);
			match(RPAREN);
			setState(59);
			checkreturnFunction();
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
		public TerminalNode USE() { return getToken(MiuLanguageParser.USE, 0); }
		public List<TerminalNode> ID() { return getTokens(MiuLanguageParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MiuLanguageParser.ID, i);
		}
		public TerminalNode PC() { return getToken(MiuLanguageParser.PC, 0); }
		public List<TerminalNode> PP() { return getTokens(MiuLanguageParser.PP); }
		public TerminalNode PP(int i) {
			return getToken(MiuLanguageParser.PP, i);
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
			setState(61);
			match(USE);
			setState(62);
			match(ID);
			setState(67);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PP) {
				{
				{
				setState(63);
				match(PP);
				setState(64);
				match(ID);
				}
				}
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(70);
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
	public static class CheckreturnFunctionContext extends ParserRuleContext {
		public TerminalNode ARROW() { return getToken(MiuLanguageParser.ARROW, 0); }
		public TerminalNode TYPE() { return getToken(MiuLanguageParser.TYPE, 0); }
		public BodyRContext bodyR() {
			return getRuleContext(BodyRContext.class,0);
		}
		public BodyContext body() {
			return getRuleContext(BodyContext.class,0);
		}
		public CheckreturnFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_checkreturnFunction; }
	}

	public final CheckreturnFunctionContext checkreturnFunction() throws RecognitionException {
		CheckreturnFunctionContext _localctx = new CheckreturnFunctionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_checkreturnFunction);
		try {
			setState(76);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ARROW:
				enterOuterAlt(_localctx, 1);
				{
				setState(72);
				match(ARROW);
				setState(73);
				match(TYPE);
				setState(74);
				bodyR();
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(75);
				body();
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
		public List<TerminalNode> COMMA() { return getTokens(MiuLanguageParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MiuLanguageParser.COMMA, i);
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
			setState(78);
			param();
			setState(83);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(79);
				match(COMMA);
				setState(80);
				param();
				}
				}
				setState(85);
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
		public TerminalNode ID() { return getToken(MiuLanguageParser.ID, 0); }
		public TerminalNode P() { return getToken(MiuLanguageParser.P, 0); }
		public TerminalNode TYPE() { return getToken(MiuLanguageParser.TYPE, 0); }
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			match(ID);
			setState(87);
			match(P);
			setState(88);
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
	public static class BodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(MiuLanguageParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(MiuLanguageParser.RBRACE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_body; }
	}

	public final BodyContext body() throws RecognitionException {
		BodyContext _localctx = new BodyContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			match(LBRACE);
			setState(94);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1610614080L) != 0)) {
				{
				{
				setState(91);
				statement();
				}
				}
				setState(96);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(97);
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
	public static class BodyRContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(MiuLanguageParser.LBRACE, 0); }
		public StatementRContext statementR() {
			return getRuleContext(StatementRContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(MiuLanguageParser.RBRACE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BodyRContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bodyR; }
	}

	public final BodyRContext bodyR() throws RecognitionException {
		BodyRContext _localctx = new BodyRContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_bodyR);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			match(LBRACE);
			setState(103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1610614080L) != 0)) {
				{
				{
				setState(100);
				statement();
				}
				}
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(106);
			statementR();
			setState(107);
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
	public static class StatementRContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(MiuLanguageParser.RETURN, 0); }
		public ExprReturnContext exprReturn() {
			return getRuleContext(ExprReturnContext.class,0);
		}
		public TerminalNode PC() { return getToken(MiuLanguageParser.PC, 0); }
		public StatementRContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementR; }
	}

	public final StatementRContext statementR() throws RecognitionException {
		StatementRContext _localctx = new StatementRContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_statementR);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			match(RETURN);
			setState(110);
			exprReturn();
			setState(111);
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
	public static class FunctionCallContext extends ParserRuleContext {
		public TerminalNode IDF() { return getToken(MiuLanguageParser.IDF, 0); }
		public TerminalNode LPAREN() { return getToken(MiuLanguageParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MiuLanguageParser.RPAREN, 0); }
		public TerminalNode PC() { return getToken(MiuLanguageParser.PC, 0); }
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
		enterRule(_localctx, 18, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
			match(IDF);
			setState(114);
			match(LPAREN);
			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1593835520L) != 0)) {
				{
				setState(115);
				argList();
				}
			}

			setState(118);
			match(RPAREN);
			setState(119);
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
	public static class FunctionCallVarContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MiuLanguageParser.ID, 0); }
		public TerminalNode DOT() { return getToken(MiuLanguageParser.DOT, 0); }
		public TerminalNode IDF() { return getToken(MiuLanguageParser.IDF, 0); }
		public TerminalNode LPAREN() { return getToken(MiuLanguageParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MiuLanguageParser.RPAREN, 0); }
		public TerminalNode PC() { return getToken(MiuLanguageParser.PC, 0); }
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
		enterRule(_localctx, 20, RULE_functionCallVar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			match(ID);
			setState(122);
			match(DOT);
			setState(123);
			match(IDF);
			setState(124);
			match(LPAREN);
			setState(126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1593835520L) != 0)) {
				{
				setState(125);
				argList();
				}
			}

			setState(128);
			match(RPAREN);
			setState(129);
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
	public static class ArgListContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MiuLanguageParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MiuLanguageParser.ID, i);
		}
		public List<TerminalNode> STRING() { return getTokens(MiuLanguageParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(MiuLanguageParser.STRING, i);
		}
		public List<TerminalNode> CHAR() { return getTokens(MiuLanguageParser.CHAR); }
		public TerminalNode CHAR(int i) {
			return getToken(MiuLanguageParser.CHAR, i);
		}
		public List<TerminalNode> INT() { return getTokens(MiuLanguageParser.INT); }
		public TerminalNode INT(int i) {
			return getToken(MiuLanguageParser.INT, i);
		}
		public List<TerminalNode> FLOAT() { return getTokens(MiuLanguageParser.FLOAT); }
		public TerminalNode FLOAT(int i) {
			return getToken(MiuLanguageParser.FLOAT, i);
		}
		public List<TerminalNode> BOOL() { return getTokens(MiuLanguageParser.BOOL); }
		public TerminalNode BOOL(int i) {
			return getToken(MiuLanguageParser.BOOL, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MiuLanguageParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MiuLanguageParser.COMMA, i);
		}
		public ArgListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argList; }
	}

	public final ArgListContext argList() throws RecognitionException {
		ArgListContext _localctx = new ArgListContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_argList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1593835520L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(136);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(132);
				match(COMMA);
				setState(133);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1593835520L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(138);
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
		enterRule(_localctx, 24, RULE_statement);
		try {
			setState(143);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LET:
				enterOuterAlt(_localctx, 1);
				{
				setState(139);
				assignment();
				}
				break;
			case IDF:
				enterOuterAlt(_localctx, 2);
				{
				setState(140);
				functionCall();
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 3);
				{
				setState(141);
				functionCallVar();
				}
				break;
			case IF:
			case FOR:
				enterOuterAlt(_localctx, 4);
				{
				setState(142);
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
		public TerminalNode LET() { return getToken(MiuLanguageParser.LET, 0); }
		public TerminalNode ID() { return getToken(MiuLanguageParser.ID, 0); }
		public TerminalNode EQUAL() { return getToken(MiuLanguageParser.EQUAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PC() { return getToken(MiuLanguageParser.PC, 0); }
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			match(LET);
			setState(146);
			match(ID);
			setState(147);
			match(EQUAL);
			setState(148);
			expr();
			setState(149);
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
		enterRule(_localctx, 28, RULE_controlStructure);
		try {
			setState(153);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(151);
				ifStatement();
				}
				break;
			case FOR:
				enterOuterAlt(_localctx, 2);
				{
				setState(152);
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
		public TerminalNode IF() { return getToken(MiuLanguageParser.IF, 0); }
		public ComparisonExprADDContext comparisonExprADD() {
			return getRuleContext(ComparisonExprADDContext.class,0);
		}
		public List<BodyContext> body() {
			return getRuleContexts(BodyContext.class);
		}
		public BodyContext body(int i) {
			return getRuleContext(BodyContext.class,i);
		}
		public List<ElseIfStatementContext> elseIfStatement() {
			return getRuleContexts(ElseIfStatementContext.class);
		}
		public ElseIfStatementContext elseIfStatement(int i) {
			return getRuleContext(ElseIfStatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(MiuLanguageParser.ELSE, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_ifStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			match(IF);
			setState(156);
			comparisonExprADD();
			setState(157);
			body();
			setState(161);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(158);
					elseIfStatement();
					}
					} 
				}
				setState(163);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(164);
				match(ELSE);
				setState(165);
				body();
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
		public TerminalNode ELSE() { return getToken(MiuLanguageParser.ELSE, 0); }
		public TerminalNode IF() { return getToken(MiuLanguageParser.IF, 0); }
		public ComparisonExprADDContext comparisonExprADD() {
			return getRuleContext(ComparisonExprADDContext.class,0);
		}
		public BodyContext body() {
			return getRuleContext(BodyContext.class,0);
		}
		public ElseIfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfStatement; }
	}

	public final ElseIfStatementContext elseIfStatement() throws RecognitionException {
		ElseIfStatementContext _localctx = new ElseIfStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_elseIfStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			match(ELSE);
			setState(169);
			match(IF);
			setState(170);
			comparisonExprADD();
			setState(171);
			body();
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
		public TerminalNode FOR() { return getToken(MiuLanguageParser.FOR, 0); }
		public TerminalNode ID() { return getToken(MiuLanguageParser.ID, 0); }
		public TerminalNode IN() { return getToken(MiuLanguageParser.IN, 0); }
		public List<TerminalNode> INT() { return getTokens(MiuLanguageParser.INT); }
		public TerminalNode INT(int i) {
			return getToken(MiuLanguageParser.INT, i);
		}
		public TerminalNode DOUBLE_DOT() { return getToken(MiuLanguageParser.DOUBLE_DOT, 0); }
		public BodyContext body() {
			return getRuleContext(BodyContext.class,0);
		}
		public ForStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStatement; }
	}

	public final ForStatementContext forStatement() throws RecognitionException {
		ForStatementContext _localctx = new ForStatementContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_forStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			match(FOR);
			setState(174);
			match(ID);
			setState(175);
			match(IN);
			setState(176);
			match(INT);
			setState(177);
			match(DOUBLE_DOT);
			setState(178);
			match(INT);
			setState(179);
			body();
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
	public static class ComparisonExprADDContext extends ParserRuleContext {
		public List<ComparisonExprContext> comparisonExpr() {
			return getRuleContexts(ComparisonExprContext.class);
		}
		public ComparisonExprContext comparisonExpr(int i) {
			return getRuleContext(ComparisonExprContext.class,i);
		}
		public List<TerminalNode> ADD_OPERATOR() { return getTokens(MiuLanguageParser.ADD_OPERATOR); }
		public TerminalNode ADD_OPERATOR(int i) {
			return getToken(MiuLanguageParser.ADD_OPERATOR, i);
		}
		public ComparisonExprADDContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparisonExprADD; }
	}

	public final ComparisonExprADDContext comparisonExprADD() throws RecognitionException {
		ComparisonExprADDContext _localctx = new ComparisonExprADDContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_comparisonExprADD);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			comparisonExpr();
			setState(186);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ADD_OPERATOR) {
				{
				{
				setState(182);
				match(ADD_OPERATOR);
				setState(183);
				comparisonExpr();
				}
				}
				setState(188);
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
	public static class ComparisonExprContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode COMPARISON_OPERATOR() { return getToken(MiuLanguageParser.COMPARISON_OPERATOR, 0); }
		public ComparisonExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparisonExpr; }
	}

	public final ComparisonExprContext comparisonExpr() throws RecognitionException {
		ComparisonExprContext _localctx = new ComparisonExprContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_comparisonExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(189);
			expr();
			setState(190);
			match(COMPARISON_OPERATOR);
			setState(191);
			expr();
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
	public static class ExprReturnContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ComparisonExprADDContext comparisonExprADD() {
			return getRuleContext(ComparisonExprADDContext.class,0);
		}
		public ExprReturnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprReturn; }
	}

	public final ExprReturnContext exprReturn() throws RecognitionException {
		ExprReturnContext _localctx = new ExprReturnContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_exprReturn);
		try {
			setState(195);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(193);
				expr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(194);
				comparisonExprADD();
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
	public static class ExprContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MiuLanguageParser.ID, 0); }
		public TerminalNode STRING() { return getToken(MiuLanguageParser.STRING, 0); }
		public TerminalNode CHAR() { return getToken(MiuLanguageParser.CHAR, 0); }
		public TerminalNode INT() { return getToken(MiuLanguageParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MiuLanguageParser.FLOAT, 0); }
		public TerminalNode BOOL() { return getToken(MiuLanguageParser.BOOL, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1593835520L) != 0)) ) {
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
		"\u0004\u0001 \u00c8\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0001\u0000\u0005\u0000.\b\u0000\n\u0000\f\u00001\t\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001"+
		"9\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0005\u0002B\b\u0002\n\u0002\f\u0002E\t\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0003\u0003M\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004"+
		"R\b\u0004\n\u0004\f\u0004U\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0005\u0006]\b\u0006\n\u0006\f\u0006"+
		"`\t\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0005\u0007"+
		"f\b\u0007\n\u0007\f\u0007i\t\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0003\tu\b\t"+
		"\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003"+
		"\n\u007f\b\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0005\u000b\u0087\b\u000b\n\u000b\f\u000b\u008a\t\u000b\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0003\f\u0090\b\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\u000e\u0001\u000e\u0003\u000e\u009a\b\u000e\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0005\u000f\u00a0\b\u000f\n\u000f"+
		"\f\u000f\u00a3\t\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00a7\b\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0005\u0012\u00b9\b\u0012"+
		"\n\u0012\f\u0012\u00bc\t\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0014\u0001\u0014\u0003\u0014\u00c4\b\u0014\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0000\u0000\u0016\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*\u0000\u0002\u0001"+
		"\u0000\u0001\u001e\u0002\u0000\u0018\u001c\u001e\u001e\u00c3\u0000/\u0001"+
		"\u0000\u0000\u0000\u00024\u0001\u0000\u0000\u0000\u0004=\u0001\u0000\u0000"+
		"\u0000\u0006L\u0001\u0000\u0000\u0000\bN\u0001\u0000\u0000\u0000\nV\u0001"+
		"\u0000\u0000\u0000\fZ\u0001\u0000\u0000\u0000\u000ec\u0001\u0000\u0000"+
		"\u0000\u0010m\u0001\u0000\u0000\u0000\u0012q\u0001\u0000\u0000\u0000\u0014"+
		"y\u0001\u0000\u0000\u0000\u0016\u0083\u0001\u0000\u0000\u0000\u0018\u008f"+
		"\u0001\u0000\u0000\u0000\u001a\u0091\u0001\u0000\u0000\u0000\u001c\u0099"+
		"\u0001\u0000\u0000\u0000\u001e\u009b\u0001\u0000\u0000\u0000 \u00a8\u0001"+
		"\u0000\u0000\u0000\"\u00ad\u0001\u0000\u0000\u0000$\u00b5\u0001\u0000"+
		"\u0000\u0000&\u00bd\u0001\u0000\u0000\u0000(\u00c3\u0001\u0000\u0000\u0000"+
		"*\u00c5\u0001\u0000\u0000\u0000,.\u0007\u0000\u0000\u0000-,\u0001\u0000"+
		"\u0000\u0000.1\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000\u0000/0\u0001"+
		"\u0000\u0000\u000002\u0001\u0000\u0000\u00001/\u0001\u0000\u0000\u0000"+
		"23\u0005\u0000\u0000\u00013\u0001\u0001\u0000\u0000\u000045\u0005\u0004"+
		"\u0000\u000056\u0005\u001d\u0000\u000068\u0005\u0013\u0000\u000079\u0003"+
		"\b\u0004\u000087\u0001\u0000\u0000\u000089\u0001\u0000\u0000\u00009:\u0001"+
		"\u0000\u0000\u0000:;\u0005\u0014\u0000\u0000;<\u0003\u0006\u0003\u0000"+
		"<\u0003\u0001\u0000\u0000\u0000=>\u0005\u0005\u0000\u0000>C\u0005\u001e"+
		"\u0000\u0000?@\u0005\u000f\u0000\u0000@B\u0005\u001e\u0000\u0000A?\u0001"+
		"\u0000\u0000\u0000BE\u0001\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000"+
		"CD\u0001\u0000\u0000\u0000DF\u0001\u0000\u0000\u0000EC\u0001\u0000\u0000"+
		"\u0000FG\u0005\u0011\u0000\u0000G\u0005\u0001\u0000\u0000\u0000HI\u0005"+
		"\f\u0000\u0000IJ\u0005\u0017\u0000\u0000JM\u0003\u000e\u0007\u0000KM\u0003"+
		"\f\u0006\u0000LH\u0001\u0000\u0000\u0000LK\u0001\u0000\u0000\u0000M\u0007"+
		"\u0001\u0000\u0000\u0000NS\u0003\n\u0005\u0000OP\u0005\u0010\u0000\u0000"+
		"PR\u0003\n\u0005\u0000QO\u0001\u0000\u0000\u0000RU\u0001\u0000\u0000\u0000"+
		"SQ\u0001\u0000\u0000\u0000ST\u0001\u0000\u0000\u0000T\t\u0001\u0000\u0000"+
		"\u0000US\u0001\u0000\u0000\u0000VW\u0005\u001e\u0000\u0000WX\u0005\u0012"+
		"\u0000\u0000XY\u0005\u0017\u0000\u0000Y\u000b\u0001\u0000\u0000\u0000"+
		"Z^\u0005\u0015\u0000\u0000[]\u0003\u0018\f\u0000\\[\u0001\u0000\u0000"+
		"\u0000]`\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000\u0000^_\u0001\u0000"+
		"\u0000\u0000_a\u0001\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000ab\u0005"+
		"\u0016\u0000\u0000b\r\u0001\u0000\u0000\u0000cg\u0005\u0015\u0000\u0000"+
		"df\u0003\u0018\f\u0000ed\u0001\u0000\u0000\u0000fi\u0001\u0000\u0000\u0000"+
		"ge\u0001\u0000\u0000\u0000gh\u0001\u0000\u0000\u0000hj\u0001\u0000\u0000"+
		"\u0000ig\u0001\u0000\u0000\u0000jk\u0003\u0010\b\u0000kl\u0005\u0016\u0000"+
		"\u0000l\u000f\u0001\u0000\u0000\u0000mn\u0005\u000b\u0000\u0000no\u0003"+
		"(\u0014\u0000op\u0005\u0011\u0000\u0000p\u0011\u0001\u0000\u0000\u0000"+
		"qr\u0005\u001d\u0000\u0000rt\u0005\u0013\u0000\u0000su\u0003\u0016\u000b"+
		"\u0000ts\u0001\u0000\u0000\u0000tu\u0001\u0000\u0000\u0000uv\u0001\u0000"+
		"\u0000\u0000vw\u0005\u0014\u0000\u0000wx\u0005\u0011\u0000\u0000x\u0013"+
		"\u0001\u0000\u0000\u0000yz\u0005\u001e\u0000\u0000z{\u0005\r\u0000\u0000"+
		"{|\u0005\u001d\u0000\u0000|~\u0005\u0013\u0000\u0000}\u007f\u0003\u0016"+
		"\u000b\u0000~}\u0001\u0000\u0000\u0000~\u007f\u0001\u0000\u0000\u0000"+
		"\u007f\u0080\u0001\u0000\u0000\u0000\u0080\u0081\u0005\u0014\u0000\u0000"+
		"\u0081\u0082\u0005\u0011\u0000\u0000\u0082\u0015\u0001\u0000\u0000\u0000"+
		"\u0083\u0088\u0007\u0001\u0000\u0000\u0084\u0085\u0005\u0010\u0000\u0000"+
		"\u0085\u0087\u0007\u0001\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000"+
		"\u0087\u008a\u0001\u0000\u0000\u0000\u0088\u0086\u0001\u0000\u0000\u0000"+
		"\u0088\u0089\u0001\u0000\u0000\u0000\u0089\u0017\u0001\u0000\u0000\u0000"+
		"\u008a\u0088\u0001\u0000\u0000\u0000\u008b\u0090\u0003\u001a\r\u0000\u008c"+
		"\u0090\u0003\u0012\t\u0000\u008d\u0090\u0003\u0014\n\u0000\u008e\u0090"+
		"\u0003\u001c\u000e\u0000\u008f\u008b\u0001\u0000\u0000\u0000\u008f\u008c"+
		"\u0001\u0000\u0000\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u008f\u008e"+
		"\u0001\u0000\u0000\u0000\u0090\u0019\u0001\u0000\u0000\u0000\u0091\u0092"+
		"\u0005\u0006\u0000\u0000\u0092\u0093\u0005\u001e\u0000\u0000\u0093\u0094"+
		"\u0005\u0003\u0000\u0000\u0094\u0095\u0003*\u0015\u0000\u0095\u0096\u0005"+
		"\u0011\u0000\u0000\u0096\u001b\u0001\u0000\u0000\u0000\u0097\u009a\u0003"+
		"\u001e\u000f\u0000\u0098\u009a\u0003\"\u0011\u0000\u0099\u0097\u0001\u0000"+
		"\u0000\u0000\u0099\u0098\u0001\u0000\u0000\u0000\u009a\u001d\u0001\u0000"+
		"\u0000\u0000\u009b\u009c\u0005\b\u0000\u0000\u009c\u009d\u0003$\u0012"+
		"\u0000\u009d\u00a1\u0003\f\u0006\u0000\u009e\u00a0\u0003 \u0010\u0000"+
		"\u009f\u009e\u0001\u0000\u0000\u0000\u00a0\u00a3\u0001\u0000\u0000\u0000"+
		"\u00a1\u009f\u0001\u0000\u0000\u0000\u00a1\u00a2\u0001\u0000\u0000\u0000"+
		"\u00a2\u00a6\u0001\u0000\u0000\u0000\u00a3\u00a1\u0001\u0000\u0000\u0000"+
		"\u00a4\u00a5\u0005\t\u0000\u0000\u00a5\u00a7\u0003\f\u0006\u0000\u00a6"+
		"\u00a4\u0001\u0000\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000\u0000\u00a7"+
		"\u001f\u0001\u0000\u0000\u0000\u00a8\u00a9\u0005\t\u0000\u0000\u00a9\u00aa"+
		"\u0005\b\u0000\u0000\u00aa\u00ab\u0003$\u0012\u0000\u00ab\u00ac\u0003"+
		"\f\u0006\u0000\u00ac!\u0001\u0000\u0000\u0000\u00ad\u00ae\u0005\n\u0000"+
		"\u0000\u00ae\u00af\u0005\u001e\u0000\u0000\u00af\u00b0\u0005\u0007\u0000"+
		"\u0000\u00b0\u00b1\u0005\u001c\u0000\u0000\u00b1\u00b2\u0005\u000e\u0000"+
		"\u0000\u00b2\u00b3\u0005\u001c\u0000\u0000\u00b3\u00b4\u0003\f\u0006\u0000"+
		"\u00b4#\u0001\u0000\u0000\u0000\u00b5\u00ba\u0003&\u0013\u0000\u00b6\u00b7"+
		"\u0005\u0002\u0000\u0000\u00b7\u00b9\u0003&\u0013\u0000\u00b8\u00b6\u0001"+
		"\u0000\u0000\u0000\u00b9\u00bc\u0001\u0000\u0000\u0000\u00ba\u00b8\u0001"+
		"\u0000\u0000\u0000\u00ba\u00bb\u0001\u0000\u0000\u0000\u00bb%\u0001\u0000"+
		"\u0000\u0000\u00bc\u00ba\u0001\u0000\u0000\u0000\u00bd\u00be\u0003*\u0015"+
		"\u0000\u00be\u00bf\u0005\u0001\u0000\u0000\u00bf\u00c0\u0003*\u0015\u0000"+
		"\u00c0\'\u0001\u0000\u0000\u0000\u00c1\u00c4\u0003*\u0015\u0000\u00c2"+
		"\u00c4\u0003$\u0012\u0000\u00c3\u00c1\u0001\u0000\u0000\u0000\u00c3\u00c2"+
		"\u0001\u0000\u0000\u0000\u00c4)\u0001\u0000\u0000\u0000\u00c5\u00c6\u0007"+
		"\u0001\u0000\u0000\u00c6+\u0001\u0000\u0000\u0000\u0010/8CLS^gt~\u0088"+
		"\u008f\u0099\u00a1\u00a6\u00ba\u00c3";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
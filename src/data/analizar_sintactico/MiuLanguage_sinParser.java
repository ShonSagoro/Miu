// Generated from MiuLanguage_sin.g4 by ANTLR 4.13.1
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitProgram(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitProgram(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==FN || _la==USE) {
				{
				setState(46);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case USE:
					{
					setState(44);
					moduleDeclaration();
					}
					break;
				case FN:
					{
					setState(45);
					functionDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(50);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(52);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INVALID) {
				{
				setState(51);
				match(INVALID);
				}
			}

			setState(54);
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
		public TerminalNode FN() { return getToken(MiuLanguage_sinParser.FN, 0); }
		public TerminalNode IDF() { return getToken(MiuLanguage_sinParser.IDF, 0); }
		public TerminalNode LPAREN() { return getToken(MiuLanguage_sinParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MiuLanguage_sinParser.RPAREN, 0); }
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterFunctionDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitFunctionDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitFunctionDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			match(FN);
			setState(57);
			match(IDF);
			setState(58);
			match(LPAREN);
			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(59);
				paramList();
				}
			}

			setState(62);
			match(RPAREN);
			setState(63);
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
		public TerminalNode USE() { return getToken(MiuLanguage_sinParser.USE, 0); }
		public List<TerminalNode> ID() { return getTokens(MiuLanguage_sinParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MiuLanguage_sinParser.ID, i);
		}
		public TerminalNode PC() { return getToken(MiuLanguage_sinParser.PC, 0); }
		public List<TerminalNode> PP() { return getTokens(MiuLanguage_sinParser.PP); }
		public TerminalNode PP(int i) {
			return getToken(MiuLanguage_sinParser.PP, i);
		}
		public ModuleDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterModuleDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitModuleDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitModuleDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ModuleDeclarationContext moduleDeclaration() throws RecognitionException {
		ModuleDeclarationContext _localctx = new ModuleDeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_moduleDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(65);
			match(USE);
			setState(66);
			match(ID);
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PP) {
				{
				{
				setState(67);
				match(PP);
				setState(68);
				match(ID);
				}
				}
				setState(73);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(74);
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
		public TerminalNode ARROW() { return getToken(MiuLanguage_sinParser.ARROW, 0); }
		public TerminalNode TYPE() { return getToken(MiuLanguage_sinParser.TYPE, 0); }
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterCheckreturnFunction(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitCheckreturnFunction(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitCheckreturnFunction(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CheckreturnFunctionContext checkreturnFunction() throws RecognitionException {
		CheckreturnFunctionContext _localctx = new CheckreturnFunctionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_checkreturnFunction);
		try {
			setState(80);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ARROW:
				enterOuterAlt(_localctx, 1);
				{
				setState(76);
				match(ARROW);
				setState(77);
				match(TYPE);
				setState(78);
				bodyR();
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(79);
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
		public List<TerminalNode> COMMA() { return getTokens(MiuLanguage_sinParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MiuLanguage_sinParser.COMMA, i);
		}
		public ParamListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterParamList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitParamList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitParamList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParamListContext paramList() throws RecognitionException {
		ParamListContext _localctx = new ParamListContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_paramList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			param();
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(83);
				match(COMMA);
				setState(84);
				param();
				}
				}
				setState(89);
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
		public TerminalNode ID() { return getToken(MiuLanguage_sinParser.ID, 0); }
		public TerminalNode P() { return getToken(MiuLanguage_sinParser.P, 0); }
		public TerminalNode TYPE() { return getToken(MiuLanguage_sinParser.TYPE, 0); }
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterParam(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitParam(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitParam(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			match(ID);
			setState(91);
			match(P);
			setState(92);
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
		public TerminalNode LBRACE() { return getToken(MiuLanguage_sinParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(MiuLanguage_sinParser.RBRACE, 0); }
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitBody(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitBody(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BodyContext body() throws RecognitionException {
		BodyContext _localctx = new BodyContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(94);
			match(LBRACE);
			setState(98);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1610614080L) != 0)) {
				{
				{
				setState(95);
				statement();
				}
				}
				setState(100);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(101);
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
		public TerminalNode LBRACE() { return getToken(MiuLanguage_sinParser.LBRACE, 0); }
		public StatementRContext statementR() {
			return getRuleContext(StatementRContext.class,0);
		}
		public TerminalNode RBRACE() { return getToken(MiuLanguage_sinParser.RBRACE, 0); }
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterBodyR(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitBodyR(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitBodyR(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BodyRContext bodyR() throws RecognitionException {
		BodyRContext _localctx = new BodyRContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_bodyR);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(LBRACE);
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1610614080L) != 0)) {
				{
				{
				setState(104);
				statement();
				}
				}
				setState(109);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(110);
			statementR();
			setState(111);
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
		public TerminalNode RETURN() { return getToken(MiuLanguage_sinParser.RETURN, 0); }
		public ExprReturnContext exprReturn() {
			return getRuleContext(ExprReturnContext.class,0);
		}
		public TerminalNode PC() { return getToken(MiuLanguage_sinParser.PC, 0); }
		public StatementRContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementR; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterStatementR(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitStatementR(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitStatementR(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatementRContext statementR() throws RecognitionException {
		StatementRContext _localctx = new StatementRContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_statementR);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
			match(RETURN);
			setState(114);
			exprReturn();
			setState(115);
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
		public TerminalNode IDF() { return getToken(MiuLanguage_sinParser.IDF, 0); }
		public TerminalNode LPAREN() { return getToken(MiuLanguage_sinParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MiuLanguage_sinParser.RPAREN, 0); }
		public TerminalNode PC() { return getToken(MiuLanguage_sinParser.PC, 0); }
		public ArgListContext argList() {
			return getRuleContext(ArgListContext.class,0);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterFunctionCall(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitFunctionCall(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitFunctionCall(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
			match(IDF);
			setState(118);
			match(LPAREN);
			setState(120);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1593835520L) != 0)) {
				{
				setState(119);
				argList();
				}
			}

			setState(122);
			match(RPAREN);
			setState(123);
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
		public TerminalNode ID() { return getToken(MiuLanguage_sinParser.ID, 0); }
		public TerminalNode DOT() { return getToken(MiuLanguage_sinParser.DOT, 0); }
		public TerminalNode IDF() { return getToken(MiuLanguage_sinParser.IDF, 0); }
		public TerminalNode LPAREN() { return getToken(MiuLanguage_sinParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(MiuLanguage_sinParser.RPAREN, 0); }
		public TerminalNode PC() { return getToken(MiuLanguage_sinParser.PC, 0); }
		public ArgListContext argList() {
			return getRuleContext(ArgListContext.class,0);
		}
		public FunctionCallVarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCallVar; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterFunctionCallVar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitFunctionCallVar(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitFunctionCallVar(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionCallVarContext functionCallVar() throws RecognitionException {
		FunctionCallVarContext _localctx = new FunctionCallVarContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_functionCallVar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			match(ID);
			setState(126);
			match(DOT);
			setState(127);
			match(IDF);
			setState(128);
			match(LPAREN);
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1593835520L) != 0)) {
				{
				setState(129);
				argList();
				}
			}

			setState(132);
			match(RPAREN);
			setState(133);
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
		public List<TerminalNode> ID() { return getTokens(MiuLanguage_sinParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MiuLanguage_sinParser.ID, i);
		}
		public List<TerminalNode> STRING() { return getTokens(MiuLanguage_sinParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(MiuLanguage_sinParser.STRING, i);
		}
		public List<TerminalNode> CHAR() { return getTokens(MiuLanguage_sinParser.CHAR); }
		public TerminalNode CHAR(int i) {
			return getToken(MiuLanguage_sinParser.CHAR, i);
		}
		public List<TerminalNode> INT() { return getTokens(MiuLanguage_sinParser.INT); }
		public TerminalNode INT(int i) {
			return getToken(MiuLanguage_sinParser.INT, i);
		}
		public List<TerminalNode> FLOAT() { return getTokens(MiuLanguage_sinParser.FLOAT); }
		public TerminalNode FLOAT(int i) {
			return getToken(MiuLanguage_sinParser.FLOAT, i);
		}
		public List<TerminalNode> BOOL() { return getTokens(MiuLanguage_sinParser.BOOL); }
		public TerminalNode BOOL(int i) {
			return getToken(MiuLanguage_sinParser.BOOL, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(MiuLanguage_sinParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(MiuLanguage_sinParser.COMMA, i);
		}
		public ArgListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterArgList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitArgList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitArgList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArgListContext argList() throws RecognitionException {
		ArgListContext _localctx = new ArgListContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_argList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1593835520L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(136);
				match(COMMA);
				setState(137);
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
				setState(142);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_statement);
		try {
			setState(147);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LET:
				enterOuterAlt(_localctx, 1);
				{
				setState(143);
				assignment();
				}
				break;
			case IDF:
				enterOuterAlt(_localctx, 2);
				{
				setState(144);
				functionCall();
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 3);
				{
				setState(145);
				functionCallVar();
				}
				break;
			case IF:
			case FOR:
				enterOuterAlt(_localctx, 4);
				{
				setState(146);
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
		public TerminalNode LET() { return getToken(MiuLanguage_sinParser.LET, 0); }
		public TerminalNode ID() { return getToken(MiuLanguage_sinParser.ID, 0); }
		public TerminalNode EQUAL() { return getToken(MiuLanguage_sinParser.EQUAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PC() { return getToken(MiuLanguage_sinParser.PC, 0); }
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterAssignment(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitAssignment(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitAssignment(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			match(LET);
			setState(150);
			match(ID);
			setState(151);
			match(EQUAL);
			setState(152);
			expr();
			setState(153);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterControlStructure(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitControlStructure(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitControlStructure(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ControlStructureContext controlStructure() throws RecognitionException {
		ControlStructureContext _localctx = new ControlStructureContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_controlStructure);
		try {
			setState(157);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(155);
				ifStatement();
				}
				break;
			case FOR:
				enterOuterAlt(_localctx, 2);
				{
				setState(156);
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
		public TerminalNode IF() { return getToken(MiuLanguage_sinParser.IF, 0); }
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
		public TerminalNode ELSE() { return getToken(MiuLanguage_sinParser.ELSE, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterIfStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitIfStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitIfStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_ifStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			match(IF);
			setState(160);
			comparisonExprADD();
			setState(161);
			body();
			setState(165);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(162);
					elseIfStatement();
					}
					} 
				}
				setState(167);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			}
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(168);
				match(ELSE);
				setState(169);
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
		public TerminalNode ELSE() { return getToken(MiuLanguage_sinParser.ELSE, 0); }
		public TerminalNode IF() { return getToken(MiuLanguage_sinParser.IF, 0); }
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterElseIfStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitElseIfStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitElseIfStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElseIfStatementContext elseIfStatement() throws RecognitionException {
		ElseIfStatementContext _localctx = new ElseIfStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_elseIfStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			match(ELSE);
			setState(173);
			match(IF);
			setState(174);
			comparisonExprADD();
			setState(175);
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
		public TerminalNode FOR() { return getToken(MiuLanguage_sinParser.FOR, 0); }
		public TerminalNode ID() { return getToken(MiuLanguage_sinParser.ID, 0); }
		public TerminalNode IN() { return getToken(MiuLanguage_sinParser.IN, 0); }
		public List<TerminalNode> INT() { return getTokens(MiuLanguage_sinParser.INT); }
		public TerminalNode INT(int i) {
			return getToken(MiuLanguage_sinParser.INT, i);
		}
		public TerminalNode DOUBLE_DOT() { return getToken(MiuLanguage_sinParser.DOUBLE_DOT, 0); }
		public BodyContext body() {
			return getRuleContext(BodyContext.class,0);
		}
		public ForStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterForStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitForStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitForStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ForStatementContext forStatement() throws RecognitionException {
		ForStatementContext _localctx = new ForStatementContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_forStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
			match(FOR);
			setState(178);
			match(ID);
			setState(179);
			match(IN);
			setState(180);
			match(INT);
			setState(181);
			match(DOUBLE_DOT);
			setState(182);
			match(INT);
			setState(183);
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
		public List<TerminalNode> ADD_OPERATOR() { return getTokens(MiuLanguage_sinParser.ADD_OPERATOR); }
		public TerminalNode ADD_OPERATOR(int i) {
			return getToken(MiuLanguage_sinParser.ADD_OPERATOR, i);
		}
		public ComparisonExprADDContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparisonExprADD; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterComparisonExprADD(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitComparisonExprADD(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitComparisonExprADD(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ComparisonExprADDContext comparisonExprADD() throws RecognitionException {
		ComparisonExprADDContext _localctx = new ComparisonExprADDContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_comparisonExprADD);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			comparisonExpr();
			setState(190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ADD_OPERATOR) {
				{
				{
				setState(186);
				match(ADD_OPERATOR);
				setState(187);
				comparisonExpr();
				}
				}
				setState(192);
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
		public TerminalNode COMPARISON_OPERATOR() { return getToken(MiuLanguage_sinParser.COMPARISON_OPERATOR, 0); }
		public ComparisonExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparisonExpr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterComparisonExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitComparisonExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitComparisonExpr(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ComparisonExprContext comparisonExpr() throws RecognitionException {
		ComparisonExprContext _localctx = new ComparisonExprContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_comparisonExpr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			expr();
			setState(194);
			match(COMPARISON_OPERATOR);
			setState(195);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterExprReturn(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitExprReturn(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitExprReturn(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExprReturnContext exprReturn() throws RecognitionException {
		ExprReturnContext _localctx = new ExprReturnContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_exprReturn);
		try {
			setState(199);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(197);
				expr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(198);
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
		public TerminalNode ID() { return getToken(MiuLanguage_sinParser.ID, 0); }
		public TerminalNode STRING() { return getToken(MiuLanguage_sinParser.STRING, 0); }
		public TerminalNode CHAR() { return getToken(MiuLanguage_sinParser.CHAR, 0); }
		public TerminalNode INT() { return getToken(MiuLanguage_sinParser.INT, 0); }
		public TerminalNode FLOAT() { return getToken(MiuLanguage_sinParser.FLOAT, 0); }
		public TerminalNode BOOL() { return getToken(MiuLanguage_sinParser.BOOL, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).enterExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MiuLanguage_sinListener ) ((MiuLanguage_sinListener)listener).exitExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof MiuLanguage_sinVisitor ) return ((MiuLanguage_sinVisitor<? extends T>)visitor).visitExpr(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
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
		"\u0004\u0001 \u00cc\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0001\u0000\u0001\u0000\u0005\u0000/\b\u0000\n\u0000\f\u00002\t\u0000"+
		"\u0001\u0000\u0003\u00005\b\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001=\b\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0005\u0002F\b\u0002\n\u0002\f\u0002I\t\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003Q\b\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004V\b\u0004\n\u0004\f\u0004"+
		"Y\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0005\u0006a\b\u0006\n\u0006\f\u0006d\t\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0005\u0007j\b\u0007\n\u0007\f\u0007"+
		"m\t\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\t\u0001\t\u0001\t\u0003\ty\b\t\u0001\t\u0001\t\u0001\t"+
		"\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0003\n\u0083\b\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u008b\b\u000b"+
		"\n\u000b\f\u000b\u008e\t\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f"+
		"\u0094\b\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0003\u000e\u009e\b\u000e\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0005\u000f\u00a4\b\u000f\n\u000f\f\u000f\u00a7\t\u000f\u0001"+
		"\u000f\u0001\u000f\u0003\u000f\u00ab\b\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0005\u0012\u00bd\b\u0012\n\u0012\f\u0012\u00c0\t\u0012"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014"+
		"\u0003\u0014\u00c8\b\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0000\u0000"+
		"\u0016\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e \"$&(*\u0000\u0001\u0002\u0000\u0018\u001c\u001e\u001e"+
		"\u00c9\u00000\u0001\u0000\u0000\u0000\u00028\u0001\u0000\u0000\u0000\u0004"+
		"A\u0001\u0000\u0000\u0000\u0006P\u0001\u0000\u0000\u0000\bR\u0001\u0000"+
		"\u0000\u0000\nZ\u0001\u0000\u0000\u0000\f^\u0001\u0000\u0000\u0000\u000e"+
		"g\u0001\u0000\u0000\u0000\u0010q\u0001\u0000\u0000\u0000\u0012u\u0001"+
		"\u0000\u0000\u0000\u0014}\u0001\u0000\u0000\u0000\u0016\u0087\u0001\u0000"+
		"\u0000\u0000\u0018\u0093\u0001\u0000\u0000\u0000\u001a\u0095\u0001\u0000"+
		"\u0000\u0000\u001c\u009d\u0001\u0000\u0000\u0000\u001e\u009f\u0001\u0000"+
		"\u0000\u0000 \u00ac\u0001\u0000\u0000\u0000\"\u00b1\u0001\u0000\u0000"+
		"\u0000$\u00b9\u0001\u0000\u0000\u0000&\u00c1\u0001\u0000\u0000\u0000("+
		"\u00c7\u0001\u0000\u0000\u0000*\u00c9\u0001\u0000\u0000\u0000,/\u0003"+
		"\u0004\u0002\u0000-/\u0003\u0002\u0001\u0000.,\u0001\u0000\u0000\u0000"+
		".-\u0001\u0000\u0000\u0000/2\u0001\u0000\u0000\u00000.\u0001\u0000\u0000"+
		"\u000001\u0001\u0000\u0000\u000014\u0001\u0000\u0000\u000020\u0001\u0000"+
		"\u0000\u000035\u0005 \u0000\u000043\u0001\u0000\u0000\u000045\u0001\u0000"+
		"\u0000\u000056\u0001\u0000\u0000\u000067\u0005\u0000\u0000\u00017\u0001"+
		"\u0001\u0000\u0000\u000089\u0005\u0004\u0000\u00009:\u0005\u001d\u0000"+
		"\u0000:<\u0005\u0013\u0000\u0000;=\u0003\b\u0004\u0000<;\u0001\u0000\u0000"+
		"\u0000<=\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000\u0000>?\u0005\u0014"+
		"\u0000\u0000?@\u0003\u0006\u0003\u0000@\u0003\u0001\u0000\u0000\u0000"+
		"AB\u0005\u0005\u0000\u0000BG\u0005\u001e\u0000\u0000CD\u0005\u000f\u0000"+
		"\u0000DF\u0005\u001e\u0000\u0000EC\u0001\u0000\u0000\u0000FI\u0001\u0000"+
		"\u0000\u0000GE\u0001\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000HJ\u0001"+
		"\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000JK\u0005\u0011\u0000\u0000"+
		"K\u0005\u0001\u0000\u0000\u0000LM\u0005\f\u0000\u0000MN\u0005\u0017\u0000"+
		"\u0000NQ\u0003\u000e\u0007\u0000OQ\u0003\f\u0006\u0000PL\u0001\u0000\u0000"+
		"\u0000PO\u0001\u0000\u0000\u0000Q\u0007\u0001\u0000\u0000\u0000RW\u0003"+
		"\n\u0005\u0000ST\u0005\u0010\u0000\u0000TV\u0003\n\u0005\u0000US\u0001"+
		"\u0000\u0000\u0000VY\u0001\u0000\u0000\u0000WU\u0001\u0000\u0000\u0000"+
		"WX\u0001\u0000\u0000\u0000X\t\u0001\u0000\u0000\u0000YW\u0001\u0000\u0000"+
		"\u0000Z[\u0005\u001e\u0000\u0000[\\\u0005\u0012\u0000\u0000\\]\u0005\u0017"+
		"\u0000\u0000]\u000b\u0001\u0000\u0000\u0000^b\u0005\u0015\u0000\u0000"+
		"_a\u0003\u0018\f\u0000`_\u0001\u0000\u0000\u0000ad\u0001\u0000\u0000\u0000"+
		"b`\u0001\u0000\u0000\u0000bc\u0001\u0000\u0000\u0000ce\u0001\u0000\u0000"+
		"\u0000db\u0001\u0000\u0000\u0000ef\u0005\u0016\u0000\u0000f\r\u0001\u0000"+
		"\u0000\u0000gk\u0005\u0015\u0000\u0000hj\u0003\u0018\f\u0000ih\u0001\u0000"+
		"\u0000\u0000jm\u0001\u0000\u0000\u0000ki\u0001\u0000\u0000\u0000kl\u0001"+
		"\u0000\u0000\u0000ln\u0001\u0000\u0000\u0000mk\u0001\u0000\u0000\u0000"+
		"no\u0003\u0010\b\u0000op\u0005\u0016\u0000\u0000p\u000f\u0001\u0000\u0000"+
		"\u0000qr\u0005\u000b\u0000\u0000rs\u0003(\u0014\u0000st\u0005\u0011\u0000"+
		"\u0000t\u0011\u0001\u0000\u0000\u0000uv\u0005\u001d\u0000\u0000vx\u0005"+
		"\u0013\u0000\u0000wy\u0003\u0016\u000b\u0000xw\u0001\u0000\u0000\u0000"+
		"xy\u0001\u0000\u0000\u0000yz\u0001\u0000\u0000\u0000z{\u0005\u0014\u0000"+
		"\u0000{|\u0005\u0011\u0000\u0000|\u0013\u0001\u0000\u0000\u0000}~\u0005"+
		"\u001e\u0000\u0000~\u007f\u0005\r\u0000\u0000\u007f\u0080\u0005\u001d"+
		"\u0000\u0000\u0080\u0082\u0005\u0013\u0000\u0000\u0081\u0083\u0003\u0016"+
		"\u000b\u0000\u0082\u0081\u0001\u0000\u0000\u0000\u0082\u0083\u0001\u0000"+
		"\u0000\u0000\u0083\u0084\u0001\u0000\u0000\u0000\u0084\u0085\u0005\u0014"+
		"\u0000\u0000\u0085\u0086\u0005\u0011\u0000\u0000\u0086\u0015\u0001\u0000"+
		"\u0000\u0000\u0087\u008c\u0007\u0000\u0000\u0000\u0088\u0089\u0005\u0010"+
		"\u0000\u0000\u0089\u008b\u0007\u0000\u0000\u0000\u008a\u0088\u0001\u0000"+
		"\u0000\u0000\u008b\u008e\u0001\u0000\u0000\u0000\u008c\u008a\u0001\u0000"+
		"\u0000\u0000\u008c\u008d\u0001\u0000\u0000\u0000\u008d\u0017\u0001\u0000"+
		"\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008f\u0094\u0003\u001a"+
		"\r\u0000\u0090\u0094\u0003\u0012\t\u0000\u0091\u0094\u0003\u0014\n\u0000"+
		"\u0092\u0094\u0003\u001c\u000e\u0000\u0093\u008f\u0001\u0000\u0000\u0000"+
		"\u0093\u0090\u0001\u0000\u0000\u0000\u0093\u0091\u0001\u0000\u0000\u0000"+
		"\u0093\u0092\u0001\u0000\u0000\u0000\u0094\u0019\u0001\u0000\u0000\u0000"+
		"\u0095\u0096\u0005\u0006\u0000\u0000\u0096\u0097\u0005\u001e\u0000\u0000"+
		"\u0097\u0098\u0005\u0003\u0000\u0000\u0098\u0099\u0003*\u0015\u0000\u0099"+
		"\u009a\u0005\u0011\u0000\u0000\u009a\u001b\u0001\u0000\u0000\u0000\u009b"+
		"\u009e\u0003\u001e\u000f\u0000\u009c\u009e\u0003\"\u0011\u0000\u009d\u009b"+
		"\u0001\u0000\u0000\u0000\u009d\u009c\u0001\u0000\u0000\u0000\u009e\u001d"+
		"\u0001\u0000\u0000\u0000\u009f\u00a0\u0005\b\u0000\u0000\u00a0\u00a1\u0003"+
		"$\u0012\u0000\u00a1\u00a5\u0003\f\u0006\u0000\u00a2\u00a4\u0003 \u0010"+
		"\u0000\u00a3\u00a2\u0001\u0000\u0000\u0000\u00a4\u00a7\u0001\u0000\u0000"+
		"\u0000\u00a5\u00a3\u0001\u0000\u0000\u0000\u00a5\u00a6\u0001\u0000\u0000"+
		"\u0000\u00a6\u00aa\u0001\u0000\u0000\u0000\u00a7\u00a5\u0001\u0000\u0000"+
		"\u0000\u00a8\u00a9\u0005\t\u0000\u0000\u00a9\u00ab\u0003\f\u0006\u0000"+
		"\u00aa\u00a8\u0001\u0000\u0000\u0000\u00aa\u00ab\u0001\u0000\u0000\u0000"+
		"\u00ab\u001f\u0001\u0000\u0000\u0000\u00ac\u00ad\u0005\t\u0000\u0000\u00ad"+
		"\u00ae\u0005\b\u0000\u0000\u00ae\u00af\u0003$\u0012\u0000\u00af\u00b0"+
		"\u0003\f\u0006\u0000\u00b0!\u0001\u0000\u0000\u0000\u00b1\u00b2\u0005"+
		"\n\u0000\u0000\u00b2\u00b3\u0005\u001e\u0000\u0000\u00b3\u00b4\u0005\u0007"+
		"\u0000\u0000\u00b4\u00b5\u0005\u001c\u0000\u0000\u00b5\u00b6\u0005\u000e"+
		"\u0000\u0000\u00b6\u00b7\u0005\u001c\u0000\u0000\u00b7\u00b8\u0003\f\u0006"+
		"\u0000\u00b8#\u0001\u0000\u0000\u0000\u00b9\u00be\u0003&\u0013\u0000\u00ba"+
		"\u00bb\u0005\u0002\u0000\u0000\u00bb\u00bd\u0003&\u0013\u0000\u00bc\u00ba"+
		"\u0001\u0000\u0000\u0000\u00bd\u00c0\u0001\u0000\u0000\u0000\u00be\u00bc"+
		"\u0001\u0000\u0000\u0000\u00be\u00bf\u0001\u0000\u0000\u0000\u00bf%\u0001"+
		"\u0000\u0000\u0000\u00c0\u00be\u0001\u0000\u0000\u0000\u00c1\u00c2\u0003"+
		"*\u0015\u0000\u00c2\u00c3\u0005\u0001\u0000\u0000\u00c3\u00c4\u0003*\u0015"+
		"\u0000\u00c4\'\u0001\u0000\u0000\u0000\u00c5\u00c8\u0003*\u0015\u0000"+
		"\u00c6\u00c8\u0003$\u0012\u0000\u00c7\u00c5\u0001\u0000\u0000\u0000\u00c7"+
		"\u00c6\u0001\u0000\u0000\u0000\u00c8)\u0001\u0000\u0000\u0000\u00c9\u00ca"+
		"\u0007\u0000\u0000\u0000\u00ca+\u0001\u0000\u0000\u0000\u0012.04<GPWb"+
		"kx\u0082\u008c\u0093\u009d\u00a5\u00aa\u00be\u00c7";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
// Generated from c:/Users/ramos/OneDrive/Documentos/code_work/vite_projects/Miu/src/data/analizar_sintactico/MiuLanguage_sin.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MiuLanguage_sinParser}.
 */
public interface MiuLanguage_sinListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(MiuLanguage_sinParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(MiuLanguage_sinParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDeclaration(MiuLanguage_sinParser.FunctionDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDeclaration(MiuLanguage_sinParser.FunctionDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#moduleDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterModuleDeclaration(MiuLanguage_sinParser.ModuleDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#moduleDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitModuleDeclaration(MiuLanguage_sinParser.ModuleDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#checkreturnFunction}.
	 * @param ctx the parse tree
	 */
	void enterCheckreturnFunction(MiuLanguage_sinParser.CheckreturnFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#checkreturnFunction}.
	 * @param ctx the parse tree
	 */
	void exitCheckreturnFunction(MiuLanguage_sinParser.CheckreturnFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#paramList}.
	 * @param ctx the parse tree
	 */
	void enterParamList(MiuLanguage_sinParser.ParamListContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#paramList}.
	 * @param ctx the parse tree
	 */
	void exitParamList(MiuLanguage_sinParser.ParamListContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#param}.
	 * @param ctx the parse tree
	 */
	void enterParam(MiuLanguage_sinParser.ParamContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#param}.
	 * @param ctx the parse tree
	 */
	void exitParam(MiuLanguage_sinParser.ParamContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#body}.
	 * @param ctx the parse tree
	 */
	void enterBody(MiuLanguage_sinParser.BodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#body}.
	 * @param ctx the parse tree
	 */
	void exitBody(MiuLanguage_sinParser.BodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#bodyR}.
	 * @param ctx the parse tree
	 */
	void enterBodyR(MiuLanguage_sinParser.BodyRContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#bodyR}.
	 * @param ctx the parse tree
	 */
	void exitBodyR(MiuLanguage_sinParser.BodyRContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#statementR}.
	 * @param ctx the parse tree
	 */
	void enterStatementR(MiuLanguage_sinParser.StatementRContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#statementR}.
	 * @param ctx the parse tree
	 */
	void exitStatementR(MiuLanguage_sinParser.StatementRContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(MiuLanguage_sinParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(MiuLanguage_sinParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#functionCallVar}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCallVar(MiuLanguage_sinParser.FunctionCallVarContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#functionCallVar}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCallVar(MiuLanguage_sinParser.FunctionCallVarContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#argList}.
	 * @param ctx the parse tree
	 */
	void enterArgList(MiuLanguage_sinParser.ArgListContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#argList}.
	 * @param ctx the parse tree
	 */
	void exitArgList(MiuLanguage_sinParser.ArgListContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(MiuLanguage_sinParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(MiuLanguage_sinParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#assignment}.
	 * @param ctx the parse tree
	 */
	void enterAssignment(MiuLanguage_sinParser.AssignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#assignment}.
	 * @param ctx the parse tree
	 */
	void exitAssignment(MiuLanguage_sinParser.AssignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#controlStructure}.
	 * @param ctx the parse tree
	 */
	void enterControlStructure(MiuLanguage_sinParser.ControlStructureContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#controlStructure}.
	 * @param ctx the parse tree
	 */
	void exitControlStructure(MiuLanguage_sinParser.ControlStructureContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(MiuLanguage_sinParser.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(MiuLanguage_sinParser.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#elseIfStatement}.
	 * @param ctx the parse tree
	 */
	void enterElseIfStatement(MiuLanguage_sinParser.ElseIfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#elseIfStatement}.
	 * @param ctx the parse tree
	 */
	void exitElseIfStatement(MiuLanguage_sinParser.ElseIfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void enterForStatement(MiuLanguage_sinParser.ForStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void exitForStatement(MiuLanguage_sinParser.ForStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#comparisonExprADD}.
	 * @param ctx the parse tree
	 */
	void enterComparisonExprADD(MiuLanguage_sinParser.ComparisonExprADDContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#comparisonExprADD}.
	 * @param ctx the parse tree
	 */
	void exitComparisonExprADD(MiuLanguage_sinParser.ComparisonExprADDContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#comparisonExpr}.
	 * @param ctx the parse tree
	 */
	void enterComparisonExpr(MiuLanguage_sinParser.ComparisonExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#comparisonExpr}.
	 * @param ctx the parse tree
	 */
	void exitComparisonExpr(MiuLanguage_sinParser.ComparisonExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#exprReturn}.
	 * @param ctx the parse tree
	 */
	void enterExprReturn(MiuLanguage_sinParser.ExprReturnContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#exprReturn}.
	 * @param ctx the parse tree
	 */
	void exitExprReturn(MiuLanguage_sinParser.ExprReturnContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_sinParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(MiuLanguage_sinParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_sinParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(MiuLanguage_sinParser.ExprContext ctx);
}
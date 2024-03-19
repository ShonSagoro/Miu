// Generated from MiuLanguage_sin.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link MiuLanguage_sinParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface MiuLanguage_sinVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#program}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProgram(MiuLanguage_sinParser.ProgramContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#functionDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionDeclaration(MiuLanguage_sinParser.FunctionDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#moduleDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitModuleDeclaration(MiuLanguage_sinParser.ModuleDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#checkreturnFunction}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCheckreturnFunction(MiuLanguage_sinParser.CheckreturnFunctionContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#paramList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParamList(MiuLanguage_sinParser.ParamListContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#param}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParam(MiuLanguage_sinParser.ParamContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#body}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBody(MiuLanguage_sinParser.BodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#bodyR}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBodyR(MiuLanguage_sinParser.BodyRContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#statementR}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatementR(MiuLanguage_sinParser.StatementRContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#functionCall}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionCall(MiuLanguage_sinParser.FunctionCallContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#functionCallVar}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionCallVar(MiuLanguage_sinParser.FunctionCallVarContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#argList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArgList(MiuLanguage_sinParser.ArgListContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatement(MiuLanguage_sinParser.StatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#assignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAssignment(MiuLanguage_sinParser.AssignmentContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#controlStructure}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitControlStructure(MiuLanguage_sinParser.ControlStructureContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#ifStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIfStatement(MiuLanguage_sinParser.IfStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#elseIfStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitElseIfStatement(MiuLanguage_sinParser.ElseIfStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#forStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForStatement(MiuLanguage_sinParser.ForStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#comparisonExprADD}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComparisonExprADD(MiuLanguage_sinParser.ComparisonExprADDContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#comparisonExpr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComparisonExpr(MiuLanguage_sinParser.ComparisonExprContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#exprReturn}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExprReturn(MiuLanguage_sinParser.ExprReturnContext ctx);
	/**
	 * Visit a parse tree produced by {@link MiuLanguage_sinParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpr(MiuLanguage_sinParser.ExprContext ctx);
}
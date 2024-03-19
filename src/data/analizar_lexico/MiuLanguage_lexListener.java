// Generated from MiuLanguage_lex.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MiuLanguage_lexParser}.
 */
public interface MiuLanguage_lexListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MiuLanguage_lexParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(MiuLanguage_lexParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiuLanguage_lexParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(MiuLanguage_lexParser.ProgramContext ctx);
}
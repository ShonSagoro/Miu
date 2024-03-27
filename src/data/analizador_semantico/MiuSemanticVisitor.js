import MiuLanguage_sinVisitor from '../analizar_sintactico/MiuLanguage_sinVisitor'; // Import the missing class

export default class MiuSemanticVisitor extends MiuLanguage_sinVisitor {

    constructor() {
        super();
        this.variables = new Set();
        this.functions = new Set();
        this.errors = [];
        this.warnings = [];
    }

    // Visit a parse tree produced by MiuLanguage_sinParser#program.
    visitProgram(ctx) {
        this.visitChildren(ctx);
        if (this.functions.has('Main') === false){
            this.warnings.push('No main function declared');
        }
        return "";
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#functionDeclaration.
    visitFunctionDeclaration(ctx) {
        let function_name = this.visit(ctx.children[1]);
        if (!this.functions.has(function_name)) {
            this.functions.add(function_name);
        }
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#moduleDeclaration.
    visitModuleDeclaration(ctx) {
        let var_name = this.visit(ctx.children[ctx.children.length - 2]);
        if (!this.variables.has(var_name)) {
            this.variables.add(var_name);
        }
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#checkreturnFunctionRule.
    visitCheckreturnFunctionRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#paramList.
    visitParamList(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#invalidRule.
    visitInvalidRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#param.
    visitParam(ctx) {
        let var_name = this.visit(ctx.children[0]);
        if (this.visitChildren(var_name)) {
            this.variables.add(var_name);
        }
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#bodyRule.
    visitBodyRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#bodyRRule.
    visitBodyRRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#statementRRule.
    visitStatementRRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#functionCall.
    visitFunctionCall(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#varStatement.
    visitVarStatement(ctx) {
        let var_name = this.visit(ctx.children[0]);
        if (!this.variables.has(var_name)) {
            this.errors.push(`Variable ${var_name} Not declared`);
            return;
        } else {
            return this.visitChildren(ctx);
        }
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#functionCallVar.
    visitFunctionCallVar(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#argList.
    visitArgList(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#statement.
    visitStatement(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#assignametnVar.
    visitAssignametnVar(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#assignment.
    visitAssignment(ctx) {
        let var_name = this.visit(ctx.children[1]);
        let response = this.checkVariable(var_name);
        if (response) {
            this.variables.add(var_name);
        }
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#controlStructure.
    visitControlStructure(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#ifStatement.
    visitIfStatement(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#elseStatement.
    visitElseStatement(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#elseIfStatement.
    visitElseIfStatement(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#forStatement.
    visitForStatement(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#comparisonExprADDRule.
    visitComparisonExprADDRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#comparisonExprRule.
    visitComparisonExprRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#exprReturnRule.
    visitExprReturnRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#exprRule.
    visitExprRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#fnRule.
    visitFnRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#idfRule.
    visitIdfRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#useRule.
    visitUseRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#idRule.
    visitIdRule(ctx) {
        return ctx.children[0].getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#ppRule.
    visitPpRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#pcRule.
    visitPcRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#arrowRule.
    visitArrowRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#typeRule.
    visitTypeRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#commaRule.
    visitCommaRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#returnRule.
    visitReturnRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#letRule.
    visitLetRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#equalRule.
    visitEqualRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#ifRule.
    visitIfRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#elseRule.
    visitElseRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#forRule.
    visitForRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#inRule.
    visitInRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#doubleDotRule.
    visitDoubleDotRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#addOperatorRule.
    visitAddOperatorRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#comparisonOperatorRule.
    visitComparisonOperatorRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#stringRule.
    visitStringRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#charRule.
    visitCharRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#intRule.
    visitIntRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#floatRule.
    visitFloatRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#boolRule.
    visitBoolRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#dotRule.
    visitDotRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#lparenRule.
    visitLparenRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#rparenRule.
    visitRparenRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#lbraceRule.
    visitLbraceRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#rbraceRule.
    visitRbraceRule(ctx) {
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#pRule.
    visitPRule(ctx) {
        return this.visitChildren(ctx);
    }

    checkVariable(var_name) {
        if (this.variables.has(var_name)) {
            this.warnings.push(`Variable ${var_name} declared more than once`);
        }
        return true;
    }
}
/* eslint-disable no-unused-vars */
import MiuLanguage_sinVisitor from '../analizar_sintactico/MiuLanguage_sinVisitor.js'; // Import the missing class
class MiuVisitor extends MiuLanguage_sinVisitor {

    visitProgram(ctx) {
        return ctx.children
            .filter(child => child.getText() !== '<EOF>')
            .map(child => this.visit(child))
            .join('');
    }

    visitFunctionDeclaration(ctx) {
        let function_name = this.visit(ctx.children[1]);
        if (function_name == "Main") {
            return `${this.visitChildren(ctx).join(' ')}\nMain();\n`;
        } else {
            return this.visitChildren(ctx).join(' ');
        }
    }

    visitModuleDeclaration(ctx) {
        let children = ctx.children.map(child => this.visit(child));
        let dir_name = children.slice(1, -2).join('');
        dir_name = dir_name.slice(0, -1);
        let package_name = children[children.length - 2] || '';
        if (package_name == 'fmt') {
            return ""
        } else {
            return `${this.visit(ctx.children[0])} ${package_name} from "${dir_name}";\n`;
        }

    }


    // Visit a parse tree produced by MiuLanguage_sinParser#checkreturnFunctionRule.
    visitCheckreturnFunctionRule(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#paramList.
    visitParamList(ctx) {
        return this.visitChildren(ctx).join('');
    }

    // Visit a parse tree produced by MiuLanguage_sinParser#invalidRule.
    visitInvalidRule(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#param.
    visitParam(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#bodyRule.
    visitBodyRule(ctx) {
        return this.visitChildren(ctx).join('') + "\n";
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#bodyRRule.
    visitBodyRRule(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#statementRRule.
    visitStatementRRule(ctx) {
        return "\t" + this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#functionCall.
    visitFunctionCall(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#functionCallVar.
    visitFunctionCallVar(ctx) {
        let var_name = this.visit(ctx.children[0]);
        if (var_name == "fmt") {
            return `console.log(${this.visit(ctx.children[4])});\n`
        } else {
            return this.visitChildren(ctx).join('');
        }
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#argList.
    visitArgList(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#statement.
    visitStatement(ctx) {
        return "\t" + this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#assignment.
    visitAssignment(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#controlStructure.
    visitControlStructure(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#ifStatement.
    visitIfStatement(ctx) {
        let if_part = ctx.children.slice(0, 3);
        let rest = ctx.children.slice(3);
        let if_structure = "";
        if_structure += this.visit(if_part[0]);
        let compare = `(${this.visit(if_part[1])})`;
        let lbrace = this.visit(if_part[2].children[0]);
        let body = this.visit(if_part[2].children[1]);
        let rbrace = "\t" + this.visit(if_part[2].children[2]);
        if_structure += ` ${compare} ${lbrace} \t${body} ${rbrace} `;
        for (let i = 0; i < rest.length; i++) {
            if_structure += this.visit(rest[i]);
        }
        return if_structure;
    }

    // Visit a parse tree produced by MiuLanguage_sinParser#elseStatement.
    visitElseStatement(ctx) {
        console.log(ctx.children);
        let else_structure = "";
        else_structure += this.visit(ctx.children[0]);
        let lbrace = this.visit(ctx.children[1].children[0]);
        let body = this.visit(ctx.children[1].children[1]);
        let rbrace = this.visit(ctx.children[1].children[2]);
        else_structure += ` ${lbrace} \t${body} \t${rbrace}\n`;
        return else_structure;
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#elseIfStatement.
    visitElseIfStatement(ctx) {
        let else_if_structure = "";
        else_if_structure += this.visit(ctx.children[0]) + " " + this.visit(ctx.children[1]);
        let compare = `(${this.visit(ctx.children[2])})`;
        let lbrace = this.visit(ctx.children[3].children[0]);
        let body = this.visit(ctx.children[3].children[1]);
        let rbrace = this.visit(ctx.children[3].children[2]);
        else_if_structure += ` ${compare} ${lbrace} \t${body} \t${rbrace} `;

        return else_if_structure;
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#forStatement.
    visitForStatement(ctx) {
        console.log(ctx.children);
        let for_structure = ''
        for_structure += this.visit(ctx.children[0]);

        let variable = this.visit(ctx.children[1]);
        let initial_value = this.visit(ctx.children[3]);
        let range = this.visit(ctx.children[5]);
        let lbrace = this.visit(ctx.children[6].children[0]);
        let body = this.visit(ctx.children[6].children[1])
        let rbrace = this.visit(ctx.children[6].children[2]);

        for_structure += ` (let ${variable} = ${initial_value} ; ${variable} <= ${range}; ${variable}++) ${lbrace} \t${body} \t${rbrace}\n`;
        return for_structure;
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#comparisonExprADDRule.
    visitComparisonExprADDRule(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#comparisonExprRule.
    visitComparisonExprRule(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#exprReturnRule.
    visitExprReturnRule(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#exprRule.
    visitExprRule(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#fnRule.
    visitFnRule(ctx) {
        return "function";
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#idfRule.
    visitIdfRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#useRule.
    visitUseRule(ctx) {
        return "import";
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#idRule.
    visitIdRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#ppRule.
    visitPpRule(ctx) {
        return "/";
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#pcRule.
    visitPcRule(ctx) {
        return ";\n";
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#arrowRule.
    visitArrowRule(ctx) {
        return "";
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#typeRule.
    visitTypeRule(ctx) {
        return "";
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#commaRule.
    visitCommaRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#returnRule.
    visitReturnRule(ctx) {
        return ctx.getText() + " ";
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#letRule.
    visitLetRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#equalRule.
    visitEqualRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#ifRule.
    visitIfRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#elseRule.
    visitElseRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#forRule.
    visitForRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#inRule.
    visitInRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#doubleDotRule.
    visitDoubleDotRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#addOperatorRule.
    visitAddOperatorRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#comparisonOperatorRule.
    visitComparisonOperatorRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#stringRule.
    visitStringRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#charRule.
    visitCharRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#intRule.
    visitIntRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#floatRule.
    visitFloatRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#boolRule.
    visitBoolRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#dotRule.
    visitDotRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#lparenRule.
    visitLparenRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#rparenRule.
    visitRparenRule(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#lbraceRule.
    visitLbraceRule(ctx) {
        return ctx.getText() + "\n";
    }


    // Visit a parse tree produced by MiuLanguage_sinParser#rbraceRule.
    visitRbraceRule(ctx) {
        return ctx.getText();
    }

    visitPRule(ctx) {
        return "";
    }
}

export default MiuVisitor;

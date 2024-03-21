import MiuLanguage_sinVisitor from '../analizar_sintactico/MiuLanguage_sinVisitor.js'; // Import the missing class

class MiuVisitor extends MiuLanguage_sinVisitor  {

    visitProgram(ctx) {
        let result = '';
        console.log('Visiting program');
        for (let child of ctx.children) {
            result += this.visit(child);
        }
        return result;
    }

    visitFunctionDeclaration(ctx) {
        const functionName = ctx.IDF().getText();
        const parameters = ctx.paramList() ? this.visit(ctx.paramList()) : '';
        const returnType = this.visit(ctx.checkreturnFunction());
        console.log('condition', ctx);
        const body = this.visit(ctx.body());
        return `function ${functionName}(${parameters})${returnType ? `: ${returnType}` : ''} {\n${body}\n}\n`;
    }

    visitModuleDeclaration(ctx) {
        const moduleName = ctx.ID().map(id => id.getText()).join('.');
        return `import ${moduleName};\n`;
    }

    visitParamList(ctx) {
        return ctx.param().map(param => this.visit(param)).join(', ');
    }

    visitParam(ctx) {
        const paramName = ctx.ID().getText();
        const paramType = ctx.TYPE().getText();
        return `${paramName}: ${paramType}`;
    }

    visitBody(ctx) {
        let result = '';
        for (let child of ctx.children) {
            result += this.visit(child);
        }
        return result;
    }

    visitBodyR(ctx) {
        let result = '';
        for (let child of ctx.children) {
            result += this.visit(child);
        }
        return result;
    }

    visitStatementR(ctx) {
        return `return ${this.visit(ctx.exprReturn())};\n`;
    }

    visitAssignment(ctx) {
        const variableName = ctx.ID().getText();
        const value = this.visit(ctx.expr());
        return `let ${variableName} = ${value};\n`;
    }

    visitIfStatement(ctx) {
        const condition = this.visit(ctx.comparisonExprADD());
        console.log('condition', ctx.body);
        const thenBranch = this.visit(ctx.body(0));
        const elseIfBranches = ctx.elseIfStatement().map(elseIf => this.visit(elseIf)).join('\n');
        const elseBranch = ctx.ELSE() ? this.visit(ctx.body(1)) : '';
        return `if (${condition}) {\n${thenBranch}\n} ${elseIfBranches}${elseBranch ? `else {\n${elseBranch}\n}` : ''}\n`;
    }

    visitElseIfStatement(ctx) {
        const condition = this.visit(ctx.comparisonExprADD());
        const body = this.visit(ctx.body());
        return `else if (${condition}) {\n${body}\n}`;
    }

    visitForStatement(ctx) {
        const variable = ctx.ID().getText();
        const start = ctx.INT(0).getText();
        const end = ctx.INT(1).getText();
        const body = this.visit(ctx.body());
        return `for (let ${variable} = ${start}; ${variable} < ${end}; ${variable}++) {\n${body}\n}\n`;
    }

    visitComparisonExprADD(ctx) {
        let result = this.visit(ctx.expr(0));
        for (let i = 1; i < ctx.expr().length; i++) {
            result += ctx.ADD_OPERATOR(i - 1).getText() + this.visit(ctx.expr(i));
        }
        return result;
    }

    visitComparisonExpr(ctx) {
        return `${this.visit(ctx.expr(0))} ${ctx.COMPARISON_OPERATOR().getText()} ${this.visit(ctx.expr(1))}`;
    }

    visitExprReturn(ctx) {
        return this.visit(ctx.expr());
    }

    visitExpr(ctx) {
        return ctx.getText();
    }
}

export default MiuVisitor;

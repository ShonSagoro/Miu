grammar MiuLanguage;

program : (moduleDeclaration | functionDeclaration)*;

//lexer rules
COMPARISON_OPERATOR: EQ | NEQ | GT | LT | GTEQ | LTEQ;
ADD_OPERATOR: AND | OR;
fragment EQ : '==';
fragment AND : '&&';
fragment OR : '||';
fragment NEQ : '!=';
fragment GT : '>';
fragment LT : '<';
fragment GTEQ : '>=';
fragment LTEQ : '<=';
TYPE : 'int' | 'float' | 'bool' | 'string' | 'char' ;
BOOL : 'true' | 'false' ;
STRING : '"' (~["])* '"' ;
CHAR : '\'' ~'\'' '\'' ;
FLOAT : [0-9]+ '.' [0-9]+ ;
INT : [0-9]+ ;
IDF : [A-Z] IDN* ;
ID: [a-zA-Z] IDN* ;
fragment IDN: [a-zA-Z0-9];
WS : [ \t\r\n]+ -> skip ;

// Parser rules
functionDeclaration : 'fn' IDF '(' paramList? ')' checkreturnFunction ;
moduleDeclaration : 'use' ID ('::' ID)* ';';
checkreturnFunction : '->' TYPE bodyR | body ;

paramList : param (',' param)* ;
param : ID ':' TYPE ;

body : '{' (statement)* '}' ;
bodyR: '{' (statement)* statementR '}' ;

statementR : 'return' exprReturn ';' ;

functionCall : IDF '(' argList? ')' ';';
functionCallVar: ID '.' IDF '(' argList? ')' ';';
argList : (ID | STRING | CHAR | INT | FLOAT | BOOL) (',' (ID | STRING | CHAR | INT | FLOAT | BOOL))* ;

statement : assignment | functionCall | functionCallVar | controlStructure ;

assignment : 'let' ID '=' expr ';';
controlStructure : ifStatement | forStatement ;

ifStatement : 'if' comparisonExprADD body (elseIfStatement)* ('else' body)? ;
elseIfStatement : 'else' 'if' comparisonExprADD body ;

forStatement : 'for' ID 'in' INT '..' INT body ;

comparisonExprADD : comparisonExpr (ADD_OPERATOR comparisonExpr)* ;
comparisonExpr : expr COMPARISON_OPERATOR expr ;
exprReturn: expr | comparisonExprADD;
expr : ID | STRING | CHAR | INT | FLOAT | BOOL ;
 
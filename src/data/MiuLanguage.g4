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
EQUAL : '=';
FN:'fn';
USE:'use';
LET:'let';
IN:'in';
IF:'if';
ELSE:'else';
FOR:'for';
RETURN:'return';
ARROW:'->';
DOT:'.';
DOUBLE_DOT:'..';
COMMA: ',';
PC: ';';
PP: '::';
P: ':';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
TYPE : 'int' | 'float' | 'bool' | 'string' | 'char' ;
BOOL : 'true' | 'false' ;

STRING : '"' (~["])* '"' ;
CHAR : '\'' ~'\'' '\'' ;
FLOAT : [0-9]+ DOT [0-9]+ ;
INT : [0-9]+ ;
IDF : [A-Z] IDN* ;
ID: [a-zA-Z] IDN* ;
fragment IDN: [a-zA-Z0-9];
WS : [ \t\r\n]+ -> skip ;

// Parser rules
functionDeclaration : FN IDF LPAREN paramList? RPAREN checkreturnFunction ;
moduleDeclaration : USE ID (PP ID)* PC;
checkreturnFunction : RETURN TYPE bodyR | body ;

paramList : param (COMMA param)* ;
param : ID ':' TYPE ;

body : LBRACE (statement)* RBRACE ;
bodyR: LBRACE (statement)* statementR RBRACE ;

statementR : RETURN exprReturn PP ;

functionCall : IDF LPAREN argList? RPAREN PC;
functionCallVar: ID DOT IDF LPAREN argList? RPAREN PC;
argList : (ID | STRING | CHAR | INT | FLOAT | BOOL) (COMMA (ID | STRING | CHAR | INT | FLOAT | BOOL))* ;

statement : assignment | functionCall | functionCallVar | controlStructure ;

assignment : LET ID EQUAL expr PC;
controlStructure : ifStatement | forStatement ;

ifStatement : IF comparisonExprADD body (elseIfStatement)* (ELSE body)? ;
elseIfStatement : ELSE IF comparisonExprADD body ;

forStatement : FOR ID IN INT DOUBLE_DOT INT body ;

comparisonExprADD : comparisonExpr (ADD_OPERATOR comparisonExpr)* ;
comparisonExpr : expr COMPARISON_OPERATOR expr ;
exprReturn: expr | comparisonExprADD;
expr : ID | STRING | CHAR | INT | FLOAT | BOOL ;
 
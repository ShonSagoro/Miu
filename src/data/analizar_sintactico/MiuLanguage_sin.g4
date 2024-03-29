grammar MiuLanguage_sin;

program: (moduleDeclaration | functionDeclaration)* INVALID? EOF;

//lexer rules
COMPARISON_OPERATOR: EQ | NEQ | GT | LT | GTEQ | LTEQ;
ADD_OPERATOR: AND | OR;
fragment EQ: '==';
fragment AND: '&&';
fragment OR: '||';
fragment NEQ: '!=';
fragment GT: '>';
fragment LT: '<';
fragment GTEQ: '>=';
fragment LTEQ: '<=';
EQUAL: '=';
FN: 'fn';
USE: 'use';
LET: 'let';
IN: 'in';
IF: 'if';
ELSE: 'else';
FOR: 'for';
RETURN: 'return';
ARROW: '->';
DOT: '.';
DOUBLE_DOT: '..';
PP: '::';
COMMA: ',';
PC: ';';
P: ':';
MULT: '*';
DIV: '/';
SUM: '+';
SUB: '-';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
TYPE: 'int' | 'float' | 'bool' | 'string' | 'char';
BOOL: 'true' | 'false';

STRING: '"' (~["])* '"';
CHAR: '\'' ~'\'' '\'';
FLOAT: [0-9]+ DOT [0-9]+;
INT: [0-9]+;
IDF: [A-Z] IDN*;
ID: [a-zA-Z] IDN*;
fragment IDN: [a-zA-Z0-9];
WS: [ \t\r\n]+ -> skip;

// Parser rules
functionDeclaration:
	fnRule idfRule lparenRule paramList? rparenRule checkreturnFunctionRule;
moduleDeclaration: useRule idRule (ppRule idRule)* pcRule;
checkreturnFunctionRule: (arrowRule typeRule bodyRRule)
	| bodyRule;

paramList: param (commaRule param)*;
INVALID: .;
invalidRule: INVALID;

param: idRule pRule typeRule;

bodyRule: lbraceRule (statement)* rbraceRule;
bodyRRule: lbraceRule (statement)* statementRRule rbraceRule;

statementRRule: returnRule exprReturnRule pcRule;

functionCall: idfRule lparenRule argList? rparenRule pcRule;
varStatement: idRule (functionCallVar | assignametnVar)*;
functionCallVar:
	dotRule idfRule lparenRule argList? rparenRule pcRule;

argList: (
		varStatement
		| stringRule
		| charRule
		| intRule
		| floatRule
		| boolRule
	) (
		commaRule (
			varStatement
			| stringRule
			| charRule
			| intRule
			| floatRule
			| boolRule
		)
	)*;

statement:
	assignment
	| functionCall
	| varStatement
	| controlStructure;

assignametnVar: equalRule exprRule pcRule;
assignment: letRule idRule equalRule exprRule pcRule;
controlStructure: ifStatement | forStatement;

ifStatement:
	ifRule comparisonExprADDRule bodyRule (elseIfStatement)* (
		elseStatement
	)?;
elseStatement: elseRule bodyRule;
elseIfStatement: elseRule ifRule comparisonExprADDRule bodyRule;

forStatement:
	forRule idRule inRule intRule doubleDotRule intRule bodyRule;

comparisonExprADDRule:
	comparisonExprRule (addOperatorRule comparisonExprRule)*;
comparisonExprRule: exprRule comparisonOperatorRule exprRule;
exprReturnRule: exprRule | comparisonExprADDRule;

exprRule:
	exprFunctionCallRule
	| exprVarStatementRule
	| arithmeticExprRule
	| stringRule
	| charRule
	| intRule
	| floatRule
	| boolRule;

exprFunctionCallRule: idfRule lparenRule argList? rparenRule;
exprVarStatementRule: idRule (exprFunctionCallVar)*;
exprFunctionCallVar:
	dotRule idfRule lparenRule argList? rparenRule;

arithmeticExprRule: term (addOperatorRule term)*;

term:
	exprVarStatementRule (mulOperatorRule exprVarStatementRule)*;

mulOperatorRule: | multRule | divRule | subRule | sumRule;

// Terminal rules transformed to parser rules
multRule: MULT;
divRule: DIV;
sumRule: SUM;
subRule: SUB;
fnRule: FN;
idfRule: IDF;
useRule: USE;
idRule: ID;
ppRule: PP;
pcRule: PC;
arrowRule: ARROW;
typeRule: TYPE;
commaRule: COMMA;
returnRule: RETURN;
letRule: LET;
equalRule: EQUAL;
ifRule: IF;
elseRule: ELSE;
forRule: FOR;
inRule: IN;
doubleDotRule: DOUBLE_DOT;
addOperatorRule: ADD_OPERATOR;
comparisonOperatorRule: COMPARISON_OPERATOR;
stringRule: STRING;
charRule: CHAR;
intRule: INT;
floatRule: FLOAT;
boolRule: BOOL;
dotRule: DOT;
lparenRule: LPAREN;
rparenRule: RPAREN;
lbraceRule: LBRACE;
rbraceRule: RBRACE;
pRule: P;
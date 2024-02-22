grammar MiuLanguage_lex;

program : (COMPARISON_OPERATOR | ADD_OPERATOR | EQUAL | FN | USE | LET | IN | IF | ELSE | FOR | RETURN | ARROW | DOT | DOUBLE_DOT | PP | COMMA | PC | P | LPAREN | RPAREN | LBRACE | RBRACE | TYPE | BOOL | STRING | CHAR | FLOAT | INT | IDF | ID)* EOF ;

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
PP: '::';
COMMA: ',';
PC: ';';
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
grammar MiuLanguage;

program: (dFunc | modularCall)*;

//module

modularCall: 'use' ID anotherDirectory* ';';

anotherDirectory: '::' ID;

//fn

dFunc: 'fn' ID '(' Param? ')' '{' statement* '}';

Param: ID ':' TYPES (',' ID ':' TYPES)*;

//BODY
statement: (varFunc | var | func | for);

varFunc: ID '.' ID '(' param2? ')' ';';

func: ID '(' param2? ')' ';';

param2: vParam (',' vParam)*;

vParam: (VSTR | VINT | VFLO | ID);

// for

for: 'for' ID 'in' VINT '..' range '{' statement* '}';

range: (func | varFunc | VINT);

//define variable

var: 'let' ID (VarT | VarD) ';';
VarD: '=' VALUES;
VarT:
	':' (
		TINT '=' VINT
		| TFLO '=' VFLO
		| TCHA '=' VCHA
		| TSTR '=' VSTR
	);

//TOKENS
ID: [a-zA-Z] REST_ID*;
REST_ID: [a-zA-Z0-9];
TYPES: (TINT | TFLO | TCHA | TSTR);
TINT: 'int';
TFLO: 'float';
TCHA: 'char';
TSTR: 'string';
VALUES: (VSTR | VINT | VFLO | VCHA);
VSTR: '"' ('\\"' | .)*? '"';
VCHA: '\'' ('\\\'' | .)*? '\'';
VINT: [0-9]+;
VFLO: VINT '.' VINT;

WS: [ \t\r\n]+ -> skip;
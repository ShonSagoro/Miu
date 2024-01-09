grammar MiuLanguage;

program: (dFunc | modularCall)*;

//module

modularCall: 'use' ID anotherDirectory* ';';

anotherDirectory: '::' ID;

//fn

dFunc: 'fn' ID '(' Param? ')' '{' statement* '}';

Param: ID VarT (',' ID VarT)*;

//BODY
statement: (varFunc | var | func | for);

varFunc: ID '.' ID '(' param2? ')' ';';

func: ID '(' param2? ')' ';';

param2: vParam (',' vParam)*;

vParam: (VSTR | VINT | VFLO | VCHA | ID);

// for

for: 'for' ID 'in' VINT '..' range '{' statement* '}';

range: (func | varFunc | VINT);

//define variable

var: 'let' Var ';';
Var:  ID WS? VarT?  WS? VarD;
VarD: '=' WS? VALUES;
VarT: ':' WS? TYPES;

//TOKENS
VSTR: '"' ('\\"' | .)*? '"';
ID: [a-zA-Z] REST_ID*;
REST_ID: [a-zA-Z0-9_];
TYPES: (TINT | TFLO | TCHA | TSTR);
TINT: 'int';
TFLO: 'float';
TCHA: 'char';
TSTR: 'string';
VALUES: (VSTR | VINT | VFLO | VCHA);
VCHA: '\'' ('\\\'' | .)*? '\'';
VINT: [0-9]+;
VFLO: VINT '.' VINT;

WS: [ \t\r\n]+ -> skip;
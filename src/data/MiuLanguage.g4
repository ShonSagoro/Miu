grammar MiuLanguage;

program: (function | modularCall)*;

modularCall: 'use' Var+ ('::' Var+)* ';';

function: 'fn' Fname '(' paramRe? ')' '{' statement* '}';

varFunctionStatement: Var+ '.' Fname '(' param2? ')' ';';

paramRe: param (',' param)*;

param: Var+ ':' Vtype;

param2: (paramSend | String | char);

paramSend: Var+ (',' Var+)*;

statement: varFunctionStatement;

Var: [a-zA-Z0-9];

Fname: [A-Z] Var*;

String: '"' ('\\"' | ~'"')* '"'
     | '\'' ('\\\'' | ~'\'')* '\'';

char: '\'' ('\\\'' | ~'\'') '\'';

Vtype: ('int' | 'float' | 'char' | 'string');

WS: [ \t\r\n]+ -> skip;

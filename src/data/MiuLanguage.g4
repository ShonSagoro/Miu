grammar MiuLanguage;

program: (dFunc | modularCall)*;

//module

modularCall: 'use' L anotherDirectory* ';';

anotherDirectory: '::' L;

//fn

dFunc: 'fn' L '(' param? ')' dDFunc ;

dDFunc: (wRFunc | wORFunc) ;

wRFunc: '->' types '{' statementR* '}';
types: TYPES;
wORFunc: '{' statement* '}';

param: L VarT (',' L VarT)*;


//BODY
statement: (varFunc | var | func | for |varA );

varFunc: L '.' L '(' param2? ')' ';';

func: L '(' param2? ')' ';';

param2: vParam (',' vParam)*;

vParam: (VSTR | VINT+ | VFLO | VCHA | L);


//BODY R
statementR: statement* returnStatement;

returnStatement: 'return' returnData ';';
returnData: (condition | ANY+);


// for
range: VINT+;

for: 'for' L 'in' range '..' range '{' statement* '}';


//define variable

var: 'let' varG ';';
varG:  L VarT? VarD;
VarD: '=' WS? VALUES;
VarT: ':' WS? TYPES;

//variable assignature data

varA: L '=' VALUES ';';

//if statament


//conditions

conditions: condition addConditions? ;
condition: (VALUES | L) SIG (VALUES | L);
addConditions: ADDSIG SIG (VALUES | L);



//TOKENS
VINT: [0-9];
TYPES: (TINT | TFLO | TCHA | TSTR);
L: [a-zA-Z] R*;
VSTR: '"' ('\\"' | .)*? '"';
TINT: 'int';
TFLO: 'float';
TCHA: 'char';
TSTR: 'string';
VALUES: (VSTR | VINT | VFLO | VCHA);
VFLO: VINT+ '.' VINT+;
VCHA: '\'' ('\\\'' | .)*? '\'';
R: [a-zA-Z]|VINT;
SIG:('=='|'>='|'<='|'!='|'>'|'<');
ADDSIG:('&&' | '||');
WS: [ \t\r\n]+ -> skip;
ANY: .;
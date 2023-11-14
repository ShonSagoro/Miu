import checkGrammar from '../src/utils/MiuCodeCheck'; 

describe('checkGrammar', () => {

  it('should return true for code write', async () => {
    expect(await checkGrammar('fn Main() {\n\tfmt.Print("Hola, mundo!");\n}')).toBe("Codigo bien escrito...");
  });
  it('should return true for code write', async () => {
    expect(await checkGrammar('fn Suma(x:int) {\n\tx=10;\n}')).toBe("Codigo bien escrito...");
  });
  it('should return true for code write', async () => {
    expect(await checkGrammar('fn ExampleCallFunction() {\n\tfmt.Print("Hola, mundo!");\n}')).toBe("Codigo bien escrito...");
  });
  it('should return true for code write',async () => {
    expect(await checkGrammar('use std::fmt;\n\nfn Module() {\n\tfmt.Print("Hola, mundo!");\n}')).toBe("Codigo bien escrito...");
  });
});

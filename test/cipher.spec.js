//Voy linea por linea, en los parámetros 
describe('cipher', () => {

//Esto es lo que yo quiero que devuelva, lo que espero que haga mi objeto
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {
// 
  it('debería ser una función', () => {
    assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33');
  });

  describe('cipher.decode', () => {

  it('debería ser una función', () => {
    assert.equal(typeof cipher.decode, 'function');
  });

  it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33');
  });

});

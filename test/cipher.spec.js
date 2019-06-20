describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() =>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG" );
   });
      
  describe('cipher.encode', () => {
    
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz'),'hijklmnopqrstuvwxyzabcdefg');
    });
  });  
  describe('cipher.encode', () => {  
       
    it('debería retornar " !@" para " !@"con offset 33', () => {
      assert.equal(cipher.encode(33, ' !@'), ' !@');
     });
  });
  });
 
  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() =>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
   });
    
  describe('cipher.decode', () => {
    
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.decode(33, 'abcdefghijklmnopqrstuvwxyz'),'hijklmnopqrstuvwxyzabcdefg');
    });
  });  

  describe('cipher.decode', () => {  
       
    it('debería retornar " !@" para " !@"con offset 33', () => {
      assert.equal(cipher.decode(33, ' !@'), ' !@');
     });
    
  });

  });
}); 
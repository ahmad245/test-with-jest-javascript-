const lib = require("../lib");
const db=require('../db');
const mail=require('../mail');

describe('absoulte ',()=>{
    test(" should return a positive number if input positive ", () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
      });
      
      test(" should return a positive number if input negative ", () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
      });
      
      test(" should return a 0 number if input 0 ", () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
      });
      
})

describe('string',()=>{
    test('should return the greeting message',()=>{
        const result=lib.greet('ahmad');
        expect(result).toContain('ahmad');
    })
})
describe('array',()=>{
    test('should return supported currency',()=>{
      const result=lib.getCurrencies();

      //['USD', 'AUD', 'EUR']

      //too general
      expect(result).toBeDefined();
      expect(result).not.toBeNull();

      //too specific
      expect(result[0]).toBe('USD');
      expect(result[1]).toBe('AUD');
      expect(result[2]).toBe('EUR');
      expect(result.length).toBe(3);
      expect(result).toEqual(['USD', 'AUD', 'EUR']);

      //proper way
      expect(result).toContain('USD');
      expect(result).toContain('AUD');
      expect(result).toContain('EUR');

      //ideal way
      expect(result).toEqual(expect.arrayContaining(['AUD','USD','EUR']));

      // no work (array is object)
     // expect(result).toBe(['USD', 'AUD', 'EUR']);
      
    })
})

describe('object',()=>{
    test('should return product with given id',()=>{
        const result =lib.getProduct(1);

        //not work
        //expect(result).toBe({id:1,price:10});

        //too specific
        expect(result).toEqual({id:1,price:10});

        //if object have more property 
        expect(result).toMatchObject({id:1,price:10});

        expect(result).toHaveProperty('id',1);
    })
})

describe('throw error',()=>{
    test('should throw if username is falsy',()=>{
        // falsy in js [null,undefined,'',0,false,NAN]
        const args=[null,undefined,'',0,false,NaN];
        args.forEach((arg)=>{
            expect(()=>lib.registerUser(arg)).toThrow();
        })
    })
    test('should return a user object if valid username is passed',()=>{
        // falsy in js [null,undefined,'',0,false,NAN]
       const result=lib.registerUser('ahmad');
       expect(result).toMatchObject({username:'ahmad'});
       expect(result.id).toBeGreaterThan(1);
    })
})
describe('mock notifyCustomer',()=>{
    test('should send un email to client',()=>{
      db.getCustomerSync=jest.fn().mockReturnValue({email:'a'});
      mail.send=jest.fn();

      const result =lib.notifyCustomer({customerId:1});

      expect(mail.send).toHaveBeenCalled();
      expect(mail.send.mock.calls[0][0]).toBe('a');
      expect(mail.send.mock.calls[0][1]).toContain('order');



    })
})

const assert=require('assert');
// import {isEmpty} from '../src/Utils/index.js';

const Utility=require('../src/Utils/index.js');

describe('Utility',function(){

   it('Array',function(){
   	  assert.equal(Utility.isEmpty('abc'),true);
   })
})
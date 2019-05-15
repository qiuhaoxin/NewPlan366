
 const parsePostData=(ctx)=>{

    return new Promise((resolve,reject)=>{
    	try{
           let postData="";
           ctx.req.addListener('data',(data)=>{
           	  postData+=data;
           })
           ctx.req.addListener('end',function(){
           	  resolve(JSON.parse(postData));
           })
    	}catch(ex){
           reject(err);
    	}
    })
}

 const isEmpty=(str)=>{
    const emptyReg=/^\s*$/;
    const result=emptyReg.test(str);
    console.log(`result is `,result);
    return result;
    //return emptyReg.test(str);
}

// export {
//   parsePostData,
//   isEmpty,
// }
// 
module.exports={
  isEmpty,
  parsePostData,
}
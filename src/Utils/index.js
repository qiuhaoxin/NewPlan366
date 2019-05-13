
export const parsePostData=(ctx)=>{

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

export const isEmpty=()=>{
  
}
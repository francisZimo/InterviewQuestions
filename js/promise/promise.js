class Promise{
    constructor(executor){
        console.log('executor',executor)
        const resolve=(value)=>{
            this.value=value
        }
        const reject=(reason)=>{
            this.reason=reason
        }
        try{
            executor(resolve,reject)
        }catch(e){
            reject(e)
        }
       
    }
}


module.exports=Promise
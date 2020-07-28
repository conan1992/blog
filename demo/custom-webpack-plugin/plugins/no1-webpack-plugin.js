class No1WebpackPlugin{
    constructor(options){
        this.options = options
    }
    apply(compiler){
        compiler.hooks.emit.tapAsync("myPlugin",(A,B)=>{
            console.log(this.options.msg, B)
            B()
        })
    }
}
module.exports = No1WebpackPlugin;
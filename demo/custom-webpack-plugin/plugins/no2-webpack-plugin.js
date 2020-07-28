class No2WebpackPlugin {
    constructor(options){
        this.options = options;
    }
    apply(compiler){
        compiler.hooks.compile.tap("no2", ()=>{
            console.log("compile")
        });
        compiler.hooks.compilation.tap("no2", (compilation)=>{
            console.log("compilation");
            compilation.hooks.chunkAsset.tap("no2", (chunk, filename)=>{
                console.log(filename)
            })
        })
    }
}
module.exports = No2WebpackPlugin
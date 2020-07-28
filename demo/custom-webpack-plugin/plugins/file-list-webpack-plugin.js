const { option } = require("yargs");

class FileListWebpackPlugin{
    constructor(options){
        this.options = options || {};
        this.filename = this.options.filename || "fileList.md"
    }
    apply(compiler){
        // compiler.hooks.emit.tapAsync("FileListWebpackPlugin",(compilation, callback)=>{
        //     const FileName = this.filename;
        //     let len = Object.keys(compilation.assets).length;
        //     let content = Object.keys(compilation.assets).reduce((acc, filename)=>{
        //         return acc + `- ${filename}\n`
        //     }, `# 一共有${len}个文件\n\n`);

        //     compilation.assets[FileName] = {
        //         source: function(){
        //             return content;
        //         },
        //         size: function(){
        //             return content.length
        //         }
        //     };
        //     callback();
        // })
        compiler.hooks.emit.tapPromise("FileListWebpackPlugin",compilation=>{
            return new Promise(resolve=>{
                setTimeout(function(){
                    console.log("timeout 1s")
                    resolve();
                }, 1000)
            }).then(()=>{
                const FileName = this.filename;
                let len = Object.keys(compilation.assets).length;
                let content = Object.keys(compilation.assets).reduce((acc, filename)=>{
                    return acc + `- ${filename}\n`
                }, `# 一共有${len}个文件\n\n`);

                compilation.assets[FileName] = {
                    source: function(){
                        return content;
                    },
                    size: function(){
                        return content.length
                    }
                };
            })
        })
    }
}
module.exports = FileListWebpackPlugin;
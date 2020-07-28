class WatchWebpackPlugin {
    constructor(options){
        this.options = options;
    }
    apply(compiler){
        compiler.hooks.watchRun.tapAsync("WatchWebpackPlugin", (compiler, callback)=>{
            console.log("watching...");
            let mtimes = compiler.watchFileSystem.watcher.mtimes;
            let mtimesKeys = Object.keys(mtimes);
            if (mtimesKeys.length > 0) {
            console.log(`本次一共改动了${mtimesKeys.length}个文件,目录为:`)
            console.log(mtimesKeys)
            console.log('------------分割线-------------')
            }
            callback();
        });
        compiler.hooks.watchClose.tap("WatchWebpackPlugin", (compiler, callback)=>{
            console.log("watchend...")
        });
    }
}
module.exports = WatchWebpackPlugin
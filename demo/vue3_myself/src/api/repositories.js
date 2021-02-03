export let fetchUserRepositories = function(data){
    console.log(data)
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve([{
                name: data + "的仓库1",
                id: 1
            }])
        }, 200)
    })
}
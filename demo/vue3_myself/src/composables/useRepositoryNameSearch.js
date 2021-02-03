import {ref, computed } from "vue"
export function useRepositoryNameSearch(repositories){
    let searchQuery = ref("")
    let repositoriesMatchingSearchQuery  = computed(()=>{
        console.log("repositories: ", repositories)
        return repositories.value.filter((item)=>{
            console.log(item.name ,item.name.includes(searchQuery.value))
            return item.name.includes(searchQuery.value)
        })
    })

    return {
        searchQuery,
        repositoriesMatchingSearchQuery
    }
}
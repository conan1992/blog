import {ref,onMounted, watch} from "vue"
import {fetchUserRepositories } from "../api/repositories.js"
export function useUserRepositories(user){
    let repositories = ref([])
    const getUserRepositories = async () => {
        repositories.value = await fetchUserRepositories(user.value)
    }
    onMounted(getUserRepositories);
    watch(user, getUserRepositories)
    return {
        repositories,
        getUserRepositories
    }
}
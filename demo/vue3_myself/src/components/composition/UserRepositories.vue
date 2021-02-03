<template>
    <input v-model="searchQuery">
    <ul>
        <li v-for="(item, index) in repositories" :key="index">{{item.name}}</li>
    </ul>
    <p>random: {{random}}</p>
    <div ref="root">This is a root element</div>
</template>
<script>
import { useUserRepositories } from "../../composables/useUserRepositories"
import { useRepositoryNameSearch } from "../../composables/useRepositoryNameSearch"
import { onMounted, toRefs, inject, ref } from "vue"
export default {
    props: {
        user: {
            type: String,
            required: true
        }
    },
    inject: ['random'],
    setup(props, context){
        console.log("context: ", context, this)
        const root = ref(null);
        const {user} = toRefs(props);
        const testInject = inject("test", 'haha');
        
        console.log(testInject)
        const {
                repositories,
                getUserRepositories
            } = useUserRepositories( user );
        const {
            searchQuery,
            repositoriesMatchingSearchQuery
        } = useRepositoryNameSearch(repositories);
        onMounted(() => {
            console.log("root: ",root.value)
        })
        return {
            repositories: repositoriesMatchingSearchQuery,
            searchQuery,
            getUserRepositories,
            root
        }
    },
    watch: {
        searchQuery(){
            console.log(this.searchQuery)
        }
    },
    mounted(){
        //alert(this.searchQuery)
    }
}
</script>
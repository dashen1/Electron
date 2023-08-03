import { ref, toValue, watchEffect } from 'vue'

export function useFetch(url){
    const data = ref(nul)
    const error = ref(nul)

    watchEffect(() => {
        data.value = null
        error.value = null

        fetch(toValue(url))
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .then((err) => (error.value = err))
    })
   
    return { data, error}
}
import { reactive, ref } from 'vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const show = ref()
let data = reactive({
  contents: []
})

onMounted(() => {
  data.contents = route.meta.contents
  console.log(route.meta.contents)
})
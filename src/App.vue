<script setup>
  import { computed, ref } from 'vue';
  
  const title = "aprendiendo vue js"
  let counter = ref(0);
  /* ref hace que una variable sea reactiva pero es ahora un objeto, y para ello cuando la llamemos tenemos que acceder al valor  */

  const increment=()=>{
    console.log("aumentar contador");
    counter.value++;
    console.log(counter);
  }
  const decrement=()=>{
    counter.value--;
  }
  const reset=()=>{
    counter.value=0;
  }
  const color = ["blue","red"];

  /* computed quiere decir que es una propiedad calculada, y la diferencia entre estas es que las propiedades calculadas a diferencia de los metodos se almacenan en cache, asi que se podria decir que solo se volvera a ejecutar cuando alguna propiedad reactiva hayase cambiado */
  const classCounter = computed(() => {
    if (counter.value == 0) {
      return 'zero';
    }
    if (counter.value > 0) {
      return 'positive';
    }
    if (counter.value < 0) {
      return 'negative';
    }
  });
  const favoritos= ref([]);
  const add= () => {
    favoritos.value.push(counter.value);
  }

  const bloquearBtnAdd = computed(()=>{
    const numSearch = favoritos.value.find((num) => num === counter.value)
/*     if (numSearch == 0) {
      return true
    }
    return numSearch ? true: false; */
    /* si hay un numero retorna true y solucionamos el problema del 0 */
    return numSearch || numSearch===0;
  })
</script>


<template>
  <div>
    <h1>HOlA</h1>
    <h2>{{ title }}</h2>
    <h2 :class="classCounter">{{ counter }}</h2>
    <button @click="increment">Aumentar</button>
    <button @click="decrement">Decrementar</button>
    <button @click="reset">Reset</button>
    <button :disabled="bloquearBtnAdd" @click="add">Add</button>
    <h2 :style="`color: ${color[0]}`">dando color dinamicamente</h2>
    <ul>
      <li
      v-for="(item, index) in favoritos" :key="index"
      >{{ index+1 }} ---- {{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.positive{
  color: green;
}
.negative{
  color:red
}
.zero{
  color:blue
}
</style>
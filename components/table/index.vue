<template>
  <div class="flex flex-col w-full text-sm">
    <div class="hidden md:flex border rounded-t p-2 bg-green-500 text-white">
      <span v-for="(item, index) in header" :key="index" :class="[item.class]">{{ item.title }} </span>
    </div>
    <div class="flex flex-col">
      <div v-for="(item, index) in data" :key="index" class="flex border odd:bg-gray-100 hover:bg-green-50 rounded mt-0.5 cursor-pointer p-2">
        <div v-for="(hItm, hInd) in header" :key="hInd"  :class="[hItm.class]">
          <span class="justify-center">{{ item[hItm.slug] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
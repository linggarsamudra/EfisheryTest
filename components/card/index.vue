<template>
  <div class="flex rounded bg-gradient-to-tr from-green-50 to-white shadow p-2">
    <div class="flex w-2/6 items-center mx-1">  
      <fa class="text-6xl text-gray-800" :icon="icon"  />
    </div>
    <div class="flex flex-col w-4/6 px-2 justify-center items-center">
      <div class="flex w-full justify-end">
        <span class="text-xl">{{ title }}</span>
      </div>
      <div class="flex w-full justify-end">
        <span class="">{{ description }}</span>
      </div>
      <div class="flex w-full justify-end">
        <span class="text-xs">{{ summary }}</span>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<template>
  <div class="flex border rounded-full p-0.5">
    <span :class="[
      `flex rounded-full w-5 h-5 cursor-pointer`,
      !state ? `bg-gray-200` : ``
    ]" @click="toggle(!state)"></span>
    <span :class="[
      `flex rounded-full w-5 h-5 cursor-pointer`,
      state ? `bg-green-200` : ``
    ]" @click="toggle(!state)"></span>
  </div>
</template>

<script src="./index.js"></script>
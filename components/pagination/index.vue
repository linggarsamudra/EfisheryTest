<template>
  <div class="flex flex-col md:flex-row w-full text-sm">
    <div class="flex justify-center md:justify-start items-center w-full md:w-1/2">
      Perpage Configuration
    </div>
    <div class="flex justify-center md:justify-end items-center w-full md:w-1/2 mt-2 md:mt-0">
      <span v-if="(currentPage - btnRange) > 1" class="flex w-8 h-8 justify-center items-center 
      rounded-full text-gray-800 cursor-pointer hover:bg-green-100 shadow mx-0.5">
        <fa class="" :icon="['fas', 'angle-double-left']" />
      </span>
      <span v-if="(currentPage - btnRange) > 1" class="flex w-8 h-8 justify-center items-center 
      rounded-full text-gray-800 cursor-pointer hover:bg-green-100 shadow mx-0.5">
        <fa class="" :icon="['fas', 'angle-left']" />
      </span>

      <span v-if="(currentPage - btnRange) > 1" class="hidden md:flex w-8 h-8 justify-center items-center text-gray-800 mx-0.5">
      ...
      </span>

      <div v-for="(key, index) in loopButton" :key="index">
        <span :class="[
          `flex w-8 h-8 justify-center items-center 
          rounded-full text-gray-800 shadow mx-0.5`,
          ((currentPage + btnRange) > lastPage ? lastPage - (loopButton - key) : (currentPage + btnRange) - (loopButton - key)) === currentPage ? `underline bg-green-100` : `cursor-pointer hover:bg-green-100`
        ]">
        {{ ((currentPage + btnRange) > lastPage ? lastPage - (loopButton - key) : (currentPage + btnRange) - (loopButton - key)) }}
        </span>
      </div>

      <span v-if="(currentPage + btnRange) < lastPage" class="hidden md:flex w-8 h-8 justify-center items-center text-gray-800 mx-0.5">
      ...
      </span>

      <span v-if="(currentPage + btnRange) < lastPage" class="flex w-8 h-8 justify-center items-center 
      rounded-full text-gray-800 cursor-pointer hover:bg-green-100 shadow mx-0.5">
        <fa class="" :icon="['fas', 'angle-right']" />
      </span>
      <span v-if="(currentPage + btnRange) < lastPage" class="flex w-8 h-8 justify-center items-center 
      rounded-full text-gray-800 cursor-pointer hover:bg-green-100 shadow mx-0.5">
        <fa class="" :icon="['fas', 'angle-double-right']" />
      </span>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<template>
  <div class="flex flex-col w-full bg-gray-50">
    <Header />
    <div class="flex flex-col mt-28 mb-20 mx-2 lg:mx-5">

      <!-- Section Title -->
      <div class="flex flex-col w-full px-2 mb-5">
        <span class="text-xl">Report</span>
        <span class="">Efishery Data</span>
      </div>
      <!-- End Section Title -->

      <!-- Section Summary -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 w-full px-2">
        <Card class="w-full my-1" />
        <Card class="w-full my-1" />
        <Card class="w-full my-1" />
        <Card class="w-full my-1" />
      </section>
      <!-- End Section Summary -->

      <!-- Section Table List -->
      <section class="flex flex-col px-2 mt-5">

        <!-- Table Filter -->
        <div class="flex flex-col w-full border rounded bg-white p-2">
          <div class="flex justify-between items-center cursor-pointer bg-gray-50 rounded px-4 py-2" @click="showFilter = !showFilter">
            <span class="">Filter</span>
            <fa class="text-sm" :icon="['fas', 'chevron-right']" />
          </div>
          <div :class="['flex-col mt-2', showFilter ? 'flex' : 'hidden']">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-2 w-full">
              <div class="flex flex-col">
                <span class="text-sm mb-1">Search</span>
                <input 
                  class="border px-4 py-2 focus:outline-none focus:border-green-500 border-green-300 rounded" 
                  type="text"
                >
              </div>
              <div class="flex flex-col">
                <span class="text-sm mb-1">Sort</span>
                <input 
                  class="border px-4 py-2 focus:outline-none focus:border-green-500 border-green-300 rounded" 
                  type="text"
                >
              </div>
              <div class="flex flex-col">
                <span class="text-sm mb-1">Size</span>
                <input 
                  class="border px-4 py-2 focus:outline-none focus:border-green-500 border-green-300 rounded" 
                  type="text"
                >
              </div>
              <div class="flex flex-col">
                <span class="text-sm mb-1">Area</span>
                <input 
                  class="border px-4 py-2 focus:outline-none focus:border-green-500 border-green-300 rounded" 
                  type="text"
                >
              </div>
            </div>
            <div class="flex justify-end mt-2">
              <button 
                class="mr-1 text-green-500 bg-white border-green-500 
                rounded border shadow px-4 py-1 hover:bg-green-500 hover:text-white"
              >
                Clear
              </button>
              <button 
                class="text-white bg-green-500 border-green-500 
                rounded border shadow px-4 py-1 hover:bg-white hover:text-green-500"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <!-- End Table Filter -->

        <!-- Table Data -->
        <div class="flex flex-col w-full bg-white border rounded mt-2 p-2">
          <Table :data="[]" />
          <!-- Table Pagination -->
          <div class="flex w-full justify-end mt-2 px-2">
            <Pagination :total-data="123" :per-page="10" :current-page="10" />
          </div>
          <!-- End Table Pagination -->
        </div>
        <!-- End Table Data -->

      </section>
      <!-- End Section Table List -->

    </div>
    <Footer class="fixed bottom-0" />
  </div>
</template>

<script src="./index.js"></script>
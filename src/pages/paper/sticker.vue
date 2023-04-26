<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div class="w-[210mm] h-min-[297mm] p-[5mm] my-1 mx-auto border-1 solid rounded bg-white drop-shadow">

      <div class="grid grid-cols-2">
        <div v-for="i in 2" class="border text-center">
          <div class="text-lg font-semibold pt-2">นันทิกาณต์ ศรีชัยมูล</div>
          <div class="text-sm text-blue-800">Nunthikan Srechaimoon</div>
          <div class="bg-yellow-200 text-sm h-7 flex justify-center content-center">กาญจนบุรี-เพชรบุรี</div>
          <div class="grid grid-cols-6 text-pink-400">
            <div class="col-span-5 border-r pb-2">
              <div class="font-semibold">NILPAKA TOUR</div>
              <div class="text-sm font-semibold">Jampahom999@hotmail.com | 098-1047644</div>
            </div>
            <div class="font-bold text-2xl flex justify-center items-center">
              {{ i }}
            </div>
          </div>
        </div>
      </div>

    </div> 
  </section>
  <!-- <div class="flex bg-gray-900"></div> -->
</template>
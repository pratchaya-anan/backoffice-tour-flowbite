<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div
      class="w-[210mm] h-min-[297mm] p-[5mm] my-1 mx-auto border-1 solid rounded bg-white drop-shadow"
    >
      <div class="flex flex-wrap">
        <div
          v-for="i in 10"
          class="border grid grid-flow-row items-center text-center w-[3.5in] h-[2.3in]"
        >
          <div class="text-2xl font-semibold">นันทิกาณต์ ศรีชัยมูล</div>
          <div class="text-sm text-blue-800">Nunthikan Srechaimoon</div>
          <div
            class="bg-yellow-200 text-sm flex justify-center items-center h-full"
          >
            กาญจนบุรี-เพชรบุรี <br />
            ระหว่างวันที่ 1 มกราคม - 15 มกราคม 2566
          </div>
          <div class="grid grid-cols-6 text-pink-400 text-center h-full">
            <div
              class="flex flex-col justify-center items-center col-span-5 h-full"
            >
              <div class="texl-base font-semibold">NILPAKA TOUR</div>
              <div class="text-sm font-semibold">
                Jampahom999@hotmail.com <br />
                098-1047644
              </div>
            </div>
            <div
              class="font-bold text-5xl flex justify-center items-center border-l-2 h-full"
            >
              {{ i }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="flex bg-gray-900"></div> -->
</template>

<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div id="page" class="w-[210mm] h-min-[297mm] p-[5mm] my-1 mx-auto border-1 solid rounded bg-white drop-shadow">
      <div class="flex flex-wrap justify-center">
        <div v-for="i in 99" >

          <div class="border grid grid-flow-row text-center w-[9.5cm] h-[5.7cm]">
            <div class="flex flex-col justify-center item-center">
              <div class="text-2xl font-semibold">นันทิกาณต์ ศรีชัยมูล</div>
              <div class="text-base text-blue-800">Nunthikan Srechaimoon</div>
            </div>
            <div class="bg-yellow-200 text-sm flex justify-center items-center h-8 -mb-10">
              กาญจนบุรี-เพชรบุรี ระหว่างวันที่ 1/01-15/01/2566
            </div>
            <div class="grid grid-cols-10 text-pink-400 text-center h-full">
              <div class="flex flex-col justify-center items-center col-span-7 h-full">
                <div class="texl-base font-semibold">SRIDARA TOUR</div>
                <div class="text-sm font-semibold">
                  Jampahom999@hotmail.com <br />
                  098-1047644
                </div>
              </div>
              <div class="col-span-3 flex justify-center items-center font-bold text-4xl border-l-2 h-full w-full">
                {{ i }}
              </div>
            </div>
          </div>
          <div v-if="i%10 == 0" id="pagebreak"> </div>
          
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="flex bg-gray-900"></div> -->
</template>

<style>
@media print {
  header {
    display: none;
  }

  footer {
    display: none;
  }

  #page {
    margin: 0;
    border: initial;
    border-radius: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
    print-color-adjust: exact;
  }

  #pagebreak {
    clear: both;
    page-break-after: always;
  }

  /* #page {padding: none; margin: none; border: none; box-shadow: none;} */
}
</style>

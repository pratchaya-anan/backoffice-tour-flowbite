<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div class="w-[210mm] h-min-[297mm] p-[5mm] my-1 mx-auto border-1 solid rounded bg-white drop-shadow">
      <div class="grid grid-rows-2 m-5">
        <img class="w-25" src="../../assets/images/ll-01.png" alt="Logo">
        <div class="grid grid-cols-3 text-sm">
          <div class="col-span-2">
            <div>ห้างหุ้นส่วนจำกัด นิลผกา</div>
            <div>49/175 ม.5 ต.หนองบัว อ.เมืองอุดรธานี จ.อุดรธานี 41000</div>
            <div>เลขประจำตัวผู้เสียภาษี: 413558001156 | โทร.098-1047644</div>
            <div class="text-blue-400">www.facebook.com/Jampahomtour</div>
          </div>

          <!-- ชื่อใบ/ข้อมูลใบ -->
          <div class="grid grid-cols-3">
            <div class="col-span-3 font-bold text-center text-base">ใบวางบิล/ใบแจ้งหนี้</div>
            <div class="col-span-3 text-center">Billing Note/Invoice</div>
            <div class="font-bold">เลขที่:</div>
            <div class="col-span-2 text-right">0841142174178</div>
            <div class="font-bold">วันที่:</div>
            <div class="col-span-2 text-right">24/03/2566</div>
          </div>
        </div>
      </div>
      <hr class="col-span-3 mx-5">

      <!-- ข้อมูลฝั่งซ้าย -->
      <div class="col-span-2 grid grid-cols-3 m-5  text-xs">
        <div class="col-span-2">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">ชื่อลูกค้า:</div>
            <div class="col-span-2 ">ศศิศ วิรัตน์จินดา</div>
            <div class="col-span-1 font-bold">ชื่อผู้ติดต่อ:</div>
            <div class="col-span-2 ">มะนาว หวานจังเลย</div>
            <div class="col-span-1 font-bold">ที่อยู่:</div>
            <div class="col-span-2 ">111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100</div>
            <div class="col-span-1 font-bold">ID TAX:</div>
            <div class="col-span-2 ">4585695214526</div>
            <div class="col-span-1 font-bold">FAX:</div>
            <div class="col-span-2 ">025684587</div>
            <div class="col-span-1 font-bold">โทร:</div>
            <div class="col-span-2 ">0254875858</div>
          </div>
        </div>

        <!-- ข้อมูลฝั่งขวา -->
        <div class="border-l px-5">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">รหัสลูกค้า:</div>
            <div class="col-span-2 text-right">C-58015259</div>
            <div class="col-span-1 font-bold">ผู้เสนอขาย:</div>
            <div class="col-span-2 text-right">สมชัย ใจเกินร้อย</div>
            <div class="col-span-1 font-bold">ฝ่าย:</div>
            <div class="col-span-2 text-right">การตลาด</div>
            <div class="col-span-2 font-bold">ยืนยันราคาวันที่:</div>
            <div class="col-span-1 text-right">31/03/2566</div>
          </div>
        </div>
      </div>

      <!-- ตาราง -->
      <div class="min-h-100 border-b-1 border-black">
        <table class="w-full text-center">
          <tr class="h-8 border-y-1 border-black text-center text-sm">
            <th class="text-center">ลำดับ</th>
            <th>รหัสสินค้า</th>
            <th>รายการสินค้า</th>
            <th>จำนวน</th>
            <th>ราคาต่อหน่วย</th>
            <th>ส่วนลด</th>
            <th>ภาษี</th>
            <th>จำนวนเงิน</th>
          </tr>
          <tr class="h-10 text-xs">
            <td>1</td>
            <td>Q-4636653086</td>
            <td>เที่ยวเกาะ เลาะรัก</td>
            <td>10</td>
            <td>5600</td>
            <td>0</td>
            <td>7%</td>
            <td>59920</td>
          </tr>
        </table>
      </div>

      <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
      <div class="grid grid-cols-3 text-xs p-2 border-b-1 border-black">
        <div class="col-span-2">
          <div class="font-bold">หมายเหตุ:</div>
          1.สินค้าตามรายการข้างต้นแม้จะได้รับมอบแก่ผู้ซื้อแล้วก็ยังคงเป็นสินทรัพย์ของผู้ขายจนกว่าผู้ซื้อจะชำระเงินเรียบร้อย
          <div>2.หากชำระเงินด้วยเช็คโปรดขีดคร่อมในนาม “บริษัทศรีดาราทัวร์จำกัด” และขีดฆ่าหรือผู้ถือออก <br> 3.การชำระเงินด้วยเช็คจะสมบูรณ์เมื่อ บริษัทฯได้รับเงินตามเช็คเรียบร้อย</div>
          <div class="flex">
            <div class="font-black w-30">ตัวอักษร:</div>
            <div class="font-black">ห้าหมื่นเก้าพันเก้าร้อยยี่สิบบาทถ้วน</div>
          </div>
        </div>

        <!-- สรุปรายการ(ด้านขวา) -->
        <div class="grid grid-cols-2 p-2">
          <div >รวมเงิน</div>
          <div class="text-right">59920 บาท</div>
          <div >มัดจำ 100%</div>
          <div class="text-right">5000 บาท</div>
          <div >มูลค่าคิดภาษี</div>
          <div class="text-right">56000 บาท</div>
          <div >ภาษีมูลค่าเพิ่ม</div>
          <div class="text-right">3920 บาท</div>
          <div class="font-bold">ยอดสุทธิ</div>
          <div class="text-right font-bold">59920 บาท</div>
        </div>
      </div>

      <div class="grid grid-cols-4 mt-35 text-xs">
        <div class="text-center border-b-1 border-black mx-5">
          <div>ผู้เสนอราคา</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b-1 border-black mx-5">
          <div>ผู้รับเงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b-1 border-black mx-5">
          <div>ผู้ตรวจสอบ</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b-1 border-black mx-5">
          <div>ผู้อนุมัติสั่งซื้อ</div>
          <div class="mb-5">วันที่</div>
        </div>
      </div>
    </div>
    <div class="mt-8 mr-180 flex justify-end mb-4">
            <!-- Modal toggle -->
            <button>
              <NuxtLink data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button"
                class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
                </svg>
                แก้ไขเอกสารใบแจ้งหนี้
              </NuxtLink>
            </button>

            <NuxtLink href="#" type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm ml-2 px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              สั่งพิมพ์ หรือ บันทึกเป็น PDF
            </NuxtLink>

            <!-- Main modal -->
            <div id="authentication-modal" tabindex="-1" aria-hidden="true"
              class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative w-full max-w-300 max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="authentication-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </button>
                  <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                      ฟอร์มสร้างแก้ไขแจ้งหนี้/ใบวางบิล
                    </h3>
                    <form action="#">
                      <div class="grid gap-4 mb-4 sm:grid-cols-3 sm:gap-6 sm:mb-5">
                        <!-- <div class="grid gap-4 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5"> -->
                        <div class="w-full">
                          <label for="identification"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขที่</label>
                          <input type="text" name="identification" id="identification"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value="" placeholder="" required />
                        </div>
                          <div class="w-full">
                            <label for="birthdate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันที่</label>
                            <div class="w-full relative">
                              <div class="w-full absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"></path>
                                </svg>
                              </div>
                              <input datepicker datepicker-autohide type="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="เลือกวันที่" />
                            </div>
                        </div>
                        <div class="w-full">
                          <label for="phone"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">หมายเลขแฟกซ์</label>
                            <input type="text" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value="" placeholder="" required />
                        </div>
                      </div>
                      </form>
                      <button type="submit"
                        class="w-50 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        แก้ไข
                      </button>
                      <button data-modal-hide="defaultModal" type="button" class="ml-5 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">ยกเลิก</button>
                      
                      </div>
                      </div>
        </div>
    </div>
</div>

  </section>
  <!-- <div class="flex bg-gray-900"></div> -->
</template>
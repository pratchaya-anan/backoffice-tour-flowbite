<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div class="mx-auto max-w-screen-lg">
      <div class="min-h-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          สร้างใบเสนอราคา
        </h5>
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">

        <h2 class="mb-4 text-xl text-gray-900 dark:text-white">ข้อมูลลูกค้า</h2>
        <form action="#">
          <div class="grid gap-4 grid-cols-2 lg:grid-cols-2 lg:gap-6">
            <div class="col-span-1 lg:col-span-1">
              <label for="namecustomer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อลูกค้า</label>
              <input type="text" name="namecustomer" id="namecustomer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="col-span-1 lg:col-span-1">
              <label for="namecontact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อผู้ติดต่อ</label>
              <input type="text" name="namecontact" id="namecontact" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="col-span-1 lg:col-span-1">
              <label for="taxid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขประจำตัวผู้เสียภาษี</label>
              <input type="text" name="taxid" id="taxid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="col-span-1 lg:col-span-1">
              <label for="taxid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสลูกค้า</label>
              <input type="text" name="taxid" id="taxid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="col-span-1 lg:col-span-2">
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ที่อยู่</label>
              <input type="text" name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>

            <div class="relative mt-7 flex items-center">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ยืนยันราคาภายในวันที่">
            </div>
            
            <div class="relative mt-7 flex items-center">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="วันที่ส่งของ">
            </div>

            <div class="col-span-1 lg:col-span-1">
              <label for="customerid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสลูกค้า</label>
              <input type="text" name="ustomerid" id="ustomerid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="w-full">
              <label for="customerid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ฝ่าย</label>
              <input type="text" name="ustomerid" id="ustomerid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="w-full">
              <label for="customerid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เบอร์โทรศัพท์</label>
              <input type="text" name="ustomerid" id="ustomerid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
            <div class="w-full">
              <label for="customerid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เมล</label>
              <input type="text" name="ustomerid" id="ustomerid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
            </div>
          </div>
        </form>

        <!-- <h2 class="mb-4 text-xl text-gray-900 dark:text-white">ข้อมูลลูกทัวร์</h2>
        <form action="#">
          <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div class="w-full">
              <label for="firstname" class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">ชื่อ</label>
              <input type="text" name="firstname" id="firstname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="" placeholder="" required>
            </div>
            <div class="w-full">
              <label for="lastname" class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">สกุล</label>
              <input type="text" name="lastname" id="lastname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="" placeholder="" required>
            </div>
          </div>
          <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div class="w-full">
              <label for="firstname2"
                class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">firstname</label>
              <input type="text" name="firstname2" id="firstname2"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="" placeholder="" required>
            </div>
            <div class="w-full">
              <label for="Lastname2"
                class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">Lastname</label>
              <input type="text" name="Lastname2" id="Lastname2"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="" placeholder="" required>
            </div>
          </div>
          <div class="grid gap-4 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5">
            <div class="sm:col-span-2">
              <label for="nationality"
                class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">สัญชาติ</label>
              <input type="text" name="nationality" id="nationality"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="" placeholder="" required>
            </div>
            <div>
              <label for="gender" class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">เพศ</label>
              <select id="gender"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected></option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
                <option value="อื่นๆ">อื่นๆ</option>
              </select>
            </div>
            <div class="w-full">
              <label for="birthdate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วัน
                เดือน ปี เกิด</label>
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
                  placeholder="Select date">
              </div>
            </div>
          </div>
          <div class="grid gap-4 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5">
            <div class="w-full">
              <label for="identification"
                class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">หมายเลขบัตรประชาชน</label>
              <input type="text" name="identification" id="identification"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="" placeholder="" required>
            </div>


            <div class="w-full">
              <label for="phone"
                class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">เบอร์โทรศัพท์</label>
              <input type="text" name="phone" id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="" placeholder="" required>
            </div>
            <div class="w-full">
              <label for="passport"
                class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white">หมายเลขพาสปอร์ต</label>
              <input type="text" name="passport" id="passport"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="" placeholder="" required>
            </div>
            <div class="w-full">
              <label for="check"
                class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">ตรวจลงตราเลขที่</label>
              <input type="text" name="check" id="check"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="" placeholder="" required>
            </div>

          </div>
          <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
            <div>
              <label for="category"
                class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">ประเภทเตียง</label>
              <select id="category"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected></option>
                <option value="ชาย">เดี่ยว</option>
                <option value="หญิง">คู่</option>
              </select>
            </div>


            <div class="w-full">
              <label for="startenddate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันที่ออก -
                วันที่หมด</label>
              <div date-rangepicker class="flex items-center">
                <div class="w-full relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                      viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <input name="start" type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start">
                </div>
                <span class="mx-1.5 text-gray-500">to</span>
                <div class="w-full relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                      viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <input name="end" type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end">
                </div>
              </div>

            </div>
          </div>
          <div class="grid gap-4 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5">
            <div class="sm:col-span-2">
              <label for="brand"
                class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">ที่อยู่ตามบัตรประชาชน</label>
              <input type="text" name="passport" id="passport"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="" placeholder="" required>
            </div>
            <div class="w-full">
              <label for="brand" class="block mb-2 text-sm font-medium    text-gray-900 dark:text-white">หมายเหตุ</label>
              <input type="text" name="check" id="check"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value="" placeholder="" required>
            </div>
            <div class="w-full flex items-center space-x-4">
              <button type="submit"
                class="w-full mt-6 text-primary-500 bg-primary-100 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  rounded-sm text-sm px-2 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                เพิ่มลูกทัวร์
              </button>
            </div>
          </div>
          <div class="grid gap-4 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5">
            <div class="sm:col-span-4">
              <div class="relative overflow-x-auto">
                <table class="w-full text-center text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-primary-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-1 py-3">
                        ลำดับ
                      </th>
                      <th scope="col" class="px-1 py-3">
                        ชื่อ-นามสกุลภาษาไทย
                      </th>
                      <th scope="col" class="px-1 py-3">
                        ชื่อ-นามสกุลภาษาอังกฤษ
                      </th>
                      <th scope="col" class="px-1 py-3">
                        หมายเลขบัตรประชาชน
                      </th>
                      <th scope="col" class="px-1 py-3">
                        หมายเลขพาสปอร์ต
                      </th>
                      <th scope="col" class="px-1 py-3">
                        วันที่ออก
                      </th>
                      <th scope="col" class="px-1 py-3">
                        วันที่หมด
                      </th>
                      <th scope="col" class="px-1 py-3">
                        ว/ด/ป เกิด
                      </th>
                      <th scope="col" class="px-1 py-3">
                        สัญชาติ
                      </th>
                      <th scope="col" class="px-1 py-3">
                        เพศ
                      </th>
                      <th scope="col" class="px-1 py-3">
                        ประเภทเตียง
                      </th>
                      <th scope="col" class="px-1 py-3">
                        ตรวจลงตราเลขที่
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-xs text-gray-700 uppercase bg-white hover:bg-primary-50">
                    <tr data-modal-target="popup-modal" data-modal-toggle="popup-modal">
                      <th scope="col" class="px-1 py-3">
                        1
                      </th>
                      <th scope="col" class="px-1 py-3">
                        เหนือ การตลาด
                      </th>
                      <th scope="col" class="px-1 py-3">
                        1234527890123
                      </th>
                      <th scope="col" class="px-1 py-3">
                        north dsad
                      </th>
                      <th scope="col" class="px-1 py-3">
                        1234
                      </th>
                      <th scope="col" class="px-1 py-3">
                        12/04/2522
                      </th>
                      <th scope="col" class="px-1 py-3">
                        13/04/2522
                      </th>
                      <th scope="col" class="px-1 py-3">
                        13/04/2552
                      </th>
                      <th scope="col" class="px-1 py-3">
                        ไทย
                      </th>
                      <th scope="col" class="px-1 py-3">
                        ชาย
                      </th>
                      <th scope="col" class="px-1 py-3">
                        เดี่ยว
                      </th>
                      <th scope="col" class="px-1 py-3">
                        ผ่าน
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </form> -->

        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">
        <h2 class="mb-4 text-xl text-gray-900 dark:text-white">รายการสินค้า</h2>
        <form action="#">
          <div class="grid grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-6">
            <div class="col-span-1 lg:col-span-1 w-full">
              <label for="namecustomer"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสสินค้า</label>
              <input type="text" name="namecustomer" id="namecustomer"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required="">
            </div>
            <div class="col-span-1 lg:col-span-1 w-full">
              <label for="namecontact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวน</label>
              <input type="number" name="namecontact" id="namecontact"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required="">
            </div>
            <div class="col-span-1 lg:col-span-1 w-full">
              <label for="taxid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ราคาต่อหน่วย</label>
              <input type="number" name="taxid" id="taxid"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required="">
            </div>
            <div class="col-span-1 lg:col-span-1 w-full">
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ส่วนลด</label>
              <input type="number" name="address" id="address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required="">
            </div>
            <div class=" col-span-2 grid grid-cols-5 gap-4 lg:grid-cols-5 lg:gap-6">
              <div class="col-span-2 lg:col-span-2 w-full">
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษี (0% 7%
                  9%)</label>
                <select id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <!-- <option selected>Choose a country</option> -->
                  <option value="US">0%</option>
                  <option value="CA">7%</option>
                  <option value="FR">9%</option>
                </select>
              </div>

              <div class="col-span-2 lg:col-span-2 w-full">
                <label for="address"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายการสินค้า</label>
                <input type="text" name="address" id="address"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required="">
              </div>

              <button type="button"
                class="col-span-1 lg:col-span-1 w-full mt-7 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">เพิ่มข้อมูล</button>
            </div>
          </div>
        </form>
        <div class="relative overflow-x-auto mt-6 shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-primary-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ลำดับ
                </th>
                <th scope="col" class="px-6 py-3">
                  รหัสสินค้า
                </th>
                <th scope="col" class="px-6 py-3">
                  รายการสินค้า
                </th>
                <th scope="col" class="px-6 py-3">
                  จำนวน
                </th>
                <th scope="col" class="px-6 py-3">
                  ราคาต่อหน่วย
                </th>
                <th scope="col" class="px-6 py-3">
                  ส่วนลด
                </th>
                <th scope="col" class="px-6 py-3">
                  ภาษี
                </th>
                <th scope="col" class="px-6 py-3">
                  จำนวนเงิน
                </th>
                <th scope="col" class="px-6 py-3">
                  จัดการ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  1
                </th>
                <td class="px-6 py-4">
                  Q-4693120596
                </td>
                <td class="px-6 py-4">
                  อุบล
                </td>
                <td class="px-6 py-4">
                  1
                </td>
                <td class="px-6 py-4">
                  10,000.00
                </td>
                <td class="px-6 py-4">
                  0
                </td>
                <td class="px-6 py-4">
                  10,000.00
                </td>
                <td class="px-6 py-4">
                  10,700.00
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="mt-6 p-6 pb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="grid grid-cols-2 gap-4 lg:grid-cols-7 lg:gap-6">
            <div class="col-span-1">
              <label for="text"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">กำหนดยืนราคา(วัน)</label>
              <input type="number" id="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="col-span-1">
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ค่ามัดจำ</label>
              <input type="number" id="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="col-span-1">
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รวมเงิน</label>
              <input type="text" id="disabled-input" aria-label="disabled input"
                class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="10,700.00" disabled>
            </div>
            <div class="col-span-1">
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ส่วนลดสินค้า</label>
              <input type="text" id="disabled-input" aria-label="disabled input"
                class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="0.00" disabled>
            </div>
            <div class="col-span-1">
              <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ก่อนคำนวนภาษี</label>
              <input type="text" id="disabled-input" aria-label="disabled input"
                class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="10,000.00" disabled>
            </div>
            <div class="col-span-1">
              <label for="text"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษีมูลค่าเพิ่ม</label>
              <input type="text" id="disabled-input" aria-label="disabled input"
                class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="700.00" disabled>
            </div>
            <div class="col-span-1">
              <label for="text"
                class="block mb-1 text-sm font-bold text-gray-900 dark:text-white">จำนวนเงินทั้งสิ้น</label>
              <input type="text" id="disabled-input" aria-label="disabled input"
                class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="10,700.00" disabled>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <NuxtLink to="/tour_ls"
          class="mt-3 px-18 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          สร้างใบเสนอราคา
        </NuxtLink>
      </div>
    </div>
  </div>
</section></template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Datepicker from 'flowbite-datepicker/Datepicker';

// const datepickerEl = document.getElementById('datepickerId');
// new Datepicker(datepickerEl, {
//     // options
// }); 
if (process.client) {
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>
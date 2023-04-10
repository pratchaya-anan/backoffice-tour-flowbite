<template>
    <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5 mb-10">
        <div
            class="mx-auto max-w-screen-xl mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3">
            <!-- <section class="bg-white dark:bg-gray-900"> -->
            <div class=" px-4 py-4 mx-auto lg:py-4">
                <h2 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">ข้อมูลลูกทัวร์ | อุบล</h2>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                <form action="#">
                    <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div class="w-full">
                            <label for="firstname"
                                class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">ชื่อ</label>
                            <input type="text" name="firstname" id="firstname"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value="" placeholder="" required>
                        </div>
                        <div class="w-full">
                            <label for="lastname"
                                class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">สกุล</label>
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
                            <label for="gender"
                                class="block mb-2 text-sm font-medium   text-gray-900 dark:text-white">เพศ</label>
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
                                เดือน ปีเกิด</label>
                            <div class="w-full relative">
                                <div class="w-full absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                            <label for="startenddate"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันที่ออก -
                                วันที่หมด</label>
                            <div date-rangepicker class="flex items-center">
                                <div class="w-full relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                            <label for="brand"
                                class="block mb-2 text-sm font-medium    text-gray-900 dark:text-white">หมายเหตุ</label>
                            <input type="text" name="check" id="check"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                value="" placeholder="" required>
                        </div>
                        <div class="w-full flex items-center space-x-4">
                            <button type="button"
                                class="w-full  mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">เพิ่มลูกทัวร์</button>
                            <!-- <button type="submit"
                                class="w-full mt-6 text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  rounded-sm text-sm px-2 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                เพิ่มลูกทัวร์
                            </button> -->
                        </div>
                    </div>
                    <div class="grid gap-4 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5">
                        <div class="sm:col-span-4">
                            <div class="relative overflow-x-auto rounded-lg">
                                <table class="w-full text-center text-sm text-left text-gray-500 dark:text-gray-400 ">
                                    <thead
                                        class="text-xs text-gray-700 uppercase bg-primary-100 dark:bg-gray-700 dark:text-gray-400">
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
                </form>
            </div>
            <!-- </section> -->
        </div>
    </section>
</template>
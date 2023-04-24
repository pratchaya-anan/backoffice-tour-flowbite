<template>
    <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5 h-175">
        <div class="mx-auto max-w-screen-xl">
            <div class="grid grid-cols-2">
                <div>
                    <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                        รายการใบเบิกค่าใช้จ่าย
                    </h1>
                </div>
            </div>
            <!-- crad -->
            <div class="p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <!-- Start coding here -->
                <div class="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                    <div class="w-full md:w-1/3">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <input type="text" id="simple-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="ค้นหาชื่อผู้เบิก,ยอดสุทธิ" required>
                            </div>
                            <button type="button"
                                class="mt-2 ml-3 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                ค้นหา
                            </button>
                        </form>
                    </div>
                    <div
                        class="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                        <button type="button" data-modal-target="addestimate" data-modal-toggle="addestimate"
                            class="mt-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="h-5 w-5 inline-flex items-center" fill="none" stroke="currentColor"
                                stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
                            </svg>
                            สร้างใบเบิกค่าใช้จ่าย
                        </button>

                    </div>
                </div>
                <div class="mt-3 relative overflow-x-auto shadow-md sm:rounded-lg">

                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                class="text-xs text-gray-700 uppercase bg-primary-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ลำดับ
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ชื่อผู้เบิก
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        วันที่เบิก
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        วัตถุประสงค์
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ยอดสุทธิ
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center">
                                        ฟังค์ชั่น
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        1
                                    </th>
                                    <td class="px-6 py-3">
                                        <div>แตงโม โอโห้ใหญ่</div>
                                        <div>Mayom Khomjung</div>
                                    </td>
                                    <td class="px-6 py-3">24/03/2556</td>
                                    <td class="px-6 py-3">อาหารกลางวัน</td>
                                    <td class="px-6 py-3">750.00</td>
                                    <td class="flex justify-center mt-2 px-6 py-3">
                                        <!-- Modal toggle -->
                                        <button type="button"
                                            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg class="h-5 w-5 inline-flex items-center" fill="none" stroke="currentColor"
                                                stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            ใบเบิกเงินสดย่อย</button>
                                        <button id="updateProductButton" data-modal-toggle="updateProductModal"
                                            type="button"
                                            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg class="h-5 w-5 inline-flex items-center" fill="none" stroke="currentColor"
                                                stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z">
                                                </path>
                                            </svg>
                                            ออกใบเคลียร์</button>
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        2
                                    </th>
                                    <td class="px-6 py-3">
                                        <div>แตงโม โอโห้ใหญ่</div>
                                        <div>Mayom Khomjung</div>
                                    </td>
                                    <td class="px-6 py-3">24/03/2556</td>
                                    <td class="px-6 py-3">อาหารกลางวัน</td>
                                    <td class="px-6 py-3">750.00</td>
                                    <td class="flex justify-center mt-2 px-6 py-3">
                                        <!-- Modal toggle -->
                                        <button type="button"
                                            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg class="h-5 w-5 inline-flex items-center" fill="none" stroke="currentColor"
                                                stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            ใบเบิกเงินสดย่อย</button>
                                        <button id="updateProductButton" data-modal-toggle="updateProductModal"
                                            type="button"
                                            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg class="h-5 w-5 inline-flex items-center" fill="none" stroke="currentColor"
                                                stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z">
                                                </path>
                                            </svg>
                                            ออกใบเคลียร์</button>
                                    </td>
                                </tr>

                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        3
                                    </th>
                                    <td class="px-6 py-3">
                                        <div>แตงโม โอโห้ใหญ่</div>
                                        <div>Mayom Khomjung</div>
                                    </td>
                                    <td class="px-6 py-3">24/03/2556</td>
                                    <td class="px-6 py-3">อาหารกลางวัน</td>
                                    <td class="px-6 py-3">750.00</td>
                                    <td class="flex justify-center mt-2 px-6 py-3">
                                        <!-- Modal toggle -->
                                        <button type="button"
                                            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg class="h-5 w-5 inline-flex items-center" fill="none" stroke="currentColor"
                                                stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            ใบเบิกเงินสดย่อย</button>
                                        <button id="updateProductButton" data-modal-toggle="updateProductModal"
                                            type="button"
                                            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg class="h-5 w-5 inline-flex items-center" fill="none" stroke="currentColor"
                                                stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z">
                                                </path>
                                            </svg>
                                            ออกใบเคลียร์</button>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- Main modal -->
                <div id="updateProductModal"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                    <div class="relative p-4 w-full max-w-screen-xl h-full md:h-auto">
                        <!-- Modal content -->
                        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                            <!-- Modal header -->
                            <div
                                class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    ออกใบเคลียร์ประมาณการเงินสดย่อย
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="updateProductModal">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <form action="#">
                                <!-- <diV class="text-lg">รายละเอียดใบเคลียร์ </diV> -->
                                <div class="flex  mt-3">
                                    <div class="text-base font-bold ">
                                        อ้างอิงเลขที่ใบเคลียร์ :
                                    </div>
                                    <div class="ml-3 bg-gray-100 px-3 text-xl">
                                        368572871
                                    </div>

                                </div>

                                <div class="grid gap-4 mb-4 mt-3 sm:grid-cols-4">
                                    <!-- <div>
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อ้างอิงถึงเลขที่ใบขอเคลียร์</label>

                                        <input type="text" id="disabled-input-2" aria-label="disabled input 2"
                                            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value="368572871" disabled readonly>

                                    </div><div></div> -->
                                    <div>
                                        <label for="name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ผู้ขอเคลียร์</label>
                                        <input type="text" name="name" id="name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                    <div>
                                        <label for="brand"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ฝ่าย/แผนก</label>
                                        <input type="text" name="brand" id="brand"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                    <div class="">
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายละเอียดโครงการ/กิจกรรม</label>
                                        <input type="text" name="price" id="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                    <div class="">
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ผู้อนุมัติ
                                            (แบบอิเล็กทอรนิกส์)</label>
                                        <input type="text" name="price" id="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>

                                </div>
                                <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700">

                                <diV class="text-lg">รายการที่ขอเบิก</diV>
                                <div class="grid gap-4 mb-4 mt-3 sm:grid-cols-3">
                                    <div>
                                        <label for="name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันที่ใบเสร็จ</label>

                                        <div class="relative  ">
                                            <div
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                    fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <input datepicker datepicker-autohide type="text"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="เลือกวันที่">
                                        </div>

                                    </div>
                                    <div>
                                        <label for="brand"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายละเอียดค่าใช้จ่าย</label>
                                        <input type="text" name="brand" id="brand"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                    <div>
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขที่ใบเสร็จ</label>
                                        <input type="text" name="price" id="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                    <div>
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขประจำตัวผู้เสียภาษี</label>
                                        <input type="text" name="price" id="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                    <div>
                                        <label for="category"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายการ</label>
                                        <select id="category"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option value="TV">ค่าน้ำแข็ง</option>
                                            <option value="PC">ค่ารถ</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ยอดสุทธิ</label>
                                        <input type="number" name="price" id="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                </div>
                                <div class="flex justify-end">
                                    <button type="submit"
                                        class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        เพิ่มรายการ
                                    </button>
                                </div>
                                <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">

                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead
                                            class="text-xs text-gray-700 uppercase bg-primary-100 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    วันที่ใบเสร็จ
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    รายละเอียดค่าใช้จ่าย
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    เลขที่ใบเสร็จ
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    เลขประจำตัวผู้เสียภาษี
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    ยอดสุทธิ
                                                </th>
                                                <th scope="col" class="px-6 py-3">

                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
                                                <th scope="row"
                                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    หัวข้ออ้างอิงไม่แสดงในใบเคลียร์
                                                </th>
                                                <td class="px-6 py-4">
                                                    ค่าน้ำแข็ง
                                                </td>
                                                <td class="px-6 py-4">-
                                                </td>
                                                <td class="px-6 py-4">-
                                                </td>
                                                <td class="px-6 py-4">20000 .-
                                                </td>
                                                <td class="px-6 py-4">
                                                </td>
                                            </tr>
                                            <tr class="bg-white-50 border-b dark:bg-gray-900 dark:border-gray-700">
                                                <th scope="row"
                                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    16-05-66
                                                </th>
                                                <td class="px-6 py-4">
                                                    ค่าน้ำแข็ง+แก้ว
                                                </td>
                                                <td class="px-6 py-4">-
                                                </td>
                                                <td class="px-6 py-4">-
                                                </td>
                                                <td class="px-6 py-4">500 .-
                                                </td>
                                                <td class="px-6 py-4">
                                                    <svg class="mr-1 -ml-1 w-5 h-5 text-red-500 hover:text-red-800"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </td>
                                            </tr>
                                            <tr class="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700">
                                                <th scope="row"
                                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    หัวข้ออ้างอิงไม่แสดงในใบเคลียร์
                                                </th>
                                                <td class="px-6 py-4">
                                                    ค่าเช่าเหมายานพาหนะท้องถิ่น
                                                </td>
                                                <td class="px-6 py-4">-
                                                </td>
                                                <td class="px-6 py-4">-
                                                </td>
                                                <td class="px-6 py-4">52000 .-
                                                </td>
                                                <td class="px-6 py-4">

                                                </td>
                                            </tr>
                                            <tr class="bg-white-50 border-b dark:bg-gray-900 dark:border-gray-700">
                                                <th scope="row"
                                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    16-05-66
                                                </th>
                                                <td class="px-6 py-4">
                                                    ค่ารถท้องถิ่น
                                                </td>
                                                <td class="px-6 py-4">-
                                                </td>
                                                <td class="px-6 py-4">-
                                                </td>
                                                <td class="px-6 py-4">6000 .-
                                                </td>
                                                <td class="px-6 py-4">
                                                    <svg class="mr-1 -ml-1 w-5 h-5 text-red-500 hover:text-red-800"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

                                <div class="flex justify-end">
                                    <div class="flex font-semibold">
                                        <span>ยอดเงินประมาณการ</span>
                                        <span
                                            class="ml-5 bg-gray-100 text-gray-800 text-xs font-medium mr-2 text-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border">
                                            72,000</span>
                                        <span>ยอดสุทธิ</span>
                                        <span
                                            class="ml-5 bg-gray-100 text-gray-800 text-xs font-medium mr-2 text-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border">
                                            6500</span>
                                        <span>ยอดเงินเบิกเพิ่ม</span>
                                        <span
                                            class="ml-5 bg-gray-100 text-gray-800 text-xs font-medium mr-2 text-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border">
                                            0</span>
                                        <span>ยอดเงินส่งคืน </span>
                                        <span
                                            class="ml-5 bg-gray-100 text-gray-800 text-xs font-medium mr-2 text-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border">
                                            65500</span>
                                    </div>

                                </div>
                                <div class="flex justify-end space-x-4 mt-5 ">
                                    <button type="button"
                                        class="px-8 py-2.5 text-gray-600 inline-flex items-center hover:text-white border border-gray-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                        <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        ยกเลิก
                                    </button>
                                    <button type="submit"
                                        class="px-10 py-2.5 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        สร้าง
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div id="addestimate" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
                    <div class="relative p-4 w-full max-w-screen-xl h-full md:h-auto">
                        <!-- Modal content -->
                        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                            <!-- Modal header -->
                            <div
                                class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    แบบฟอร์มประมาณการเบิกเงินสดย่อย | เที่ยวเกาะ เลาะรัก
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="addestimate">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <form action="#">
                                <!-- <diV class="text-lg">รายละเอียดใบเคลียร์ </diV> -->
                                <div class="flex  mt-3">
                                    <div class="text-base font-bold ">
                                        เลขที่ใบ :
                                    </div>
                                    <div class="ml-3 bg-gray-100 px-3 text-xl">
                                        3231574650304
                                    </div>

                                </div>

                                <div class="grid gap-4 mb-4 mt-3 sm:grid-cols-4">
                                    <!-- <div>
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อ้างอิงถึงเลขที่ใบขอเคลียร์</label>

                                        <input type="text" id="disabled-input-2" aria-label="disabled input 2"
                                            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value="368572871" disabled readonly>

                                    </div><div></div> -->
                                    <div>
                                        <label for="name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อผู้ขอเบิก</label>
                                        <input type="text" name="name" id="name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                    <div>
                                        <label for="brand"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">แผนก</label>
                                        <input type="text" name="brand" id="brand"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                    <div class="">
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันที่ต้องการใช้เงิน</label>
                                        <input type="text" name="price" id="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                    <div class="">
                                        <label for="name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันที่ใบเสร็จ</label>

                                        <div class="relative  ">
                                            <div
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                    fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <input datepicker datepicker-autohide type="text"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="เลือกวันที่">
                                        </div>
                                    </div>

                                </div>
                                <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700">

                                <diV class="text-lg">รายการที่ขอเบิก</diV>
                                <div class="grid gap-4 mb-4 mt-3 sm:grid-cols-3">
                                    <div>
                                        <label for="name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ราคา</label>

                                        <div class="relative  ">
                                            <div
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                    fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <input datepicker datepicker-autohide type="text"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="เลือกวันที่">
                                        </div>

                                    </div>
                                    <div>
                                        <label for="brand"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ประเภทค่าใช้จ่าย</label>
                                        <input type="text" name="brand" id="brand"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                    <div>
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวน</label>
                                        <input type="text" name="price" id="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                </div>
                                <div class="flex justify-between">
                                    <div class="w-full md:w-4/5">
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขประจำตัวผู้เสียภาษี</label>
                                        <input type="text" name="price" id="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    </div>
                                    <div class="ml-3">
                                        <div class="inline-flex items-center mt-7 w-full">
                                            <button type="submit"
                                                class="px-8 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                เพิ่มรายการ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">

                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead
                                            class="text-xs text-gray-700 uppercase bg-primary-100 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    ลำดับ
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    รายละเอียดค่าใช้จ่าย
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    ราคา
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    ประเถทค่าใช้จ่าย
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    จำนวน
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    ยอดสุทธิ
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class=" bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700 ">
                                                <td :colspan="6" class="text-center px-6 py-3">
                                                    ไม่มีข้อมูล                                                   
                                                </td>
                                            </tr>
                                           


                                        </tbody>
                                    </table>
                                </div>
                                
                                <div class="flex justify-end space-x-4 mt-5 ">
                                    <button type="button"
                                        class="px-8 py-2.5 text-gray-600 inline-flex items-center hover:text-white border border-gray-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                        <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        ยกเลิก
                                    </button>
                                    <button type="submit"
                                        class="px-10 py-2.5 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        สร้างใบเบิกเงิน
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    </section>
</template>
  
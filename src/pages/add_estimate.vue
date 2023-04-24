<template>
    <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
        <div class="max-w-screen-lg mx-auto">
            <!-- แบบฟอร์มประมาณการเบิกเงินสดย่อย | -->

            <div class="mt-3 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    แบบฟอร์มประมาณการเบิกเงินสดย่อย | เที่ยวเกาะ เลาะรัก
                </h5>
                <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                <form>
                    <div class="grid gap-4 mb-4 sm:grid-cols-2 ">
                        <div>
                            <div class="mb-2 ">
                                <label for="default-input"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อผู้ขอเบิก</label>
                                <input type="text" id="default-input"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                        </div>
                        <div>
                            <div class="mb-2">
                                <label for="default-input"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">แผนก</label>
                                <input type="text" id="default-input"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-4 mb-4 sm:grid-cols-2 mt-4">
                        <div>
                            <label for="default-input"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันที่ต้องการใช้เงิน</label>
                            <input type="number" id="default-input"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div>
                            <label for="default-input"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วัตถุประสงค์การยืมเงินทดลองจ่าย</label>
                            <input type="number" id="default-input"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>                    
                </form>

            </div>
            <!-- รายละเอียด -->
            <div class="mt-3 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    รายละเอียด
                </h5>
                <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                <form>
                    <div class="grid gap-4 mb-4 sm:grid-cols-2 ">
                        <div>
                            <div class="mb-2 ">
                                <label for="default-input"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ราคา</label>
                                <input type="text" id="default-input"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                        </div>
                        <div>
                            <div class="mb-2">
                                <label for="default-input"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ประเภทค่าใช้จ่าย</label>
                                <input type="text" id="default-input"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-4 mb-4 sm:grid-cols-2 mt-4">
                        <div>
                            <label for="default-input"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จำนวน</label>
                            <input type="number" id="default-input"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div>
                            <label for="default-input"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายละเอียดค่าใช้จ่าย</label>
                            <input type="number" id="default-input"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                class="text-xs text-gray-700 uppercase bg-primary-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ชื่อไกด์
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        เบอร์โทร
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        แก้ไข
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        ปลาดาว
                                    </th>
                                    <td class="px-6 py-4">
                                        092-XXXXXXX
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">แก้ไข</a>
                                    </td>
                                </tr>
                                <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        อลิส โซ
                                    </th>
                                    <td class="px-6 py-4">
                                        093-XXXXXXX
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#"
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">แก้ไข</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex justify-end ">
                        <NuxtLink to="/addguide"
                            class="mt-3 px-10  py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
                                    focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex ">
                            สร้างใบประมาณเบิกเงินสดย่อย                            
                        </NuxtLink>

                    </div>
                </form>

            </div>

        </div>
    </section>
</template>

<template>
    <section class="bg-gray-100 dark:bg-gray-900 ">
        <div class="mx-auto max-w-screen-2xl px-4 lg:px-12 p-6">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div class="w-full md:w-100">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Search">
                            </div>
                        </form>
                    </div>
                    <div
                        class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-left md:space-x-3 flex-shrink-0">
                        <NuxtLink to="addtour">
                            <button type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-1">สร้างทัวร์</button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-primary-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" class="px-6 py-3 ">
                                ชื่อทริปทัวร์
                            </th>
                            <th scope="col" class="px-6 py-3 ">
                                ชื่อโปรแกรมทัวร์
                            </th>
                            <th scope="col" class="px-6 py-3   ">
                                วันที่เริ่มทริป
                            </th>
                            <th scope="col" class="px-6 py-3  ">
                                วันที่สิ้นสุดทริป
                            </th>
                            <th scope="col" class="px-6 py-3   ">
                                วัน
                            </th>
                            <th scope="col" class="px-6 py-3   ">
                                คืน
                            </th>
                            <th scope="col" class="px-6 py-3   ">
                                เที่ยวบินหรือพาหนะอื่นขาไป
                            </th>
                            <th scope="col" class="px-6 py-3   ">
                                เที่ยวบินหรือพาหนะอื่นขากลับ
                            </th>
                            <th scope="col" class="px-6 py-3  ">
                                จำนวนลูกทัวร์
                            </th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <NuxtLink to="tourdata">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    เที่ยวเกาะ เลาะรัก
                                </th>
                            </NuxtLink>
                            <td class="px-6 py-4">
                                เกาะเสม็ด เสร็จทุกราย
                            </td>
                            <td class="px-6 py-4">
                                16/04/2566
                            </td>
                            <td class="px-6 py-4">
                                20/04/2566
                            </td>
                            <td class="px-6 py-4">
                                5
                            </td>
                            <td class="px-6 py-4">
                                4
                            </td>
                            <td class="px-6 py-4">
                                นครชัยแอร์
                            </td>
                            <td class="px-6 py-4">
                                AirAsia
                            </td>
                            <td class="px-6 py-4">
                                1
                            </td>

                        </tr>

                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <NuxtLink to="tourdata">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    เที่ยวเกาะ เลาะรัก
                                </th>
                            </NuxtLink>
                            <td class="px-6 py-4">
                                เกาะเสม็ด เสร็จทุกราย
                            </td>
                            <td class="px-6 py-4">
                                16/04/2566
                            </td>
                            <td class="px-6 py-4">
                                20/04/2566
                            </td>
                            <td class="px-6 py-4">
                                5
                            </td>
                            <td class="px-6 py-4">
                                4
                            </td>
                            <td class="px-6 py-4">
                                นครชัยแอร์
                            </td>
                            <td class="px-6 py-4">
                                AirAsia
                            </td>
                            <td class="px-6 py-4">
                                1
                            </td>

                        </tr>
                        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <NuxtLink to="tourdata">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    เที่ยวเกาะ เลาะรัก
                                </th>
                            </NuxtLink>
                            <td class="px-6 py-4">
                                เกาะเสม็ด เสร็จทุกราย
                            </td>
                            <td class="px-6 py-4">
                                16/04/2566
                            </td>
                            <td class="px-6 py-4">
                                20/04/2566
                            </td>
                            <td class="px-6 py-4">
                                5
                            </td>
                            <td class="px-6 py-4">
                                4
                            </td>
                            <td class="px-6 py-4">
                                นครชัยแอร์
                            </td>
                            <td class="px-6 py-4">
                                AirAsia
                            </td>
                            <td class="px-6 py-4">
                                1
                            </td>

                        </tr>
                        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <NuxtLink to="tourdata">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    เที่ยวเกาะ เลาะรัก
                                </th>
                            </NuxtLink>
                            <td class="px-6 py-4">
                                เกาะเสม็ด เสร็จทุกราย
                            </td>
                            <td class="px-6 py-4">
                                16/04/2566
                            </td>
                            <td class="px-6 py-4">
                                20/04/2566
                            </td>
                            <td class="px-6 py-4">
                                5
                            </td>
                            <td class="px-6 py-4">
                                4
                            </td>
                            <td class="px-6 py-4">
                                นครชัยแอร์
                            </td>
                            <td class="px-6 py-4">
                                AirAsia
                            </td>
                            <td class="px-6 py-4">
                                1
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>



    </section>
</template>
<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5 h-170">
    <div class="mx-auto max-w-screen-xl">
      <div class="flex justify-end">
        <div class="px-2 mb-2">
          <!-- Modal toggle -->
          <button>
            <NuxtLink
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              type="button"
              class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-5 h-5 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m6-6H6"
                ></path>
              </svg>
              จัดการข้อมูลลูกทัวร์
            </NuxtLink>
          </button>

          <!-- Main modal -->
          <div
            id="authentication-modal"
            tabindex="-1"
            aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative w-full max-w-md max-h-full">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                  <h3
                    class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                  >
                    Sign in to our platform
                  </h3>
                  <form class="space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Your email</label
                      >
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Your password</label
                      >
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <div class="flex justify-between">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <label
                          for="remember"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >Remember me</label
                        >
                      </div>
                      <a
                        href="#"
                        class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >Lost Password?</a
                      >
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Login to your account
                    </button>
                    <div
                      class="text-sm font-medium text-gray-500 dark:text-gray-300"
                    >
                      Not registered?
                      <a
                        href="#"
                        class="text-blue-700 hover:underline dark:text-blue-500"
                        >Create account</a
                      >
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-2 mb-2">
          <button
            id="dropdowncommentButton"
            data-dropdown-toggle="comment"
            class="font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="button"
          >
            จัดการคอมเมนต์
            <svg
              class="w-5 h-5 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
            id="comment"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdowncommentButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >จัดการร้านอาหาร</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >จัดการสถานที่เที่ยว</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >จัดการเส้นทาง</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >คอมเมนต์โรงแรม</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="px-2 mb-2">
          <button
            id="multiLevelDropdownButton"
            data-dropdown-toggle="dropdown"
            class="font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="button"
          >
            จัดการข้อมูลเอกสาร
            <svg
              class="w-5 h-5 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
            id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="multiLevelDropdownButton"
            >
              <li>
                <button
                  id="doubleDropdownButton"
                  data-dropdown-toggle="doubleDropdown"
                  data-dropdown-placement="right-start"
                  type="button"
                  class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  ใบเบิกค่าใช้จ่าย<svg
                    aria-hidden="true"
                    class="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  id="doubleDropdown"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="doubleDropdownButton"
                  >
                    <li>
                      <a
                        href="/add-estimate"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >สร้างใบเบิกค่าใช้จ่าย</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >จัดการใบเบิกค่าใช้จ่าย</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="quotationDropdownButton"
                  data-dropdown-toggle="quotationDropdown"
                  data-dropdown-placement="right-start"
                  type="button"
                  class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  ใบเสนอราคา<svg
                    aria-hidden="true"
                    class="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  id="quotationDropdown"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="quotationDropdownButton"
                  >
                    <li>
                      <a
                        href="/quotationForm"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >สร้างใบเสนอราคา</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >จัดการใบเสนอราคา</a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">
                ชื่อทริปทัวร์ : เที่ยวเกาะ เลาะรัก
              </th>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3">
                ชื่อทริปทัวร์ : เที่ยวเกาะ เลาะรัก
              </th>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3">
                เบอร์โทร : 0854125475, 0325698545
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                โปรแกรมทัวร์ : เกาะเสม็ด เสร็จทุกราย
              </th>
              <td class="px-6 py-4">จำนวน : 5 วัน 4 คืน</td>
              <td class="px-6 py-4">วันที่เดือนปี 16/04/2566 ถึง 16/04/2566</td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">จำนวนลูกทัวร์ : 1</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ชื่อโรงแรม : ส้มหาดสวรรน์
              </th>
              <td class="px-6 py-4">จำนวนห้องพัก : 15</td>
              <td class="px-6 py-4">วันที่เช็คอินน์ : 16/04/2566</td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">วันที่เช็คเอ้าท์ : 20/04/2566</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                เที่ยวบินหรือพาหนะอื่น ๆ ขาไป : นครชัยแอร์
              </th>
              <td class="px-6 py-4">&#32;</td>
              <td class="px-6 py-4">
                เที่ยวบินหรือพาหนะอื่น ๆ ขากลับ : AIRASIA
              </td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4">หมายเหตุ : ASDD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-primary-100 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">ลำดับ</th>
              <th scope="col" class="px-6 py-3">ชื่อ-นามสกุลภาษาไทย</th>
              <th scope="col" class="px-6 py-3">หมายเลขบัตรประชาชน</th>
              <th scope="col" class="px-6 py-3">ชื่อ-นามสกุลภาษาอังกฤษ</th>
              <th scope="col" class="px-6 py-3">หมายเลขพาสปอร์ต</th>
              <th scope="col" class="px-6 py-3">สัญชาติ</th>
              <th scope="col" class="px-6 py-3">เพศ</th>
              <th scope="col" class="px-6 py-3">ประเภทเตียง</th>
              <th scope="col" class="px-6 py-3 text-center">เพิ่มเติม</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td class="px-6 py-4">มะยม ขมจัง</td>
              <td class="px-6 py-4">1245865475854</td>
              <td class="px-6 py-4">Mayom Khomjung</td>
              <td class="px-6 py-4">A251368</td>
              <td class="px-6 py-4">ไทย</td>
              <td class="px-6 py-4">หญิง</td>
              <td class="px-6 py-4">คู่</td>
              <td class="px-6 py-4 text-center">
                <!-- Modal toggle -->
                <div class="flex justify-between">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    data-modal-target="staticModal"
                    data-modal-toggle="staticModal"
                    class="w-5 h-5 text-blue-500 hover:text-blue-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    ></path>
                  </svg>
                  <div class="mx-2">|</div>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    class="w-5 h-5 text-red-500 hover:text-red-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    ></path>
                  </svg>
                </div>

                <!-- Main modal -->
                <div
                  id="staticModal"
                  data-modal-backdrop="static"
                  tabindex="-1"
                  aria-hidden="true"
                  class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
                >
                  <div class="relative w-full h-full max-w-2xl md:h-auto">
                    <!-- Modal content -->
                    <div
                      class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                    >
                      <!-- Modal header -->
                      <div
                        class="flex items-start justify-center p-4 border-b rounded-t dark:border-gray-600"
                      >
                        <h3
                          class="text-xl font-semibold text-gray-900 dark:text-white"
                        >
                          รายละเอียดลูกทัวร์ | มะยม ขมจัง
                        </h3>
                        <button
                          type="button"
                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="staticModal"
                        >
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <!-- Modal body -->
                      <div class="p-6 space-y-6 text-left">
                        <p
                          class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                          วันที่ออกพาสปอร์ต: 01/03/2566
                        </p>
                        <p
                          class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                          วันหมดอายุพาสปอร์ต: 07/04/2570
                        </p>
                        <p
                          class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                          วันเดือนปีเกิด: 18/10/2538
                        </p>
                        <p
                          class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                          ตรวจลงตราเลขที: 455/55
                        </p>
                        <p
                          class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                        >
                          หมายเหตุ: asddds
                        </p>
                      </div>
                      <!-- Modal footer -->
                      <div
                        class="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                      >
                        <div class="flex justify-between">
                          <div>
                            <input
                              type="text"
                              id="small-input"
                              class="mr-2 w-70 block w-full py-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <button
                            data-modal-hide="staticModal"
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            คอมเมนต์
                          </button>
                        </div>
                        <button
                          data-modal-hide="staticModal"
                          type="button"
                          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          ปิด
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div data-dial-init class="fixed right-6 bottom-6 group">
      <div
        id="speed-dial-menu-default"
        class="flex flex-col items-center hidden mb-4 space-y-2"
      >
        <button
          type="button"
          data-tooltip-target="tooltip-print"
          data-tooltip-placement="left"
          class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
            ></path>
          </svg>
          <span class="sr-only">Print</span>
        </button>
        <div
          id="tooltip-print"
          role="tooltip"
          class="absolute z-10 invisible inline-block w-30 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          พิมพ์รายชื่อ Tag
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          data-tooltip-target="tooltip-download"
          data-tooltip-placement="left"
          class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            ></path>
          </svg>
          <span class="sr-only">Download</span>
        </button>
        <div
          id="tooltip-download"
          role="tooltip"
          class="absolute z-10 invisible inline-block w-31 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          อัพเดทคอมเมนต์
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          data-tooltip-target="tooltip-copy"
          data-tooltip-placement="left"
          class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="2.3"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            ></path>
          </svg>
          <span class="sr-only">Copy</span>
        </button>
        <div
          id="tooltip-copy"
          role="tooltip"
          class="absolute z-10 invisible inline-block w-54 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          แก้ไขข้อมูลทัวร์ หรือ เพิ่มโรงแรม
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          data-tooltip-target="tooltip-delete"
          data-tooltip-placement="left"
          class="flex justify-center items-center w-[52px] h-[52px] text-red-500 hover:text-red-900 bg-white rounded-full border border-red-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            ></path>
          </svg>
          <span class="sr-only">Delete</span>
        </button>
        <div
          id="tooltip-delete"
          role="tooltip"
          class="absolute z-10 invisible inline-block w-17 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-red-600 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          ลบทัวร์
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <button
        type="button"
        data-dial-toggle="speed-dial-menu-default"
        aria-controls="speed-dial-menu-default"
        aria-expanded="false"
        class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="w-8 h-8 transition-transform group-hover:rotate-45"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          ></path>
        </svg>
        <span class="sr-only">Open actions menu</span>
      </button>
    </div>
  </section>
</template>

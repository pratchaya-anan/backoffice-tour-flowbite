<template>
  <section class="dark:bg-gray-900 p-3 sm:p-5 min-h-screen bg-gray-50">
    <div class="mx-auto max-w-screen-xl">
      <div>
        <!-- header button -->
        <div class="grid grid-cols-2">
          <!-- หัวข้อ -->
          <div>
            <h1 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              จัดการข้อมูลทัวร์
            </h1>
          </div>

          <!-- ปุ่มจัดการคอมเมนต์ -->
          <div class="flex justify-end">
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

              <!-- Dropdown ของคอมเมนต์ -->
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
                      data-modal-target="cm_restaurant"
                      data-modal-toggle="cm_restaurant"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >คอมเมนต์ร้านอาหาร</a
                    >
                  </li>
                  <li>
                    <a
                      data-modal-target="cm_location"
                      data-modal-toggle="cm_location"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >คอมเมนต์สถานที่เที่ยว</a
                    >
                  </li>
                  <li>
                    <a
                      data-modal-target="cm_path"
                      data-modal-toggle="cm_path"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >คอมเมนต์เส้นทาง</a
                    >
                  </li>
                  <li>
                    <a
                      data-modal-target="cm_hotel"
                      data-modal-toggle="cm_hotel"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >คอมเมนต์โรงแรม</a
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- ปุ่มจัดการเอกสาร -->
            <div class="mb-2">
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
              <!-- Dropdown document -->
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
                            href="/disbursement-management"
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
                            href="/quotation-management"
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
        </div>
        <!-- end header button -->

        <!-- ตารางข้อมูลทัวร์ -->
        <div
          class="p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="px-3 mb-5">
            <div class="flex justify-between">
              <h5
                class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
              >
                ข้อมูลทัวร์
              </h5>
              <div data-dial-init class="flex group -mt-4 -mr-6">
                <div
                  id="speed-dial-menu-horizontal"
                  class="flex items-center hidden mr-4 space-x-2"
                >
                  <button
                    data-modal-target="tourdataModal"
                    data-modal-toggle="tourdataModal"
                    type="button"
                    data-tooltip-target="tooltip-alldatatour"
                    data-tooltip-placement="top"
                    class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      class="w-7 h-7 -ml-px"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      ></path>
                    </svg>
                    <span class="sr-only">รายละเอียดทั้งหมด</span>
                  </button>
                  <div
                    id="tooltip-alldatatour"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    รายละเอียดทั้งหมด
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>

                  <!-- data tour modal -->
                  <div
                    id="tourdataModal"
                    tabindex="-1"
                    aria-hidden="true"
                    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                  >
                    <div class="relative w-full max-w-4xl max-h-full">
                      <!-- Modal content -->
                      <div
                        class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                      >
                        <!-- Modal header -->
                        <div
                          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
                        >
                          <h3
                            class="text-2xl font-semibold text-gray-900 dark:text-white"
                          >
                            รายละเอียดทั้งหมด
                          </h3>
                          <button
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="tourdataModal"
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
                        </div>
                        <!-- Modal body -->
                        <div class="p-6 space-y-6">
                          <div>
                            <h5
                              class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                            >
                              ข้อมูลทัวร์
                            </h5>
                            <div class="grid grid-cols-2 gap-2">
                              <div class="col-span-2">
                                ชื่อทริปทัวร์: องค์การบริหารส่วนตำบลโพนงาม
                              </div>
                              <div>โปรแกรมทัวร์: กาญจนบุรี-เพชรบุรี</div>
                              <div>
                                วันที่เดินทาง: 29/03/2566 ถึง 29/03/2566
                              </div>
                              <div>จำนวน: 4 วัน 2 คืน</div>
                              <div>จำนวนลูกทัวร์: 3 คน</div>
                              <div>
                                หมายเหตุ: สบายตัวมากๆเลยนะ ถ้าไปอีกรอบ
                                จะหาตัวท็อป
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div>
                            <h5
                              class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                            >
                              ข้อมูลโรงแรม
                            </h5>
                            <div class="grid grid-cols-3 gap-2">
                              <div>โรงแรมริเวอร์แคว กาญจนบุรี</div>
                              <div>วันที่เช็คอินน์: 30/03/2566</div>
                              <div>วันที่เช็คเอ้าท์: 31/03/2566</div>
                              <div class="col-span-3 mb-1">
                                จำนวนห้องพัก: 45
                              </div>
                              <div>โรงแรมเอเชีย ชะอำ</div>
                              <div>วันที่เช็คอินน์: 31/03/2566</div>
                              <div>วันที่เช็คเอ้าท์: 01/04/2566</div>
                              <div class="col-span-3 mb-1">
                                จำนวนห้องพัก: 45
                              </div>
                            </div>
                          </div>
                          <hr />
                          <div>
                            <h5
                              class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                            >
                              ข้อมูลไกด์
                            </h5>
                            <div class="grid grid-cols-2 gap-2">
                              <div>นายขวัญชัย บูรณฤกษ์</div>
                              <div>0833076329</div>
                              <div>นายพิษณุ บุญลี</div>
                              <div>0632452369</div>
                            </div>
                          </div>
                          <hr />
                          <div>
                            <h5
                              class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                            >
                              ข้อมูลพาหนะ
                            </h5>
                            <div class="grid grid-cols-2 gap-2">
                              <div>พาหนะขาไป :</div>
                              <div>รถทัวร์นิลผกา 1-พิกุล 2</div>
                              <div>พาหนะขากลับ :</div>
                              <div>รถทัวร์นิลผกา 1-พิกุล 2</div>
                            </div>
                          </div>
                        </div>
                        <!-- Modal footer -->
                        <div
                          class="flex justify-center items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                        >
                          <button
                            data-modal-hide="tourdataModal"
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            ปิด
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    data-modal-target="cm_tour"
                    data-modal-toggle="cm_tour"
                    class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      ></path>
                    </svg>
                    <span class="sr-only">เขียนคอมเมนต์ทัวร์</span>
                  </button>
                  <div
                    id="tooltip-comment-tour"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    เขียนคอมเมนต์ทัวร์
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <NuxtLink
                    href="/edittour"
                    type="button"
                    data-tooltip-target="tooltip-edittour"
                    data-tooltip-placement="top"
                    class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      ></path>
                    </svg>
                    <span class="sr-only">แก้ไขหรือเพิ่มข้อมูล</span>
                  </NuxtLink>
                  <div
                    id="tooltip-edittour"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    แก้ไขหรือเพิ่มข้อมูล
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <button
                    data-modal-target="deletetour"
                    data-modal-toggle="deletetour"
                    type="button"
                    data-tooltip-target="tooltip-delete"
                    data-tooltip-placement="top"
                    class="flex justify-center items-center w-[52px] h-[52px] text-red-500 hover:text-red-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>
                    <span class="sr-only">ลบทัวร์นี้</span>
                  </button>
                  <div
                    id="tooltip-delete"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-red-600 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    ลบทัวร์นี้
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>

                <div
                  id="deletetour"
                  tabindex="-1"
                  class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div class="relative w-full max-w-md max-h-full">
                    <div
                      class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                    >
                      <button
                        type="button"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="deletetour"
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
                      </button>
                      <div class="p-6 text-center">
                        <svg
                          aria-hidden="true"
                          class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <h3
                          class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                        >
                          ต้องการลบทัวร์ชื่อ
                          <p class="text-black underline">
                            องค์การบริหารส่วนตำบลโพนงาม
                          </p>
                        </h3>
                        <NuxtLink
                          href="/tour_ls1"
                          type="button"
                          class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-10 py-2.5 text-center mr-2"
                        >
                          ลบ
                        </NuxtLink>
                        <button
                          data-modal-hide="deletetour"
                          type="button"
                          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-8 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          ยกเลิก
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  data-dial-toggle="speed-dial-menu-horizontal"
                  aria-controls="speed-dial-menu-horizontal"
                  aria-expanded="false"
                  class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
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

                  <span class="sr-only">เปิดเมนู</span>
                </button>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-2">
              <div>ชื่อทริปทัวร์: {{ tourfiltered.tourname }}</div>
              <div>โปรแกรมทัวร์: {{ tourfiltered.programname }}</div>
              <div>
                วันที่เดินทาง: {{ tourfiltered.datestart }} ถึง
                {{ tourfiltered.dateend }}
              </div>
              <div>
                จำนวน: {{ tourfiltered.day }} วัน {{ tourfiltered.night }} คืน
              </div>
              <div>จำนวนลูกทัวร์: {{ tourfiltered.amountmember }} คน</div>
              <div>หมายเหตุ: สบายตัวมากๆเลยนะ ถ้าไปอีกรอบ จะหาตัวท็อป</div>
            </div>
          </div>
          <hr />
          <div class="grid grid-cols-3 gap-2 mt-5">
            <div class="px-3">
              <div href="#">
                <h5
                  class="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  ข้อมูลโรงแรม
                </h5>
                <div
                  v-for="(hotel, indexh) in tourfiltered.hotel"
                  key="indexh"
                  class="grid grid-cols-3 gap-2"
                >
                  <div class="col-span-2">โรงแรม{{ hotel.name }}</div>
                <div v-for="(hotel, indexh) in tourfiltered.hotel" key="indexh" class="grid grid-cols-3 gap-2">
                  <div class="col-span-2">โรงแรม: {{ findnameHotel(hotel.hotel_id) }}</div>
                  <div>จำนวนห้องพัก: {{ hotel.amountroom }}</div>
                </div>
              </div>
              <div class="grid grid-cols-3"></div>
            </div>
            <div class="border-l-1 px-3">
              <div href="#">
                <h5
                  class="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  ข้อมูลไกด์
                </h5>
              </div>
              <div
                v-for="(guide, indexg) in tourfiltered.guide"
                key="indexg"
                class="grid grid-cols-2 gap-2"
              >
                <div>{{ guide.name }}</div>
              <div v-for="(guide, indexg) in finddataGuide()" key="indexg" class="grid grid-cols-2 gap-2">
                <div>{{ guide.guidename }}</div>
                <div>{{ guide.phone }}</div>
              </div>
            </div>
            <div class="border-l-1 px-3">
              <div href="#">
                <h5
                  class="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  ข้อมูลพาหนะ
                </h5>
              </div>
              <div class="grid grid-cols-3 gap-2">
                <div>พาหนะขาไป :</div>
                <div v-for="go in vehiclecheck('ขาไป')" class="flex col-span-2">
                  {{ go.name }}
                </div>
                <div>พาหนะขากลับ :</div>
                <div v-for="go in vehiclecheck('ขากลับ')" class="flex col-span-2">
                  {{ go.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end ข้อมูลทัวร์ -->
      </div>

      <!-- ตารางลูกทัวร์ -->
      <div
        class="mt-6 block max-w-full p-2 pb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div
          class="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4"
        >
          <div class="flex justify-start">
            <div>
              <h3
                class="mb-2 mr-5 text-2xl font-bold text-gray-900 dark:text-white w-auto"
              >
                รายชื่อลูกทัวร์
              </h3>
            </div>
            <div class="w-full md:w-1/2">
              <form class="flex items-center">
                <label for="simple-search" class="sr-only"
                  >ค้นหาข้อมูลลูกทัวร์</label
                >
                <div class="relative w-100">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="ค้นหาลูกทัวร์"
                  />
                </div>
              </form>
            </div>
          </div>
          <div class="mt-8 flex justify-end mb-4">
            <!-- Modal toggle -->
            <button>
              <NuxtLink
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                type="button"
                class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m6-6H6"
                  ></path>
                </svg>
                เพิ่มลูกทัวร์
              </NuxtLink>
            </button>

            <NuxtLink
              href="/paper/sticker"
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm ml-2 px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              พิมพ์รายชื่อติด Tag
            </NuxtLink>

            <!-- Main modal -->
            <div
              id="authentication-modal"
              tabindex="-1"
              aria-hidden="true"
              class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative w-full max-w-6xl max-h-full">
                <!-- Modal content -->
                <div
                  class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                >
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
                  </button>
                  <div class="px-6 py-6 lg:px-8">
                    <h3
                      class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                    >
                      เพิ่มลูกทัวร์
                    </h3>
                    <hr class="my-5" />
                    <form action="#">
                      <div
                        class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5"
                      >
                        <div class="w-full">
                          <label
                            for="firstname"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >ชื่อ</label
                          >
                          <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            v-model="memberdata.name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder=""
                            required
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="lastname"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >สกุล</label
                          >
                          <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            v-model="memberdata.namel"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>
                      <div
                        class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5"
                      >
                        <div class="w-full">
                          <label
                            for="firstname2"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >ชื่อภาษาอังกฤษ</label
                          >
                          <input
                            type="text"
                            name="firstname2"
                            id="firstname2"
                            v-model="memberdata.nameengf"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder=""
                            required
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="Lastname2"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >นามสกุลภาษาอังกฤษ</label
                          >
                          <input
                            type="text"
                            name="Lastname2"
                            id="Lastname2"
                            v-model="memberdata.nameengl"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>
                      <div
                        class="grid gap-4 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5"
                      >
                        <div class="sm:col-span-2">
                          <label
                            for="nationality"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >สัญชาติ</label
                          >
                          <input
                            type="text"
                            name="nationality"
                            id="nationality"
                            v-model="memberdata.nationa"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder=""
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="gender"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >เพศ</label
                          >
                          <select
                            id="gender"
                            v-model="memberdata.gender"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                            <option selected></option>
                            <option value="ชาย">ชาย</option>
                            <option value="หญิง">หญิง</option>
                            <option value="อื่นๆ">อื่นๆ</option>
                          </select>
                        </div>
                        <div class="w-full">
                          <label
                            for="birthdate"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >วัน เดือน ปี เกิด</label
                          >
                          <div class="w-full relative">
                            <div
                              class="w-full absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                            >
                              <svg
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <input
                              datepicker
                              datepicker-autohide
                              type="text"
                              v-model="memberdata.dob"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="เลือกวันเกิด"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="grid gap-4 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5"
                      >
                        <div class="w-full">
                          <label
                            for="identification"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >หมายเลขบัตรประชาชน</label
                          >
                          <input
                            type="text"
                            name="identification"
                            id="identification"
                            v-model="memberdata.idencard"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder=""
                            required
                          />
                        </div>

                        <div class="w-full">
                          <label
                            for="phone"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >เบอร์โทรศัพท์</label
                          >
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            v-model="memberdata.phone"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder=""
                            required
                          />
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="category"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >ประเภทเตียง</label
                          >
                          <select
                            id="category"
                            v-model="memberdata.bedtype"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          >
                            <option selected></option>
                            <option value="เดี่ยว">เดี่ยว</option>
                            <option value="คู่">คู่</option>
                          </select>
                        </div>
                      </div>
                      <div
                        class="grid gap-4 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5"
                      >
                        <div class="w-full">
                          <label
                            for="passport"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >หมายเลขพาสปอร์ต</label
                          >
                          <input
                            type="text"
                            name="passport"
                            id="passport"
                            v-model="memberdata.passport"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder=""
                            required
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="check"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >ตรวจลงตราเลขที่</label
                          >
                          <input
                            type="text"
                            name="check"
                            id="check"
                            v-model="memberdata.stampnumber"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder=""
                            required
                          />
                        </div>

                        <div class="w-full">
                          <label
                            for="startenddate"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >วันออกบัตร</label
                          >
                          <div date-rangepicker class="flex items-center">
                            <div class="w-full relative">
                              <div
                                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <input
                                name="start"
                                type="text"
                                v-model="memberdata.dateofissue"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="เลือกวันที่"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="w-full">
                          <label
                            for="startenddate"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >วันหมดอายุ</label
                          >
                          <div date-rangepicker class="flex items-center">
                            <div class="w-full relative">
                              <div
                                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </div>
                              <input
                                name="end"
                                type="text"
                                v-model="memberdata.dateofexpiry"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="เลือกวันที่"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5"
                      >
                        <div>
                          <label
                            for="brand"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >ที่อยู่ตามบัตรประชาชน</label
                          >
                          <input
                            type="text"
                            name="passport"
                            id="passport"
                            v-model="memberdata.address"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="brand"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >หมายเหตุ</label
                          >
                          <input
                            type="text"
                            name="check"
                            id="check"
                            v-model="memberdata.comment"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>
                    </form>
                    <form class="space-y-6 flex justify-center" action="#">
                      <button
                        type="button"
                        @click="createmember"
                        class="w-50 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        เพิ่ม
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="mt-2 relative overflow-x-auto border sm:rounded-lg">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">ลำดับ</th>
                  <th scope="col" class="px-6 py-3">ชื่อ-นามสกุล</th>
                  <th scope="col" class="px-6 py-3">หมายเลขบัตรประชาชน</th>
                  <th scope="col" class="px-6 py-3">หมายเลขพาสปอร์ต</th>
                  <th scope="col" class="px-6 py-3">สัญชาติ</th>
                  <th scope="col" class="px-6 py-3">เพศ</th>
                  <th scope="col" class="px-6 py-3">ประเภทเตียง</th>
                  <th scope="col" class="px-6 py-3 text-center">เพิ่มเติม</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!tourfiltered.member.length">
                  <td :colspan="8" class="text-center text-xl pt-5">
                    ไม่มีข้อมูล
                  </td>
                </tr>
                <tr
                  v-for="(tour, index) in tourfiltered.member"
                  key="indexm"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td class="px-6 py-4">
                    {{ index + 1 }}
                  </td>
                  <td class="px-6 py-4">
                    {{ tour.name }} <br />
                    {{ tour.nameeng }}
                  </td>
                  <td class="px-6 py-4">{{ tour.idencard }}</td>
                  <td class="px-6 py-4">{{ tour.passport }}</td>
                  <td class="px-6 py-4">{{ tour.nationa }}</td>
                  <td class="px-6 py-4">{{ tour.gender }}</td>
                  <td class="px-6 py-4">{{ tour.bedtype }}</td>
                  <td class="px-6 py-4 flex justify-between">
                    <!-- Modal toggle -->
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      data-modal-target="staticModal"
                      data-modal-toggle="staticModal"
                      class="w-5 h-5 text-gray-500 hover:text-gray-800"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
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
                      data-modal-target="editModal"
                      data-modal-toggle="editModal"
                      class="w-5 h-5 text-blue-500 hover:text-blue-800"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
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
                      data-modal-target="delete-modal"
                      data-modal-toggle="delete-modal"
                      class="w-5 h-5 text-red-500 hover:text-red-800"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      ></path>
                    </svg>

                    <!-- Main modal -->
                    <div
                      id="staticModal"
                      data-modal-backdrop="static"
                      tabindex="-1"
                      aria-hidden="true"
                      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
                    >
                      <div class="relative w-full h-full max-w-3xl md:h-auto">
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
                              รายละเอียดลูกทัวร์ ลำดับที่: 1
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
                            <div class="grid grid-cols-2 gap-4">
                              <p
                                class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                              >
                                ชื่อ-นามสกุล (ภาษาไทย): มะยม ขมจัง
                              </p>
                              <p
                                class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                              >
                                ชื่อ-นามสกุล (ภาษาอังกฤษ): Mayom Khomjung
                              </p>
                              <p
                                class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                              >
                                เพศ: ชาย
                              </p>
                              <p
                                class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                              >
                                วันเดือนปีเกิด: 18/10/2538
                              </p>
                              <p
                                class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                              >
                                สัญชาติ: ไทย
                              </p>
                              <p
                                class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                              >
                                หมายเลขบัตรประชาชน: 1-339988672-57-9
                              </p>
                              <p
                                class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                              >
                                หมายเลขพาสปอร์ต: 1-339988-672
                              </p>
                              <p
                                class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                              >
                                ตรวจลงตราเลขที: 455/55
                              </p>
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
                            </div>

                            <p
                              class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                            >
                              ประเภทเตียง: คู่
                            </p>
                            <p
                              class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                            >
                              หมายเหตุ: ห้องน้ำไม่สะอาด
                            </p>
                            <!-- คอมเมนต์-->
                            <form class="space-y-6" action="#">
                              <hr
                                class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"
                              />
                              <h3
                                class="text-xl font-semibold text-gray-900 dark:text-white"
                              >
                                คอมเมนต์ร้านอาหาร
                              </h3>

                              <div class="relative">
                                <div
                                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                                >
                                  <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </div>
                                <input
                                  datepicker
                                  datepicker-autohide
                                  type="text"
                                  class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="เลือกวันที่"
                                />
                              </div>

                              <div>
                                <label
                                  for="name"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >ชื่อเรื่อง</label
                                >
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  placeholder="หัวข้อเรื่อง"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  for="message"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  คอมเมนต์</label
                                >
                                <textarea
                                  id="message"
                                  rows="4"
                                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="เขียนแสดงความคิดเห็น"
                                ></textarea>
                              </div>
                            </form>
                          </div>

                          <!-- Modal footer -->
                          <div
                            class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
                          >
                            <button
                              data-modal-hide="cm_restaurant"
                              type="button"
                              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              เพิ่มคอมเมนต์
                            </button>
                            <button
                              data-modal-hide="cm_restaurant"
                              type="button"
                              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >
                              ยกเลิก
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="editModal"
                      tabindex="-1"
                      aria-hidden="true"
                      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                    >
                      <div class="relative w-full max-w-2xl max-h-full">
                        <!-- Modal content -->
                        <div
                          class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                        >
                          <button
                            type="button"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="editModal"
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
                          </button>
                          <div class="px-6 py-6 lg:px-8">
                            <h3
                              class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                            >
                              แก้ไขข้อมูลลูกทัวร์
                            </h3>
                            <hr class="my-5" />
                            <form action="#">
                              <div
                                class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5"
                              >
                                <div class="w-full">
                                  <label
                                    for="firstname"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >ชื่อ</label
                                  >
                                  <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    v-model="memberdata.name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder=""
                                    required
                                  />
                                </div>
                                <div class="w-full">
                                  <label
                                    for="lastname"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >สกุล</label
                                  >
                                  <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    v-model="memberdata.namel"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder=""
                                    required
                                  />
                                </div>
                              </div>
                              <div
                                class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5"
                              >
                                <div class="w-full">
                                  <label
                                    for="firstname2"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >ชื่อภาษาอังกฤษ</label
                                  >
                                  <input
                                    type="text"
                                    name="firstname2"
                                    id="firstname2"
                                    v-model="memberdata.nameengf"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder=""
                                    required
                                  />
                                </div>
                                <div class="w-full">
                                  <label
                                    for="Lastname2"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >นามสกุลภาษาอังกฤษ</label
                                  >
                                  <input
                                    type="text"
                                    name="Lastname2"
                                    id="Lastname2"
                                    v-model="memberdata.nameengl"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder=""
                                    required
                                  />
                                </div>
                              </div>
                              <div
                                class="grid gap-4 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5"
                              >
                                <div class="sm:col-span-2">
                                  <label
                                    for="nationality"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >สัญชาติ</label
                                  >
                                  <input
                                    type="text"
                                    name="nationality"
                                    id="nationality"
                                    v-model="memberdata.nationa"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder=""
                                    required
                                  />
                                </div>
                                <div>
                                  <label
                                    for="gender"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >เพศ</label
                                  >
                                  <select
                                    id="gender"
                                    v-model="memberdata.gender"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  >
                                    <option selected></option>
                                    <option value="ชาย">ชาย</option>
                                    <option value="หญิง">หญิง</option>
                                    <option value="อื่นๆ">อื่นๆ</option>
                                  </select>
                                </div>
                                <div class="w-full">
                                  <label
                                    for="birthdate"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >วัน เดือน ปี เกิด</label
                                  >
                                  <div class="w-full relative">
                                    <div
                                      class="w-full absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                                    >
                                      <svg
                                        aria-hidden="true"
                                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </div>
                                    <input
                                      datepicker
                                      datepicker-autohide
                                      type="text"
                                      v-model="memberdata.dob"
                                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="เลือกวันเกิด"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                class="grid gap-4 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5"
                              >
                                <div class="w-full">
                                  <label
                                    for="identification"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >หมายเลขบัตรประชาชน</label
                                  >
                                  <input
                                    type="text"
                                    name="identification"
                                    id="identification"
                                    v-model="memberdata.idencard"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder=""
                                    required
                                  />
                                </div>

                                <div class="w-full">
                                  <label
                                    for="phone"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >เบอร์โทรศัพท์</label
                                  >
                                  <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    v-model="memberdata.phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder=""
                                    required
                                  />
                                </div>
                                <div class="sm:col-span-2">
                                  <label
                                    for="category"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >ประเภทเตียง</label
                                  >
                                  <select
                                    id="category"
                                    v-model="memberdata.bedtype"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  >
                                    <option selected></option>
                                    <option value="ชาย">เดี่ยว</option>
                                    <option value="หญิง">คู่</option>
                                  </select>
                                </div>
                              </div>
                              <div
                                class="grid gap-4 mb-4 sm:grid-cols-4 sm:gap-6 sm:mb-5"
                              >
                                <div class="w-full">
                                  <label
                                    for="passport"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >หมายเลขพาสปอร์ต</label
                                  >
                                  <input
                                    type="text"
                                    name="passport"
                                    id="passport"
                                    v-model="memberdata.passport"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder=""
                                    required
                                  />
                                </div>
                                <div class="w-full">
                                  <label
                                    for="check"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >ตรวจลงตราเลขที่</label
                                  >
                                  <input
                                    type="text"
                                    name="check"
                                    id="check"
                                    v-model="memberdata.stampnumber"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder=""
                                    required
                                  />
                                </div>

                                <div class="w-full">
                                  <label
                                    for="startenddate"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >วันออกบัตร</label
                                  >
                                  <div
                                    date-rangepicker
                                    class="flex items-center"
                                  >
                                    <div class="w-full relative">
                                      <div
                                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                                      >
                                        <svg
                                          aria-hidden="true"
                                          class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd"
                                          ></path>
                                        </svg>
                                      </div>
                                      <input
                                        name="start"
                                        type="text"
                                        v-model="memberdata.dateofissue"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="เลือกวันที่"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="w-full">
                                  <label
                                    for="startenddate"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >วันหมดอายุ</label
                                  >
                                  <div
                                    date-rangepicker
                                    class="flex items-center"
                                  >
                                    <div class="w-full relative">
                                      <div
                                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                                      >
                                        <svg
                                          aria-hidden="true"
                                          class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd"
                                          ></path>
                                        </svg>
                                      </div>
                                      <input
                                        name="end"
                                        type="text"
                                        v-model="memberdata.dateofexpiry"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="เลือกวันที่"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5"
                              >
                                <div>
                                  <label
                                    for="brand"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >ที่อยู่ตามบัตรประชาชน</label
                                  >
                                  <input
                                    type="text"
                                    name="passport"
                                    id="passport"
                                    v-model="memberdata.address"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    required
                                  />
                                </div>
                                <div class="w-full">
                                  <label
                                    for="brand"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >หมายเหตุ</label
                                  >
                                  <input
                                    type="text"
                                    name="check"
                                    id="check"
                                    v-model="memberdata.comment"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder=""
                                    required
                                  />
                                </div>
                              </div>
                            </form>
                            <form
                              class="space-y-6 flex justify-center"
                              action="#"
                            >
                              <button
                                type="button"
                                @click="createmember"
                                class="w-50 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                บันทึก
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="delete-modal"
                      tabindex="-1"
                      class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                    >
                      <div class="relative w-full max-w-md max-h-full">
                        <div
                          class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                        >
                          <button
                            type="button"
                            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-hide="delete-modal"
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
                          </button>
                          <div class="p-6 text-center">
                            <svg
                              aria-hidden="true"
                              class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            <h3
                              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                            >
                              ต้องการลบรายชื่อ
                              <p class="text-black underline">มะยม ขมจัง</p>
                            </h3>
                            <button
                              data-modal-hide="delete-modal"
                              type="button"
                              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-10 py-2.5 text-center mr-2"
                            >
                              ลบ
                            </button>
                            <button
                              data-modal-hide="delete-modal"
                              type="button"
                              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-8 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >
                              ยกเลิก
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <nav
              class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span
                class="text-sm font-normal text-gray-500 dark:text-gray-400"
              >
                แสดง
                <span class="font-semibold text-gray-900 dark:text-white"
                  >1-8</span
                >
                จาก
                <span class="font-semibold text-gray-900 dark:text-white"
                  >10</span
                >
              </span>
              <ul class="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span class="sr-only">Previous</span>
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >1</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >2</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >3</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >...</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >100</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span class="sr-only">Next</span>
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <!-- all modal content -->

      <!-- modal ของข้อมูลทัวร์ -->
      <div
        id="tourdataModal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-4xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div
              class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
            >
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                รายละเอียดทั้งหมด
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="tourdataModal"
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
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
              <div>
                <h5
                  class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  ข้อมูลทัวร์
                </h5>
                <div class="grid grid-cols-2 gap-2">
                  <div class="col-span-2">
                    ชื่อทริปทัวร์: องค์การบริหารส่วนตำบลโพนงาม
                  </div>
                  <div>โปรแกรมทัวร์: กาญจนบุรี-เพชรบุรี</div>
                  <div>วันที่เดินทาง: 29/03/2566 ถึง 29/03/2566</div>
                  <div>จำนวน: 4 วัน 2 คืน</div>
                  <div>จำนวนลูกทัวร์: 3 คน</div>
                  <div>หมายเหตุ: สบายตัวมากๆเลยนะ ถ้าไปอีกรอบ จะหาตัวท็อป</div>
                </div>
              </div>
              <hr />
              <div>
                <h5
                  class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  ข้อมูลโรงแรม
                </h5>
                <div class="grid grid-cols-3 gap-2">
                  <div>โรงแรมริเวอร์แคว กาญจนบุรี</div>
                  <div>วันที่เช็คอินน์: 30/03/2566</div>
                  <div>วันที่เช็คเอ้าท์: 31/03/2566</div>
                  <div class="col-span-3 mb-1">จำนวนห้องพัก: 45</div>
                  <div>โรงแรมเอเชีย ชะอำ</div>
                  <div>วันที่เช็คอินน์: 31/03/2566</div>
                  <div>วันที่เช็คเอ้าท์: 01/04/2566</div>
                  <div class="col-span-3 mb-1">จำนวนห้องพัก: 45</div>
                </div>
              </div>
              <hr />
              <div>
                <h5
                  class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  ข้อมูลไกด์
                </h5>
                <div class="grid grid-cols-2 gap-2">
                  <div>นายขวัญชัย บูรณฤกษ์</div>
                  <div>0833076329</div>
                  <div>นายพิษณุ บุญลี</div>
                  <div>0632452369</div>
                </div>
              </div>
              <hr />
              <div>
                <h5
                  class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  ข้อมูลพาหนะ
                </h5>
                <div class="grid grid-cols-2 gap-2">
                  <div>พาหนะขาไป :</div>
                  <div>รถทัวร์นิลผกา 1-พิกุล 2</div>
                  <div>พาหนะขากลับ :</div>
                  <div>รถทัวร์นิลผกา 1-พิกุล 2</div>
                </div>
              </div>
            </div>
            <!-- Modal footer -->
            <div
              class="flex justify-center items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
            >
              <button
                data-modal-hide="tourdataModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- คอมเมนต์ร้านอาหาร -->
    <div
      id="cm_restaurant"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-lg max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              คอมเมนต์ร้านอาหาร
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="cm_restaurant"
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
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <form class="space-y-6" action="#">
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  datepicker
                  datepicker-autohide
                  type="text"
                  class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เลือกวันที่"
                />
              </div>

              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ชื่อเรื่อง</label
                >
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="หัวข้อเรื่อง"
                  required
                />
              </div>
              <div>
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  คอมเมนต์</label
                >
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เขียนแสดงความคิดเห็น"
                ></textarea>
              </div>
            </form>
          </div>
          <!-- Modal footer -->
          <div
            class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              data-modal-hide="cm_restaurant"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              เพิ่มคอมเมนต์
            </button>
            <button
              data-modal-hide="cm_restaurant"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--end คอมเมนต์ร้านอาหาร -->

    <!-- คอมเมนต์สถานที่ท่องเทียว -->
    <div
      id="cm_location"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-lg max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              คอมเมนต์สถานที่ท่องเทียว
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="cm_location"
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
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <form class="space-y-6" action="#">
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  datepicker
                  datepicker-autohide
                  type="text"
                  class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เลือกวันที่"
                />
              </div>

              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ชื่อเรื่อง</label
                >
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="หัวข้อเรื่อง"
                  required
                />
              </div>
              <div>
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  คอมเมนต์</label
                >
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เขียนแสดงความคิดเห็น"
                ></textarea>
              </div>
            </form>
          </div>
          <!-- Modal footer -->
          <div
            class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              data-modal-hide="cm_location"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              เพิ่มคอมเมนต์
            </button>
            <button
              data-modal-hide="cm_location"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--end คอมเมนต์สถานที่ท่องเทียว -->

    <!-- คอมเมนต์เส้นทาง -->
    <div
      id="cm_path"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-lg max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              คอมเมนต์เส้นทาง
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="cm_path"
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
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <form class="space-y-6" action="#">
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  datepicker
                  datepicker-autohide
                  type="text"
                  class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เลือกวันที่"
                />
              </div>

              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ชื่อเรื่อง</label
                >
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="หัวข้อเรื่อง"
                  required
                />
              </div>
              <div>
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  คอมเมนต์</label
                >
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เขียนแสดงความคิดเห็น"
                ></textarea>
              </div>
            </form>
          </div>
          <!-- Modal footer -->
          <div
            class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              data-modal-hide="cm_path"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              เพิ่มคอมเมนต์
            </button>
            <button
              data-modal-hide="cm_path"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--end คอมเมนต์เส้นทาง -->

    <!-- คอมเมนต์โรงแรม -->
    <div
      id="cm_hotel"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-lg max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              คอมเมนต์โรงแรม
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="cm_hotel"
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
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <form class="space-y-6" action="#">
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  datepicker
                  datepicker-autohide
                  type="text"
                  class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เลือกวันที่"
                />
              </div>

              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ชื่อเรื่อง</label
                >
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="หัวข้อเรื่อง"
                  required
                />
              </div>
              <div>
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  คอมเมนต์</label
                >
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เขียนแสดงความคิดเห็น"
                ></textarea>
              </div>
            </form>
          </div>
          <!-- Modal footer -->
          <div
            class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              data-modal-hide="cm_hotel"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              เพิ่มคอมเมนต์
            </button>
            <button
              data-modal-hide="cm_hotel"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--end คอมเมนต์โรงแรม -->

    <!-- คอมเมนต์ทัวร์ -->
    <div
      id="cm_tour"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-lg max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              คอมเมนต์ทัวร์
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="cm_tour"
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
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <form class="space-y-6" action="#">
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  datepicker
                  datepicker-autohide
                  type="text"
                  class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เลือกวันที่"
                />
              </div>

              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >ชื่อเรื่อง</label
                >
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="หัวข้อเรื่อง"
                  required
                />
              </div>
              <div>
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  คอมเมนต์</label
                >
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="เขียนแสดงความคิดเห็น"
                ></textarea>
              </div>
            </form>
          </div>
          <!-- Modal footer -->
          <div
            class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              data-modal-hide="cm_tour"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              เพิ่มคอมเมนต์
            </button>
            <button
              data-modal-hide="cm_tour"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--end คอมเมนต์ทัวร์ -->
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite/lib/esm/components";
import { storeToRefs } from "pinia";
import { useDatatour } from "../stores/tour";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

const store = useDatatour();
const { tourfiltered, hoteldata, guidedata } = storeToRefs(store);

const memberdata = ref({
  idmember: new Date().getTime(),
  name: "",
  namel: "",
  nameengf: "",
  nameengl: "",
  nationa: "",
  gender: "",
  dob: "",
  idencard: "",
  phone: "",
  bedtype: "",
  passport: "",
  stampnumber: "",
  dateofissue: "",
  dateofexpiry: "",
  address: "",
  comment: "",
});

function findnameHotel( hotel_id: string) {
  const hotelfil = hoteldata.value.find(item => item.hotel_id == hotel_id);
  // console.log("hotelfil",hotelfil.name);
  return hotelfil.name;
}

function finddataGuide() {
  // console.log("guide",Object.values(tourfiltered.value.guide))
  const datafil = tourfiltered.value.guide.map(item2 => item2.guide_id);
  return guidedata.value.filter(item => datafil.includes(item.guideid));
}

function vehiclecheck(type: string) {
  const datavehicle = tourfiltered.value.vehicle.filter(
    (item) => item.type == type || item.type == "ไปกลับ"
  );
  console.log("???",datavehicle)
  return datavehicle;
}
// console.log(tourfiltered.value);
const vehigo = computed(() =>
  tourfiltered.value.vehicle.filter(
    (item) => item.type == "ไป" || item.type == "ไปกลับ"
  )
);
const vehiback = computed(() =>
  tourfiltered.value.vehicle.filter(
    (item) => item.type == "กลับ" || item.type == "ไปกลับ"
  )
);

function createmember() {
  console.log("send", memberdata.value);
  store.newmember(memberdata.value);
}
</script>

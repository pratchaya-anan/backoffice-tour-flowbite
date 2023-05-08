<template>
  <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
    <div class="w-[210mm] h-min-[297mm] p-[5mm] my-1 mx-auto border-1 solid rounded bg-white drop-shadow">
      <div class="grid grid-rows-2 m-5">
        <img class="w-25" src="../../assets/images/ll-01.png" alt="Logo" />
        <div class="grid grid-cols-3 text-sm">
          <div class="col-span-2">
            <div>ห้างหุ้นส่วนจำกัด นิลผกา</div>
            <div>49/175 ม.5 ต.หนองบัว อ.เมืองอุดรธานี จ.อุดรธานี 41000</div>
            <div>เลขประจำตัวผู้เสียภาษี: 413558001156 | โทร.098-1047644</div>
            <div class="text-blue-400">www.facebook.com/Jampahomtour</div>
          </div>
          <div class="grid grid-cols-3">
            <div class="col-span-3 font-bold text-center text-base">
              ใบเสนอราคา/ยืนยันการสั่งซื้อ
            </div>
            <div class="col-span-3 text-center">Quatation</div>
            <div class="font-bold">เลขที่:</div>
            <div class="col-span-2 text-right">0841142174178</div>
            <div class="font-bold">วันที่:</div>
            <div class="col-span-2 text-right">24/03/2566</div>
          </div>
        </div>
      </div>
      <hr class="col-span-3 mx-5" />
      <div class="col-span-2 grid grid-cols-3 m-5 text-xs">
        <div class="col-span-2">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">ชื่อลูกค้า:</div>
            <div class="col-span-2">{{ idfiltered.customer_name }}</div>
            <div class="col-span-1 font-bold">ชื่อผู้ติดต่อ:</div>
            <div class="col-span-2">{{ idfiltered.contact_name }}</div>
            <div class="col-span-1 font-bold">ที่อยู่:</div>
            <div class="col-span-2">
              {{ idfiltered.address }}
            </div>
            <div class="col-span-1 font-bold">ID TAX:</div>
            <div class="col-span-2">{{ idfiltered.tax_number }}</div>
            <div class="col-span-1 font-bold">โทร:</div>
            <div class="col-span-2">{{ idfiltered.phone }}</div>
            <div class="col-span-1 font-bold">Email:</div>
            <div class="col-span-2">{{ idfiltered.email }}</div>
          </div>
        </div>
        <div class="border-l px-5">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">รหัสลูกค้า:</div>
            <div class="col-span-2 text-right"></div>
            <div class="col-span-1 font-bold">ผู้เสนอขาย:</div>
            <div class="col-span-2 text-right">{{ idfiltered.email }}</div>
            <div class="col-span-1 font-bold">ฝ่าย:</div>
            <div class="col-span-2 text-right">{{ idfiltered.faction }}</div>
            <div class="col-span-2 font-bold">ยืนยันราคาภายใน:</div>
            <div class="col-span-1 text-right">{{ idfiltered.confirm_date }}</div>
            <div class="col-span-1 font-bold">วันส่งของ:</div>
            <div class="col-span-2 text-right">{{ idfiltered.send_date }}</div>
          </div>
        </div>
      </div>
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
          <tr class="h-10 text-xs" v-for="(data, index) in idfiltered.product" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ data.product_code }}</td>
            <td>{{ data.product_list }}</td>
            <td>{{ data.quantity }}</td>
            <td>{{ data.unit_price }}</td>
            <td>{{ data.product_discount }}</td>
            <td>{{ data.product_discount }}</td>
            <td>{{ data.tax }}</td>
          </tr>
        </table>
      </div>

      <div class="grid grid-cols-3 text-xs p-2 border-b-1 border-black">
        <div class="col-span-2">
          <div class="font-bold">หมายเหตุ:</div>
          <div>
            กำหนดยืนราคา 15 วัน <br />
            จึงเรียนมาเพื่อโปรดพิจารณาและหวังเป็นอย่างยิ่งว่าจะได้รับการพิจารณาสั่งซื้อจากท่าน
            ขอขอบพระคุณมา ณ ที่นี้
          </div>
          <div class="font-bold">ดังรายละเอียดธนาคารดังต่อไปนี้ :</div>
          <div>
            1.กรุณาชำระเงิน ค่ามัดจำเบื้องต้นไม่ต่ำกว่า 40% ของราคาที่เสนอ
            โดยชำระเงินก่อนการติดตั้งอย่างน้อย 7 วัน <br />
            2.หลังติดตั้งและใช้งานได้เรียบร้อยแล้วให้ชำระเงินส่วนที่เหลือ
          </div>
        </div>

        <div class="grid grid-cols-2 p-2">
          <div>มัดจำ</div>
          <div class="text-right">5000 บาท</div>
          <div>รวมเงิน</div>
          <div class="text-right">59920 บาท</div>
          <div>ส่วนลดสินค้า</div>
          <div class="text-right">0 บาท</div>
          <div>มูลค่าสินค้า</div>
          <div class="text-right">56000 บาท</div>
          <div>ภาษีมูลค่าเพิ่ม 7 %</div>
          <div class="text-right">3920 บาท</div>
          <div class="font-bold">จำนวนเงินทั้งสิ้น</div>
          <div class="text-right font-bold">59920 บาท</div>
        </div>
      </div>

      <div class="px-5 flex justify-end">
        <div class="px-5 text-center text-xs">
          ข้าพเจ้าเห็นชอบตามรายการที่เสนอและ <br />
          ขอสั่งซื้อตามรายละเอียดนี้ทุกประการ
        </div>
      </div>

      <div class="grid grid-cols-4 mt-25 text-xs">
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
              <NuxtLink to="/EditquotationForm" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button"
                class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
                </svg>
                แก้ไขเอกสารใบเสนอราคา
              </NuxtLink>
            </button>

            <NuxtLink href="#" type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm ml-2 px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              สั่งพิมพ์ หรือ บันทึกเป็น PDF
            </NuxtLink>
            </div>
  </section>
  <!-- <div class="flex bg-gray-900"></div> -->
</template>
<script setup lg="ts">
import { storeToRefs } from "pinia";
import { quotationForm } from '/stores/quotationForm';

const store = quotationForm();
const { idfiltered } = storeToRefs(store);

</script>
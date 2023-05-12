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
            <div class="col-span-3 font-bold text-center text-base">ใบประมาณการเบิกเงินสดย่อย</div>
            <div class="col-span-3 text-center">Disbursement Estimate</div>
            <div class="font-bold">เลขที่:</div>
            <div class="col-span-2 text-right">2665519328591</div>
            <div class="font-bold">วันที่:</div>
            <div class="col-span-2 text-right">24/03/2566</div>
          </div>
        </div>
      </div>
      <hr class="col-span-3 mx-5">

      <!-- ข้อมูลฝั่งซ้าย -->
      <div class="col-span-2 grid grid-cols-2 m-5  text-xs">
        <div class="col-span-1">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">ชื่อผู้ขอเบิก:</div>
            <div class="col-span-2 ">{{ idfiltered.name }}</div>
            <div class="col-span-1 font-bold">แผนก:</div>
            <div class="col-span-2 ">{{ idfiltered.department }}</div>
            <div class="col-span-1 font-bold">วัตถุประสงค์การยืมเงินทดลองจ่าย:</div>
            <div class="col-span-2 ">{{ idfiltered.objectives }}</div>
          </div>
        </div>

        <!-- ข้อมูลฝั่งขวา -->
        <div class="border-l px-5">
          <div class="grid grid-cols-2">
            <div class="col-span-1 font-bold">วันที่ต้องการใช้เงิน:</div>
            <div class="col-span-1 text-right">{{ idfiltered.date }}</div>
            <div class="col-span-1 font-bold">โครงการ:</div>
            <div class="col-span-1 text-right">องค์การบริหารส่วนตำบลโพนงาม</div>
          </div>
        </div>
      </div>

      <!-- ตาราง -->
      <div class="min-h-100 border-b-1 border-black">
        <table class="w-full text-center">
          <tr class="h-8 border-y-1 border-black text-center text-sm">
            <th class="text-center">ลำดับ</th>
            <th>รายละเอียดค่าใช้จ่าย</th>
            <th>ประเภทค่าใช้จ่าย</th>
            <th>ราคา</th>
            <th>จำนวน</th>
            <th>ยอดสุทธิ</th>
          </tr>
          <tr class="h-10 text-xs" v-for="(data, indexd) in idfiltered.details " :key="indexd">
            <td>{{ indexd+1 }}</td>
            <td>{{ data.detail }}</td>
            <td>{{ data.type }}</td>
            <td>{{ data.price }}</td>
            <td>{{ data.quantity }}</td>
            <td>{{ data.price*data.quantity }}</td>
          </tr>
        </table>
      </div>

      <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
      <div class="grid grid-cols-3 text-xs p-2 border-b-1 border-black">
        <div class="col-span-2">
          <div class="flex">
            <div class="font-black w-30">ตัวอักษร:</div>
            <div class="font-black">ห้าหมื่นเก้าพันเก้าร้อยยี่สิบบาทถ้วน</div>
          </div>
          <div class="font-black">ผู้อนุมัติ (แบบอิเล็กทอรนิกส์):</div>
          <div class="text-xs">
            ข้าพเจ้าขอรับรองว่ารายการที่กล่าวมาข้างต้นเป็นความจริง พร้อมหลักฐานการจ่าย/แผนประกอบการที่ส่งมา
            รวมทั้งจำนวนเงินที่ขอเบิกถูกต้องตามระเบียบบริษัททุกประการ
          </div>
        </div>

        <!-- สรุปรายการ(ด้านขวา) -->
        <div class="grid grid-cols-2 p-2">
          <div class="font-bold">รวมสุทธิ</div>
          <div class="text-right font-bold">{{ totalPrice }}</div>
        </div>
      </div>

      <div class="grid grid-cols-4 mt-50 text-xs">
        <div class="text-center border-b-1 border-black mx-5">
          <div>ผู้ขอเบิก</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b-1 border-black mx-5">
          <div>ผู้อนุมัติ/ตรวจสอบ</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b-1 border-black mx-5">
          <div>ผู้รับเงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b-1 border-black mx-5">
          <div>ผู้จ่ายเงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
      </div>

    </div>
  </section>
  <!-- <div class="flex bg-gray-900"></div> -->
</template>
<script setup lg="ts">
import { storeToRefs } from "pinia";
import { estimate } from '/stores/estimate';

const store = estimate();
const { idfiltered } = storeToRefs(store);
const { totalPrice } = storeToRefs(store);


</script>
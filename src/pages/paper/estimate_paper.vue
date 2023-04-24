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
            <div class="col-span-3 font-bold text-center text-base">ใบเคลียร์ประมาณการเงินสดย่อย</div>
            <div class="col-span-3 text-center">Estimate Clearing</div>
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
          <div class="grid grid-cols-2">
            <div class="col-span-1 font-bold">ผู้ขอเคลียร์:</div>
            <div class="col-span-1 ">ศศิศ วิรัตน์จินดา</div>
            <div class="col-span-1 font-bold">อ้างอิงถึงเลขที่ใบขอเคลียร์เงินทดลองจ่าย:</div>
            <div class="col-span-1 ">2665519328591</div>

          </div>
        </div>

        <!-- ข้อมูลฝั่งขวา -->
        <div class="border-l px-5">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">ฝ่าย/แผนก:</div>
            <div class="col-span-2 text-right">บริการ</div>
            <div class="col-span-1 font-bold">โครงการ:</div>
            <div class="col-span-2 text-right">เที่ยวเกาะ เลาะรัก</div>
          </div>
        </div>
      </div>

      <!-- ตาราง -->
      <div class="min-h-100 border-b-1 border-black">
        <table class="w-full text-center">
          <tr class="h-8 border-y-1 border-black text-center text-sm">
            <th class="text-center">ลำดับ</th>
            <th>วันที่ใบเสร็จ</th>
            <th>รายละเอียดค่าใช้จ่าย</th>
            <th>เลขที่ใบเสร็จ</th>
            <th>เลขประจำตัวผู้เสียภาษี</th>
            <th>ยอดสุทธิ</th>
          </tr>
          <tr class="h-10 text-xs">
            <td>1</td>
            <td>25/04/2566</td>
            <td>น้ำแข็งรถคันที่หนึ่ง</td>
            <td>123</td>
            <td>1234</td>
            <td>700</td>
          </tr>
        </table>
      </div>

      <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
      <div class="grid grid-cols-3 text-xs p-2 border-b-1 border-black">
        <div class="col-span-2">
          <div class="flex">
            <div class="font-black mr-5">รายละเอียดโครงการ/กิจกรรม:</div>
            <div > เที่ยวที่ไหน</div>
          </div>
          <div class="flex">
            <div class="font-black mr-5">ผู้อนุมัติ (แบบอิเล็กทอรนิกส์):</div>
            <div > นายสอง สามสี่</div>
          </div>
        </div>

        <!-- สรุปรายการ(ด้านขวา) -->
        <div class="grid grid-cols-2 p-2">
          <div >รวมสุทธิ</div>
          <div class="text-right">700 บาท</div>
          <div >ยอกเงินประมาณการ</div>
          <div class="text-right">750 บาท</div>
          <div >ยอดเงินส่งคืน</div>
          <div class="text-right">50 บาท</div>
          <div >ยอดเงินเบิกเพิ่ม </div>
          <div class="text-right">0 บาท</div>
        </div>
      </div>

      <div class="grid grid-cols-4 mt-50 text-xs">
        <div class="text-center border-b-1 border-black mx-5">
          <div>ผู้ขอเคียร์</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b-1 border-black mx-5">
          <div>ผู้อนุมัติ / ตรวจสอบ</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b-1 border-black mx-5">
          <div>ผู้รับเคียร์เงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
        <div class="text-center border-b-1 border-black mx-5">
          <div>ผู้อำนวยการฝ่ายการเงิน</div>
          <div class="mb-5">วันที่</div>
        </div>
      </div>

    </div>
  </section>
  <!-- <div class="flex bg-gray-900"></div> -->
</template>
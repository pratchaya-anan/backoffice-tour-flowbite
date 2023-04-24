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
            <div class="col-span-3 font-bold text-center text-base">ใบวางบิล/ใบแจ้งหนี้</div>
            <div class="col-span-3 text-center">Billing Note/Invoice</div>
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
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">ชื่อลูกค้า:</div>
            <div class="col-span-2 ">ศศิศ วิรัตน์จินดา</div>
            <div class="col-span-1 font-bold">ชื่อผู้ติดต่อ:</div>
            <div class="col-span-2 ">มะนาว หวานจังเลย</div>
            <div class="col-span-1 font-bold">ที่อยู่:</div>
            <div class="col-span-2 ">111/0 ถนนบ้านเตย อำเภอศรีวิชัย จังหวัดสุรินทร์ 25100</div>
            <div class="col-span-1 font-bold">ID TAX:</div>
            <div class="col-span-2 ">4585695214526</div>
            <div class="col-span-1 font-bold">FAX:</div>
            <div class="col-span-2 ">025684587</div>
            <div class="col-span-1 font-bold">โทร:</div>
            <div class="col-span-2 ">0254875858</div>
          </div>
        </div>

        <!-- ข้อมูลฝั่งขวา -->
        <div class="border-l px-5">
          <div class="grid grid-cols-3">
            <div class="col-span-1 font-bold">รหัสลูกค้า:</div>
            <div class="col-span-2 text-right">C-58015259</div>
            <div class="col-span-1 font-bold">ผู้เสนอขาย:</div>
            <div class="col-span-2 text-right">สมชัย ใจเกินร้อย</div>
            <div class="col-span-1 font-bold">ฝ่าย:</div>
            <div class="col-span-2 text-right">การตลาด</div>
            <div class="col-span-2 font-bold">ยืนยันราคาวันที่:</div>
            <div class="col-span-1 text-right">31/03/2566</div>
          </div>
        </div>
      </div>

      <!-- ตาราง -->
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
          <tr class="h-10 text-xs">
            <td>1</td>
            <td>Q-4636653086</td>
            <td>เที่ยวเกาะ เลาะรัก</td>
            <td>10</td>
            <td>5600</td>
            <td>0</td>
            <td>7%</td>
            <td>59920</td>
          </tr>
        </table>
      </div>

      <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
      <div class="grid grid-cols-3 text-xs p-2 border-b-1 border-black">
        <div class="col-span-2">
          <div class="font-bold">หมายเหตุ:</div>
          1.สินค้าตามรายการข้างต้นแม้จะได้รับมอบแก่ผู้ซื้อแล้วก็ยังคงเป็นสินทรัพย์ของผู้ขายจนกว่าผู้ซื้อจะชำระเงินเรียบร้อย
          <div>2.หากชำระเงินด้วยเช็คโปรดขีดคร่อมในนาม “บริษัทศรีดาราทัวร์จำกัด” และขีดฆ่าหรือผู้ถือออก <br> 3.การชำระเงินด้วยเช็คจะสมบูรณ์เมื่อ บริษัทฯได้รับเงินตามเช็คเรียบร้อย</div>
          <div class="flex">
            <div class="font-black w-30">ตัวอักษร:</div>
            <div class="font-black">ห้าหมื่นเก้าพันเก้าร้อยยี่สิบบาทถ้วน</div>
          </div>
        </div>

        <!-- สรุปรายการ(ด้านขวา) -->
        <div class="grid grid-cols-2 p-2">
          <div >รวมเงิน</div>
          <div class="text-right">59920 บาท</div>
          <div >มัดจำ 100%</div>
          <div class="text-right">5000 บาท</div>
          <div >มูลค่าคิดภาษี</div>
          <div class="text-right">56000 บาท</div>
          <div >ภาษีมูลค่าเพิ่ม</div>
          <div class="text-right">3920 บาท</div>
          <div class="font-bold">ยอดสุทธิ</div>
          <div class="text-right font-bold">59920 บาท</div>
        </div>
      </div>

      <div class="grid grid-cols-4 mt-35 text-xs">
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
  </section>
  <!-- <div class="flex bg-gray-900"></div> -->
</template>
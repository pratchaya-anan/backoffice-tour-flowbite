<template>
    <section class="bg-gray-100 dark:bg-gray-900 p-3 sm:p-5">
      <div class="w-[210mm] h-min-[297mm] p-[5mm] my-1 mx-auto border-1 solid rounded bg-white drop-shadow">
        <div class="grid grid-rows-2 m-5">
          <img class="w-55" src="../../assets/images/logo1.jpg" alt="Logo">
          <div class="grid grid-cols-3 text-sm">
            <div class="col-span-2">
              <div>บริษัท ศรีดาราทัวร์ จำกัด</div>
              <div>ชื่อมัคคุเทศก์ นายวุฒินันท์ ศรีสุระ</div>
              <div>ใบอนุญาตเลขที่ 11-57185</div>   
            </div>
  
            <!-- ชื่อใบ/ข้อมูลใบ -->
            <div class="grid grid-cols-3">
              <div class="col-span-3 font-bold text-center text-base">ใบสั่งงานมัคคุเทสก์</div>
              <div class="col-span-3 text-center">GuideOrder</div>
              <div class="font-bold">ใบอนุญาต:</div>
              <div class="col-span-2 text-right">51/00481</div>
              <div class="font-bold">วันที่:</div>
              <div class="col-span-2 text-right">...................</div>
              <div class="font-bold">ใบสั่งงาน:</div>
              <div class="col-span-2 text-right">...................</div>
            </div>
          </div>
        </div>
        <hr class="col-span-3 mx-5">
  
        <!-- ข้อมูลฝั่งซ้าย -->
        <div class="col-span-2 grid grid-cols-3 m-5  text-xs">
          <div class="col-span-2">
            <div class="grid grid-cols-2">
              <div class="col-span-1 font-bold">กำหนดการเดินทาง: </div>
              <div class="col-span-1 font-bold">21-24 เมษายน 2566</div>
              <div class="mt-2 col-span-1 font-bold">เดินทางจาก: อำนาญเจริญ</div>
              <div class="mt-2 col-span-1 font-bold">ถึง: เว้ ดานัง ประเทศเวียดนาม</div>
  
            </div>
          </div>
  
          <!-- ข้อมูลฝั่งขวา -->
          <div class="border-l px-5">
            <div class="grid grid-cols-4">
              <div class="col-span-2 font-bold">รถเดินทาง:</div>
              <div class="col-span-2 font-bold text-right">รถบัสลาว</div>
              <div class="col-span-2 font-bold">ทะเบียน: </div>
              <div class="col-span-2 font-bold text-right">8989 นครหลวงเวียงจันทร์</div>
              <div class="col-span-2 font-bold">โทร.</div>
            </div>
          </div>
        </div>
  
        <!-- ตาราง -->
        <div class="min-h-20 border-b-0 border-black">
          <table class="w-full text-center">
            <tr class="h-8 border-y-1 border-black text-center text-sm">
              <th class="text-center">จำนวนนักท่องเที่ยว</th>
              <th>ห้องเดี่ยว</th>
              <th>ห้องคู่</th>
              <th>ห้องนอน 3 รวม</th>
              <th>หมายเหตุ</th>
            </tr>
            <tr class="h-10 text-xs">
              <td>ผู้ใหญ่ 19</td>
              <td></td>
              <td>11</td>
              <td>1</td>
              <td></td>
            </tr>
            <tr class="h-10 text-xs">
              <td>เด็ก 4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <!-- รายละเอียดข้อตกลง(ด้านซ้าย) -->
        <div class="min-h-50 border-b-0 border-black">
          <table class="w-full text-center">
            <tr class="h-8 border-y-1 border-black text-center text-sm">
              <th>วันเดือนปี</th>
              <th>สถานที่ท่องเที่ยว</th>
              <th class="text-center">โรงแรม</th>
            </tr>
            <tr class="h-10 text-xs border-b-1 border-black">
              <td>21/4/2566</td>
              <td>
                05.00 น. รับคณะที่จุดนัดหมายบ้านหนองผื่อ อ.ชานุมาน อำนาจเจริญ<br>
                ออกเดินทางไปยังด่าน ตม.มุกดาหารเพื่อเดินทางต่อไปยังด่านลาวบาว<br>
                12.00 น.รับประทานอาหารเที่ยง หน้าด่านลาวบาว ระหว่างรอเอกสารข้านแดน<br>
                จากนั้นเดินทางต่อไปยังเมือง เว้-ตานัง /รับประทานอาหารเย็น<br>
                เที่ยวชมสะพานมังกร / สะพานแห่งความรัก / เข้าที่พัก
              </td>
              <td>โรงแรม NHU MINH PLAZA</td>
            </tr>

            <tr class="h-10 text-xs border-b-1 border-black">
              <td>22/4/2566</td>
              <td>
                เช้า รับประทานอาหารเช้าที่โรงแรม / เดินทางไปเมืองฮอยอัน / นั่งเรือกระด้ง<br>
                เที่ยง รับประทานอาหารเที่ยง / เดินทางขึ้นไปบาน่าฮิลล์<br>
                บ่าย นั่งกระเช้าลอยฟ้า / สะพานเมืองทอง / สวนดอกไม้<br>
                เย็น รับประทานอาหารเย็น / เข้าที่พัก
              </td>
              <td>โรงแรม Mercure Bana hills</td>
            </tr>
            <tr class="h-10 text-xs border-b-1 border-black">
              <td>23/4/2566</td>
              <td>
                เช้า รับประทานอาหารเช้าที่โรงแรม / เดินทางลงจากบาน่าฮิลล์สู่เมืองเว้<br>
                เที่ยง รับประทานอาหารเที่ยง / ชมพระราชวังได๋โหน๋ย / ตลาดดงบา<br>
                วัดเทียนมู๋ / ล่องเรือมังกร / รับประทานอาหารเย็น / เข้าที่พัก
              </td>
              <td>โรงแรม Century hotel</td>
            </tr>
            <tr class="h-10 text-xs border-b-1 border-black">
              <td>24/4/2566</td>
              <td>
                เช้า รับประทานอาหารเช้าที่โรงแรม / เดินทางกลับประเทศไทย<br>
                เดินทางถึงด่านลาวบาว ทำพิธีการข้ามด่าน / รับประทานอาหารเที่ยง<br>
                เดินทางต่อมายังด่านสะหวันนะเขต / รับประทานอาหารเย็น<br>
                20.00 น.เดินทางถึงจุดหมายปลายทางโดยสวัสดิภาพ
              </td>
              <td></td>
            </tr>
            <tr class="h-10 text-xs">
              <td></td>
              <td>ค่าจ้างมัคคุเทศก์.....................................................................................................................................................บาท
              </td>
              <td></td>
            </tr>
            <tr class="h-10 text-xs">
              <td></td>
              <td>มัคคุเทศก์ลงนาม..............................................................................................................................................................
              </td>
              <td></td>
            </tr>
            </table>
        </div>
        <table class=" mt-7 ml-10 w-full">
          <tr>
              <td><b>ผู้มีอำนาจลงนาม นางศรีดารา ประเปรียว</b></td>
              <td><b>ตราประทับบริษัท</b>
              </td>
              <td></td>
              <td></td>
            </tr>
        </table>
      </div>
    </section>
    <!-- <div class="flex bg-gray-900"></div> -->
  </template>
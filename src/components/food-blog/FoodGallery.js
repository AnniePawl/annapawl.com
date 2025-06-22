import React, { useState } from 'react';

const images = [

  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750211831/9E09C8BE-20BE-4F81-BF35-57E47D25D53A_1_105_c_bhvtng.jpg", tags: ['cake', 'dessert'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197247/2812FC66-AAA7-4627-93B5-71B9A8CBAB3F_1_105_c_xujisd.jpg", tags: [] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197296/2A8541D2-2EB6-40DC-89D1-398F2D624862_1_105_c_ifhtwx.jpg", tags: ['rice'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197133/204E68BD-B0C7-4C11-8061-6ED9B8F2A51B_1_105_c_la1a4u.jpg", tags: ['sushi'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197100/A19F6F2F-3D4E-4E61-9E5E-E0FCEF1876DC_1_105_c_oqiysw.jpg", tags: [] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197182/3A8FB3FD-D369-4999-A2C9-3D567D161CF8_1_105_c_sjpude.jpg", tags: ['pesto'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197221/BD7A4D2F-7D85-4AD4-ABB9-7C38F5D4CA7B_1_105_c_ifpdt6.jpg", tags: ['breakfast'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197104/81E63A73-46F5-43F1-95F5-D22A2616EF9B_1_105_c_idannb.jpg", tags: ['tofu'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197236/8B6DC7BF-C5A0-4ADE-A357-299D803261EA_1_105_c_ua3wim.jpg", tags: ['spring-rolls'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197147/F079E020-0965-4A5D-A518-1424D694C1A2_1_105_c_rqwsbu.jpg", tags: ['toast'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197161/EA7877B8-6945-4E1B-B8BF-81766ACC8285_1_105_c_blu0xg.jpg", tags: ['dough'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197299/E501C4BB-5DF9-43EF-8AD4-6C7F8C6C5C85_i7jjft.jpg", tags: ['nuts'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197083/E39AA71D-98AF-4002-9A32-E44FCB092E1F_1_105_c_zbu5lx.jpg", tags: ['veg'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197243/E18AB4D7-EFCD-4F81-9311-E25453C086F8_1_105_c_jkxh99.jpg", tags: ['cake', 'dessert'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197282/DE20E345-E4D9-4205-BDCF-992E453BD629_1_105_c_a9gljq.jpg", tags: ['rice'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750196960/D4AA4616-0DC1-452F-883E-E4556188440E_1_105_c_jxwjnn.jpg", tags: [''] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197233/C0FA82A1-EAC1-4901-8166-EFC6428F28F8_1_105_c_hownfo.jpg", tags: ['cake', 'dessert'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197211/D1811AA6-6827-4160-8D67-1E8F64458A11_1_105_c_wjbfhs.jpg", tags: ['pasta'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197087/FF24932A-481A-4F8F-9F9F-DA4C6973F243_1_105_c_bdi6s9.jpg", tags: ['pasta'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197193/CB69B03C-9307-4E4B-A1A3-D13386D1E734_1_105_c_th5lp8.jpg", tags: ['pasta'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197029/C53AA228-BBF6-4F29-AEFD-02DEAEC973DA_1_105_c_eyiqdt.jpg", tags: ['veg', 'garden'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197257/9FDA0C87-9AAB-4676-A1E8-E2F03112FCF7_1_105_c_llvqqe.jpg", tags: ['pasta'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197003/BFF52302-CFA7-4DFB-9E10-1EDF2AF15EAF_1_105_c_rrnbvd.jpg", tags: ['sushi'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197170/BFB5FBCF-95E4-4E43-BD7F-4EFD028B472B_1_105_c_gpdhwv.jpg", tags: ['bao'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197230/F19DEB9F-701B-4625-A27F-BF00E3FE4533_1_105_c_lk5wni.jpg", tags: ['sushi'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750196668/E73818BB-A604-4981-A29B-FD6259B580A4_1_105_c_xn2yeg.jpg", tags: ['shrimp'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197167/B5242DE5-EB62-4049-BCC0-62268A05B522_1_105_c_lbnipm.jpg", tags: ['dough'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750210543/2C177977-0FEE-4150-AB18-7149A98F3E0A_1_105_c_iyooha.jpg", tags: ['cake', 'dessert', 'berries'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197274/B23D33CC-FE7B-4AF6-AE8A-46D6FC88AFE3_1_105_c_iicg8v.jpg", tags: ['pasta'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197066/A1EF2C7A-4076-4E35-A668-EE156C73EA11_1_105_c_z4oier.jpg", tags: ['pasta'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197285/9B43BC8A-6F51-4B6F-A384-D1A5CC31F276_1_105_c_kfwcpy.jpg", tags: ['shrimp'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197157/9A9EC010-1800-413A-8553-6FB721B2EADB_1_105_c_xgqu7o.jpg", tags: ['veg'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750196994/9826BEAF-FC05-443D-8D89-AC8F9D7A6554_1_105_c_ozp4ih.jpg", tags: ['cake', 'dessert'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750196984/8EBFC06A-FD1F-4838-BF8B-DC019275F567_1_105_c_rbiqpi.jpg", tags: ['toast'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197265/92F9DAE0-DD8B-4414-BA50-F5588B013854_1_105_c_hkas2x.jpg", tags: ['cake', 'dessert'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197254/8C2EAC6D-9D7A-496A-87D1-128A9AB90854_1_105_c_bslc4y.jpg", tags: ['dumplings'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197288/89B8842C-9F54-491B-A1F5-0A5989E7B0FC_1_105_c_prwjk8.jpg", tags: ['salad'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197240/857793EC-D9A6-4BCD-8420-D191324CB5B0_1_105_c_ni7e3r.jpg", tags: ['rice'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197306/7FDDB66C-38A0-433A-B322-D58310A8E86E_1_105_c_hnke2c.jpg", tags: [] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197309/7AE7086B-371F-4C13-BB23-ED36F32912DE_1_105_c_muzsmr.jpg", tags: ['pasta', 'shrimp'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197019/752CF4BF-4D10-4E17-BB0A-CBB32160E17E_1_105_c_dqm4tu.jpg", tags: ['toast'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197014/74933A14-085C-4ACA-8A27-BC21B5D8265F_1_105_c_edvzzi.jpg", tags: ['veg'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197075/73137D46-DAE5-4680-8879-3FCFAC58CF7B_1_105_c_meg1yr.jpg", tags: [] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197072/628856BF-91FB-4137-8DE0-FE06D9F3178C_1_105_c_jvf8he.jpg", tags: [] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197204/5FB83597-2172-4342-9352-67527654421E_1_105_c_ja4baj.jpg", tags: ['cake', 'dessert', 'berries'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750196970/5D78F223-61E8-4CC6-9A39-791EF1883C05_1_105_c_tx4paz.jpg", tags: ['shrimp'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197197/5C96B1AA-20EA-426C-82AC-3F14762E1B5F_1_105_c_zswuyj.jpg", tags: ['veg'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197262/59AD0604-CBC1-4BE6-BA2F-FCD5B300836B_1_105_c_rvjsex.jpg", tags: ['cake', 'dessert', 'berries'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197201/58DAA850-8353-4102-B48B-7B568A724120_1_105_c_okbwfj.jpg", tags: ['pasta'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197269/56D8DCE0-D917-40F6-A6D3-D426FE2126A4_1_105_c_hgo4pl.jpg", tags: ['dumplings'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197179/56AAAC0B-BD04-4A70-9518-B33D9C27FFFC_1_105_c_qhvgl4.jpg", tags: [] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197250/530C0923-53B9-4E5B-B97F-D2CAED5D83B5_1_105_c_xlykbb.jpg", tags: ['pasta'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197091/5305AC28-0737-4271-B6F3-E2C46EBA42EA_1_105_c_b0ga2n.jpg", tags: ['chocolate'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197096/4C623F04-6F7F-4D25-852A-4347EC8F52F6_1_105_c_ggyocb.jpg", tags: ['shrimp'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197078/46590C39-FC21-40E3-8F34-E2241B162FC2_1_105_c_kx3b8e.jpg", tags: ['veg'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197080/3F0C9F66-731D-4223-9ADD-A448A6E98D63_1_105_c_r51mkk.jpg", tags: ['veg'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197128/3B8CF887-7DF6-4581-9760-FCC5B19937CB_1_105_c_pmm1hr.jpg", tags: ['breakfast'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197207/331ED6A1-C6BA-4DF8-B257-2E621C9404C5_1_105_c_jzxa78.jpg", tags: ['cake', 'dessert', 'berries'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197139/32039FD5-B9E0-4A59-A1C5-D7E6FC5E6E78_1_105_c_gpoj5s.jpg", tags: [] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197277/31891731-023B-4DEC-8DFE-1A557CC3E5C7_1_105_c_yt9ryc.jpg", tags: ['cake', 'dessert', 'berries'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197093/2F9670E3-E3B7-4236-9F97-633E081D6F69_1_105_c_zvjjlg.jpg", tags: ['veg'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197225/2E40D5DC-68B9-497C-9A5F-2B9E6DAD2492_1_105_c_tkagte.jpg", tags: ['veg'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197052/2C2E0821-5EFD-47F2-9BD2-DE26575850E4_1_105_c_qrwdmt.jpg", tags: ['bread'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197186/1CCC391F-360B-4CD4-93D6-50B94DF6A35D_1_105_c_g3zbef.jpg", tags: ['dough'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197068/1B03721C-FC8E-41D2-B10D-6FCC97E0C243_1_105_c_wfqfbw.jpg", tags: ['veg'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197150/183D41D2-4879-45E1-B431-5DFB8A419975_1_105_c_crjayp.jpg", tags: ['toast'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750196976/12F86309-854D-4E27-B2CA-189F9AE63CC6_1_105_c_vmu8f2.jpg", tags: ['rice', 'shrimp'] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197142/10E6C5BA-7587-44BE-945B-0ED88B22ABD0_1_105_c_ofa2yw.jpg", tags: [] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197111/0F95BF18-B5A3-42A4-B158-C76452EFA525_1_105_c_ygurzl.jpg", tags: [] },
  { url: "https://res.cloudinary.com/dese838i5/image/upload/v1750197173/02B7A88B-FF88-4905-9EF7-EE856F0D2DF1_1_105_c_jvq0uy.jpg", tags: ['breakfast', 'dessert'] }
];


const tags = ['all', 'dessert', 'toast','rice', 'pasta', 'shrimp', 'dough' ,'veg', 'berries', 'sushi' ];

const FoodGallery = () => {

  const [selectedTag, setSelectedTag] = useState("all");

  const filteredImages = selectedTag === "all"
    ? images
    : images.filter(img => img.tags.includes(selectedTag));
  return (

    <div class='w-full bg-zinc-50 mx-auto flex flex-col items-center justify-center'>
      {/* Filter Buttons */}
      <div className="mb-4 flex justify-center flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1  rounded-full text-xs md:text-sm md:tracking-wide font-medium border border-zinc-200 hover:border-zinc-800 transition-all ${selectedTag === tag
              ? "bg-black text-white"
              : "bg-yellow-200 text-black"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-2 pt-5">
        {filteredImages.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={`Food ${index}`}
            className="w-full h-[275px] md:h-[315px] lg:h-[375px] rounded-xl shadow-md object-cover object-center"
          />
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
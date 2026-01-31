const ad = [
  "Real Madrid Home 24/25", "Barcelona Home 24/25", "Man. United Home 24/25", "Liverpool Home 24/25", "Arsenal Home 24/25",
  "Chelsea Home 24/25", "PSG Home 24/25", "Inter Miami Messi", "AC Milan Home 24/25", "Juventus Home 24/25",
  "Nike Mercurial Vapor 15", "Adidas Predator Accuracy", "Puma Future Ultimate", "Nike Phantom GX", "Adidas X Speedportal",
  "Adidas Al Rihla Top", "Nike Flight Top", "Puma Orbita Top", "Mitre Match Top", "Select Brillant Top",
  "Barcelona Şərf", "Real Madrid Şərf", "Man. City Şərf", "PSG Şapka", "Nike Diz Qoruyucu"
];

const marka = [
  "Adidas", "Nike", "Adidas", "Nike", "Adidas", "Nike", "Nike", "Adidas", "Puma", "Adidas",
  "Nike", "Adidas", "Puma", "Nike", "Adidas",
  "Adidas", "Nike", "Puma", "Mitre", "Select",
  "Fan Shop", "Fan Shop", "Fan Shop", "PSG", "Nike"
];

const kateqoriya = [
  "Forma", "Forma", "Forma", "Forma", "Forma", "Forma", "Forma", "Forma", "Forma", "Forma",
  "Buts", "Buts", "Buts", "Buts", "Buts",
  "Top", "Top", "Top", "Top", "Top",
  "Aksesuar", "Aksesuar", "Aksesuar", "Aksesuar", "Aksesuar"
];

const qiymet = [
  "130 AZN", "125 AZN", "135 AZN", "120 AZN", "128 AZN", "118 AZN", "140 AZN", "110 AZN", "115 AZN", "132 AZN",
  "280 AZN", "260 AZN", "240 AZN", "270 AZN", "250 AZN",
  "65 AZN", "60 AZN", "55 AZN", "50 AZN", "70 AZN",
  "25 AZN", "25 AZN", "27 AZN", "35 AZN", "18 AZN"
];

const stok = [
  "Var", "Var", "Var", "Yoxdur", "Var", "Var", "Var", "Var", "Yoxdur", "Var",
  "Var", "Var", "Yoxdur", "Var", "Var",
  "Var", "Var", "Var", "Yoxdur", "Var",
  "Var", "Var", "Var", "Var", "Var"
];

const img = [

  "https://images.footballfanatics.com/real-madrid/real-madrid-adidas-home-shirt-2024-25_ss5_p-200905342+u-tivubcl8y8pge9rre9vt+v-r7fksr81clv01mqq0pzh.jpg?w=500",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/603612d4-04f8-4b77-a859-9941a5477c7c/FCB+M+NK+DF+STAD+JSY+SS+HM.png",
  "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-home-shirt-2024-25_ss5_p-200905357+u-v3aaj83n12vj2lyrntix+v-clge847rsk8vxlv6lbtj.jpg?w=500",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/57f12e2c-3965-4f46-9d3b-6b7f329241b2/LFC+M+NK+DF+STAD+JSY+SS+HM.png",
  "https://images.footballfanatics.com/arsenal/arsenal-adidas-home-shirt-2024-25_ss5_p-200905307+u-unv6idub8f7vckc6vsc8+v-e4be65e0847b4d189191d9f04f039369.jpg?w=500",
  "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/037a8581-2248-430c-87d3-0667e411b279/CFC+M+NK+DF+STAD+JSY+SS+HM.png",
  "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/18c4e095-207a-426c-851f-50d4f3b177bc/PSG+M+NK+DF+STAD+JSY+SS+HM.png",
  "https://images.footballfanatics.com/inter-miami-cf/inter-miami-cf-adidas-home-shirt-2024-messi-10_ss5_p-200547000+u-p5q0fymm2r2v8968d447+v-74d6c4664726487190d65558129e92a4.jpg?w=500",
  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/774947/01/fnd/EEA/fmt/png/AC-Milan-Home-24/25-Replica-Jersey",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28e9323381a34909873f15c48b4f0521_9366/Juventus_24-25_Home_Jersey_White_IT4399_01_laydown.jpg",
  "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/e922485e-653a-44e2-9657-25e24391e3e5/ZOOM+VAPOR+15+ELITE+FG.png",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2df04b85c1494676b7e615372e9352e8_9366/Predator_Accuracy.1_Low_Firm_Ground_Boots_Black_IE9423_01_standard.jpg",
  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107906/01/fnd/EEA/fmt/png/FUTURE-7-ULTIMATE-FG/AG",
  "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3a0058e3-0c46-444a-89a7-96102641a967/PHANTOM+GX+II+ELITE+FG.png",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/72e196429d2b404d8050af56009842f1_9366/X_Speedportal.1_FG_Gold_GZ2443_01_standard.jpg",
  "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e3f6990520249219356ae3d009e9921_9366/Al_Rihla_League_Ball_White_H57782_01_standard.jpg",
  "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/376a89c4-068b-4911-96e0-22d716867e91/FLIGHT.png",
  "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/084116/01/fnd/EEA/fmt/png/PUMA-Orbita-Serie-A-(FIFA-Quality-Pro)",
  "https://www.mitre.com/cdn/shop/files/Mitre-Match-Football-Yellow_1024x1024.jpg?v=1710411808",
  "https://www.select-sport.com/cdn/shop/products/Brillant_Super_TB_FIFA_white_800x.png?v=1646303215",
  "https://images.footballfanatics.com/fc-barcelona/fc-barcelona-barca-scarf_ss4_p-12071852+u-43e8g7e78g334f5e7f8g+v-1.jpg?w=500",
  "https://images.footballfanatics.com/real-madrid/real-madrid-scarf_ss4_p-13375837+u-v3aaj83n12vj2lyrntix+v-1.jpg?w=500",
  "https://images.footballfanatics.com/manchester-city/manchester-city-scarf_ss4_p-13364964+u-unv6idub8f7vckc6vsc8+v-1.jpg?w=500",
  "https://images.footballfanatics.com/paris-saint-germain/psg-jordan-beanie_ss4_p-12072123+u-55aaj83n12vj2lyrntix+v-1.jpg?w=500",
  "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/7d36a992-6681-450f-a42e-a5902047a07a/MERCURIAL+LITE.png"
];

let container = document.getElementById("container");

ad.forEach((item, i) => {
  const isAvailable = stok[i] === "Var";
  
  container.innerHTML += `
    <div class="w-[260px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100">
      
      <div class="bg-gray-50 flex items-center justify-center p-4">
        <img class="w-full h-[180px] object-contain" src="${img[i]}" alt="${item}" />
      </div>

      <div class="p-4 flex flex-col flex-1">
        <h2 class="text-sm font-bold text-gray-800 leading-tight h-10 line-clamp-2">${item}</h2>

        <div class="mt-3 space-y-1">
          <p class="text-[12px] text-gray-500">Marka: <span class="font-medium text-gray-700">${marka[i]}</span></p>
          <p class="text-[12px] text-gray-500">Kateqoriya: <span class="font-medium text-gray-700">${kateqoriya[i]}</span></p>
          <p class="text-[12px]">
            Stok: <span class="${isAvailable ? "text-green-600" : "text-red-600"} font-bold">${stok[i]}</span>
          </p>
        </div>

        <div class="mt-auto pt-4 flex justify-between items-center">
          <p class="font-black text-lg ${isAvailable ? "text-blue-700" : "text-gray-400"}">${qiymet[i]}</p>
          <button class="${isAvailable ? "bg-black hover:bg-gray-800" : "bg-gray-300 cursor-not-allowed"} text-white px-3 py-2 rounded-lg text-[11px] font-bold transition">
            ${isAvailable ? "SƏBƏTƏ AT" : "BİTİB"}
          </button>
        </div>
      </div>
    </div>
  `;
});
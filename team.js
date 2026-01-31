const teamcontainer = document.getElementById("teamcontainer")
const adlar = ['Murad','Eli','Veli','Messi','Ohori','Ba','Mehemmed','Ronaldinho']
const isler = ['Rpa','Biznessman','Fehle','Web developer','Rapper','Futbolcu','Sahibkar','SMM']

for(let i=0;i<adlar.length;i++){
    teamcontainer.innerHTML+=`<div>
            <div
              class="w-32 h-32 rounded-full overflow-hidden bg-gray-50 inline-block"
            >
              <img
                src="https://readymadeui.com/team-5.webp"
                class="w-full h-full"
              />
            </div>

            <div class="py-4">
              <h4 class="text-slate-900 text-base font-semibold">${adlar[i]}</h4>
              <p class="text-slate-600 text-[13px] mt-1.5">
                ${isler[i]}
              </p>
            </div>
          </div>`
}
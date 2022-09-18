let konutOran = 1.29;
let aracOran = 1.49;
let ihtiyacOran = 1.79;

let oran = 0;

const krediSecenek = document.querySelector("#kredi");
const vadeSayisi = document.querySelector("#vade");
const toplam = document.querySelector("#tutar");

const hesapla = document.querySelector(".btn");

hesapla.addEventListener("click", () => {
  if (krediSecenek.value == "Konut Kredisi") {
    oran = konutOran;
  }
  if (krediSecenek.value == "İhtiyaç Kredisi") {
    oran = aracOran;
  }
  if (krediSecenek.value == "Araç Kredisi") {
    oran = ihtiyacOran;
  }
  faiz =
    (toplam.value * (oran / 100) * (1 + oran / 100) ** vadeSayisi.value) /
    ((1 + oran / 100) ** vadeSayisi.value - 1);

  let toplamTutar = (faiz * vadeSayisi.value).toFixed(2);

  if (!kredi.value || !vade.value || !tutar.value) {
    alert("Eksik Yerleri Doldurunuz");
  } else {
    document.querySelector(".table").innerHTML = `
    <thead>
      <h2 class="mt-3 text-danger">Kredi Bilgileri</h2>
    </thead>
    <tr class="table-active">
            <td>Kredi Miktari</td>
            <td>${toplam.value}₺</td>
            <td>Kredi Tipi</td>
            <td>${krediSecenek.value}</td>
          </tr>
          <tr class="table-active">
            <td>Vade</td>
            <td>${vadeSayisi.value}</td>
            <td>Faiz Orani</td>
            <td>${oran}</td>
          </tr>
          <tr class="table-active">
            <td>Toplam Tutar</td>
            <td>${toplamTutar}₺</td>
            <td>Taksit Tutari</td>
            <td>${faiz.toFixed(2)}₺</td>
          </tr>
        </tbody>
      </table>`;
  }
});

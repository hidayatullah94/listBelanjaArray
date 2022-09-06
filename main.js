//get buttton
const btnAdd = document.getElementById("add");
const modal = document.getElementById("modal");
const daftar = document.getElementById("daftar");
const btnCreate = document.getElementById("form-add");

const dataBarang = [];
//for modal
btnAdd.addEventListener("click", () => {
	if (modal.style.display == "none") {
		showModal();
		return;
	}
	hideModal();
});

function showModal() {
	modal.style.display = "flex";
	btnAdd.style.transform = "rotate(45deg)";
}

function hideModal() {
	modal.style.display = "none";
	btnAdd.style.transform = "rotate(0deg)";
}
// for submit

btnCreate.addEventListener("submit", function (e) {
	e.preventDefault();
	let nama = e.target.nama.value;
	let harga = e.target.harga.value;
	dataBarang.push({
		nama_barang: nama,
		harga_barang: harga,
		tanggal: new Date().toLocaleDateString(),
	});
	console.log(dataBarang);
	e.target.nama.value = "";
	e.target.harga.value = "";
	hideModal();
	renderList();
});

//render hTML
function renderList() {
	daftar.innerHTML = "";
	dataBarang.map((item, i) => {
		daftar.innerHTML += `<div class="card">
		<h5>${item.tanggal}</h5>
		<div class="body-card">
			<p>${item.nama_barang}</p>
			<p>Rp: ${item.harga_barang}</p>
		</div>
		<button onclick="deleteBarang(${i})">Selesai</button>
	</div>
		`;
	});
}

function deleteBarang(index) {
	dataBarang.splice(index, 1);
	renderList();
}

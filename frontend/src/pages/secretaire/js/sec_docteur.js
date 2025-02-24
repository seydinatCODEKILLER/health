import { getDoctors } from "../../../services/doctorService.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadDoctorsTable();
  const sidebarDeviceButton = document.getElementById("sidebar-device");
  const sidebarClose = document.getElementById("sidebar-close");
  sidebarDeviceButton.addEventListener("click", openSidebar);
  sidebarClose.addEventListener("click", closeSidebar);
});

async function loadDoctorsTable() {
  try {
    const doctors = await getDoctors();
    const tableBody = document.getElementById("doctorsTableBody");

    tableBody.innerHTML = "";

    doctors.forEach((doctor) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td class="py-2 px-4"><img src="${doctor.avatar}" class="w-10 h-10 rounded-full object-cover"/></td>
                <td class="py-2 px-4">${doctor.nom}</td>
                <td class="py-2 px-4">${doctor.email}</td>
                <td class="py-2 px-4">${doctor.specialite}</td>
                <td class="py-2 px-4">
                    <button class="bg-gray-100 py-1 px-3 rounded-md hover:bg-gray-200 cursor-not-allowed" disabled>
                    <span>Modifier</span>
                    <i class="ri-edit-box-line"></i>
                    </button>
                    <button class="bg-gray-100 py-1 px-3 rounded-md hover:bg-gray-200 cursor-not-allowed" disabled>
                    <span>Supprimer</span>
                    <i class="ri-delete-bin-6-line"></i>
                    </button>
                </td>
            `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Erreur lors du chargement des docteurs :", error);
    alert("Une erreur s'est produite lors du chargement des docteurs.");
  }
}

function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("-translate-x-full");
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.add("-translate-x-full");
}

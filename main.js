fetch("data/teams.json")
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector("#stats-table tbody");

        if (!tableBody) return;

        data.forEach(team => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${team.team}</td>
                <td>${team.avg.toFixed(3)}</td>
                <td>${team.hr}</td>
                <td>${team.era.toFixed(2)}</td>
            `;

            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error loading team stats:", error);
    });
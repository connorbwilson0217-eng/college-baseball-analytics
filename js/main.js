fetch("data/teams.json")
.then(res => res.json())
.then(data => {
    const table = document.querySelector("#stats-table");
    if (!table) return;

    data.forEach(team => {
        table.innerHTML += `
        <tr>
            <td>${team.team}</td>
            <td>${team.avg}</td>
            <td>${team.hr}</td>
            <td>${team.era}</td>
        </tr>
        `;
    });
});
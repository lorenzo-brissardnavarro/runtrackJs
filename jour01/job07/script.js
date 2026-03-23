const options = {weekday: "long", year: "numeric", month: "long", day: "numeric",};

function jourTravaille(date) {
    const joursFeries = ["2024-01-01", "2024-04-01", "2024-05-01", "2024-05-08", "2024-05-09", "2024-05-20", "2024-07-14", "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25"];
    const formatDate = new Date(date);
    const texteDate = formatDate.toLocaleDateString("fr-FR", options);
    if(joursFeries.includes(date)) {
        console.log("Le " + texteDate + " est un jour férié");
    } else if(formatDate.getDay() === 0 || formatDate.getDay() === 6){
        console.log("Non, " + texteDate + " est un week-end")
    } else {
        console.log("Oui, " + texteDate + " est un jour travaillé");
    }
}

jourTravaille("2024-01-01");
jourTravaille("2024-01-03");
jourTravaille("2024-01-07");
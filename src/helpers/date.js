function dateFormater(unformatDate){
    const listMonth = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ]
    const date = new Date(unformatDate).toLocaleString("id-ID");
    const rawDate = date.split(" ")[0];
    let [currentDate, currentMonth, currentYear] = rawDate.split("/");
    return `${currentYear}/${listMonth[currentMonth - 1]}/${currentDate}`; 
}

export default dateFormater;
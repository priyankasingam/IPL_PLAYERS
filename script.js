document.addEventListener("DOMContentLoaded", () => {
    const newsSection = document.getElementById("news");
    const news = [
        "Sunrisers Hyderabad signs a new player!",
        "Match preview: SRH vs MI",
        "Top 5 SRH moments from the season",
    ];

    newsSection.innerHTML = "<ul>" + news.map(item => `<li>${item}</li>`).join('') + "</ul>";
});
function showStats(type) {
    const battingStats = document.getElementById("batting-stats");
    const bowlingStats = document.getElementById("bowling-stats");

    if (type === 'batting') {
        battingStats.style.display = 'block';
        bowlingStats.style.display = 'none';
    } else {
        battingStats.style.display = 'none';
        bowlingStats.style.display = 'block';
    }
}


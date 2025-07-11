const gombalanList = [
  "Kamu tuh kayak series favorit, nggak pernah bosan ditonton.",
  "Kalau aku Netflix, kamu tuh kontennya. Tanpa kamu, aku kosong.",
  "Aku rela buffering asal bisa tetap bersamamu.",
  "Kamu lebih bikin candu dari pada episode terakhir drama Korea.",
  "Cinta ini bukan trial—ini langganan seumur hidup."
];

function tampilkanGombalan() {
  const random = Math.floor(Math.random() * gombalanList.length);
  document.getElementById("gombalan").textContent = gombalanList[random];
}

function playMusic() {
  const music = document.getElementById("bg-music");
  music.play().catch(() => {
    console.log("Autoplay dicegah oleh browser. Klik halaman untuk memulai musik.");
  });
}

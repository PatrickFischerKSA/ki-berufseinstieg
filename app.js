"use strict";

const sections = {
  einstieg: ["Einstieg", [
    ["lernziel", "Welche Aufgabe möchtest du in einem Praktikum lernen? Was würdest du selbst ausprobieren und wobei könnte KI helfen?"]
  ]],
  club: ["SRF Club · 23:20–27:23", [
    ["club-nutzen", "Welchen Nutzen nennt Simona Coppola am Beispiel der Medizin? Welche Sorge stellt sie ihm gegenüber? Erkläre den Unterschied zwischen einer verlorenen Stelle und einem erschwerten Berufszugang."],
    ["club-bewerbung", "Zeichne den beschriebenen Bewerbungsablauf in Worten nach. Wo nutzen beide Seiten KI? An welchem Punkt sollte ein Mensch entscheiden?"],
    ["club-verantwortung", "Welche Verantwortung weist Nadine Bienefeld Schulen und Betrieben zu? Was hätten Betriebe langfristig von Einstiegsstellen?"],
    ["club-beleg", "Dein Beleg aus dem «Club» mit Person, Zeitmarke und Art der Begründung (Beispiel, Daten, Einschätzung oder Prognose)."]
  ]],
  zimmer: ["SRF Zimmer 42 · 33:47–36:31", [
    ["zimmer-lernen", "Was meint Barbara Bleisch mit «Use it or lose it»? Welche Fähigkeiten könnten zu kurz kommen, wenn KI die Hausarbeit schreibt?"],
    ["zimmer-vergleich", "Wie reagiert Espenlaub auf die Gegenüberstellung von Zeitgewinn und Fähigkeitsverlust? Was zeigt sein Vergleich mit Computerspielen und Büchern?"],
    ["zimmer-praxis", "Wenn KI eine Veranstaltungsankündigung entwirft, welche Fähigkeit übt eine Praktikantin womöglich weniger? Wie könnte die Betreuungsperson den KI-Einsatz so gestalten, dass die Praktikantin diese Fähigkeit übt?"],
    ["zimmer-beleg", "Dein Beleg aus «Zimmer 42» mit Person, Zeitmarke und Art der Begründung."]
  ]],
  quellen: ["Quellencheck", [
    ["daten", "Was messen ILO und Stanford? Was bleibt über Praktika in deiner Region offen?"],
    ["ursachen", "Welche andere Ursache als KI könnte das Angebot verringern? Wie würdest du die Erklärungen prüfen?"],
    ["untersuchung", "Plant eine lokale Untersuchung mit Region, Branche, Zeitraum und Daten zu ausgeschriebenen und besetzten Plätzen."]
  ]],
  fall: ["Fallarbeit und Feedback", [
    ["praxisaufgabe", "Welche echte Aufgabe übernimmt die Praktikantin selbst, wobei hilft KI und wie prüft ihr einen möglichen Fehler?"],
    ["betreuung", "Was ist das Lernziel? Wer betreut und wann gibt es Feedback?"],
    ["zugang", "Wie regelt ihr Ausschreibung, Auswahl und Entschädigung? Was kann die Schule anbieten, wenn die Bewerbung scheitert? Welche Betriebserfahrung fehlt dabei?"],
    ["feedback", "Welchen Vorteil und welchen Zielkonflikt sieht die andere Gruppe? Was ändert ihr nach dem Feedback?"]
  ]],
  urteil: ["Persönliches Urteil", [
    ["urteil-text", "Schreibe 120–180 Wörter. Nutze einen Medienbeleg, wäge eine Chance und ein Risiko ab, nenne einen eigenen nächsten Schritt und eine Forderung an Schule oder Betrieb. Welche Information könnte dein Urteil ändern?"]
  ]],
  podcast: ["Podcast · freiwillige Vertiefung", [
    ["podcast-notiz", "Wähle eine Stelle. Notiere Zeitmarke und Vorschlag. Wem hilft er konkret und welche Hürde für Jugendliche ohne Praktikumsplatz bleibt bestehen?"]
  ]]
};

const storageKey = "ki-berufseinstieg-pages-antworten-v1";
const status = document.querySelector("#storage");
const fields = [];

function readAnswers() {
  try {
    const answers = JSON.parse(localStorage.getItem(storageKey));
    return answers && typeof answers === "object" ? answers : {};
  } catch {
    return {};
  }
}

const saved = readAnswers();
for (const [key, [heading, prompts]] of Object.entries(sections)) {
  const container = document.querySelector(`[data-prompts="${key}"]`);
  for (const [id, question] of prompts) {
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = question;
    const input = document.createElement("textarea");
    input.id = id;
    input.rows = id === "urteil-text" ? 8 : 3;
    input.value = typeof saved[id] === "string" ? saved[id] : "";
    container.append(label, input);
    fields.push({ heading, question, input });
  }
}

function updateProgress() {
  const required = fields.filter(({ input }) => input.id !== "podcast-notiz");
  const answered = required.filter(({ input }) => input.value.trim()).length;
  document.querySelector("#progress").textContent = `${answered} von ${required.length} Pflichtfeldern beantwortet`;
}

function saveAnswers() {
  const answers = Object.fromEntries(fields.map(({ input }) => [input.id, input.value]));
  try {
    localStorage.setItem(storageKey, JSON.stringify(answers));
    status.textContent = "In diesem Browser gespeichert.";
  } catch {
    status.textContent = "Speichern im Browser nicht verfügbar. Exportiere deine Antworten vor dem Schliessen.";
  }
  updateProgress();
}

for (const { input } of fields) input.addEventListener("input", saveAnswers);
updateProgress();

document.querySelector("#export").addEventListener("click", () => {
  const lines = ["# Wer gibt mir die erste Chance?", ""];
  let currentHeading;
  for (const { heading, question, input } of fields) {
    if (!input.value.trim()) continue;
    if (heading !== currentHeading) {
      lines.push(`## ${heading}`, "");
      currentHeading = heading;
    }
    lines.push(`### ${question}`, "", input.value.trim(), "");
  }
  if (!currentHeading) {
    status.textContent = "Schreibe zuerst eine Antwort, um sie zu exportieren.";
    return;
  }
  const url = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "ki-reflexion-antworten.md";
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent = "Export als Markdown gestartet.";
});

document.querySelector("#clear").addEventListener("click", () => {
  if (!window.confirm("Alle Antworten dieser Einheit auf diesem Gerät löschen?")) return;
  for (const { input } of fields) input.value = "";
  try {
    localStorage.removeItem(storageKey);
    status.textContent = "Antworten auf diesem Gerät gelöscht.";
  } catch {
    status.textContent = "Eingabefelder geleert. Der Browserspeicher ist gerade nicht zugänglich.";
  }
  updateProgress();
});

document.querySelector("#load-podcast").addEventListener("click", () => {
  const player = document.createElement("iframe");
  player.src = "https://www.ardsounds.de/embed/episode/urn:ard:episode:0d66eb9229384847/";
  player.title = "ARD Sounds – Was tun, wenn KI meinen Job bedroht?";
  player.allow = "autoplay";
  document.querySelector("#podcast-player").replaceChildren(player);
  player.focus();
});

for (const video of document.querySelectorAll("video")) {
  video.addEventListener("error", () => {
    const message = document.createElement("p");
    message.textContent = "Der Ausschnitt ist hier nicht verfügbar. Öffne das SRF-Original und springe zur angegebenen Startzeit.";
    video.replaceWith(message);
  });
}

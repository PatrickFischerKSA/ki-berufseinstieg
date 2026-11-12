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
  ]],
  "modul-lernen": ["Wahlmodul · KI als Lernhilfe", [
    ["lernablauf", "Entwirf einen Ablauf mit einem eigenen ersten Versuch, einer gezielten KI-Frage und einer Prüfung am Original."],
    ["lernnachweis", "Wie könnte die Lehrperson erkennen, was du selbst verstanden hast? Entwirf einen kurzen Lernnachweis."]
  ]],
  "modul-deepfakes": ["Wahlmodul · Deepfakes und Desinformation", [
    ["clip-pruefung", "Plane drei Prüfschritte. Welche unabhängige Quelle könnte die Ankündigung bestätigen? Was tust du, solange du keine Bestätigung hast?"],
    ["clip-korrektur", "Du hast den Clip bereits geteilt. Schreibe eine kurze Korrektur für den Klassenchat und erkläre, wie du mit verbleibender Unsicherheit umgehst."]
  ]],
  "modul-fairness": ["Wahlmodul · Faire Entscheidungen mit KI", [
    ["fairness-kriterium", "Erkläre, weshalb das Auswahlkriterium bestimmte Jugendliche benachteiligen könnte. Welche Fähigkeit oder welches Potenzial soll der Kurs eigentlich fördern?"],
    ["fairness-verfahren", "Entwirf ein Auswahlverfahren mit klaren Kriterien und einer Möglichkeit zur Überprüfung. Wie würdest du erkennen, ob es fairer ist?"]
  ]],
  "modul-daten": ["Wahlmodul · Datenschutz im Schulalltag", [
    ["daten-auswahl", "Welche Informationen braucht ihr für die Zusammenfassung? Welche würdest du vor einer möglichen Weitergabe entfernen und weshalb?"],
    ["daten-entscheidung", "Vergleiche eine manuelle Auswertung mit der Nutzung eines Online-Tools. Welche Fragen zu Zugriff, Speicherung und Einverständnis klärst du vor der Entscheidung?"]
  ]]
};

const feedback = {
  lernziel: [["Konkrete Tätigkeit und eigener Lernschritt", "Nenne eine Aufgabe und beschreibe, was du daran selbst üben möchtest."], ["Sinnvolle KI-Hilfe", "Erkläre, an welcher Stelle KI helfen könnte und was du selbst entscheidest."]],
  "club-nutzen": [["Nutzen in der Medizin", "Höre ab ca. 24:03 im Original. Wer gewinnt durch KI möglicherweise Zeit, und wofür?"], ["Sorge beim Einstieg", "Höre ab ca. 24:23. Beschreibe, welche Tür sich für Berufseinsteigende schliessen könnte."], ["Unterschied erklärt", "Vergleiche zwei Personen: Eine hat bereits einen Arbeitsvertrag, die andere sucht ihre erste Stelle. Was steht für jede auf dem Spiel?"]],
  "club-bewerbung": [["KI auf beiden Seiten", "Höre ab ca. 24:43. Unterscheide zwischen dem Schreiben der Bewerbung und der Auswahl im Betrieb."], ["Menschlicher Entscheid begründet", "Wähle einen Schritt, etwa die Vorauswahl oder die Absage. Erkläre, was ein Mensch dort zusätzlich berücksichtigen könnte."]],
  "club-verantwortung": [["Beiträge von Schule und Betrieb", "Höre ab ca. 26:42. Wer kann Kontakte zu Fachpersonen herstellen? Wer kann Einstiegsstellen anbieten?"], ["Langfristiger Nutzen", "Erkläre, wie heutige Einsteiger*innen zu den Fachkräften von morgen werden können."]],
  "club-beleg": [["Person, Zeitmarke und Aussage", "Notiere, wer was sagt und an welcher Stelle. Kennzeichne, ob sich deine Zeitmarke auf den Ausschnitt oder das Original bezieht."], ["Art und Reichweite des Belegs", "Entscheide, ob die Aussage ein Beispiel, ein Datenbefund, eine Einschätzung oder eine Prognose ist. Was lässt sich daraus ableiten?"]],
  "zimmer-lernen": [["Fähigkeit und Übung verbunden", "Erkläre an einem Schritt der Hausarbeit, welche Fähigkeit dabei geübt wird und was beim Delegieren wegfallen könnte."]],
  "zimmer-vergleich": [["Beide Wirkungen berücksichtigt", "Erkläre, wie Zeitgewinn und weniger Übung gleichzeitig möglich sind."], ["Vergleich erklärt", "Zeige anhand der Bücher oder Spiele, warum die Wirkung eines Mediums von seiner Nutzung abhängt."]],
  "zimmer-praxis": [["Konkreter Übungsschritt", "Nenne einen Schritt, den die Praktikantin selbst übernimmt, und erkläre, welche Fähigkeit sie dabei übt."], ["KI und Betreuung eingeplant", "Beschreibe, wann KI dazukommt und zu welcher Entscheidung die Betreuungsperson Rückmeldung gibt."]],
  "zimmer-beleg": [["Nachvollziehbarer Beleg", "Nenne Person, Zeitmarke und Aussage. Erkläre, was die Stelle für deine Antwort zeigt."]],
  daten: [["Messgrössen getrennt", "Unterscheide zwischen geschätzter Betroffenheit von Aufgaben und beobachteter Beschäftigung."], ["Übertragbarkeit begrenzt", "Nenne eine Angabe über Schweizer Praktika, die beide Quellen offenlassen."]],
  ursachen: [["Weitere Ursache und Prüfung", "Formuliere eine zweite Erklärung und eine Beobachtung, bei der beide Erklärungen unterschiedliche Ergebnisse erwarten lassen."]],
  untersuchung: [["Vergleich konkret geplant", "Lege Region, Branche und Zeiträume fest. Gib an, wer verlässliche Angaben zu ausgeschriebenen und besetzten Plätzen liefern könnte."]],
  praxisaufgabe: [["Aufgabe, KI-Hilfe und Prüfung", "Beschreibe ein echtes Arbeitsprodukt, einen möglichen KI-Fehler und die Quelle, mit der ihr ihn entdeckt."]],
  betreuung: [["Lernziel und Feedback", "Formuliere ein beobachtbares Lernziel und lege fest, wer wann Rückmeldung wozu gibt."]],
  zugang: [["Zugang ohne Kontakte und Rücklagen", "Prüft, wer die Ausschreibung sieht, wie ausgewählt wird und welche Kosten entstehen."], ["Ersatzangebot eingeordnet", "Erklärt, welche praktische Erfahrung das Angebot der Schule ermöglicht und was im Betrieb zusätzlich gelernt würde."]],
  feedback: [["Konkrete Überarbeitung", "Haltet Vorteil, Zielkonflikt und eine daraus abgeleitete Änderung am Vorschlag fest."]],
  "urteil-text": [["Beleg und Abwägung", "Verbinde einen Medienbeleg mit einer Chance und einem Risiko. Begründe, wie du beide gewichtest."], ["Schritt und Forderung", "Nenne, was du selbst tun kannst und was eine Schule oder ein Betrieb konkret tun sollte."], ["Offene Frage", "Gib an, welche neue Information dich zu einem anderen Urteil bringen könnte."]],
  "podcast-notiz": [["Zeitmarke, Vorschlag und Grenze", "Nenne die Stelle, erkläre den Vorschlag und beschreibe eine Hürde, die für Jugendliche bestehen bleibt."]],
  "lernablauf": [["Eigenleistung sichtbar", "Beschreibe, welche Deutung du vor der KI-Nutzung selbst formulierst."], ["Überprüfung konkret", "Nenne eine Stelle oder Angabe im Original, mit der du die KI-Antwort prüfst."]],
  "lernnachweis": [["Verstehen überprüfbar", "Schlage eine Aufgabe vor, bei der du deine Deutung mit einer neuen Textstelle oder in einem kurzen Gespräch begründest."]],
  "clip-pruefung": [["Unabhängige Bestätigung", "Suche nach der ursprünglichen Veröffentlichung und prüfe die Behauptung über einen offiziellen Schulkanal."], ["Handeln bei Unsicherheit", "Entscheide, ob du den Clip weiterleitest, und begründe es."]],
  "clip-korrektur": [["Korrektur und Beleg", "Sag, welche Behauptung du zurücknimmst und worauf sich deine Korrektur stützt. Falls die Prüfung noch läuft, kennzeichne den Stand."]],
  "fairness-kriterium": [["Mechanismus erklärt", "Verbinde den ungleichen Zugang zu Computern mit den Chancen, früh Programmiererfahrung zu sammeln."], ["Kursziel geklärt", "Überlege, ob der Kurs vorhandenes Können vertiefen oder neuen Zugang eröffnen soll."]],
  "fairness-verfahren": [["Verfahren nachvollziehbar", "Nenne Kriterien und erkläre, wer eine strittige Entscheidung überprüft."], ["Wirkung messbar", "Beschreibe eine Beobachtung, mit der ihr den Zugang für Jugendliche ohne Vorerfahrung prüfen könnt."]],
  "daten-auswahl": [["Daten gezielt ausgewählt", "Trenne die inhaltlich nötigen Aussagen von Namen, Stimmen und Details, an denen man Personen erkennen kann."]],
  "daten-entscheidung": [["Risiko konkret", "Beschreibe, wer bei einem Upload Zugriff bekommen könnte und welche Speicherfragen offen sind."], ["Entscheidung begründet", "Wäge Aufwand und Nutzen ab und nenne eine Bedingung, unter der du das Tool einsetzen würdest."]]
};

function addFeedback(container, input) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "secondary feedback-button";
  button.textContent = "Antwort selbst prüfen";
  button.setAttribute("aria-expanded", "false");
  const panel = document.createElement("div");
  panel.id = input.id + "-feedback";
  panel.className = "feedback-panel";
  panel.hidden = true;
  button.setAttribute("aria-controls", panel.id);
  const instruction = document.createElement("p");
  instruction.textContent = "Markiere, was du in deinem Text bereits nachvollziehbar erklärt hast.";
  const list = document.createElement("div");
  const result = document.createElement("div");
  result.setAttribute("role", "status");
  const checks = feedback[input.id].map(([criterion, hint]) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label.append(checkbox, criterion);
    list.append(label);
    checkbox.addEventListener("change", refresh);
    return { checkbox, hint };
  });

  function refresh() {
    const hasDraft = Boolean(input.value.trim());
    list.hidden = !hasDraft;
    instruction.hidden = !hasDraft;
    result.replaceChildren();
    if (!hasDraft) {
      const start = document.createElement("p");
      start.textContent = "Schreibe zuerst einen kurzen Entwurf. Einstiegshilfe: " + checks[0].hint;
      result.append(start);
      return;
    }
    const remaining = checks.filter(({ checkbox }) => !checkbox.checked);
    const summary = document.createElement("p");
    summary.textContent = remaining.length
      ? `${checks.length - remaining.length} von ${checks.length} Kriterien abgedeckt. Hier kannst du weiterarbeiten:`
      : "Nach deiner Selbsteinschätzung sind alle Kriterien abgedeckt. Prüfe zum Schluss, ob jemand anderes deine Begründung ohne Nachfragen nachvollziehen kann.";
    result.append(summary);
    if (!remaining.length) return;
    const hints = document.createElement("ul");
    for (const { hint } of remaining) {
      const item = document.createElement("li");
      item.textContent = hint;
      hints.append(item);
    }
    result.append(hints);
  }

  button.addEventListener("click", () => {
    panel.hidden = !panel.hidden;
    button.setAttribute("aria-expanded", String(!panel.hidden));
    if (!panel.hidden) refresh();
  });
  input.addEventListener("input", () => {
    for (const { checkbox } of checks) checkbox.checked = false;
    if (!panel.hidden) refresh();
  });
  panel.append(instruction, list, result);
  container.append(button, panel);
}

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
    addFeedback(container, input);
    const required = key !== "podcast" && !key.startsWith("modul-");
    fields.push({ heading, question, input, required });
  }
}

function updateProgress() {
  const required = fields.filter(field => field.required);
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
  for (const { input } of fields) {
    input.value = "";
    input.dispatchEvent(new Event("input"));
  }
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

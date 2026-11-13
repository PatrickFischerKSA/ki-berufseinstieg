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
  muehlhoff: ["SRF Sternstunde Philosophie · Rainer Mühlhoff", [
    ["muehl-wettlauf", "Warum erscheint demokratische Mitsprache in der von Mühlhoff beschriebenen Wettlauf-Logik als Hindernis? Gib das Argument in eigenen Worten wieder und prüfe eine seiner Voraussetzungen."],
  ]],
  "muehl-macht": ["Mühlhoff · Staat und Technologiekonzerne", [
    ["muehl-macht", "Welche Abhängigkeit kann entstehen, wenn der Staat zentrale Informationssysteme an private Anbieter auslagert? Belege deine Antwort mit einer Zeitmarke."],
  ]],
  "muehl-full-existing": ["Mühlhoff · Ganze Sendung", [
    ["muehl-ganz", "Wenn du die ganze Sendung gesehen hast, vergleiche zwei Aussagen aus verschiedenen Teilen des Gesprächs. Notiere beide Zeitmarken und erkläre, wie die Aussagen zusammenhängen."]
  ]],
  "club-thema": ["Club · Arbeit und Ausbildung", [["club-hebel", "Welche zwei Handlungsspielräume nennt der Ausschnitt? Gib für beide ein Beispiel aus deiner Umgebung."], ["club-qualitaet", "Was könnte an einer Aufgabe wertvoll sein, auch wenn KI sie schneller erledigt? Begründe es an einem Praktikumsbeispiel."]]],
  "club-ganz": ["Club · Ganze Sendung", [["club-ganz-gewinn", "Vergleiche die Chancen durch Produktivitätsgewinne mit der Sorge um den Berufseinstieg. Wer könnte jeweils profitieren oder benachteiligt werden? Belege beide Perspektiven."], ["club-ganz-urteil", "Welche Massnahme würdest du nach der ganzen Sendung zuerst erproben? Begründe deine Wahl und nenne einen Einwand aus einer anderen Passage."]]],
  "zimmer-thema": ["Zimmer 42 · Automatisierung im Alltag", [["zimmer-alltag-zeit", "Warum gefällt Espenlaub der Staubsaugerroboter, obwohl er auch selbst gerne staubsaugt? Übertrage seine Begründung auf eine Aufgabe mit KI."], ["zimmer-alltag-grenze", "Welche Alltagstätigkeit würdest du selbst behalten? Vergleiche deinen Grund mit der Skepsis, die Espenlaub seiner Grossmutter zuschreibt."]]],
  "zimmer-ganz": ["Zimmer 42 · Ganze Sendung", [["zimmer-ganz-spannung", "Vergleiche Espenlaubs Alltagsbeispiel mit Bleischs Sorge um Fähigkeiten. Wann wird Entlastung für dich zum Verlust einer Lernchance?"], ["zimmer-ganz-regel", "Welche persönliche Regel zur KI-Nutzung leitest du aus dem Gespräch ab? Verbinde den Gedanken der Selbstwirksamkeit mit einem zweiten Moment der Sendung."]]],
  "muehl-thema": ["Mühlhoff · Staat und Technologiekonzerne", [["muehl-kontrolle", "Entwirf eine Regel, mit der eine Behörde bei externer Software die Kontrolle über Entscheidungen behält. Begründe sie mit Mühlhoffs These."]]],
  "muehl-ganz-vertiefung": ["Mühlhoff · Ganze Sendung", [["muehl-ganz-urteil", "Wie unterscheidet Mühlhoff eine demokratische Gegenwart von einer möglichen politischen Radikalisierung? Verbinde die Unterscheidung mit seiner These zum Einfluss privater Unternehmen."]]],
  "muehl-wettlauf-vertiefung": ["Mühlhoff · KI-Wettlauf und Demokratie", [["muehl-mitsprache", "Wer hätte im beschriebenen Modell einer CEO-Monarchie Einfluss auf die Führung? Vergleiche das mit demokratischer Mitsprache."]]],
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
    ["lernen-quelle", "Welche Deutung ist durch den Brief gedeckt?"],
    ["lernen-prompt", "Welche Frage an den Chatbot hilft dir, selbst weiterzuarbeiten?"],
    ["lernablauf", "Entwirf einen Ablauf mit einem eigenen ersten Versuch, einer gezielten KI-Frage und einer Prüfung am Original."],
    ["lernnachweis", "Wie könnte die Lehrperson erkennen, was du selbst verstanden hast? Entwirf einen kurzen Lernnachweis."]
  ]],
  "modul-deepfakes": ["Wahlmodul · Deepfakes und Desinformation", [
    ["deepfake-indiz", "Wie gehst du als Erstes vor?"],
    ["deepfake-update", "Das Sekretariat bestätigt, dass die Prüfungen stattfinden. Was schreibst du?"],
    ["clip-pruefung", "Plane drei Prüfschritte. Welche unabhängige Quelle könnte die Ankündigung bestätigen? Was tust du, solange du keine Bestätigung hast?"],
    ["clip-korrektur", "Du hast den Clip bereits geteilt. Schreibe eine kurze Korrektur für den Klassenchat und erkläre, wie du mit verbleibender Unsicherheit umgehst."]
  ]],
  "modul-fairness": ["Wahlmodul · Faire Entscheidungen mit KI", [
    ["fairness-regel", "Der Kurs soll Jugendlichen den Einstieg eröffnen. Welche Regel passt zu diesem Ziel?"],
    ["fairness-auswertung", "Wie prüfst du nach der Vergabe, ob das Verfahren den Zugang verbessert?"],
    ["fairness-kriterium", "Erkläre, weshalb das Auswahlkriterium bestimmte Jugendliche benachteiligen könnte. Welche Fähigkeit oder welches Potenzial soll der Kurs eigentlich fördern?"],
    ["fairness-verfahren", "Entwirf ein Auswahlverfahren mit klaren Kriterien und einer Möglichkeit zur Überprüfung. Wie würdest du erkennen, ob es fairer ist?"]
  ]],
  "modul-daten": ["Wahlmodul · Datenschutz im Schulalltag", [
    ["daten-minimieren", "Welcher Arbeitsentwurf enthält die für die Zusammenfassung nötige Information?"],
    ["daten-tool", "Das Tool macht keine klaren Angaben zur Speicherung. Was entscheidet ihr?"],
    ["daten-auswahl", "Welche Informationen braucht ihr für die Zusammenfassung? Welche würdest du vor einer möglichen Weitergabe entfernen und weshalb?"],
    ["daten-entscheidung", "Vergleiche eine manuelle Auswertung mit der Nutzung eines Online-Tools. Welche Fragen zu Zugriff, Speicherung und Einverständnis klärst du vor der Entscheidung?"]
  ]]
};

const choices = {
  "lernen-quelle": [
    [
      "Die Arbeiterinnen bitten den Gemeinderat um Beleuchtung.",
      "Diese Deutung stützt sich auf Anrede, Unterschrift und das Verb «bitten». Prüfe als Nächstes, ob der Brief etwas über die spätere Entscheidung verrät."
    ],
    [
      "Der Gemeinderat verspricht den Arbeiterinnen Beleuchtung.",
      "Die Anrede benennt den Empfänger. Die Unterschrift benennt die Absenderin. Suche im Wortlaut nach einem Versprechen."
    ],
    [
      "Der Fabrikweg wurde 1912 beleuchtet.",
      "Die Jahreszahl datiert den Brief. Für die Umsetzung bräuchtest du eine weitere Quelle, etwa ein Sitzungsprotokoll."
    ]
  ],
  "lernen-prompt": [
    [
      "Gib mir zwei Prüffragen zu Absender und Empfänger.",
      "Die Fragen können dich auf überprüfbare Merkmale lenken. Beantworte sie mit dem Brief vor dir."
    ],
    [
      "Schreib eine fertige Interpretation.",
      "Du erhältst schnell einen Text. Um deine Deutung zu üben, formuliere zuerst eine eigene These und bitte um eine Rückfrage dazu."
    ],
    [
      "Bist du sicher, dass deine Antwort stimmt?",
      "Eine Zusicherung liefert noch keinen Beleg. Bitte um die genaue Textstelle und gleiche sie selbst ab."
    ]
  ],
  "deepfake-indiz": [
    [
      "Im offiziellen Schulkanal nachsehen und bei Bedarf das Sekretariat fragen.",
      "So prüfst du die Behauptung unabhängig vom Clip. Der ältere Prüfungsplan ist ein Anhaltspunkt, bis die Schule den aktuellen Stand bestätigt."
    ],
    [
      "Den Clip weiterleiten und die Klasse um Meinungen bitten.",
      "Das erhöht die Reichweite der unbestätigten Meldung. Frage gezielt bei einer Stelle nach, die den Prüfungsplan verantwortet."
    ],
    [
      "Den versetzten Ton als Beweis für einen Deepfake werten.",
      "Tonversatz kann etwa bei der Übertragung entstehen. Prüfe die Aussage über einen offiziellen Kanal, auch wenn die Echtheit des Clips offenbleibt."
    ]
  ],
  "deepfake-update": [
    [
      "Das Sekretariat bestätigt den Prüfungsplan. Meine frühere Nachricht war falsch.",
      "Du korrigierst die konkrete Behauptung und nennst die Quelle. Zur Herstellung des Videos bleibt die Frage offen."
    ],
    [
      "Der Clip ist nachweislich KI-generiert.",
      "Die Bestätigung widerlegt die Absage. Ob KI eingesetzt wurde, lässt sich daraus nicht bestimmen."
    ],
    [
      "Ich lösche nur meine Nachricht.",
      "Das begrenzt weitere Zugriffe. Wer die Nachricht bereits gesehen hat, braucht zusätzlich eine kurze Korrektur."
    ]
  ],
  "fairness-regel": [
    [
      "Kostenlose Einführungsaufgabe anbieten und die Plätze unter geeigneten Bewerbungen auslosen.",
      "Alle können sich an derselben Aufgabe versuchen. Prüfe zusätzlich, ob die Aufgabe ohne Vorkenntnisse und mit Schulgeräten lösbar ist."
    ],
    [
      "Die beiden Personen mit Kursbesuch nehmen.",
      "Damit wählst du Alex und Noa. Für einen Einstiegskurs kann das bisherige Zugangsvorteile verstärken."
    ],
    [
      "Nur das Motivationsschreiben bewerten.",
      "Das macht Motivation sichtbar, begünstigt aber womöglich Jugendliche mit Schreiberfahrung oder Unterstützung. Prüfe, welche Formate Motivation zeigen dürfen."
    ]
  ],
  "fairness-auswertung": [
    [
      "Bewerbungen und Zusagen nach Vorerfahrung vergleichen und Rückmeldungen einholen.",
      "Die Kombination zeigt, wer sich bewirbt, wer einen Platz erhält und welche Hürden noch bestehen. Bei wenigen Fällen sind die Zahlen vorsichtig zu deuten."
    ],
    [
      "Zählen, ob beide Plätze besetzt sind.",
      "Das zeigt die Auslastung. Um Zugang zu beurteilen, brauchst du auch Angaben darüber, wer sich beworben hat und wer ausgewählt wurde."
    ],
    [
      "Nur die beiden ausgewählten Personen fragen, ob es fair war.",
      "Ihre Erfahrung ist relevant. Ergänze Rückmeldungen von Personen ohne Zusage und prüfe, wer sich gar nicht beworben hat."
    ]
  ],
  "daten-minimieren": [
    [
      "Eine befragte Person berichtet von Schlafproblemen vor mündlichen Prüfungen.",
      "Die Belastung bleibt erkennbar. Das Detail zur Herkunft entfällt. Prüfe im Gesamtkontext, ob die Person trotzdem erkennbar wäre."
    ],
    [
      "Die einzige Person aus einem bestimmten Dorf schläft vor Prüfungen schlecht.",
      "Auch ohne Namen kann das Merkmal in einer kleinen Klasse auf eine Person hinweisen. Für die Zusammenfassung genügt die Belastung."
    ],
    [
      "Ich lade die Tonaufnahme hoch, aber benenne die Datei um.",
      "Die Aufnahme enthält weiterhin die Stimme und den Inhalt des Interviews. Der Dateiname ändert daran wenig."
    ]
  ],
  "daten-tool": [
    [
      "Wir fassen vorerst selbst zusammen und klären mögliche Tools mit der Lehrperson.",
      "Die Aufgabe geht weiter. Für einen späteren Einsatz könnt ihr Zweck, Zugriff, Aufbewahrung und Einverständnis klären."
    ],
    [
      "Wir laden hoch, weil die Person dem Interview zugestimmt hat.",
      "Die Zustimmung zum Interview beantwortet die Frage der Weitergabe an ein Tool noch nicht. Klärt den zusätzlichen Verarbeitungsschritt."
    ],
    [
      "Wir nutzen ein privates Browserfenster und laden hoch.",
      "Der private Modus beeinflusst vor allem Spuren auf dem Gerät. Er klärt nicht, wie der Dienst die Aufnahme verarbeitet."
    ]
  ]
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

function addChoiceFeedback(container, input, options) {
  input.add(new Option("Wähle eine Antwort", ""));
  for (const [answer] of options) input.add(new Option(answer, answer));

  const result = document.createElement("div");
  result.className = "feedback-panel";
  result.id = input.id + "-feedback";
  result.setAttribute("role", "status");
  input.setAttribute("aria-describedby", result.id);
  const refresh = () => {
    const selected = options.find(([answer]) => answer === input.value);
    result.textContent = selected?.[1] ?? "";
    result.hidden = !selected;
  };
  input.addEventListener("input", refresh);
  container.append(result);
  return refresh;
}

const openAnswerCriteria = {
  "muehl-mitsprache": [
    ["Entscheidungsmacht verglichen", [/aktionär|anteil|shareholder|aufsichtsrat|investor/, /wahl|bürger|mitsprach|stimmrecht|demokrati/], "Nenne, wer im Modell Einfluss hat, und vergleiche, worauf politisches Stimmrecht in einer Demokratie beruht."]
  ],
  "muehl-ganz-urteil": [
    ["Gegenwart und mögliche Entwicklung unterschieden", [/demokrati|rechtsstaat/, /radikalis|entwicklung|prozess|machttransfer|abhängig/], "Erkläre, weshalb ein Machttransfer ein Risiko für die Demokratie sein kann, und belege, wie Mühlhoff den gegenwärtigen Zustand beschreibt."]
  ],
  "muehl-kontrolle": [
    ["Kontrollregel begründet", [/behörd|staat|verwaltung/, /prüf|einspruch|offenleg|audit|entscheid|wechsel/], "Nenne eine Entscheidung, für die die Behörde verantwortlich bleiben soll. Beschreibe, wer sie prüfen oder anfechten kann."]
  ],
  "zimmer-ganz-regel": [
    ["Regel mit Selbstwirksamkeit verbunden", [/selbstwirksam|einfluss|gestalt|entscheide|kontroll/, /regel|wenn|erst|nur|werde/], "Schreibe deine Regel als Wenn-dann-Satz und zeige anhand zweier Stellen, welchen Entscheidungsspielraum du behalten möchtest."]
  ],
  "zimmer-ganz-spannung": [
    ["Entlastung und Übung abgewogen", [/zeit|entlast|roboter/, /lern|üb|fähig|selber/], "Beschreibe für dieselbe Tätigkeit einen sinnvollen Einsatz und einen Einsatz, bei dem die eigene Übung wegfällt."]
  ],
  "zimmer-alltag-grenze": [
    ["Eigene Grenze und Perspektive verglichen", [/grossmutter|oma|skepsis/, /selbst|eigen|weil|gerne/], "Nenne eine Tätigkeit und erkläre, ob dir dabei Können, Freude oder Verantwortung wichtig ist. Setze deinen Grund zur Haltung der Grossmutter in Beziehung."]
  ],
  "zimmer-alltag-zeit": [
    ["Zeitgewinn auf eine Aufgabe übertragen", [/zeit|entlast|schneller/, /staubsaug|roboter|alltag/], "Erkläre zuerst, wofür die frei werdende Zeit wertvoll ist, und benenne dann einen vergleichbaren Arbeitsschritt mit KI."]
  ],
  "club-ganz-urteil": [
    ["Massnahme und Einwand verbunden", [/betrieb|schule|ausbild|praktik|einstieg/, /einwand|aber|jedoch|risiko|aufwand/], "Formuliere eine konkrete Massnahme, belege den Einwand mit einer zweiten Stelle und erläutere, wie du ihm begegnen würdest."]
  ],
  "club-ganz-gewinn": [
    ["Verteilung und Einstieg verglichen", [/produktivit|gewinn|einkommen|investier/, /einstieg|bewerb|erste stell|praktik/], "Zeige, wie ein Betrieb einen Gewinn nutzen könnte, und erkläre, warum eine Person auf Stellensuche davon nicht zwingend profitiert."]
  ],
  "club-qualitaet": [
    ["Wert der Aufgabe erklärt", [/lern|qualit|feedback|erfahr|kontakt/, /weil|damit|dadurch|beispiel/], "Beschreibe einen konkreten Arbeitsablauf und erkläre, was die Person dabei lernt oder für andere verbessert."]
  ],
  "club-hebel": [
    ["Arbeit und Ausbildung unterschieden", [/betrieb|arbeit/, /ausbild|schule|lehre/], "Nenne für den Betrieb eine veränderbare Aufgabe und für die Ausbildung eine Gelegenheit zum Üben."]
  ],
  "muehl-wettlauf": [
    ["Wettlauf und Regulierung verbunden", [/wettlauf|konkurrenz|überlegen|vorsprung/, /regulier|mitsprach|demokrati|verlangsam/], "Höre ab 08:16. Erkläre, warum manche Akteure Regulierung als Nachteil im Wettbewerb darstellen."],
    ["Voraussetzung geprüft", [/voraussetz|annahme|fraglich|ob|weil|beleg/], "Prüfe zum Beispiel, ob schnellere Entwicklung zwangsläufig wichtiger ist als demokratische Kontrolle."]
  ],
  "muehl-macht": [
    ["Abhängigkeit erklärt", [/staat|behörd|verwaltung/, /abhängig|souverän|macht|kontroll|entscheid/, /privat|anbiet|konzern|palantir/], "Höre ab 12:43. Erkläre, was eine Behörde verlieren könnte, wenn ein Anbieter Infrastruktur und Abläufe bestimmt."],
    ["Zeitmarke vorhanden", [/\b\d{1,2}:\d{2}\b/], "Notiere, wann deine Belegstelle beginnt und ob du die Zeit aus dem Original oder aus dem Ausschnitt verwendest."]
  ],
  "muehl-ganz": [
    ["Zwei Zeitmarken vorhanden", [/\b\d{1,2}:\d{2}\b[\s\S]*\b\d{1,2}:\d{2}\b/], "Gib für jede Aussage eine Zeitmarke aus der vollständigen Sendung an."],
    ["Zusammenhang der Aussagen", [/zusammen|ergänz|widerspr|beide|hingegen|beispiel|weil/], "Erkläre, ob eine Aussage die andere illustriert, ergänzt oder einschränkt."]
  ],
  lernziel: [
    ["Konkrete Praktikumsaufgabe", [/entwurf|text|recherch|termin|kund|gestalt|programmier|plan|organis|prüf|dokument/], "Nenne eine konkrete Aufgabe und beschreibe, was am Ende vorliegen soll."],
    ["Eigener Lernschritt und KI-Hilfe", [/selbst|eigen|zuerst|allein/, /\bki\b|chatbot|tool|sprachmodell/], "Ergänze, welchen Schritt du selbst übst und wobei KI gezielt helfen könnte."]
  ],
  "club-nutzen": [
    ["Möglicher Nutzen in der Medizin", [/diagnos|medizin|patient|ärzt|arzt/, /zeit|entlast|schneller/], "Höre ab ca. 24:03 im Original. Wer könnte durch KI Zeit gewinnen und wofür?"],
    ["Erschwerter Einstieg", [/einstieg|berufszugang|erste stell|praktik|junior|bewerb/], "Höre ab ca. 24:23. Erkläre, warum eine Stelle bestehen kann, obwohl der Zugang schwieriger wird."],
    ["Bestehende Stelle und erste Chance unterschieden", [/verlier|verlust|kündig|bestehend|bereits|entlass/, /erst|einstieg|zugang|such|bewirb/], "Vergleiche zwei Personen. Eine arbeitet bereits im Betrieb, die andere bewirbt sich erstmals. Beschreibe, was jede verlieren könnte."]
  ],
  "club-bewerbung": [
    ["KI auf Bewerbungsseite", [/bewerb|lebenslauf|anschreiben/, /schreib|formulier|entwurf|erstell|generier/], "Höre ab ca. 24:43. Beschreibe, welchen Schritt die Bewerbenden mit KI erledigen."],
    ["KI auf Betriebsseite", [/betrieb|unternehmen|arbeitgeber|personal|algorithm/, /sortier|filter|auswahl|bewert|absag|prüf/], "Ergänze, wie KI im Betrieb bei der Auswahl oder bei Absagen eingesetzt wird."],
    ["Menschlicher Entscheid begründet", [/mensch|personal|person|team/, /entscheid|prüf|gespräch|vorauswahl|absag/, /weil|damit|fair|kontext|einzelfall/], "Wähle einen Entscheidungspunkt und nenne einen konkreten Umstand, den ein Mensch dort berücksichtigen kann."]
  ],
  "club-verantwortung": [
    ["Aufgabe der Schule", [/schule|bildung|lehrperson/, /vermittel|vernetz|kontakt|fachperson|vorbereit|begleit/], "Höre ab ca. 26:42. Beschreibe, wie Bildungsinstitutionen Kontakte oder Zugänge zur Praxis ermöglichen können."],
    ["Aufgabe des Betriebs", [/betrieb|unternehmen|arbeitgeber/, /anbiet|schaff|bereitstell|betreu|ausbild/], "Erkläre, welchen Platz oder welche Betreuung der Betrieb anbieten soll."],
    ["Langfristiger Nutzen", [/fachkräft|nachwuchs|zukünft|langfrist|wissenstransfer/], "Verbinde die heutige Einstiegsstelle mit dem späteren Bedarf an erfahrenen Fachkräften."]
  ],
  "club-beleg": [
    ["Person und Zeitmarke", [/coppola|bienefeld|lüthi/, /\b\d{1,2}:\d{2}\b/], "Nenne die sprechende Person und die Zeitmarke im Ausschnitt oder im Original."],
    ["Art und Aussagekraft", [/beispiel|daten|erfahr|einschätz|prognos|beobacht/, /zeigt|stützt|beleg|berichtet|sagt|nennt|beschreib/], "Gib die Aussage in eigenen Worten wieder und erkläre, was ein Beispiel oder eine Prognose hier stützen kann."]
  ],
  "zimmer-lernen": [
    ["Zusammenhang zwischen Übung und Können", [/üb|trainier|praktizier|anwend|gebrauch/, /verlust|verlier|verkümmer|weniger|abbau|erhalt|entwickel/], "Höre ab 33:47. Erkläre in einem Satz, was mit einer Fähigkeit geschehen kann, wenn sie kaum noch eingesetzt wird."],
    ["Konkrete Fähigkeit bei der Hausarbeit", [/formulier|schreib|argument|denk|begründ|recherch|widerspruch|struktur/], "Wähle einen Schritt der Hausarbeit und benenne die Fähigkeit, die beim Delegieren dieses Schritts weniger geübt wird."]
  ],
  "zimmer-vergleich": [
    ["Zeitgewinn und weniger Übung", [/zeit|entlast|schneller/, /verlust|verlier|weniger|fähigkeit|üb/], "Vergleiche die beiden Wirkungen ab ca. 34:36. Zeige an derselben Aufgabe, wie beides gleichzeitig eintreten kann."],
    ["Vergleich mit anderen Medien erklärt", [/spiel|buch|büch|lesen/, /nutz|wie|zweck|bewusst|abhäng|unterschied/], "Erkläre, warum Espenlaub Spiele oder Bücher nennt und was die Art der Nutzung für die Wirkung bedeutet."]
  ],
  "zimmer-praxis": [
    ["Konkrete Fähigkeit benannt", [/schreib|formulier|zielgruppe|aufbau|glieder|struktur|auswähl|recherch|ton|sprache/], "Nenne eine Fähigkeit, die beim eigenen Schreiben einer Ankündigung geübt wird."],
    ["Betreuter Übungsschritt", [/selbst|eigen|zuerst|zunächst/, /feedback|rückmeld|betreu|vergleich|überarbeit|besprech/], "Beschreibe, was die Praktikantin zuerst selbst entwirft und worauf sie anschliessend Rückmeldung bekommt."]
  ],
  "zimmer-beleg": [
    ["Person und Zeitmarke", [/bleisch|espenlaub/, /\b\d{1,2}:\d{2}\b/], "Notiere Name und Zeitmarke. Gib an, ob du im Ausschnitt oder im Original gezählt hast."],
    ["Aussage und Begründungsart", [/beispiel|vergleich|einschätz|erfahr|prognos|daten/, /sagt|erklär|meint|nennt|zeigt|beleg|stützt/], "Fasse die konkrete Aussage zusammen und begründe, wie du ihre Art einordnest."]
  ],
  daten: [
    ["Messgrösse der ILO", [/\bilo\b|arbeitsorganisation/, /aufgab|tätig|expon|betroffen|potenzial/], "Beschreibe, was die ILO über Aufgaben oder deren mögliche Betroffenheit schätzt."],
    ["Messgrösse der Stanford-Studie", [/stanford|\busa\b|\bus\b/, /beschäftig|lohn|arbeitnehm|berufseinst/], "Nenne, welche beobachteten Beschäftigungsdaten untersucht werden."],
    ["Offene Frage für regionale Praktika", [/praktik|einstiegsplätz/, /region|lokal|schweiz|kanton|hier/, /offen|fehl|unklar|nicht|keine|bräucht/], "Nenne eine Zahl, die ihr lokal erheben müsstet, etwa die Anzahl ausgeschriebener und besetzter Praktika."]
  ],
  ursachen: [
    ["Alternative Erklärung", [/konjunktur|budget|kost|nachfrag|aufträg|betreuung|personal|saison|wirtschaft|spar/], "Formuliere eine andere mögliche Ursache und erkläre, warum sie das Praktikumsangebot beeinflussen könnte."],
    ["Vergleich zur Prüfung", [/vergleich|prüf|untersuch|befrag|erheb|zahlen|daten/, /betrieb|branche|zeit|jahr|region/], "Plane einen Vergleich zwischen Betrieben oder Zeiträumen, bei dem sich die beiden Erklärungen unterscheiden lassen."]
  ],
  untersuchung: [
    ["Region, Branche und Zeitraum", [/region|kanton|gemeinde|zürich|aarau|schweiz|bern|basel|aargau/, /branche|betrieb|pflege|handel|informatik|kultur|gastronom/, /jahr|monat|zeitraum|20\d{2}|semester/], "Lege ein geografisches Gebiet, eine Branche und zwei vergleichbare Zeiträume fest."],
    ["Ausgeschriebene und besetzte Plätze", [/ausgeschrieb|ausschreib|inserat|angebot|offen/, /besetz|antritt|vertrag|vergeb|zugesag/], "Erkläre, wie ihr offene Angebote und tatsächlich besetzte Plätze getrennt erfassen würdet."]
  ],
  praxisaufgabe: [
    ["Arbeitsprodukt und Aufgabenverteilung", [/selbst|eigen|praktikantin/, /entwurf|ankündig|text|recherch|termin|veranstalt/, /\bki\b|chatbot|tool/], "Nenne ein Arbeitsprodukt und trenne den eigenen Schritt der Praktikantin von der Hilfe durch KI."],
    ["Konkreter Fehler und Kontrolle", [/fehler|falsch|halluzin|erfind|stimmt nicht/, /prüf|vergleich|abgleich|quelle|programm|nachfrag/], "Nenne einen möglichen Fehler und die konkrete Quelle oder Person, mit der ihr ihn überprüft."]
  ],
  betreuung: [
    ["Beobachtbares Lernziel", [/lern|kann|ziel|fähig/, /schreib|formulier|prüf|erklär|plan|gestalt|recherch|begrün/], "Formuliere, was die Praktikantin nach zwei Wochen konkret zeigen oder selbst erledigen kann."],
    ["Betreuung, Zeitpunkt und Rückmeldung", [/betreu|mentor|teamleit|fachperson/, /tag|woche|beginn|ende|mitte|nach|vor/, /feedback|rückmeld|besprech/], "Nenne eine betreuende Rolle, einen Termin und den Entwurf oder Schritt, zu dem es Rückmeldung gibt."]
  ],
  zugang: [
    ["Ausschreibung und Auswahl", [/ausschreib|veröffentlich|inserat|portal|schule/, /auswahl|kriteri|gespräch|los|bewerb/], "Erkläre, wo alle Interessierten vom Platz erfahren und nach welchen Kriterien ihr auswählt."],
    ["Entschädigung", [/entschäd|lohn|bezahlt|vergüt|spes|fahrtkost|kosten/], "Beschreibe, wie ihr Entschädigung oder notwendige Ausgaben regelt."],
    ["Schulangebot und fehlende Betriebspraxis", [/schule|praxisprojekt|ersatz|simulation|auftrag/, /fehl|grenz|betrieb|alltag|team|kund/], "Nenne ein Angebot der Schule und eine konkrete Erfahrung, die darin schwieriger zu ermöglichen ist."]
  ],
  feedback: [
    ["Vorteil und Zielkonflikt", [/vorteil|nutzen|chance|zugang|gewinn/, /konflikt|nachteil|aufwand|kost|risiko|zeit|aber/], "Nenne einen Vorteil und erkläre, welche Anforderung damit in Spannung steht."],
    ["Änderung nach Rückmeldung", [/änder|überarbeit|ergänz|pass.*an|künftig|neu|streichen/], "Formuliere, welchen Teil des Vorschlags ihr aufgrund der Rückmeldung konkret ändert."]
  ],
  "urteil-text": [
    ["Konkreter Medienbezug", [/club|coppola|bienefeld|zimmer|bleisch|espenlaub|podcast|srf|\bard\b/, /\b\d{1,2}:\d{2}\b|zeigt|erklär|sagt|berichtet|beispiel|argument|nennt/], "Nenne eine konkrete Aussage aus einem Video oder dem Podcast. Erkläre, wie sie dein Urteil stützt. Eine Zeitmarke macht sie auffindbar."],
    ["Chance und Risiko gegeneinander abgewogen", [/chance|vorteil|nutzen|entlast|zeitgewinn|hilf|helfen/, /risiko|nachteil|sorge|verlust|erschwer|gefahr|problem/, /aber|jedoch|gleichzeitig|abwäg|überwieg|wichtiger|hingegen|trotz/], "Wäge Chance und Risiko an derselben Situation ab. Sage, welcher Aspekt für dein Urteil mehr Gewicht hat und warum."],
    ["Eigener nächster Schritt", [/ich (will|werde|möchte|kann|würde|frage|such|prüf|schreib|bewirb)|mein nächst/], "Formuliere einen Schritt, den du selbst bei der Vorbereitung oder Praktikumssuche umsetzen kannst."],
    ["Konkrete Forderung an Schule oder Betrieb", [/schule|betrieb|unternehmen|arbeitgeber/, /soll|muss|ford|biete|anbiet|schaff|vermittel|betreu/], "Nenne einen Verantwortlichen und eine überprüfbare Massnahme, etwa regelmässiges Feedback oder eine öffentlich ausgeschriebene Einstiegsstelle."],
    ["Information, die das Urteil ändern könnte", [/daten|zahlen|vergleich|befrag|studie|information|nachweis|beleg/, /ändern|revidier|anders|falls|wenn|abhängig/], "Nenne eine Information, die dir noch fehlt, und beschreibe, bei welchem Ergebnis du dein Urteil ändern würdest."]
  ],
  "podcast-notiz": [
    ["Zeitmarke und Vorschlag", [/\b\d{1,2}:\d{2}\b/, /vorschl|empfehl|soll|kann|idee/], "Notiere die Zeitmarke und gib den Vorschlag in eigenen Worten wieder."],
    ["Nutzen und offene Hürde", [/hilft|profit|nutzen|chance/, /hürde|fehl|offen|problem|schwierig|kein/], "Erkläre, wem der Vorschlag hilft und welche Hürde bei der Praktikumssuche bestehen bleibt."]
  ],
  lernablauf: [
    ["Eigener erster Versuch", [/selbst|eigen|zuerst/, /deut|these|les|notier/], "Beginne mit deiner eigenen These. Wer bittet hier wen um welche Massnahme?"],
    ["Gezielte KI-Frage", [/frage|frag|prompt|bitte den/, /chatbot|\bki\b|sprachmodell/], "Schreibe die Frage aus, die du dem Chatbot stellen würdest, etwa nach einem Hinweis zum Absender."],
    ["Prüfung am Original", [/anrede|unterschrift|wortlaut|textstelle|original/, /prüf|gleich|vergleich|beleg|zeigt/], "Nenne eine konkrete Stelle im Brief und erkläre, welche Behauptung du damit prüfst."]
  ],
  lernnachweis: [
    ["Konkreter Lernnachweis", [/gespräch|mündlich|erklär|aufgabe|demonstrier|präsentier/], "Beschreibe, was die Schülerin in einem kurzen Gespräch oder an einer neuen Textstelle zeigen soll."],
    ["Nachvollziehbare Begründung", [/begründ|beleg|textstelle|zitat|wortlaut/, /deut|interpret|these|schl[uü]ss|textstelle/], "Lass die Schülerin ihre Deutung an einer Stelle aus dem Brief begründen."]
  ],
  "clip-pruefung": [
    ["Herkunft des Clips", [/ursprung|original|erstveröffentlich|absender|wer.*geteilt|quellenlink/], "Suche nach der ersten Veröffentlichung und frage, woher der Clip stammt."],
    ["Unabhängige Bestätigung", [/sekretariat|schulportal|schulleitung|offiziell|prüfungsplan/], "Nenne den offiziellen Schulkanal oder eine zuständige Person, bei der du nachfragst."],
    ["Handeln bis zur Bestätigung", [/weiterleit|leit.*weiter|teil|verbreit|wart/, /nicht|kein|erst|bis|bestätig/], "Sag, ob du die Nachricht weiterleitest, und erkläre, was du bis zur Bestätigung tust."]
  ],
  "clip-korrektur": [
    ["Konkrete Korrektur", [/prüf|absag/, /statt|falsch|zurück|gilt|planmässig/], "Schreibe für den Chat klar auf, welche frühere Behauptung du korrigierst."],
    ["Quelle der Korrektur", [/sekretariat|schulportal|schulleitung|offizielle bestätig/], "Nenne die Stelle, die den aktuellen Prüfungsplan bestätigt hat."],
    ["Verbleibende Unsicherheit", [/unklar|offen|unbekannt|nicht.*(wissen|klar|bestätig|nachweis|beweis)/, /clip|video|deepfake|\bki\b|echt/], "Trenne den bestätigten Prüfungsplan von der offenen Frage, wie der Clip entstanden ist."]
  ],
  "fairness-kriterium": [
    ["Zusammenhang mit ungleichen Chancen", [/zugang|computer|gerät|zuhause|zu hause|ressource/, /erfahrung|vorkennt|programmier|üben|kurs/], "Erkläre, wie fehlender Zugang zu Geräten die Chance beeinflusst, schon vor dem Kurs Programmiererfahrung zu sammeln."],
    ["Ziel des Kurses", [/einstieg|anfänger|neuling|potenzial|lernchance|interesse|team|vertief|förder/], "Nenne ein konkretes Können, das der Kurs entwickeln soll, und leite daraus ein geeignetes Kriterium ab."]
  ],
  "fairness-verfahren": [
    ["Konkrete Auswahlregel", [/los|aufgabe|kriteri|bewerb|platz|motiv/, /gleich|kostenlos|ohne vorkennt|los|bewert|punkt|regel/], "Erkläre, wie zwei Plätze vergeben werden und welche Voraussetzungen für alle gelten."],
    ["Möglichkeit zur Überprüfung", [/einspruch|widerspruch|beschwer|überprüf|kontroll/, /lehrperson|leitung|kommission|mensch|team|person/], "Nenne, an wen sich jemand wenden kann, wenn eine Entscheidung unklar ist."],
    ["Wirkung beobachten", [/vergleich|auswert|rückmeld|befrag|zähl|quote/, /erfahrung|zusag|absag|bewerb|teilnahm/], "Vergleiche Bewerbungen und Zusagen mit und ohne Vorerfahrung. Nenne, woran du eine Verbesserung erkennen würdest."]
  ],
  "daten-auswahl": [
    ["Relevante Aussage erhalten", [/schlaf|belast|stress|angst/, /prüfung|mündlich/], "Formuliere, welche Belastung in der Zusammenfassung stehen soll."],
    ["Erkennbare Merkmale reduzieren", [/name|stimme|dorf|herkunft|tonaufnahme|persönlich/, /entfern|weglass|anonym|erkenn|identif|streich|nicht weiter/], "Nenne ein Detail, an dem man die Person erkennen könnte, und begründe, weshalb du es weglässt."]
  ],
  "daten-entscheidung": [
    ["Zugriff und Aufbewahrung", [/zugriff|anbieter|dritte|wer.*daten/, /speicher|lösch|aufbewahr/], "Stelle zwei konkrete Fragen: Wer erhält Zugriff, und wann werden die Daten gelöscht?"],
    ["Einverständnis zur Weitergabe", [/zustimm|einverständ|einwillig|erlaubnis/, /weitergab|upload|hochlad|tool|dienst/], "Erkläre, was ihr mit der befragten Person vor einer Weitergabe an den Dienst klären würdet."],
    ["Vergleich und begründete Wahl", [/manuell|selbst|von hand|ohne tool/, /aufwand|zeit|nutzen|vorteil|risiko|schnell|weil|sicher/], "Wäge einen konkreten Vorteil des Tools gegen die manuelle Auswertung ab und entscheide für diesen Fall."]
  ]
};

const equivalentPhrases = {
  lernziel: [[/plakat|flyer|material sammeln|anlass vorbereiten/]],
  "club-nutzen": [
    [/mehr raum für (die )?behandlung/, /mehr (aufmerksamkeit|zuwendung) für (die )?krank[en]*/],
    [/tür bleibt zu|keinen fuss in die tür|keine erste chance|kommt gar nicht erst rein/],
    [/schon angestellt.{0,120}(noch nie|erste chance|keinen fuss)|wer schon arbeitet.{0,120}wer neu anfangen/]
  ],
  "club-bewerbung": [
    [/lässt (sich )?.{0,25}(anschreiben|bewerbung).{0,25}(machen|aufsetzen)/],
    [/software.{0,45}(unterlagen|dossiers).{0,35}(sichtet|vorsortiert|aussiebt)/],
    [/ein mensch.{0,70}(hintergrund|umstände|talent|lücken).{0,45}(würdigen|einordnen|berücksichtigen)/]
  ],
  "club-verantwortung": [
    [/schule.{0,55}(türen öffnen|brücken bauen|mit der praxis zusammenbringen)/],
    [/arbeitgeber.{0,70}(eine erste chance geben|in die praxis einführen)/],
    [/später.{0,50}(qualifizierte leute|erfahrene mitarbeitende|eigenen leute)/]
  ],
  "zimmer-lernen": [
    [/wer .{0,45} dauernd abgibt.{0,45}(verlernt|kann es irgendwann nicht mehr)/, /was man kaum (noch )?macht.{0,45}(rostet ein|geht verloren)/],
    [/eigene gedanken in worte|eine position entwickeln|einen roten faden/]
  ],
  "zimmer-vergleich": [
    [/schneller fertig.{0,70}(selber denken|eigenleistung|verlernen|lernt weniger)/],
    [/entscheidend.{0,60}(wie man damit umgeht|was man daraus macht).{0,60}(bücher|spiele)/]
  ],
  "zimmer-praxis": [
    [/publikum ansprechen|leser erreichen|gedanken in worte fassen/],
    [/erst.{0,50}(eigene version|selber schreiben).{0,100}(besprechen|kommentar|versionen gegenüberstellen)/]
  ],
  daten: [
    [/arbeitsorganisation.{0,80}(was sich automatisieren lässt|welche arbeiten betroffen sein könnten)/],
    [/stanford.{0,80}(wer noch arbeit hat|wer noch angestellt ist|entwicklung der stellen)/],
    [/sagt nichts darüber.{0,80}(bei uns|vor ort|in der schweiz).{0,60}(angebote|plätze)/]
  ],
  ursachen: [[/weniger geld|keine zeit für anleitung|weniger zu tun|weniger aufträge/]],
  untersuchung: [[], [/angebote.{0,80}(tatsächlich vergeben|jemand angefangen|stellen angetreten)/]],
  praxisaufgabe: [[], [/(datum|uhrzeit|ort).{0,55}(programm|veranstalter|kalender).{0,30}(nachsehen|abgleichen)/]],
  betreuung: [[], [/am (montag|dienstag|mittwoch|donnerstag|freitag).{0,90}(besprechen|rückmeldung)/]],
  zugang: [[], [/geld für den weg|ticket bezahlen|eine pauschale|etwas verdienen/]],
  "urteil-text": [
    [/im (ersten|zweiten) (ausschnitt|video).{0,100}(wird deutlich|kommt zur sprache|habe ich verstanden)/],
    [/einerseits.{0,120}andererseits/, /zwar.{0,100}doch/],
    [/als nächstes.{0,35}(frage|suche|schreibe|probiere|vereinbare)/],
    [/(schule|betrieb).{0,50}(in die pflicht|verantwortlich dafür|ich erwarte)/],
    [/meine meinung.{0,55}(würde kippen|sähe anders aus|hängt davon ab)/]
  ],
  lernablauf: [[/ich lese den brief erst einmal|meine vermutung zuerst/], [/ich lasse mir hinweise geben|ich bitte die ki um eine rückfrage/]],
  lernnachweis: [[/laut erklären|in eigenen worten vortragen|an einem anderen brief zeigen/]],
  "clip-pruefung": [[/wer hat das zuerst gepostet|woher (stammt|kommt) (das video|der clip)/], [/bei der schule anrufen|die schule direkt kontaktieren/], [/behalte (das|den clip) für mich|warte mit dem teilen/]],
  "clip-korrektur": [[/morgen ist ganz normal prüfung|die prüfung läuft wie vorgesehen/], [/die schule hat (mir )?geantwortet/], [/wie das video zustande kam.{0,35}(wissen wir noch nicht|bleibt offen)/]],
  "fairness-kriterium": [[/wer zu hause kein gerät hat.{0,65}(konnte weniger|hatte weniger gelegenheit)/], [/auch anfänger sollen eine chance bekommen|neue leute ans programmieren heranführen/]],
  "fairness-verfahren": [[/alle bekommen dieselbe chance|aus dem topf ziehen/], [/bei der kursleitung nachfragen|entscheid nochmals anschauen lassen/], [/wer hat sich gemeldet.{0,70}wer wurde aufgenommen/]],
  "daten-auswahl": [[/vor dem mündlichen termin schlecht schlafen/], [/das dorf verrät.{0,40}wer gemeint ist|die stimme könnte man wiedererkennen/]],
  "daten-entscheidung": [[/wer die aufnahme sehen kann.{0,80}wie lange sie bleibt/], [/die person fragen.{0,70}ob sie mit der weitergabe einverstanden ist/], [/von hand dauert.{0,75}(dafür|aber)/]]
};

const corrections = {
  "muehl-ganz-urteil": [[0, /mühlhoff (sagt|meint|behauptet).{0,35}(usa|staaten).{0,25}(bereits faschistisch|schon faschistisch)/, "Mühlhoff unterscheidet demokratische Staaten von einem möglichen Radikalisierungsprozess."]],
  "muehl-macht": [[0, /staat bleibt völlig unabhängig|anbieter haben keinen einfluss/, "Mühlhoff warnt vor Abhängigkeit, wenn mit der Infrastruktur auch Abläufe und Entscheidungen ausgelagert werden."]],
  "muehl-mitsprache": [[0, /alle bürger.{0,30}(wählen|stimmen)|jede person hat eine stimme/, "Im beschriebenen Modell erhalten Anteilseigner Einfluss. Stelle diesem Modell demokratische Mitsprache gegenüber."]],
  "zimmer-ganz-spannung": [[0, /zeitgewinn führt immer zu mehr lernen|wer zeit spart,? lernt automatisch mehr/, "Prüfe, was mit der eigenen Übung passiert, wenn ein Werkzeug die Tätigkeit übernimmt."]],
  "zimmer-alltag-zeit": [[0, /espenlaub hasst staubsaugen|espenlaub staubsaugt ungern/, "Espenlaub sagt, dass er auch selbst gerne staubsaugt. Er schätzt die frei werdende Zeit."]],
  "club-ganz-gewinn": [[0, /(alle|jede person) profitieren|gewinne kommen bei allen an/, "Unterscheide, wer Gewinne erhält und wer beim Einstieg benachteiligt sein kann."]],
  "club-hebel": [[0, /nur (die )?ausbildung (kann|bietet)|nur betriebe können/, "Die Gesprächsrunde nennt zwei Hebel. Ergänze den jeweils anderen und gib ein Beispiel."]],
  "club-nutzen": [
    [0, /\bki ersetzt (alle )?(ärztinnen|ärzte|ärzte und ärztinnen)\b|\bki übernimmt (alle|sämtliche) diagnosen\b/, "Beim Beispiel aus der Medizin geht es um mögliche Entlastung. Beschreibe, wie dadurch mehr Zeit für Patient*innen entstehen könnte."],
    [2, /erschwerter (berufszugang|einstieg) (ist|bedeutet) (genau )?(dasselbe|eine kündigung)|kein unterschied zwischen/, "Trenne die Situationen. Bei einer Kündigung geht eine bestehende Stelle verloren. Beim erschwerten Einstieg hat die Person noch keine Stelle gefunden."]
  ],
  "club-bewerbung": [[1, /nur (die )?bewerbenden (nutzen|verwenden) ki|betriebe (nutzen|verwenden) keine ki/, "Im beschriebenen Ablauf können beide Seiten KI nutzen. Ergänze den Einsatz bei Auswahl oder Absagen im Betrieb."]],
  "club-verantwortung": [[1, /nur (die )?schule (ist zuständig|trägt verantwortung)|betriebe haben keine verantwortung/, "Ergänze die Rolle des Betriebs. Er kann Einstiegsplätze schaffen und Einsteigende betreuen."]],
  "zimmer-lernen": [[0, /wenn man.{0,40}(weniger|nie) übt.{0,45}(wird man besser|verbessert sich die fähigkeit)/, "Bleischs Sorge geht in die andere Richtung. Erkläre, welche Fähigkeit durch weniger eigene Übung schwächer werden könnte."]],
  "zimmer-vergleich": [[0, /espenlaub (sagt|meint|findet).{0,20}ki (schadet|hilft) immer/, "Espenlaub hält beide Wirkungen für möglich. Beschreibe, wie es darauf ankommt, wofür und wie KI eingesetzt wird."]],
  daten: [
    [0, /ilo (zählt|misst|erfasst) (tatsächliche )?(entlassungen|kündigungen|jobverluste)/, "Die ILO schätzt, welche Aufgaben von generativer KI betroffen sein könnten. Eine tatsächliche Entlassung ist eine andere Messgrösse."],
    [2, /stanford (beweist|zeigt).{0,80}(weniger|keine) (schweizer praktika|praktika in der schweiz)|beweist,? dass ki.{0,60}(praktika|praktikumsplätze)/, "Die Stanford-Daten betreffen Beschäftigung in den USA. Für eine Aussage über Schweizer Praktika braucht ihr lokale Praktikumsdaten und einen geeigneten Vergleich."]
  ],
  "urteil-text": [[1, /ki (ist )?(allein|ausschliesslich) (schuld|verantwortlich)|ki ersetzt (sicher|garantiert) alle/, "Formuliere die Behauptung so stark, wie dein Beleg sie trägt. Prüfe eine weitere mögliche Ursache und erkläre, was deine Einschätzung ändern könnte."]],
  lernablauf: [[2, /gemeinderat (schreibt|richtet den brief) an (die )?arbeiterinnen|gemeinderat verspricht.{0,25}beleuchtung/, "Im Übungsbrief schreiben die Arbeiterinnen an den Gemeinderat. Die Anrede zeigt den Empfänger, die Unterschrift die Absenderin. Im Brief steht eine Bitte um Beleuchtung."]],
  "clip-pruefung": [[1, /tonversatz (beweist|ist (der|ein) beweis)|versetzte[rn]? ton (beweist|ist (der|ein) beweis)/, "Tonversatz kann bei der Übertragung entstehen. Prüfe die Prüfungsabsage über einen offiziellen Schulkanal."]],
  "clip-korrektur": [[2, /sekretariat.{0,60}(beweist|bestätigt).{0,50}(deepfake|ki-generiert)/, "Das Sekretariat bestätigt im Fall den Prüfungsplan. Wie der Clip hergestellt wurde, bleibt offen."]],
  "fairness-kriterium": [[0, /ohne (kurs|vorkenntnisse|programmiererfahrung).{0,30}(kein potenzial|ungeeignet)/, "Vorerfahrung hängt auch vom Zugang zu Geräten und Kursen ab. Überlege, wie sich Interesse oder Lernpotenzial für einen Einstiegskurs direkt zeigen lässt."]],
  "daten-auswahl": [[1, /ohne namen.{0,30}(immer anonym|vollständig anonym|niemand erkennbar)|datei umbenennen.{0,30}(reicht|anonym)/, "Eine Person kann durch ihre Stimme oder ein besonderes Detail erkennbar bleiben. Entferne im Beispiel auch den Hinweis auf das Dorf und prüfe den restlichen Kontext."]],
  "daten-entscheidung": [[1, /zustimmung zum interview (reicht|erlaubt den upload)|privat(er|es) (modus|browserfenster).{0,35}(verhindert|verhindere).{0,15}(speicher|zugriff)/, "Klärt die Weitergabe an den Dienst ausdrücklich. Ein privates Browserfenster beantwortet die Fragen zur Speicherung beim Anbieter und zum Zugriff nicht."]]
};

const correctionExamples = {
  "muehl-ganz-urteil": [["Mühlhoff beschreibt eine demokratische Gegenwart und fragt, wie daraus eine politische Radikalisierung entstehen kann.", "Originalsendung · 22:05–22:32", "#videos"]],
  "muehl-macht": [["Wenn Behörden auf zentrale Systeme eines privaten Anbieters angewiesen sind, kann sich auch Entscheidungsmacht zum Anbieter verlagern.", "Originalsendung · 12:43–14:01", "#videos"]],
  "muehl-mitsprache": [["Im Modell wirken Anteilseigner über den Aufsichtsrat auf die Führung ein. In einer Demokratie beruht Mitsprache auf politischen Rechten.", "Originalsendung · 09:22–09:50", "#videos"]],
  "zimmer-ganz-spannung": [["Ein Werkzeug kann Zeit sparen. Beim vollständigen Delegieren einer Hausarbeit fällt aber ein Teil der Schreibübung weg.", "Originalsendung · 28:52–29:20 und 33:47–34:31", "#videos"]],
  "zimmer-alltag-zeit": [["Espenlaub staubsaugt gerne und nutzt den Roboter, um Zeit für andere Dinge zu gewinnen.", "Originalsendung · 28:52–29:20", "#videos"]],
  "club-ganz-gewinn": [["Betriebe können Produktivitätsgewinne investieren. Wer eine erste Stelle sucht, profitiert davon nicht zwingend.", "Originalsendung · 32:20–32:51 und 23:20–27:23", "#videos"]],
  "club-hebel": [["Veränderungen sind in der Arbeitswelt und in der Ausbildung möglich. Ein Betrieb kann Abläufe ändern, eine Schule kann praktische Übungen anbieten.", "Originalsendung · 07:09–07:18", "#videos"]],
  "club-nutzen": [
    ["KI könnte in der Diagnostik Zeit sparen und dadurch mehr Zeit für Patient*innen schaffen.", "SRF Club, Original ca. 24:03", "#videos"],
    ["Wer eine Stelle verliert, war bereits angestellt. Wer schwerer in den Beruf einsteigt, bekommt womöglich gar keine erste Stelle.", "SRF Club, Original ca. 24:23", "#videos"]
  ],
  "club-bewerbung": [["Bewerbende können mit KI ihr Anschreiben verfassen. Ein Betrieb kann KI nutzen, um Bewerbungen zu sichten oder Absagen zu erstellen.", "SRF Club, Original ca. 24:43", "#videos"]],
  "club-verantwortung": [["Bildungsinstitutionen können Zugänge zur Praxis vermitteln. Betriebe können Einstiegsstellen anbieten und Nachwuchs ausbilden.", "SRF Club, Original ca. 26:42", "#videos"]],
  "zimmer-lernen": [["Wer eine Hausarbeit regelmässig von KI schreiben lässt, übt seltener, eigene Argumente zu formulieren.", "SRF Zimmer 42, Original ab 33:47", "#videos"]],
  "zimmer-vergleich": [["KI kann Zeit sparen. Wenn sie das Schreiben vollständig übernimmt, bleibt zugleich weniger eigene Übung. Die Wirkung hängt vom Einsatz ab.", "SRF Zimmer 42, Original ab ca. 34:36", "#videos"]],
  daten: [
    ["Die ILO schätzt, welche beruflichen Aufgaben generative KI beeinflussen könnte.", "Quellencheck, ILO-Studie zur Betroffenheit von Aufgaben", "#quellen"],
    ["Die Stanford-Studie untersucht US-Beschäftigungsdaten. Für meine Region brauche ich Angaben zu ausgeschriebenen und besetzten Praktikumsplätzen.", "Quellencheck, Stanford-Arbeitspapier und lokale Untersuchung", "#quellen"]
  ],
  "urteil-text": [["KI könnte den Einstieg erschweren, wie Coppolas Beispiel nahelegt. Ob sie in unserer Region das Praktikumsangebot verändert, würde ich anhand lokaler Zahlen und weiterer Ursachen prüfen.", "SRF Club, Original ca. 24:23, und Quellencheck", "#quellen"]],
  lernablauf: [["Die Arbeiterinnen bitten den Gemeinderat um eine Beleuchtung des Fabrikwegs. Die Anrede nennt den Empfänger, die Unterschrift nennt die Absenderin.", "Übungsbrief von 1912, Anrede und Unterschrift", "#modul-lernen"]],
  "clip-pruefung": [["Der versetzte Ton ist ein Hinweis. Ich prüfe die angebliche Absage im Schulportal oder frage beim Sekretariat nach.", "Fallmaterial, Nachricht und Informationsstand", "#modul-deepfakes"]],
  "clip-korrektur": [["Das Sekretariat bestätigt, dass die Prüfungen stattfinden. Wie der Clip entstanden ist, bleibt offen.", "Aufgabe zur Korrektur im Klassenchat", "#modul-deepfakes"]],
  "fairness-kriterium": [["Wer noch keinen Programmierkurs besucht hat, hatte vielleicht weniger Zugang zu Geräten. Eine gemeinsame Einstiegsaufgabe könnte zeigen, wie die Person an ein Problem herangeht.", "Fiktive Auswahlliste, Sam und Kim", "#modul-fairness"]],
  "daten-auswahl": [["Eine befragte Person berichtet von Schlafproblemen vor mündlichen Prüfungen. Die Angabe zur Herkunft lasse ich weg, weil sie die Person erkennbar machen kann.", "Fiktiver Interviewausschnitt", "#modul-daten"]],
  "daten-entscheidung": [["Wir werten das Interview vorerst selbst aus. Vor einem Upload klären wir mit der befragten Person die Weitergabe sowie mit dem Anbieter Zugriff und Aufbewahrung.", "Fallmaterial, Ziel der Gruppe und bisheriges Einverständnis", "#modul-daten"]]
};

function normalizeAnswer(value) {
  return value.normalize("NFKC").trim().toLocaleLowerCase("de-CH")
    .replaceAll("ß", "ss").replace(/\s+/g, " ");
}

function findCorrections(sentences, task) {
  const rules = corrections[task] ?? [];
  return rules.flatMap(([index, pattern, hint], ruleIndex) => {
    const evidence = sentences.find(({ normalized }) => {
      const match = normalized.match(pattern);
      if (!match) return false;
      const before = normalized.slice(0, match.index);
      const after = normalized.slice(match.index + match[0].length);
      return !/\b(nicht|falsch|irrtum|behauptung|angeblich|behauptet|irrtümlich|widerlegt|wäre|ob)\b/.test(before)
        && !/^\s*(stimmt nicht|ist falsch|wäre falsch|trifft nicht zu)/.test(after);
    });
    return evidence
      ? [{ index, quote: evidence.original, hint, example: correctionExamples[task][ruleIndex] }]
      : [];
  });
}

const videoReferences = {
  "club-nutzen": "23:20–24:28 · Medizin und Berufszugang",
  "club-bewerbung": "24:40–25:00 · KI beim Bewerben und Auswählen",
  "club-verantwortung": "26:42–27:17 · Verantwortung und Nachwuchs",
  "club-beleg": "23:20–27:23 · Aussagen zum Berufseinstieg",
  "club-hebel": "07:09–07:18 · Arbeitswelt und Ausbildung",
  "club-qualitaet": "07:19–07:40 · Wert der Arbeit und Produktivität",
  "club-ganz-gewinn": "23:20–27:23 · Berufseinstieg | 32:20–32:51 · Produktivitätsgewinne und ihre Verteilung",
  "club-ganz-urteil": "23:20–27:23 · Berufseinstieg | 32:20–32:51 · Produktivitätsgewinne und ihre Verteilung",
  "zimmer-lernen": "33:47–34:31 · Übung und Hausarbeit",
  "zimmer-vergleich": "34:36–36:31 · Zeitgewinn, Verlust und Nutzung",
  "zimmer-praxis": "33:47–36:31 · Eigene Übung und bewusster KI-Einsatz",
  "zimmer-beleg": "33:47–36:31 · Eigene Übung und bewusster KI-Einsatz",
  "zimmer-alltag-zeit": "28:52–29:20 · Zeitersparnis durch Automatisierung",
  "zimmer-alltag-grenze": "28:27–28:52 · Skepsis der Grossmutter",
  "zimmer-ganz-spannung": "28:52–29:20 · Entlastung | 33:47–34:31 · Weniger eigene Übung",
  "zimmer-ganz-regel": "33:47–36:31 · Bewusste Nutzung | 40:41–41:18 · Selbstwirksamkeit",
  "muehl-wettlauf": "08:16–09:22 · Konkurrenz und Regulierung",
  "muehl-mitsprache": "09:22–09:50 · Aufsichtsrat und Anteilseigner",
  "muehl-macht": "12:43–14:01 · Informationssysteme und Machttransfer",
  "muehl-kontrolle": "12:43–14:01 · Informationssysteme und Machttransfer",
  "muehl-ganz": "12:43–14:01 · Machttransfer | 22:05–22:32 · Radikalisierung und Demokratie",
  "muehl-ganz-urteil": "12:43–14:01 · Machttransfer | 22:05–22:32 · Radikalisierung und Demokratie"
};

function addOpenAnswerFeedback(container, input, criteria) {
  const details = document.createElement("details");
  details.className = "feedback-panel";
  const summary = document.createElement("summary");
  summary.textContent = "Feedback zu meiner Antwort";
  const note = document.createElement("p");
  note.textContent = "Die Rückmeldung erkennt typische Formulierungen und Fehlannahmen. Vergleiche sie mit deiner eigenen Einschätzung.";
  const result = document.createElement("div");
  result.setAttribute("aria-live", "polite");
  details.append(summary, note, result);
  container.append(details);

  function showList(title, entries) {
    const label = document.createElement("strong");
    label.textContent = title;
    const list = document.createElement("ul");
    for (const entry of entries) {
      const item = document.createElement("li");
      item.append(entry);
      list.append(item);
    }
    result.append(label, list);
  }

  function markQuote(quote, kind) {
    const mark = document.createElement("mark");
    mark.className = "answer-quote " + kind;
    mark.textContent = "«" + quote + "»";
    return mark;
  }

  function refresh() {
    const answer = normalizeAnswer(input.value);
    const sentences = input.value.split(/(?<=[.!?])\s+|\n+/)
      .map(original => original.trim()).filter(Boolean)
      .map(original => ({ original, normalized: normalizeAnswer(original) }));
    result.replaceChildren();
    const reference = videoReferences[input.id];
    if (reference) {
      const material = document.createElement("p");
      material.textContent = "Zum Nachschauen in der Originalsendung · " + reference;
      result.append(material);
    }
    if (!answer) {
      const start = document.createElement("p");
      start.textContent = "Schreibe zuerst einen kurzen Entwurf. " + criteria[0][2];
      result.append(start);
      return;
    }

    const strengths = [];
    const gaps = [];
    const detected = findCorrections(sentences, input.id);
    const disputed = new Set(detected.map(({ index }) => index));
    const equivalents = equivalentPhrases[input.id] ?? [];
    for (const [index, [label, patterns, hint]] of criteria.entries()) {
      if (disputed.has(index)) continue;
      const paraphrase = sentences.find(({ normalized }) =>
        equivalents[index]?.some(pattern => pattern.test(normalized)));
      const matches = patterns.map(pattern =>
        sentences.find(({ normalized }) => pattern.test(normalized)));
      if (paraphrase || matches.every(Boolean)) {
        const excerpts = paraphrase ? [paraphrase] : [...new Set(matches)];
        const item = document.createElement("span");
        item.append(label);
        for (const { original } of excerpts) item.append(" ", markQuote(original, "strength"));
        strengths.push(item);
      } else {
        gaps.push([label, hint]);
      }
    }

    if (input.id === "urteil-text") {
      const words = answer.split(/\s+/).filter(word => /[\p{L}\p{N}]/u.test(word)).length;
      const count = document.createElement("p");
      count.textContent = `${words} Wörter. Richtwert: 120–180 Wörter.`;
      result.append(count);
    }
    showList("Was schon erkennbar ist", strengths.length
      ? strengths
      : ["Dein Entwurf steht. Die Prüfung erkennt bisher keinen eindeutigen Hinweis auf die Kriterien."]);
    if (detected.length) {
      const items = detected.map(({ quote, hint, example }) => {
        const [suggestion, source, href] = example;
        const item = document.createElement("div");
        const explanation = document.createElement("p");
        explanation.textContent = hint;
        const revision = document.createElement("p");
        revision.textContent = "So könntest du es formulieren. «" + suggestion + "»";
        const link = document.createElement("a");
        link.href = href;
        link.textContent = source;
        item.append(markQuote(quote, "correction"), explanation, revision, link);
        return item;
      });
      showList("Diese Aussage solltest du korrigieren", items);
    }
    showList("Was du noch prüfen solltest", gaps.length
      ? gaps.map(([label]) => label)
      : [detected.length ? "Überarbeite zuerst die markierte Aussage." : "Zu allen Kriterien gibt es Anhaltspunkte. Prüfe, ob deine Aussagen auch begründet sind."]);
    showList("So kannst du deine Antwort verbessern", gaps.length
      ? gaps.map(([, hint]) => hint)
      : ["Wähle deine wichtigste Aussage und ergänze einen Beleg oder ein Beispiel aus dem Fall. Erkläre in einem Satz, warum es deine Aussage stützt."]);
  }

  let timer;
  details.addEventListener("toggle", () => {
    if (details.open) refresh();
  });
  input.addEventListener("input", () => {
    window.clearTimeout(timer);
    if (details.open) timer = window.setTimeout(refresh, 500);
  });
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
    const options = choices[id];
    const input = document.createElement(options ? "select" : "textarea");
    input.id = id;
    container.append(label, input);
    if (options) {
      const refresh = addChoiceFeedback(container, input, options);
      if (options.some(([answer]) => answer === saved[id])) input.value = saved[id];
      refresh();
    } else {
      input.rows = id === "urteil-text" ? 8 : 3;
      input.value = typeof saved[id] === "string" ? saved[id] : "";
      const criteria = openAnswerCriteria[id];
      if (criteria) addOpenAnswerFeedback(container, input, criteria);
      if (feedback[id]) addFeedback(container, input);
    }
    const required = ["einstieg", "club", "zimmer", "quellen", "fall", "urteil"].includes(key);
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


for (const button of document.querySelectorAll("[data-srf]")) {
  button.addEventListener("click", () => {
    const player = document.createElement("iframe");
    player.className = "srf-player";
    player.title = button.closest("article").querySelector("h3").textContent;
    player.src = "https://www.srf.ch/play/embed?urn=" + encodeURIComponent(button.dataset.srf);
    player.allowFullscreen = true;
    button.replaceWith(player);
    player.focus();
  });
}

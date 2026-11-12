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

function addOpenAnswerFeedback(container, input, criteria) {
  const details = document.createElement("details");
  details.className = "feedback-panel";
  const summary = document.createElement("summary");
  summary.textContent = "Feedback zu meiner Antwort";
  const note = document.createElement("p");
  note.textContent = "Die Rückmeldung orientiert sich an Formulierungen in deinem Text. Vergleiche sie mit deiner eigenen Einschätzung.";
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
      item.textContent = entry;
      list.append(item);
    }
    result.append(label, list);
  }

  function refresh() {
    const answer = input.value.trim().toLocaleLowerCase("de-CH");
    result.replaceChildren();
    if (!answer) {
      result.textContent = "Schreibe zuerst einen kurzen Entwurf. " + criteria[0][2];
      return;
    }

    const strengths = [];
    const gaps = [];
    for (const [label, patterns, hint] of criteria) {
      if (patterns.every(pattern => pattern.test(answer))) {
        strengths.push(label);
      } else {
        gaps.push([label, hint]);
      }
    }

    showList("Was schon erkennbar ist", strengths.length
      ? strengths
      : ["Dein Entwurf steht. Die Prüfung erkennt bisher keinen eindeutigen Hinweis auf die Kriterien."]);
    showList("Was du noch prüfen solltest", gaps.length
      ? gaps.map(([label]) => label)
      : ["Zu allen Kriterien gibt es Anhaltspunkte. Prüfe, ob deine Aussagen auch begründet sind."]);
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
      addFeedback(container, input);
    }
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

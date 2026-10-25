# Run Pathwise on localhost in VS Code

1. Extract this ZIP (Extract All on Windows).
2. In VS Code choose File > Open Folder and select the Pathwise folder containing index.html.
3. Open Terminal > New Terminal.
4. If Python 3 is installed, run:

   python -m http.server 8000 --bind 127.0.0.1

   On Windows, if python is not recognized, try:

   py -m http.server 8000 --bind 127.0.0.1

5. Open http://localhost:8000 in your browser.
6. Leave the terminal open while using the website. Press Ctrl+C to stop.

Alternative: with the VS Code Live Server extension installed, right-click index.html and choose Open with Live Server. Use the address it opens.

No npm installation, API key or database is required. Python is only serving static files; recommendation logic runs in JavaScript in the browser.

If port 8000 is in use, use 8001 in the command and browser URL.
Profile and progress data reset when the page reloads. All peer data is synthetic.


## Project files

- `index.html`: page structure, navigation, dialog and script loading.
- `assets/css/style.css`: responsive layouts, components and the current visual theme.
- `assets/js/engine.js`: pathway catalogue, synthetic peers and recommendation calculations.
- `assets/js/app.js`: page rendering, profile inputs, explanations and event handlers.
- `assets/js/assessment.js`: assessment questions, scoring and review.
- `assets/js/roadmaps.js`: roadmap phases, tasks, deliverables and progress.
- `assets/favicon.svg`: browser icon.
- `.prettierrc.json`: consistent formatting settings.
- `.vscode/settings.json`: indentation and word-wrap preferences for VS Code.

The scripts are loaded in the order specified in index.html. They use shared browser-scope values, so keep that order if editing the page.

## Editing guide

Change colours, spacing and typography in `style.css`. The current visual theme is clearly marked near the end of that file.

Change screen headings and interface text in `app.js`. HTML templates carry `/* HTML */` comments so compatible formatters can indent them properly.

Change recommendation data and scoring in `engine.js`, assessment questions in `assessment.js`, and preparation plans in `roadmaps.js`.

This is the formatted, reorganized source of the refreshed website. The recommendation algorithm, catalogue, assessment and roadmap content are preserved. Formatting of markup may introduce insignificant whitespace.

## Data and storage

Peer records are synthetic. Profile inputs, roadmap progress and feedback are stored in memory for the current page session and reset on reload. Official external resource links need internet access. The local application does not require the hosted site's sign-in screen.

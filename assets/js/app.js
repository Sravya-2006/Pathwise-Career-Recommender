/**
 * Application interface
 * Screen rendering, profile forms, filters, explanation dialogs and event handlers.
 */

let profile = {
  name: 'Amulu',
  cgpa: 8.2,
  skills: ['Python', 'SQL', 'Statistics', 'Machine Learning'],
  interest: 'Data & AI',
  goal: 'Explore all',
  months: 24,
  budget: 300000,
};
let view = 'explore',
  filter = 'All pathways',
  cold = false,
  alpha = 0.65,
  chosen = 'data';
let assessmentDone = false,
  pilot = [];
const app = document.getElementById('app');
const pct = (n) => Math.round(n) + '%';
const money = (n) => '₹' + n.toLocaleString('en-IN');
const escapeHTML = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
  );
function results() {
  return recommend(profile, { cold, alpha });
}
function setView(v) {
  view = v;
  render();
  window.scrollTo(0, 0);
}
function toast(s) {
  const t = document.getElementById('toast');
  t.textContent = s;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}
function bar(label, value, color = '') {
  return /* HTML */ `
    <div class="metric-label">
      <span>${label}</span>
      <b>${value == null ? 'No evidence' : pct(value)}</b>
    </div>
    <div class="bar"><i class="${color}" style="width:${value || 0}%"></i></div>
  `;
}
function card(p, i) {
  return /* HTML */ `
    <article class="path-card">
      <div class="card-top">
        <span
          class="path-icon ${p.type === 'Higher studies'
            ? 'blue'
            : p.type === 'Certification'
              ? 'orange'
              : ''}"
        >
          ${p.icon}
        </span>
        <span class="tag">${p.type}</span>
        <span class="rank">${String(i + 1).padStart(2, '0')}</span>
      </div>
      <div class="card-title">
        <div>
          <small>${p.area}</small>
          <h3>${p.name}</h3>
        </div>
        <div class="score">
          ${Math.round(p.score)}
          <small>/ 100</small>
        </div>
      </div>
      <p class="description">${p.desc}</p>
      <div class="metrics">
        ${bar('Profile alignment', p.content)}${bar(
          'Similar-peer rating',
          p.collab,
          'purple'
        )}
      </div>
      <div class="reason">
        <span>✓</span>
        <p>
          ${p.match.length
            ? `${p.match.slice(0, 2).join(' + ')} align with this path.`
            : 'Build foundational skills to strengthen this match.'}
          ${p.alpha === 1
            ? 'Content-only fallback: insufficient peer evidence.'
            : `${p.neighbors.length} synthetic peers contribute to this recommendation.`}
        </p>
      </div>
      <div class="card-bottom">
        <span>
          ${p.high
            ? 'Strong demo evidence'
            : p.needsAssessment
              ? 'Assessment suggested'
              : 'Explore this option'}
        </span>
        <button class="text-button" data-detail="${p.id}">Explore path ↗</button>
      </div>
    </article>
  `;
}
function render() {
  document
    .querySelectorAll('nav button')
    .forEach((b) => b.classList.toggle('active', b.dataset.view === view));
  document.getElementById('breadcrumb').textContent = {
    explore: 'Pathway explorer',
    profile: 'My profile',
    roadmap: 'My roadmap',
    research: 'Research lab',
  }[view];
  if (view === 'explore') explore();
  if (view === 'profile') profileView();
  if (view === 'roadmap') roadmap();
  if (view === 'research') research();
  bind();
}
function explore() {
  const r = results();
  const visible = filter === 'All pathways' ? r : r.filter((p) => p.type === filter);
  app.innerHTML = /* HTML */ `
    <section class="intro">
      <div>
        <div class="eyebrow">CAREERS & HIGHER STUDIES</div>
        <h1>
          Your options after graduation
          <span>.</span>
        </h1>
        <p>
          Compare career and study paths using your skills, interests and available time.
        </p>
      </div>
      <button class="button secondary" id="edit-profile">◎ Edit my profile</button>
    </section>
    <section class="overview">
      <div class="overview-main">
        <span class="tag light">YOUR CURRENT PROFILE</span>
        <h2>
          Start with what
          <br />
          you already know.
        </h2>
        <p>
          These skills shape your shortlist. Update your profile whenever your interests
          or plans change.
        </p>
        <div class="skill-row">
          ${profile.skills
            .slice(0, 4)
            .map(
              (s) => /* HTML */ `
                <span>${escapeHTML(s)}</span>
              `
            )
            .join('') || '<span>No skills selected</span>'}
        </div>
      </div>
      <div class="overview-stat">
        <span>TOP PATHWAY MATCH</span>
        <div class="big-score">
          ${Math.round(r[0].score)}
          <small>/100</small>
        </div>
        <b>${r[0].name}</b>
        <small>Hybrid ranking score · not a probability</small>
        <button class="light-link" data-detail="${r[0].id}">See why it fits ↗</button>
      </div>
    </section>
    <section class="stats-strip">
      <div>
        <span class="stat-symbol">◎</span>
        <div>
          <b>${profile.skills.length} skills</b>
          <small>In your current profile</small>
        </div>
      </div>
      <div>
        <span class="stat-symbol">⌘</span>
        <div>
          <b>${PATH_TYPES.length} directions</b>
          <small>Employment, education & independent work</small>
        </div>
      </div>
      <div>
        <span class="stat-symbol">◈</span>
        <div>
          <b>${cold ? 'Content only' : 'Hybrid matching'}</b>
          <small>
            ${cold ? 'Cold-start mode enabled' : 'Individual fit + peer evidence'}
          </small>
        </div>
      </div>
    </section>
    ${r[0].needsAssessment
      ? '<div class="notice">We need a little more information to guide you. <button class="text-button" id="assessment">Take a short assessment →</button></div>'
      : ''}
    <div class="section-heading">
      <div>
        <h2>Your recommended pathways</h2>
        <p>Compare the fit, read the reasons and open a preparation plan.</p>
      </div>
      <span class="small-meta">${visible.length} pathways to explore</span>
    </div>
    <div class="filter-row" role="group" aria-label="Filter pathways">
      ${['All pathways', ...PATH_TYPES]
        .map(
          (f) => /* HTML */ `
            <button data-filter="${f}" class="${filter === f ? 'selected' : ''}">
              ${f}
            </button>
          `
        )
        .join('')}
      <label class="cold-toggle">
        <input type="checkbox" id="cold" ${cold ? 'checked' : ''} />
        Test cold start
      </label>
    </div>
    <div class="card-grid">${visible.map(card).join('')}</div>
    <div class="bottom-note">
      <span>ⓘ</span>
      Peer ratings and pathway costs are illustrative demo inputs. No live labour-market
      feed is connected.
      <button class="text-button" data-go="research">View methodology ↗</button>
    </div>
  `;
}
function profileView() {
  app.innerHTML = /* HTML */ `
    <section class="intro">
      <div>
        <div class="eyebrow">STUDENT DETAILS</div>
        <h1>
          Tell us about your plans
          <span>.</span>
        </h1>
        <p>Add the skills you use and the time and budget you can commit.</p>
      </div>
    </section>
    <form id="profile-form" class="panel">
      <div class="section-heading">
        <h2>Your starting point</h2>
        <span class="tag">Session only · no account needed</span>
      </div>
      <div class="form-grid">
        <label>
          Name
          <input
            name="name"
            value="${escapeHTML(profile.name)}"
            required
            maxlength="60"
          />
        </label>
        <label>
          CGPA (out of 10)
          <input
            name="cgpa"
            type="number"
            min="0"
            max="10"
            step=".1"
            value="${profile.cgpa}"
            required
          />
        </label>
        <label>
          Primary interest
          <select name="interest">
            ${INTERESTS.map(
              (s) => /* HTML */ `
                <option ${s === profile.interest ? 'selected' : ''}>${s}</option>
              `
            ).join('')}
          </select>
        </label>
        <label>
          Preferred direction
          <select name="goal">
            ${['Explore all', ...PATH_TYPES]
              .map(
                (s) => /* HTML */ `
                  <option ${s === profile.goal ? 'selected' : ''}>${s}</option>
                `
              )
              .join('')}
          </select>
        </label>
        <label>
          Available learning time (months)
          <input
            name="months"
            type="number"
            min="1"
            max="60"
            value="${profile.months}"
            required
          />
        </label>
        <label>
          Learning budget (INR)
          <input
            name="budget"
            type="number"
            min="0"
            max="10000000"
            value="${profile.budget}"
            required
          />
        </label>
      </div>
      <h3>Skills you’re comfortable using</h3>
      <p class="muted">
        Select skills you can demonstrate through coursework or projects.
      </p>
      <div class="skill-tools">
        <label>
          Search available skills
          <input
            id="skill-search"
            type="search"
            placeholder="Try Python, design, cloud…"
          />
        </label>
        <span id="skill-count" role="status"></span>
      </div>
      <div id="skill-catalog">
        ${Object.entries(SKILL_GROUPS)
          .map(
            ([group, skills]) => /* HTML */ `
              <section class="skill-group">
                <h4>${group}</h4>
                <div class="skill-picker">
                  ${skills
                    .map((s) => skillOption(s, profile.skills.includes(s)))
                    .join('')}
                </div>
              </section>
            `
          )
          .join('')}
      </div>
      <p id="skill-empty" class="muted" hidden>
        No matching skills. You can add your own below.
      </p>
      <div class="custom-skills">
        <h4>Have another skill? Add it here.</h4>
        <div class="custom-entry">
          <label for="custom-skill">
            Your skill
            <input
              id="custom-skill"
              maxlength="60"
              placeholder="e.g. MATLAB or Business Analytics"
              aria-describedby="custom-help"
            />
          </label>
          <button type="button" class="button secondary" id="add-skill">
            + Add skill
          </button>
        </div>
        <p id="custom-help" class="muted">
          Type one skill and press Enter or Add skill. Uncheck any skill to remove it from
          your profile.
        </p>
        <div class="skill-picker" id="custom-list">
          ${profile.skills
            .filter((s) => !SKILLS.includes(s))
            .map((s) => skillOption(s, true))
            .join('')}
        </div>
        <p id="skill-message" role="status"></p>
      </div>
      <p class="muted skill-coverage">
        Your selections stay in this session. Skills outside the current model’s
        vocabulary are kept in your profile but do not influence scores yet.
      </p>
      <div class="form-actions">
        <button class="button" type="submit">Find my pathways ↗</button>
        <button class="button secondary" type="button" id="assessment">
          Take supplementary assessment
        </button>
      </div>
    </form>
  `;
}
function showDetail(id) {
  const p = results().find((p) => p.id === id);
  document.getElementById('detail-content').innerHTML = /* HTML */ `
    <button class="close" aria-label="Close details">×</button>
    <span class="tag">${p.type}</span>
    <h2>${p.name}</h2>
    <p class="muted">${p.desc}</p>
    <div class="detail-score">
      <strong>
        ${Math.round(p.score)}
        <small>/100</small>
      </strong>
      <div>
        Hybrid ranking score
        <br />
        <small>Not an admission or placement probability</small>
      </div>
    </div>
    <h3>Why this pathway?</h3>
    <p>
      Your profile alignment is
      <b>${pct(p.content)}</b>
      .
      ${p.collab === null
        ? 'No comparable peer ratings are available.'
        : `The similarity-weighted rating from ${p.neighbors.length} synthetic peers is <b>${pct(p.collab)}</b>; ${p.satisfied} of those peers have a simulated rating of at least 4/5.`}
    </p>
    <div class="formula">
      ${p.alpha.toFixed(2)} × ${p.content.toFixed(1)} + ${(1 - p.alpha).toFixed(2)} ×
      ${p.collab == null ? '0' : p.collab.toFixed(1)} = ${p.score.toFixed(1)}
    </div>
    <p class="muted">
      ${p.alpha === 1
        ? 'Fewer than three qualifying peers: the model relies entirely on your profile.'
        : 'Content alignment and peer ratings both influence the result.'}
      ${p.high
        ? 'Both signals pass the demo threshold; this is not statistically calibrated confidence.'
        : ''}
    </p>
    <h3>Skills to build</h3>
    <div class="skill-row dark">
      ${p.missing
        .map(
          (s) => /* HTML */ `
            <span>${s}</span>
          `
        )
        .join('') || '<span>Core demo requirements covered</span>'}
    </div>
    <p>
      Estimated learning difficulty:
      <b>${p.difficulty < 0.25 ? 'Low' : p.difficulty < 0.5 ? 'Moderate' : 'High'}</b>
      (${pct(p.difficulty * 100)}). Based on missing skills and synthetic skill
      co-occurrence.
    </p>
    <div class="notice">
      <b>Growth plateau check</b>
      <p>
        ${p.foundation.filter((s) => !profile.skills.includes(s)).join(' and ') ||
        'Your foundational skills'}
        ${p.foundation.some((s) => !profile.skills.includes(s))
          ? 'can support progression beyond this entry pathway. This prerequisite-based flag does not predict your personal career ceiling.'
          : 'cover this catalogue’s progression prerequisites.'}
      </p>
    </div>
    <h3>Exemplar comparison</h3>
    <p>
      ${p.neighbors.length
        ? `Closest synthetic profile <b>${p.neighbors[0].peer.id}</b> has ${pct(p.neighbors[0].sim * 100)} profile similarity. Shared skills: ${p.neighbors[0].peer.skills.filter((s) => profile.skills.includes(s)).join(', ') || 'none'}.`
        : 'No qualifying exemplar. Add skills or complete the assessment.'}
      This is a nearest-peer explanation, not an MCTS-decoded prototype.
    </p>
    <p class="muted">
      Planning assumption: ${p.months} months · ${money(p.cost)}.
      ${profile.budget < p.cost ? 'Above your stated budget. ' : ''}${profile.months <
      p.months
        ? 'Longer than your available time.'
        : ''}
      Actual fees and eligibility vary by provider.
    </p>
    <button class="button" id="choose" data-id="${p.id}">Build this roadmap ↗</button>
  `;
  document.getElementById('details').showModal();
  document.querySelector('.close').onclick = () =>
    document.getElementById('details').close();
  document.getElementById('choose').onclick = () => {
    chosen = id;
    document.getElementById('details').close();
    setView('roadmap');
  };
}
function roadmap() {
  const p = results().find((x) => x.id === chosen),
    stages = ROADMAPS[p.id],
    total = stages.reduce((n, s) => n + s.tasks.length, 0),
    done = Object.keys(roadmapProgress).filter(
      (k) => k.startsWith(p.id + ':') && roadmapProgress[k]
    ).length;
  const study = p.type === 'Higher studies';
  const weeks = study ? 24 : p.months * 4;
  const links =
    p.id === 'ssc'
      ? [['SSC notices', 'https://ssc.gov.in/home/notice-board']]
      : p.id === 'tnpsc'
        ? [['TNPSC official website', 'https://www.tnpsc.gov.in/']]
        : p.id === 'upsc'
          ? [
              [
                'UPSC examination notifications',
                'https://www.upsc.gov.in/exams-related-info/exam-notification',
              ],
            ]
          : [];
  app.innerHTML = /* HTML */ `
    <section class="intro">
      <div>
        <div class="eyebrow">PREPARATION PLAN</div>
        <h1>
          Work towards your chosen path
          <span>.</span>
        </h1>
        <p>A detailed preparation plan for ${p.name}.</p>
      </div>
      <button class="button secondary" data-go="explore">Change pathway</button>
    </section>
    <div class="road-summary">
      <div>
        <span class="tag">${p.type}</span>
        <h2>${p.name}</h2>
        <p>
          ${weeks}-week suggested preparation plan ·
          ${study
            ? 'Programme duration is separate: approximately ' + p.months + ' months'
            : 'Adjust the pace to your availability'}
        </p>
      </div>
      <div>
        <b id="progress-text">${done} / ${total} tasks complete</b>
        <div class="bar">
          <i id="road-progress" style="width:${(done / total) * 100}%"></i>
        </div>
        <small>Progress is kept while this page remains open.</small>
      </div>
    </div>
    <div class="road-layout">
      <section class="panel">
        <h2>Your step-by-step plan</h2>
        <p class="muted">
          Suggested effort: 10–12 hours per week. Timelines are planning assumptions, not
          guarantees.
          ${profile.months * 4 < weeks
            ? 'This plan exceeds your available time; reduce scope or allow a longer preparation period.'
            : ''}
        </p>
        <div class="timeline">
          ${stages
            .map(
              (s, i) => /* HTML */ `
                <section class="step detailed-step">
                  <span>${i + 1}</span>
                  <div>
                    <small>
                      PHASE ${i + 1} · WEEKS
                      ${Math.floor((i * weeks) / 4) + 1}–${Math.floor(
                        ((i + 1) * weeks) / 4
                      )}
                    </small>
                    <h3>${s.title}</h3>
                    <div class="task-list">
                      ${s.tasks
                        .map((t, j) => {
                          const key = p.id + ':' + i + ':' + j;
                          return /* HTML */ `
                            <label>
                              <input
                                type="checkbox"
                                data-task="${key}"
                                ${roadmapProgress[key] ? 'checked' : ''}
                              />
                              <span>${t}</span>
                            </label>
                          `;
                        })
                        .join('')}
                    </div>
                    <div class="deliverable">
                      <b>What you should produce</b>
                      <p>${s.output}</p>
                      <b>Before moving on</b>
                      <p>${s.checkpoint}</p>
                    </div>
                  </div>
                </section>
              `
            )
            .join('')}
        </div>
      </section>
      <div>
        <section class="panel">
          <div class="eyebrow">START HERE</div>
          <h3>Your personal skill priorities</h3>
          <p>
            ${p.missing.length
              ? 'Focus on these missing core skills first.'
              : 'Your selected skills cover the catalogue’s core requirements. Verify mastery with practical work.'}
          </p>
          <div class="skill-row dark">
            ${p.missing
              .map(
                (s) => /* HTML */ `
                  <span>${s}</span>
                `
              )
              .join('') || '<span>Core skills selected</span>'}
          </div>
          <h3 style="margin-top:24px">Build beyond the entry point</h3>
          <div class="skill-row dark" style="margin-top:12px">
            ${p.foundation
              .filter((s) => !profile.skills.includes(s))
              .map(
                (s) => /* HTML */ `
                  <span>${s}</span>
                `
              )
              .join('') || '<span>Foundations selected</span>'}
          </div>
        </section>
        <section class="panel">
          <h3>A manageable weekly routine</h3>
          <ul class="weekly-plan">
            <li>
              <b>4 hours</b>
              Learn or revise priority topics
            </li>
            <li>
              <b>4 hours</b>
              Apply them through projects or practice
            </li>
            <li>
              <b>2 hours</b>
              Review errors and get feedback
            </li>
            <li>
              <b>1–2 hours</b>
              Plan applications, outreach or next steps
            </li>
          </ul>
          <p class="muted">Scale this routine to your course load and commitments.</p>
        </section>
        ${links.length
          ? /* HTML */ `
              <section class="panel">
                <h3>Check official recruitment information</h3>
                <p>
                  This score does not establish eligibility. Verify the current
                  notification’s qualifications, age, nationality, language requirements
                  and applicable selection stages.
                </p>
                ${links
                  .map(
                    ([title, url]) => /* HTML */ `
                      <a
                        class="official-link"
                        href="${url}"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ${title} ↗
                      </a>
                    `
                  )
                  .join('')}
                <p class="muted">
                  No vacancies or deadlines are tracked live here. Preparation duration
                  does not predict an exam date or selection.
                </p>
              </section>
            `
          : ''}
        <section class="panel">
          <h3>Plan your resources</h3>
          <p>
            ${money(p.cost)} is an illustrative
            ${study ? 'programme-cost' : 'preparation or setup-cost'} assumption. Check
            actual fees and expenses before committing.
          </p>
          <p class="muted">
            ${p.type === 'Entrepreneurship' || p.type === 'Freelancing'
              ? 'Client demand, income and business outcomes are uncertain. Start with a small, reviewable pilot.'
              : 'Use official syllabi or requirements to check that your effort is focused on the right tasks.'}
          </p>
        </section>
      </div>
    </div>
  `;
  document.querySelectorAll('[data-task]').forEach(
    (box) =>
      (box.onchange = () => {
        roadmapProgress[box.dataset.task] = box.checked;
        const n = Object.keys(roadmapProgress).filter(
          (k) => k.startsWith(p.id + ':') && roadmapProgress[k]
        ).length;
        document.getElementById('progress-text').textContent =
          n + ' / ' + total + ' tasks complete';
        document.getElementById('road-progress').style.width = (n / total) * 100 + '%';
      })
  );
}

function research() {
  const r = results();
  app.innerHTML = /* HTML */ `
    <section class="intro">
      <div>
        <div class="eyebrow">METHOD & EVALUATION</div>
        <h1>
          How your recommendations work
          <span>.</span>
        </h1>
        <p>
          Inspect the working model, its assumptions, and what still needs validation.
        </p>
      </div>
    </section>
    <div class="notice">
      <b>Research baseline, not a validated study.</b>
      All 160 peer profiles and their outcomes are generated deterministically. No real
      placement, satisfaction, salary or market-growth conclusions can be drawn from this
      demo.
    </div>
    <div class="research-grid">
      <section class="panel">
        <h2>Hybrid fusion</h2>
        <div class="formula">score = α · content + (1 − α) · collaborative</div>
        <label for="alpha">
          Content weight α:
          <b id="alpha-value">${alpha.toFixed(2)}</b>
        </label>
        <input id="alpha" type="range" min="0" max="1" step=".05" value="${alpha}" />
        <p class="muted">
          Only skills in the baseline model vocabulary affect scores. Other selected
          skills are retained for future catalogue expansion.
        </p>
        <p>
          Content = 65% skill cosine similarity + 15% interest + 10% direction preference
          + 10% time/budget feasibility.
        </p>
        <p>
          Collaborative = similarity-weighted ratings of up to 12 nearest synthetic peers.
          Neighbour similarity combines skills (80%), interest (10%) and CGPA (10%).
        </p>
        <p class="muted">
          α becomes 1 when fewer than 3 rated neighbours pass 0.55 similarity. Additional
          assessment appears below 55/100 or with fewer than 2 skills. Strong demo
          evidence requires both signals ≥70 and at least 5 peers.
        </p>
      </section>
      <section class="panel">
        <h2>Implementation status</h2>
        <ul class="status-list">
          <li>
            <b>Implemented</b>
            Content matching + user-based kNN
          </li>
          <li>
            <b>Implemented</b>
            Cold-start fallback + assessment
          </li>
          <li>
            <b>Implemented</b>
            Peer exemplars + score breakdown
          </li>
          <li>
            <b>Implemented</b>
            Co-occurrence difficulty + prerequisite flags
          </li>
          <li>
            <span>Proposed</span>
            Trained dual-head SRDQN / SeSRDQN
          </li>
          <li>
            <span>Proposed</span>
            MCTS prototype decoding
          </li>
          <li>
            <span>Needs data</span>
            Live salary / growth estimator
          </li>
          <li>
            <span>Needs study</span>
            Longitudinal outcomes and trust validation
          </li>
        </ul>
      </section>
    </div>
    <section class="panel">
      <h2>Inspect pathway scores</h2>
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Pathway</th>
              <th>Content</th>
              <th>Peer rating</th>
              <th>Effective α</th>
              <th>Hybrid</th>
              <th>Peers</th>
            </tr>
          </thead>
          <tbody>
            ${r
              .map(
                (p) => /* HTML */ `
                  <tr>
                    <td>${p.name}</td>
                    <td>${pct(p.content)}</td>
                    <td>${p.collab == null ? 'N/A' : pct(p.collab)}</td>
                    <td>${p.alpha.toFixed(2)}</td>
                    <td><b>${p.score.toFixed(1)}</b></td>
                    <td>${p.neighbors.length}</td>
                  </tr>
                `
              )
              .join('')}
          </tbody>
        </table>
      </div>
    </section>
    <div class="research-grid">
      <section class="panel">
        <h2>Pilot trust & satisfaction</h2>
        <p class="muted">
          Collect exploratory feedback for this session. These responses are not saved
          after reload.
        </p>
        <form id="pilot">
          ${[
            'I understand the recommendation',
            'I trust the explanation',
            'The options help me decide',
          ]
            .map(
              (s, i) => /* HTML */ `
                <label class="survey-label">
                  ${s}
                  <select name="r${i}">
                    ${[1, 2, 3, 4, 5]
                      .map(
                        (n) => /* HTML */ `
                          <option value="${n}" ${n === 3 ? 'selected' : ''}>
                            ${n} —
                            ${[
                              'Strongly disagree',
                              'Disagree',
                              'Neutral',
                              'Agree',
                              'Strongly agree',
                            ][n - 1]}
                          </option>
                        `
                      )
                      .join('')}
                  </select>
                </label>
              `
            )
            .join('')}
          <button class="button secondary">Record feedback</button>
        </form>
        <p id="pilot-result">
          ${pilot.length
            ? `${pilot.length} response(s) · exploratory index ${Math.round(pilot.reduce((a, b) => a + b, 0) / pilot.length)}/100`
            : 'No feedback collected yet.'}
        </p>
      </section>
      <section class="panel">
        <h2>Evaluation plan</h2>
        <p>
          Compare content-only, collaborative-only and hybrid rankings using held-out real
          student outcomes. Split by student to prevent leakage and report cold-start
          performance separately.
        </p>
        <p>
          Measure Precision@K, Recall@K and NDCG@K only after collecting relevance labels.
          Do not interpret synthetic ratings as model accuracy.
        </p>
        <p>
          For the pilot, compare explanations with and without peer evidence. Report
          sample size, decision fatigue, satisfaction and uncertainty.
        </p>
        <p class="muted">
          Exploratory index = mean of the three 1–5 responses, linearly mapped to 0–100.
          This is a proposed questionnaire, not a validated psychometric instrument.
        </p>
      </section>
    </div>
  `;
}
function bind() {
  document
    .querySelectorAll('[data-go]')
    .forEach((b) => (b.onclick = () => setView(b.dataset.go)));
  document
    .querySelectorAll('[data-detail]')
    .forEach((b) => (b.onclick = () => showDetail(b.dataset.detail)));
  document.querySelectorAll('[data-filter]').forEach(
    (b) =>
      (b.onclick = () => {
        filter = b.dataset.filter;
        render();
      })
  );
  const edit = document.getElementById('edit-profile');
  if (edit) edit.onclick = () => setView('profile');
  const c = document.getElementById('cold');
  if (c)
    c.onchange = () => {
      cold = c.checked;
      render();
    };
  const a = document.getElementById('assessment');
  if (a) a.onclick = assessment;
  const f = document.getElementById('profile-form');
  if (f) bindSkills();
  if (f)
    f.onsubmit = (e) => {
      e.preventDefault();
      const d = new FormData(f);
      profile = {
        name: d.get('name'),
        cgpa: +d.get('cgpa'),
        interest: d.get('interest'),
        goal: d.get('goal'),
        budget: +d.get('budget'),
        months: +d.get('months'),
        skills: d.getAll('skill'),
      };
      setView('explore');
      toast('Your recommendations have been recalculated.');
    };
  const al = document.getElementById('alpha');
  if (al) {
    al.oninput = () =>
      (document.getElementById('alpha-value').textContent = (+al.value).toFixed(2));
    al.onchange = () => {
      alpha = +al.value;
      render();
    };
  }
  const pf = document.getElementById('pilot');
  if (pf)
    pf.onsubmit = (e) => {
      e.preventDefault();
      const f = new FormData(pf);
      pilot.push(
        (([0, 1, 2].reduce((a, i) => a + +f.get('r' + i), 0) / 3 - 1) / 4) * 100
      );
      render();
      toast('Feedback recorded for this session.');
    };
}

function skillOption(s, checked) {
  return /* HTML */ `
    <label data-skill-label>
      <input
        type="checkbox"
        name="skill"
        value="${escapeHTML(s)}"
        ${checked ? 'checked' : ''}
      />
      <span>${escapeHTML(s)}</span>
    </label>
  `;
}
function bindSkills() {
  const form = document.getElementById('profile-form'),
    search = document.getElementById('skill-search'),
    input = document.getElementById('custom-skill'),
    message = document.getElementById('skill-message');
  const boxes = () => Array.from(form.querySelectorAll('input[name="skill"]'));
  const count = () => {
    document.getElementById('skill-count').textContent =
      boxes().filter((b) => b.checked).length + ' skills selected';
  };
  form.addEventListener('change', count);
  count();
  search.oninput = () => {
    let found = 0;
    document.querySelectorAll('.skill-group').forEach((group) => {
      let n = 0;
      group.querySelectorAll('[data-skill-label]').forEach((label) => {
        const visible = label.textContent
          .toLowerCase()
          .includes(search.value.trim().toLowerCase());
        label.hidden = !visible;
        if (visible) n++;
      });
      group.hidden = !n;
      found += n;
    });
    document.getElementById('skill-empty').hidden = found > 0;
  };
  function add() {
    const raw = input.value.trim().replace(/\s+/g, ' ');
    if (!raw) {
      message.textContent = 'Type a skill first.';
      input.focus();
      return;
    }
    if (raw.length > 60) {
      message.textContent = 'Use 60 characters or fewer.';
      return;
    }
    const aliases = {
      js: 'JavaScript',
      nodejs: 'Node.js',
      reactjs: 'React',
      ml: 'Machine Learning',
      nlp: 'Natural Language Processing',
      ai: 'Generative AI',
      postgres: 'PostgreSQL',
      sklearn: 'Scikit-learn',
    };
    const value = aliases[raw.toLowerCase()] || raw;
    const existing = boxes().find((b) => b.value.toLowerCase() === value.toLowerCase());
    if (existing) {
      existing.checked = true;
      message.textContent = existing.value + ' is selected.';
      search.value = '';
      search.oninput();
    } else {
      document
        .getElementById('custom-list')
        .insertAdjacentHTML('beforeend', skillOption(value, true));
      message.textContent = value + ' added to your profile.';
    }
    input.value = '';
    count();
    input.focus();
  }
  document.getElementById('add-skill').onclick = add;
  input.onkeydown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      add();
    }
  };
}

document
  .querySelectorAll('nav button')
  .forEach((b) => (b.onclick = () => setView(b.dataset.view)));
document.querySelector('.brand').onclick = (e) => {
  e.preventDefault();
  setView('explore');
};
render();

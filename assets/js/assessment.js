/**
 * Supplementary assessment
 * Question sections, answer evaluation and student-reviewed profile updates.
 */

const ASSESSMENT_SECTIONS = [
  {
    title: 'Interests & motivation',
    note: 'There are no right or wrong answers. Choose what appeals to you, not what sounds impressive.',
    questions: [
      {
        id: 'i0',
        q: 'Which activity would you most like to try?',
        o: [
          'Finding patterns in data',
          'Building an application',
          'Investigating an unanswered question',
          'Making systems reliable',
          'Working on public-service problems',
          'Testing a business idea',
          'Delivering a project for a client',
          'Not sure yet',
        ],
        values: [
          'Data & AI',
          'Software',
          'Research',
          'Infrastructure',
          'Public service',
          'Business & ventures',
          'Independent work',
          null,
        ],
        kind: 'interest',
      },
      {
        id: 'i1',
        q: 'Which outcome would feel most rewarding?',
        o: [
          'An insight that improves a decision',
          'A product people use',
          'A well-supported research finding',
          'A dependable technical service',
          'A useful public-service contribution',
          'A customer paying for my solution',
          'A satisfied client and a completed contract',
          'Not sure yet',
        ],
        values: [
          'Data & AI',
          'Software',
          'Research',
          'Infrastructure',
          'Public service',
          'Business & ventures',
          'Independent work',
          null,
        ],
        kind: 'interest',
      },
      {
        id: 'i2',
        q: 'Which project would you choose for a semester?',
        o: [
          'A prediction or analytics dashboard',
          'A web or mobile application',
          'An experiment and research report',
          'A cloud deployment and monitoring setup',
          'A study of a civic issue',
          'A small business pilot',
          'A portfolio of client-style projects',
          'Not sure yet',
        ],
        values: [
          'Data & AI',
          'Software',
          'Research',
          'Infrastructure',
          'Public service',
          'Business & ventures',
          'Independent work',
          null,
        ],
        kind: 'interest',
      },
      {
        id: 'i3',
        q: 'Which topic would you willingly explore further?',
        o: [
          'Statistics and machine learning',
          'Software design and programming',
          'Research methods and academic literature',
          'Networks and cloud operations',
          'Public affairs and administration',
          'Customers, pricing and business models',
          'Client communication and independent delivery',
          'Not sure yet',
        ],
        values: [
          'Data & AI',
          'Software',
          'Research',
          'Infrastructure',
          'Public service',
          'Business & ventures',
          'Independent work',
          null,
        ],
        kind: 'interest',
      },
      {
        id: 'i4',
        q: 'Where would you prefer to apply your strengths?',
        o: [
          'Analysing evidence and data',
          'Creating software',
          'Developing new knowledge',
          'Maintaining technical infrastructure',
          'Serving communities through public institutions',
          'Building and managing a venture',
          'Working independently with different clients',
          'Not sure yet',
        ],
        values: [
          'Data & AI',
          'Software',
          'Research',
          'Infrastructure',
          'Public service',
          'Business & ventures',
          'Independent work',
          null,
        ],
        kind: 'interest',
      },
    ],
  },
  {
    title: 'Preferences & practical limits',
    note: 'These answers help compare options against your circumstances. You can keep your current profile settings.',
    questions: [
      {
        id: 'goal',
        q: 'Which direction would you like to prioritise?',
        o: [
          'Jobs in industry',
          'Higher studies',
          'Certifications',
          'Government jobs',
          'Entrepreneurship',
          'Freelancing',
          'Explore all options',
        ],
        values: [
          'Job placement',
          'Higher studies',
          'Certification',
          'Government jobs',
          'Entrepreneurship',
          'Freelancing',
          'Explore all',
        ],
        kind: 'goal',
      },
      {
        id: 'months',
        q: 'How much time can you allow for learning or study?',
        o: ['3 months', '6 months', '12 months', '24 months', 'Keep my current setting'],
        values: [3, 6, 12, 24, null],
        kind: 'months',
      },
      {
        id: 'budget',
        q: 'What total learning or setup budget should we use?',
        o: [
          'No paid budget',
          'Up to \u20b915,000',
          'Up to \u20b950,000',
          'Up to \u20b93,00,000',
          'Keep my current setting',
        ],
        values: [0, 15000, 50000, 300000, null],
        kind: 'budget',
      },
      {
        id: 'routine',
        q: 'How much focused time can you usually set aside per week?',
        o: [
          'Under 5 hours',
          '5\u201310 hours',
          '10\u201320 hours',
          'More than 20 hours',
          'Not sure yet',
        ],
        kind: 'reflection',
      },
      {
        id: 'priority',
        q: 'What is your biggest priority right now?',
        o: [
          'Earning sooner',
          'Deeper study and specialization',
          'Public-service work',
          'Flexibility and independence',
          'Testing a business idea',
          'I am still exploring',
        ],
        kind: 'reflection',
      },
    ],
  },
  {
    title: 'Data & analytical foundations',
    note: 'Check basic concepts. \u201cI have not learned this yet\u201d is useful information, not a penalty.',
    questions: [
      {
        id: 'k10',
        q: 'Which SQL clause filters grouped aggregate results?',
        o: ['WHERE', 'HAVING', 'ORDER BY', 'I have not learned this yet'],
        answer: 1,
        skill: 'SQL',
        explanation: 'HAVING filters grouped results after aggregation.',
        kind: 'knowledge',
      },
      {
        id: 'k11',
        q: 'Which SQL operation combines rows from related tables?',
        o: ['JOIN', 'SORT', 'ROUND', 'I have not learned this yet'],
        answer: 0,
        skill: 'SQL',
        explanation:
          'JOIN combines records according to a relationship or join condition.',
        kind: 'knowledge',
      },
      {
        id: 'k12',
        q: 'For the values 2, 3 and 10, what is the median?',
        o: ['3', '5', '10', 'I have not learned this yet'],
        answer: 0,
        skill: 'Statistics',
        explanation: 'The median is the middle value after sorting: 3.',
        kind: 'knowledge',
      },
      {
        id: 'k13',
        q: 'Which statement about correlation is safest?',
        o: [
          'It always proves causation',
          'It describes association, not necessarily causation',
          'It means both values are identical',
          'I have not learned this yet',
        ],
        answer: 1,
        skill: 'Statistics',
        explanation: 'An association alone does not establish a causal relationship.',
        kind: 'knowledge',
      },
      {
        id: 'k14',
        q: 'Which data should be reserved for final model evaluation?',
        o: [
          'Training data',
          'Repeatedly used tuning data',
          'A held-out test set',
          'I have not learned this yet',
        ],
        answer: 2,
        skill: null,
        explanation:
          'A held-out test set supports final evaluation when it has not influenced model development.',
        kind: 'knowledge',
      },
    ],
  },
  {
    title: 'Software & systems foundations',
    note: 'These are starting-point checks, not a coding interview or a professional certification.',
    questions: [
      {
        id: 'k15',
        q: 'Which JavaScript method converts JSON text to a value?',
        o: [
          'JSON.parse()',
          'JSON.stringify()',
          'Math.round()',
          'I have not learned this yet',
        ],
        answer: 0,
        skill: 'JavaScript',
        explanation:
          'JSON.parse reads JSON text; stringify converts a value to JSON text.',
        kind: 'knowledge',
      },
      {
        id: 'k16',
        q: 'What does an awaited JavaScript Promise allow you to do?',
        o: [
          'Wait for its result inside an async function',
          'Guarantee a request will succeed',
          'Block every application on the computer',
          'I have not learned this yet',
        ],
        answer: 0,
        skill: 'JavaScript',
        explanation:
          'await waits for a Promise result within the async flow, but does not guarantee success.',
        kind: 'knowledge',
      },
      {
        id: 'k17',
        q: 'What is a primary purpose of DNS?',
        o: [
          'Translate domain names to network addresses',
          'Encrypt every file',
          'Increase physical memory',
          'I have not learned this yet',
        ],
        answer: 0,
        skill: 'Networking',
        explanation: 'DNS resolves names to records such as IP addresses.',
        kind: 'knowledge',
      },
      {
        id: 'k18',
        q: 'What does HTTPS add to HTTP?',
        o: [
          'Transport encryption and server authentication through TLS',
          'Guaranteed factual accuracy',
          'Unlimited bandwidth',
          'I have not learned this yet',
        ],
        answer: 0,
        skill: 'Networking',
        explanation:
          'TLS protects transport and helps authenticate the server; it does not verify content truth.',
        kind: 'knowledge',
      },
      {
        id: 'k19',
        q: 'What is the best first step when a bug appears?',
        o: [
          'Change unrelated code',
          'Reproduce the issue and inspect the error',
          'Delete all tests',
          'I have not learned this yet',
        ],
        answer: 1,
        skill: null,
        explanation: 'A reproducible case and error evidence help isolate the cause.',
        kind: 'knowledge',
      },
    ],
  },
  {
    title: 'Research & critical thinking',
    note: 'Focus on evaluating evidence and planning fair comparisons.',
    questions: [
      {
        id: 'k20',
        q: 'When comparing two recommendation methods, what should stay consistent?',
        o: [
          'The evaluation dataset and criteria',
          'Only the chart colours',
          'Nothing',
          'I have not learned this yet',
        ],
        answer: 0,
        skill: 'Research Methods',
        explanation:
          'Consistent evaluation conditions make the comparison interpretable.',
        kind: 'knowledge',
      },
      {
        id: 'k21',
        q: 'What helps another researcher reproduce your result?',
        o: [
          'A screenshot alone',
          'Data provenance, method, code and settings',
          'Only your final conclusion',
          'I have not learned this yet',
        ],
        answer: 1,
        skill: 'Research Methods',
        explanation:
          'Reproducibility depends on access to the relevant inputs and procedure.',
        kind: 'knowledge',
      },
      {
        id: 'k22',
        q: 'A study reports improvement from only five volunteers. What should you do?',
        o: [
          'Assume it applies to everyone',
          'Consider sample limitations before generalizing',
          'Ignore the sample size',
          'I have not learned this yet',
        ],
        answer: 1,
        skill: 'Critical Thinking',
        explanation: 'A small or unrepresentative sample limits generalization.',
        kind: 'knowledge',
      },
      {
        id: 'k23',
        q: 'Two sources disagree. What is the strongest next step?',
        o: [
          'Choose the more exciting claim',
          'Compare methods, evidence and context',
          'Choose whichever came first',
          'I have not learned this yet',
        ],
        answer: 1,
        skill: 'Critical Thinking',
        explanation:
          'Assess the quality and context of evidence rather than the appeal of the claim.',
        kind: 'knowledge',
      },
      {
        id: 'k24',
        q: 'Where should limitations be reported in a research project?',
        o: [
          'Clearly alongside methods and findings',
          'Nowhere',
          'Only if someone notices',
          'I have not learned this yet',
        ],
        answer: 0,
        skill: null,
        explanation:
          'Reporting limitations helps readers interpret the strength and scope of conclusions.',
        kind: 'knowledge',
      },
    ],
  },
  {
    title: 'Aptitude & public-service readiness',
    note: 'These questions cover basic aptitude, not exam eligibility or a prediction of selection.',
    questions: [
      {
        id: 'k25',
        q: 'A value rises from 200 to 250. What is the percentage increase?',
        o: ['20%', '25%', '50%', 'I have not learned this yet'],
        answer: 1,
        skill: 'Quantitative Aptitude',
        explanation: 'The increase is 50 divided by the original 200, or 25%.',
        kind: 'knowledge',
      },
      {
        id: 'k26',
        q: 'If three identical notebooks cost \u20b990, what do five cost?',
        o: ['\u20b9120', '\u20b9150', '\u20b9180', 'I have not learned this yet'],
        answer: 1,
        skill: 'Quantitative Aptitude',
        explanation: 'One costs \u20b930, so five cost \u20b9150.',
        kind: 'knowledge',
      },
      {
        id: 'k27',
        q: 'All A are B. All B are C. What must follow?',
        o: ['All A are C', 'All C are A', 'No A are C', 'I have not learned this yet'],
        answer: 0,
        skill: 'Logical Reasoning',
        explanation: 'Membership in A implies membership in B and therefore C.',
        kind: 'knowledge',
      },
      {
        id: 'k28',
        q: 'A sequence is 3, 6, 12, 24. Following the same rule, what is next?',
        o: ['27', '36', '48', 'I have not learned this yet'],
        answer: 2,
        skill: 'Logical Reasoning',
        explanation: 'Each term doubles, so the next is 48.',
        kind: 'knowledge',
      },
      {
        id: 'k29',
        q: 'Where should you verify eligibility for a government recruitment?',
        o: [
          'A forwarded message',
          'The current official recruitment notification',
          'A past applicant\u2019s assumption',
          'I have not learned this yet',
        ],
        answer: 1,
        skill: null,
        explanation:
          'The current official notification is the source for applicable recruitment conditions.',
        kind: 'knowledge',
      },
    ],
  },
  {
    title: 'Business & independent-work readiness',
    note: 'Consider how you would manage a small project, client or business experiment.',
    questions: [
      {
        id: 'k30',
        q: 'A client request is unclear. What should you do first?',
        o: [
          'Promise a deadline immediately',
          'Clarify deliverables and acceptance criteria',
          'Build whatever you prefer',
          'I have not learned this yet',
        ],
        answer: 1,
        skill: 'Communication',
        explanation:
          'Clarifying scope and acceptance criteria reduces misunderstandings.',
        kind: 'knowledge',
      },
      {
        id: 'k31',
        q: 'You discover a likely delivery delay. What is the best response?',
        o: [
          'Hide it until the deadline',
          'Explain the impact early and discuss options',
          'Stop replying',
          'I have not learned this yet',
        ],
        answer: 1,
        skill: 'Communication',
        explanation: 'Early, clear communication gives others time to adapt.',
        kind: 'knowledge',
      },
      {
        id: 'k32',
        q: 'A project has many tasks. What helps you plan the order?',
        o: [
          'Dependencies and priorities',
          'Alphabetical order only',
          'Starting every task at once',
          'I have not learned this yet',
        ],
        answer: 0,
        skill: 'Project Management',
        explanation:
          'Dependencies establish what must come first; priorities guide trade-offs.',
        kind: 'knowledge',
      },
      {
        id: 'k33',
        q: 'A new feature is requested after scope is agreed. What should happen?',
        o: [
          'Add it without checking impact',
          'Assess time and cost, then agree the change',
          'Ignore all future requests',
          'I have not learned this yet',
        ],
        answer: 1,
        skill: 'Project Management',
        explanation: 'Reviewing and agreeing scope changes makes their impact visible.',
        kind: 'knowledge',
      },
      {
        id: 'k34',
        q: 'Before investing heavily in a business idea, what is most useful?',
        o: [
          'Customer discovery and a small test',
          'Assuming everyone will buy',
          'Spending the entire budget on branding',
          'I have not learned this yet',
        ],
        answer: 0,
        skill: null,
        explanation:
          'A small test and customer evidence can challenge assumptions before larger commitments.',
        kind: 'knowledge',
      },
    ],
  },
];

const assessmentState = { answers: {}, page: 0 };
function evaluateAssessment(answers, current) {
  const interestScores = {},
    evidence = {},
    sections = [];
  const next = { ...current, skills: [...current.skills] };
  const reflections = [];
  for (const section of ASSESSMENT_SECTIONS) {
    let correct = 0,
      total = 0;
    for (const q of section.questions) {
      const index = answers[q.id];
      if (index === undefined) continue;
      if (q.kind === 'interest') {
        const v = q.values[index];
        if (v) interestScores[v] = (interestScores[v] || 0) + 1;
      } else if (['goal', 'months', 'budget'].includes(q.kind)) {
        const v = q.values[index];
        if (v !== null) next[q.kind] = v;
      } else if (q.kind === 'reflection')
        reflections.push({ question: q.q, answer: q.o[index] });
      else {
        total++;
        if (index === q.answer) correct++;
        if (q.skill) {
          evidence[q.skill] ??= { correct: 0, total: 0 };
          evidence[q.skill].total++;
          if (index === q.answer) evidence[q.skill].correct++;
        }
      }
    }
    if (total) sections.push({ name: section.title, correct, total });
  }
  const ranked = Object.entries(interestScores).sort((a, b) => b[1] - a[1]);
  const clear =
    ranked.length && ranked[0][1] >= 2 && (!ranked[1] || ranked[0][1] > ranked[1][1]);
  if (clear) next.interest = ranked[0][0];
  const suggested = Object.entries(evidence)
    .filter(
      ([s, v]) => v.total >= 2 && v.correct === v.total && !current.skills.includes(s)
    )
    .map(([s]) => s);
  return { next, ranked, clear, suggested, sections, reflections };
}
function assessment() {
  const d = document.getElementById('details');
  if (!d.open) d.showModal();
  drawAssessment();
}
function drawAssessment() {
  const state = assessmentState,
    section = ASSESSMENT_SECTIONS[state.page],
    answered = Object.keys(state.answers).length;
  document.getElementById('detail-content').innerHTML = /* HTML */ `
    <button class="close" aria-label="Close assessment">×</button>
    <div class="eyebrow">
      CAREER EXPLORATION · ${state.page + 1} OF ${ASSESSMENT_SECTIONS.length}
    </div>
    <h2>${section.title}</h2>
    <p class="muted">35 questions · approximately 12–18 minutes. ${section.note}</p>
    <div class="assessment-meter">
      <span>${answered}/35 answered</span>
      <div class="bar"><i style="width:${(answered / 35) * 100}%"></i></div>
    </div>
    <form id="assessment-form">
      ${section.questions
        .map(
          (q, i) => /* HTML */ `
            <fieldset>
              <legend>${state.page * 5 + i + 1}. ${q.q}</legend>
              ${q.o
                .map(
                  (o, j) => /* HTML */ `
                    <label class="radio">
                      <input
                        type="radio"
                        required
                        name="${q.id}"
                        value="${j}"
                        ${state.answers[q.id] === j ? 'checked' : ''}
                      />
                      ${o}
                    </label>
                  `
                )
                .join('')}
            </fieldset>
          `
        )
        .join('')}
      <div class="assessment-actions">
        <button
          type="button"
          class="button secondary"
          id="assessment-back"
          ${state.page === 0 ? 'disabled' : ''}
        >
          Back
        </button>
        <button class="button">
          ${state.page === 6 ? 'Review my results' : 'Next section →'}
        </button>
      </div>
      <p class="muted">
        Answers are kept only while this page is open. This is an exploratory
        questionnaire, not a validated career or aptitude test.
      </p>
    </form>
  `;
  document.querySelector('.close').onclick = () =>
    document.getElementById('details').close();
  document.getElementById('assessment-back').onclick = () => {
    state.page--;
    drawAssessment();
  };
  const form = document.getElementById('assessment-form');
  form.onchange = (e) => {
    if (e.target.type === 'radio') {
      state.answers[e.target.name] = Number(e.target.value);
      const n = Object.keys(state.answers).length;
      document.querySelector('.assessment-meter span').textContent = n + '/35 answered';
      document.querySelector('.assessment-meter i').style.width = (n / 35) * 100 + '%';
    }
  };
  form.onsubmit = (e) => {
    e.preventDefault();
    if (state.page < 6) {
      state.page++;
      drawAssessment();
    } else reviewAssessment();
  };
  document.getElementById('details').scrollTop = 0;
}
function reviewAssessment() {
  const result = evaluateAssessment(assessmentState.answers, profile);
  const score = result.sections.reduce((n, s) => n + s.correct, 0);
  document.getElementById('detail-content').innerHTML = /* HTML */ `
    <button class="close" aria-label="Close results">×</button>
    <div class="eyebrow">YOUR ASSESSMENT SUMMARY</div>
    <h2>What your answers tell us</h2>
    <p>
      ${score}/25 foundation questions correct. This is a snapshot of basic concepts, not
      a career suitability score.
    </p>
    <h3>Interests & preferences</h3>
    <p>
      ${result.clear
        ? 'Your strongest expressed interest is <b>' + result.next.interest + '</b>.'
        : 'Your interests are mixed or uncertain. Your current primary interest is kept.'}
    </p>
    <p>
      Direction:
      <b>${result.next.goal}</b>
      · Time:
      <b>${result.next.months} months</b>
      · Budget:
      <b>${money(result.next.budget)}</b>
    </p>
    <p class="muted">
      Applying results updates these profile settings. Weekly availability and your
      immediate priority are reflection notes only; they are not scored.
    </p>
    ${result.reflections
      .map(
        (r) => /* HTML */ `
          <p>
            <b>${r.question}</b>
            <br />
            ${r.answer}
          </p>
        `
      )
      .join('')}
    <h3>Foundations by area</h3>
    <div class="assessment-breakdown">
      ${result.sections
        .map(
          (s) => /* HTML */ `
            <div>
              <span>${s.name}</span>
              <b>${s.correct}/${s.total}</b>
            </div>
          `
        )
        .join('')}
    </div>
    <h3>Review suggested skills</h3>
    <p class="muted">
      These suggestions require both basic questions for a skill to be correct. That does
      not establish mastery. Select only skills you can also demonstrate in practice.
      Existing self-reported skills are preserved.
    </p>
    <div class="skill-picker">
      ${result.suggested
        .map(
          (s) => /* HTML */ `
            <label>
              <input type="checkbox" name="assessed-skill" value="${escapeHTML(s)}" />
              <span>${s}</span>
            </label>
          `
        )
        .join('') ||
      '<p>No additional skills suggested. Use your topic results to plan what to learn next.</p>'}
    </div>
    <details>
      <summary>Review answers and explanations</summary>
      ${ASSESSMENT_SECTIONS.flatMap((s) => s.questions)
        .filter((q) => q.kind === 'knowledge')
        .map(
          (q) => /* HTML */ `
            <div class="answer-review">
              <b>${q.q}</b>
              <p>Your answer: ${q.o[assessmentState.answers[q.id]]}</p>
              <p>
                Correct answer: ${q.o[q.answer]}
                <br />
                ${q.explanation}
              </p>
            </div>
          `
        )
        .join('')}
    </details>
    <div class="assessment-actions">
      <button class="button secondary" id="review-back">Review my responses</button>
      <button class="button" id="apply-assessment">Apply & update pathways ↗</button>
    </div>
  `;
  document.querySelector('.close').onclick = () =>
    document.getElementById('details').close();
  document.getElementById('review-back').onclick = () => {
    assessmentState.page = 0;
    drawAssessment();
  };
  document.getElementById('apply-assessment').onclick = () => {
    const confirmed = Array.from(
      document.querySelectorAll('input[name="assessed-skill"]:checked')
    ).map((b) => b.value);
    profile = {
      ...result.next,
      skills: [...new Set([...result.next.skills, ...confirmed])],
    };
    assessmentDone = true;
    document.getElementById('details').close();
    setView('explore');
    toast('Assessment applied. Your profile and pathways have been updated.');
  };
  document.getElementById('details').scrollTop = 0;
}

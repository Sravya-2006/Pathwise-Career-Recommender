/**
 * Preparation roadmaps
 * Pathway phases, practical tasks, deliverables and session-only progress.
 */

const ROADMAPS = {
  data: [
    {
      title: 'Establish your starting point',
      tasks: [
        'Practice 20 SQL queries using joins, grouping and window functions',
        'Clean a public dataset and document missing-value decisions',
        'Explain sampling, confidence intervals and data leakage',
      ],
      output: 'A documented baseline and a weekly study plan',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Build and practise',
      tasks: [
        'Define a prediction target and a simple baseline',
        'Split data before preprocessing and compare two models with cross-validation',
        'Create a reproducible notebook with error analysis and limitations',
      ],
      output: 'A reviewable project, practice log or application shortlist',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Demonstrate readiness',
      tasks: [
        'Deploy a small prediction demo with input validation',
        'Write two portfolio case studies explaining business impact and limitations',
        'Complete three mock interviews and track ten targeted applications',
      ],
      output: 'A complete portfolio, application pack or pilot proposal',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  full: [
    {
      title: 'Establish your starting point',
      tasks: [
        'Build responsive pages with HTML, CSS and React',
        'Create REST endpoints with validation and error handling',
        'Design SQL tables with keys and relationships',
      ],
      output: 'A documented baseline and a weekly study plan',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Build and practise',
      tasks: [
        'Build a full-stack application with authentication and authorization',
        'Test one critical user journey and common failure cases',
        'Deploy the app and document setup and API usage',
      ],
      output: 'A reviewable project, practice log or application shortlist',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Demonstrate readiness',
      tasks: [
        'Prepare two project walkthroughs with architecture decisions',
        'Practice data structures and debug unfamiliar code',
        'Tailor your CV and track ten suitable junior applications',
      ],
      output: 'A complete portfolio, application pack or pilot proposal',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  cloud: [
    {
      title: 'Establish your starting point',
      tasks: [
        'Practice Linux permissions, processes and shell scripting',
        'Explain DNS, HTTP, subnets and basic network security',
        'Create a cloud sandbox with spending alerts',
      ],
      output: 'A documented baseline and a weekly study plan',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Build and practise',
      tasks: [
        'Deploy a small application with repeatable infrastructure configuration',
        'Add logs, health checks and a backup procedure',
        'Practice recovery from a failed deployment',
      ],
      output: 'A reviewable project, practice log or application shortlist',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Demonstrate readiness',
      tasks: [
        'Document architecture, cost assumptions and access controls',
        'Complete three troubleshooting exercises',
        'Prepare a portfolio walkthrough and targeted applications',
      ],
      output: 'A complete portfolio, application pack or pilot proposal',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  mlcert: [
    {
      title: 'Establish your starting point',
      tasks: [
        'Compare course syllabus, assessment format and total cost',
        'Review Python arrays, data cleaning and probability',
        'Choose a capstone question and a suitable dataset',
      ],
      output: 'A documented baseline and a weekly study plan',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Build and practise',
      tasks: [
        'Complete weekly exercises and keep notes on errors',
        'Train a baseline and two candidate models',
        'Document validation choices and perform error analysis',
      ],
      output: 'A reviewable project, practice log or application shortlist',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Demonstrate readiness',
      tasks: [
        'Evaluate once on a held-out test set',
        'Complete provider assessments when ready',
        'Publish a capstone report with reproducible instructions',
      ],
      output: 'A complete portfolio, application pack or pilot proposal',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  cloudcert: [
    {
      title: 'Establish your starting point',
      tasks: [
        'Choose a provider and check its current official exam guide',
        'Review networking, Linux and cloud service models',
        'Set a lab budget and clean-up routine',
      ],
      output: 'A documented baseline and a weekly study plan',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Build and practise',
      tasks: [
        'Practice identity permissions and least-privilege access',
        'Deploy a small storage and compute lab',
        'Record billing, availability and security trade-offs',
      ],
      output: 'A reviewable project, practice log or application shortlist',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Demonstrate readiness',
      tasks: [
        'Map completed labs to the provider\u2019s published objectives',
        'Use timed practice to identify weak topics',
        'Book the assessment only after reviewing current rules and readiness',
      ],
      output: 'A complete portfolio, application pack or pilot proposal',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  ms: [
    {
      title: 'Build academic readiness',
      tasks: [
        'Review linear algebra, probability and optimization',
        'Read three AI papers and summarize methods and limitations',
        'Reproduce one small experiment',
      ],
      output: 'Paper summaries and a reproducible academic project',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Shortlist programmes and funding',
      tasks: [
        'Compare five programmes by prerequisites, research fit and funding',
        'Verify required entrance or language tests directly with institutions',
        'Prepare a deadline and document checklist',
      ],
      output: 'Programme shortlist with verified deadlines and funding notes',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Prepare and submit applications',
      tasks: [
        'Draft a research-interest statement grounded in your project',
        'Request references early and assemble transcripts',
        'Review funding plans and submit applications before verified deadlines',
      ],
      output: 'Reviewed application documents and submission tracker',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  csms: [
    {
      title: 'Build academic readiness',
      tasks: [
        'Review algorithms, operating systems and computer networks',
        'Practice mathematics and core CS questions',
        'Choose a systems or algorithms research theme',
      ],
      output: 'Paper summaries and a reproducible academic project',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Shortlist programmes and funding',
      tasks: [
        'Compare five programmes and their current admission criteria',
        'Plan required entrance preparation and document collection',
        'Identify faculty whose published work matches your interests',
      ],
      output: 'Programme shortlist with verified deadlines and funding notes',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Prepare and submit applications',
      tasks: [
        'Write a focused statement and project summary',
        'Request academic references and verify application documents',
        'Submit suitable applications and prepare for interviews',
      ],
      output: 'Reviewed application documents and submission tracker',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  research: [
    {
      title: 'Build academic readiness',
      tasks: [
        'Practice statistical inference and SQL analysis',
        'Reproduce a result from a data-science paper',
        'Write a short report explaining uncertainty and limitations',
      ],
      output: 'Paper summaries and a reproducible academic project',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Shortlist programmes and funding',
      tasks: [
        'Compare five programmes by curriculum and research fit',
        'Verify prerequisites, tests, funding and actual costs',
        'Build a calendar of official application deadlines',
      ],
      output: 'Programme shortlist with verified deadlines and funding notes',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Prepare and submit applications',
      tasks: [
        'Prepare a research-interest statement and project portfolio',
        'Request references and assemble academic records',
        'Submit reviewed applications and compare any offers carefully',
      ],
      output: 'Reviewed application documents and submission tracker',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  ssc: [
    {
      title: 'Choose an exam and verify eligibility',
      tasks: [
        'Choose a target examination and read its current SSC notice',
        'Verify post-specific degree, age, nationality and other conditions',
        'Take a diagnostic covering the published syllabus',
      ],
      output: 'Verified target notice, eligibility checklist and diagnostic score',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Prepare against the official syllabus',
      tasks: [
        'Divide the official syllabus into weekly topic blocks',
        'Practice aptitude, reasoning, English and awareness with an error log',
        'Complete one timed sectional exercise each week',
      ],
      output: 'Syllabus tracker, revision notes and timed-practice error log',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Revise, practise and apply',
      tasks: [
        'Take full-length mocks using the current published format',
        'Review every error and practise any notified skill test',
        'Verify dates and documents on SSC before applying',
      ],
      output: 'Document checklist and mock performance review',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  tnpsc: [
    {
      title: 'Choose an exam and verify eligibility',
      tasks: [
        'Choose a target group or recruitment notice on TNPSC',
        'Verify qualification, language and other post-specific conditions',
        'Download the current syllabus and complete a diagnostic',
      ],
      output: 'Verified target notice, eligibility checklist and diagnostic score',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Prepare against the official syllabus',
      tasks: [
        'Plan weekly general studies, aptitude and language practice as applicable',
        'Summarize relevant Tamil Nadu topics from reliable material',
        'Maintain a revision notebook and weekly timed practice',
      ],
      output: 'Syllabus tracker, revision notes and timed-practice error log',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Revise, practise and apply',
      tasks: [
        'Use previous papers aligned with the selected recruitment',
        'Practise descriptive or interview tasks only if the notice requires them',
        'Verify application documents and dates directly with TNPSC',
      ],
      output: 'Document checklist and mock performance review',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  upsc: [
    {
      title: 'Choose an exam and verify eligibility',
      tasks: [
        'Read the current Civil Services notification and syllabus',
        'Verify degree, age, nationality and attempt conditions',
        'Review previous papers and assess your available study time',
      ],
      output: 'Verified target notice, eligibility checklist and diagnostic score',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Prepare against the official syllabus',
      tasks: [
        'Plan general studies and aptitude study with weekly revision',
        'Evaluate optional-subject fit against the published syllabus',
        'Practise structured answer writing and source-based current-affairs notes',
      ],
      output: 'Syllabus tracker, revision notes and timed-practice error log',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Revise, practise and apply',
      tasks: [
        'Use timed papers and an error log to guide revision',
        'Build separate preparation blocks for the relevant examination stages',
        'Verify official dates and required documents before applying',
      ],
      output: 'Document checklist and mock performance review',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  startup: [
    {
      title: 'Establish your starting point',
      tasks: [
        'Choose one customer group and one problem',
        'Conduct ten discovery conversations without leading questions',
        'Summarize existing alternatives and willingness-to-pay evidence',
      ],
      output: 'A documented baseline and a weekly study plan',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Build and practise',
      tasks: [
        'Build the smallest prototype that tests your main assumption',
        'Observe five users attempting the core task',
        'Record usage, feedback and reasons for dropping out',
      ],
      output: 'A reviewable project, practice log or application shortlist',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Demonstrate readiness',
      tasks: [
        'Define a small paid pilot with clear scope',
        'Estimate costs, pricing assumptions and available runway',
        'Decide whether to continue, change the offer or stop based on evidence',
      ],
      output: 'A complete portfolio, application pack or pilot proposal',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  agency: [
    {
      title: 'Establish your starting point',
      tasks: [
        'Choose one service, such as dashboard setup or website maintenance',
        'Interview five potential clients about workflow problems',
        'Draft a specific offer and boundaries for the service',
      ],
      output: 'A documented baseline and a weekly study plan',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Build and practise',
      tasks: [
        'Create two realistic sample deliverables',
        'Define pricing assumptions, turnaround time and revision limits',
        'Build a repeatable delivery checklist',
      ],
      output: 'A reviewable project, practice log or application shortlist',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Demonstrate readiness',
      tasks: [
        'Prepare personalized proposals for suitable prospects',
        'Agree scope, milestones and payment terms before work',
        'Deliver a small pilot and collect permission-based feedback',
      ],
      output: 'A complete portfolio, application pack or pilot proposal',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  freedev: [
    {
      title: 'Establish your starting point',
      tasks: [
        'Choose a niche and a small website service',
        'Build two responsive sample sites with accessible forms',
        'Publish a portfolio with a clear description of your role',
      ],
      output: 'A documented baseline and a weekly study plan',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Build and practise',
      tasks: [
        'Create a reusable brief and project estimate',
        'Define deliverables, revision limits and acceptance checks',
        'Practise deployment, backups and handover',
      ],
      output: 'A reviewable project, practice log or application shortlist',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Demonstrate readiness',
      tasks: [
        'Send targeted proposals using relevant portfolio examples',
        'Agree scope and payment milestones with a first client',
        'Deliver, test with the client and document maintenance boundaries',
      ],
      output: 'A complete portfolio, application pack or pilot proposal',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
  freedata: [
    {
      title: 'Establish your starting point',
      tasks: [
        'Build a spreadsheet report and SQL analysis from public data',
        'Create a dashboard answering three clear business questions',
        'Document data sources and quality limitations',
      ],
      output: 'A documented baseline and a weekly study plan',
      checkpoint: 'Explain your gaps and show the baseline evidence before moving on',
    },
    {
      title: 'Build and practise',
      tasks: [
        'Package two case studies with reproducible steps',
        'Define required client inputs, deliverables and turnaround',
        'Prepare a data-handling and access checklist',
      ],
      output: 'A reviewable project, practice log or application shortlist',
      checkpoint:
        'Ask a peer or mentor to review the deliverable and resolve the main gaps',
    },
    {
      title: 'Demonstrate readiness',
      tasks: [
        'Send relevant proposals with a small sample insight',
        'Agree success criteria and payment milestones',
        'Deliver a validated report and explain uncertainty to the client',
      ],
      output: 'A complete portfolio, application pack or pilot proposal',
      checkpoint:
        'Review your readiness against actual requirements; revise where needed',
    },
    {
      title: 'Review outcomes and choose the next step',
      tasks: [
        'Review responses, results or feedback against your original goal',
        'Record what improved and what still needs work',
        'Set a next-month plan or compare an alternative pathway',
      ],
      output: 'A decision log and a realistic next-month plan',
      checkpoint: 'Continue based on evidence, not a promised job, admission or income',
    },
  ],
};
const roadmapProgress = {};

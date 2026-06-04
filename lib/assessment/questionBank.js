// ── Role Questions (r1–r10) ───────────────────────────────────────────────────
export const ROLE_QUESTIONS = [
  {
    id: 'r1', text: 'What best describes your primary seniority level?',
    options: [
      { text: 'Individual contributor / specialist', value: 'individual' },
      { text: 'Team lead or line manager', value: 'team_lead' },
      { text: 'Senior manager or department head', value: 'senior_manager' },
      { text: 'Executive or C-suite', value: 'executive' },
      { text: 'Founder or entrepreneur', value: 'founder' },
    ],
  },
  {
    id: 'r2', text: 'What is the primary nature of your work?',
    options: [
      { text: 'Operational — executing defined processes', value: 'operational' },
      { text: 'Analytical — working with data and information', value: 'analytical' },
      { text: 'Creative — producing content, ideas, or communications', value: 'creative' },
      { text: 'Strategic — shaping direction and making decisions', value: 'strategic' },
      { text: 'Relational — managing clients, partners, or stakeholders', value: 'relational' },
    ],
  },
  {
    id: 'r3', text: 'How significant is your people management responsibility?',
    options: [
      { text: 'None — I manage no direct reports', value: 'none' },
      { text: 'Small — I manage 1–5 people', value: 'small' },
      { text: 'Significant — I manage a team of 6–20', value: 'significant' },
      { text: 'Majority of my role is managing people', value: 'majority' },
    ],
  },
  {
    id: 'r4', text: 'How repetitive is the majority of your work?',
    options: [
      { text: 'Highly repetitive — same tasks most days', value: 'highly_repetitive' },
      { text: 'Mostly routine with occasional variation', value: 'mostly_routine' },
      { text: 'A mix of routine and novel work', value: 'mixed' },
      { text: 'Mostly novel — each situation is different', value: 'mostly_novel' },
    ],
  },
  {
    id: 'r5', text: 'How central is written output to your professional work?',
    options: [
      { text: 'Minimal — I write occasionally', value: 'minimal' },
      { text: 'Moderate — writing is part of my role', value: 'moderate' },
      { text: 'Substantial — writing occupies a major portion of my time', value: 'substantial' },
      { text: 'Central — my output is primarily written', value: 'central' },
    ],
  },
  {
    id: 'r6', text: 'How much judgment and ambiguity does your work involve?',
    options: [
      { text: 'Minimal — my work has clear rules and answers', value: 'minimal' },
      { text: 'Moderate — some judgment required', value: 'moderate' },
      { text: 'Substantial — judgment is a regular part of my role', value: 'substantial' },
      { text: 'Dominant — my role is defined by navigating ambiguity', value: 'dominant' },
    ],
  },
  {
    id: 'r7', text: 'What type of data or information do you work with most?',
    options: [
      { text: 'Structured data (databases, spreadsheets, metrics)', value: 'structured' },
      { text: 'Unstructured data (documents, emails, conversations)', value: 'unstructured' },
      { text: 'Both structured and unstructured', value: 'both' },
      { text: 'Minimal data — my work is primarily people or process based', value: 'minimal' },
    ],
  },
  {
    id: 'r8', text: 'How externally or client-facing is your role?',
    options: [
      { text: 'Primarily internal — I work within my organisation', value: 'internal' },
      { text: 'Mixed — internal and external stakeholders', value: 'mixed' },
      { text: 'Primarily external — clients, partners, or public-facing', value: 'external' },
    ],
  },
  {
    id: 'r9', text: 'How much autonomy do you have over how you do your work?',
    options: [
      { text: 'Low — my methods are largely prescribed', value: 'low' },
      { text: 'Moderate — some flexibility within defined parameters', value: 'moderate' },
      { text: 'High — I design my own approach most of the time', value: 'high' },
      { text: 'Complete — I have full discretion over methods and tools', value: 'complete' },
    ],
  },
  {
    id: 'r10', text: 'How do you see AI fitting into your professional future?',
    options: [
      { text: 'Automating tasks I find tedious or time-consuming', value: 'task_automation' },
      { text: 'Augmenting my judgment and capability', value: 'augmentation' },
      { text: 'Helping me build products or tools I couldn\'t otherwise create', value: 'builder' },
      { text: 'Enabling strategic decisions and organisational transformation', value: 'strategist' },
      { text: 'I\'m not sure yet — still figuring it out', value: 'uncertain' },
    ],
  },
];

// ── Capability Questions (35 questions × 5 dimensions) ────────────────────────
export const CAPABILITY_QUESTIONS = [
  // ── AWARENESS (a1–a7) ────────────────────────────────────────────────────────
  {
    id: 'a1', dimension: 'awareness',
    archetypes: ['Strategic Leader', 'People & Team Leader', 'Client & Relationship Professional'],
    variants: {
      default: {
        text: 'A vendor claims their AI solution delivers 300% ROI. The board asks for your assessment. How do you respond?',
        options: [
          { text: 'Request methodology, benchmark against comparable cases, present structured findings', score: 10 },
          { text: 'Ask for case studies and check against one comparable company', score: 3 },
          { text: 'Accept the ROI claim and present it to the board with vendor materials', score: 1 },
          { text: 'Dismiss the claim as AI hype and recommend against investment without analysis', score: 0 },
        ],
      },
    },
  },
  {
    id: 'a2', dimension: 'awareness',
    archetypes: ['Analytical Professional', 'Knowledge Worker', 'Operational Specialist'],
    variants: {
      default: {
        text: 'A new AI model claims to detect patterns your manual analysis consistently misses. How do you validate?',
        options: [
          { text: 'Design a parallel test, validate outputs against known data, document methodology', score: 10 },
          { text: 'Run the model on a sample and check if results align with your existing analysis', score: 3 },
          { text: 'Try the model briefly to see if results look different from manual work', score: 1 },
          { text: 'Trust the model\'s output and adopt it without independent verification', score: 0 },
        ],
      },
    },
  },
  {
    id: 'a3', dimension: 'awareness',
    archetypes: ['Client & Relationship Professional', 'Creative Professional', 'Knowledge Worker'],
    variants: {
      default: {
        text: 'A key stakeholder asks whether the document you delivered was written by AI. How do you respond?',
        options: [
          { text: 'Disclose AI use clearly, explain your review process, and offer to discuss your approach', score: 10 },
          { text: 'Confirm AI assisted with drafting but that you reviewed and substantively edited it', score: 3 },
          { text: 'Downplay AI involvement to avoid a difficult conversation about quality', score: 1 },
          { text: 'Deny AI use entirely to protect the client relationship', score: 0 },
        ],
      },
    },
  },
  {
    id: 'a4', dimension: 'awareness',
    archetypes: ['Operational Specialist', 'People & Team Leader', 'Analytical Professional'],
    variants: {
      default: {
        text: 'A new AI tool promises a 60% reduction in your team\'s processing time. How do you assess the claim?',
        options: [
          { text: 'Pilot with representative tasks, measure actual time saved, factor in transition costs', score: 10 },
          { text: 'Run a trial with one team member and compare their output time to the baseline', score: 3 },
          { text: 'Ask the vendor for their time-saving evidence and share it with leadership', score: 1 },
          { text: 'Roll out the tool based on the vendor\'s claim without internal testing', score: 0 },
        ],
      },
    },
  },
  {
    id: 'a5', dimension: 'awareness',
    archetypes: ['Knowledge Worker', 'Analytical Professional', 'Creative Professional'],
    variants: {
      default: {
        text: 'You\'re evaluating two AI approaches: a fine-tuned model vs. retrieval-augmented generation (RAG). How do you assess the trade-offs?',
        options: [
          { text: 'Assess both on data freshness, maintenance cost, task type fit, and failure mode risks', score: 10 },
          { text: 'Test both on your core use case and choose whichever performs better on key metrics', score: 3 },
          { text: 'Default to the better-known option and monitor for issues post-deployment', score: 1 },
          { text: 'Let the most technically enthusiastic team member choose based on their preference', score: 0 },
        ],
      },
    },
  },
  {
    id: 'a6', dimension: 'awareness',
    archetypes: ['Strategic Leader', 'Client & Relationship Professional', 'People & Team Leader'],
    variants: {
      default: {
        text: 'A competitor announces a major AI-powered offering. Leadership asks for your strategic assessment. What do you do?',
        options: [
          { text: 'Analyse competitor claims, map to your capabilities, present a structured gap analysis', score: 10 },
          { text: 'Research the competitor\'s offering and summarise key points for leadership', score: 3 },
          { text: 'Share the announcement with leadership and flag it as something to monitor', score: 1 },
          { text: 'Tell leadership it\'s a marketing stunt and recommend waiting before reacting', score: 0 },
        ],
      },
    },
  },
  {
    id: 'a7', dimension: 'awareness',
    archetypes: ['Creative Professional', 'Operational Specialist', 'Strategic Leader'],
    variants: {
      default: {
        text: 'AI has generated a polished document, but you haven\'t verified the claims. The deadline is in one hour. What do you do?',
        options: [
          { text: 'Quickly verify key claims, add appropriate caveats, and flag specific uncertainties', score: 10 },
          { text: 'Skim for obvious errors and submit with a note flagging areas needing review', score: 3 },
          { text: 'Submit as-is given the deadline and follow up on accuracy afterwards', score: 1 },
          { text: 'Submit without review — AI is reliable enough and the deadline is firm', score: 0 },
        ],
      },
    },
  },

  // ── PROMPTING (p1–p7) ────────────────────────────────────────────────────────
  {
    id: 'p1', dimension: 'prompting',
    archetypes: ['Strategic Leader', 'Client & Relationship Professional', 'Operational Specialist'],
    variants: {
      default: {
        text: 'You need AI to draft a strategic proposal for senior leadership. How do you structure the prompt?',
        options: [
          { text: 'Provide full context, role, audience, format requirements, constraints, and desired tone', score: 10 },
          { text: 'Give the key ask, main context points, target audience, and desired length', score: 3 },
          { text: 'Write a brief prompt describing the topic and ask AI to draft a strategic proposal', score: 1 },
          { text: 'Ask AI to "write a strategic proposal" and submit the first result with light editing', score: 0 },
        ],
      },
    },
  },
  {
    id: 'p2', dimension: 'prompting',
    archetypes: ['Analytical Professional', 'Knowledge Worker', 'People & Team Leader'],
    variants: {
      default: {
        text: 'You want AI to analyse a large dataset and identify meaningful patterns. How do you set up the prompt?',
        options: [
          { text: 'Define exact analysis objectives, data structure, hypotheses to test, and required format', score: 10 },
          { text: 'Describe the dataset, ask for pattern identification, and list the key business question', score: 3 },
          { text: 'Paste the data and ask AI to find anything that looks interesting or unusual', score: 1 },
          { text: 'Ask AI to analyse the data and trust whatever insights it surfaces directly', score: 0 },
        ],
      },
    },
  },
  {
    id: 'p3', dimension: 'prompting',
    archetypes: ['People & Team Leader', 'Operational Specialist', 'Creative Professional'],
    variants: {
      default: {
        text: 'You need AI to create a standard operating procedure (SOP) for a key team process. How do you prompt it?',
        options: [
          { text: 'Provide current steps, audience level, edge cases, tone, compliance needs, and format', score: 10 },
          { text: 'Describe the process in detail and ask for a structured, numbered procedure document', score: 3 },
          { text: 'Ask AI to write an SOP about the topic and lightly edit the output for accuracy', score: 1 },
          { text: 'Ask AI to "create an SOP" and publish the result with minimal review', score: 0 },
        ],
      },
    },
  },
  {
    id: 'p4', dimension: 'prompting',
    archetypes: ['Creative Professional', 'Client & Relationship Professional', 'Strategic Leader'],
    variants: {
      default: {
        text: 'You need AI to write content published across multiple channels for different audiences. How do you prompt it?',
        options: [
          { text: 'Define each audience, channel constraints, tone, objectives, and adaptation requirements', score: 10 },
          { text: 'Specify the core message and list the channels with their respective target audiences', score: 3 },
          { text: 'Write one prompt for the main piece and ask AI to adapt it for the other channels', score: 1 },
          { text: 'Ask AI to create all content at once and distribute with no channel-specific review', score: 0 },
        ],
      },
    },
  },
  {
    id: 'p5', dimension: 'prompting',
    archetypes: ['Knowledge Worker', 'Analytical Professional', 'Client & Relationship Professional'],
    variants: {
      default: {
        text: 'You need AI to generate a detailed technical specification for a system integration. How do you structure the prompt?',
        options: [
          { text: 'Specify system context, integration points, constraints, output format, and terminology', score: 10 },
          { text: 'Describe the integration need, list key technical requirements, request structured output', score: 3 },
          { text: 'Describe the system briefly and ask for a technical specification document', score: 1 },
          { text: 'Ask AI to write the spec and share it as a deliverable without technical validation', score: 0 },
        ],
      },
    },
  },
  {
    id: 'p6', dimension: 'prompting',
    archetypes: ['Operational Specialist', 'People & Team Leader', 'Knowledge Worker'],
    variants: {
      default: {
        text: 'AI\'s first draft of your documentation is too generic and misses the context. What do you do next?',
        options: [
          { text: 'Add specific context, examples, constraints, and explicit instructions on what to change', score: 10 },
          { text: 'Point out what is too generic and provide specific details about your actual context', score: 3 },
          { text: 'Ask AI to "make it more specific" without adding additional context or examples', score: 1 },
          { text: 'Accept the generic output and rewrite it entirely yourself from scratch', score: 0 },
        ],
      },
    },
  },
  {
    id: 'p7', dimension: 'prompting',
    archetypes: ['Strategic Leader', 'Creative Professional', 'Analytical Professional'],
    variants: {
      default: {
        text: 'You need AI to produce a stakeholder report that honestly balances positive outcomes with real challenges. How do you prompt it?',
        options: [
          { text: 'Specify format, evidence requirements, tone balance, audience, and examples of each section', score: 10 },
          { text: 'Ask for honest analysis with defined sections for outcomes and for challenges', score: 3 },
          { text: 'Ask AI to write a balanced report and review it yourself for overall fairness', score: 1 },
          { text: 'Generate positive sections with AI and write challenges manually to control the narrative', score: 0 },
        ],
      },
    },
  },

  // ── WORKFLOW (w1–w7) ──────────────────────────────────────────────────────────
  {
    id: 'w1', dimension: 'workflow',
    archetypes: ['Strategic Leader', 'People & Team Leader', 'Operational Specialist'],
    variants: {
      default: {
        text: 'You\'re tasked with redesigning a cross-team workflow to incorporate AI. Multiple departments are involved. How do you approach it?',
        options: [
          { text: 'Map the current process, identify AI integration points, pilot with one team, measure impact', score: 10 },
          { text: 'Meet with each team to understand their steps, then redesign with AI at key stages', score: 3 },
          { text: 'Identify which steps look repetitive and add AI tools to those without wider redesign', score: 1 },
          { text: 'Deploy AI tools team by team without mapping dependencies or measuring outcomes', score: 0 },
        ],
      },
    },
  },
  {
    id: 'w2', dimension: 'workflow',
    archetypes: ['Analytical Professional', 'Knowledge Worker', 'Strategic Leader'],
    variants: {
      default: {
        text: 'Your team produces a regular report from multiple data sources, with analysis and commentary. How do you redesign with AI?',
        options: [
          { text: 'Map data collection, analysis, and writing steps; redesign each with specific AI integrations', score: 10 },
          { text: 'Use AI for drafting the narrative and automate at least one data collection step', score: 3 },
          { text: 'Ask AI to help write the commentary section and keep other steps manual', score: 1 },
          { text: 'Have the team use AI ad hoc where they feel comfortable and report any improvement', score: 0 },
        ],
      },
    },
  },
  {
    id: 'w3', dimension: 'workflow',
    archetypes: ['Client & Relationship Professional', 'Creative Professional', 'Operational Specialist'],
    variants: {
      default: {
        text: 'Client onboarding takes several weeks with multiple manual steps. How do you redesign this with AI?',
        options: [
          { text: 'Map the full onboarding journey, identify friction points, redesign using AI at each stage', score: 10 },
          { text: 'Automate document preparation and use AI to draft initial client communications', score: 3 },
          { text: 'Add an AI tool to draft onboarding emails and keep all other steps manual', score: 1 },
          { text: 'Roll out an AI onboarding tool without testing it against the current experience', score: 0 },
        ],
      },
    },
  },
  {
    id: 'w4', dimension: 'workflow',
    archetypes: ['Operational Specialist', 'People & Team Leader', 'Client & Relationship Professional'],
    variants: {
      default: {
        text: 'Your team manually processes high volumes of incoming items: checking, categorising, and routing. How do you redesign this?',
        options: [
          { text: 'Map all variants, design AI-assisted routing, pilot, then validate with quality checkpoints', score: 10 },
          { text: 'Use AI to categorise incoming items and route them to the right person automatically', score: 3 },
          { text: 'Add AI to one processing step and monitor whether it reduces overall volume', score: 1 },
          { text: 'Automate the full process immediately to maximise time savings', score: 0 },
        ],
      },
    },
  },
  {
    id: 'w5', dimension: 'workflow',
    archetypes: ['Knowledge Worker', 'Analytical Professional', 'Creative Professional'],
    variants: {
      default: {
        text: 'You\'re building something new and need to iterate through multiple scenarios. How do you integrate AI into your workflow?',
        options: [
          { text: 'Define AI\'s role at each stage, set validation checkpoints, document AI-assisted output', score: 10 },
          { text: 'Use AI to generate initial versions and iterate using structured feedback each time', score: 3 },
          { text: 'Use AI when you get stuck and continue manually for the rest of the work', score: 1 },
          { text: 'Use AI freely throughout with no defined process and accept whatever it produces', score: 0 },
        ],
      },
    },
  },
  {
    id: 'w6', dimension: 'workflow',
    archetypes: ['Strategic Leader', 'Creative Professional', 'Client & Relationship Professional'],
    variants: {
      default: {
        text: 'A new AI tool could transform how your team delivers work but requires significant process change. How do you approach adoption?',
        options: [
          { text: 'Pilot with a volunteer group, measure productivity and quality, build evidence for rollout', score: 10 },
          { text: 'Run a structured pilot with clear success criteria before committing to full adoption', score: 3 },
          { text: 'Share the tool with the team and let individuals adopt at their own pace', score: 1 },
          { text: 'Roll out the tool immediately across the team to capture productivity gains fastest', score: 0 },
        ],
      },
    },
  },
  {
    id: 'w7', dimension: 'workflow',
    archetypes: ['People & Team Leader', 'Operational Specialist', 'Knowledge Worker'],
    variants: {
      default: {
        text: 'A senior leader asks you to justify the productivity investment in AI tools for your team. What evidence do you present?',
        options: [
          { text: 'Time saved, output quality metrics, error reduction, and cost per task with documented evidence', score: 10 },
          { text: 'Before-and-after examples with time comparison and output quality assessment', score: 3 },
          { text: 'Team satisfaction scores and a few positive examples from individual users', score: 1 },
          { text: 'Tell leadership AI tools are standard practice and the investment is justified by default', score: 0 },
        ],
      },
    },
  },

  // ── BUILD (b1–b7) ─────────────────────────────────────────────────────────────
  {
    id: 'b1', dimension: 'build',
    archetypes: ['Knowledge Worker', 'Strategic Leader', 'Creative Professional'],
    variants: {
      default: {
        text: 'You have a clear idea for a tool to automate a process. You\'re not a developer. What is the most effective path to a prototype?',
        options: [
          { text: 'Use no-code AI tools to build a prototype, document the logic, test with real users', score: 10 },
          { text: 'Use a no-code platform to build the tool and test it with a small group first', score: 3 },
          { text: 'Ask a developer to build it and provide them with your requirements document', score: 1 },
          { text: 'Wait until budget is available for a formal software development project', score: 0 },
        ],
      },
    },
  },
  {
    id: 'b2', dimension: 'build',
    archetypes: ['Operational Specialist', 'Analytical Professional', 'People & Team Leader'],
    variants: {
      default: {
        text: 'You need to build a small internal tool in two days. No developer is available and the prototype is due Friday. What do you do?',
        options: [
          { text: 'Use a no-code AI builder, define scope, build MVP, test with one user, iterate by Friday', score: 10 },
          { text: 'Use a no-code tool to build a working version and present it for feedback Friday', score: 3 },
          { text: 'Use spreadsheet automation and manual workarounds to approximate the tool\'s function', score: 1 },
          { text: 'Explain to stakeholders that without a developer the prototype can\'t be delivered on time', score: 0 },
        ],
      },
    },
  },
  {
    id: 'b3', dimension: 'build',
    archetypes: ['Strategic Leader', 'Client & Relationship Professional', 'Creative Professional'],
    variants: {
      default: {
        text: 'A stakeholder asks: "What happens if the AI produces an incorrect output affecting a client?" What is the most responsible answer?',
        options: [
          { text: 'Define validation checkpoints, human review for client-facing outputs, and escalation protocol', score: 10 },
          { text: 'Review all AI outputs before client delivery and flag uncertainties for expert verification', score: 3 },
          { text: 'Acknowledge AI errors are rare but tell stakeholders the possibility exists', score: 1 },
          { text: 'Reassure stakeholders the AI is accurate enough to use without additional oversight', score: 0 },
        ],
      },
    },
  },
  {
    id: 'b4', dimension: 'build',
    archetypes: ['Knowledge Worker', 'Analytical Professional', 'Operational Specialist'],
    variants: {
      default: {
        text: 'Your prototype works well but stakeholders are worried about data privacy. How do you address their concerns?',
        options: [
          { text: 'Review data handling architecture, apply anonymisation, get legal sign-off, document controls', score: 10 },
          { text: 'Confirm no personal data is stored by the AI tool and share the vendor\'s data policy', score: 3 },
          { text: 'Ask the vendor for privacy documentation and share it with concerned stakeholders', score: 1 },
          { text: 'Reassure stakeholders that major AI vendors have robust privacy controls in place', score: 0 },
        ],
      },
    },
  },
  {
    id: 'b5', dimension: 'build',
    archetypes: ['Creative Professional', 'Client & Relationship Professional', 'People & Team Leader'],
    variants: {
      default: {
        text: 'Your first AI prototype has known flaws but the stakeholder wants to deploy it immediately. What do you recommend?',
        options: [
          { text: 'Document known flaws, propose staged deployment with monitoring, set a fix timeline', score: 10 },
          { text: 'Fix the most critical flaw first, then deploy with clear caveats and a monitoring plan', score: 3 },
          { text: 'Deploy with a beta disclaimer and collect user feedback post-launch to prioritise fixes', score: 1 },
          { text: 'Deploy immediately to meet stakeholder expectations and address issues as they arise', score: 0 },
        ],
      },
    },
  },
  {
    id: 'b6', dimension: 'build',
    archetypes: ['Strategic Leader', 'Operational Specialist', 'Knowledge Worker'],
    variants: {
      default: {
        text: 'You\'ve built a working AI prototype. You\'re deciding whether to scale it organisation-wide or keep it as a pilot. What determines your decision?',
        options: [
          { text: 'Assess performance data, governance readiness, maintenance capacity, and risk factors', score: 10 },
          { text: 'Review pilot outcomes against defined success metrics before recommending expansion', score: 3 },
          { text: 'Scale if the pilot group reports positive feedback and the tool still works reliably', score: 1 },
          { text: 'Scale immediately if it works in the pilot to maximise value capture across the organisation', score: 0 },
        ],
      },
    },
  },
  {
    id: 'b7', dimension: 'build',
    archetypes: ['Analytical Professional', 'Knowledge Worker', 'Creative Professional'],
    variants: {
      default: {
        text: 'You\'ve inherited an AI tool built by someone who has left the organisation. It seems to work but has no documentation. How do you approach it?',
        options: [
          { text: 'Map inputs, outputs, and logic; test edge cases; document findings; establish review cadence', score: 10 },
          { text: 'Test the tool against known outputs, document findings, and flag gaps to your manager', score: 3 },
          { text: 'Continue using the tool as-is while monitoring for obvious errors in its outputs', score: 1 },
          { text: 'Disable the tool immediately until full documentation is produced and reviewed', score: 0 },
        ],
      },
    },
  },

  // ── GOVERNANCE (g1–g7) ───────────────────────────────────────────────────────
  {
    id: 'g1', dimension: 'governance',
    archetypes: ['Strategic Leader', 'People & Team Leader', 'Operational Specialist'],
    variants: {
      default: {
        text: 'A team member wants to use a public AI assistant to analyse confidential client data. What is the correct response?',
        options: [
          { text: 'Block the use, explain the policy, provide an approved alternative, document the incident', score: 10 },
          { text: 'Explain that confidential data can\'t go into public tools and redirect to an approved option', score: 3 },
          { text: 'Check with legal before deciding and allow limited use while awaiting formal guidance', score: 1 },
          { text: 'Allow it since the AI provider\'s terms say data is not retained after the session', score: 0 },
        ],
      },
    },
  },
  {
    id: 'g2', dimension: 'governance',
    archetypes: ['Knowledge Worker', 'Analytical Professional', 'Strategic Leader'],
    variants: {
      default: {
        text: 'What does "model drift" mean, and why does it matter professionally?',
        options: [
          { text: 'Model accuracy degrades over time as conditions change; requires systematic monitoring', score: 10 },
          { text: 'Models become less accurate as input patterns shift; periodic review is needed', score: 3 },
          { text: 'AI gets things wrong more often over time but the formal cause is unclear to me', score: 1 },
          { text: 'Model drift is a technical issue for developers and not relevant to professional users', score: 0 },
        ],
      },
    },
  },
  {
    id: 'g3', dimension: 'governance',
    archetypes: ['Strategic Leader', 'People & Team Leader', 'Operational Specialist'],
    variants: {
      default: {
        text: 'Your organisation has no formal AI policy. You are asked to draft the first version. What is the most effective immediate action?',
        options: [
          { text: 'Survey current AI use, benchmark peer policies, consult legal/compliance, draft with review', score: 10 },
          { text: 'Draft a policy covering data use, disclosure, and approved tools and circulate for feedback', score: 3 },
          { text: 'Adapt a publicly available AI policy template and submit to leadership for approval', score: 1 },
          { text: 'Write a brief memo listing which tools people can use and treat it as interim policy', score: 0 },
        ],
      },
    },
  },
  {
    id: 'g4', dimension: 'governance',
    archetypes: ['Operational Specialist', 'Client & Relationship Professional', 'People & Team Leader'],
    variants: {
      default: {
        text: 'An AI tool your team relies on produces an output you suspect is incorrect but cannot immediately verify. What do you do?',
        options: [
          { text: 'Flag the uncertainty, apply a fallback process, investigate the issue before reusing the tool', score: 10 },
          { text: 'Hold the output, apply manual verification, and document the incident for follow-up', score: 3 },
          { text: 'Add a caveat to the output noting it requires verification before action is taken', score: 1 },
          { text: 'Submit the output with no flag since you cannot confirm it is actually wrong', score: 0 },
        ],
      },
    },
  },
  {
    id: 'g5', dimension: 'governance',
    archetypes: ['Strategic Leader', 'Knowledge Worker', 'Analytical Professional'],
    variants: {
      default: {
        text: 'You\'re evaluating two AI vendors. One is cheaper but stores data in a jurisdiction with weaker privacy laws. How do you advise?',
        options: [
          { text: 'Advise against the cheaper vendor based on regulatory risk, client obligations, and exposure', score: 10 },
          { text: 'Recommend the compliant vendor and document the privacy risk ruling out the cheaper option', score: 3 },
          { text: 'Flag the privacy risk to leadership and let them make the final vendor decision', score: 1 },
          { text: 'Recommend the cheaper vendor since cost savings outweigh theoretical privacy concerns', score: 0 },
        ],
      },
    },
  },
  {
    id: 'g6', dimension: 'governance',
    archetypes: ['Creative Professional', 'Client & Relationship Professional', 'Operational Specialist'],
    variants: {
      default: {
        text: 'A client discovers you used AI to generate creative work they paid premium rates for and feels misled. How do you handle it?',
        options: [
          { text: 'Acknowledge transparently, explain your process and quality controls, offer to discuss', score: 10 },
          { text: 'Explain your AI use, how you reviewed and enhanced the output, and what value you added', score: 3 },
          { text: 'Apologise and commit to disclosing AI use upfront in all future client engagements', score: 1 },
          { text: 'Tell the client AI is a standard tool and the quality of the creative output speaks for itself', score: 0 },
        ],
      },
    },
  },
  {
    id: 'g7', dimension: 'governance',
    archetypes: ['Analytical Professional', 'Knowledge Worker', 'Strategic Leader'],
    variants: {
      default: {
        text: 'You\'re asked to set up monitoring for an AI system that has been deployed in production. What do you prioritise?',
        options: [
          { text: 'Monitor output quality, data drift, user feedback, error rates, and governance compliance', score: 10 },
          { text: 'Set up automated accuracy checks and a regular human review process for outputs', score: 3 },
          { text: 'Monitor error rate and user complaints; trigger a review if either spikes significantly', score: 1 },
          { text: 'Let the system run and respond to issues if and when stakeholders raise concerns', score: 0 },
        ],
      },
    },
  },
];

export const DIMENSIONS = ['awareness', 'prompting', 'workflow', 'build', 'governance'];

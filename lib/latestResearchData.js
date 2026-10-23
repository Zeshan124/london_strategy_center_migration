// ─────────────────────────────────────────────────────────────────────────────
// Latest Research articles.
//
// To add a new article, copy an existing object and paste it at the TOP of the
// array (the listing page shows articles in array order, newest first).
// Each article gets its own page at /latest-research/<slug>.
//
// Article body = `lead` + `sections`. Each section has an `id` (used for the
// "Contents" sidebar anchor), a `heading`, and a list of `blocks`:
//
//   { type: "paragraph", text: "..." }
//   { type: "quote", text: "..." }
//   { type: "steps", items: [{ term, def, eg }] }              // numbered ladder
//   { type: "cards", topLabel, bottomLabel, items: [{ title, text }] }
//   { type: "list", items: ["...", "..."] }                     // bullet points
//   { type: "table", columns: ["A", "B"], rows: [["a1", "b1"]] } // navy-header table
//
// In any text, write [^1] to show a superscript reference number (¹) that
// points to the matching entry in `references`.
// ─────────────────────────────────────────────────────────────────────────────

export const LATEST_RESEARCH = [
  {
    slug: "organisational-insight-to-strategic-impact",
    category: "Organisational Assessment",
    title: "From Organisational Insight to Strategic Impact",
    subtitle: "The role of tri12.ai.",
    excerpt:
      "How tri12.ai connects internal insights, industry trends, and strategic direction to turn organisational assessment into targeted action.",
    bannerImage: "/images/InnerPages/latest-research/tri12-ai.jpg",
    published: "October 2026",
    readTime: "3 minutes",

    author: {
      name: "LSC Team",
      role: "London Strategy Centre",
      image: "/images/icons/LSC-icon.svg",
    },

    highlights: [
      { label: "Focus Area", value: "Org Assessment" },
      { label: "Platform", value: "tri12.ai" },
      { label: "Author", value: "LSC Team" },
      { label: "Published", value: "Oct 2026" },
    ],

    lead: "Organisations operate in an increasingly complex environment where industry trends, workforce capabilities, and strategic priorities must remain aligned. Yet, understanding the gap between where an organisation is today and where it needs to be requires more than internal feedback or conventional benchmarking. It requires a structured, evidence-based approach. tri12.ai supports a more integrated approach to organisational assessment, bringing together three essential perspectives: internal insights, external developments, and strategic direction.",

    sections: [
      {
        id: "understanding",
        heading: "Understanding the Organisation",
        blocks: [
          {
            type: "paragraph",
            text: "Through employee interviews and the analysis of organisational experiences, leaders can gain a deeper understanding of workplace challenges, leadership capabilities, organisational culture, employee engagement, and areas for improvement. These insights help reveal issues that may not be visible through performance metrics alone.",
          },
        ],
      },
      {
        id: "industry-trends",
        heading: "Connecting Insights with Industry Trends",
        blocks: [
          {
            type: "paragraph",
            text: "Internal findings become more valuable when considered alongside external developments. Industry trends, emerging skills requirements, market changes, and best practices provide an important reference point for understanding the challenges and opportunities facing an organisation. This perspective helps leaders anticipate future requirements rather than simply respond to current problems.",
          },
        ],
      },
      {
        id: "strategy",
        heading: "Aligning Capabilities with Strategy",
        blocks: [
          {
            type: "paragraph",
            text: "The third perspective examines organisational strategy, priorities, and long-term objectives. By comparing strategic ambitions with current capabilities and external expectations, organisations can identify critical gaps, assess risks, and determine where intervention is most needed.",
          },
        ],
      },
      {
        id: "action",
        heading: "From Assessment to Action",
        blocks: [
          {
            type: "paragraph",
            text: "The value of an organisational needs assessment lies not only in identifying challenges but also in translating findings into meaningful action. By connecting these perspectives, tri12.ai can support a more informed approach to identifying priorities, strengthening organisational capabilities, and developing targeted improvement initiatives.",
          },
          {
            type: "paragraph",
            text: "The result is a clearer picture of organisational strengths, weaknesses, and opportunities, helping decision-makers focus resources where they can make the greatest difference.",
          },
        ],
      },
    ],

    conclusion: {
      label: "In Closing",
      text: "Ultimately, effective organisational assessment is not simply about understanding the present. It is about building the capabilities required for the future. By connecting people, industry intelligence, and strategic objectives, tri12.ai can help organisations turn insight into action and ambition into measurable progress.",
    },

    related: [
      { label: "Advisory Services", href: "/advisory-services" },
      { label: "Reframe Reads", href: "/reframe-reads" },
    ],

    cta: {
      label: "Organisational Assessment",
      text: "Explore how London Strategy Centre helps organisations turn insight into strategic action.",
      buttonText: "Contact LSC",
      href: "/contact",
    },
  },
  {
    slug: "leadership-acts-and-moments-of-engagement",
    category: "Leadership Development",
    title: "Leadership Acts and Moments of Engagement",
    subtitle: "Transforming competencies into leadership acts that implement strategy.",
    excerpt:
      "How leadership development can transform competencies into leadership acts that drive engagement and implement organisational strategy.",
    bannerImage: "/images/InnerPages/latest-research/banner.jpeg",
    published: "December 2022",
    readTime: "5 minutes",

    author: {
      name: "Lester Coupland",
      role: "London Strategy Centre",
      image: "/images/about/lester-coupland.jpg",
      bio: "Author of “Leadership Acts and Moments of Engagement,” exploring how leadership development can be designed to drive engagement and the implementation of organisational strategy.",
    },

    highlights: [
      { label: "Focus Area", value: "Leadership Dev" },
      { label: "Framework", value: "Leadership Acts" },
      { label: "Author", value: "Lester Coupland" },
      { label: "Published", value: "Dec 2022" },
    ],

    lead: "An act repeated becomes an activity, which becomes a practice and then an embedded cultural norm. Acts that are co-created and agreed, between a leader and their team, create moments of engagement. Designers of effective leadership programmes transform competencies into acts; ensuring that skill enhancement is directly related to leadership acts which implement the strategy.",

    sections: [
      {
        id: "engagement",
        heading: "Engagement and the delivery of value",
        blocks: [
          {
            type: "paragraph",
            text: "One of the key purposes of leadership development is to support the delivery of organisational strategy. And we know from the research of Andrew Kakabadse[^1] that engagement is critical if an organisation’s strategy is to be executed in a way that delivers value. We know too that the traditional formula of creating a strategy, aligning structures and processes together with ‘fixing’ leaders’ deficits through competency development is far less likely to deliver value. Time and time again Kakabadse’s research revealed that without engagement and alignment of view about the context of the strategy (and the strategy itself) the chances of delivering value are much reduced.",
          },
          {
            type: "quote",
            text: "Engagement is critical if an organisation’s strategy is to be executed in a way that delivers value.",
          },
          {
            type: "paragraph",
            text: "So leadership development programmes which are explicitly aimed at supporting the implementation of strategy should place a special emphasis on engagement; and in order to do this effectively, they should focus on leadership acts.",
          },
        ],
      },
      {
        id: "acts",
        heading: "From competencies to leadership acts",
        blocks: [
          {
            type: "paragraph",
            text: "Kim and Mauborgne[^2] suggest such a focus on leadership acts and activities, observing that “over many years a great deal of research has generated insights into the values, qualities, and behavioural styles that make for good leadership, and these have formed the basis of development programs and executive coaching. The implicit assumption is that changing values, qualities, and behavioural styles ultimately translate into high performance. But when people look back on these programs, many struggle to find evidence of notable change.”",
          },
          {
            type: "quote",
            text: "The implicit assumption is that changing values, qualities, and behavioural styles ultimately translate into high performance.",
          },
          {
            type: "paragraph",
            text: "When using this approach, however, there is a risk that designers of leadership programmes do not define acts and activities. What can then happen is that acts and activities become entangled with skills, qualities and attributes of leaders. So it is worthwhile getting clarity by defining these terms.",
          },
          {
            type: "paragraph",
            text: "One way to do this is proposed below. Acts and activities are extended by adding practices and cultural norms. In other words, an act repeated becomes an activity, which becomes a practice and then an embedded cultural norm.",
          },
        ],
      },
      {
        id: "ladder",
        heading: "From act to cultural norm",
        blocks: [
          {
            type: "steps",
            items: [
              {
                term: "Act",
                def: "A deed, something done with an end in mind.",
                eg: "Get a leader to facilitate a team meeting about the strategy to surface how team members view it.",
              },
              {
                term: "Activity",
                def: "An act done on a regular basis.",
                eg: "Having coffee together as a team twice a week where people can talk informally about their interpretation of the strategy.",
              },
              {
                term: "Practice",
                def: "An activity that starts to become an accepted part of how we do the work and we all buy into.",
                eg: "We rotate the preparation of the agenda and chairing of our team meetings, and support and challenge each other on how we are implementing the strategy.",
              },
              {
                term: "Cultural Norm",
                def: "A practice that is now embedded as the way we do things — i.e. our culture.",
                eg: "We all talk about the strategy day to day as a natural way of behaving and doing business.",
              },
            ],
          },
        ],
      },
      {
        id: "competencies",
        heading: "Transforming competencies into acts",
        blocks: [
          {
            type: "paragraph",
            text: "The sponsor of such a leadership programme may request that the content is built around the organisation’s competency framework. This is the moment to transform these competencies into acts.",
          },
          {
            type: "cards",
            topLabel: "Competency",
            bottomLabel: "Leadership Act",
            items: [
              {
                title: "Team working",
                text: "Hold a knowledge-sharing meeting, or organise a social event for the team.",
              },
              {
                title: "Motivation",
                text: "Inquire and seek others’ views about the strategy at the next meeting.",
              },
              {
                title: "Collaboration",
                text: "Identify an opportunity to work with another department, or invite a member of the Executive Team to explain the strategy.",
              },
              {
                title: "Managing conflict",
                text: "Co-create a solution for the next complex challenge facing the team.",
              },
            ],
          },
        ],
      },
      {
        id: "cocreation",
        heading: "Co-creating the acts",
        blocks: [
          {
            type: "paragraph",
            text: "These acts would not be pre-conceived by the programme sponsor; this would defeat the object. In fact the idea is that they should emerge as an outcome from the leadership programme. Kim and Mauborgne suggest a process whereby the leader and their team co-create an as-is and to-be canvas which, through a constructive exchange, charts and ranks these acts. So the acts are agreed between the leader and their team; and through doing this they create moments of engagement.",
          },
          {
            type: "quote",
            text: "The acts are agreed between the leader and their team; and through doing this they create moments of engagement.",
          },
        ],
      },
      {
        id: "preparing",
        heading: "Preparing leaders to engage",
        blocks: [
          {
            type: "paragraph",
            text: "We suggest that an element of the leadership programme is dedicated to preparing the leaders to engage with their teams in this way — for example, how the leader might facilitate such a discussion, the importance of a growth mind-set, and how they might manage adverse reactions from team members. So the skills enhancement is directly related to a leadership act which is implementing the strategy.",
          },
        ],
      },
    ],

    conclusion: {
      label: "In Closing",
      text: "If designers of leadership programmes can instil a disciplined approach in this way, the leadership acts that happen will be directly related to implementing the organisation’s strategy. And this is one of the essential purposes of leadership development.",
    },

    references: [
      "Kakabadse, Andrew (2015), The Success Formula. London and New York: Bloomsbury.",
      "Kim, W. Chan, and Mauborgne, Renée (2014), “Blue Ocean Leadership,” Harvard Business Review, May (Accessed 03.09.20).",
    ],

    related: [
      { label: "Advisory Services", href: "/advisory-services" },
      { label: "Reframe Reads", href: "/reframe-reads" },
    ],

    cta: {
      label: "Leadership Development",
      text: "Explore how London Strategy Centre designs leadership programmes that turn strategy into action.",
      buttonText: "Contact LSC",
      href: "/contact",
    },
  },
  {
    slug: "emotionally-intelligent-leadership-being-or-performing",
    category: "Leadership Development",
    title: "Emotional Intelligent Leadership",
    subtitle: "Being it or performing it?",
    excerpt:
      "Do leaders embody emotional intelligence, or perform it? Two patterns LSC sees in its leadership development and coaching work.",
    bannerImage: "/images/InnerPages/latest-research/emotional-intelligence.jpg",
    published: "August 2025",
    readTime: "2 minutes",

    author: {
      name: "Lester Coupland",
      role: "London Strategy Centre",
      image: "/images/about/lester-coupland.jpg",
    },

    highlights: [
      { label: "Focus Area", value: "Emotional Intelligence" },
      { label: "Framework", value: "Being vs Performing" },
      { label: "Author", value: "Lester Coupland" },
      { label: "Published", value: "Aug 2025" },
    ],

    lead: "The late Maya Angelou once said, “I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",

    sections: [
      {
        id: "why-ei",
        heading: "Why emotional intelligence matters",
        blocks: [
          {
            type: "paragraph",
            text: "Leaders who are serious about developing themselves will have considered Daniel Goleman’s research and statistics on Emotional Intelligence (EI). For example, that EI accounts for around 90% of the difference between good and great leaders.",
          },
          {
            type: "paragraph",
            text: "In our own leadership development and coaching work here at LSC, we have noticed a pattern in leaders’ approach to EI.",
          },
        ],
      },
      {
        id: "being-or-performing",
        heading: "Being or performing",
        blocks: [
          {
            type: "paragraph",
            text: "We will categories this pattern into two broad types which we will call ‘being’ and ‘performing.’",
          },
          {
            type: "steps",
            items: [
              {
                term: "Being emotionally intelligent",
                def: "For these leaders, they aspire to ‘be’ emotionally intelligent and embody EI in a way that is authentic and natural. They stay true to themselves and don’t ‘do’ EI in order to impress. They embrace self-awareness, self-regulation, social awareness (empathy) and relationship management.",
              },
              {
                term: "Performing emotional intelligence",
                def: "For these leaders, EI appears more procedural and mechanistic; a process that can be ‘done’ to other people by using the right words and phrases. So they might outwardly logically manifest the elements of EI, but not consistently; and, not in a way that is experienced by others as being heartfelt and genuine.",
              },
            ],
          },
        ],
      },
    ],

    conclusion: {
      label: "Our Approach",
      text: "Here at LSC, our approach to developing great leaders is evidence-based and issue-driven. Our mission is to support you in your growth and tailor a program or an individual coaching pathway to help you blossom into the best emotionally intelligent leader you can be.",
    },

    related: [
      { label: "Advisory Services", href: "/advisory-services" },
      { label: "Reframe Reads", href: "/reframe-reads" },
    ],

    cta: {
      label: "Leadership Coaching",
      text: "Explore how London Strategy Centre tailors leadership programmes and coaching pathways.",
      buttonText: "Contact LSC",
      href: "/contact",
    },
  },
  {
    slug: "leadership-maturity",
    category: "Leadership Development",
    title: "Leadership Maturity",
    excerpt:
      "Lengthening the gap between impulse and action: why mature leaders pause, reflect, and separate true urgency from their own urge to act fast.",
    bannerImage: "/images/InnerPages/latest-research/leadership-maturity.jpg",
    published: "August 2025",
    readTime: "4 minutes",

    author: {
      name: "Lester Coupland",
      role: "London Strategy Centre",
      image: "/images/about/lester-coupland.jpg",
    },

    highlights: [
      { label: "Focus Area", value: "Leadership Maturity" },
      { label: "Theme", value: "Impulse vs Action" },
      { label: "Author", value: "Lester Coupland" },
      { label: "Published", value: "Aug 2025" },
    ],

    sections: [
      {
        id: "maturity",
        heading: "What is maturity?",
        blocks: [
          {
            type: "paragraph",
            text: "According to Daniel Goleman, a key aspect of maturity is the ability to lengthen the gap between impulse and action. This means that instead of immediately reacting to a feeling or urge, a more mature person can pause, consider the situation, and choose a more thoughtful response.",
          },
          {
            type: "paragraph",
            text: "Goleman's concept connects to his research on emotional intelligence, where self-awareness and self-management are crucial for recognising impulses and regulating them effectively.",
          },
        ],
      },
      {
        id: "reality",
        heading: "What is reality?",
        blocks: [
          {
            type: "paragraph",
            text: "Some leaders have a deeply-rooted instinct to act fast. This may be accentuated by an innate ‘’hurry-up driver’’ relating to parental messaging from early childhood whereby ‘’getting a move on’’ was conveyed as the best (and maybe only) problem-solving option.",
          },
          {
            type: "paragraph",
            text: "Let’s be clear. It’s not that this is wrong. On occasions we all need to move quickly, decide fast and be agile; the circumstances will determine this and realistically we may have no option.",
          },
          {
            type: "paragraph",
            text: "A very smart senior leader whom I was coaching said to me recently (referring to the company where he worked) ‘’we’re all running at the moment.’’ I knew what he meant and I believed him.",
          },
        ],
      },
      {
        id: "risk",
        heading: "What is the risk?",
        blocks: [
          {
            type: "paragraph",
            text: "Here at LSC, we have learned through working globally with thousands of leaders that some seem to be permanently ‘caught’ in this way of being. For these leaders, everything has to be decided this very moment; they believe acting quickly and being decisive is what leaders must do; slowing down and reflecting are not attributes which belong to this leadership paradigm.",
          },
        ],
      },
      {
        id: "solution",
        heading: "What is the solution?",
        blocks: [
          {
            type: "paragraph",
            text: "In the recent past, a new member of the team which I was leading was giving cause for concern. His performance was below standard. He had clearly not endeared himself to his peers and he was struggling to adapt to the norms and practices of the organisation sought feedback from his immediate supervisor and three trusted team members and the conclusion from all was ‘fire him.’ I pointed out that there were other options available to us and. if we did fire him, we would rapidly have to find and hire a replacement, a process which would take several weeks and leave the team very stretched. I asked his supervisor to change the team member’s role, assigned a colleague who could coach him closely and asked two colleagues to monitor the team member’s performance and get feedback from the customers. It worked a treat and we were able to retain the team member who grew in competence and confidence. We had avoided the impulse to fire him by reflecting on the implications and finding another way forward which ultimately proved successful.",
          },
        ],
      },
      {
        id: "lessons",
        heading: "What are the lessons for leaders?",
        blocks: [
          {
            type: "list",
            items: [
              "Separate the true level of urgency of a situation from your own feelings, impulses and urges",
              "Think carefully and systematically about the possible implications of a course of action if you’re minded to act fast",
              "Beware group-think if there is a group impulse to act fast and encourage those involved to consider options and potential consequences",
            ],
          },
        ],
      },
    ],

    related: [
      { label: "Advisory Services", href: "/advisory-services" },
      { label: "Reframe Reads", href: "/reframe-reads" },
    ],

    cta: {
      label: "Leadership Coaching",
      text: "Explore how London Strategy Centre tailors leadership programmes and coaching pathways.",
      buttonText: "Contact LSC",
      href: "/contact",
    },
  },
  {
    slug: "leadership-development-and-the-roi-ritual",
    category: "Leadership Development",
    title: "Leadership Development and the ROI RItual",
    excerpt:
      "Two integrated approaches, the AAPC Framework and DAC, that show what leadership work a development programme actually produces and what purpose it serves.",
    bannerImage: "/images/InnerPages/latest-research/leadership-roi-ritual.jpg",
    published: "July 2025",
    readTime: "4 minutes",

    author: {
      name: "Lester Coupland",
      role: "London Strategy Centre",
      image: "/images/about/lester-coupland.jpg",
    },

    highlights: [
      { label: "Focus Area", value: "Leadership Dev" },
      { label: "Frameworks", value: "AAPC & DAC" },
      { label: "Author", value: "Lester Coupland" },
      { label: "Published", value: "Jul 2025" },
    ],

    sections: [
      {
        id: "roi",
        heading: "The ROI ritual",
        blocks: [
          {
            type: "paragraph",
            text: "According to HBR[^1] every year global organisations invest more than $60 billion in leadership development programs.",
          },
          {
            type: "paragraph",
            text: "Sponsors of such programs normally go through the ritual of questioning the ROI and probably have to be content with an answer that secures the internal resources even if the answer is less than convincing.",
          },
          {
            type: "paragraph",
            text: "Here at LSC in our own leadership development work with clients, we have found two approaches which help in this quest to evaluate impact.",
          },
        ],
      },
      {
        id: "aapc",
        heading: "The first approach: the AAPC Framework",
        blocks: [
          {
            type: "paragraph",
            text: "The first approach is to focus more on leadership acts rather than on behaviors. When repeated, the acts become activities and, over time, the latter can become practices and eventually embedded cultural norms.",
          },
          {
            type: "paragraph",
            text: "Naturally the behaviors are important, but they are the skillful enablers of the acts rather than an end in themselves.",
          },
          {
            type: "paragraph",
            text: "These are our suggested definitions for the AAPC Framework:",
          },
          {
            type: "steps",
            items: [
              {
                term: "Act",
                def: "A deed, something done with an end in mind (e.g. get a leader to facilitate a team meeting about the strategy to surface how team members view it).",
              },
              {
                term: "Activity",
                def: "An act done on a regular basis (e.g. having coffee together as a team twice a week where people can talk informally about their interpretation of the strategy).",
              },
              {
                term: "Practice",
                def: "An activity that starts to become an accepted part of how we do the work and we all buy into (e.g. we rotate the preparation of the agenda and chairing of our team meetings and support and challenge each other on how we are implementing the strategy).",
              },
              {
                term: "Cultural Norm",
                def: "A practice that is now embedded as the way we do things, i.e. our culture (e.g. we all talk about the strategy day to day as a natural way of behaving and doing business).",
              },
            ],
          },
        ],
      },
      {
        id: "dac",
        heading: "The second approach: direction, alignment and commitment",
        blocks: [
          {
            type: "paragraph",
            text: "Our second approach is derived from the research of Drath et al[^2]. In their research, they discovered that most ‘acts’ of leadership can be codified into 3 areas, namely direction, alignment and commitment (DAC). In our own leadership development work with clients, we have tested this hypothesis many times. And, we have consistently found that around 90% of leadership acts fall under one of these DAC domains.",
          },
          {
            type: "paragraph",
            text: "So, our insight has been to use the AAPC Framework and codify each leadership act within DAC. Some illustrations are given below:",
          },
          {
            type: "table",
            columns: ["Leadership Act", "DAC"],
            rows: [
              ["Present the divisional strategy to the team", "Direction"],
              ["Initiate a role clarification process", "Alignment"],
              ["Organize a team social event", "Commitment"],
            ],
          },
          {
            type: "paragraph",
            text: "This process can help us ascertain how and where we as leaders are investing our time and energy. Are we overly focused on one of these domains? Are we neglecting one of them? What are the implications?",
          },
          {
            type: "paragraph",
            text: "Our experience tells us that most leaders won’t be totally comfortable across all three domains; but as a leadership team, we are better placed to get good coverage right across the board.",
          },
        ],
      },
    ],

    conclusion: {
      label: "In Summary",
      text: "In summary, these two integrated approaches can show us what leadership work is actually being done as a result of our development program (AAPC) and what organizational purpose is being served (DAC).",
    },

    references: [
      "‘What Makes Leadership Development Programs Succeed?’ By Ayse Yemiscigil, Dana Born, Horace Ling in Harvard Business Review, February 28, 2023.",
      "‘Direction, alignment, commitment: Toward a more integrative ontology of leadership.’ By Wilfred G. Drath et al. in The Leadership Quarterly (Elsevier)",
    ],

    related: [
      { label: "Advisory Services", href: "/advisory-services" },
      { label: "Reframe Reads", href: "/reframe-reads" },
    ],

    cta: {
      label: "Leadership Development",
      text: "Explore how London Strategy Centre designs leadership programmes that turn strategy into action.",
      buttonText: "Contact LSC",
      href: "/contact",
    },
  },
];

export function getResearchBySlug(slug) {
  return LATEST_RESEARCH.find((article) => article.slug === slug) ?? null;
}

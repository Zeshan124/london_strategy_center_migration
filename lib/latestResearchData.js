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
//
// In any text, write [^1] to show a superscript reference number (¹) that
// points to the matching entry in `references`.
// ─────────────────────────────────────────────────────────────────────────────

export const LATEST_RESEARCH = [
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
];

export function getResearchBySlug(slug) {
  return LATEST_RESEARCH.find((article) => article.slug === slug) ?? null;
}

'use client';

export function generateStaticParams() {
  return [];
}

export const dynamic = 'force-static';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Bookmark, Download, Printer, Mail, Facebook, Twitter, Linkedin, Instagram, Link2Icon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';
import FeaturedCampaignsSection from '@/components/blog/FeaturedCampaignsSection';

const blogPosts = {
  'leading-in-the-age-of-agentic-ai': {
    id: 1,
    slug: 'leading-in-the-age-of-agentic-ai',
    category: 'LEADERSHIP',
    date: '22nd May, 2026',
    title: 'Leading in the Age of Agentic AI: Why AI demands Leadership Elasticity',
    author: {
      name: 'LSC Team',
      role: 'Edited and repurposed by',
      company: 'London Strategy Centre',
      image: '/images/icons/LSC-logo.svg'
    },
    readTime: '7 min read',
    image: '/images/InnerPages/reframe-reads/Imran-yaqzan-banner.jpeg',
    sections: [
      {
        heading: 'We are living in one of the most transformative periods in human history.',
        content: `Technologies like agentic AI and digital twins are not just reshaping industries — they are redefining leadership itself.\n\nAnd yet, amid all this innovation, one emotion continues to dominate boardrooms: uncertainty.`
      },
      {
        heading: 'The Leadership Paradox: Expected to Lead Without a Map',
        content: `Leaders today are facing a unique paradox. They are expected to provide direction, make high-stakes decisions, and deliver outcomes — but in a world where the rules are constantly changing. Even the most seasoned leaders admit they can't predict what's going to happen.\n\nThis is not a failure of leadership — it's a reflection of the environment.\n\nThe traditional leadership model — linear thinking, structured planning, predictable scenarios — is no longer enough.`
      },
      {
        heading: 'Time calls for Leadership Elasticity',
        content: `The leaders who will thrive are not the ones with all the answers, but those who can:`,
        bulletPoints: [
          'Adapt in real time',
          'Operate in ambiguity',
          'Make decisions despite incomplete information'
        ]
      },
      {
        heading: null,
        content: `This is what we call leadership elasticity — the ability to stretch, respond, and evolve under pressure.`
      },
      {
        heading: 'From Information Overload to Clarity',
        content: `Today's organisations are drowning in data. Leaders are handed layers of information they must untangle before making decisions. This overload fuels hesitation and fear:\n\nWhat if the decision is wrong? What if the outcome is unclear? What if we move too early or too late?\n\nThis is where AI becomes transformational — not as a replacement, but as an amplifier. At its best, AI:`,
        bulletPoints: [
          'Filters complexity',
          'Surfaces clarity',
          'Enables faster, better decisions'
        ]
      },
      {
        heading: null,
        content: `It doesn't replace leadership — it frees leaders to lead.`
      },
      {
        heading: 'Agentic AI: Threat or Opportunity?',
        content: `One of the biggest fears surrounding AI is job loss and economic disruption. But history tells a different story.\n\nIn just 100 years, the global population grew from 2 billion to over 8 billion — and yet we created jobs, built economies, and expanded industries. AI is no different.\n\nYes, it will disrupt jobs. But it will also:`,
        bulletPoints: [
          'Increase productivity',
          'Create new opportunities',
          'Unlock problems we couldn\'t previously solve'
        ]
      },
      {
        heading: null,
        content: `The real shift is not job loss — it's job transformation.`
      },
      {
        heading: 'The Missing Piece: Ethics, Values, and Boundaries',
        content: `Amid all the excitement around agentic AI, one critical gap remains: the foundation is incomplete without ethics.\n\nAI agents are becoming more autonomous. But autonomy without boundaries is risk. Leaders must ensure:`,
        bulletPoints: [
          'Clear ethical frameworks',
          'Defined operational boundaries',
          'Alignment with societal and organisational values'
        ]
      },
      {
        heading: null,
        content: `Because ultimately: technology reflects the values of those who build it.\n\nThis is where leadership becomes not just strategic — but moral.`
      },
      {
        heading: 'Digital Twins: A Glimpse Into the Future',
        content: `Imagine an AI that understands you better than you understand yourself — knows your context, industry, and goals, and coaches you in real time.\n\nThis is already happening. Through digital twins, organisations are automating coaching and mentoring, scaling personalised development, and enhancing decision-making at speed.\n\nIn one example, thousands of participants in a startup ecosystem are guided by AI-driven avatars that analyse their profiles, understand market conditions, and build real-time business plans.\n\nThis isn't science fiction — it's the new operating model.`
      },
      {
        heading: 'The Shift: From Transactions to Value Ecosystems',
        content: `Another major transformation is in how organisations operate.\n\nThe Old Model: Transactional, cost-driven, proposal-based.\n\nThe New Model: Partnership-driven, impact-focused, value ecosystem-oriented.\n\nOrganisations are no longer buying services — they are co-creating outcomes.`
      },
      {
        heading: 'So, What Should Leaders Do Next?',
        content: `There is no universal formula. Every organisation is different. But three powerful starting points emerge:`,
        bulletPoints: [
          'Define the Problems That Truly Matter — Don\'t chase technology. Focus on the challenges worth solving.',
          'Build Digital Readiness — AI is only as effective as the environment it operates in. Your systems, data, and culture must be ready.',
          'Establish Strong Governance — This is the hardest and most important step: ethical alignment, regulatory compliance, and responsible deployment. Without governance, innovation becomes risk.'
        ]
      },
      {
        heading: 'The Future Is Not About AI — It\'s About Leadership',
        content: `Agentic AI will continue to evolve. Digital twins will become more powerful. Automation will accelerate. But the real differentiator will not be technology — it will be leaders who can navigate uncertainty, act with clarity, and lead with values.\n\nBecause in a world driven by intelligent machines… the most valuable trait will still be human judgement.`
      }
    ],
    relatedPosts: [
      { id: 12, slug: 'the-real-global-ai-race', title: 'The Real Global AI Race Is About Diffusion Without Losing Trust', image: '/images/InnerPages/reframe-reads/Imran-&-Yaqzan-Thumbnail-V1.jpeg' },
    ]
  },
  'the-real-global-ai-race': {
    id: 2,
    slug: 'the-real-global-ai-race',
    category: 'AI · EDUCATION · BUSINESS',
    date: '5TH MARCH, 2026',
    title: 'The Real Global AI Race Is About Diffusion Without Losing Trust',
    author: {
      name: 'LSC Team',
      role: 'Edited and repurposed by',
      company: 'London Strategy Centre',
      image: '/images/icons/LSC-logo.svg'
    },
    readTime: '5 min read',
    image: '/images/InnerPages/reframe-reads/Kamran-Kardan-Thumbnail.jpeg',
    sections: [
      {
        heading: null,
        content: `AI race narratives focus on invention: whoever creates the general-purpose technology wins. But a competing view (often associated with Prof. Geoffrey Ding) is more practical: power comes from diffusion — how quickly a country embeds AI into institutions, education, and the economy.\n\nFrom that lens, the Gulf isn't just adopting AI. It's scaling it.\n\nAnd that's where the real tension begins.`
      },
      {
        heading: 'Diffusion Is Advantage. Diffusion Without Governance Is Danger.',
        content: `As AI spreads through academia and publishing, we're seeing a sharp rise in:`,
        bulletPoints: [
          'AI-generated manuscripts',
          'Plagiarism and "paper mill" style submissions',
          'Re-submissions and retractions',
          'Weak detection tools that can\'t keep pace'
        ]
      },
      {
        heading: null,
        content: `The risk isn't just cheating. It's research legitimacy collapse — a world where trust in published work erodes because volume outpaces verification.\n\nThe core problem: we're optimising output, not integrity.\n\nTrying to "detect everything" won't solve it. The fix has to be layered.`
      },
      {
        heading: '1) Build AI With Constraints',
        content: `Not every academic tool should be a "write my paper" machine. The most responsible systems support:`,
        bulletPoints: [
          'Research discovery',
          'Source-grounded summaries',
          'Guided literature reviews',
          'Traceable references'
        ]
      },
      {
        heading: null,
        content: `Support research — without replacing authorship.`
      },
      {
        heading: '2) Make AI Literacy Non-Negotiable',
        content: `AI literacy isn't "how to use ChatGPT." It's:`,
        bulletPoints: [
          'Knowing what models get wrong',
          'Recognising hallucinations and hidden plagiarism',
          'Understanding acceptable vs. unacceptable use',
          'Learning disclosure norms ("How did you use AI?")'
        ]
      },
      {
        heading: null,
        content: `Adoption is racing ahead of governance. That gap is where crises form.`
      },
      {
        heading: '3) Redesign Assessment',
        content: `Banning AI is not a strategy. It just drives usage underground. Better approaches include:`,
        bulletPoints: [
          'Requiring students to explain where/how AI was used',
          'Oral defence to test real understanding',
          'Assessment formats that reward reasoning, not presentation'
        ]
      },
      {
        heading: null,
        content: `We can't "tech" our way out of a culture problem with more tech alone.`
      },
      {
        heading: 'Education has a second crisis: attention.',
        content: `Even before AI, education struggled with memorisation-heavy models. Now add:`,
        bulletPoints: [
          'Infinite scroll',
          'Shortened attention spans',
          'Low tolerance for passive learning'
        ]
      },
      {
        heading: null,
        content: `If students can generate answers instantly, the value shifts to what AI cannot reliably supply: judgement, critical thinking, ethics, communication, and self-control.\n\nAI makes "knowing" cheap. It makes "thinking" priceless.`
      },
      {
        heading: 'The Real Race Is Trust',
        content: `If diffusion is the advantage, governance is the guardrail. The winners will be those who scale AI while protecting:`,
        bulletPoints: [
          'Traceability',
          'Integrity',
          'Human accountability',
          'Public trust in knowledge'
        ]
      },
      {
        heading: null,
        content: `Because if we scale AI and lose trust in research, we don't get progress — we get noise.\n\nNo one has all the answers. We are all learning.\n\nBut learning is not passive. It's design.\n\nThe real question is: Will we design systems that make society smarter — or simply make output easier?`
      }
    ],
    relatedPosts: [
      { id: 11, slug: 'leading-in-the-age-of-agentic-ai', title: 'Leading in the Age of Agentic AI: Why AI demands Leadership Elasticity', image: '/images/InnerPages/reframe-reads/Imran-&-Yaqzan-Thumbnail-V1.jpeg' }
    ]
  },
  'women-in-leadership-and-ai': {
    id: 3,
    slug: 'women-in-leadership-and-ai',
    category: 'LEADERSHIP · AI',
    date: '4TH FEBRUARY, 2026',
    title: 'Women in Leadership and Women in AI: What Are We Still Getting Wrong?',
    author: {
      name: 'LSC Team',
      role: 'Edited and repurposed by',
      company: 'London Strategy Centre',
      image: '/images/icons/LSC-logo.svg'
    },
    readTime: '5 min read',
    image: '/images/InnerPages/reframe-reads/blog-1.jpg',
    sections: [
      {
        heading: null,
        content: `Despite decades of progress, women remain significantly underrepresented in leadership, especially in technology and artificial intelligence. The problem isn't women's ability. It's the system around them: cultural expectations, bias in decision-making, unequal domestic responsibilities, and structures of work that were never designed for equality.`
      },
      {
        heading: 'The Reality of Representation',
        content: `Women are present in the pipeline, but missing at the top. Across major markets, women still hold a small share of top leadership roles:`,
        bulletPoints: [
          'In the UK, women make up only a small number of CEOs within major listed companies.',
          'Globally, women lead a minority of AI companies.',
          'Women founders receive a disproportionately low share of venture capital funding with even lower levels in some regions.'
        ]
      },
      {
        heading: null,
        content: `And yet women frequently outperform men academically and represent a significant portion of university cohorts. The contradiction is clear.`
      },
      {
        heading: 'The Hidden Barrier: The Double Shift',
        content: `One of the most overlooked drivers of the leadership gap is what happens outside the workplace. Women often carry the "double shift":`,
        bulletPoints: [
          'Paid work',
          'Unpaid work at home: caregiving, household tasks, planning, and the mental load of family life'
        ]
      },
      {
        heading: null,
        content: `Many women begin their workday already depleted, having managed a full morning of responsibilities before professional life even starts. This unequal distribution of time and energy becomes a structural barrier to progression, especially into roles that demand long hours, travel, high visibility, or constant availability.`
      },
      {
        heading: 'Are We Forcing Women Into a Model Built for Men?',
        content: `In many countries, dual-income households are not a lifestyle choice — they're a financial necessity. Yet childcare is often unaffordable, and many workplaces remain resistant to flexibility.\n\nThe deeper issue: traditional work models assume someone else is handling life at home.\n\nIf leadership requires 24/7 sacrifice, then leadership remains easiest for those who are least burdened by domestic responsibilities.`
      },
      {
        heading: 'Leadership and the "Sacrifice Culture"',
        content: `A recurring belief in business is that top leadership requires total sacrifice — sleep, relationships, balance, and sometimes health.\n\nBut it raises a critical question: Does burnout create better leaders and stronger organisations — or just louder ones?\n\nA growing body of thinking suggests the future of leadership isn't about endless sacrifice, but about clear values, emotional steadiness, and sustainable performance.`
      },
      {
        heading: 'Emotional Intelligence Is Becoming a Leadership Advantage',
        content: `As AI automates tasks and accelerates productivity, the most valuable human skills are shifting toward:`,
        bulletPoints: [
          'Relationship building',
          'Collaboration',
          'Empathy and communication',
          'Judgment and decision-making',
          'Emotional intelligence'
        ]
      },
      {
        heading: null,
        content: `These qualities are often labelled "feminine," and women are frequently socialised to build them early. But these skills are not exclusive to women — they are leadership skills that must be cultivated in everyone.\n\nThe future of work will reward leaders who can connect, not just control.`
      },
      {
        heading: 'AI Bias: Technology Reflects Society',
        content: `AI is only as fair as the data and teams that create it. If women are underrepresented in building AI systems, then AI risks embedding existing societal stereotypes into:`,
        bulletPoints: [
          'Recruitment systems',
          'Promotion decisions',
          'Performance evaluation tools',
          'Content and search algorithms',
          'Leadership "recommendation" patterns'
        ]
      },
      {
        heading: null,
        content: `AI can reduce human bias in areas like recruitment — but only if it is designed with diversity, accountability, and oversight. Otherwise, it simply automates inequality.`
      },
      {
        heading: 'Why Women Don\'t Enter AI and STEM in Equal Numbers',
        content: `It's not about intelligence or potential. It's often about:`,
        bulletPoints: [
          'Role models (or the lack of them)',
          'Early stereotypes about "who belongs"',
          'Cultural messaging around femininity and technical work',
          'Environments that make women feel unwelcome'
        ]
      },
      {
        heading: null,
        content: `If young girls rarely see people like them in STEM roles, the subconscious message becomes: that's not for you.`
      },
      {
        heading: 'The Real Drop-Off Happens During Career Progression',
        content: `Even when women enter STEM and higher education in large numbers, representation decreases at every level up the hierarchy. Why? Because career progression often peaks at the same life stage when women face:`,
        bulletPoints: [
          'Pregnancy and early childcare years',
          'Increased domestic load',
          'Reduced time for networking, research output, or visibility',
          'Organisational cultures that reward overwork'
        ]
      },
      {
        heading: null,
        content: `This is not a motivation gap. It's a structural time-and-support gap.`
      },
      {
        heading: 'Entrepreneurship Isn\'t "Plan B" — It\'s Redesigning Work',
        content: `Many women create businesses that fit around family life and other responsibilities. This is not a lack of ambition. It is often a rational response to rigid systems — and proof that women are building new models of leadership that prioritise:`,
        bulletPoints: [
          'Autonomy',
          'Flexibility',
          'Well-being',
          'Purpose-driven work',
          'Sustainable growth'
        ]
      },
      {
        heading: null,
        content: `The mistake is measuring leadership only through corporate titles, rather than influence, value creation, and impact.`
      },
      {
        heading: 'Funding: The Barrier of the "All Boys Network"',
        content: `A major obstacle remains access to capital. Many investment ecosystems still operate through informal networks, pattern matching, and biased perceptions of risk. When the majority of decision-makers share similar backgrounds, founders who look different face a steeper climb regardless of idea quality.\n\nThe solution isn't "fund women regardless." The solution is remove bias so quality is judged fairly.`
      },
      {
        heading: 'Equal Parenting: The Foundation of Change',
        content: `If there is one lever that impacts everything — leadership, progression, participation in STEM, entrepreneurship, and well-being — it is equal parenting and equal domestic responsibility.\n\nWithout it, women will continue to operate with less time, less energy, and more constraints — and no amount of confidence training will compensate for that.`
      },
      {
        heading: 'What Effective Digital Leadership Support Should Do',
        content: `The most effective leadership development for women should not require women to "become more like men." Instead, it should:`,
        bulletPoints: [
          'Challenge stereotypes about leadership',
          'Build confidence based on existing strengths',
          'Equip women to lead through digital and AI disruption',
          'Support strategic influence, negotiation, decision-making, and change leadership',
          'Help women navigate bias without losing identity'
        ]
      },
      {
        heading: 'The Real Goal',
        content: `The real goal is not to fix women. It is to modernise leadership.`
      }
    ],
    relatedPosts: [
      { id: 12, slug: 'the-real-global-ai-race', title: 'The Real Global AI Race Is About Diffusion Without Losing Trust', image: '/images/InnerPages/reframe-reads/Kamran-Kardan-Thumbnail.jpeg' },
      { id: 11, slug: 'leading-in-the-age-of-agentic-ai', title: 'Leading in the Age of Agentic AI: Why AI demands Leadership Elasticity', image: '/images/InnerPages/reframe-reads/Imran-&-Yaqzan-Thumbnail-V1.jpeg' }
    ]
  },
  'techno-feudalism': {
    id: 4,
    slug: 'techno-feudalism',
    category: 'TECHNOLOGY · BUSINESS',
    date: '13TH JANUARY, 2026',
    title: 'AI Hard Talk: From Hype to Real-World Impact',
    author: {
      name: 'LSC Team',
      role: 'Edited and repurposed by',
      company: 'London Strategy Centre',
      image: '/images/icons/LSC-logo.svg'
    },
    readTime: '6 min read',
    image: '/images/InnerPages/reframe-reads/blog-2.jpg',
    sections: [
      {
        heading: 'Techno-Feudalism, AI, and the SME Dilemma',
        content: `A handful of companies now control the digital roads that billions of businesses and people must use every day. They do not merely sell technology — they determine access, scale, and survival.\n\nThis shift has a name. Popularised by Yanis Varoufakis, techno-feudalism describes a world where economic power no longer sits with markets alone, but with the owners of digital infrastructure, platforms, and data. Nowhere is this tension more visible than among SMEs navigating AI and cloud dependency.\n\nSMEs can build faster than ever — but often on land they do not own.`
      },
      {
        heading: 'The Great Power Shift: From Markets to Platforms',
        content: `Traditional capitalism rewarded ownership of factories, assets, and labour. Today's economy rewards ownership of platforms. Big tech firms such as Amazon, Google, and Microsoft dominate:`,
        bulletPoints: [
          'Cloud infrastructure',
          'Advanced AI capabilities',
          'Population-scale datasets'
        ]
      },
      {
        heading: null,
        content: `SMEs can innovate rapidly, but dependency grows quickly. Freedom exists — until a ceiling is reached.`
      },
      {
        heading: 'SMEs: Empowered and Exposed',
        content: `The Upside: Cloud and AI have lowered barriers once reserved for large enterprises.`,
        bulletPoints: [
          'Prototype in weeks, not years',
          'Build data-driven business models',
          'Plug into global logistics, aviation, retail, and infrastructure ecosystems'
        ]
      },
      {
        heading: null,
        content: `The Downside: The risks are structural, not accidental.`,
        bulletPoints: [
          'Platforms control data; SMEs do not',
          'Success can trigger imitation, acquisition, or talent loss',
          'AI often stalls at experimentation, never reaching operations'
        ]
      },
      {
        heading: 'AI Isn\'t Magic',
        content: `AI is powerful — and frequently misunderstood. The fastest failures come from treating AI as plug-and-play: "Let's just add a chatbot."\n\nReal value emerges when AI is applied to complex, connected systems such as supply chains, logistics networks, smart infrastructure, and predictive maintenance.\n\nAI does not fix weak leadership or unclear strategy. It amplifies what already exists.`
      },
      {
        heading: 'Productivity Gains and Social Friction',
        content: `AI is delivering measurable productivity gains — up to 30–40% in large enterprises, with smaller but meaningful gains for SMEs.\n\nBut productivity acceleration comes with consequences: job displacement, unclear responsibility for reskilling, and rising inequality risks.`
      },
      {
        heading: 'Why Government Suddenly Matters',
        content: `Markets alone will not rebalance this shift. Governments are the only actors with enough leverage to stabilise it.`,
        bulletPoints: [
          'Data sovereignty frameworks',
          'Smart regulation that protects innovation',
          'Public–private partnerships and reskilling investment'
        ]
      },
      {
        heading: null,
        content: `Regions such as the UAE and Saudi Arabia are uniquely positioned, combining capital, AI-first agendas, and tech-literate leadership. Governance is no longer a blocker — it is a stabiliser.`
      },
      {
        heading: 'What Smart SMEs Should Do Now',
        content: `SMEs do not win by fighting big tech. They win by solving real problems, owning defensible value, and partnering without illusions — while protecting data, portability, and long-term control.\n\nThe views expressed are intended to stimulate discussion and critical thinking. They do not represent formal endorsements or official positions.`
      }
    ],
    relatedPosts: [
      { id: 13, slug: 'sustainability_and_technology', title: 'Sustainability and Technology', image: '/images/InnerPages/reframe-reads/blog-3.jpg' },
      { id: 12, slug: 'the-real-global-ai-race', title: 'The Real Global AI Race Is About Diffusion Without Losing Trust', image: '/images/InnerPages/reframe-reads/Kamran-Kardan-Thumbnail.jpeg' }
    ]
  },
  'sustainability_and_technology': {
    id: 5,
    slug: 'sustainability_and_technology',
    category: 'SUSTAINABILITY · TECHNOLOGY',
    date: '25TH NOVEMBER, 2025',
    title: 'Sustainability and Technology',
    author: {
      name: 'Dr Muhammad Irfan Shaikh',
      role: 'Programme Director,',
      company: 'SEE Institute Dubai',
      image: '/images/icons/LSC-logo.svg'
    },
    readTime: '5 min read',
    image: '/images/InnerPages/reframe-reads/blog-4.jpg',
    sections: [
      {
        heading: 'A Collision or a Catalyst for Progress?',
        content: `Once viewed as a symbol of innovation and environmental progress, sustainability in the 1980s and 1990s represented optimism and shared responsibility. It was about cleaning up the planet, developing new technologies, and creating more efficient systems. Today, however, the narrative has shifted. For many, sustainability has become synonymous with job losses, industry decline, and economic pressure. What was once a positive movement for progress is now at risk of being misinterpreted as a constraint.`
      },
      {
        heading: 'The Misinterpretation of Sustainability',
        content: `The transformation of sustainability from a driver of innovation to a perceived vehicle for cost-cutting reflects a broader misunderstanding within organisations. In recent years, many companies have equated sustainability with operational efficiency, often using it as justification for reducing costs and restructuring workforces. This narrow interpretation has undermined the true essence of sustainability, which should focus on creating long-term value through innovation, resilience, and social impact.\n\nWhen sustainability is seen solely as a financial or compliance exercise, it loses its transformative power. The result is a growing divide between environmental ambitions and the realities of economic and human development.`
      },
      {
        heading: 'The Collision Between Sustainability and Technology',
        content: `The world now stands at a critical junction where sustainability intersects with rapid technological advancement. Organisations are investing heavily in artificial intelligence and automation — particularly in developing agentic AIs, systems capable of acting with limited human input. These technologies promise greater efficiency and precision, but they also create a significant challenge: the gap between machine capability and human understanding.\n\nThis gap is not merely about technical skills. It reflects a deeper capability divide — a lack of readiness to integrate human judgment, ethical frameworks, and adaptive thinking into technology-driven systems. As machines evolve exponentially, human learning remains linear, raising the question of whether society is keeping pace with its own creations.`
      },
      {
        heading: 'From Upskilling to Capability Development',
        content: `For decades, the response to automation has been "upskilling" — training people to use new tools. Yet, in the current era, this is no longer enough. The future demands capability development, which goes beyond skills to encompass agility, critical thinking, and the ability to navigate ambiguity.\n\nCapability development enables individuals and organisations to evolve alongside technology rather than chase it. It encourages collaboration between humans and machines, leveraging the strengths of both to create new value systems.`,
        bulletPoints: [
          'The goal is not to prevent machines from taking over tasks',
          'But to ensure that humans remain indispensable for insight, creativity, and ethical decision-making'
        ]
      },
      {
        heading: 'The Middle East: An Emerging Innovation Hub',
        content: `Across the Middle East, particularly in the UAE and Saudi Arabia, governments are leading some of the world's most ambitious investments in artificial intelligence, digital infrastructure, and renewable energy. The UAE has established advanced AI centres and developed its own large language model, Falcon.\n\nThese initiatives reflect a long-term national vision that positions AI not as a threat, but as a foundation for economic diversification and capability building. The future lies in small, agile enterprises and individuals who create specialised solutions to address localised challenges.`
      },
      {
        heading: 'Water Security and Renewable Energy: The Next Sustainability Frontier',
        content: `As digital infrastructure expands, so too does its environmental footprint. Data centres require vast amounts of water and energy to operate. In regions like the GCC, where water scarcity is already a critical issue, this presents a complex challenge.\n\nGovernments are responding by investing in renewable energy and exploring partnerships in cooler regions to host data centres more sustainably. The long-term solution lies in combining innovation with responsibility — powering digital growth with clean, renewable resources while ensuring that natural ecosystems remain protected.`
      },
      {
        heading: 'Redefining Sustainability',
        content: `The evolving perception of sustainability reveals a deeper global tension: how to balance economic progress with environmental and social responsibility. The answer lies in redefining sustainability — not as a limitation, but as an opportunity for transformation.`
      },
      {
        heading: 'Conclusion',
        content: `Organisations that embrace capability development, harness technology ethically, and invest in human potential will lead the way into a more balanced and sustainable future. The challenge is not to resist change, but to reframe it — aligning innovation with purpose and progress with humanity.`,
        bulletPoints: [
          'Sustainability and technology are not opposing forces — when integrated thoughtfully, they can drive a new era of inclusive, intelligent, and resilient growth',
          'The future will not be defined by machines replacing humans — but by humans capable of leading technological change responsibly and creatively'
        ]
      }
    ],
    relatedPosts: [
      { id: 14, slug: 'ai-brains-future', title: 'AI, Brains, and the Future We Are Shaping', image: '/images/InnerPages/reframe-reads/blog-4.jpg' },
      { id: 4, slug: 'techno-feudalism', title: 'AI Hard Talk: From Hype to Real-World Impact', image: '/images/InnerPages/reframe-reads/blog-2.jpg' }
    ]
  },
  'ai-brains-future': {
    id: 6,
    slug: 'ai-brains-future',
    category: 'AI · NEUROSCIENCE · LEADERSHIP',
    date: '7TH NOVEMBER, 2025',
    title: 'AI, Brains, and the Future We Are Shaping',
    author: {
      name: 'Dr Vinod Metta',
      role: 'Consultant Interventional Neurologist,',
      company: "King's College Dubai",
      image: '/images/icons/LSC-logo.svg'
    },
    readTime: '8 min read',
    image: '/images/InnerPages/reframe-reads/blog-3.jpg',
    sections: [
      {
        heading: 'From Promise to Anxiety',
        content: `Sustainability and technology once felt purely positive. Today many people associate both with job losses, rising costs, and a loss of control. The same tension now surrounds artificial intelligence. Influential voices such as Geoffrey Hinton warn of deep social change. Universities see the impact in classrooms. Families see it in living rooms. The question behind all the noise is simple: Are our brains and our systems ready for the world we are building?`
      },
      {
        heading: 'AI Should Be a Tool, Not a Substitute',
        content: `AI can guide, support, and accelerate work. It should not replace judgment, ethics, and human connection. When people offload thinking too early to a system they do not fully understand, the brain's natural practice cycles can weaken. Over time this can blunt critical thinking, abstract reasoning, and the ability to move from messy questions to responsible decisions.\n\nUse the brain or lose it is a simple rule that applies at every age.`
      },
      {
        heading: 'Attention, Addiction, and the Infinite Scroll',
        content: `Not every struggle with attention is a diagnosis. But design patterns that reward compulsive checking can increase impulsivity, especially in younger users whose neural networks are not fully matured. If the most formative years incline toward instant answers and frictionless shortcuts, the brain learns to prefer the shortcut. That can slow work like literature review, hypothesis building, and careful revision.`
      },
      {
        heading: 'Are We Creating New Kinds of Mental Strain?',
        content: `Dr. Metta expects more cases where technology habits intersect with mood disorders and attention problems. The risk is not a single new disease. It is a wider pattern of reduced critical thinking and weak attention that invites quick fixes, including medication, for problems that are partly behavioural and environmental.`
      },
      {
        heading: 'Leadership Culture Matters',
        content: `In health systems and companies, cost cutting that swaps people for machines can strip away the human touch. Teams thrive when leaders set norms that value original work, allow drafting and feedback, and treat AI as a collaborator.`
      },
      {
        heading: 'Parents and Teachers Hold the Leverage',
        content: `Parents and educators shape habits that last. Practical steps help:`,
        bulletPoints: [
          'Delay high stimulation habits during the years when the brain is still wiring core networks',
          'Create tech use boundaries for study time and sleep cycles',
          'Replace some e-learning with relearning through practice, discussion, and retrieval'
        ]
      },
      {
        heading: 'A Clear Position on Replacement',
        content: `Will AI replace experts entirely? Not in the domain of human connection, clinical judgment, and ethical decision making. Pilots still fly planes. Clinicians still carry responsibility for diagnosis and consent. Researchers still define questions worth asking. AI can sharpen each of these when used with care. It becomes a crutch when it stands in for them.`
      },
      {
        heading: 'The Human Touch Creates Hope',
        content: `People remember being heard and helped, not being processed. The relationship between parent and child, teacher and student, doctor and patient, leader and team is the anchor that technology cannot supply. AI often delivers hype. Human touch delivers hope.`
      }
    ],
    relatedPosts: [
      { id: 5, slug: 'sustainability_and_technology', title: 'Sustainability and Technology', image: '/images/InnerPages/reframe-reads/blog-3.jpg' },
      { id: 3, slug: 'women-in-leadership-and-ai', title: 'Women in Leadership and Women in AI', image: '/images/InnerPages/reframe-reads/blog-1.jpg' }
    ]
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;
  const post = blogPosts[slug];
  const [email, setEmail] = useState('');
  const [pageUrl, setPageUrl] = useState('');
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [downloadForm, setDownloadForm] = useState({ name: '', email: '' });

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  function handleDownloadSubmit(e) {
    e.preventDefault();
    window.print();
    setShowDownloadModal(false);
    setDownloadForm({ name: '', email: '' });
  }

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[#0E2253] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white lg:py-28 py-20">
        {/* Full Width Container */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block px-5 py-2.5 text-xs font-bold tracking-wide uppercase rounded-xl border-2 border-gray-400 text-gray-900">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>

        {/* Author and Date */}
        <div className="flex items-center gap-3 mb-8 ">
          <span className="text-base text-gray-700">
            by <span className="font-semibold border-b border-gray-600">{post.author.name}</span>
          </span>
        </div>

        <div className="text-sm text-gray-900 font-semibold mb-8">
          {post.date}
        </div>

        {/* Featured Image - Full Width */}
        <div className="w-full mb-12 rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Two Column Layout for Content and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Content - Article */}
          <div className="lg:col-span-8">

            {/* Article Content */}
            <div className="space-y-8">
              {post.sections?.map((section, index) => (
                <div key={index}>

                  {/* Section heading with underline accent */}
                  {section.heading && (
                    <div className="mb-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug pb-2 border-b-2 border-[#0E2253] inline-block">
                        {section.heading}
                      </h2>
                    </div>
                  )}

                  {/* Body text — split on \n\n for paragraph spacing */}
                  {section.content && section.content.split('\n\n').map((para, pi) => (
                    <p key={pi} className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">{para.trim()}</p>
                  ))}

                  {/* Bullet points — each as its own card */}
                  {section.bulletPoints && (
                    <div className="my-4 space-y-2.5">
                      {section.bulletPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                          <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[#0E2253]/10 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0E2253] block" />
                          </span>
                          <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>

            {/* Authors Section */}
           <div className="mt-16 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Authors</h3>

        <div className="bg-white  border border-gray-200 rounded-2xl p-5 sm:p-6 hover:shadow-lg transition-shadow max-w-md">
          <div className="flex items-start gap-4">
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 sm:w-32 sm:h-24 rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src={post.author.image || "/images/default-avatar.jpg"}
                  alt={post.author.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 border-b border-gray-900 inline-block pb-1 mb-2">
                {post.author.name}
              </h3>

              <p className="text-sm sm:text-base text-gray-600">
                {post.author.role}
              </p>

              <p className="text-sm sm:text-base font-semibold text-gray-900">
                {post.author.company}
              </p>

              {/* Email Icon */}
              <button
                className="mt-3 inline-flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label={`Email ${post.author.name}`}
              >
                <Mail className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 no-print">
            <div className="sticky top-8 space-y-6">

              {/* Download Article */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Download Article</h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Save this article as a PDF to read offline or share with your team.</p>
                <button
                  onClick={() => setShowDownloadModal(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#0E2253] text-white rounded-xl text-sm font-semibold hover:bg-[#1a3570] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download as PDF
                </button>
              </div>

              {/* Share Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Share</h3>
                <div className="space-y-2">
                  {/* Copy Link */}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(pageUrl);
                      alert('Link copied to clipboard!');
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#0E2253] transition-colors">
                      <Link2Icon className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">Copy Link</span>
                  </button>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0A66C2]/10 group-hover:bg-[#0A66C2] transition-colors">
                      <Linkedin className="w-4 h-4 text-[#0A66C2] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">Share on LinkedIn</span>
                  </a>

                

                  

                  {/* Facebook */}
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877F2]/10 group-hover:bg-[#1877F2] transition-colors">
                      <Facebook className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">Share on Facebook</span>
                  </a>

                    {/* Instagram */}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(pageUrl);
                      alert('Link copied! Paste it in your Instagram bio or story.');
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-50 group-hover:bg-pink-500 transition-colors">
                      <Instagram className="w-4 h-4 text-pink-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">Share on Instagram</span>
                  </button>

                    {/* Gmail */}
                  <a
                    href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent('I thought you might find this article interesting: ' + post.title + '\n\nRead it here: ' + pageUrl)}`}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#EA4335]/10 group-hover:bg-[#EA4335] transition-colors">
                      <Mail className="w-4 h-4 text-[#EA4335] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">Share via Email</span>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black/10 group-hover:bg-black transition-colors">
                      <Twitter className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">Share on X / Twitter</span>
                  </a>

                
                </div>
              </div>

              {/* Newsletter Subscription Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0E2253]/10">
                    <Mail className="w-4 h-4 text-[#0E2253]" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Newsletter</h3>
                </div>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">Get the latest insights from LSC delivered to your inbox.</p>
                <form onSubmit={handleSubscribe} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 pr-14 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#0E2253] text-white rounded-lg font-medium hover:bg-[#1a3a6b] transition-colors flex items-center justify-center"
                  >
                    <span className="text-base">→</span>
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
          <div className="no-print"><FeaturedCampaignsSection /></div>
      </div>
      <Footer />

      {/* Download Lead Capture Modal */}
      {showDownloadModal && (
        <div
          className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowDownloadModal(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDownloadModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Close"
            >
              <span className="text-xl leading-none">✕</span>
            </button>

            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest text-[#0E2253] uppercase mb-2">Download Article</p>
              <h2 className="text-xl font-light text-gray-900 leading-snug">{post.title}</h2>
            </div>

            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Enter your details to download this article as a PDF.
            </p>

            <form onSubmit={handleDownloadSubmit} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-900">Full Name</label>
                <input
                  type="text"
                  required
                  value={downloadForm.name}
                  onChange={(e) => setDownloadForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-900">Email Address</label>
                <input
                  type="email"
                  required
                  value={downloadForm.email}
                  onChange={(e) => setDownloadForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0E2253] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-[#0E2253] text-white text-sm font-semibold rounded-xl hover:bg-[#1a3570] transition-all duration-300 uppercase tracking-widest"
              >
                Download PDF
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Print styles for PDF download */}
      <style>{`
        @media print {
          nav, aside, footer, .no-print { display: none !important; }
          body { background: white; margin: 0; }
          .lg\\:col-span-8 { grid-column: span 12 !important; }
          .grid { display: block !important; }
          img { max-width: 100%; page-break-inside: avoid; }
          h1, h2, h3 { page-break-after: avoid; }
          p, li { page-break-inside: avoid; }
        }
      `}</style>
    </>
  );
}

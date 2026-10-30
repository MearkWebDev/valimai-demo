import research from "@/assets/off-research.jpg";
import entry from "@/assets/off-entry.jpg";
import stakeholder from "@/assets/off-stakeholder.jpg";
import partnerships from "@/assets/off-partnerships.jpg";
import programme from "@/assets/off-programme.jpg";

export type Faq = { q: string; a: string };
export type Offering = {
  slug: string;
  num: string;
  short: string;
  title: string;
  tagline: string;
  image: string;
  imageAlt: string;
  meta: { title: string; description: string };
  question: string;
  answer: string;
  facts: { label: string; value: string }[];
  whoHeading: string;
  questions: string[];
  audiences: string[];
  stages: { name: string; text: string; checkpoint: string }[];
  included: { name: string; text: string }[];
  deliverables: { name: string; text: string }[];
  outcomeSummary: string;
  outcomes: string[];
  related: string[];
  faqs: Faq[];
};

const DURATION_FAQ: Faq = {
  q: "How long does an engagement take?",
  a: "Every engagement is scoped around your objectives, starting point and stakeholders, so we don't apply a fixed timeline. After our first conversation we agree the scope, the checkpoints and a delivery plan that fits your priorities.",
};
const CONFIDENTIAL_FAQ: Faq = {
  q: "Will our information be kept confidential?",
  a: "Yes. We are happy to sign a non-disclosure agreement before any detailed discussion, and client information is only shared with third parties with your explicit approval.",
};

export const offerings: Offering[] = [
  {
    slug: "market-research-strategic-advisory",
    num: "01",
    short: "Market Research & Strategic Advisory",
    title: "Market Research, Business Intelligence & Strategic Advisory",
    tagline: "Insight that turns India's opportunity into a clear growth roadmap.",
    image: research,
    imageAlt: "Strategy analysts reviewing India market research charts and a map of India",
    meta: {
      title: "Market Research & Strategic Advisory in India | Valimai",
      description:
        "India market research, industry analysis, feasibility studies and business strategy from Valimai, an India-focused strategic boutique consulting firm.",
    },
    question: "Is there a real opportunity for us in India, and what is the smartest way to pursue it?",
    answer:
      "Before you commit capital, people or reputation, get an evidence-based view of the market, the competition and the risks, plus a clear roadmap your leadership can act on.",
    facts: [
      { label: "Who it's for", value: "Boards, CEOs, strategy and investment teams" },
      { label: "Covers", value: "Demand, competition, regulation, customers, feasibility, risk" },
      { label: "Approach", value: "Desk research, primary interviews and on-ground validation" },
      { label: "Checkpoints", value: "Scope agreed · Findings review · Leadership read-out" },
      { label: "You receive", value: "Market assessment and a prioritised growth roadmap" },
    ],
    whoHeading: "For leaders who need evidence before they commit.",
    questions: [
      "Is there real demand for our product or service in India?",
      "Which regulations, approvals or standards will apply to us?",
      "Which states, cities or customer segments should we prioritise?",
      "Is the business case commercially viable, and what are the risks?",
      "Who are our competitors, and how do we stand out?",
      "What should our first move be?",
    ],
    audiences: [
      "International companies evaluating India",
      "Indian corporates and MSMEs planning new products or markets",
      "Investors and family offices assessing sectors",
      "Government and public institutions shaping programmes",
    ],
    stages: [
      { name: "Define", text: "We agree the decision you need to make, the questions to answer and the research scope.", checkpoint: "Scope and research plan agreed" },
      { name: "Research", text: "Desk research, industry data, regulatory review, competitor mapping and market sizing.", checkpoint: "Market baseline shared" },
      { name: "Validate", text: "Primary interviews with customers, channel partners, industry experts and, where relevant, institutional stakeholders.", checkpoint: "Draft findings reviewed with you" },
      { name: "Recommend", text: "Strategic options, feasibility, risk assessment and a prioritised roadmap.", checkpoint: "Leadership read-out" },
    ],
    included: [
      { name: "Market Research & Opportunity Assessment", text: "Evaluating market potential, identifying emerging opportunities, analysing industry demand and understanding target customer segments." },
      { name: "Industry & Sector Analysis", text: "Assessing industry trends, regulatory developments, market dynamics, growth drivers, emerging technologies and sector-specific opportunities." },
      { name: "Business Planning & Strategic Development", text: "Formulating business plans, strategic roadmaps, revenue models, financial projections and sustainable growth strategies." },
      { name: "Customer & End-User Intelligence", text: "Understanding customer behaviour, purchasing patterns, market expectations, demand trends and evolving preferences." },
      { name: "Business Feasibility & Risk Assessment", text: "Evaluating commercial viability and identifying financial, operational, regulatory and market risks linked to business decisions and investments." },
    ],
    deliverables: [
      { name: "Research plan", text: "The questions, sources and stakeholders, agreed up front." },
      { name: "Market & industry assessment", text: "Size, growth drivers, trends and regulatory landscape." },
      { name: "Competitor & customer insight", text: "Who you compete with and what customers really value." },
      { name: "Feasibility & risk register", text: "Commercial viability and the financial, operational and regulatory risks." },
      { name: "Strategic options", text: "Clear options with our independent recommendation." },
      { name: "Growth roadmap & read-out", text: "A prioritised plan and an executive presentation for your board." },
    ],
    outcomeSummary:
      "Greater market visibility, informed decision-making, reduced business uncertainty and a clearly defined roadmap for sustainable growth.",
    outcomes: [
      "A confident, evidence-based go / no-go decision",
      "Clarity on which markets and segments to prioritise",
      "Risks identified and mitigated before you invest",
      "A roadmap leadership can act on immediately",
    ],
    related: ["india-market-entry-international-expansion", "strategic-partnerships-joint-ventures"],
    faqs: [
      DURATION_FAQ,
      { q: "Is the research primary or secondary?", a: "Both. We combine published data and industry sources with direct interviews of customers, partners and experts, because on-ground conversations often reveal what reports miss." },
      { q: "Do you only research India?", a: "India is our focus, and that is where our depth comes from. For Indian businesses exploring overseas markets, we assess export potential and target markets as part of our Market Entry & International Expansion offering." },
      CONFIDENTIAL_FAQ,
      { q: "Can you help us act on the recommendations?", a: "Yes. Many clients continue with market entry, partnerships or programme management support, but there is no obligation. The roadmap is yours to implement with any team." },
      { q: "What do you need from us to start?", a: "A clear objective, any existing data or past studies, and a named point of contact. We send a short information request before we begin." },
    ],
  },
  {
    slug: "india-market-entry-international-expansion",
    num: "02",
    short: "Market Entry & International Expansion",
    title: "Market Entry Handholding, International Expansion & Business Development",
    tagline: "Your strategic local partner for entering and growing in India, and for taking Indian businesses global.",
    image: entry,
    imageAlt: "International executive arriving at a modern Indian airport overlooking the city skyline",
    meta: {
      title: "India Market Entry Consulting & Expansion Support | Valimai",
      description:
        "End-to-end India market entry handholding for international companies, plus export and international expansion support for Indian businesses.",
    },
    question: "We want to enter India. Where do we start, and who will help us on the ground?",
    answer:
      "From choosing the right business model and location to finding your first customers and partners, we handhold you through every step of entering and growing in India, and help Indian businesses take the same journey overseas.",
    facts: [
      { label: "Who it's for", value: "International companies entering India; Indian firms going global" },
      { label: "Covers", value: "Entry strategy, location, set-up coordination, partners, customers, go-to-market" },
      { label: "Approach", value: "Your strategic local partner and on-ground representative" },
      { label: "Checkpoints", value: "Entry strategy · Launch readiness · Growth reviews" },
      { label: "You receive", value: "An entry plan, a local network and an active sales pipeline" },
    ],
    whoHeading: "For organisations that need a trusted partner on the ground, not just a report.",
    questions: [
      "Which model suits us: subsidiary, joint venture, distributor or liaison office?",
      "Which approvals, registrations and compliance requirements apply?",
      "Which state or city should we set up in?",
      "How do we find our first customers and channel partners?",
      "Who will represent us in India before we have a full team?",
      "How should we adapt our product, pricing and positioning for India?",
    ],
    audiences: [
      "Technology, automation and manufacturing companies",
      "Indian exporters, corporates and MSMEs",
      "International product and service companies",
      "Institutional programmes seeking international partners",
    ],
    stages: [
      { name: "Assess", text: "Market readiness, business model options and location assessment.", checkpoint: "Entry strategy approved" },
      { name: "Prepare", text: "Localisation and go-to-market planning, with set-up coordinated through qualified legal, tax and regulatory professionals.", checkpoint: "Launch readiness review" },
      { name: "Launch", text: "Local representation, introductions, lead generation and engagement of first partners.", checkpoint: "First customers and partners engaged" },
      { name: "Grow", text: "Ongoing business development, pipeline management and account growth.", checkpoint: "Regular growth reviews" },
    ],
    included: [
      { name: "Market Entry Strategy", text: "Structured market-entry strategies for organisations establishing operations in India or expanding into international markets." },
      { name: "Geographical Expansion & Market Identification", text: "Identifying and evaluating the right countries, states, regions and cities based on demand, infrastructure, business potential and operating conditions." },
      { name: "Business Representation & Local Handholding", text: "Local business representation, market coordination, stakeholder engagement and ongoing business development for international organisations." },
      { name: "International Trade & Export Development", text: "Identifying export opportunities, target markets, prospective importers, trade partners and distribution channels." },
      { name: "Business Development & Lead Generation", text: "Identifying prospective customers, developing leads, facilitating introductions, generating enquiries and building a sustainable pipeline." },
      { name: "Go-to-Market & Localisation Strategy", text: "Adapting products, services, pricing and business models to local market requirements." },
      { name: "Regulatory & Market Navigation", text: "Coordinating with qualified legal, regulatory and industry professionals to understand and navigate market-entry requirements." },
      { name: "Market Development & Commercial Growth", text: "Supporting client engagement, developing new opportunities and building long-term commercial relationships." },
    ],
    deliverables: [
      { name: "Market entry strategy", text: "Recommended entry route and business model." },
      { name: "Location assessment", text: "Shortlisted states and cities with the rationale." },
      { name: "Set-up coordination plan", text: "Registrations and approvals, delivered with professional partners." },
      { name: "Go-to-market & localisation plan", text: "Positioning, pricing, channels and messaging for India." },
      { name: "Target customer & partner list", text: "Qualified prospects ready for outreach." },
      { name: "Pipeline & progress reports", text: "Transparent tracking of every lead and introduction." },
    ],
    outcomeSummary:
      "A smoother, more structured market-entry journey, access to new markets and customers, stronger local networks and faster commercial expansion.",
    outcomes: [
      "A smoother, structured market-entry journey",
      "Access to new markets, customers and channel partners",
      "A strong local network from day one",
      "Faster, more confident commercial expansion",
    ],
    related: ["stakeholder-management-business-coordination", "strategic-partnerships-joint-ventures"],
    faqs: [
      DURATION_FAQ,
      { q: "Do you handle company registration and legal work?", a: "We coordinate the process end to end with trusted, qualified chartered accountants and legal professionals. We do not provide legal or tax advice ourselves, which keeps the advice you receive properly qualified." },
      { q: "Can you represent us before we have an Indian entity or team?", a: "Yes. Within a written scope of authority, we represent you in business meetings, partner discussions and events so you can build momentum before committing to a full team." },
      { q: "Do you help Indian companies expand internationally?", a: "Yes. We identify export opportunities, target markets, importers and distribution partners for Indian businesses going global." },
      { q: "How are engagements structured?", a: "Engagements can be project-based, ongoing or a combination, depending on your needs. We agree the scope and commercial terms transparently after the discovery conversation." },
      CONFIDENTIAL_FAQ,
    ],
  },
  {
    slug: "stakeholder-management-business-coordination",
    num: "03",
    short: "Stakeholder Management & Coordination",
    title: "Stakeholder Management & Business Coordination",
    tagline: "An extension of your team, keeping every important relationship moving forward.",
    image: stakeholder,
    imageAlt: "Indian and international executives in a business coordination meeting around a round table",
    meta: {
      title: "Stakeholder Management & Business Coordination India | Valimai",
      description:
        "Valimai acts as your extended team in India, managing customer, partner, supplier and institutional relationships so commercial engagements keep moving.",
    },
    question: "Who is looking after our relationships in India when we are not in the room?",
    answer:
      "We act as an extension of your team, managing customer, partner, supplier and institutional relationships so commitments are met and commercial engagements keep moving.",
    facts: [
      { label: "Who it's for", value: "International firms without a full India team; businesses with complex multi-party relationships" },
      { label: "Covers", value: "Customers, partners, suppliers, distributors and institutions" },
      { label: "Approach", value: "A dedicated relationship lead working as an extension of your team" },
      { label: "Checkpoints", value: "Stakeholder map · Engagement plan · Regular status reviews" },
      { label: "You receive", value: "An engagement plan, a commitments tracker and regular reporting" },
    ],
    whoHeading: "For organisations whose most important relationships need consistent, local attention.",
    questions: [
      "Who are our critical stakeholders in India, and how strong are those relationships?",
      "Who resolves issues on the ground before they escalate?",
      "Are our commitments and follow-ups actually being tracked?",
      "How do we keep partners and customers engaged between visits?",
      "Where are the opportunities to grow our existing accounts?",
      "Who can represent us at meetings and events?",
    ],
    audiences: [
      "International companies with Indian customers, partners or suppliers",
      "Indian businesses managing multi-party commercial relationships",
      "Organisations engaging with public-sector institutions",
      "Leadership teams that need a trusted local coordinator",
    ],
    stages: [
      { name: "Map", text: "Identify your stakeholders and assess the health of each relationship.", checkpoint: "Stakeholder map agreed" },
      { name: "Plan", text: "Agree the engagement plan, communication protocol and written scope of representation.", checkpoint: "Engagement plan approved" },
      { name: "Engage", text: "Meetings, follow-ups, coordination and issue resolution on your behalf.", checkpoint: "Regular status reports" },
      { name: "Strengthen", text: "Account development, retention initiatives and escalation reviews.", checkpoint: "Periodic relationship reviews" },
    ],
    included: [
      { name: "Existing Stakeholder Management", text: "Managing relationships with existing customers, business partners, suppliers, vendors, distributors and other key stakeholders." },
      { name: "Business Relationship Management", text: "Strengthening established commercial relationships through consistent engagement and communication." },
      { name: "Stakeholder Coordination", text: "A central coordination point between clients and their internal and external stakeholders." },
      { name: "Client & Partner Engagement", text: "Facilitating meetings, business discussions, follow-ups and ongoing interactions." },
      { name: "Business Communication & Follow-ups", text: "Coordinating commercial discussions, tracking deliverables and commitments, and ensuring timely communication." },
      { name: "Account & Relationship Development", text: "Supporting client retention, strengthening accounts and identifying opportunities to expand relationships." },
      { name: "Issue Resolution & Escalation Management", text: "Facilitating communication and coordination to address operational, commercial and stakeholder issues." },
      { name: "Business Representation", text: "Representing client interests in authorised business interactions, meetings and engagements, aligned with their objectives." },
    ],
    deliverables: [
      { name: "Stakeholder map", text: "Every key relationship, its owner and its current health." },
      { name: "Engagement & communication plan", text: "Who we engage, how often and on what." },
      { name: "Commitments tracker", text: "Every deliverable and follow-up, visible to you." },
      { name: "Meeting notes & status reports", text: "A clear record of every interaction." },
      { name: "Issue & escalation log", text: "Problems surfaced early and resolved quickly." },
      { name: "Account development ideas", text: "Opportunities to deepen and grow relationships." },
    ],
    outcomeSummary:
      "Stronger relationships, better stakeholder engagement, seamless coordination, continuity of commercial activity and more effective relationship management.",
    outcomes: [
      "Stronger, better-managed business relationships",
      "Commitments met and nothing falling through the gaps",
      "Issues resolved early, on the ground",
      "Continuity of commercial activity in India",
    ],
    related: ["india-market-entry-international-expansion", "large-scale-programme-management"],
    faqs: [
      DURATION_FAQ,
      { q: "What authority do you have to represent us?", a: "Only what you grant in writing. We agree a clear scope of representation at the start, and we never commit you to anything outside it." },
      { q: "Do you replace our sales or account team?", a: "No. We complement your team, providing local presence, coordination and continuity, while your people keep ownership of the relationships." },
      { q: "How do we stay informed?", a: "Through a reporting rhythm we agree together: regular status updates, a shared commitments tracker and immediate alerts on anything urgent." },
      { q: "Do you engage with government stakeholders?", a: "Yes. Institutional engagement is carried out transparently, through proper channels and in line with applicable laws and our Ethics & Compliance policy." },
      CONFIDENTIAL_FAQ,
    ],
  },
  {
    slug: "strategic-partnerships-joint-ventures",
    num: "04",
    short: "Strategic Partnerships & Joint Ventures",
    title: "Strategic Partnerships, Alliances & Joint Ventures",
    tagline: "The right partners, the right ecosystem, built for long-term value.",
    image: partnerships,
    imageAlt: "Indian and European engineers examining an industrial robotic arm in a manufacturing facility",
    meta: {
      title: "Joint Venture & Strategic Partnership Facilitation India | Valimai",
      description:
        "Find and build the right partners in India: joint ventures, OEM and manufacturing tie-ups, technology transfer, investor connects and institutional engagement.",
    },
    question: "Who is the right partner for us in India, and how do we build a partnership that lasts?",
    answer:
      "Whether you need a joint-venture partner, a manufacturer, a technology collaborator or an investor, we identify, assess and introduce the right counterparts, then help you build a partnership that works for both sides.",
    facts: [
      { label: "Who it's for", value: "Global technology and automation providers, Indian firms seeking technology or capital, and investors" },
      { label: "Covers", value: "Joint ventures, equity, OEM, manufacturing, technology transfer, investors, institutions" },
      { label: "Approach", value: "Independent, criteria-led partner search" },
      { label: "Checkpoints", value: "Partner profile · Vetted shortlist · Introductions · Agreement in principle" },
      { label: "You receive", value: "A vetted shortlist, warm introductions and coordinated discussions" },
    ],
    whoHeading: "For organisations that grow faster with the right partner beside them.",
    questions: [
      "Should we enter India alone, or with a partner?",
      "How do we check a potential partner's capability and reputation?",
      "Who are credible joint-venture, OEM or distribution partners for us?",
      "Can we license or transfer our technology safely?",
      "Which investors or institutions should we be speaking to?",
      "How do we structure an arrangement that benefits both sides?",
    ],
    audiences: [
      "International technology and automation providers",
      "Manufacturers seeking Indian OEM or production partners",
      "Indian companies seeking technology, capital or global partners",
      "Investors seeking credible Indian opportunities",
    ],
    stages: [
      { name: "Define", text: "Clarify your objectives, partner criteria and deal-breakers.", checkpoint: "Partner profile agreed" },
      { name: "Search & assess", text: "Build a long list, then screen on capability, track record and reputation.", checkpoint: "Vetted shortlist" },
      { name: "Introduce", text: "Warm introductions, meetings and site visits.", checkpoint: "Mutual interest confirmed" },
      { name: "Structure", text: "Coordinate commercial discussions and MoUs alongside your legal and financial advisors.", checkpoint: "Agreement in principle" },
    ],
    included: [
      { name: "Strategic Partner Identification", text: "Identifying and evaluating domestic and international partners on capability, market presence and strategic fit." },
      { name: "Joint Venture & Equity Partnership Facilitation", text: "Supporting joint ventures, equity partnerships, collaborative ventures and strategic investments." },
      { name: "OEM & Manufacturing Partnerships", text: "Connecting businesses with OEMs, contract manufacturers and production partners, supporting Make in India objectives." },
      { name: "Technology Collaboration & Transfer", text: "Facilitating technology partnerships, licensing, technical and research collaborations and technology transfer." },
      { name: "Investor & Financial Stakeholder Connect", text: "Introductions to potential investors, financial institutions and relevant investment networks." },
      { name: "Institutional & Government Engagement", text: "Facilitating engagement with government bodies, industry associations, trade organisations and public-sector institutions." },
      { name: "Partnership Development & Coordination", text: "Supporting commercial discussions, coordinating partner interactions and shaping mutually beneficial arrangements." },
    ],
    deliverables: [
      { name: "Partner profile", text: "The capabilities and fit you are looking for." },
      { name: "Screening matrix", text: "How every candidate measured up, and why." },
      { name: "Vetted shortlist", text: "Detailed profiles of the strongest candidates." },
      { name: "Introductions & meetings", text: "Warm, well-prepared first conversations." },
      { name: "Discussion coordination", text: "Agendas, notes and follow-ups through to terms." },
      { name: "Partnership launch plan", text: "Governance and first steps for the new relationship." },
    ],
    outcomeSummary:
      "Access to the right ecosystem, stronger strategic relationships, complementary capabilities and new opportunities for collaboration and growth.",
    outcomes: [
      "Access to the right business ecosystem",
      "Partners chosen on evidence, not chance",
      "Complementary capabilities and wider market reach",
      "Long-term, mutually beneficial relationships",
    ],
    related: ["market-research-strategic-advisory", "stakeholder-management-business-coordination"],
    faqs: [
      DURATION_FAQ,
      { q: "Do you carry out legal and financial due diligence?", a: "We carry out commercial and reputational screening. Formal legal and financial due diligence is done by your appointed advisors, and we coordinate closely with them." },
      { q: "Can we approach partners without revealing our name?", a: "Yes. Initial approaches can be made on a no-names basis until you are ready to disclose your identity." },
      { q: "How do you stay neutral?", a: "We are fully independent. Any fee arrangement is agreed with you up front and disclosed in full, and we are never paid by the other side without your knowledge." },
      { q: "Can you help protect our technology and IP?", a: "We structure discussions to protect sensitive information and work with your IP counsel on licensing and technology-transfer terms." },
      CONFIDENTIAL_FAQ,
    ],
  },
  {
    slug: "large-scale-programme-management",
    num: "05",
    short: "Large-Scale Programme Management",
    title: "Large-Scale Programme Management",
    tagline: "Large programmes, delivered on time, on budget and to quality.",
    image: programme,
    imageAlt: "Programme managers in hard hats reviewing plans at a metro rail infrastructure site in India",
    meta: {
      title: "Large-Scale Programme Management Consulting India | Valimai",
      description:
        "Independent programme management and PMO support that delivers large, multi-stakeholder programmes in India on time, on budget and to quality.",
    },
    question: "How do we make sure this programme is delivered on time, on budget and to the quality we promised?",
    answer:
      "Large programmes involve many stakeholders, vendors, approvals and budgets moving together. We provide independent programme management that keeps every party aligned and accountable, from mobilisation to handover.",
    facts: [
      { label: "Who it's for", value: "Government and public-sector programmes, large technology and automation roll-outs, infrastructure and industrial projects" },
      { label: "Covers", value: "Governance, scope, schedule, budget, quality, vendors, risk and reporting" },
      { label: "Approach", value: "An independent PMO integrated with your team" },
      { label: "Checkpoints", value: "Programme baseline · Stage-gate reviews · Formal handover" },
      { label: "You receive", value: "Full visibility, control and independent reporting" },
    ],
    whoHeading: "For programmes too important to leave to chance.",
    questions: [
      "Who has a single, accurate view of where the programme stands?",
      "How do we coordinate multiple vendors, departments and partners?",
      "Are we on track against schedule, budget and quality?",
      "Which risks could derail delivery, and what are we doing about them?",
      "How do we report progress honestly to leadership and funding bodies?",
      "How do we make sure benefits, skills and jobs remain after handover?",
    ],
    audiences: [
      "Central and state government programmes and PSUs",
      "Infrastructure, industrial and smart-city projects",
      "Large technology, AI and automation roll-outs",
      "International firms delivering major contracts in India",
    ],
    stages: [
      { name: "Mobilise", text: "Set up governance and the PMO, and baseline scope, schedule, budget and quality.", checkpoint: "Programme baseline approved" },
      { name: "Plan & control", text: "Integrated master plan, critical-path tracking, cost control and risk registers.", checkpoint: "Stage-gate reviews" },
      { name: "Coordinate & assure", text: "Vendor and stakeholder coordination, quality assurance and issue resolution.", checkpoint: "Executive dashboard at an agreed rhythm" },
      { name: "Transition", text: "Handover, change management, capability transfer and lessons learned.", checkpoint: "Formal handover and close" },
    ],
    included: [
      { name: "Programme Management Office (PMO) Set-up", text: "Establishing governance structures, decision rights, reporting cadence and delivery standards." },
      { name: "Planning, Scheduling & Milestone Control", text: "Integrated master schedules, critical-path tracking and milestone assurance." },
      { name: "Budget & Cost Control", text: "Budget baselining, cost tracking, variance analysis and early warning on overruns." },
      { name: "Quality Assurance & Delivery Standards", text: "Defining acceptance criteria and quality checkpoints, and assuring vendor deliverables." },
      { name: "Multi-Vendor & Multi-Stakeholder Coordination", text: "Aligning government bodies, international technology partners, contractors and internal teams." },
      { name: "Risk, Issue & Dependency Management", text: "Proactive identification, mitigation and escalation of delivery risks and dependencies." },
      { name: "Progress Reporting & Executive Dashboards", text: "Clear, independent reporting for leadership, boards and funding bodies." },
      { name: "Change Management & Capability Transfer", text: "Supporting adoption, training and handover so outcomes last beyond the programme, including new local jobs and skills." },
    ],
    deliverables: [
      { name: "PMO charter & governance", text: "Decision rights, roles and reporting structure." },
      { name: "Integrated master plan", text: "Scope, schedule and budget baselines in one view." },
      { name: "Executive dashboards", text: "Honest, independent status for leadership." },
      { name: "Quality & acceptance framework", text: "Clear criteria every deliverable is measured against." },
      { name: "Risk, issue & dependency registers", text: "Actively managed, not just recorded." },
      { name: "Handover & capability plan", text: "Skills and ownership transferred to your team." },
    ],
    outcomeSummary:
      "Predictable delivery: programmes completed on time, within budget and to agreed quality, with full transparency for every stakeholder.",
    outcomes: [
      "Programmes delivered on time, within budget and to agreed quality",
      "One trusted view of progress for every stakeholder",
      "Risks managed before they become problems",
      "Lasting capability, skills and jobs after handover",
    ],
    related: ["stakeholder-management-business-coordination", "strategic-partnerships-joint-ventures"],
    faqs: [
      DURATION_FAQ,
      { q: "Can you take over a programme that is already under way?", a: "Yes. We typically start with an independent programme health check, then stabilise governance, plans and reporting before moving to ongoing management." },
      { q: "Do you replace our project managers?", a: "No. We strengthen them. Our PMO provides structure, assurance and coordination while your teams and vendors keep delivery ownership." },
      { q: "Are you independent of vendors?", a: "Yes. We have no commercial ties to technology vendors or contractors, so our reporting reflects the true state of delivery." },
      { q: "Do you work on government programmes?", a: "Yes. We support public-sector programmes in line with applicable procurement, governance and transparency requirements." },
      CONFIDENTIAL_FAQ,
    ],
  },
];

export const getOffering = (slug: string) => offerings.find((o) => o.slug === slug);

export const values = [
  { title: "Long-Term Partnership over Short-Term Gains", text: "We measure success by the strength and longevity of our client relationships, not the size of a single transaction. We invest time in understanding your ambitions and stay with you from strategy through execution." },
  { title: "Responsible Adoption of AI & Automation", text: "We champion responsible market entry and adoption of AI and automation in India, with a deliberate focus on creating new jobs, building local skills and strengthening, not replacing, India's workforce." },
  { title: "Fully Independent & Neutral", text: "We are not tied to any vendor, product or interest group. Our independence lets us give unbiased advice and recommend only what is right for our clients and for India." },
  { title: "Trust, Respect & Integrity: Non-Negotiable", text: "Every engagement is conducted with transparency, mutual respect and the highest standards of business ethics. Trust, respect and integrity are the foundation on which we work." },
];

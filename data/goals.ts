import type { Attribute, Goal, Path, Step } from "@/lib/types";

type AttrKind = "vehicle" | "driver";

type DetailContent = {
  meaning: string;
  build: string[];
};

// Main editable goal/path/step/attribute data.
// Edit each item's meaning and build fields directly.
export const DATA: Goal[] = [
  {
    "id": "freedom10m",
    "title": "$10M Freedom Reverse Map",
    "steps": [
      {
        "label": "End Goal",
        "title": "Own a mature asset that can realistically support $10M+ wealth, time freedom, and location freedom.",
        "factors": {
          "default": 1
        },
        "meaning": "Own a mature asset that can realistically support $10M+ wealth, time freedom, and location freedom. Final state: the vehicle has strong economics, durable demand, and the driver can operate or lead it. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Keep a small dashboard for the core outcome and the leading behaviors behind it.",
          "Protect the strongest repeatable system from founder dependence, motivation swings, or relationship drift.",
          "Review the weakest required domain monthly and improve one constraint at a time."
        ]
      },
      {
        "label": "Previous Step 1",
        "title": "Scaled asset with strong revenue, retention, team, systems, and valuable ownership.",
        "factors": {
          "market": 0.95,
          "insight": 0.9,
          "traction": 0.88,
          "retention": 0.88,
          "distribution": 0.85,
          "economics": 0.85,
          "scale": 0.86,
          "moat": 0.75,
          "systems": 0.9,
          "skill": 0.88,
          "leadership": 0.8,
          "default": 0.85
        },
        "meaning": "Scaled asset with strong revenue, retention, team, systems, and valuable ownership. Think: reliable growth engine, measurable retention, clear unit economics, and less founder-dependence. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Interview 10-20 people in one narrow segment and record repeated pains.",
          "Run weekly user or buyer conversations with notes.",
          "Create a weekly review with the few numbers or behaviors that matter.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 2",
        "title": "Repeatable growth channel and unit economics are working.",
        "factors": {
          "market": 0.85,
          "insight": 0.78,
          "traction": 0.7,
          "retention": 0.65,
          "distribution": 0.7,
          "economics": 0.68,
          "scale": 0.65,
          "moat": 0.5,
          "systems": 0.6,
          "skill": 0.7,
          "leadership": 0.6,
          "default": 0.65
        },
        "meaning": "Repeatable growth channel and unit economics are working. This is where CAC, payback, gross margin, churn/retention, and distribution begin to matter heavily. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Interview 10-20 people in one narrow segment and record repeated pains.",
          "Run weekly user or buyer conversations with notes.",
          "Define one conversion event that proves demand.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 3",
        "title": "Customers/users keep using it because the core value is real.",
        "factors": {
          "market": 0.78,
          "insight": 0.7,
          "traction": 0.55,
          "retention": 0.75,
          "distribution": 0.4,
          "economics": 0.5,
          "scale": 0.45,
          "moat": 0.35,
          "systems": 0.4,
          "skill": 0.62,
          "leadership": 0.45,
          "default": 0.5
        },
        "meaning": "Customers/users keep using it because the core value is real. Product-market fit is not just launch. It is repeated usage, renewal, expansion, or clear customer pull. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Interview 10-20 people in one narrow segment and record repeated pains.",
          "Track repeat usage, renewal, attendance, contact, or adherence by cohort.",
          "Run weekly user or buyer conversations with notes.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 4",
        "title": "First paying customers, users, clients, or owned assets exist.",
        "factors": {
          "market": 0.55,
          "insight": 0.5,
          "traction": 0.3,
          "retention": 0.25,
          "distribution": 0.25,
          "economics": 0.35,
          "scale": 0.2,
          "moat": 0.15,
          "systems": 0.2,
          "skill": 0.42,
          "leadership": 0.25,
          "default": 0.3
        },
        "meaning": "First paying customers, users, clients, or owned assets exist. The vehicle is no longer only an idea. Someone pays, uses, signs up, buys, invests, or participates. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Interview 10-20 people in one narrow segment and record repeated pains.",
          "Run weekly user or buyer conversations with notes.",
          "Practice in short cycles where you can see feedback quickly.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 5",
        "title": "Small MVP, pilot, offer, prototype, or first version exists.",
        "factors": {
          "market": 0.4,
          "insight": 0.35,
          "traction": 0.1,
          "retention": 0.1,
          "distribution": 0.1,
          "economics": 0.15,
          "scale": 0.12,
          "moat": 0.08,
          "systems": 0.1,
          "skill": 0.25,
          "leadership": 0.1,
          "default": 0.15
        },
        "meaning": "Small MVP, pilot, offer, prototype, or first version exists. The goal is not perfection. The goal is a simple test that can create evidence. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Interview 10-20 people in one narrow segment and record repeated pains.",
          "Run weekly user or buyer conversations with notes.",
          "Practice in short cycles where you can see feedback quickly.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 6",
        "title": "Painful problem, niche, audience, or asset opportunity is validated before building big.",
        "factors": {
          "market": 0.32,
          "insight": 0.35,
          "traction": 0,
          "retention": 0,
          "distribution": 0.05,
          "economics": 0.05,
          "scale": 0,
          "moat": 0,
          "systems": 0,
          "skill": 0.15,
          "leadership": 0,
          "default": 0.05
        },
        "meaning": "Painful problem, niche, audience, or asset opportunity is validated before building big. This step is mostly customer/problem evidence, not a working company yet. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Run weekly user or buyer conversations with notes.",
          "Interview 10-20 people in one narrow segment and record repeated pains.",
          "Practice in short cycles where you can see feedback quickly.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 7",
        "title": "Skill-building and basic preparation only.",
        "factors": {
          "market": 0,
          "insight": 0.1,
          "traction": 0,
          "retention": 0,
          "distribution": 0,
          "economics": 0,
          "scale": 0,
          "moat": 0,
          "systems": 0,
          "skill": 0.1,
          "leadership": 0,
          "default": 0
        },
        "meaning": "Skill-building and basic preparation only. You may be learning, interviewing, writing notes, or studying the market, but the vehicle itself is not built yet. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Run weekly user or buyer conversations with notes.",
          "Practice in short cycles where you can see feedback quickly.",
          "Interview 10-20 people in one narrow segment and record repeated pains.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Absolute Zero",
        "title": "Nothing has been built, validated, sold, measured, or practiced yet.",
        "factors": {
          "default": 0
        },
        "meaning": "Nothing has been built, validated, sold, measured, or practiced yet. Important fix: every required rating is 0 here. You do not need customer understanding, sales, product, systems, or revenue before step zero. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Record the honest zero state: no proof, no routine, no sales, no reliable pattern.",
          "Choose one baseline metric and one next action that can be done this week.",
          "Do not rate an area above 0 until there is an observable result."
        ]
      }
    ],
    "paths": [
      {
        "name": "B2B SaaS Company",
        "vehicleAttrs": [
          {
            "name": "Recurring revenue",
            "final": 10,
            "group": "traction",
            "meaning": "Recurring revenue means customers pay repeatedly because the product remains useful. In SaaS, this is usually tracked as MRR/ARR, churn, expansion, gross margin, and net revenue retention. In this B2B SaaS Company map, Recurring revenue is a Business attribute. Final target: 100%.",
            "build": [
              "Sell a narrow paid plan before adding broad features.",
              "Track MRR/ARR, churn, expansion, gross margin, and CAC payback monthly.",
              "Improve onboarding and core workflow until renewal is easier than cancellation."
            ]
          },
          {
            "name": "Scalability",
            "final": 10,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this B2B SaaS Company map, Scalability is a Business attribute. Final target: 100%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Large market",
            "final": 9,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this B2B SaaS Company map, Large market is a Business attribute. Final target: 90%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Painful business problem",
            "final": 10,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this B2B SaaS Company map, Painful business problem is a Business attribute. Final target: 100%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Strong retention",
            "final": 10,
            "group": "retention",
            "meaning": "Retention means users keep using, paying, renewing, or returning because the product or relationship is embedded in a real workflow. In this B2B SaaS Company map, Strong retention is a Business attribute. Final target: 100%.",
            "build": [
              "Measure cohort retention and renewal behavior.",
              "Interview retained and churned users separately.",
              "Improve the smallest core workflow that creates the repeat habit."
            ]
          },
          {
            "name": "Strong distribution",
            "final": 9,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this B2B SaaS Company map, Strong distribution is a Business attribute. Final target: 90%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Clear monetization",
            "final": 10,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this B2B SaaS Company map, Clear monetization is a Business attribute. Final target: 100%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Good unit economics",
            "final": 9,
            "group": "economics",
            "meaning": "Unit economics means one customer, user, transaction, or asset produces enough value after direct costs and acquisition cost to justify scaling. In this B2B SaaS Company map, Good unit economics is a Business attribute. Final target: 90%.",
            "build": [
              "Calculate contribution margin per customer or transaction.",
              "Estimate CAC from real channel tests, not hope.",
              "Do not scale spend until payback and retention are acceptable."
            ]
          },
          {
            "name": "High profit margin",
            "final": 9,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this B2B SaaS Company map, High profit margin is a Business attribute. Final target: 90%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Global reach",
            "final": 9,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this B2B SaaS Company map, Global reach is a Business attribute. Final target: 90%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Defensibility",
            "final": 8,
            "group": "moat",
            "meaning": "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage. In this B2B SaaS Company map, Defensibility is a Business attribute. Final target: 80%.",
            "build": [
              "Identify what would still be valuable if a competitor copied the surface feature.",
              "Increase switching costs through workflow integration, trust, data, or community.",
              "Build proprietary knowledge from repeated customer, market, or operating feedback."
            ]
          },
          {
            "name": "Can run with systems/team",
            "final": 9,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this B2B SaaS Company map, Can run with systems/team is a Business attribute. Final target: 90%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Customer understanding",
            "final": 10,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this B2B SaaS Company map, Customer understanding is a Person attribute. Final target: 100%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "Problem selection",
            "final": 10,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this B2B SaaS Company map, Problem selection is a Person attribute. Final target: 100%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "Execution",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this B2B SaaS Company map, Execution is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Product building",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this B2B SaaS Company map, Product building is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Sales",
            "final": 9,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this B2B SaaS Company map, Sales is a Person attribute. Final target: 90%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Marketing / distribution",
            "final": 9,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this B2B SaaS Company map, Marketing / distribution is a Person attribute. Final target: 90%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Focus",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this B2B SaaS Company map, Focus is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Decision making",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this B2B SaaS Company map, Decision making is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Leadership",
            "final": 8,
            "group": "leadership",
            "meaning": "Leadership means other people, vendors, collaborators, or a future team can produce a standard without you controlling every detail. In this B2B SaaS Company map, Leadership is a Person attribute. Final target: 80%.",
            "build": [
              "Define the outcome, owner, standard, and review rhythm.",
              "Delegate small repeatable work before delegating complex judgment.",
              "Review results with metrics and examples instead of taking every task back."
            ]
          },
          {
            "name": "Resilience",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this B2B SaaS Company map, Resilience is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          }
        ]
      },
      {
        "name": "Vertical SaaS",
        "vehicleAttrs": [
          {
            "name": "Recurring revenue",
            "final": 10,
            "group": "traction",
            "meaning": "Recurring revenue means customers pay repeatedly because the product remains useful. In SaaS, this is usually tracked as MRR/ARR, churn, expansion, gross margin, and net revenue retention. In this Vertical SaaS map, Recurring revenue is a Business attribute. Final target: 100%.",
            "build": [
              "Sell a narrow paid plan before adding broad features.",
              "Track MRR/ARR, churn, expansion, gross margin, and CAC payback monthly.",
              "Improve onboarding and core workflow until renewal is easier than cancellation."
            ]
          },
          {
            "name": "Industry-specific pain",
            "final": 10,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this Vertical SaaS map, Industry-specific pain is a Business attribute. Final target: 100%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Niche depth",
            "final": 9,
            "group": "moat",
            "meaning": "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage. In this Vertical SaaS map, Niche depth is a Business attribute. Final target: 90%.",
            "build": [
              "Identify what would still be valuable if a competitor copied the surface feature.",
              "Increase switching costs through workflow integration, trust, data, or community.",
              "Build proprietary knowledge from repeated customer, market, or operating feedback."
            ]
          },
          {
            "name": "Retention from workflow lock-in",
            "final": 10,
            "group": "retention",
            "meaning": "Retention means users keep using, paying, renewing, or returning because the product or relationship is embedded in a real workflow. In this Vertical SaaS map, Retention from workflow lock-in is a Business attribute. Final target: 100%.",
            "build": [
              "Measure cohort retention and renewal behavior.",
              "Interview retained and churned users separately.",
              "Improve the smallest core workflow that creates the repeat habit."
            ]
          },
          {
            "name": "Scalability",
            "final": 8,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Vertical SaaS map, Scalability is a Business attribute. Final target: 80%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Focused distribution",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Vertical SaaS map, Focused distribution is a Business attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Clear monetization",
            "final": 10,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Vertical SaaS map, Clear monetization is a Business attribute. Final target: 100%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Good unit economics",
            "final": 9,
            "group": "economics",
            "meaning": "Unit economics means one customer, user, transaction, or asset produces enough value after direct costs and acquisition cost to justify scaling. In this Vertical SaaS map, Good unit economics is a Business attribute. Final target: 90%.",
            "build": [
              "Calculate contribution margin per customer or transaction.",
              "Estimate CAC from real channel tests, not hope.",
              "Do not scale spend until payback and retention are acceptable."
            ]
          },
          {
            "name": "High profit margin",
            "final": 9,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Vertical SaaS map, High profit margin is a Business attribute. Final target: 90%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Market size ceiling",
            "final": 7,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this Vertical SaaS map, Market size ceiling is a Business attribute. Final target: 70%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Defensibility",
            "final": 9,
            "group": "moat",
            "meaning": "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage. In this Vertical SaaS map, Defensibility is a Business attribute. Final target: 90%.",
            "build": [
              "Identify what would still be valuable if a competitor copied the surface feature.",
              "Increase switching costs through workflow integration, trust, data, or community.",
              "Build proprietary knowledge from repeated customer, market, or operating feedback."
            ]
          },
          {
            "name": "Can run with systems/team",
            "final": 9,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Vertical SaaS map, Can run with systems/team is a Business attribute. Final target: 90%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Customer understanding",
            "final": 10,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this Vertical SaaS map, Customer understanding is a Person attribute. Final target: 100%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "Domain expertise",
            "final": 9,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this Vertical SaaS map, Domain expertise is a Person attribute. Final target: 90%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "Problem selection",
            "final": 10,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this Vertical SaaS map, Problem selection is a Person attribute. Final target: 100%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "Product building",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Vertical SaaS map, Product building is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Founder-led sales",
            "final": 9,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Vertical SaaS map, Founder-led sales is a Person attribute. Final target: 90%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Support operations",
            "final": 8,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Vertical SaaS map, Support operations is a Person attribute. Final target: 80%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          },
          {
            "name": "Focus",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Vertical SaaS map, Focus is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Decision making",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Vertical SaaS map, Decision making is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Leadership",
            "final": 8,
            "group": "leadership",
            "meaning": "Leadership means other people, vendors, collaborators, or a future team can produce a standard without you controlling every detail. In this Vertical SaaS map, Leadership is a Person attribute. Final target: 80%.",
            "build": [
              "Define the outcome, owner, standard, and review rhythm.",
              "Delegate small repeatable work before delegating complex judgment.",
              "Review results with metrics and examples instead of taking every task back."
            ]
          },
          {
            "name": "Resilience",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Vertical SaaS map, Resilience is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          }
        ]
      },
      {
        "name": "AI / B2B Automation Company",
        "vehicleAttrs": [
          {
            "name": "Measurable time/cost savings",
            "final": 10,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this AI / B2B Automation Company map, Measurable time/cost savings is a Business attribute. Final target: 100%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Recurring revenue",
            "final": 9,
            "group": "traction",
            "meaning": "Recurring revenue means customers pay repeatedly because the product remains useful. In SaaS, this is usually tracked as MRR/ARR, churn, expansion, gross margin, and net revenue retention. In this AI / B2B Automation Company map, Recurring revenue is a Business attribute. Final target: 90%.",
            "build": [
              "Sell a narrow paid plan before adding broad features.",
              "Track MRR/ARR, churn, expansion, gross margin, and CAC payback monthly.",
              "Improve onboarding and core workflow until renewal is easier than cancellation."
            ]
          },
          {
            "name": "Scalability",
            "final": 9,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this AI / B2B Automation Company map, Scalability is a Business attribute. Final target: 90%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Large market",
            "final": 10,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this AI / B2B Automation Company map, Large market is a Business attribute. Final target: 100%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Workflow retention",
            "final": 8,
            "group": "retention",
            "meaning": "Retention means users keep using, paying, renewing, or returning because the product or relationship is embedded in a real workflow. In this AI / B2B Automation Company map, Workflow retention is a Business attribute. Final target: 80%.",
            "build": [
              "Measure cohort retention and renewal behavior.",
              "Interview retained and churned users separately.",
              "Improve the smallest core workflow that creates the repeat habit."
            ]
          },
          {
            "name": "Distribution difficulty",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this AI / B2B Automation Company map, Distribution difficulty is a Business attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Clear monetization",
            "final": 9,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this AI / B2B Automation Company map, Clear monetization is a Business attribute. Final target: 90%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Good unit economics",
            "final": 8,
            "group": "economics",
            "meaning": "Unit economics means one customer, user, transaction, or asset produces enough value after direct costs and acquisition cost to justify scaling. In this AI / B2B Automation Company map, Good unit economics is a Business attribute. Final target: 80%.",
            "build": [
              "Calculate contribution margin per customer or transaction.",
              "Estimate CAC from real channel tests, not hope.",
              "Do not scale spend until payback and retention are acceptable."
            ]
          },
          {
            "name": "High profit margin",
            "final": 8,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this AI / B2B Automation Company map, High profit margin is a Business attribute. Final target: 80%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Global reach",
            "final": 9,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this AI / B2B Automation Company map, Global reach is a Business attribute. Final target: 90%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Defensibility risk",
            "final": 7,
            "group": "moat",
            "meaning": "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage. In this AI / B2B Automation Company map, Defensibility risk is a Business attribute. Final target: 70%.",
            "build": [
              "Identify what would still be valuable if a competitor copied the surface feature.",
              "Increase switching costs through workflow integration, trust, data, or community.",
              "Build proprietary knowledge from repeated customer, market, or operating feedback."
            ]
          },
          {
            "name": "Can run with systems/team",
            "final": 8,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this AI / B2B Automation Company map, Can run with systems/team is a Business attribute. Final target: 80%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Workflow understanding",
            "final": 10,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this AI / B2B Automation Company map, Workflow understanding is a Person attribute. Final target: 100%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "AI literacy",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this AI / B2B Automation Company map, AI literacy is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Product building",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this AI / B2B Automation Company map, Product building is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Customer understanding",
            "final": 9,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this AI / B2B Automation Company map, Customer understanding is a Person attribute. Final target: 90%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "Sales",
            "final": 9,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this AI / B2B Automation Company map, Sales is a Person attribute. Final target: 90%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Marketing / distribution",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this AI / B2B Automation Company map, Marketing / distribution is a Person attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Data/privacy judgement",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this AI / B2B Automation Company map, Data/privacy judgement is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Execution",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this AI / B2B Automation Company map, Execution is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Leadership",
            "final": 8,
            "group": "leadership",
            "meaning": "Leadership means other people, vendors, collaborators, or a future team can produce a standard without you controlling every detail. In this AI / B2B Automation Company map, Leadership is a Person attribute. Final target: 80%.",
            "build": [
              "Define the outcome, owner, standard, and review rhythm.",
              "Delegate small repeatable work before delegating complex judgment.",
              "Review results with metrics and examples instead of taking every task back."
            ]
          },
          {
            "name": "Resilience",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this AI / B2B Automation Company map, Resilience is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          }
        ]
      },
      {
        "name": "Software + Data/API Business",
        "vehicleAttrs": [
          {
            "name": "Recurring/API revenue",
            "final": 9,
            "group": "traction",
            "meaning": "Recurring revenue means customers pay repeatedly because the product remains useful. In SaaS, this is usually tracked as MRR/ARR, churn, expansion, gross margin, and net revenue retention. In this Software + Data/API Business map, Recurring/API revenue is a Business attribute. Final target: 90%.",
            "build": [
              "Sell a narrow paid plan before adding broad features.",
              "Track MRR/ARR, churn, expansion, gross margin, and CAC payback monthly.",
              "Improve onboarding and core workflow until renewal is easier than cancellation."
            ]
          },
          {
            "name": "Scalability",
            "final": 9,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Software + Data/API Business map, Scalability is a Business attribute. Final target: 90%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Data value",
            "final": 10,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this Software + Data/API Business map, Data value is a Business attribute. Final target: 100%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Developer/customer pain",
            "final": 9,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this Software + Data/API Business map, Developer/customer pain is a Business attribute. Final target: 90%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Retention from integration",
            "final": 8,
            "group": "retention",
            "meaning": "Retention means users keep using, paying, renewing, or returning because the product or relationship is embedded in a real workflow. In this Software + Data/API Business map, Retention from integration is a Business attribute. Final target: 80%.",
            "build": [
              "Measure cohort retention and renewal behavior.",
              "Interview retained and churned users separately.",
              "Improve the smallest core workflow that creates the repeat habit."
            ]
          },
          {
            "name": "Developer distribution",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Software + Data/API Business map, Developer distribution is a Business attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Clear monetization",
            "final": 9,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Software + Data/API Business map, Clear monetization is a Business attribute. Final target: 90%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Good unit economics",
            "final": 8,
            "group": "economics",
            "meaning": "Unit economics means one customer, user, transaction, or asset produces enough value after direct costs and acquisition cost to justify scaling. In this Software + Data/API Business map, Good unit economics is a Business attribute. Final target: 80%.",
            "build": [
              "Calculate contribution margin per customer or transaction.",
              "Estimate CAC from real channel tests, not hope.",
              "Do not scale spend until payback and retention are acceptable."
            ]
          },
          {
            "name": "High profit margin",
            "final": 9,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Software + Data/API Business map, High profit margin is a Business attribute. Final target: 90%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Global reach",
            "final": 9,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Software + Data/API Business map, Global reach is a Business attribute. Final target: 90%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Data moat",
            "final": 8,
            "group": "moat",
            "meaning": "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage. In this Software + Data/API Business map, Data moat is a Business attribute. Final target: 80%.",
            "build": [
              "Identify what would still be valuable if a competitor copied the surface feature.",
              "Increase switching costs through workflow integration, trust, data, or community.",
              "Build proprietary knowledge from repeated customer, market, or operating feedback."
            ]
          },
          {
            "name": "Reliability systems",
            "final": 9,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Software + Data/API Business map, Reliability systems is a Business attribute. Final target: 90%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Technical depth",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Software + Data/API Business map, Technical depth is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Data engineering",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Software + Data/API Business map, Data engineering is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Customer understanding",
            "final": 8,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this Software + Data/API Business map, Customer understanding is a Person attribute. Final target: 80%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "API/product design",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Software + Data/API Business map, API/product design is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Developer marketing",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Software + Data/API Business map, Developer marketing is a Person attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Sales",
            "final": 7,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Software + Data/API Business map, Sales is a Person attribute. Final target: 70%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Operational reliability",
            "final": 9,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Software + Data/API Business map, Operational reliability is a Person attribute. Final target: 90%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          },
          {
            "name": "Decision making",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Software + Data/API Business map, Decision making is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Focus",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Software + Data/API Business map, Focus is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Resilience",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Software + Data/API Business map, Resilience is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          }
        ]
      },
      {
        "name": "Marketplace Platform",
        "vehicleAttrs": [
          {
            "name": "Network effects",
            "final": 10,
            "group": "moat",
            "meaning": "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage. In this Marketplace Platform map, Network effects is a Business attribute. Final target: 100%.",
            "build": [
              "Identify what would still be valuable if a competitor copied the surface feature.",
              "Increase switching costs through workflow integration, trust, data, or community.",
              "Build proprietary knowledge from repeated customer, market, or operating feedback."
            ]
          },
          {
            "name": "Scalability",
            "final": 10,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Marketplace Platform map, Scalability is a Business attribute. Final target: 100%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Large market",
            "final": 10,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this Marketplace Platform map, Large market is a Business attribute. Final target: 100%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Painful coordination problem",
            "final": 9,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this Marketplace Platform map, Painful coordination problem is a Business attribute. Final target: 90%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Liquidity / matching",
            "final": 10,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Marketplace Platform map, Liquidity / matching is a Business attribute. Final target: 100%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Retention",
            "final": 8,
            "group": "retention",
            "meaning": "Retention means users keep using, paying, renewing, or returning because the product or relationship is embedded in a real workflow. In this Marketplace Platform map, Retention is a Business attribute. Final target: 80%.",
            "build": [
              "Measure cohort retention and renewal behavior.",
              "Interview retained and churned users separately.",
              "Improve the smallest core workflow that creates the repeat habit."
            ]
          },
          {
            "name": "Take-rate monetization",
            "final": 8,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Marketplace Platform map, Take-rate monetization is a Business attribute. Final target: 80%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Unit economics",
            "final": 7,
            "group": "economics",
            "meaning": "Unit economics means one customer, user, transaction, or asset produces enough value after direct costs and acquisition cost to justify scaling. In this Marketplace Platform map, Unit economics is a Business attribute. Final target: 70%.",
            "build": [
              "Calculate contribution margin per customer or transaction.",
              "Estimate CAC from real channel tests, not hope.",
              "Do not scale spend until payback and retention are acceptable."
            ]
          },
          {
            "name": "Profit margin",
            "final": 7,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Marketplace Platform map, Profit margin is a Business attribute. Final target: 70%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Global/local expansion",
            "final": 9,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Marketplace Platform map, Global/local expansion is a Business attribute. Final target: 90%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Defensibility",
            "final": 9,
            "group": "moat",
            "meaning": "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage. In this Marketplace Platform map, Defensibility is a Business attribute. Final target: 90%.",
            "build": [
              "Identify what would still be valuable if a competitor copied the surface feature.",
              "Increase switching costs through workflow integration, trust, data, or community.",
              "Build proprietary knowledge from repeated customer, market, or operating feedback."
            ]
          },
          {
            "name": "Trust and safety systems",
            "final": 8,
            "group": "systems",
            "meaning": "Trust means words, actions, boundaries, and follow-through are consistent enough that the relationship feels predictable and safe. In this Marketplace Platform map, Trust and safety systems is a Business attribute. Final target: 80%.",
            "build": [
              "Keep small promises and repair missed ones quickly.",
              "Make expectations explicit instead of relying on mind-reading.",
              "Protect confidentiality, respect, and reliability in repeated interactions."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Market selection",
            "final": 10,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this Marketplace Platform map, Market selection is a Person attribute. Final target: 100%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "Supply acquisition",
            "final": 9,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Marketplace Platform map, Supply acquisition is a Person attribute. Final target: 90%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Demand acquisition",
            "final": 9,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Marketplace Platform map, Demand acquisition is a Person attribute. Final target: 90%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Operations",
            "final": 9,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Marketplace Platform map, Operations is a Person attribute. Final target: 90%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          },
          {
            "name": "Product building",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Marketplace Platform map, Product building is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Sales/partnerships",
            "final": 9,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Marketplace Platform map, Sales/partnerships is a Person attribute. Final target: 90%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Execution",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Marketplace Platform map, Execution is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Decision making",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Marketplace Platform map, Decision making is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Leadership",
            "final": 9,
            "group": "leadership",
            "meaning": "Leadership means other people, vendors, collaborators, or a future team can produce a standard without you controlling every detail. In this Marketplace Platform map, Leadership is a Person attribute. Final target: 90%.",
            "build": [
              "Define the outcome, owner, standard, and review rhythm.",
              "Delegate small repeatable work before delegating complex judgment.",
              "Review results with metrics and examples instead of taking every task back."
            ]
          },
          {
            "name": "Resilience",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Marketplace Platform map, Resilience is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          }
        ]
      },
      {
        "name": "Productized Service → Software Company",
        "vehicleAttrs": [
          {
            "name": "Cash-flow base",
            "final": 9,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Productized Service → Software Company map, Cash-flow base is a Business attribute. Final target: 90%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Recurring/repeat customers",
            "final": 7,
            "group": "traction",
            "meaning": "Recurring revenue means customers pay repeatedly because the product remains useful. In SaaS, this is usually tracked as MRR/ARR, churn, expansion, gross margin, and net revenue retention. In this Productized Service → Software Company map, Recurring/repeat customers is a Business attribute. Final target: 70%.",
            "build": [
              "Sell a narrow paid plan before adding broad features.",
              "Track MRR/ARR, churn, expansion, gross margin, and CAC payback monthly.",
              "Improve onboarding and core workflow until renewal is easier than cancellation."
            ]
          },
          {
            "name": "Scalability",
            "final": 7,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Productized Service → Software Company map, Scalability is a Business attribute. Final target: 70%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Clear customer pain",
            "final": 9,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this Productized Service → Software Company map, Clear customer pain is a Business attribute. Final target: 90%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Retention",
            "final": 8,
            "group": "retention",
            "meaning": "Retention means users keep using, paying, renewing, or returning because the product or relationship is embedded in a real workflow. In this Productized Service → Software Company map, Retention is a Business attribute. Final target: 80%.",
            "build": [
              "Measure cohort retention and renewal behavior.",
              "Interview retained and churned users separately.",
              "Improve the smallest core workflow that creates the repeat habit."
            ]
          },
          {
            "name": "Distribution",
            "final": 7,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Productized Service → Software Company map, Distribution is a Business attribute. Final target: 70%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Monetization",
            "final": 8,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Productized Service → Software Company map, Monetization is a Business attribute. Final target: 80%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Unit economics",
            "final": 8,
            "group": "economics",
            "meaning": "Unit economics means one customer, user, transaction, or asset produces enough value after direct costs and acquisition cost to justify scaling. In this Productized Service → Software Company map, Unit economics is a Business attribute. Final target: 80%.",
            "build": [
              "Calculate contribution margin per customer or transaction.",
              "Estimate CAC from real channel tests, not hope.",
              "Do not scale spend until payback and retention are acceptable."
            ]
          },
          {
            "name": "Profit margin before software",
            "final": 6,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Productized Service → Software Company map, Profit margin before software is a Business attribute. Final target: 60%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Global reach",
            "final": 7,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Productized Service → Software Company map, Global reach is a Business attribute. Final target: 70%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Defensibility",
            "final": 6,
            "group": "moat",
            "meaning": "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage. In this Productized Service → Software Company map, Defensibility is a Business attribute. Final target: 60%.",
            "build": [
              "Identify what would still be valuable if a competitor copied the surface feature.",
              "Increase switching costs through workflow integration, trust, data, or community.",
              "Build proprietary knowledge from repeated customer, market, or operating feedback."
            ]
          },
          {
            "name": "Can run with systems/team",
            "final": 8,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Productized Service → Software Company map, Can run with systems/team is a Business attribute. Final target: 80%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Customer understanding",
            "final": 9,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this Productized Service → Software Company map, Customer understanding is a Person attribute. Final target: 90%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "Service delivery",
            "final": 9,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Productized Service → Software Company map, Service delivery is a Person attribute. Final target: 90%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          },
          {
            "name": "Operations",
            "final": 9,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Productized Service → Software Company map, Operations is a Person attribute. Final target: 90%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          },
          {
            "name": "Sales",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Productized Service → Software Company map, Sales is a Person attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Productization",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Productized Service → Software Company map, Productization is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Delegation",
            "final": 8,
            "group": "leadership",
            "meaning": "Leadership means other people, vendors, collaborators, or a future team can produce a standard without you controlling every detail. In this Productized Service → Software Company map, Delegation is a Person attribute. Final target: 80%.",
            "build": [
              "Define the outcome, owner, standard, and review rhythm.",
              "Delegate small repeatable work before delegating complex judgment.",
              "Review results with metrics and examples instead of taking every task back."
            ]
          },
          {
            "name": "Execution",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Productized Service → Software Company map, Execution is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Focus",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Productized Service → Software Company map, Focus is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Decision making",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Productized Service → Software Company map, Decision making is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Resilience",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Productized Service → Software Company map, Resilience is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          }
        ]
      },
      {
        "name": "Internet Holding Company",
        "vehicleAttrs": [
          {
            "name": "Diversified revenue",
            "final": 9,
            "group": "traction",
            "meaning": "Traction means the market has responded with behavior: signups, paid pilots, revenue, usage, renewals, referrals, or asset performance. Interest alone is not traction. In this Internet Holding Company map, Diversified revenue is a Business attribute. Final target: 90%.",
            "build": [
              "Define one conversion event that proves demand.",
              "Track weekly leads, activations, payments, usage, and retention.",
              "Improve the part of the funnel with the largest drop-off before adding more channels."
            ]
          },
          {
            "name": "Scalability",
            "final": 8,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Internet Holding Company map, Scalability is a Business attribute. Final target: 80%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Multiple markets",
            "final": 8,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this Internet Holding Company map, Multiple markets is a Business attribute. Final target: 80%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Asset compounding",
            "final": 9,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Internet Holding Company map, Asset compounding is a Business attribute. Final target: 90%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Retention",
            "final": 7,
            "group": "retention",
            "meaning": "Retention means users keep using, paying, renewing, or returning because the product or relationship is embedded in a real workflow. In this Internet Holding Company map, Retention is a Business attribute. Final target: 70%.",
            "build": [
              "Measure cohort retention and renewal behavior.",
              "Interview retained and churned users separately.",
              "Improve the smallest core workflow that creates the repeat habit."
            ]
          },
          {
            "name": "Distribution portfolio",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Internet Holding Company map, Distribution portfolio is a Business attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Clear monetization",
            "final": 8,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Internet Holding Company map, Clear monetization is a Business attribute. Final target: 80%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Good unit economics",
            "final": 8,
            "group": "economics",
            "meaning": "Unit economics means one customer, user, transaction, or asset produces enough value after direct costs and acquisition cost to justify scaling. In this Internet Holding Company map, Good unit economics is a Business attribute. Final target: 80%.",
            "build": [
              "Calculate contribution margin per customer or transaction.",
              "Estimate CAC from real channel tests, not hope.",
              "Do not scale spend until payback and retention are acceptable."
            ]
          },
          {
            "name": "Profit margin",
            "final": 8,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Internet Holding Company map, Profit margin is a Business attribute. Final target: 80%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Global reach",
            "final": 9,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Internet Holding Company map, Global reach is a Business attribute. Final target: 90%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Defensibility",
            "final": 7,
            "group": "moat",
            "meaning": "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage. In this Internet Holding Company map, Defensibility is a Business attribute. Final target: 70%.",
            "build": [
              "Identify what would still be valuable if a competitor copied the surface feature.",
              "Increase switching costs through workflow integration, trust, data, or community.",
              "Build proprietary knowledge from repeated customer, market, or operating feedback."
            ]
          },
          {
            "name": "Operator systems",
            "final": 9,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Internet Holding Company map, Operator systems is a Business attribute. Final target: 90%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Capital allocation",
            "final": 9,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Internet Holding Company map, Capital allocation is a Person attribute. Final target: 90%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Opportunity selection",
            "final": 9,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this Internet Holding Company map, Opportunity selection is a Person attribute. Final target: 90%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "Technical execution",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Internet Holding Company map, Technical execution is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Marketing / distribution",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Internet Holding Company map, Marketing / distribution is a Person attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Operations",
            "final": 8,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Internet Holding Company map, Operations is a Person attribute. Final target: 80%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          },
          {
            "name": "Hiring/delegation",
            "final": 8,
            "group": "leadership",
            "meaning": "Leadership means other people, vendors, collaborators, or a future team can produce a standard without you controlling every detail. In this Internet Holding Company map, Hiring/delegation is a Person attribute. Final target: 80%.",
            "build": [
              "Define the outcome, owner, standard, and review rhythm.",
              "Delegate small repeatable work before delegating complex judgment.",
              "Review results with metrics and examples instead of taking every task back."
            ]
          },
          {
            "name": "Focus",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Internet Holding Company map, Focus is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Decision making",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Internet Holding Company map, Decision making is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Patience",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Internet Holding Company map, Patience is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Resilience",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Internet Holding Company map, Resilience is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          }
        ]
      },
      {
        "name": "Creator/Media Brand + Products",
        "vehicleAttrs": [
          {
            "name": "Audience trust",
            "final": 10,
            "group": "distribution",
            "meaning": "Trust means words, actions, boundaries, and follow-through are consistent enough that the relationship feels predictable and safe. In this Creator/Media Brand + Products map, Audience trust is a Business attribute. Final target: 100%.",
            "build": [
              "Keep small promises and repair missed ones quickly.",
              "Make expectations explicit instead of relying on mind-reading.",
              "Protect confidentiality, respect, and reliability in repeated interactions."
            ]
          },
          {
            "name": "Distribution",
            "final": 10,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Creator/Media Brand + Products map, Distribution is a Business attribute. Final target: 100%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Scalability",
            "final": 8,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Creator/Media Brand + Products map, Scalability is a Business attribute. Final target: 80%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Large market",
            "final": 9,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this Creator/Media Brand + Products map, Large market is a Business attribute. Final target: 90%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Recurring/community revenue",
            "final": 7,
            "group": "traction",
            "meaning": "Recurring revenue means customers pay repeatedly because the product remains useful. In SaaS, this is usually tracked as MRR/ARR, churn, expansion, gross margin, and net revenue retention. In this Creator/Media Brand + Products map, Recurring/community revenue is a Business attribute. Final target: 70%.",
            "build": [
              "Sell a narrow paid plan before adding broad features.",
              "Track MRR/ARR, churn, expansion, gross margin, and CAC payback monthly.",
              "Improve onboarding and core workflow until renewal is easier than cancellation."
            ]
          },
          {
            "name": "Retention",
            "final": 7,
            "group": "retention",
            "meaning": "Retention means users keep using, paying, renewing, or returning because the product or relationship is embedded in a real workflow. In this Creator/Media Brand + Products map, Retention is a Business attribute. Final target: 70%.",
            "build": [
              "Measure cohort retention and renewal behavior.",
              "Interview retained and churned users separately.",
              "Improve the smallest core workflow that creates the repeat habit."
            ]
          },
          {
            "name": "Clear monetization",
            "final": 8,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Creator/Media Brand + Products map, Clear monetization is a Business attribute. Final target: 80%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Good unit economics",
            "final": 8,
            "group": "economics",
            "meaning": "Unit economics means one customer, user, transaction, or asset produces enough value after direct costs and acquisition cost to justify scaling. In this Creator/Media Brand + Products map, Good unit economics is a Business attribute. Final target: 80%.",
            "build": [
              "Calculate contribution margin per customer or transaction.",
              "Estimate CAC from real channel tests, not hope.",
              "Do not scale spend until payback and retention are acceptable."
            ]
          },
          {
            "name": "Profit margin",
            "final": 8,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Creator/Media Brand + Products map, Profit margin is a Business attribute. Final target: 80%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Global reach",
            "final": 10,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Creator/Media Brand + Products map, Global reach is a Business attribute. Final target: 100%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Defensibility",
            "final": 7,
            "group": "moat",
            "meaning": "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage. In this Creator/Media Brand + Products map, Defensibility is a Business attribute. Final target: 70%.",
            "build": [
              "Identify what would still be valuable if a competitor copied the surface feature.",
              "Increase switching costs through workflow integration, trust, data, or community.",
              "Build proprietary knowledge from repeated customer, market, or operating feedback."
            ]
          },
          {
            "name": "Content/product systems",
            "final": 7,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Creator/Media Brand + Products map, Content/product systems is a Business attribute. Final target: 70%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Storytelling",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Creator/Media Brand + Products map, Storytelling is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Audience understanding",
            "final": 10,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this Creator/Media Brand + Products map, Audience understanding is a Person attribute. Final target: 100%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "Consistency",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Creator/Media Brand + Products map, Consistency is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Marketing",
            "final": 10,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Creator/Media Brand + Products map, Marketing is a Person attribute. Final target: 100%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Product building",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Creator/Media Brand + Products map, Product building is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Sales",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Creator/Media Brand + Products map, Sales is a Person attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Focus",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Creator/Media Brand + Products map, Focus is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Taste",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Creator/Media Brand + Products map, Taste is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Resilience",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Creator/Media Brand + Products map, Resilience is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Leadership/community",
            "final": 8,
            "group": "leadership",
            "meaning": "Leadership means other people, vendors, collaborators, or a future team can produce a standard without you controlling every detail. In this Creator/Media Brand + Products map, Leadership/community is a Person attribute. Final target: 80%.",
            "build": [
              "Define the outcome, owner, standard, and review rhythm.",
              "Delegate small repeatable work before delegating complex judgment.",
              "Review results with metrics and examples instead of taking every task back."
            ]
          }
        ]
      },
      {
        "name": "High-Growth Startup With Equity",
        "vehicleAttrs": [
          {
            "name": "Equity upside",
            "final": 10,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this High-Growth Startup With Equity map, Equity upside is a Business attribute. Final target: 100%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Scalability",
            "final": 10,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this High-Growth Startup With Equity map, Scalability is a Business attribute. Final target: 100%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Large market",
            "final": 10,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this High-Growth Startup With Equity map, Large market is a Business attribute. Final target: 100%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Painful problem",
            "final": 10,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this High-Growth Startup With Equity map, Painful problem is a Business attribute. Final target: 100%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Retention",
            "final": 8,
            "group": "retention",
            "meaning": "Retention means users keep using, paying, renewing, or returning because the product or relationship is embedded in a real workflow. In this High-Growth Startup With Equity map, Retention is a Business attribute. Final target: 80%.",
            "build": [
              "Measure cohort retention and renewal behavior.",
              "Interview retained and churned users separately.",
              "Improve the smallest core workflow that creates the repeat habit."
            ]
          },
          {
            "name": "Distribution",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this High-Growth Startup With Equity map, Distribution is a Business attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Monetization",
            "final": 8,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this High-Growth Startup With Equity map, Monetization is a Business attribute. Final target: 80%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Unit economics",
            "final": 7,
            "group": "economics",
            "meaning": "Unit economics means one customer, user, transaction, or asset produces enough value after direct costs and acquisition cost to justify scaling. In this High-Growth Startup With Equity map, Unit economics is a Business attribute. Final target: 70%.",
            "build": [
              "Calculate contribution margin per customer or transaction.",
              "Estimate CAC from real channel tests, not hope.",
              "Do not scale spend until payback and retention are acceptable."
            ]
          },
          {
            "name": "Profit margin potential",
            "final": 8,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this High-Growth Startup With Equity map, Profit margin potential is a Business attribute. Final target: 80%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Global reach",
            "final": 10,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this High-Growth Startup With Equity map, Global reach is a Business attribute. Final target: 100%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Defensibility",
            "final": 8,
            "group": "moat",
            "meaning": "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage. In this High-Growth Startup With Equity map, Defensibility is a Business attribute. Final target: 80%.",
            "build": [
              "Identify what would still be valuable if a competitor copied the surface feature.",
              "Increase switching costs through workflow integration, trust, data, or community.",
              "Build proprietary knowledge from repeated customer, market, or operating feedback."
            ]
          },
          {
            "name": "Team/system leverage",
            "final": 9,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this High-Growth Startup With Equity map, Team/system leverage is a Business attribute. Final target: 90%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Technical/product ability",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this High-Growth Startup With Equity map, Technical/product ability is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Customer understanding",
            "final": 9,
            "group": "insight",
            "meaning": "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say. In this High-Growth Startup With Equity map, Customer understanding is a Person attribute. Final target: 90%.",
            "build": [
              "Run weekly user or buyer conversations with notes.",
              "Collect exact objections, desired outcomes, and existing workarounds.",
              "Convert the strongest pattern into one testable offer, prototype, or workflow change."
            ]
          },
          {
            "name": "Speed of execution",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this High-Growth Startup With Equity map, Speed of execution is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Fundraising/storytelling",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this High-Growth Startup With Equity map, Fundraising/storytelling is a Person attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Sales",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this High-Growth Startup With Equity map, Sales is a Person attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Leadership",
            "final": 9,
            "group": "leadership",
            "meaning": "Leadership means other people, vendors, collaborators, or a future team can produce a standard without you controlling every detail. In this High-Growth Startup With Equity map, Leadership is a Person attribute. Final target: 90%.",
            "build": [
              "Define the outcome, owner, standard, and review rhythm.",
              "Delegate small repeatable work before delegating complex judgment.",
              "Review results with metrics and examples instead of taking every task back."
            ]
          },
          {
            "name": "Decision making",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this High-Growth Startup With Equity map, Decision making is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Focus",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this High-Growth Startup With Equity map, Focus is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Risk tolerance",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this High-Growth Startup With Equity map, Risk tolerance is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Resilience",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this High-Growth Startup With Equity map, Resilience is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          }
        ]
      },
      {
        "name": "Investment Holding Company",
        "vehicleAttrs": [
          {
            "name": "Capital compounding",
            "final": 10,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Investment Holding Company map, Capital compounding is a Business attribute. Final target: 100%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Diversification",
            "final": 9,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Investment Holding Company map, Diversification is a Business attribute. Final target: 90%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          },
          {
            "name": "Cash-flow assets",
            "final": 8,
            "group": "traction",
            "meaning": "Traction means the market has responded with behavior: signups, paid pilots, revenue, usage, renewals, referrals, or asset performance. Interest alone is not traction. In this Investment Holding Company map, Cash-flow assets is a Business attribute. Final target: 80%.",
            "build": [
              "Define one conversion event that proves demand.",
              "Track weekly leads, activations, payments, usage, and retention.",
              "Improve the part of the funnel with the largest drop-off before adding more channels."
            ]
          },
          {
            "name": "Scalability",
            "final": 7,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Investment Holding Company map, Scalability is a Business attribute. Final target: 70%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Large opportunity universe",
            "final": 9,
            "group": "market",
            "meaning": "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it. In this Investment Holding Company map, Large opportunity universe is a Business attribute. Final target: 90%.",
            "build": [
              "Interview 10-20 people in one narrow segment and record repeated pains.",
              "Find current alternatives, budgets, search behavior, or manual workarounds.",
              "Choose a wedge where the pain is specific enough that people can say yes or no quickly."
            ]
          },
          {
            "name": "Asset durability",
            "final": 8,
            "group": "retention",
            "meaning": "Retention means people keep coming back because the value is embedded in their life, workflow, relationship, or health routine. It is stronger than first-time interest. In this Investment Holding Company map, Asset durability is a Business attribute. Final target: 80%.",
            "build": [
              "Track repeat usage, renewal, attendance, contact, or adherence by cohort.",
              "Ask quitters what broke and active users what would be painful to lose.",
              "Improve the core habit or workflow before adding extra features."
            ]
          },
          {
            "name": "Deal flow",
            "final": 8,
            "group": "distribution",
            "meaning": "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust. In this Investment Holding Company map, Deal flow is a Business attribute. Final target: 80%.",
            "build": [
              "Pick one channel and run it long enough to get a real response rate.",
              "Track outreach volume, replies, meetings, conversion, and cycle time.",
              "Turn winning messages into a repeatable script, page, content format, or referral loop."
            ]
          },
          {
            "name": "Risk-adjusted returns",
            "final": 9,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Investment Holding Company map, Risk-adjusted returns is a Business attribute. Final target: 90%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Low operating margin drag",
            "final": 9,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Investment Holding Company map, Low operating margin drag is a Business attribute. Final target: 90%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Global reach",
            "final": 9,
            "group": "scale",
            "meaning": "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count. In this Investment Holding Company map, Global reach is a Business attribute. Final target: 90%.",
            "build": [
              "Document the repeatable process that creates the result.",
              "Automate, template, or delegate the most repeated work.",
              "Separate work that must stay human from work that can become product, process, or capital leverage."
            ]
          },
          {
            "name": "Defensibility",
            "final": 7,
            "group": "moat",
            "meaning": "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage. In this Investment Holding Company map, Defensibility is a Business attribute. Final target: 70%.",
            "build": [
              "Identify what would still be valuable if a competitor copied the surface feature.",
              "Increase switching costs through workflow integration, trust, data, or community.",
              "Build proprietary knowledge from repeated customer, market, or operating feedback."
            ]
          },
          {
            "name": "Low operational stress",
            "final": 8,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Investment Holding Company map, Low operational stress is a Business attribute. Final target: 80%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Financial literacy",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Investment Holding Company map, Financial literacy is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Patience",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Investment Holding Company map, Patience is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Risk management",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Investment Holding Company map, Risk management is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Capital allocation",
            "final": 10,
            "group": "economics",
            "meaning": "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding. In this Investment Holding Company map, Capital allocation is a Person attribute. Final target: 100%.",
            "build": [
              "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
              "Test willingness to pay before building too much.",
              "Cut offers or work that add complexity without improving margin, retention, or learning."
            ]
          },
          {
            "name": "Emotional control",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Investment Holding Company map, Emotional control is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Long-term thinking",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Investment Holding Company map, Long-term thinking is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Research ability",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Investment Holding Company map, Research ability is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Discipline",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Investment Holding Company map, Discipline is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Understanding valuation",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Investment Holding Company map, Understanding valuation is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Avoiding speculation",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Investment Holding Company map, Avoiding speculation is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "physicalHealth",
    "title": "Physical Health Reverse Map",
    "steps": [
      {
        "label": "End Goal",
        "title": "Your health system is stable, measurable, and supports high energy for years.",
        "factors": {
          "default": 1
        },
        "meaning": "Your health system is stable, measurable, and supports high energy for years. Final state uses evidence-based targets: activity, strength, sleep, nutrition, recovery, and tracking. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Keep a small dashboard for the core outcome and the leading behaviors behind it.",
          "Protect the strongest repeatable system from founder dependence, motivation swings, or relationship drift.",
          "Review the weakest required domain monthly and improve one constraint at a time."
        ]
      },
      {
        "label": "Previous Step 1",
        "title": "The routine has been stable for 12 months with no major relapse.",
        "factors": {
          "cardio": 0.9,
          "strength": 0.9,
          "nutrition": 0.9,
          "sleep": 0.9,
          "recovery": 0.85,
          "tracking": 0.85,
          "medical": 0.75,
          "habit": 0.9,
          "skill": 0.8,
          "default": 0.85
        },
        "meaning": "The routine has been stable for 12 months with no major relapse. You are not relying on motivation. Your environment and habits carry the system. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Start with a sustainable weekly target and increase gradually.",
          "Pick a simple full-body or split routine you can repeat.",
          "Set one food structure you can repeat on normal days.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 2",
        "title": "A 3-month routine is consistent and improving measurable markers.",
        "factors": {
          "cardio": 0.75,
          "strength": 0.75,
          "nutrition": 0.7,
          "sleep": 0.75,
          "recovery": 0.7,
          "tracking": 0.75,
          "medical": 0.55,
          "habit": 0.75,
          "skill": 0.65,
          "default": 0.7
        },
        "meaning": "A 3-month routine is consistent and improving measurable markers. Enough time has passed to see weight, strength, endurance, energy, or sleep trend changes. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Start with a sustainable weekly target and increase gradually.",
          "Pick a simple full-body or split routine you can repeat.",
          "Set a consistent wake time and protect a realistic sleep window.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 3",
        "title": "A weekly routine is working: workouts, food structure, sleep window, and recovery are planned.",
        "factors": {
          "cardio": 0.55,
          "strength": 0.55,
          "nutrition": 0.5,
          "sleep": 0.55,
          "recovery": 0.5,
          "tracking": 0.5,
          "medical": 0.3,
          "habit": 0.55,
          "skill": 0.45,
          "default": 0.5
        },
        "meaning": "A weekly routine is working: workouts, food structure, sleep window, and recovery are planned. This is where health becomes a normal weekly operating system. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Start with a sustainable weekly target and increase gradually.",
          "Pick a simple full-body or split routine you can repeat.",
          "Set a consistent wake time and protect a realistic sleep window.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 4",
        "title": "First 30 days of consistency are completed.",
        "factors": {
          "cardio": 0.35,
          "strength": 0.35,
          "nutrition": 0.35,
          "sleep": 0.35,
          "recovery": 0.3,
          "tracking": 0.35,
          "medical": 0.2,
          "habit": 0.35,
          "skill": 0.28,
          "default": 0.33
        },
        "meaning": "First 30 days of consistency are completed. The main win is proof that you can follow a boring but useful plan. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Start with a sustainable weekly target and increase gradually.",
          "Pick a simple full-body or split routine you can repeat.",
          "Set one food structure you can repeat on normal days.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 5",
        "title": "First 7 days are completed without over-optimizing.",
        "factors": {
          "cardio": 0.18,
          "strength": 0.18,
          "nutrition": 0.18,
          "sleep": 0.18,
          "recovery": 0.15,
          "tracking": 0.2,
          "medical": 0.05,
          "habit": 0.18,
          "skill": 0.12,
          "default": 0.15
        },
        "meaning": "First 7 days are completed without over-optimizing. Only the tiny basics matter: move, sleep, drink water, eat a bit better, track simply. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Choose 1-3 metrics that directly reflect the goal.",
          "Start with a sustainable weekly target and increase gradually.",
          "Pick a simple full-body or split routine you can repeat.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 6",
        "title": "Baseline is measured and the smallest next action is chosen.",
        "factors": {
          "cardio": 0.05,
          "strength": 0.05,
          "nutrition": 0.05,
          "sleep": 0.05,
          "recovery": 0.05,
          "tracking": 0.22,
          "medical": 0.1,
          "habit": 0.08,
          "skill": 0.05,
          "default": 0.05
        },
        "meaning": "Baseline is measured and the smallest next action is chosen. You know your current weight/steps/sleep/activity level and you choose one simple action. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Choose 1-3 metrics that directly reflect the goal.",
          "Handle overdue checkups, dental care, and concerning symptoms.",
          "Make the action small enough to repeat on a bad day.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Absolute Zero",
        "title": "No baseline, no routine, no tracking, no plan.",
        "factors": {
          "default": 0
        },
        "meaning": "No baseline, no routine, no tracking, no plan. Everything starts at 0 here. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Record the honest zero state: no proof, no routine, no sales, no reliable pattern.",
          "Choose one baseline metric and one next action that can be done this week.",
          "Do not rate an area above 0 until there is an observable result."
        ]
      }
    ],
    "paths": [
      {
        "name": "General Health & Energy",
        "vehicleAttrs": [
          {
            "name": "150–300 min/week aerobic activity",
            "final": 10,
            "group": "cardio",
            "meaning": "Cardio strength means your weekly movement supports energy, heart health, and endurance. A real-world anchor is at least 150 minutes/week of moderate activity, or equivalent vigorous activity. In this General Health & Energy map, 150–300 min/week aerobic activity is a Business attribute. Final target: 100%.",
            "build": [
              "Start with a sustainable weekly target and increase gradually.",
              "Use walking, cycling, running, sports, or intervals that you can repeat.",
              "Track minutes, steps, pace, heart rate, or perceived effort weekly."
            ]
          },
          {
            "name": "Strength training 2+ days/week",
            "final": 9,
            "group": "strength",
            "meaning": "Strength means you train major muscle groups progressively and safely. The practical baseline is at least 2 strength-training days per week. In this General Health & Energy map, Strength training 2+ days/week is a Business attribute. Final target: 90%.",
            "build": [
              "Pick a simple full-body or split routine you can repeat.",
              "Progress one variable at a time: reps, load, range of motion, or control.",
              "Keep technique and recovery good enough that training can continue for months."
            ]
          },
          {
            "name": "Sleep consistency",
            "final": 10,
            "group": "sleep",
            "meaning": "Sleep strength means duration, timing, and quality are stable enough to support recovery, decision making, training, and mood. Adults generally need 7 or more hours per night. In this General Health & Energy map, Sleep consistency is a Business attribute. Final target: 100%.",
            "build": [
              "Set a consistent wake time and protect a realistic sleep window.",
              "Reduce late caffeine, heavy late meals, and bright screens when they hurt sleep.",
              "Track sleep duration, wake consistency, energy, and recovery for 2-4 weeks."
            ]
          },
          {
            "name": "Nutrition quality",
            "final": 9,
            "group": "nutrition",
            "meaning": "Nutrition strength means your food pattern supports energy, body composition, training, and health markers. It is measured by consistency, protein/fiber quality, calorie awareness, and adherence. In this General Health & Energy map, Nutrition quality is a Business attribute. Final target: 90%.",
            "build": [
              "Set one food structure you can repeat on normal days.",
              "Prioritize protein, minimally processed foods, hydration, and planned portions.",
              "Use weight, waist, energy, hunger, and workout performance to adjust."
            ]
          },
          {
            "name": "Daily movement / steps",
            "final": 8,
            "group": "cardio",
            "meaning": "Cardio strength means your weekly movement supports energy, heart health, and endurance. A real-world anchor is at least 150 minutes/week of moderate activity, or equivalent vigorous activity. In this General Health & Energy map, Daily movement / steps is a Business attribute. Final target: 80%.",
            "build": [
              "Start with a sustainable weekly target and increase gradually.",
              "Use walking, cycling, running, sports, or intervals that you can repeat.",
              "Track minutes, steps, pace, heart rate, or perceived effort weekly."
            ]
          },
          {
            "name": "Stress recovery",
            "final": 8,
            "group": "recovery",
            "meaning": "Recovery means the system can absorb stress without breaking. It includes rest, deloads, pain signals, stress management, and sustainable pacing. In this General Health & Energy map, Stress recovery is a Business attribute. Final target: 80%.",
            "build": [
              "Schedule lighter days before fatigue forces them.",
              "Track pain, soreness, mood, sleep, and performance drops.",
              "Adjust volume, intensity, or expectations early instead of waiting for relapse or injury."
            ]
          },
          {
            "name": "Simple tracking",
            "final": 8,
            "group": "tracking",
            "meaning": "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend. In this General Health & Energy map, Simple tracking is a Business attribute. Final target: 80%.",
            "build": [
              "Choose 1-3 metrics that directly reflect the goal.",
              "Review them on a fixed weekly cadence.",
              "Make one adjustment at a time so you can tell what worked."
            ]
          },
          {
            "name": "Injury prevention",
            "final": 8,
            "group": "recovery",
            "meaning": "Recovery means the system can absorb stress without breaking. It includes rest, deloads, pain signals, stress management, and sustainable pacing. In this General Health & Energy map, Injury prevention is a Business attribute. Final target: 80%.",
            "build": [
              "Schedule lighter days before fatigue forces them.",
              "Track pain, soreness, mood, sleep, and performance drops.",
              "Adjust volume, intensity, or expectations early instead of waiting for relapse or injury."
            ]
          },
          {
            "name": "Medical/dental checkups",
            "final": 7,
            "group": "medical",
            "meaning": "Medical strength means obvious health risks, checkups, symptoms, dental care, and professional guidance are not ignored. It supports the habit system; it does not replace it. In this General Health & Energy map, Medical/dental checkups is a Business attribute. Final target: 70%.",
            "build": [
              "Handle overdue checkups, dental care, and concerning symptoms.",
              "Use qualified clinicians for pain, medical conditions, or medication questions.",
              "Keep a simple record of key markers and follow-up dates."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Habit consistency",
            "final": 10,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this General Health & Energy map, Habit consistency is a Person attribute. Final target: 100%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Exercise technique",
            "final": 7,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this General Health & Energy map, Exercise technique is a Person attribute. Final target: 70%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Food environment control",
            "final": 8,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this General Health & Energy map, Food environment control is a Person attribute. Final target: 80%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Sleep hygiene",
            "final": 8,
            "group": "habit",
            "meaning": "Sleep strength means duration, timing, and quality are stable enough to support recovery, decision making, training, and mood. Adults generally need 7 or more hours per night. In this General Health & Energy map, Sleep hygiene is a Person attribute. Final target: 80%.",
            "build": [
              "Set a consistent wake time and protect a realistic sleep window.",
              "Reduce late caffeine, heavy late meals, and bright screens when they hurt sleep.",
              "Track sleep duration, wake consistency, energy, and recovery for 2-4 weeks."
            ]
          },
          {
            "name": "Stress management",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this General Health & Energy map, Stress management is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Patience",
            "final": 9,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this General Health & Energy map, Patience is a Person attribute. Final target: 90%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Self-awareness",
            "final": 8,
            "group": "tracking",
            "meaning": "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend. In this General Health & Energy map, Self-awareness is a Person attribute. Final target: 80%.",
            "build": [
              "Choose 1-3 metrics that directly reflect the goal.",
              "Review them on a fixed weekly cadence.",
              "Make one adjustment at a time so you can tell what worked."
            ]
          },
          {
            "name": "Identity discipline",
            "final": 9,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this General Health & Energy map, Identity discipline is a Person attribute. Final target: 90%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          }
        ]
      },
      {
        "name": "Fat Loss / Lean Body Composition",
        "vehicleAttrs": [
          {
            "name": "Calorie awareness",
            "final": 10,
            "group": "nutrition",
            "meaning": "Nutrition strength means your food pattern supports energy, body composition, training, and health markers. It is measured by consistency, protein/fiber quality, calorie awareness, and adherence. In this Fat Loss / Lean Body Composition map, Calorie awareness is a Business attribute. Final target: 100%.",
            "build": [
              "Set one food structure you can repeat on normal days.",
              "Prioritize protein, minimally processed foods, hydration, and planned portions.",
              "Use weight, waist, energy, hunger, and workout performance to adjust."
            ]
          },
          {
            "name": "Protein and food quality",
            "final": 9,
            "group": "nutrition",
            "meaning": "Nutrition strength means your food pattern supports energy, body composition, training, and health markers. It is measured by consistency, protein/fiber quality, calorie awareness, and adherence. In this Fat Loss / Lean Body Composition map, Protein and food quality is a Business attribute. Final target: 90%.",
            "build": [
              "Set one food structure you can repeat on normal days.",
              "Prioritize protein, minimally processed foods, hydration, and planned portions.",
              "Use weight, waist, energy, hunger, and workout performance to adjust."
            ]
          },
          {
            "name": "Strength training",
            "final": 9,
            "group": "strength",
            "meaning": "Strength means you train major muscle groups progressively and safely. The practical baseline is at least 2 strength-training days per week. In this Fat Loss / Lean Body Composition map, Strength training is a Business attribute. Final target: 90%.",
            "build": [
              "Pick a simple full-body or split routine you can repeat.",
              "Progress one variable at a time: reps, load, range of motion, or control.",
              "Keep technique and recovery good enough that training can continue for months."
            ]
          },
          {
            "name": "Cardio / daily movement",
            "final": 8,
            "group": "cardio",
            "meaning": "Cardio strength means your weekly movement supports energy, heart health, and endurance. A real-world anchor is at least 150 minutes/week of moderate activity, or equivalent vigorous activity. In this Fat Loss / Lean Body Composition map, Cardio / daily movement is a Business attribute. Final target: 80%.",
            "build": [
              "Start with a sustainable weekly target and increase gradually.",
              "Use walking, cycling, running, sports, or intervals that you can repeat.",
              "Track minutes, steps, pace, heart rate, or perceived effort weekly."
            ]
          },
          {
            "name": "Sleep consistency",
            "final": 8,
            "group": "sleep",
            "meaning": "Sleep strength means duration, timing, and quality are stable enough to support recovery, decision making, training, and mood. Adults generally need 7 or more hours per night. In this Fat Loss / Lean Body Composition map, Sleep consistency is a Business attribute. Final target: 80%.",
            "build": [
              "Set a consistent wake time and protect a realistic sleep window.",
              "Reduce late caffeine, heavy late meals, and bright screens when they hurt sleep.",
              "Track sleep duration, wake consistency, energy, and recovery for 2-4 weeks."
            ]
          },
          {
            "name": "Weight/waist trend tracking",
            "final": 9,
            "group": "tracking",
            "meaning": "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend. In this Fat Loss / Lean Body Composition map, Weight/waist trend tracking is a Business attribute. Final target: 90%.",
            "build": [
              "Choose 1-3 metrics that directly reflect the goal.",
              "Review them on a fixed weekly cadence.",
              "Make one adjustment at a time so you can tell what worked."
            ]
          },
          {
            "name": "Recovery and hunger management",
            "final": 8,
            "group": "recovery",
            "meaning": "Recovery means the system can absorb stress without breaking. It includes rest, deloads, pain signals, stress management, and sustainable pacing. In this Fat Loss / Lean Body Composition map, Recovery and hunger management is a Business attribute. Final target: 80%.",
            "build": [
              "Schedule lighter days before fatigue forces them.",
              "Track pain, soreness, mood, sleep, and performance drops.",
              "Adjust volume, intensity, or expectations early instead of waiting for relapse or injury."
            ]
          },
          {
            "name": "Relapse prevention system",
            "final": 8,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Fat Loss / Lean Body Composition map, Relapse prevention system is a Business attribute. Final target: 80%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Patience",
            "final": 10,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Fat Loss / Lean Body Composition map, Patience is a Person attribute. Final target: 100%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Food logging skill",
            "final": 8,
            "group": "tracking",
            "meaning": "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend. In this Fat Loss / Lean Body Composition map, Food logging skill is a Person attribute. Final target: 80%.",
            "build": [
              "Choose 1-3 metrics that directly reflect the goal.",
              "Review them on a fixed weekly cadence.",
              "Make one adjustment at a time so you can tell what worked."
            ]
          },
          {
            "name": "Cooking/simple meal planning",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Fat Loss / Lean Body Composition map, Cooking/simple meal planning is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Environment design",
            "final": 9,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Fat Loss / Lean Body Composition map, Environment design is a Person attribute. Final target: 90%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Workout consistency",
            "final": 8,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Fat Loss / Lean Body Composition map, Workout consistency is a Person attribute. Final target: 80%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Emotional eating awareness",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Fat Loss / Lean Body Composition map, Emotional eating awareness is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Decision making",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Fat Loss / Lean Body Composition map, Decision making is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Identity discipline",
            "final": 9,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Fat Loss / Lean Body Composition map, Identity discipline is a Person attribute. Final target: 90%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          }
        ]
      },
      {
        "name": "Strength + Muscle Building",
        "vehicleAttrs": [
          {
            "name": "Progressive overload",
            "final": 10,
            "group": "strength",
            "meaning": "Strength means you train major muscle groups progressively and safely. The practical baseline is at least 2 strength-training days per week. In this Strength + Muscle Building map, Progressive overload is a Business attribute. Final target: 100%.",
            "build": [
              "Pick a simple full-body or split routine you can repeat.",
              "Progress one variable at a time: reps, load, range of motion, or control.",
              "Keep technique and recovery good enough that training can continue for months."
            ]
          },
          {
            "name": "Strength training consistency",
            "final": 10,
            "group": "strength",
            "meaning": "Strength means you train major muscle groups progressively and safely. The practical baseline is at least 2 strength-training days per week. In this Strength + Muscle Building map, Strength training consistency is a Business attribute. Final target: 100%.",
            "build": [
              "Pick a simple full-body or split routine you can repeat.",
              "Progress one variable at a time: reps, load, range of motion, or control.",
              "Keep technique and recovery good enough that training can continue for months."
            ]
          },
          {
            "name": "Protein/energy intake",
            "final": 9,
            "group": "nutrition",
            "meaning": "Nutrition strength means your food pattern supports energy, body composition, training, and health markers. It is measured by consistency, protein/fiber quality, calorie awareness, and adherence. In this Strength + Muscle Building map, Protein/energy intake is a Business attribute. Final target: 90%.",
            "build": [
              "Set one food structure you can repeat on normal days.",
              "Prioritize protein, minimally processed foods, hydration, and planned portions.",
              "Use weight, waist, energy, hunger, and workout performance to adjust."
            ]
          },
          {
            "name": "Sleep/recovery",
            "final": 9,
            "group": "sleep",
            "meaning": "Sleep strength means duration, timing, and quality are stable enough to support recovery, decision making, training, and mood. Adults generally need 7 or more hours per night. In this Strength + Muscle Building map, Sleep/recovery is a Business attribute. Final target: 90%.",
            "build": [
              "Set a consistent wake time and protect a realistic sleep window.",
              "Reduce late caffeine, heavy late meals, and bright screens when they hurt sleep.",
              "Track sleep duration, wake consistency, energy, and recovery for 2-4 weeks."
            ]
          },
          {
            "name": "Technique safety",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Strength + Muscle Building map, Technique safety is a Business attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Workout tracking",
            "final": 8,
            "group": "tracking",
            "meaning": "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend. In this Strength + Muscle Building map, Workout tracking is a Business attribute. Final target: 80%.",
            "build": [
              "Choose 1-3 metrics that directly reflect the goal.",
              "Review them on a fixed weekly cadence.",
              "Make one adjustment at a time so you can tell what worked."
            ]
          },
          {
            "name": "Mobility/injury prevention",
            "final": 8,
            "group": "recovery",
            "meaning": "Recovery means the system can absorb stress without breaking. It includes rest, deloads, pain signals, stress management, and sustainable pacing. In this Strength + Muscle Building map, Mobility/injury prevention is a Business attribute. Final target: 80%.",
            "build": [
              "Schedule lighter days before fatigue forces them.",
              "Track pain, soreness, mood, sleep, and performance drops.",
              "Adjust volume, intensity, or expectations early instead of waiting for relapse or injury."
            ]
          },
          {
            "name": "Long-term program structure",
            "final": 8,
            "group": "systems",
            "meaning": "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior. In this Strength + Muscle Building map, Long-term program structure is a Business attribute. Final target: 80%.",
            "build": [
              "Create a weekly review with the few numbers or behaviors that matter.",
              "Turn repeated work into checklists, templates, automations, or delegated roles.",
              "Remove points where success depends on remembering or feeling motivated."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Technique learning",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Strength + Muscle Building map, Technique learning is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Consistency",
            "final": 10,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Strength + Muscle Building map, Consistency is a Person attribute. Final target: 100%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Patience",
            "final": 10,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Strength + Muscle Building map, Patience is a Person attribute. Final target: 100%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Recovery discipline",
            "final": 8,
            "group": "recovery",
            "meaning": "Recovery means the system can absorb stress without breaking. It includes rest, deloads, pain signals, stress management, and sustainable pacing. In this Strength + Muscle Building map, Recovery discipline is a Person attribute. Final target: 80%.",
            "build": [
              "Schedule lighter days before fatigue forces them.",
              "Track pain, soreness, mood, sleep, and performance drops.",
              "Adjust volume, intensity, or expectations early instead of waiting for relapse or injury."
            ]
          },
          {
            "name": "Nutrition discipline",
            "final": 8,
            "group": "nutrition",
            "meaning": "Nutrition strength means your food pattern supports energy, body composition, training, and health markers. It is measured by consistency, protein/fiber quality, calorie awareness, and adherence. In this Strength + Muscle Building map, Nutrition discipline is a Person attribute. Final target: 80%.",
            "build": [
              "Set one food structure you can repeat on normal days.",
              "Prioritize protein, minimally processed foods, hydration, and planned portions.",
              "Use weight, waist, energy, hunger, and workout performance to adjust."
            ]
          },
          {
            "name": "Tracking honesty",
            "final": 8,
            "group": "tracking",
            "meaning": "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend. In this Strength + Muscle Building map, Tracking honesty is a Person attribute. Final target: 80%.",
            "build": [
              "Choose 1-3 metrics that directly reflect the goal.",
              "Review them on a fixed weekly cadence.",
              "Make one adjustment at a time so you can tell what worked."
            ]
          },
          {
            "name": "Focus",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Strength + Muscle Building map, Focus is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Resilience",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Strength + Muscle Building map, Resilience is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          }
        ]
      },
      {
        "name": "Cardio Endurance / Heart Health",
        "vehicleAttrs": [
          {
            "name": "Weekly aerobic volume",
            "final": 10,
            "group": "cardio",
            "meaning": "Cardio strength means your weekly movement supports energy, heart health, and endurance. A real-world anchor is at least 150 minutes/week of moderate activity, or equivalent vigorous activity. In this Cardio Endurance / Heart Health map, Weekly aerobic volume is a Business attribute. Final target: 100%.",
            "build": [
              "Start with a sustainable weekly target and increase gradually.",
              "Use walking, cycling, running, sports, or intervals that you can repeat.",
              "Track minutes, steps, pace, heart rate, or perceived effort weekly."
            ]
          },
          {
            "name": "Gradual intensity progression",
            "final": 9,
            "group": "cardio",
            "meaning": "Cardio strength means your weekly movement supports energy, heart health, and endurance. A real-world anchor is at least 150 minutes/week of moderate activity, or equivalent vigorous activity. In this Cardio Endurance / Heart Health map, Gradual intensity progression is a Business attribute. Final target: 90%.",
            "build": [
              "Start with a sustainable weekly target and increase gradually.",
              "Use walking, cycling, running, sports, or intervals that you can repeat.",
              "Track minutes, steps, pace, heart rate, or perceived effort weekly."
            ]
          },
          {
            "name": "Consistency",
            "final": 10,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Cardio Endurance / Heart Health map, Consistency is a Business attribute. Final target: 100%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Recovery/sleep",
            "final": 8,
            "group": "sleep",
            "meaning": "Sleep strength means duration, timing, and quality are stable enough to support recovery, decision making, training, and mood. Adults generally need 7 or more hours per night. In this Cardio Endurance / Heart Health map, Recovery/sleep is a Business attribute. Final target: 80%.",
            "build": [
              "Set a consistent wake time and protect a realistic sleep window.",
              "Reduce late caffeine, heavy late meals, and bright screens when they hurt sleep.",
              "Track sleep duration, wake consistency, energy, and recovery for 2-4 weeks."
            ]
          },
          {
            "name": "Low sedentary time",
            "final": 8,
            "group": "cardio",
            "meaning": "Cardio strength means your weekly movement supports energy, heart health, and endurance. A real-world anchor is at least 150 minutes/week of moderate activity, or equivalent vigorous activity. In this Cardio Endurance / Heart Health map, Low sedentary time is a Business attribute. Final target: 80%.",
            "build": [
              "Start with a sustainable weekly target and increase gradually.",
              "Use walking, cycling, running, sports, or intervals that you can repeat.",
              "Track minutes, steps, pace, heart rate, or perceived effort weekly."
            ]
          },
          {
            "name": "Heart-rate or pace tracking",
            "final": 8,
            "group": "tracking",
            "meaning": "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend. In this Cardio Endurance / Heart Health map, Heart-rate or pace tracking is a Business attribute. Final target: 80%.",
            "build": [
              "Choose 1-3 metrics that directly reflect the goal.",
              "Review them on a fixed weekly cadence.",
              "Make one adjustment at a time so you can tell what worked."
            ]
          },
          {
            "name": "Injury prevention",
            "final": 8,
            "group": "recovery",
            "meaning": "Recovery means the system can absorb stress without breaking. It includes rest, deloads, pain signals, stress management, and sustainable pacing. In this Cardio Endurance / Heart Health map, Injury prevention is a Business attribute. Final target: 80%.",
            "build": [
              "Schedule lighter days before fatigue forces them.",
              "Track pain, soreness, mood, sleep, and performance drops.",
              "Adjust volume, intensity, or expectations early instead of waiting for relapse or injury."
            ]
          },
          {
            "name": "Nutrition support",
            "final": 7,
            "group": "nutrition",
            "meaning": "Nutrition strength means your food pattern supports energy, body composition, training, and health markers. It is measured by consistency, protein/fiber quality, calorie awareness, and adherence. In this Cardio Endurance / Heart Health map, Nutrition support is a Business attribute. Final target: 70%.",
            "build": [
              "Set one food structure you can repeat on normal days.",
              "Prioritize protein, minimally processed foods, hydration, and planned portions.",
              "Use weight, waist, energy, hunger, and workout performance to adjust."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Pacing discipline",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Cardio Endurance / Heart Health map, Pacing discipline is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Habit consistency",
            "final": 10,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Cardio Endurance / Heart Health map, Habit consistency is a Person attribute. Final target: 100%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Patience",
            "final": 9,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Cardio Endurance / Heart Health map, Patience is a Person attribute. Final target: 90%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Body-signal awareness",
            "final": 8,
            "group": "tracking",
            "meaning": "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend. In this Cardio Endurance / Heart Health map, Body-signal awareness is a Person attribute. Final target: 80%.",
            "build": [
              "Choose 1-3 metrics that directly reflect the goal.",
              "Review them on a fixed weekly cadence.",
              "Make one adjustment at a time so you can tell what worked."
            ]
          },
          {
            "name": "Stress management",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Cardio Endurance / Heart Health map, Stress management is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Sleep hygiene",
            "final": 8,
            "group": "habit",
            "meaning": "Sleep strength means duration, timing, and quality are stable enough to support recovery, decision making, training, and mood. Adults generally need 7 or more hours per night. In this Cardio Endurance / Heart Health map, Sleep hygiene is a Person attribute. Final target: 80%.",
            "build": [
              "Set a consistent wake time and protect a realistic sleep window.",
              "Reduce late caffeine, heavy late meals, and bright screens when they hurt sleep.",
              "Track sleep duration, wake consistency, energy, and recovery for 2-4 weeks."
            ]
          },
          {
            "name": "Resilience",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Cardio Endurance / Heart Health map, Resilience is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Decision making",
            "final": 7,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Cardio Endurance / Heart Health map, Decision making is a Person attribute. Final target: 70%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          }
        ]
      },
      {
        "name": "Mobility + Injury Prevention",
        "vehicleAttrs": [
          {
            "name": "Joint range of motion",
            "final": 8,
            "group": "recovery",
            "meaning": "Recovery means the system can absorb stress without breaking. It includes rest, deloads, pain signals, stress management, and sustainable pacing. In this Mobility + Injury Prevention map, Joint range of motion is a Business attribute. Final target: 80%.",
            "build": [
              "Schedule lighter days before fatigue forces them.",
              "Track pain, soreness, mood, sleep, and performance drops.",
              "Adjust volume, intensity, or expectations early instead of waiting for relapse or injury."
            ]
          },
          {
            "name": "Strength balance",
            "final": 8,
            "group": "strength",
            "meaning": "Strength means you train major muscle groups progressively and safely. The practical baseline is at least 2 strength-training days per week. In this Mobility + Injury Prevention map, Strength balance is a Business attribute. Final target: 80%.",
            "build": [
              "Pick a simple full-body or split routine you can repeat.",
              "Progress one variable at a time: reps, load, range of motion, or control.",
              "Keep technique and recovery good enough that training can continue for months."
            ]
          },
          {
            "name": "Warm-up/cool-down habit",
            "final": 8,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Mobility + Injury Prevention map, Warm-up/cool-down habit is a Business attribute. Final target: 80%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Technique quality",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Mobility + Injury Prevention map, Technique quality is a Business attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Pain/injury tracking",
            "final": 8,
            "group": "tracking",
            "meaning": "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend. In this Mobility + Injury Prevention map, Pain/injury tracking is a Business attribute. Final target: 80%.",
            "build": [
              "Choose 1-3 metrics that directly reflect the goal.",
              "Review them on a fixed weekly cadence.",
              "Make one adjustment at a time so you can tell what worked."
            ]
          },
          {
            "name": "Recovery practices",
            "final": 8,
            "group": "recovery",
            "meaning": "Recovery means the system can absorb stress without breaking. It includes rest, deloads, pain signals, stress management, and sustainable pacing. In this Mobility + Injury Prevention map, Recovery practices is a Business attribute. Final target: 80%.",
            "build": [
              "Schedule lighter days before fatigue forces them.",
              "Track pain, soreness, mood, sleep, and performance drops.",
              "Adjust volume, intensity, or expectations early instead of waiting for relapse or injury."
            ]
          },
          {
            "name": "Professional help when needed",
            "final": 7,
            "group": "medical",
            "meaning": "Medical strength means obvious health risks, checkups, symptoms, dental care, and professional guidance are not ignored. It supports the habit system; it does not replace it. In this Mobility + Injury Prevention map, Professional help when needed is a Business attribute. Final target: 70%.",
            "build": [
              "Handle overdue checkups, dental care, and concerning symptoms.",
              "Use qualified clinicians for pain, medical conditions, or medication questions.",
              "Keep a simple record of key markers and follow-up dates."
            ]
          },
          {
            "name": "Consistency",
            "final": 8,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Mobility + Injury Prevention map, Consistency is a Business attribute. Final target: 80%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Body awareness",
            "final": 9,
            "group": "tracking",
            "meaning": "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend. In this Mobility + Injury Prevention map, Body awareness is a Person attribute. Final target: 90%.",
            "build": [
              "Choose 1-3 metrics that directly reflect the goal.",
              "Review them on a fixed weekly cadence.",
              "Make one adjustment at a time so you can tell what worked."
            ]
          },
          {
            "name": "Patience",
            "final": 9,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Mobility + Injury Prevention map, Patience is a Person attribute. Final target: 90%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Technique learning",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Mobility + Injury Prevention map, Technique learning is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Ego control",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Mobility + Injury Prevention map, Ego control is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Consistency",
            "final": 8,
            "group": "habit",
            "meaning": "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action. In this Mobility + Injury Prevention map, Consistency is a Person attribute. Final target: 80%.",
            "build": [
              "Make the action small enough to repeat on a bad day.",
              "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
              "Design the environment so the desired action is easier than the old default."
            ]
          },
          {
            "name": "Recovery discipline",
            "final": 8,
            "group": "recovery",
            "meaning": "Recovery means the system can absorb stress without breaking. It includes rest, deloads, pain signals, stress management, and sustainable pacing. In this Mobility + Injury Prevention map, Recovery discipline is a Person attribute. Final target: 80%.",
            "build": [
              "Schedule lighter days before fatigue forces them.",
              "Track pain, soreness, mood, sleep, and performance drops.",
              "Adjust volume, intensity, or expectations early instead of waiting for relapse or injury."
            ]
          },
          {
            "name": "Decision making",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Mobility + Injury Prevention map, Decision making is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Self-awareness",
            "final": 8,
            "group": "tracking",
            "meaning": "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend. In this Mobility + Injury Prevention map, Self-awareness is a Person attribute. Final target: 80%.",
            "build": [
              "Choose 1-3 metrics that directly reflect the goal.",
              "Review them on a fixed weekly cadence.",
              "Make one adjustment at a time so you can tell what worked."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "relationship",
    "title": "Relationship Reverse Map",
    "steps": [
      {
        "label": "End Goal",
        "title": "A healthy, safe, stable relationship system exists and is maintained intentionally.",
        "factors": {
          "default": 1
        },
        "meaning": "A healthy, safe, stable relationship system exists and is maintained intentionally. Final state means trust, communication, repair, time, and boundaries are consistently practiced. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Keep a small dashboard for the core outcome and the leading behaviors behind it.",
          "Protect the strongest repeatable system from founder dependence, motivation swings, or relationship drift.",
          "Review the weakest required domain monthly and improve one constraint at a time."
        ]
      },
      {
        "label": "Previous Step 1",
        "title": "Long-term trust is maintained through reliability, respect, and regular positive connection.",
        "factors": {
          "trust": 0.9,
          "communication": 0.88,
          "repair": 0.85,
          "values": 0.85,
          "time": 0.88,
          "safety": 0.9,
          "boundary": 0.85,
          "reliability": 0.9,
          "skill": 0.85,
          "empathy": 0.88,
          "default": 0.87
        },
        "meaning": "Long-term trust is maintained through reliability, respect, and regular positive connection. The relationship is not perfect, but the pattern is safe and stable. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Keep small promises and repair missed ones quickly.",
          "Remove contempt, threats, manipulation, and pressure from hard conversations.",
          "Make fewer promises and keep them more often.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 2",
        "title": "Conflict can be repaired without contempt, defensiveness, or silent damage.",
        "factors": {
          "trust": 0.75,
          "communication": 0.78,
          "repair": 0.85,
          "values": 0.7,
          "time": 0.68,
          "safety": 0.75,
          "boundary": 0.75,
          "reliability": 0.75,
          "skill": 0.72,
          "empathy": 0.78,
          "default": 0.74
        },
        "meaning": "Conflict can be repaired without contempt, defensiveness, or silent damage. Repair matters because all close relationships have conflict. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Name the rupture quickly and calmly.",
          "Use specific observations and requests instead of global blame.",
          "Reflect what you heard before giving advice.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 3",
        "title": "Regular quality time and honest communication are happening.",
        "factors": {
          "trust": 0.55,
          "communication": 0.6,
          "repair": 0.45,
          "values": 0.55,
          "time": 0.65,
          "safety": 0.55,
          "boundary": 0.5,
          "reliability": 0.55,
          "skill": 0.5,
          "empathy": 0.55,
          "default": 0.55
        },
        "meaning": "Regular quality time and honest communication are happening. Connection is repeated, not accidental. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Schedule recurring time before the week fills up.",
          "Use specific observations and requests instead of global blame.",
          "Keep small promises and repair missed ones quickly.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 4",
        "title": "The first honest conversations and small acts of care begin.",
        "factors": {
          "trust": 0.38,
          "communication": 0.42,
          "repair": 0.25,
          "values": 0.35,
          "time": 0.35,
          "safety": 0.38,
          "boundary": 0.35,
          "reliability": 0.38,
          "skill": 0.32,
          "empathy": 0.38,
          "default": 0.36
        },
        "meaning": "The first honest conversations and small acts of care begin. This is still early. You are creating signals of trust and respect. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Use specific observations and requests instead of global blame.",
          "Keep small promises and repair missed ones quickly.",
          "Remove contempt, threats, manipulation, and pressure from hard conversations.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 5",
        "title": "A basic contact/follow-up habit exists.",
        "factors": {
          "trust": 0.18,
          "communication": 0.22,
          "repair": 0.08,
          "values": 0.15,
          "time": 0.2,
          "safety": 0.18,
          "boundary": 0.18,
          "reliability": 0.22,
          "skill": 0.18,
          "empathy": 0.2,
          "default": 0.18
        },
        "meaning": "A basic contact/follow-up habit exists. The relationship is not deep yet. The only real proof is repeated respectful contact. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Use specific observations and requests instead of global blame.",
          "Make fewer promises and keep them more often.",
          "Schedule recurring time before the week fills up.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Previous Step 6",
        "title": "You identify the people, standards, and kind of relationship you want to build.",
        "factors": {
          "trust": 0.03,
          "communication": 0.06,
          "repair": 0.02,
          "values": 0.18,
          "time": 0.05,
          "safety": 0.08,
          "boundary": 0.12,
          "reliability": 0.04,
          "skill": 0.08,
          "empathy": 0.08,
          "default": 0.06
        },
        "meaning": "You identify the people, standards, and kind of relationship you want to build. This is awareness and intention, not relationship strength yet. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Prove this stage with an observable result before trying to jump to the next level.",
          "Write the non-negotiables, preferences, and open questions.",
          "State the limit, reason, and consequence plainly.",
          "Remove contempt, threats, manipulation, and pressure from hard conversations.",
          "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days."
        ]
      },
      {
        "label": "Absolute Zero",
        "title": "No intention, no contact habit, no trust, no communication system.",
        "factors": {
          "default": 0
        },
        "meaning": "No intention, no contact habit, no trust, no communication system. Everything starts at 0 here. Use real behavior, numbers, or repeated action to confirm this stage.",
        "build": [
          "Record the honest zero state: no proof, no routine, no sales, no reliable pattern.",
          "Choose one baseline metric and one next action that can be done this week.",
          "Do not rate an area above 0 until there is an observable result."
        ]
      }
    ],
    "paths": [
      {
        "name": "Romantic Relationship",
        "vehicleAttrs": [
          {
            "name": "Trust",
            "final": 10,
            "group": "trust",
            "meaning": "Trust means words, actions, boundaries, and follow-through are consistent enough that the relationship feels predictable and safe. In this Romantic Relationship map, Trust is a Business attribute. Final target: 100%.",
            "build": [
              "Keep small promises and repair missed ones quickly.",
              "Make expectations explicit instead of relying on mind-reading.",
              "Protect confidentiality, respect, and reliability in repeated interactions."
            ]
          },
          {
            "name": "Positive-to-negative interaction balance",
            "final": 10,
            "group": "communication",
            "meaning": "Positive-to-negative interaction balance measures whether appreciation, respect, repair, and warmth outweigh criticism or hurt. Gottman research commonly references a 5:1 positive-to-negative ratio during conflict. In this Romantic Relationship map, Positive-to-negative interaction balance is a Business attribute. Final target: 100%.",
            "build": [
              "Add daily appreciation and small bids for connection.",
              "During conflict, remove contempt, name-calling, eye-rolling, and global blame.",
              "Repair after hard conversations with ownership and one specific next behavior."
            ]
          },
          {
            "name": "Communication quality",
            "final": 10,
            "group": "communication",
            "meaning": "Communication quality means people can share needs, limits, appreciation, and problems without the pattern becoming contempt, defensiveness, stonewalling, or avoidance. In this Romantic Relationship map, Communication quality is a Business attribute. Final target: 100%.",
            "build": [
              "Use specific observations and requests instead of global blame.",
              "Add regular appreciation, check-ins, and clarification questions.",
              "Slow conflict down enough that both people can understand the issue and the impact."
            ]
          },
          {
            "name": "Conflict repair",
            "final": 10,
            "group": "repair",
            "meaning": "Repair means conflict does not leave silent damage. The relationship can acknowledge impact, take responsibility, and return to respectful connection. In this Romantic Relationship map, Conflict repair is a Business attribute. Final target: 100%.",
            "build": [
              "Name the rupture quickly and calmly.",
              "Own your part without turning it into a counterattack.",
              "Agree on one behavior that changes next time and revisit it later."
            ]
          },
          {
            "name": "Shared values/goals",
            "final": 9,
            "group": "values",
            "meaning": "Values means expectations, priorities, and standards are compatible enough that the relationship or path is not constantly fighting its own direction. In this Romantic Relationship map, Shared values/goals is a Business attribute. Final target: 90%.",
            "build": [
              "Write the non-negotiables, preferences, and open questions.",
              "Discuss expectations for time, money, work, family, health, or commitment.",
              "Look for behavior alignment, not only stated agreement."
            ]
          },
          {
            "name": "Quality time",
            "final": 9,
            "group": "time",
            "meaning": "Time means connection has protected space on the calendar. Relationships and health systems weaken when they depend only on leftovers. In this Romantic Relationship map, Quality time is a Business attribute. Final target: 90%.",
            "build": [
              "Schedule recurring time before the week fills up.",
              "Protect some phone-free or distraction-light interaction.",
              "Use small frequent contact when big blocks of time are unrealistic."
            ]
          },
          {
            "name": "Emotional safety",
            "final": 10,
            "group": "safety",
            "meaning": "Safety means people can be honest without fear, humiliation, coercion, or repeated punishment. It includes emotional and practical boundaries. In this Romantic Relationship map, Emotional safety is a Business attribute. Final target: 100%.",
            "build": [
              "Remove contempt, threats, manipulation, and pressure from hard conversations.",
              "Make it safe to say no, pause, or ask for clarity.",
              "Get outside support when the pattern involves fear, control, or harm."
            ]
          },
          {
            "name": "Boundaries",
            "final": 9,
            "group": "boundary",
            "meaning": "Boundaries mean limits are clear, respected, and enforceable. They protect connection by reducing resentment and hidden pressure. In this Romantic Relationship map, Boundaries is a Business attribute. Final target: 90%.",
            "build": [
              "State the limit, reason, and consequence plainly.",
              "Practice small boundaries before crisis boundaries.",
              "Track whether people respect the boundary in behavior, not only words."
            ]
          },
          {
            "name": "Reliability",
            "final": 10,
            "group": "reliability",
            "meaning": "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior. In this Romantic Relationship map, Reliability is a Business attribute. Final target: 100%.",
            "build": [
              "Make fewer promises and keep them more often.",
              "Use reminders, calendars, and written commitments.",
              "Repair misses quickly with ownership and a changed system."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Listening",
            "final": 10,
            "group": "empathy",
            "meaning": "Empathy means you can understand another person's experience accurately enough that they feel heard, not managed or argued with. In this Romantic Relationship map, Listening is a Person attribute. Final target: 100%.",
            "build": [
              "Reflect what you heard before giving advice.",
              "Ask what the other person needs: listening, help, space, or a decision.",
              "Check whether your interpretation matches their actual experience."
            ]
          },
          {
            "name": "Empathy",
            "final": 10,
            "group": "empathy",
            "meaning": "Empathy means you can understand another person's experience accurately enough that they feel heard, not managed or argued with. In this Romantic Relationship map, Empathy is a Person attribute. Final target: 100%.",
            "build": [
              "Reflect what you heard before giving advice.",
              "Ask what the other person needs: listening, help, space, or a decision.",
              "Check whether your interpretation matches their actual experience."
            ]
          },
          {
            "name": "Honesty",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Romantic Relationship map, Honesty is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Emotional regulation",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Romantic Relationship map, Emotional regulation is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Patience",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Romantic Relationship map, Patience is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Respect",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Romantic Relationship map, Respect is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Vulnerability/courage",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Romantic Relationship map, Vulnerability/courage is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Consistency",
            "final": 10,
            "group": "reliability",
            "meaning": "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior. In this Romantic Relationship map, Consistency is a Person attribute. Final target: 100%.",
            "build": [
              "Make fewer promises and keep them more often.",
              "Use reminders, calendars, and written commitments.",
              "Repair misses quickly with ownership and a changed system."
            ]
          }
        ]
      },
      {
        "name": "Family Relationship",
        "vehicleAttrs": [
          {
            "name": "Trust",
            "final": 9,
            "group": "trust",
            "meaning": "Trust means words, actions, boundaries, and follow-through are consistent enough that the relationship feels predictable and safe. In this Family Relationship map, Trust is a Business attribute. Final target: 90%.",
            "build": [
              "Keep small promises and repair missed ones quickly.",
              "Make expectations explicit instead of relying on mind-reading.",
              "Protect confidentiality, respect, and reliability in repeated interactions."
            ]
          },
          {
            "name": "Respectful communication",
            "final": 9,
            "group": "communication",
            "meaning": "Communication quality means people can share needs, limits, appreciation, and problems without the pattern becoming contempt, defensiveness, stonewalling, or avoidance. In this Family Relationship map, Respectful communication is a Business attribute. Final target: 90%.",
            "build": [
              "Use specific observations and requests instead of global blame.",
              "Add regular appreciation, check-ins, and clarification questions.",
              "Slow conflict down enough that both people can understand the issue and the impact."
            ]
          },
          {
            "name": "Conflict repair",
            "final": 8,
            "group": "repair",
            "meaning": "Repair means conflict does not leave silent damage. The relationship can acknowledge impact, take responsibility, and return to respectful connection. In this Family Relationship map, Conflict repair is a Business attribute. Final target: 80%.",
            "build": [
              "Name the rupture quickly and calmly.",
              "Own your part without turning it into a counterattack.",
              "Agree on one behavior that changes next time and revisit it later."
            ]
          },
          {
            "name": "Family responsibility",
            "final": 9,
            "group": "reliability",
            "meaning": "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior. In this Family Relationship map, Family responsibility is a Business attribute. Final target: 90%.",
            "build": [
              "Make fewer promises and keep them more often.",
              "Use reminders, calendars, and written commitments.",
              "Repair misses quickly with ownership and a changed system."
            ]
          },
          {
            "name": "Quality time",
            "final": 8,
            "group": "time",
            "meaning": "Time means connection has protected space on the calendar. Relationships and health systems weaken when they depend only on leftovers. In this Family Relationship map, Quality time is a Business attribute. Final target: 80%.",
            "build": [
              "Schedule recurring time before the week fills up.",
              "Protect some phone-free or distraction-light interaction.",
              "Use small frequent contact when big blocks of time are unrealistic."
            ]
          },
          {
            "name": "Boundaries",
            "final": 10,
            "group": "boundary",
            "meaning": "Boundaries mean limits are clear, respected, and enforceable. They protect connection by reducing resentment and hidden pressure. In this Family Relationship map, Boundaries is a Business attribute. Final target: 100%.",
            "build": [
              "State the limit, reason, and consequence plainly.",
              "Practice small boundaries before crisis boundaries.",
              "Track whether people respect the boundary in behavior, not only words."
            ]
          },
          {
            "name": "Emotional safety",
            "final": 8,
            "group": "safety",
            "meaning": "Safety means people can be honest without fear, humiliation, coercion, or repeated punishment. It includes emotional and practical boundaries. In this Family Relationship map, Emotional safety is a Business attribute. Final target: 80%.",
            "build": [
              "Remove contempt, threats, manipulation, and pressure from hard conversations.",
              "Make it safe to say no, pause, or ask for clarity.",
              "Get outside support when the pattern involves fear, control, or harm."
            ]
          },
          {
            "name": "Shared expectations",
            "final": 8,
            "group": "values",
            "meaning": "Values means expectations, priorities, and standards are compatible enough that the relationship or path is not constantly fighting its own direction. In this Family Relationship map, Shared expectations is a Business attribute. Final target: 80%.",
            "build": [
              "Write the non-negotiables, preferences, and open questions.",
              "Discuss expectations for time, money, work, family, health, or commitment.",
              "Look for behavior alignment, not only stated agreement."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Listening",
            "final": 9,
            "group": "empathy",
            "meaning": "Empathy means you can understand another person's experience accurately enough that they feel heard, not managed or argued with. In this Family Relationship map, Listening is a Person attribute. Final target: 90%.",
            "build": [
              "Reflect what you heard before giving advice.",
              "Ask what the other person needs: listening, help, space, or a decision.",
              "Check whether your interpretation matches their actual experience."
            ]
          },
          {
            "name": "Patience",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Family Relationship map, Patience is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Emotional regulation",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Family Relationship map, Emotional regulation is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Boundary-setting",
            "final": 10,
            "group": "boundary",
            "meaning": "Boundaries mean limits are clear, respected, and enforceable. They protect connection by reducing resentment and hidden pressure. In this Family Relationship map, Boundary-setting is a Person attribute. Final target: 100%.",
            "build": [
              "State the limit, reason, and consequence plainly.",
              "Practice small boundaries before crisis boundaries.",
              "Track whether people respect the boundary in behavior, not only words."
            ]
          },
          {
            "name": "Reliability",
            "final": 9,
            "group": "reliability",
            "meaning": "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior. In this Family Relationship map, Reliability is a Person attribute. Final target: 90%.",
            "build": [
              "Make fewer promises and keep them more often.",
              "Use reminders, calendars, and written commitments.",
              "Repair misses quickly with ownership and a changed system."
            ]
          },
          {
            "name": "Forgiveness without self-betrayal",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Family Relationship map, Forgiveness without self-betrayal is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Respect",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Family Relationship map, Respect is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Consistency",
            "final": 9,
            "group": "reliability",
            "meaning": "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior. In this Family Relationship map, Consistency is a Person attribute. Final target: 90%.",
            "build": [
              "Make fewer promises and keep them more often.",
              "Use reminders, calendars, and written commitments.",
              "Repair misses quickly with ownership and a changed system."
            ]
          }
        ]
      },
      {
        "name": "Friendship / Social Circle",
        "vehicleAttrs": [
          {
            "name": "Trust",
            "final": 8,
            "group": "trust",
            "meaning": "Trust means words, actions, boundaries, and follow-through are consistent enough that the relationship feels predictable and safe. In this Friendship / Social Circle map, Trust is a Business attribute. Final target: 80%.",
            "build": [
              "Keep small promises and repair missed ones quickly.",
              "Make expectations explicit instead of relying on mind-reading.",
              "Protect confidentiality, respect, and reliability in repeated interactions."
            ]
          },
          {
            "name": "Regular contact",
            "final": 9,
            "group": "time",
            "meaning": "Time means connection has protected space on the calendar. Relationships and health systems weaken when they depend only on leftovers. In this Friendship / Social Circle map, Regular contact is a Business attribute. Final target: 90%.",
            "build": [
              "Schedule recurring time before the week fills up.",
              "Protect some phone-free or distraction-light interaction.",
              "Use small frequent contact when big blocks of time are unrealistic."
            ]
          },
          {
            "name": "Mutual support",
            "final": 9,
            "group": "reliability",
            "meaning": "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior. In this Friendship / Social Circle map, Mutual support is a Business attribute. Final target: 90%.",
            "build": [
              "Make fewer promises and keep them more often.",
              "Use reminders, calendars, and written commitments.",
              "Repair misses quickly with ownership and a changed system."
            ]
          },
          {
            "name": "Positive interactions",
            "final": 9,
            "group": "communication",
            "meaning": "Communication quality means people can share needs, limits, appreciation, and problems without the pattern becoming contempt, defensiveness, stonewalling, or avoidance. In this Friendship / Social Circle map, Positive interactions is a Business attribute. Final target: 90%.",
            "build": [
              "Use specific observations and requests instead of global blame.",
              "Add regular appreciation, check-ins, and clarification questions.",
              "Slow conflict down enough that both people can understand the issue and the impact."
            ]
          },
          {
            "name": "Shared interests/values",
            "final": 8,
            "group": "values",
            "meaning": "Values means expectations, priorities, and standards are compatible enough that the relationship or path is not constantly fighting its own direction. In this Friendship / Social Circle map, Shared interests/values is a Business attribute. Final target: 80%.",
            "build": [
              "Write the non-negotiables, preferences, and open questions.",
              "Discuss expectations for time, money, work, family, health, or commitment.",
              "Look for behavior alignment, not only stated agreement."
            ]
          },
          {
            "name": "Low-drama conflict repair",
            "final": 7,
            "group": "repair",
            "meaning": "Repair means conflict does not leave silent damage. The relationship can acknowledge impact, take responsibility, and return to respectful connection. In this Friendship / Social Circle map, Low-drama conflict repair is a Business attribute. Final target: 70%.",
            "build": [
              "Name the rupture quickly and calmly.",
              "Own your part without turning it into a counterattack.",
              "Agree on one behavior that changes next time and revisit it later."
            ]
          },
          {
            "name": "Emotional safety",
            "final": 8,
            "group": "safety",
            "meaning": "Safety means people can be honest without fear, humiliation, coercion, or repeated punishment. It includes emotional and practical boundaries. In this Friendship / Social Circle map, Emotional safety is a Business attribute. Final target: 80%.",
            "build": [
              "Remove contempt, threats, manipulation, and pressure from hard conversations.",
              "Make it safe to say no, pause, or ask for clarity.",
              "Get outside support when the pattern involves fear, control, or harm."
            ]
          },
          {
            "name": "Healthy boundaries",
            "final": 8,
            "group": "boundary",
            "meaning": "Boundaries mean limits are clear, respected, and enforceable. They protect connection by reducing resentment and hidden pressure. In this Friendship / Social Circle map, Healthy boundaries is a Business attribute. Final target: 80%.",
            "build": [
              "State the limit, reason, and consequence plainly.",
              "Practice small boundaries before crisis boundaries.",
              "Track whether people respect the boundary in behavior, not only words."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Initiating plans",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Friendship / Social Circle map, Initiating plans is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Listening",
            "final": 9,
            "group": "empathy",
            "meaning": "Empathy means you can understand another person's experience accurately enough that they feel heard, not managed or argued with. In this Friendship / Social Circle map, Listening is a Person attribute. Final target: 90%.",
            "build": [
              "Reflect what you heard before giving advice.",
              "Ask what the other person needs: listening, help, space, or a decision.",
              "Check whether your interpretation matches their actual experience."
            ]
          },
          {
            "name": "Consistency",
            "final": 9,
            "group": "reliability",
            "meaning": "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior. In this Friendship / Social Circle map, Consistency is a Person attribute. Final target: 90%.",
            "build": [
              "Make fewer promises and keep them more often.",
              "Use reminders, calendars, and written commitments.",
              "Repair misses quickly with ownership and a changed system."
            ]
          },
          {
            "name": "Kindness",
            "final": 9,
            "group": "empathy",
            "meaning": "Empathy means you can understand another person's experience accurately enough that they feel heard, not managed or argued with. In this Friendship / Social Circle map, Kindness is a Person attribute. Final target: 90%.",
            "build": [
              "Reflect what you heard before giving advice.",
              "Ask what the other person needs: listening, help, space, or a decision.",
              "Check whether your interpretation matches their actual experience."
            ]
          },
          {
            "name": "Respect",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Friendship / Social Circle map, Respect is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Social courage",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Friendship / Social Circle map, Social courage is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Emotional regulation",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Friendship / Social Circle map, Emotional regulation is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Patience",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Friendship / Social Circle map, Patience is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          }
        ]
      },
      {
        "name": "Professional Network / Mentors",
        "vehicleAttrs": [
          {
            "name": "Trust",
            "final": 8,
            "group": "trust",
            "meaning": "Trust means words, actions, boundaries, and follow-through are consistent enough that the relationship feels predictable and safe. In this Professional Network / Mentors map, Trust is a Business attribute. Final target: 80%.",
            "build": [
              "Keep small promises and repair missed ones quickly.",
              "Make expectations explicit instead of relying on mind-reading.",
              "Protect confidentiality, respect, and reliability in repeated interactions."
            ]
          },
          {
            "name": "Value exchange",
            "final": 9,
            "group": "reliability",
            "meaning": "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior. In this Professional Network / Mentors map, Value exchange is a Business attribute. Final target: 90%.",
            "build": [
              "Make fewer promises and keep them more often.",
              "Use reminders, calendars, and written commitments.",
              "Repair misses quickly with ownership and a changed system."
            ]
          },
          {
            "name": "Clear communication",
            "final": 9,
            "group": "communication",
            "meaning": "Communication quality means people can share needs, limits, appreciation, and problems without the pattern becoming contempt, defensiveness, stonewalling, or avoidance. In this Professional Network / Mentors map, Clear communication is a Business attribute. Final target: 90%.",
            "build": [
              "Use specific observations and requests instead of global blame.",
              "Add regular appreciation, check-ins, and clarification questions.",
              "Slow conflict down enough that both people can understand the issue and the impact."
            ]
          },
          {
            "name": "Follow-up reliability",
            "final": 10,
            "group": "reliability",
            "meaning": "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior. In this Professional Network / Mentors map, Follow-up reliability is a Business attribute. Final target: 100%.",
            "build": [
              "Make fewer promises and keep them more often.",
              "Use reminders, calendars, and written commitments.",
              "Repair misses quickly with ownership and a changed system."
            ]
          },
          {
            "name": "Shared professional interests",
            "final": 8,
            "group": "values",
            "meaning": "Values means expectations, priorities, and standards are compatible enough that the relationship or path is not constantly fighting its own direction. In this Professional Network / Mentors map, Shared professional interests is a Business attribute. Final target: 80%.",
            "build": [
              "Write the non-negotiables, preferences, and open questions.",
              "Discuss expectations for time, money, work, family, health, or commitment.",
              "Look for behavior alignment, not only stated agreement."
            ]
          },
          {
            "name": "Reputation",
            "final": 9,
            "group": "trust",
            "meaning": "Trust means words, actions, boundaries, and follow-through are consistent enough that the relationship feels predictable and safe. In this Professional Network / Mentors map, Reputation is a Business attribute. Final target: 90%.",
            "build": [
              "Keep small promises and repair missed ones quickly.",
              "Make expectations explicit instead of relying on mind-reading.",
              "Protect confidentiality, respect, and reliability in repeated interactions."
            ]
          },
          {
            "name": "Boundaries",
            "final": 8,
            "group": "boundary",
            "meaning": "Boundaries mean limits are clear, respected, and enforceable. They protect connection by reducing resentment and hidden pressure. In this Professional Network / Mentors map, Boundaries is a Business attribute. Final target: 80%.",
            "build": [
              "State the limit, reason, and consequence plainly.",
              "Practice small boundaries before crisis boundaries.",
              "Track whether people respect the boundary in behavior, not only words."
            ]
          },
          {
            "name": "Long-term goodwill",
            "final": 8,
            "group": "safety",
            "meaning": "Safety means people can be honest without fear, humiliation, coercion, or repeated punishment. It includes emotional and practical boundaries. In this Professional Network / Mentors map, Long-term goodwill is a Business attribute. Final target: 80%.",
            "build": [
              "Remove contempt, threats, manipulation, and pressure from hard conversations.",
              "Make it safe to say no, pause, or ask for clarity.",
              "Get outside support when the pattern involves fear, control, or harm."
            ]
          }
        ],
        "driverAttrs": [
          {
            "name": "Curiosity",
            "final": 9,
            "group": "empathy",
            "meaning": "Empathy means you can understand another person's experience accurately enough that they feel heard, not managed or argued with. In this Professional Network / Mentors map, Curiosity is a Person attribute. Final target: 90%.",
            "build": [
              "Reflect what you heard before giving advice.",
              "Ask what the other person needs: listening, help, space, or a decision.",
              "Check whether your interpretation matches their actual experience."
            ]
          },
          {
            "name": "Communication",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Professional Network / Mentors map, Communication is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Reliability",
            "final": 10,
            "group": "reliability",
            "meaning": "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior. In this Professional Network / Mentors map, Reliability is a Person attribute. Final target: 100%.",
            "build": [
              "Make fewer promises and keep them more often.",
              "Use reminders, calendars, and written commitments.",
              "Repair misses quickly with ownership and a changed system."
            ]
          },
          {
            "name": "Giving value first",
            "final": 9,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Professional Network / Mentors map, Giving value first is a Person attribute. Final target: 90%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Social courage",
            "final": 8,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Professional Network / Mentors map, Social courage is a Person attribute. Final target: 80%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Listening",
            "final": 9,
            "group": "empathy",
            "meaning": "Empathy means you can understand another person's experience accurately enough that they feel heard, not managed or argued with. In this Professional Network / Mentors map, Listening is a Person attribute. Final target: 90%.",
            "build": [
              "Reflect what you heard before giving advice.",
              "Ask what the other person needs: listening, help, space, or a decision.",
              "Check whether your interpretation matches their actual experience."
            ]
          },
          {
            "name": "Respect",
            "final": 10,
            "group": "skill",
            "meaning": "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes. In this Professional Network / Mentors map, Respect is a Person attribute. Final target: 100%.",
            "build": [
              "Practice in short cycles where you can see feedback quickly.",
              "Study strong examples, then apply the pattern to real work the same day.",
              "Track output quality, speed, consistency, and error rate instead of hours watched."
            ]
          },
          {
            "name": "Consistency",
            "final": 9,
            "group": "reliability",
            "meaning": "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior. In this Professional Network / Mentors map, Consistency is a Person attribute. Final target: 90%.",
            "build": [
              "Make fewer promises and keep them more often.",
              "Use reminders, calendars, and written commitments.",
              "Repair misses quickly with ownership and a changed system."
            ]
          }
        ]
      }
    ]
  }
];

export function stepDetailContent(_goal: Goal, _path: Path, step: Step): DetailContent {
  return {
    meaning: step.meaning,
    build: step.build,
  };
}

export function attributeDetailContent(attr: Attribute, _kind: AttrKind, _path: Path, _step?: Step): DetailContent {
  return {
    meaning: attr.meaning,
    build: attr.build,
  };
}

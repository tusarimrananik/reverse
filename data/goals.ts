import { avgRating, clean, stepRating } from "@/lib/ratings";
import type { Attribute, Goal, Path, Step } from "@/lib/types";

type AttrKind = "vehicle" | "driver";

type DetailContent = {
  meaning: string;
  build: string[];
};

// Main editable goal/path/step/attribute data.
export const DATA: Goal[] = [
  {
    "id": "freedom10m",
    "title": "$10M Freedom Reverse Map",
    "subtitle": "Business/wealth vehicles that could realistically create location freedom, time freedom, and $10M+ wealth.",
    "pathLabel": "Vehicle",
    "steps": [
      {
        "label": "End Goal",
        "title": "Own a mature asset that can realistically support $10M+ wealth, time freedom, and location freedom.",
        "note": "Final state: the vehicle has strong economics, durable demand, and the driver can operate or lead it.",
        "factors": {
          "default": 1
        }
      },
      {
        "label": "Previous Step 1",
        "title": "Scaled asset with strong revenue, retention, team, systems, and valuable ownership.",
        "note": "Think: reliable growth engine, measurable retention, clear unit economics, and less founder-dependence.",
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
        }
      },
      {
        "label": "Previous Step 2",
        "title": "Repeatable growth channel and unit economics are working.",
        "note": "This is where CAC, payback, gross margin, churn/retention, and distribution begin to matter heavily.",
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
        }
      },
      {
        "label": "Previous Step 3",
        "title": "Customers/users keep using it because the core value is real.",
        "note": "Product-market fit is not just launch. It is repeated usage, renewal, expansion, or clear customer pull.",
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
        }
      },
      {
        "label": "Previous Step 4",
        "title": "First paying customers, users, clients, or owned assets exist.",
        "note": "The vehicle is no longer only an idea. Someone pays, uses, signs up, buys, invests, or participates.",
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
        }
      },
      {
        "label": "Previous Step 5",
        "title": "Small MVP, pilot, offer, prototype, or first version exists.",
        "note": "The goal is not perfection. The goal is a simple test that can create evidence.",
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
        }
      },
      {
        "label": "Previous Step 6",
        "title": "Painful problem, niche, audience, or asset opportunity is validated before building big.",
        "note": "This step is mostly customer/problem evidence, not a working company yet.",
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
        }
      },
      {
        "label": "Previous Step 7",
        "title": "Skill-building and basic preparation only.",
        "note": "You may be learning, interviewing, writing notes, or studying the market, but the vehicle itself is not built yet.",
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
        }
      },
      {
        "label": "Absolute Zero",
        "title": "Nothing has been built, validated, sold, measured, or practiced yet.",
        "note": "Important fix: every required rating is 0 here. You do not need customer understanding, sales, product, systems, or revenue before step zero.",
        "factors": {
          "default": 0
        }
      }
    ],
    "paths": [
      {
        "name": "B2B SaaS Company",
        "description": "Subscription software sold to businesses.",
        "goalFit": 10,
        "vehicleAttrs": [
          {
            "name": "Recurring revenue",
            "final": 10,
            "group": "traction"
          },
          {
            "name": "Scalability",
            "final": 10,
            "group": "scale"
          },
          {
            "name": "Large market",
            "final": 9,
            "group": "market"
          },
          {
            "name": "Painful business problem",
            "final": 10,
            "group": "market"
          },
          {
            "name": "Strong retention",
            "final": 10,
            "group": "retention"
          },
          {
            "name": "Strong distribution",
            "final": 9,
            "group": "distribution"
          },
          {
            "name": "Clear monetization",
            "final": 10,
            "group": "economics"
          },
          {
            "name": "Good unit economics",
            "final": 9,
            "group": "economics"
          },
          {
            "name": "High profit margin",
            "final": 9,
            "group": "economics"
          },
          {
            "name": "Global reach",
            "final": 9,
            "group": "scale"
          },
          {
            "name": "Defensibility",
            "final": 8,
            "group": "moat"
          },
          {
            "name": "Can run with systems/team",
            "final": 9,
            "group": "systems"
          }
        ],
        "driverAttrs": [
          {
            "name": "Customer understanding",
            "final": 10,
            "group": "insight"
          },
          {
            "name": "Problem selection",
            "final": 10,
            "group": "insight"
          },
          {
            "name": "Execution",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Product building",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Sales",
            "final": 9,
            "group": "distribution"
          },
          {
            "name": "Marketing / distribution",
            "final": 9,
            "group": "distribution"
          },
          {
            "name": "Focus",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Decision making",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Leadership",
            "final": 8,
            "group": "leadership"
          },
          {
            "name": "Resilience",
            "final": 9,
            "group": "skill"
          }
        ],
        "evidence": "SaaS earns high scores when ARR, retention, gross margin, CAC payback, and Rule-of-40 style efficiency are healthy. It is hard, but the economics can support very large outcomes."
      },
      {
        "name": "Vertical SaaS",
        "description": "Software for one specific industry or workflow.",
        "goalFit": 10,
        "vehicleAttrs": [
          {
            "name": "Recurring revenue",
            "final": 10,
            "group": "traction"
          },
          {
            "name": "Industry-specific pain",
            "final": 10,
            "group": "market"
          },
          {
            "name": "Niche depth",
            "final": 9,
            "group": "moat"
          },
          {
            "name": "Retention from workflow lock-in",
            "final": 10,
            "group": "retention"
          },
          {
            "name": "Scalability",
            "final": 8,
            "group": "scale"
          },
          {
            "name": "Focused distribution",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Clear monetization",
            "final": 10,
            "group": "economics"
          },
          {
            "name": "Good unit economics",
            "final": 9,
            "group": "economics"
          },
          {
            "name": "High profit margin",
            "final": 9,
            "group": "economics"
          },
          {
            "name": "Market size ceiling",
            "final": 7,
            "group": "market"
          },
          {
            "name": "Defensibility",
            "final": 9,
            "group": "moat"
          },
          {
            "name": "Can run with systems/team",
            "final": 9,
            "group": "systems"
          }
        ],
        "driverAttrs": [
          {
            "name": "Customer understanding",
            "final": 10,
            "group": "insight"
          },
          {
            "name": "Domain expertise",
            "final": 9,
            "group": "insight"
          },
          {
            "name": "Problem selection",
            "final": 10,
            "group": "insight"
          },
          {
            "name": "Product building",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Founder-led sales",
            "final": 9,
            "group": "distribution"
          },
          {
            "name": "Support operations",
            "final": 8,
            "group": "systems"
          },
          {
            "name": "Focus",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Decision making",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Leadership",
            "final": 8,
            "group": "leadership"
          },
          {
            "name": "Resilience",
            "final": 9,
            "group": "skill"
          }
        ],
        "evidence": "Often more realistic for a solo or small technical founder because one narrow market can be understood deeply. The trade-off is that the niche may cap upside unless expanded."
      },
      {
        "name": "AI / B2B Automation Company",
        "description": "AI or automation that saves businesses time or money.",
        "goalFit": 10,
        "vehicleAttrs": [
          {
            "name": "Measurable time/cost savings",
            "final": 10,
            "group": "market"
          },
          {
            "name": "Recurring revenue",
            "final": 9,
            "group": "traction"
          },
          {
            "name": "Scalability",
            "final": 9,
            "group": "scale"
          },
          {
            "name": "Large market",
            "final": 10,
            "group": "market"
          },
          {
            "name": "Workflow retention",
            "final": 8,
            "group": "retention"
          },
          {
            "name": "Distribution difficulty",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Clear monetization",
            "final": 9,
            "group": "economics"
          },
          {
            "name": "Good unit economics",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "High profit margin",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "Global reach",
            "final": 9,
            "group": "scale"
          },
          {
            "name": "Defensibility risk",
            "final": 7,
            "group": "moat"
          },
          {
            "name": "Can run with systems/team",
            "final": 8,
            "group": "systems"
          }
        ],
        "driverAttrs": [
          {
            "name": "Workflow understanding",
            "final": 10,
            "group": "insight"
          },
          {
            "name": "AI literacy",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Product building",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Customer understanding",
            "final": 9,
            "group": "insight"
          },
          {
            "name": "Sales",
            "final": 9,
            "group": "distribution"
          },
          {
            "name": "Marketing / distribution",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Data/privacy judgement",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Execution",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Leadership",
            "final": 8,
            "group": "leadership"
          },
          {
            "name": "Resilience",
            "final": 9,
            "group": "skill"
          }
        ],
        "evidence": "High upside because AI can compress labor cost, but defensibility is lower if the product is only a thin wrapper. Ratings reward real workflow ownership and customer savings."
      },
      {
        "name": "Software + Data/API Business",
        "description": "Sell valuable data, API access, developer tools, or infrastructure.",
        "goalFit": 9,
        "vehicleAttrs": [
          {
            "name": "Recurring/API revenue",
            "final": 9,
            "group": "traction"
          },
          {
            "name": "Scalability",
            "final": 9,
            "group": "scale"
          },
          {
            "name": "Data value",
            "final": 10,
            "group": "market"
          },
          {
            "name": "Developer/customer pain",
            "final": 9,
            "group": "market"
          },
          {
            "name": "Retention from integration",
            "final": 8,
            "group": "retention"
          },
          {
            "name": "Developer distribution",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Clear monetization",
            "final": 9,
            "group": "economics"
          },
          {
            "name": "Good unit economics",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "High profit margin",
            "final": 9,
            "group": "economics"
          },
          {
            "name": "Global reach",
            "final": 9,
            "group": "scale"
          },
          {
            "name": "Data moat",
            "final": 8,
            "group": "moat"
          },
          {
            "name": "Reliability systems",
            "final": 9,
            "group": "systems"
          }
        ],
        "driverAttrs": [
          {
            "name": "Technical depth",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Data engineering",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Customer understanding",
            "final": 8,
            "group": "insight"
          },
          {
            "name": "API/product design",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Developer marketing",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Sales",
            "final": 7,
            "group": "distribution"
          },
          {
            "name": "Operational reliability",
            "final": 9,
            "group": "systems"
          },
          {
            "name": "Decision making",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Focus",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Resilience",
            "final": 8,
            "group": "skill"
          }
        ],
        "evidence": "Strong if the data/API becomes embedded in customer systems. It needs reliability and unique data/access, not just generic software."
      },
      {
        "name": "Marketplace Platform",
        "description": "Connect two sides: buyers/sellers, clients/providers, supply/demand.",
        "goalFit": 9,
        "vehicleAttrs": [
          {
            "name": "Network effects",
            "final": 10,
            "group": "moat"
          },
          {
            "name": "Scalability",
            "final": 10,
            "group": "scale"
          },
          {
            "name": "Large market",
            "final": 10,
            "group": "market"
          },
          {
            "name": "Painful coordination problem",
            "final": 9,
            "group": "market"
          },
          {
            "name": "Liquidity / matching",
            "final": 10,
            "group": "distribution"
          },
          {
            "name": "Retention",
            "final": 8,
            "group": "retention"
          },
          {
            "name": "Take-rate monetization",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "Unit economics",
            "final": 7,
            "group": "economics"
          },
          {
            "name": "Profit margin",
            "final": 7,
            "group": "economics"
          },
          {
            "name": "Global/local expansion",
            "final": 9,
            "group": "scale"
          },
          {
            "name": "Defensibility",
            "final": 9,
            "group": "moat"
          },
          {
            "name": "Trust and safety systems",
            "final": 8,
            "group": "systems"
          }
        ],
        "driverAttrs": [
          {
            "name": "Market selection",
            "final": 10,
            "group": "insight"
          },
          {
            "name": "Supply acquisition",
            "final": 9,
            "group": "distribution"
          },
          {
            "name": "Demand acquisition",
            "final": 9,
            "group": "distribution"
          },
          {
            "name": "Operations",
            "final": 9,
            "group": "systems"
          },
          {
            "name": "Product building",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Sales/partnerships",
            "final": 9,
            "group": "distribution"
          },
          {
            "name": "Execution",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Decision making",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Leadership",
            "final": 9,
            "group": "leadership"
          },
          {
            "name": "Resilience",
            "final": 10,
            "group": "skill"
          }
        ],
        "evidence": "Marketplaces can become huge because network effects compound, but they are harder early because both supply and demand must be solved."
      },
      {
        "name": "Productized Service → Software Company",
        "description": "Start with service cashflow, systemize repeated work, then turn the repeatable part into software.",
        "goalFit": 8,
        "vehicleAttrs": [
          {
            "name": "Cash-flow base",
            "final": 9,
            "group": "economics"
          },
          {
            "name": "Recurring/repeat customers",
            "final": 7,
            "group": "traction"
          },
          {
            "name": "Scalability",
            "final": 7,
            "group": "scale"
          },
          {
            "name": "Clear customer pain",
            "final": 9,
            "group": "market"
          },
          {
            "name": "Retention",
            "final": 8,
            "group": "retention"
          },
          {
            "name": "Distribution",
            "final": 7,
            "group": "distribution"
          },
          {
            "name": "Monetization",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "Unit economics",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "Profit margin before software",
            "final": 6,
            "group": "economics"
          },
          {
            "name": "Global reach",
            "final": 7,
            "group": "scale"
          },
          {
            "name": "Defensibility",
            "final": 6,
            "group": "moat"
          },
          {
            "name": "Can run with systems/team",
            "final": 8,
            "group": "systems"
          }
        ],
        "driverAttrs": [
          {
            "name": "Customer understanding",
            "final": 9,
            "group": "insight"
          },
          {
            "name": "Service delivery",
            "final": 9,
            "group": "systems"
          },
          {
            "name": "Operations",
            "final": 9,
            "group": "systems"
          },
          {
            "name": "Sales",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Productization",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Delegation",
            "final": 8,
            "group": "leadership"
          },
          {
            "name": "Execution",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Focus",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Decision making",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Resilience",
            "final": 9,
            "group": "skill"
          }
        ],
        "evidence": "Realistic for you because service cashflow already exists. The big risk is staying trapped in labor instead of extracting repeatable software."
      },
      {
        "name": "Internet Holding Company",
        "description": "Own multiple software/web assets that compound together.",
        "goalFit": 8,
        "vehicleAttrs": [
          {
            "name": "Diversified revenue",
            "final": 9,
            "group": "traction"
          },
          {
            "name": "Scalability",
            "final": 8,
            "group": "scale"
          },
          {
            "name": "Multiple markets",
            "final": 8,
            "group": "market"
          },
          {
            "name": "Asset compounding",
            "final": 9,
            "group": "economics"
          },
          {
            "name": "Retention",
            "final": 7,
            "group": "retention"
          },
          {
            "name": "Distribution portfolio",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Clear monetization",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "Good unit economics",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "Profit margin",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "Global reach",
            "final": 9,
            "group": "scale"
          },
          {
            "name": "Defensibility",
            "final": 7,
            "group": "moat"
          },
          {
            "name": "Operator systems",
            "final": 9,
            "group": "systems"
          }
        ],
        "driverAttrs": [
          {
            "name": "Capital allocation",
            "final": 9,
            "group": "economics"
          },
          {
            "name": "Opportunity selection",
            "final": 9,
            "group": "insight"
          },
          {
            "name": "Technical execution",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Marketing / distribution",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Operations",
            "final": 8,
            "group": "systems"
          },
          {
            "name": "Hiring/delegation",
            "final": 8,
            "group": "leadership"
          },
          {
            "name": "Focus",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Decision making",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Patience",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Resilience",
            "final": 8,
            "group": "skill"
          }
        ],
        "evidence": "Works by compounding several smaller wins. It is less dependent on one moonshot, but requires discipline so it does not become scattered."
      },
      {
        "name": "Creator/Media Brand + Products",
        "description": "Build audience and trust, then sell products, software, courses, community, or services.",
        "goalFit": 8,
        "vehicleAttrs": [
          {
            "name": "Audience trust",
            "final": 10,
            "group": "distribution"
          },
          {
            "name": "Distribution",
            "final": 10,
            "group": "distribution"
          },
          {
            "name": "Scalability",
            "final": 8,
            "group": "scale"
          },
          {
            "name": "Large market",
            "final": 9,
            "group": "market"
          },
          {
            "name": "Recurring/community revenue",
            "final": 7,
            "group": "traction"
          },
          {
            "name": "Retention",
            "final": 7,
            "group": "retention"
          },
          {
            "name": "Clear monetization",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "Good unit economics",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "Profit margin",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "Global reach",
            "final": 10,
            "group": "scale"
          },
          {
            "name": "Defensibility",
            "final": 7,
            "group": "moat"
          },
          {
            "name": "Content/product systems",
            "final": 7,
            "group": "systems"
          }
        ],
        "driverAttrs": [
          {
            "name": "Storytelling",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Audience understanding",
            "final": 10,
            "group": "insight"
          },
          {
            "name": "Consistency",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Marketing",
            "final": 10,
            "group": "distribution"
          },
          {
            "name": "Product building",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Sales",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Focus",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Taste",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Resilience",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Leadership/community",
            "final": 8,
            "group": "leadership"
          }
        ],
        "evidence": "Can be powerful because distribution is an asset, but it is attention-dependent and usually slower to convert into $10M unless paired with strong products/software."
      },
      {
        "name": "High-Growth Startup With Equity",
        "description": "Build or join a venture-scale company where equity can become worth $10M+.",
        "goalFit": 9,
        "vehicleAttrs": [
          {
            "name": "Equity upside",
            "final": 10,
            "group": "economics"
          },
          {
            "name": "Scalability",
            "final": 10,
            "group": "scale"
          },
          {
            "name": "Large market",
            "final": 10,
            "group": "market"
          },
          {
            "name": "Painful problem",
            "final": 10,
            "group": "market"
          },
          {
            "name": "Retention",
            "final": 8,
            "group": "retention"
          },
          {
            "name": "Distribution",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Monetization",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "Unit economics",
            "final": 7,
            "group": "economics"
          },
          {
            "name": "Profit margin potential",
            "final": 8,
            "group": "economics"
          },
          {
            "name": "Global reach",
            "final": 10,
            "group": "scale"
          },
          {
            "name": "Defensibility",
            "final": 8,
            "group": "moat"
          },
          {
            "name": "Team/system leverage",
            "final": 9,
            "group": "systems"
          }
        ],
        "driverAttrs": [
          {
            "name": "Technical/product ability",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Customer understanding",
            "final": 9,
            "group": "insight"
          },
          {
            "name": "Speed of execution",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Fundraising/storytelling",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Sales",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Leadership",
            "final": 9,
            "group": "leadership"
          },
          {
            "name": "Decision making",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Focus",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Risk tolerance",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Resilience",
            "final": 10,
            "group": "skill"
          }
        ],
        "evidence": "Highest upside, highest uncertainty. The rating is high because equity can compound massively, but control and predictability are lower."
      },
      {
        "name": "Investment Holding Company",
        "description": "Own assets and compound capital over time.",
        "goalFit": 7,
        "vehicleAttrs": [
          {
            "name": "Capital compounding",
            "final": 10,
            "group": "economics"
          },
          {
            "name": "Diversification",
            "final": 9,
            "group": "systems"
          },
          {
            "name": "Cash-flow assets",
            "final": 8,
            "group": "traction"
          },
          {
            "name": "Scalability",
            "final": 7,
            "group": "scale"
          },
          {
            "name": "Large opportunity universe",
            "final": 9,
            "group": "market"
          },
          {
            "name": "Asset durability",
            "final": 8,
            "group": "retention"
          },
          {
            "name": "Deal flow",
            "final": 8,
            "group": "distribution"
          },
          {
            "name": "Risk-adjusted returns",
            "final": 9,
            "group": "economics"
          },
          {
            "name": "Low operating margin drag",
            "final": 9,
            "group": "economics"
          },
          {
            "name": "Global reach",
            "final": 9,
            "group": "scale"
          },
          {
            "name": "Defensibility",
            "final": 7,
            "group": "moat"
          },
          {
            "name": "Low operational stress",
            "final": 8,
            "group": "systems"
          }
        ],
        "driverAttrs": [
          {
            "name": "Financial literacy",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Patience",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Risk management",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Capital allocation",
            "final": 10,
            "group": "economics"
          },
          {
            "name": "Emotional control",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Long-term thinking",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Research ability",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Discipline",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Understanding valuation",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Avoiding speculation",
            "final": 10,
            "group": "skill"
          }
        ],
        "evidence": "Useful for making earned money work, but reaching $10M from small capital is usually slower than building a scalable operating business first."
      }
    ],
    "basis": [
      "Uses public SaaS/cloud benchmarks such as ARR multiples, gross margin, retention, CAC payback, and Rule-of-40 style efficiency.",
      "Ratings are realistic estimates of required state, not guarantees or personal scores.",
      "Absolute Zero is fixed to 0 across all vehicle and driver attributes."
    ]
  },
  {
    "id": "physicalHealth",
    "title": "Physical Health Reverse Map",
    "subtitle": "Health systems for energy, strength, body composition, sleep, and long-term sustainability.",
    "pathLabel": "Health goal",
    "steps": [
      {
        "label": "End Goal",
        "title": "Your health system is stable, measurable, and supports high energy for years.",
        "note": "Final state uses evidence-based targets: activity, strength, sleep, nutrition, recovery, and tracking.",
        "factors": {
          "default": 1
        }
      },
      {
        "label": "Previous Step 1",
        "title": "The routine has been stable for 12 months with no major relapse.",
        "note": "You are not relying on motivation. Your environment and habits carry the system.",
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
        }
      },
      {
        "label": "Previous Step 2",
        "title": "A 3-month routine is consistent and improving measurable markers.",
        "note": "Enough time has passed to see weight, strength, endurance, energy, or sleep trend changes.",
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
        }
      },
      {
        "label": "Previous Step 3",
        "title": "A weekly routine is working: workouts, food structure, sleep window, and recovery are planned.",
        "note": "This is where health becomes a normal weekly operating system.",
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
        }
      },
      {
        "label": "Previous Step 4",
        "title": "First 30 days of consistency are completed.",
        "note": "The main win is proof that you can follow a boring but useful plan.",
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
        }
      },
      {
        "label": "Previous Step 5",
        "title": "First 7 days are completed without over-optimizing.",
        "note": "Only the tiny basics matter: move, sleep, drink water, eat a bit better, track simply.",
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
        }
      },
      {
        "label": "Previous Step 6",
        "title": "Baseline is measured and the smallest next action is chosen.",
        "note": "You know your current weight/steps/sleep/activity level and you choose one simple action.",
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
        }
      },
      {
        "label": "Absolute Zero",
        "title": "No baseline, no routine, no tracking, no plan.",
        "note": "Everything starts at 0 here.",
        "factors": {
          "default": 0
        }
      }
    ],
    "paths": [
      {
        "name": "General Health & Energy",
        "description": "Build a sustainable base: movement, strength, sleep, food quality, recovery.",
        "goalFit": 10,
        "vehicleAttrs": [
          {
            "name": "150–300 min/week aerobic activity",
            "final": 10,
            "group": "cardio"
          },
          {
            "name": "Strength training 2+ days/week",
            "final": 9,
            "group": "strength"
          },
          {
            "name": "Sleep consistency",
            "final": 10,
            "group": "sleep"
          },
          {
            "name": "Nutrition quality",
            "final": 9,
            "group": "nutrition"
          },
          {
            "name": "Daily movement / steps",
            "final": 8,
            "group": "cardio"
          },
          {
            "name": "Stress recovery",
            "final": 8,
            "group": "recovery"
          },
          {
            "name": "Simple tracking",
            "final": 8,
            "group": "tracking"
          },
          {
            "name": "Injury prevention",
            "final": 8,
            "group": "recovery"
          },
          {
            "name": "Medical/dental checkups",
            "final": 7,
            "group": "medical"
          }
        ],
        "driverAttrs": [
          {
            "name": "Habit consistency",
            "final": 10,
            "group": "habit"
          },
          {
            "name": "Exercise technique",
            "final": 7,
            "group": "skill"
          },
          {
            "name": "Food environment control",
            "final": 8,
            "group": "habit"
          },
          {
            "name": "Sleep hygiene",
            "final": 8,
            "group": "habit"
          },
          {
            "name": "Stress management",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Patience",
            "final": 9,
            "group": "habit"
          },
          {
            "name": "Self-awareness",
            "final": 8,
            "group": "tracking"
          },
          {
            "name": "Identity discipline",
            "final": 9,
            "group": "habit"
          }
        ],
        "evidence": "Based on public health guidelines: aerobic activity, strength training, less sitting, and 7+ hours of adult sleep are high-leverage health inputs."
      },
      {
        "name": "Fat Loss / Lean Body Composition",
        "description": "Reduce excess body fat while keeping strength, energy, and consistency.",
        "goalFit": 9,
        "vehicleAttrs": [
          {
            "name": "Calorie awareness",
            "final": 10,
            "group": "nutrition"
          },
          {
            "name": "Protein and food quality",
            "final": 9,
            "group": "nutrition"
          },
          {
            "name": "Strength training",
            "final": 9,
            "group": "strength"
          },
          {
            "name": "Cardio / daily movement",
            "final": 8,
            "group": "cardio"
          },
          {
            "name": "Sleep consistency",
            "final": 8,
            "group": "sleep"
          },
          {
            "name": "Weight/waist trend tracking",
            "final": 9,
            "group": "tracking"
          },
          {
            "name": "Recovery and hunger management",
            "final": 8,
            "group": "recovery"
          },
          {
            "name": "Relapse prevention system",
            "final": 8,
            "group": "habit"
          }
        ],
        "driverAttrs": [
          {
            "name": "Patience",
            "final": 10,
            "group": "habit"
          },
          {
            "name": "Food logging skill",
            "final": 8,
            "group": "tracking"
          },
          {
            "name": "Cooking/simple meal planning",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Environment design",
            "final": 9,
            "group": "habit"
          },
          {
            "name": "Workout consistency",
            "final": 8,
            "group": "habit"
          },
          {
            "name": "Emotional eating awareness",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Decision making",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Identity discipline",
            "final": 9,
            "group": "habit"
          }
        ],
        "evidence": "Fat loss is mostly a consistency and environment game. The system gets high score only when it protects muscle, sleep, and adherence."
      },
      {
        "name": "Strength + Muscle Building",
        "description": "Become stronger and build visible muscle with progressive training.",
        "goalFit": 9,
        "vehicleAttrs": [
          {
            "name": "Progressive overload",
            "final": 10,
            "group": "strength"
          },
          {
            "name": "Strength training consistency",
            "final": 10,
            "group": "strength"
          },
          {
            "name": "Protein/energy intake",
            "final": 9,
            "group": "nutrition"
          },
          {
            "name": "Sleep/recovery",
            "final": 9,
            "group": "sleep"
          },
          {
            "name": "Technique safety",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Workout tracking",
            "final": 8,
            "group": "tracking"
          },
          {
            "name": "Mobility/injury prevention",
            "final": 8,
            "group": "recovery"
          },
          {
            "name": "Long-term program structure",
            "final": 8,
            "group": "systems"
          }
        ],
        "driverAttrs": [
          {
            "name": "Technique learning",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Consistency",
            "final": 10,
            "group": "habit"
          },
          {
            "name": "Patience",
            "final": 10,
            "group": "habit"
          },
          {
            "name": "Recovery discipline",
            "final": 8,
            "group": "recovery"
          },
          {
            "name": "Nutrition discipline",
            "final": 8,
            "group": "nutrition"
          },
          {
            "name": "Tracking honesty",
            "final": 8,
            "group": "tracking"
          },
          {
            "name": "Focus",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Resilience",
            "final": 8,
            "group": "skill"
          }
        ],
        "evidence": "Strength changes require progressive overload, sufficient recovery, and months/years of boring consistency."
      },
      {
        "name": "Cardio Endurance / Heart Health",
        "description": "Improve stamina, heart fitness, and daily energy.",
        "goalFit": 9,
        "vehicleAttrs": [
          {
            "name": "Weekly aerobic volume",
            "final": 10,
            "group": "cardio"
          },
          {
            "name": "Gradual intensity progression",
            "final": 9,
            "group": "cardio"
          },
          {
            "name": "Consistency",
            "final": 10,
            "group": "habit"
          },
          {
            "name": "Recovery/sleep",
            "final": 8,
            "group": "sleep"
          },
          {
            "name": "Low sedentary time",
            "final": 8,
            "group": "cardio"
          },
          {
            "name": "Heart-rate or pace tracking",
            "final": 8,
            "group": "tracking"
          },
          {
            "name": "Injury prevention",
            "final": 8,
            "group": "recovery"
          },
          {
            "name": "Nutrition support",
            "final": 7,
            "group": "nutrition"
          }
        ],
        "driverAttrs": [
          {
            "name": "Pacing discipline",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Habit consistency",
            "final": 10,
            "group": "habit"
          },
          {
            "name": "Patience",
            "final": 9,
            "group": "habit"
          },
          {
            "name": "Body-signal awareness",
            "final": 8,
            "group": "tracking"
          },
          {
            "name": "Stress management",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Sleep hygiene",
            "final": 8,
            "group": "habit"
          },
          {
            "name": "Resilience",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Decision making",
            "final": 7,
            "group": "skill"
          }
        ],
        "evidence": "Scores are anchored around aerobic volume and gradually increasing activity instead of trying to become intense immediately."
      },
      {
        "name": "Mobility + Injury Prevention",
        "description": "Move well, reduce pain risk, and keep training sustainable.",
        "goalFit": 8,
        "vehicleAttrs": [
          {
            "name": "Joint range of motion",
            "final": 8,
            "group": "recovery"
          },
          {
            "name": "Strength balance",
            "final": 8,
            "group": "strength"
          },
          {
            "name": "Warm-up/cool-down habit",
            "final": 8,
            "group": "habit"
          },
          {
            "name": "Technique quality",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Pain/injury tracking",
            "final": 8,
            "group": "tracking"
          },
          {
            "name": "Recovery practices",
            "final": 8,
            "group": "recovery"
          },
          {
            "name": "Professional help when needed",
            "final": 7,
            "group": "medical"
          },
          {
            "name": "Consistency",
            "final": 8,
            "group": "habit"
          }
        ],
        "driverAttrs": [
          {
            "name": "Body awareness",
            "final": 9,
            "group": "tracking"
          },
          {
            "name": "Patience",
            "final": 9,
            "group": "habit"
          },
          {
            "name": "Technique learning",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Ego control",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Consistency",
            "final": 8,
            "group": "habit"
          },
          {
            "name": "Recovery discipline",
            "final": 8,
            "group": "recovery"
          },
          {
            "name": "Decision making",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Self-awareness",
            "final": 8,
            "group": "tracking"
          }
        ],
        "evidence": "This goal is not flashy, but it protects the ability to train for years."
      }
    ],
    "basis": [
      "Uses public health guidelines: 150–300 minutes/week moderate activity or equivalent, strength 2+ days/week, less sitting, and 7+ hours adult sleep.",
      "Ratings measure how built the health system must be at each step, not your current health status.",
      "Absolute Zero is fixed to 0 because there is no baseline, habit, or plan yet."
    ]
  },
  {
    "id": "relationship",
    "title": "Relationship Reverse Map",
    "subtitle": "Relationship systems for romantic, family, friendship, and professional connection.",
    "pathLabel": "Relationship goal",
    "steps": [
      {
        "label": "End Goal",
        "title": "A healthy, safe, stable relationship system exists and is maintained intentionally.",
        "note": "Final state means trust, communication, repair, time, and boundaries are consistently practiced.",
        "factors": {
          "default": 1
        }
      },
      {
        "label": "Previous Step 1",
        "title": "Long-term trust is maintained through reliability, respect, and regular positive connection.",
        "note": "The relationship is not perfect, but the pattern is safe and stable.",
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
        }
      },
      {
        "label": "Previous Step 2",
        "title": "Conflict can be repaired without contempt, defensiveness, or silent damage.",
        "note": "Repair matters because all close relationships have conflict.",
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
        }
      },
      {
        "label": "Previous Step 3",
        "title": "Regular quality time and honest communication are happening.",
        "note": "Connection is repeated, not accidental.",
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
        }
      },
      {
        "label": "Previous Step 4",
        "title": "The first honest conversations and small acts of care begin.",
        "note": "This is still early. You are creating signals of trust and respect.",
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
        }
      },
      {
        "label": "Previous Step 5",
        "title": "A basic contact/follow-up habit exists.",
        "note": "The relationship is not deep yet. The only real proof is repeated respectful contact.",
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
        }
      },
      {
        "label": "Previous Step 6",
        "title": "You identify the people, standards, and kind of relationship you want to build.",
        "note": "This is awareness and intention, not relationship strength yet.",
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
        }
      },
      {
        "label": "Absolute Zero",
        "title": "No intention, no contact habit, no trust, no communication system.",
        "note": "Everything starts at 0 here.",
        "factors": {
          "default": 0
        }
      }
    ],
    "paths": [
      {
        "name": "Romantic Relationship",
        "description": "Build a safe, stable, loving romantic relationship.",
        "goalFit": 10,
        "vehicleAttrs": [
          {
            "name": "Trust",
            "final": 10,
            "group": "trust"
          },
          {
            "name": "Positive-to-negative interaction balance",
            "final": 10,
            "group": "communication"
          },
          {
            "name": "Communication quality",
            "final": 10,
            "group": "communication"
          },
          {
            "name": "Conflict repair",
            "final": 10,
            "group": "repair"
          },
          {
            "name": "Shared values/goals",
            "final": 9,
            "group": "values"
          },
          {
            "name": "Quality time",
            "final": 9,
            "group": "time"
          },
          {
            "name": "Emotional safety",
            "final": 10,
            "group": "safety"
          },
          {
            "name": "Boundaries",
            "final": 9,
            "group": "boundary"
          },
          {
            "name": "Reliability",
            "final": 10,
            "group": "reliability"
          }
        ],
        "driverAttrs": [
          {
            "name": "Listening",
            "final": 10,
            "group": "empathy"
          },
          {
            "name": "Empathy",
            "final": 10,
            "group": "empathy"
          },
          {
            "name": "Honesty",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Emotional regulation",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Patience",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Respect",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Vulnerability/courage",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Consistency",
            "final": 10,
            "group": "reliability"
          }
        ],
        "evidence": "Relationship ratings use research-informed proxies: positive interaction balance, repair, emotional safety, and consistent respectful behavior."
      },
      {
        "name": "Family Relationship",
        "description": "Improve family connection while keeping healthy boundaries.",
        "goalFit": 9,
        "vehicleAttrs": [
          {
            "name": "Trust",
            "final": 9,
            "group": "trust"
          },
          {
            "name": "Respectful communication",
            "final": 9,
            "group": "communication"
          },
          {
            "name": "Conflict repair",
            "final": 8,
            "group": "repair"
          },
          {
            "name": "Family responsibility",
            "final": 9,
            "group": "reliability"
          },
          {
            "name": "Quality time",
            "final": 8,
            "group": "time"
          },
          {
            "name": "Boundaries",
            "final": 10,
            "group": "boundary"
          },
          {
            "name": "Emotional safety",
            "final": 8,
            "group": "safety"
          },
          {
            "name": "Shared expectations",
            "final": 8,
            "group": "values"
          }
        ],
        "driverAttrs": [
          {
            "name": "Listening",
            "final": 9,
            "group": "empathy"
          },
          {
            "name": "Patience",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Emotional regulation",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Boundary-setting",
            "final": 10,
            "group": "boundary"
          },
          {
            "name": "Reliability",
            "final": 9,
            "group": "reliability"
          },
          {
            "name": "Forgiveness without self-betrayal",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Respect",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Consistency",
            "final": 9,
            "group": "reliability"
          }
        ],
        "evidence": "Family goals need both connection and boundaries. A high score does not mean saying yes to everything."
      },
      {
        "name": "Friendship / Social Circle",
        "description": "Build a reliable circle of friends and mutual support.",
        "goalFit": 8,
        "vehicleAttrs": [
          {
            "name": "Trust",
            "final": 8,
            "group": "trust"
          },
          {
            "name": "Regular contact",
            "final": 9,
            "group": "time"
          },
          {
            "name": "Mutual support",
            "final": 9,
            "group": "reliability"
          },
          {
            "name": "Positive interactions",
            "final": 9,
            "group": "communication"
          },
          {
            "name": "Shared interests/values",
            "final": 8,
            "group": "values"
          },
          {
            "name": "Low-drama conflict repair",
            "final": 7,
            "group": "repair"
          },
          {
            "name": "Emotional safety",
            "final": 8,
            "group": "safety"
          },
          {
            "name": "Healthy boundaries",
            "final": 8,
            "group": "boundary"
          }
        ],
        "driverAttrs": [
          {
            "name": "Initiating plans",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Listening",
            "final": 9,
            "group": "empathy"
          },
          {
            "name": "Consistency",
            "final": 9,
            "group": "reliability"
          },
          {
            "name": "Kindness",
            "final": 9,
            "group": "empathy"
          },
          {
            "name": "Respect",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Social courage",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Emotional regulation",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Patience",
            "final": 8,
            "group": "skill"
          }
        ],
        "evidence": "Friendship grows through repeated low-pressure contact. Reliability matters more than dramatic intensity."
      },
      {
        "name": "Professional Network / Mentors",
        "description": "Build valuable professional relationships without being fake or transactional.",
        "goalFit": 8,
        "vehicleAttrs": [
          {
            "name": "Trust",
            "final": 8,
            "group": "trust"
          },
          {
            "name": "Value exchange",
            "final": 9,
            "group": "reliability"
          },
          {
            "name": "Clear communication",
            "final": 9,
            "group": "communication"
          },
          {
            "name": "Follow-up reliability",
            "final": 10,
            "group": "reliability"
          },
          {
            "name": "Shared professional interests",
            "final": 8,
            "group": "values"
          },
          {
            "name": "Reputation",
            "final": 9,
            "group": "trust"
          },
          {
            "name": "Boundaries",
            "final": 8,
            "group": "boundary"
          },
          {
            "name": "Long-term goodwill",
            "final": 8,
            "group": "safety"
          }
        ],
        "driverAttrs": [
          {
            "name": "Curiosity",
            "final": 9,
            "group": "empathy"
          },
          {
            "name": "Communication",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Reliability",
            "final": 10,
            "group": "reliability"
          },
          {
            "name": "Giving value first",
            "final": 9,
            "group": "skill"
          },
          {
            "name": "Social courage",
            "final": 8,
            "group": "skill"
          },
          {
            "name": "Listening",
            "final": 9,
            "group": "empathy"
          },
          {
            "name": "Respect",
            "final": 10,
            "group": "skill"
          },
          {
            "name": "Consistency",
            "final": 9,
            "group": "reliability"
          }
        ],
        "evidence": "A professional network compounds when you become useful, reliable, and easy to trust."
      }
    ],
    "basis": [
      "Uses research-informed relationship signals: trust, positive interaction balance, repair, emotional safety, time, boundaries, and reliability.",
      "Ratings measure required relationship-system maturity, not personal worth.",
      "Absolute Zero is fixed to 0 because no intention, contact habit, trust, or communication system exists yet."
    ]
  }
];

// Shared editable Meaning + How to build it text.
// Attributes use their group first, then the name-specific overrides below when a name matches.
const groupCopy: Record<string, DetailContent> = {
  market: {
    meaning: "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it.",
    build: [
      "Interview 10-20 people in one narrow segment and record repeated pains.",
      "Find current alternatives, budgets, search behavior, or manual workarounds.",
      "Choose a wedge where the pain is specific enough that people can say yes or no quickly.",
    ],
  },
  insight: {
    meaning: "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say.",
    build: [
      "Run weekly user or buyer conversations with notes.",
      "Collect exact objections, desired outcomes, and existing workarounds.",
      "Convert the strongest pattern into one testable offer, prototype, or workflow change.",
    ],
  },
  traction: {
    meaning: "Traction means the market has responded with behavior: signups, paid pilots, revenue, usage, renewals, referrals, or asset performance. Interest alone is not traction.",
    build: [
      "Define one conversion event that proves demand.",
      "Track weekly leads, activations, payments, usage, and retention.",
      "Improve the part of the funnel with the largest drop-off before adding more channels.",
    ],
  },
  retention: {
    meaning: "Retention means people keep coming back because the value is embedded in their life, workflow, relationship, or health routine. It is stronger than first-time interest.",
    build: [
      "Track repeat usage, renewal, attendance, contact, or adherence by cohort.",
      "Ask quitters what broke and active users what would be painful to lose.",
      "Improve the core habit or workflow before adding extra features.",
    ],
  },
  distribution: {
    meaning: "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust.",
    build: [
      "Pick one channel and run it long enough to get a real response rate.",
      "Track outreach volume, replies, meetings, conversion, and cycle time.",
      "Turn winning messages into a repeatable script, page, content format, or referral loop.",
    ],
  },
  economics: {
    meaning: "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding.",
    build: [
      "Write the simple unit model: price, cost, margin, payback, churn, and required volume.",
      "Test willingness to pay before building too much.",
      "Cut offers or work that add complexity without improving margin, retention, or learning.",
    ],
  },
  scale: {
    meaning: "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count.",
    build: [
      "Document the repeatable process that creates the result.",
      "Automate, template, or delegate the most repeated work.",
      "Separate work that must stay human from work that can become product, process, or capital leverage.",
    ],
  },
  moat: {
    meaning: "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage.",
    build: [
      "Identify what would still be valuable if a competitor copied the surface feature.",
      "Increase switching costs through workflow integration, trust, data, or community.",
      "Build proprietary knowledge from repeated customer, market, or operating feedback.",
    ],
  },
  systems: {
    meaning: "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior.",
    build: [
      "Create a weekly review with the few numbers or behaviors that matter.",
      "Turn repeated work into checklists, templates, automations, or delegated roles.",
      "Remove points where success depends on remembering or feeling motivated.",
    ],
  },
  skill: {
    meaning: "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes.",
    build: [
      "Practice in short cycles where you can see feedback quickly.",
      "Study strong examples, then apply the pattern to real work the same day.",
      "Track output quality, speed, consistency, and error rate instead of hours watched.",
    ],
  },
  leadership: {
    meaning: "Leadership means other people, vendors, collaborators, or a future team can produce a standard without you controlling every detail.",
    build: [
      "Define the outcome, owner, standard, and review rhythm.",
      "Delegate small repeatable work before delegating complex judgment.",
      "Review results with metrics and examples instead of taking every task back.",
    ],
  },
  cardio: {
    meaning: "Cardio strength means your weekly movement supports energy, heart health, and endurance. A real-world anchor is at least 150 minutes/week of moderate activity, or equivalent vigorous activity.",
    build: [
      "Start with a sustainable weekly target and increase gradually.",
      "Use walking, cycling, running, sports, or intervals that you can repeat.",
      "Track minutes, steps, pace, heart rate, or perceived effort weekly.",
    ],
  },
  strength: {
    meaning: "Strength means you train major muscle groups progressively and safely. The practical baseline is at least 2 strength-training days per week.",
    build: [
      "Pick a simple full-body or split routine you can repeat.",
      "Progress one variable at a time: reps, load, range of motion, or control.",
      "Keep technique and recovery good enough that training can continue for months.",
    ],
  },
  nutrition: {
    meaning: "Nutrition strength means your food pattern supports energy, body composition, training, and health markers. It is measured by consistency, protein/fiber quality, calorie awareness, and adherence.",
    build: [
      "Set one food structure you can repeat on normal days.",
      "Prioritize protein, minimally processed foods, hydration, and planned portions.",
      "Use weight, waist, energy, hunger, and workout performance to adjust.",
    ],
  },
  sleep: {
    meaning: "Sleep strength means duration, timing, and quality are stable enough to support recovery, decision making, training, and mood. Adults generally need 7 or more hours per night.",
    build: [
      "Set a consistent wake time and protect a realistic sleep window.",
      "Reduce late caffeine, heavy late meals, and bright screens when they hurt sleep.",
      "Track sleep duration, wake consistency, energy, and recovery for 2-4 weeks.",
    ],
  },
  recovery: {
    meaning: "Recovery means the system can absorb stress without breaking. It includes rest, deloads, pain signals, stress management, and sustainable pacing.",
    build: [
      "Schedule lighter days before fatigue forces them.",
      "Track pain, soreness, mood, sleep, and performance drops.",
      "Adjust volume, intensity, or expectations early instead of waiting for relapse or injury.",
    ],
  },
  tracking: {
    meaning: "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend.",
    build: [
      "Choose 1-3 metrics that directly reflect the goal.",
      "Review them on a fixed weekly cadence.",
      "Make one adjustment at a time so you can tell what worked.",
    ],
  },
  medical: {
    meaning: "Medical strength means obvious health risks, checkups, symptoms, dental care, and professional guidance are not ignored. It supports the habit system; it does not replace it.",
    build: [
      "Handle overdue checkups, dental care, and concerning symptoms.",
      "Use qualified clinicians for pain, medical conditions, or medication questions.",
      "Keep a simple record of key markers and follow-up dates.",
    ],
  },
  habit: {
    meaning: "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action.",
    build: [
      "Make the action small enough to repeat on a bad day.",
      "Attach it to a stable cue such as waking, meals, commute, or shutdown.",
      "Design the environment so the desired action is easier than the old default.",
    ],
  },
  trust: {
    meaning: "Trust means words, actions, boundaries, and follow-through are consistent enough that the relationship feels predictable and safe.",
    build: [
      "Keep small promises and repair missed ones quickly.",
      "Make expectations explicit instead of relying on mind-reading.",
      "Protect confidentiality, respect, and reliability in repeated interactions.",
    ],
  },
  communication: {
    meaning: "Communication quality means people can share needs, limits, appreciation, and problems without the pattern becoming contempt, defensiveness, stonewalling, or avoidance.",
    build: [
      "Use specific observations and requests instead of global blame.",
      "Add regular appreciation, check-ins, and clarification questions.",
      "Slow conflict down enough that both people can understand the issue and the impact.",
    ],
  },
  repair: {
    meaning: "Repair means conflict does not leave silent damage. The relationship can acknowledge impact, take responsibility, and return to respectful connection.",
    build: [
      "Name the rupture quickly and calmly.",
      "Own your part without turning it into a counterattack.",
      "Agree on one behavior that changes next time and revisit it later.",
    ],
  },
  values: {
    meaning: "Values means expectations, priorities, and standards are compatible enough that the relationship or path is not constantly fighting its own direction.",
    build: [
      "Write the non-negotiables, preferences, and open questions.",
      "Discuss expectations for time, money, work, family, health, or commitment.",
      "Look for behavior alignment, not only stated agreement.",
    ],
  },
  time: {
    meaning: "Time means connection has protected space on the calendar. Relationships and health systems weaken when they depend only on leftovers.",
    build: [
      "Schedule recurring time before the week fills up.",
      "Protect some phone-free or distraction-light interaction.",
      "Use small frequent contact when big blocks of time are unrealistic.",
    ],
  },
  safety: {
    meaning: "Safety means people can be honest without fear, humiliation, coercion, or repeated punishment. It includes emotional and practical boundaries.",
    build: [
      "Remove contempt, threats, manipulation, and pressure from hard conversations.",
      "Make it safe to say no, pause, or ask for clarity.",
      "Get outside support when the pattern involves fear, control, or harm.",
    ],
  },
  boundary: {
    meaning: "Boundaries mean limits are clear, respected, and enforceable. They protect connection by reducing resentment and hidden pressure.",
    build: [
      "State the limit, reason, and consequence plainly.",
      "Practice small boundaries before crisis boundaries.",
      "Track whether people respect the boundary in behavior, not only words.",
    ],
  },
  reliability: {
    meaning: "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior.",
    build: [
      "Make fewer promises and keep them more often.",
      "Use reminders, calendars, and written commitments.",
      "Repair misses quickly with ownership and a changed system.",
    ],
  },
  empathy: {
    meaning: "Empathy means you can understand another person's experience accurately enough that they feel heard, not managed or argued with.",
    build: [
      "Reflect what you heard before giving advice.",
      "Ask what the other person needs: listening, help, space, or a decision.",
      "Check whether your interpretation matches their actual experience.",
    ],
  },
};

// Name-specific overrides for attributes that need more precise wording than their group.
const nameCopy: Array<[RegExp, DetailContent]> = [
  [
    /recurring|arr|subscription/i,
    {
      meaning: "Recurring revenue means customers pay repeatedly because the product remains useful. In SaaS, this is usually tracked as MRR/ARR, churn, expansion, gross margin, and net revenue retention.",
      build: [
        "Sell a narrow paid plan before adding broad features.",
        "Track MRR/ARR, churn, expansion, gross margin, and CAC payback monthly.",
        "Improve onboarding and core workflow until renewal is easier than cancellation.",
      ],
    },
  ],
  [
    /cac|payback|unit economics/i,
    {
      meaning: "Unit economics means one customer, user, transaction, or asset produces enough value after direct costs and acquisition cost to justify scaling.",
      build: [
        "Calculate contribution margin per customer or transaction.",
        "Estimate CAC from real channel tests, not hope.",
        "Do not scale spend until payback and retention are acceptable.",
      ],
    },
  ],
  [
    /retention|renewal|workflow lock-in/i,
    {
      meaning: "Retention means users keep using, paying, renewing, or returning because the product or relationship is embedded in a real workflow.",
      build: [
        "Measure cohort retention and renewal behavior.",
        "Interview retained and churned users separately.",
        "Improve the smallest core workflow that creates the repeat habit.",
      ],
    },
  ],
  [/150|aerobic|cardio/i, groupCopy.cardio],
  [/strength training|progressive overload|muscle/i, groupCopy.strength],
  [/sleep/i, groupCopy.sleep],
  [
    /positive-to-negative|interaction balance/i,
    {
      meaning: "Positive-to-negative interaction balance measures whether appreciation, respect, repair, and warmth outweigh criticism or hurt. Gottman research commonly references a 5:1 positive-to-negative ratio during conflict.",
      build: [
        "Add daily appreciation and small bids for connection.",
        "During conflict, remove contempt, name-calling, eye-rolling, and global blame.",
        "Repair after hard conversations with ownership and one specific next behavior.",
      ],
    },
  ],
  [/trust|reputation/i, groupCopy.trust],
  [/boundary/i, groupCopy.boundary],
];

function copyForAttribute(attr: Attribute) {
  const name = clean(attr.name);
  return nameCopy.find(([pattern]) => pattern.test(name))?.[1] || groupCopy[attr.group] || groupCopy.skill;
}

function stageBuildPlan(goal: Goal, path: Path, step: Step) {
  const index = goal.steps.indexOf(step);
  const reverseStage = goal.steps.length - index - 1;
  const relevantGroups = Object.entries(step.factors || {})
    .filter(([group]) => group !== "default")
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([group]) => group);
  const groupActions = relevantGroups.flatMap((group) => groupCopy[group]?.build.slice(0, 1) || []);

  if (reverseStage === 0) {
    return [
      "Record the honest zero state: no proof, no routine, no sales, no reliable pattern.",
      "Choose one baseline metric and one next action that can be done this week.",
      "Do not rate an area above 0 until there is an observable result.",
    ];
  }

  if (index === 0) {
    return [
      "Keep a small dashboard for the core outcome and the leading behaviors behind it.",
      "Protect the strongest repeatable system from founder dependence, motivation swings, or relationship drift.",
      "Review the weakest required domain monthly and improve one constraint at a time.",
    ];
  }

  return [
    `For ${clean(path.name)}, prove this stage with an observable result before trying to jump to the next level.`,
    ...groupActions,
    "Review the current Business and Person gaps, then work on the larger gap first for 7-14 days.",
  ].slice(0, 5);
}

export function stepDetailContent(goal: Goal, path: Path, step: Step): DetailContent {
  const businessRequired = avgRating(path.vehicleAttrs, step);
  const personRequired = avgRating(path.driverAttrs, step);
  const strongestGroups = Object.entries(step.factors || {})
    .filter(([group, factor]) => group !== "default" && factor > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([group]) => group)
    .join(", ");

  return {
    meaning: `For ${clean(path.name)}, this step means: ${clean(step.title)} ${clean(step.note)} Required average at this step is about ${businessRequired * 10}% for Business and ${personRequired * 10}% for Person. The strongest real-world constraints here are ${strongestGroups || "the baseline proof required by the step"}.`,
    build: stageBuildPlan(goal, path, step),
  };
}

export function attributeDetailContent(attr: Attribute, kind: AttrKind, path: Path, step?: Step): DetailContent {
  const copy = copyForAttribute(attr);
  const target = step ? stepRating(attr, step) : attr.final;
  const matrix = kind === "vehicle" ? "Business" : "Person";
  const scope = step ? `for this step` : `for the final goal`;

  return {
    meaning: `${copy.meaning} In this ${clean(path.name)} map, ${clean(attr.name)} is a ${matrix} attribute. Its required target ${scope} is ${target * 10}%.`,
    build: copy.build,
  };
}

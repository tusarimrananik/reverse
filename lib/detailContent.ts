import { avgRating, clean, stepRating } from "@/lib/ratings";
import type { Attribute, DetailContent, Goal, Path, Step } from "@/lib/types";

type AttrKind = "vehicle" | "driver";

const groupCopy: Record<string, DetailContent> = {
  market: {
    meaning: "Real-world market strength means the problem is urgent, expensive, frequent, or tied to a required outcome. Strong proof is customers already spending time, money, risk, or manual labor to solve it.",
    build: ["Interview 10-20 people in one narrow segment and record repeated pains.", "Find current alternatives, budgets, search behavior, or manual workarounds.", "Choose a wedge where the pain is specific enough that people can say yes or no quickly."],
  },
  insight: {
    meaning: "Insight means you understand the user's workflow, language, constraints, and buying trigger well enough to predict what they will do, not only what they say.",
    build: ["Run weekly user or buyer conversations with notes.", "Collect exact objections, desired outcomes, and existing workarounds.", "Convert the strongest pattern into one testable offer, prototype, or workflow change."],
  },
  traction: {
    meaning: "Traction means the market has responded with behavior: signups, paid pilots, revenue, usage, renewals, referrals, or asset performance. Interest alone is not traction.",
    build: ["Define one conversion event that proves demand.", "Track weekly leads, activations, payments, usage, and retention.", "Improve the part of the funnel with the largest drop-off before adding more channels."],
  },
  retention: {
    meaning: "Retention means people keep coming back because the value is embedded in their life, workflow, relationship, or health routine. It is stronger than first-time interest.",
    build: ["Track repeat usage, renewal, attendance, contact, or adherence by cohort.", "Ask quitters what broke and active users what would be painful to lose.", "Improve the core habit or workflow before adding extra features."],
  },
  distribution: {
    meaning: "Distribution means you have a reliable way to reach the right people and convert attention into action. In practice this can be sales, referrals, partnerships, content, search, community, or trust.",
    build: ["Pick one channel and run it long enough to get a real response rate.", "Track outreach volume, replies, meetings, conversion, and cycle time.", "Turn winning messages into a repeatable script, page, content format, or referral loop."],
  },
  economics: {
    meaning: "Economics means the numbers can support the goal after costs, time, churn, taxes, risk, and reinvestment. Good economics show up as margin, payback, pricing power, cash flow, or compounding.",
    build: ["Write the simple unit model: price, cost, margin, payback, churn, and required volume.", "Test willingness to pay before building too much.", "Cut offers or work that add complexity without improving margin, retention, or learning."],
  },
  scale: {
    meaning: "Scale means output can grow without the same amount of founder time, manual effort, or local presence. Software, systems, capital, audience, and team leverage all count.",
    build: ["Document the repeatable process that creates the result.", "Automate, template, or delegate the most repeated work.", "Separate work that must stay human from work that can become product, process, or capital leverage."],
  },
  moat: {
    meaning: "Moat means the result becomes harder to copy over time through data, workflow depth, switching cost, trust, brand, network effects, expertise, or regulatory/operational advantage.",
    build: ["Identify what would still be valuable if a competitor copied the surface feature.", "Increase switching costs through workflow integration, trust, data, or community.", "Build proprietary knowledge from repeated customer, market, or operating feedback."],
  },
  systems: {
    meaning: "Systems means the result does not rely on memory, mood, or heroic effort. Checklists, dashboards, schedules, roles, and feedback loops carry the behavior.",
    build: ["Create a weekly review with the few numbers or behaviors that matter.", "Turn repeated work into checklists, templates, automations, or delegated roles.", "Remove points where success depends on remembering or feeling motivated."],
  },
  skill: {
    meaning: "Skill means demonstrated ability under real constraints. It is not learning content; it is improved output, judgment, speed, consistency, and recovery from mistakes.",
    build: ["Practice in short cycles where you can see feedback quickly.", "Study strong examples, then apply the pattern to real work the same day.", "Track output quality, speed, consistency, and error rate instead of hours watched."],
  },
  leadership: {
    meaning: "Leadership means other people, vendors, collaborators, or a future team can produce a standard without you controlling every detail.",
    build: ["Define the outcome, owner, standard, and review rhythm.", "Delegate small repeatable work before delegating complex judgment.", "Review results with metrics and examples instead of taking every task back."],
  },
  cardio: {
    meaning: "Cardio strength means your weekly movement supports energy, heart health, and endurance. A real-world anchor is at least 150 minutes/week of moderate activity, or equivalent vigorous activity.",
    build: ["Start with a sustainable weekly target and increase gradually.", "Use walking, cycling, running, sports, or intervals that you can repeat.", "Track minutes, steps, pace, heart rate, or perceived effort weekly."],
  },
  strength: {
    meaning: "Strength means you train major muscle groups progressively and safely. The practical baseline is at least 2 strength-training days per week.",
    build: ["Pick a simple full-body or split routine you can repeat.", "Progress one variable at a time: reps, load, range of motion, or control.", "Keep technique and recovery good enough that training can continue for months."],
  },
  nutrition: {
    meaning: "Nutrition strength means your food pattern supports energy, body composition, training, and health markers. It is measured by consistency, protein/fiber quality, calorie awareness, and adherence.",
    build: ["Set one food structure you can repeat on normal days.", "Prioritize protein, minimally processed foods, hydration, and planned portions.", "Use weight, waist, energy, hunger, and workout performance to adjust."],
  },
  sleep: {
    meaning: "Sleep strength means duration, timing, and quality are stable enough to support recovery, decision making, training, and mood. Adults generally need 7 or more hours per night.",
    build: ["Set a consistent wake time and protect a realistic sleep window.", "Reduce late caffeine, heavy late meals, and bright screens when they hurt sleep.", "Track sleep duration, wake consistency, energy, and recovery for 2-4 weeks."],
  },
  recovery: {
    meaning: "Recovery means the system can absorb stress without breaking. It includes rest, deloads, pain signals, stress management, and sustainable pacing.",
    build: ["Schedule lighter days before fatigue forces them.", "Track pain, soreness, mood, sleep, and performance drops.", "Adjust volume, intensity, or expectations early instead of waiting for relapse or injury."],
  },
  tracking: {
    meaning: "Tracking means you have enough honest measurement to make decisions. It does not need to be obsessive; it needs to reveal the trend.",
    build: ["Choose 1-3 metrics that directly reflect the goal.", "Review them on a fixed weekly cadence.", "Make one adjustment at a time so you can tell what worked."],
  },
  medical: {
    meaning: "Medical strength means obvious health risks, checkups, symptoms, dental care, and professional guidance are not ignored. It supports the habit system; it does not replace it.",
    build: ["Handle overdue checkups, dental care, and concerning symptoms.", "Use qualified clinicians for pain, medical conditions, or medication questions.", "Keep a simple record of key markers and follow-up dates."],
  },
  habit: {
    meaning: "Habit strength means the behavior happens under ordinary conditions, not only during motivation spikes. Environment, cues, and identity carry the action.",
    build: ["Make the action small enough to repeat on a bad day.", "Attach it to a stable cue such as waking, meals, commute, or shutdown.", "Design the environment so the desired action is easier than the old default."],
  },
  trust: {
    meaning: "Trust means words, actions, boundaries, and follow-through are consistent enough that the relationship feels predictable and safe.",
    build: ["Keep small promises and repair missed ones quickly.", "Make expectations explicit instead of relying on mind-reading.", "Protect confidentiality, respect, and reliability in repeated interactions."],
  },
  communication: {
    meaning: "Communication quality means people can share needs, limits, appreciation, and problems without the pattern becoming contempt, defensiveness, stonewalling, or avoidance.",
    build: ["Use specific observations and requests instead of global blame.", "Add regular appreciation, check-ins, and clarification questions.", "Slow conflict down enough that both people can understand the issue and the impact."],
  },
  repair: {
    meaning: "Repair means conflict does not leave silent damage. The relationship can acknowledge impact, take responsibility, and return to respectful connection.",
    build: ["Name the rupture quickly and calmly.", "Own your part without turning it into a counterattack.", "Agree on one behavior that changes next time and revisit it later."],
  },
  values: {
    meaning: "Values means expectations, priorities, and standards are compatible enough that the relationship or path is not constantly fighting its own direction.",
    build: ["Write the non-negotiables, preferences, and open questions.", "Discuss expectations for time, money, work, family, health, or commitment.", "Look for behavior alignment, not only stated agreement."],
  },
  time: {
    meaning: "Time means connection has protected space on the calendar. Relationships and health systems weaken when they depend only on leftovers.",
    build: ["Schedule recurring time before the week fills up.", "Protect some phone-free or distraction-light interaction.", "Use small frequent contact when big blocks of time are unrealistic."],
  },
  safety: {
    meaning: "Safety means people can be honest without fear, humiliation, coercion, or repeated punishment. It includes emotional and practical boundaries.",
    build: ["Remove contempt, threats, manipulation, and pressure from hard conversations.", "Make it safe to say no, pause, or ask for clarity.", "Get outside support when the pattern involves fear, control, or harm."],
  },
  boundary: {
    meaning: "Boundaries mean limits are clear, respected, and enforceable. They protect connection by reducing resentment and hidden pressure.",
    build: ["State the limit, reason, and consequence plainly.", "Practice small boundaries before crisis boundaries.", "Track whether people respect the boundary in behavior, not only words."],
  },
  reliability: {
    meaning: "Reliability means people can count on follow-through. It is one of the most concrete forms of trust because it is visible in repeated behavior.",
    build: ["Make fewer promises and keep them more often.", "Use reminders, calendars, and written commitments.", "Repair misses quickly with ownership and a changed system."],
  },
  empathy: {
    meaning: "Empathy means you can understand another person's experience accurately enough that they feel heard, not managed or argued with.",
    build: ["Reflect what you heard before giving advice.", "Ask what the other person needs: listening, help, space, or a decision.", "Check whether your interpretation matches their actual experience."],
  },
};

const nameCopy: Array<[RegExp, DetailContent]> = [
  [/recurring|arr|subscription/i, {
    meaning: "Recurring revenue means customers pay repeatedly because the product remains useful. In SaaS, this is usually tracked as MRR/ARR, churn, expansion, gross margin, and net revenue retention.",
    build: ["Sell a narrow paid plan before adding broad features.", "Track MRR/ARR, churn, expansion, gross margin, and CAC payback monthly.", "Improve onboarding and core workflow until renewal is easier than cancellation."],
  }],
  [/cac|payback|unit economics/i, {
    meaning: "Unit economics means one customer, user, transaction, or asset produces enough value after direct costs and acquisition cost to justify scaling.",
    build: ["Calculate contribution margin per customer or transaction.", "Estimate CAC from real channel tests, not hope.", "Do not scale spend until payback and retention are acceptable."],
  }],
  [/retention|renewal|workflow lock-in/i, {
    meaning: "Retention means users keep using, paying, renewing, or returning because the product or relationship is embedded in a real workflow.",
    build: ["Measure cohort retention and renewal behavior.", "Interview retained and churned users separately.", "Improve the smallest core workflow that creates the repeat habit."],
  }],
  [/150|aerobic|cardio/i, groupCopy.cardio],
  [/strength training|progressive overload|muscle/i, groupCopy.strength],
  [/sleep/i, groupCopy.sleep],
  [/positive-to-negative|interaction balance/i, {
    meaning: "Positive-to-negative interaction balance measures whether appreciation, respect, repair, and warmth outweigh criticism or hurt. Gottman research commonly references a 5:1 positive-to-negative ratio during conflict.",
    build: ["Add daily appreciation and small bids for connection.", "During conflict, remove contempt, name-calling, eye-rolling, and global blame.", "Repair after hard conversations with ownership and one specific next behavior."],
  }],
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
    return ["Record the honest zero state: no proof, no routine, no sales, no reliable pattern.", "Choose one baseline metric and one next action that can be done this week.", "Do not rate an area above 0 until there is an observable result."];
  }

  if (index === 0) {
    return ["Keep a small dashboard for the core outcome and the leading behaviors behind it.", "Protect the strongest repeatable system from founder dependence, motivation swings, or relationship drift.", "Review the weakest required domain monthly and improve one constraint at a time."];
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

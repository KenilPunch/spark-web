// ============================================================
// EDIT THIS FILE to customize the site. No other file needs changing for content.
// Leave a value as "" and the site shows a clear [INSERT ...] placeholder instead.
// Never put passwords or secret keys here: this file is public in the browser.
// ============================================================
export const EVENT = {
  status: 'CREW ASSEMBLY INITIATED',
  // Countdown target. Use ISO format with timezone, e.g. '2026-11-20T10:00:00+05:30'.
  // Leave "" until the date is confirmed (the site then shows "MISSION DATE TO BE ANNOUNCED").
  dateISO: '',
  // Confirmed details (leave "" if unknown):
  fields: { date: '', time: '', venue: '', eligibility: '', deadline: '', fee: '', teamSize: '' },
  // Link to the approved registration form (Google Form etc.). "" = button scrolls to the demo form.
  registrationUrl: '',
  // Optional form endpoint that accepts a JSON POST (e.g. a Formspree URL). "" = demo mode, nothing is sent.
  registrationEndpoint: '',
  contactUrl: '', // e.g. 'mailto:club@example.edu' (only if confirmed)
  social: [], // e.g. [{ label: 'Instagram', url: 'https://...' }] (only official links)
};

export const NAV = [['Home', '#home'], ['About', '#about'], ['Missions', '#missions'], ['Rules', '#rules'], ['Register', '#register']];

export const FEATURES = [
  { icon: 'tasks', color: 'var(--green)', title: 'COMPLETE YOUR TASKS', text: 'Team up on mission challenges where every crewmate pulls their weight.' },
  { icon: 'search', color: 'var(--red)', title: 'FIND THE IMPOSTOR', text: 'Watch closely, question everything, and spot who is not what they seem.' },
  { icon: 'crew', color: 'var(--cyan)', title: 'TRUST YOUR CREW', text: 'Talk it out, plan together, and have fun doing it.' },
];

export const MISSIONS = [
  { icon: 'tasks', color: 'var(--green)', title: 'CREW COLLABORATION', text: 'Work together and complete assigned challenges.' },
  { icon: 'search', color: 'var(--yellow)', title: 'IMPOSTOR INVESTIGATION', text: 'Observe behavior, discuss evidence, and identify suspicious players.' },
  { icon: 'alert', color: 'var(--red)', title: 'EMERGENCY MEETING', text: 'Join the discussion and vote according to the event rules.' },
];

// PROPOSED rules: organizers must review and approve before publishing.
export const RULES = [
  ['Eligibility and participation', 'Open to [INSERT ELIGIBILITY]. Participants may need a valid college ID. [CONFIRM]'],
  ['Teams and player limits', 'Team size: [INSERT TEAM SIZE]. Solo entrants may be placed into crews by organizers. [CONFIRM]'],
  ['Fair play and conduct', 'Respect every player. No cheating, harassment, or sharing hidden roles outside the game.'],
  ['Timings and reporting', 'Report to [INSERT VENUE] by [INSERT REPORTING TIME]. Late arrivals may not be admitted. [CONFIRM]'],
  ['Organizer decisions', 'Organizers have the final say. Raise disputes politely with a SPARK volunteer during the event.'],
];

export const FAQ = [
  ['Who can participate?', 'Eligibility is [INSERT ELIGIBILITY]. Check the Mission Briefing for updates.'],
  ['Do I need to form a team beforehand?', '[INSERT ANSWER: confirm whether teams are pre-formed or assigned on the day.]'],
  ['What should I bring?', '[INSERT ANSWER: for example, college ID and any required items.]'],
  ['Is prior experience with Among Us required?', 'Not expected. The event is inspired by the game, and organizers will explain the rules. [CONFIRM]'],
  ['Where can I find the event schedule?', 'The schedule will be shared by SPARK. [INSERT SCHEDULE LINK OR DATE]'],
  ['How do I contact the organizers?', '[INSERT OFFICIAL CONTACT]'],
];

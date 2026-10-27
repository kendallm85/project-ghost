import type { Memory } from './memories';

/** Entirely fictional Halloween case file; no real people or events. */
export const BLACKWOOD_CASE_ID = 'blackwood-1998';
export const BLACKWOOD_MEMORIES: Memory[] = [
  {
    id: 'blackwood-sarah-1998',
    title: 'Blackwood Manor — Sarah: The Midnight Visitor',
    story: 'FICTIONAL HALLOWEEN CASE — Witness: Sarah. On October 31, 1998, at 11:47 PM, Sarah stood outside the abandoned Blackwood Manor with Marcus and Emily. She saw a woman wearing a white dress at an upstairs window. Sarah could not identify the woman and did not see how she entered or left.',
    createdAt: '1998-10-31T23:47:00.000Z',
  },
  {
    id: 'blackwood-marcus-1998',
    title: 'Blackwood Manor — Marcus: The Locked Door',
    story: 'FICTIONAL HALLOWEEN CASE — Witness: Marcus. On October 31, 1998, Marcus approached the front door of Blackwood Manor with Sarah and Emily. He tried the handle and found it locked. Marcus believed nobody had entered the house while the three friends were watching, but he could not see every entrance. He did not establish whether anyone was inside.',
    createdAt: '1998-10-31T23:48:00.000Z',
  },
  {
    id: 'blackwood-emily-1998',
    title: 'Blackwood Manor — Emily: The Broken Clock',
    story: 'FICTIONAL HALLOWEEN CASE — Witness: Emily. On October 31, 1998, Emily looked through a ground-floor window at Blackwood Manor and saw a grandfather clock showing 11:47 PM. She thought the clock had stopped, but did not check whether it was working. Soon afterward, she heard footsteps that seemed to come from upstairs. She did not see who or what made the sound.',
    createdAt: '1998-10-31T23:49:00.000Z',
  },
];
export const BLACKWOOD_QUESTIONS = [
  'What connects Sarah’s sighting and Emily’s clock?',
  'Does the evidence prove the woman was a ghost?',
  'Which details remain unexplained?',
];

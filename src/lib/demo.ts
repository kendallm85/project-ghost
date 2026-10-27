/** Clearly scripted fictional responses; no model inference occurs here. */
export function fictionalDemoResponse(question: string): string {
 const q=question.toLowerCase();
 if (/color|colour|lantern|blue/.test(q)) return 'In the fictional story, Mara placed a blue lantern on the porch every autumn.';
 if (/brother|eli|cinnamon|roll/.test(q)) return 'The fictional memory says Mara’s brother Eli brought cinnamon rolls when they shared childhood stories.';
 if (/when|season|autumn|fall/.test(q)) return 'The story says this happened every autumn. It does not specify an exact date.';
 return 'The fictional memory tells us that Mara put a blue lantern on the porch each autumn, and her brother Eli brought cinnamon rolls while they shared childhood stories. The story does not provide further details about your question.';
}
export const DEMO_ID = 'fictional-demo';

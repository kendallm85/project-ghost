export type Memory = { id: string; title: string; story: string; createdAt: string };
const DB_NAME = 'project-ghost';
const STORE = 'memories';
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => { if (!request.result.objectStoreNames.contains(STORE)) request.result.createObjectStore(STORE, {keyPath:'id'}); };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
export async function listMemories(): Promise<Memory[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => { const tx = db.transaction(STORE, 'readonly'); const req = tx.objectStore(STORE).getAll(); req.onsuccess = () => resolve((req.result as Memory[]).sort((a,b) => b.createdAt.localeCompare(a.createdAt))); req.onerror = () => reject(req.error); tx.oncomplete = () => db.close(); });
}
export async function saveMemory(memory: Memory): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => { const tx = db.transaction(STORE, 'readwrite'); tx.objectStore(STORE).put(memory); tx.oncomplete = () => {db.close();resolve();}; tx.onerror = () => {db.close();reject(tx.error);}; });
}

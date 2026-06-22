export type Review = { name: string; stars: number; text: string; hood?: string };

const BIN_ID = "6a15f83d3f632058588a2389";
const BIN_KEY = "$2a$10$w/r.oQylKODG3VKKUG8Zqe03pXCfUjrj5KeIT0KLKQuYzWUKYryLG";
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

type Listener = (reviews: Review[]) => void;

let reviews: Review[] = [];
let loaded = false;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l(reviews));
}

export async function loadReviews() {
  loaded = true;
  try {
    const res = await fetch(`${BIN_URL}/latest`, { headers: { "X-Master-Key": BIN_KEY } });
    const data = await res.json();
    reviews = data?.record?.reviews ?? [];
  } catch {
    reviews = [];
  }
  notify();
}

export function subscribeReviews(listener: Listener) {
  listeners.add(listener);
  listener(reviews);
  if (!loaded) loadReviews();
  return () => {
    listeners.delete(listener);
  };
}

export async function addReview(review: Review) {
  reviews = [...reviews, review];
  notify();
  try {
    await fetch(BIN_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Master-Key": BIN_KEY },
      body: JSON.stringify({ reviews }),
    });
  } catch (e) {
    console.warn("Save failed", e);
  }
}

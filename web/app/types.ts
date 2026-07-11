// The normalized shape the home loader produces from the admin API and the
// gallery components consume. The raw API payload (nullable title etc.) is
// typed inline at the fetch site instead — don't widen this to match it.
export interface WorkImage {
  url: string;
  title: string;
  year: number | null;
}

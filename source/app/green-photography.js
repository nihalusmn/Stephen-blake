// Grade names were read from the labels on the customer's supplied samples.
// Never use a labelled photograph as evidence for a different selected grade.
const photo = name => `assets/photography/${name}-v32-original-logo-960.webp`;
export const GREEN_PHOTOGRAPHY = {
  'robusta-cherry-aaa': {
    defaultGrade: 'AAA',
    grades: { AAA: photo('green-robusta-cherry-aaa') }
  },
  'arabica-cherry-a': {
    defaultGrade: 'A',
    grades: { A: photo('green-arabica-cherry-a') }
  },
  'arabica-parchment-c': {
    defaultGrade: 'A',
    grades: {
      A: photo('green-arabica-pl-a'),
      PB: photo('green-arabica-pl-pb'),
      C: photo('green-arabica-parchment-c')
    }
  }
};
// Owner requested a single common photograph for every unphotographed grade.
export const COMMON_GREEN_PHOTO = 'assets/photography/green-collection-tray-v32-original-logo-960.webp';
export function greenPhotograph(id, grade) {
  const item = GREEN_PHOTOGRAPHY[id];
  if (!item) return null;
  const exact = item.grades[grade];
  return {
    src: exact || COMMON_GREEN_PHOTO,
    sampled: !!exact,
    caption: exact
      ? `Grade ${id === 'arabica-parchment-c' ? 'PL ' : ''}${grade} · Retouched sample photograph`
      : 'Green coffee reference photograph · Grade-specific sample on request'
  };
}

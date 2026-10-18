// Operative token looks (Markerlight, Poison, Deathmarked, Soulsight...): the glyph each kind wears and its name. A leaf
// module with no imports, shared by the 3D marker over the figure (Operative.tsx), the DOM chip on the operative card
// (TokenChips.tsx), the hover wording (tokenInfo.ts) and the event feed (game/labels.ts). Counts, owners and expiry
// come from the engine (`Operative.tokens`); only the look and the name live here. Our own simple shapes.

export interface TokenGlyph {
  /** number of polygon sides (3 triangle, 4 diamond, 6 hexagon...); 24 reads as a disc */
  sides: number
  /** drawn as an outline instead of a filled shape */
  ring?: boolean
  color: string
}

export interface TokenDef {
  /** short name: "Markerlight" (the token is "Markerlight token") */
  label: string
  glyph: TokenGlyph
  /** the glossary term for the long explanation */
  term: string
  /** fallback body when the glossary has no entry */
  body: string
  /** extra line read from the token's engine `data` (the drug an operative has, the Imperative it took); null when none */
  detail?: (data: Record<string, unknown> | undefined) => string | null
}

const cap = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1)

const DEFS: Record<string, TokenDef> = {
  'pf.markerlight': { label: 'Markerlight', glyph: { sides: 24, ring: true, color: '#ff5a4a' }, term: 'Markerlight token', body: 'A Pathfinder target marker on this operative. More tokens give the Pathfinders\' shots against it more benefits.' },
  'pf.photon': { label: 'Photon', glyph: { sides: 6, color: '#ffd24d' }, term: 'Photon token', body: 'Slowed by a Photon Grenade: Move reduced by 2 inches and no Dash until the end of its next activation.' },
  'pf.pulse': { label: 'Pulse accelerator', glyph: { sides: 3, color: '#4dd2ff' }, term: 'Pulse accelerator token', body: 'A Pulse Accelerator drone boost is active.' },
  'pm.poison': { label: 'Poison', glyph: { sides: 24, color: '#9be03a' }, term: 'Poison token', body: 'Poisoned: it takes 1 damage whenever it activates.' },
  'hie.deathmarked': { label: 'Deathmarked', glyph: { sides: 4, color: '#3dff9a' }, term: 'Deathmarked token', body: 'Marked for the Deathmarks: they shoot this operative with Seek.' },
  'hie.madness': { label: 'Madness', glyph: { sides: 5, color: '#c36bff' }, term: 'Madness token', body: 'Gripped by madness: it may be unable to activate.' },
  'hie.chronometron': { label: 'Chronometron', glyph: { sides: 24, ring: true, color: '#5ab0ff' }, term: 'Chronometron token', body: 'A Chronomancer\'s time boost is active on this operative.' },
  'hie.reinforce': { label: 'Reinforce', glyph: { sides: 4, ring: true, color: '#c4cce0' }, term: 'Reinforce token', body: 'Toughened by Reinforce Metal.' },
  'hie.augment': { label: 'Augment', glyph: { sides: 3, ring: true, color: '#ffa94d' }, term: 'Augment token', body: 'One of its weapons is changed by Augment Weapon.' },
  'hie.shroud': { label: 'Shroud', glyph: { sides: 6, ring: true, color: '#8f7ae0' }, term: 'Shroud token', body: 'Under a Nightmare Shroud.' },
  // batch B: Hand of the Archon
  'ha.pain': { label: 'Pain', glyph: { sides: 3, color: '#e0457b' }, term: 'Pain token', body: 'A Hand of the Archon operative has been hurting people. Each Pain token can be spent on an invigoration.' },
  'ha.poison': { label: 'Venom', glyph: { sides: 6, ring: true, color: '#7bd44a' }, term: 'Venom token', body: 'Poisoned by the Hand of the Archon: it takes D3 damage whenever it activates.' },
  'ha.drug': {
    label: 'Drug',
    glyph: { sides: 4, ring: true, color: '#4de1c1' },
    term: 'Drug token',
    body: 'A combat drug is in this operative\'s system.',
    detail: (d) => (typeof d?.drug === 'string' ? `Drug: ${cap(d.drug.replace(/^ha\.a\./, '').replace(/-/g, ' '))}.` : null),
  },
  'ha.omen': { label: 'Omen', glyph: { sides: 5, color: '#f0c24d' }, term: 'Omen token', body: 'Named by a hunter\'s Omen: an enemy re-rolls its 6s, a friend may re-roll its 1s.' },
  'ha.mark': { label: 'Marked', glyph: { sides: 4, ring: true, color: '#ff6a3d' }, term: 'Mark token', body: 'Marked by a Skysplinter Assassin: its ranged weapons have Seek Light against this operative and it is never obscured to them.' },
  'ha.brutal-display': { label: 'Cowed', glyph: { sides: 3, ring: true, color: '#c4506a' }, term: 'Cowed token', body: 'Cowed by a Brutal Display: it can contest but never control a marker, and cannot pick markers up or take mission actions until the next turning point.' },
  // batch B: Legionaries
  'lg.unleash': { label: 'Unleashed', glyph: { sides: 5, color: '#ff5a3a' }, term: 'Unleash token', body: 'The Anointed has unleashed its daemon for the rest of the battle.' },
  'lg.warded': { label: 'Warded', glyph: { sides: 6, ring: true, color: '#ffb347' }, term: 'Warded token', body: 'Warded Armour: its Save is 2+ until the Ready step of the next Strategy phase.' },
  // batch B: Hunter Clade
  'hc.spot': { label: 'Targeted', glyph: { sides: 3, ring: true, color: '#e8c34d' }, term: 'Targeted token', body: 'Spotted by a Surveyor: friendly Hunter Clade operatives near it shoot this enemy with Seek Light, and it cannot be obscured.' },
  'hc.doctrine': {
    label: 'Override',
    glyph: { sides: 4, color: '#59c3ff' },
    term: 'Override token',
    body: 'Command Override: this operative follows a different Imperative until the turning point ends.',
    detail: (d) => (typeof d?.mode === 'string' ? `Imperative: ${cap(d.mode)}.` : null),
  },
  'hc.omnissiah': {
    label: 'Omnissiah',
    glyph: { sides: 6, color: '#ff9a3d' },
    term: 'Omnissiah token',
    body: 'Omnissiah\'s Imperative: this operative has an extra rule from its current Imperative until the turning point ends.',
    detail: (d) => (typeof d?.mode === 'string' ? `Imperative: ${cap(d.mode)}.` : null),
  },
  // batch B: Hearthkyn Salvagers
  'hk.grudge': { label: 'Grudge', glyph: { sides: 4, color: '#d0873a' }, term: 'Grudge token', body: 'This enemy holds a Hearthkyn grudge: for each token, Hearthkyn Salvagers attacking it turn one normal success into a crit.' },
  'hk.system-jam': { label: 'System Jam', glyph: { sides: 6, color: '#7fa6ff' }, term: 'System Jam token', body: 'Jammed: it cannot be activated while its player still has a ready operative without a token.' },
  'hk.spot': { label: 'Spot', glyph: { sides: 24, ring: true, color: '#7be0a0' }, term: 'Spot token', body: 'Spotted by a Lokatr: Hearthkyn Salvagers near it shoot this enemy with Seek Light.' },
  'wyr.soulsight': { label: 'Soulsight', glyph: { sides: 6, color: '#ff7ad9' }, term: 'Soulsight token', body: 'Seen by the cult\'s familiar: the Sanctus operatives fight and shoot it with extra rules.' },
}

const FALLBACK_GLYPH: TokenGlyph = { sides: 24, color: '#d4d6e2' }

/** "pf.markerlight" -> "Markerlight", for kinds a later team adds before this table learns them. */
function kindLabel(kind: string): string {
  const raw = kind.includes('.') ? kind.slice(kind.indexOf('.') + 1) : kind
  return raw.replace(/[-_]/g, ' ').replace(/^./, (c) => c.toUpperCase())
}

export function tokenDef(kind: string): TokenDef {
  return DEFS[kind] ?? { label: kindLabel(kind), glyph: FALLBACK_GLYPH, term: `${kindLabel(kind)} token`, body: 'A token a team rule put on this operative.' }
}

/** SVG polygon points for a glyph of `sides` in a box of side `size` (a 4-sided glyph is a diamond). */
export function glyphPoints(sides: number, size: number): string {
  const r = size / 2
  const pts: string[] = []
  for (let i = 0; i < sides; i++) {
    const a = (i / sides) * Math.PI * 2 - Math.PI / 2
    pts.push(`${(r + Math.cos(a) * (r - 0.5)).toFixed(2)},${(r + Math.sin(a) * (r - 0.5)).toFixed(2)}`)
  }
  return pts.join(' ')
}

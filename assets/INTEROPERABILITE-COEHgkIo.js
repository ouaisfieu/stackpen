const n=`# 🔗 Interopérabilité - Lier les Modules

Guide technique et conceptuel pour connecter Hunt, MySPOT et Sauron.

---

## 📌 Principes Clés

### 1. Modules = Indépendants

Chaque module fonctionne seul:
- **Hunt** peut exister sans MySPOT/Sauron
- **MySPOT** peut exister sans Hunt/Sauron
- **Sauron** peut exister sans Hunt/MySPOT

### 2. Liens = Optionnels

Connexions entre modules:
- Zéro obligation
- Maximal flexibilité
- Utilité croît avec connexions

### 3. Query = Cross-Module

Une fois liés, requêtes complexes deviennent possibles:

\`\`\`
"Candidats de Jean possèdent skills requis par stratégie Acme
 dont client Acme Corp a besoin"

= 1 requête = 3 modules
\`\`\`

---

## 🏗️ Architecture des Liens

### Table: module_links

\`\`\`sql
CREATE TABLE module_links (
  id uuid,
  user_id uuid,
  source_module text,      -- 'hunt', 'myspot', 'sauron'
  source_id text,          -- UUID de l'entité
  source_entity_type text, -- 'candidate', 'mission', 'client', 'entity', etc
  target_module text,      -- 'hunt', 'myspot', 'sauron'
  target_id text,          -- UUID de l'entité cible
  target_entity_type text, -- type cible
  link_type text,          -- 'applies_to', 'possesses', etc
  metadata jsonb,          -- données supplémentaires
  created_at timestamptz,
  updated_at timestamptz
);
\`\`\`

### Exemple Ligne:

\`\`\`
source_module: 'hunt'
source_id: 'uuid-jean-dupont'
source_entity_type: 'candidate'
target_module: 'myspot'
target_id: 'uuid-react-skill'
target_entity_type: 'entity'
link_type: 'possesses'
metadata: {'level': 'senior', 'years': 5}
\`\`\`

---

## 📋 Types de Liens Supportés

### Hunt → MySPOT

| Link Type | Meaning | Exemple |
|-----------|---------|---------|
| \`possesses\` | Candidat a compétence | Jean possède React |
| \`applies_to\` | Candidat peut appliquer à offre | Jean → Dev React Mission |
| \`references\` | Offre référence skill | Dev React → Node.js Required |
| \`covers\` | Offre couvre segment | Dev React → AI Segment |

### Hunt → Sauron

| Link Type | Meaning | Exemple |
|-----------|---------|---------|
| \`is_candidate_for\` | Candidat cherche client | Jean → Acme Corp |
| \`is_company_for\` | Offre pour ce client | Dev React → Acme Corp |
| \`requires\` | Client requiert skill | Acme → React Dev |

### MySPOT → Sauron

| Link Type | Meaning | Exemple |
|-----------|---------|---------|
| \`covers\` | Stratégie couvre client | Strategy AI → Acme Corp |
| \`applies_to\` | Stratégie applicable pour | Strategy Finance → BanqXYZ |
| \`enables\` | Stratégie enable segment | Strategy → Tech Segment |

### MySPOT → MySPOT

| Link Type | Meaning | Exemple |
|-----------|---------|---------|
| \`is_part_of\` | Entité membre de | Jean → Team Alpha |
| \`related_to\` | Relation générale | Project A → Project B |
| \`depends_on\` | Dépendance | Stratégie B → Stratégie A |

---

## 🔧 Créer Liens Programmatiquement

### Via Frontend UI

\`\`\`jsx
import { createLink } from '@/lib/moduleLinks'

// Créer lien: Jean → React
await createLink(
  'hunt',           // source module
  'uuid-jean',      // source id
  'myspot',         // target module
  'uuid-react',     // target id
  'possesses',      // link type
  { level: 'senior' } // metadata
)

// Résultat: Link créé, visible dans les deux entités
\`\`\`

### Via Supabase Direct

\`\`\`sql
INSERT INTO module_links (
  user_id,
  source_module, source_id, source_entity_type,
  target_module, target_id, target_entity_type,
  link_type,
  metadata
) VALUES (
  'user-uuid',
  'hunt', 'uuid-jean', 'candidate',
  'myspot', 'uuid-react', 'entity',
  'possesses',
  '{"level": "senior"}'
)
\`\`\`

---

## 🔍 Récupérer Liens

### Liens Sortants (de Jean)

\`\`\`javascript
const outgoing = await getOutgoingLinks('hunt', 'uuid-jean')

// Résultat:
[
  {
    id: 'link-uuid',
    source_module: 'hunt',
    target_module: 'myspot',
    target_id: 'uuid-react',
    link_type: 'possesses',
    metadata: {...}
  }
]
\`\`\`

### Liens Entrants (vers Jean)

\`\`\`javascript
const incoming = await getIncomingLinks('hunt', 'uuid-jean')

// Résultat:
[
  {
    source_module: 'myspot',
    source_id: 'uuid-ai-skill',
    link_type: 'requires',
    target_module: 'hunt'
  }
]
\`\`\`

### Tous Liens (bidirect)

\`\`\`javascript
const all = await getLinks('hunt', 'uuid-jean')

// Sortants + Entrants combinés
\`\`\`

---

## 🎯 Cas d'Usage Avancés

### Cas 1: Matching Candidat ↔ Client

**Objectif:** "Quels candidats peuvent servir ce client?"

\`\`\`javascript
// 1. Récupérer client Sauron
const client = await getClient('acme-corp')

// 2. Trouver stratégie associée (MySPOT)
const strategy = await getIncomingLinks('sauron', client.id)
  .filter(l => l.source_module === 'myspot')

// 3. Trouver skills requis par stratégie
const requiredSkills = await getOutgoingLinks('myspot', strategy.id)
  .filter(l => l.target_module === 'myspot')

// 4. Trouver candidats avec ces skills
const matchingCandidates = await getIncomingLinks('myspot', requiredSkills.map(s => s.target_id))
  .filter(l => l.source_module === 'hunt')

// Résultat: Jean, Marie = peuvent servir Acme
\`\`\`

### Cas 2: Stratégie → Candidats → Offres

**Objectif:** "Qui mettre en avant pour cette stratégie?"

\`\`\`
1. MySPOT Stratégie "AI 2025"
   ↓
2. Lier à: Skills requises (React, Python, Leadership)
   ↓
3. Trouver candidats Hunt possédant ces skills
   ↓
4. Créer/matcher à offres Hunt appropriées
   ↓
5. Proposer candidats à clients Sauron intéressés
\`\`\`

### Cas 3: Pipeline Dynamique

**Objectif:** Vue temps-réel du pipeline cross-modules

\`\`\`
Dashboard Widget:
  ├─ Hot Clients (Sauron)
  ├─ Their Required Skills (MySPOT via links)
  ├─ Available Candidates (Hunt with skills)
  ├─ Match Score (auto-calculé)
  └─ Action Buttons (Email candidate, Close client, etc)
\`\`\`

---

## 📊 Visualisation

### Graphe Cross-Module

\`\`\`
MySPOT LAYER           HUNT LAYER            SAURON LAYER
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│ React Skill  │      │ Jean Dupont  │      │ Acme Corp    │
│              │◄─┬───┤ (Candidate)  │◄─┬───┤ (Client)     │
│              │  │   │              │  │   │              │
└──────────────┘  │   └──────────────┘  │   └──────────────┘
       ▲          │                     │
       │ applies_to                     │ seeking
       │          │   Dev React Offre   │
       └──────────┼─►┌──────────────┐◄──┘
                  │  │              │
                  └──┤ possesses +  │
                     │ applies_to   │
                     └──────────────┘

= Tous entités visibles, tous relations explicites
\`\`\`

---

## 🔐 Sécurité & RLS

### Row-Level Security

\`\`\`sql
-- User ne voit que ses propres liens
CREATE POLICY "Users see own links"
  ON module_links FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- User ne peut créer que ses propres liens
CREATE POLICY "Users create own links"
  ON module_links FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);
\`\`\`

### Cascade Delete

\`\`\`sql
-- Supprimer entité = supprimer tous ses liens
CREATE TRIGGER delete_links_on_entity
  AFTER DELETE ON spot_entities
  FOR EACH ROW
  EXECUTE FUNCTION cleanup_entity_links();
\`\`\`

---

## ⚡ Performance

### Indexes

\`\`\`sql
-- Requête rapide: "liens depuis entity"
CREATE INDEX idx_links_source
  ON module_links(source_module, source_id);

-- Requête rapide: "liens vers entity"
CREATE INDEX idx_links_target
  ON module_links(target_module, target_id);

-- Recherche liens par type
CREATE INDEX idx_links_type
  ON module_links(link_type);
\`\`\`

### Pagination

\`\`\`javascript
// Pour graphe avec 1000+ entités
const links = await supabase
  .from('module_links')
  .select()
  .limit(100)
  .offset(pageNum * 100)

// Charger progressif = UI responsive
\`\`\`

---

## 🎨 UI Components

### ModuleLinksPanel

\`\`\`jsx
<ModuleLinksPanel
  module="hunt"
  entityId="uuid-jean"
  entityType="candidate"
  onLinksChange={() => refetchData()}
/>
\`\`\`

**Affiche:**
- Tous liens sortants
- Tous liens entrants
- Formulaire pour créer lien
- Bouton supprimer

### GraphVisualization

\`\`\`jsx
<GraphVisualization
  entities={allEntities}
  links={allLinks}
  highlightEntity="uuid-acme"
  onEntityClick={(e) => showDetail(e)}
/>
\`\`\`

**Affiche:**
- Tous modules en graphe 2D
- Nœuds = entités
- Edges = liens
- Force physics = layout auto

---

## 📚 API Reference

### Fonctions Disponibles

\`\`\`javascript
// Créer lien
createLink(sourceModule, sourceId, targetModule, targetId, linkType, metadata)

// Récupérer liens
getOutgoingLinks(module, id)
getIncomingLinks(module, id)
getLinks(module, id) // both directions

// Modifier lien
updateLinkMetadata(linkId, newMetadata)

// Supprimer lien
removeLink(linkId)

// Récupérer types de liens disponibles
getAvailableLinkTypes(sourceModule, targetModule)

// Auto-finder: suggestions de liens
findPotentialLinks(sourceModule, sourceData)
\`\`\`

---

## 🚀 Étapes Implémentation

### Phase 1: Préparer (1h)
- [ ] Identifier modules à lier
- [ ] Définir types de liens utiles
- [ ] Dessiner diagramme

### Phase 2: Implémenter (2h)
- [ ] Créer quelques liens manuellement
- [ ] Tester UI ModuleLinksPanel
- [ ] Vérifier RLS sécurité

### Phase 3: Utiliser (2h+)
- [ ] Créer liens systématiquement
- [ ] Tester requêtes cross-module
- [ ] Enseigner à équipe

### Phase 4: Optimiser (En cours)
- [ ] Batch linking
- [ ] Auto-suggestions d'IA
- [ ] Dashboard widgets

---

## ❓ FAQ

**Q: Lien peut aller dans les 2 sens?**
R: Lien source → target. Mais bidirectionnel (query inverse possible).

**Q: Délai création lien?**
R: Immédiat. Index = query rapide même 1000+ liens.

**Q: Supprimer source = supprimer liens?**
R: Oui, CASCADE delete. Liens orphelins = auto-nettoyés.

**Q: Équipe peut voir liens?**
R: Oui, si RLS policy permet. Défaut = seul proprio.

**Q: Lien entre Hunt et Hunt?**
R: Oui (candidat ↔ offre). MySPOT a "Relations" = similar.

---

## 🔗 Ressources

- [Module Links Code](../src/lib/moduleLinks.js)
- [ModuleLinksPanel Component](../src/components/ModuleLinksPanel.jsx)
- [Tutoriel T5](../TUTORIELS/T5_LIER_MODULES.md)
- [Database Schema](../supabase/migrations/)

---

**Bon linking! 🔗**
`;export{n as default};

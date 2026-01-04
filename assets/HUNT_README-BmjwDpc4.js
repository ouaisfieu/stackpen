const n=`# 🎯 HUNT - Module Recrutement & Talent Acquisition

Bienvenue dans **Hunt**, le module de gestion des talents et du recrutement responsable d'AEGIS.

Hunt = **Candidats + Offres d'emploi + Pipeline + Suivi + Analytics**

---

## 📌 Concepts Clés

### Les 5 Piliers de Hunt

| Pilier | Contient | Exemple |
|--------|----------|---------|
| **Candidats** | Profils talenteux | Jean Dupont, 5 ans exp, React/Node |
| **Entreprises** | Employeurs/Clients | Acme Corp, Startup Tech |
| **Offres (Missions)** | Postes à pourvoir | Dev Senior React - 50k€/an |
| **Candidatures** | Matching candidat↔offre | Jean → Offre Dev (85% match) |
| **Entretiens** | Évaluation candidates | Entretien 1: 19 avril, 1h, Jean ✓ |

### Flux Principal

\`\`\`
Créer Offre
  ↓
Trouver Candidats
  ↓
Candidature (auto-match %)
  ↓
Entretien
  ↓
Embauche
  ↓
Facturation
\`\`\`

---

## 🚀 Démarrer avec Hunt

### Installation Rapide (< 5 min)

#### 1. Accéder à Hunt

\`\`\`
Dashboard
  ↓
Clic sur onglet "Hunt"
  ↓
Vue: [Candidats | Entreprises | Missions | Pipeline | Invoices]
\`\`\`

#### 2. Créer Première Offre d'Emploi

\`\`\`
Onglet: Missions
  ↓
"+ Nouvelle Offre"
  ↓
Formulaire:
  Titre: "Développeur React Senior"
  Description: "Rejoins notre équipe de 15 devs..."
  Localisation: "Paris, France"
  Type Contrat: "CDI"
  Salaire Min: 50000
  Salaire Max: 65000
  Compétences Requises: ["React", "Node.js", "Docker"]
  Priorité: "Haute"
  ↓
"Créer"
  ↓
✅ Offre active
\`\`\`

#### 3. Ajouter Candidat

\`\`\`
Onglet: Candidats
  ↓
"+ Nouveau Candidat"
  ↓
Formulaire:
  Prénom: "Jean"
  Nom: "Dupont"
  Email: "jean.dupont@email.com"
  Téléphone: "+33 6 XX XX XX XX"
  Compétences: ["React", "Node.js", "Python", "SQL"]
  Expérience: 5 ans
  Salaire attendu: 55000
  Statut: "Disponible"
  ↓
"Créer"
  ↓
✅ Candidat enregistré
\`\`\`

#### 4. Créer Candidature

\`\`\`
Pipeline ou Candidats → Jean Dupont
  ↓
"+ Ajouter à Offre"
  ↓
Sélectionner: "Dev React Senior"
  ↓
Auto-calcul Match Score:
  - Compétences: 4/5 (React ✓, Node ✓, Python ✓)
  - Salaire: 5/5 (55k dans 50-65k)
  - Expérience: 5/5 (5 ans requis)
  = 87% Match ✓✓✓
  ↓
Statut: "Entretien 1"
  ↓
✅ Candidature créée
\`\`\`

---

## 📊 Tableau de Bord Hunt

### Pipeline View (Kanban)

\`\`\`
┌─────────────┬─────────────┬──────────────┬──────────────┐
│  APPLIED    │  INTERVIEW 1│  INTERVIEW 2 │   OFFERED    │
├─────────────┼─────────────┼──────────────┼──────────────┤
│ • Jean (87%)│ • Marie (92%│ • Pierre (78%│ • Sophie (95%│
│ • Luc (76%) │ • Carine(81%│              │              │
│             │             │              │              │
└─────────────┴─────────────┴──────────────┴──────────────┘
\`\`\`

Actions:
- Glisser-déposer candidat entre colonnes
- Clic = voir détails & notes
- Chevron = avancer étape

### Analytics

\`\`\`
Dashboard Hunt:
  Total Candidatures: 47
  Match Moyen: 81%
  Taux de Conversion: 12% (6/50)
  Temps Moyen: 23 jours
  Coût par Embauche: €450
\`\`\`

---

## 🔧 Workflows Courants

### Workflow 1: Sourcing Rapide

**But:** Trouver candidats pour offre existante

\`\`\`
1. Offre "Dev React" existe
2. Créer 5-10 candidats (manuellement ou import)
3. Créer candidatures (auto-match)
4. Voir score match pour chaque
5. Contacter top 3 (match > 85%)
\`\`\`

**Temps:** 20 min pour 5 candidats

---

### Workflow 2: Suivi Entretien

**But:** Organiser et tracker entretiens

\`\`\`
1. Candidature en "Entretien 1"
2. Créer Entretien:
   Date: 19 avril 10h
   Interviewer: Marie
   Durée: 1h
   Type: "Technique"
   Notes: "Bonne maîtrise React"
   Score: 8/10
3. Valider
4. Passer à "Entretien 2"
5. Répéter
\`\`\`

**Tips:**
- Calendrier intégré pour voir disponibilités
- Notes visibles dans historique candidat
- Score affecte progression pipeline

---

### Workflow 3: Facturation & Analytics

**But:** Tracker coûts et ROI

\`\`\`
1. Candidat embauché
2. Créer Invoice:
   Candidat: "Jean Dupont"
   Offre: "Dev React"
   Montant HT: €2500 (commission sourcing)
   Montant TTC: €3000
   Date: 15 avril
   Statut: "Payée"
3. Voir Analytics:
   Revenus: €15,000 (6 embauches)
   Coûts: €6,750 (salary + ops)
   Profit: €8,250
\`\`\`

---

## 📋 Champs Hunt Détaillés

### Candidat

| Champ | Type | Requis | Exemple |
|-------|------|--------|---------|
| Prénom | Text | Oui | "Jean" |
| Nom | Text | Oui | "Dupont" |
| Email | Email | Oui | jean@mail.com |
| Téléphone | Phone | Non | +33 6 XX XX XX XX |
| Compétences | Tags | Non | React, Node, Docker |
| Expérience | Nombre (ans) | Non | 5 |
| Salaire Attendu | Number | Non | 55000 |
| Statut | Select | Oui | Disponible / En attente |
| Notes | Text | Non | "Référence de X" |
| Cotisant | Boolean | Non | true / false |

### Offre (Mission)

| Champ | Type | Requis | Exemple |
|-------|------|--------|---------|
| Titre | Text | Oui | "Dev React Senior" |
| Description | Text Longue | Oui | "Rejoins l'équipe..." |
| Localisation | Text | Oui | "Paris, France" |
| Type Contrat | Select | Oui | CDI / CDD / Stage |
| Salaire Min | Number | Oui | 50000 |
| Salaire Max | Number | Oui | 65000 |
| Compétences | Tags | Oui | React, Node, Docker |
| Priorité | Select | Non | Basse / Normale / Haute |
| Statut | Select | Oui | Ouverte / Fermée |

### Candidature

| Champ | Type | Calcul | Exemple |
|-------|------|--------|---------|
| Candidat | Link | - | Jean Dupont |
| Offre | Link | - | Dev React |
| Match Score | % | Auto | 87% |
| Statut | Select | - | Entretien 1 |
| Notes | Text | - | "Très motivé" |
| Rejeté? | Boolean | - | false |
| Raison Rejet | Text | Si oui | "Manque expertise Docker" |

---

## 💡 Tips & Astuces

### Match Score Expliqué

\`\`\`
Match Score =
  (Compétences Match % × 40%) +
  (Salaire Match % × 40%) +
  (Expérience Match % × 20%)

Exemple:
  Jean applique à "Dev React 50-65k"
  - React ✓ Node ✓ Python ✓ = 80% compétences
  - 55k est dans 50-65k = 100% salaire
  - 5 ans exp requis = 5 ans = 100% exp
  Score = (0.80×0.4) + (1.00×0.4) + (1.00×0.2)
        = 0.32 + 0.40 + 0.20
        = 92% ✓✓✓
\`\`\`

### Import en Masse

**Importer 100 candidats d'un coup:**

\`\`\`
1. Préparer fichier CSV:
   prenom,nom,email,competences,experience,salaire_attendu
   Jean,Dupont,jean@mail.com,React;Node,5,55000
   Marie,Martin,marie@mail.com,React;Python,3,45000
   ...

2. Workspace Editor → Importer

3. Format auto-détecté → JSON

4. Vérifier données

5. Valider import

✅ 100 candidats en DB
\`\`\`

### Export Pipeline

\`\`\`
Dashboard Hunt → Analytics
  ↓
"Exporter Pipeline"
  ↓
Format: CSV
  ↓
Ouvre Excel avec:
  - Tous candidats
  - Offres associées
  - Scores
  - Statuts
  - Notes
\`\`\`

---

## 🔗 Lier Hunt à Autres Modules

### Hunt ↔ MySPOT

**Cas:** Candidat possède skills stratégiques

\`\`\`
1. Hunt → Candidat → "Liens vers autres modules"
2. + Lien
3. Type: MySPOT Skill
4. Sélectionner: "React", "Leadership"
5. Type lien: "possède"
6. ✅ Lié

Résultat: Dans MySPOT graph, candidat visible
\`\`\`

### Hunt ↔ Sauron

**Cas:** Offre est pour client Sauron

\`\`\`
1. Hunt → Offre → "Liens vers autres modules"
2. + Lien
3. Type: Sauron Client
4. Sélectionner: "Acme Corp"
5. Type lien: "is_for_company"
6. ✅ Lié

Résultat: Dans Sauron, voir offres ouvertes pour ce client
\`\`\`

---

## 📈 Étapes pour Maîtriser Hunt

### Week 1: Les Bases
- [ ] Créer 1 offre
- [ ] Ajouter 3 candidats
- [ ] Créer 2 candidatures
- [ ] Voir le match score

### Week 2: Pipeline
- [ ] Remplir pipeline avec 10+ candidats
- [ ] Créer 3 entretiens
- [ ] Voir kanban
- [ ] Exporter en CSV

### Week 3: Intégration
- [ ] Importer 50+ candidats
- [ ] Créer factures
- [ ] Voir analytics
- [ ] Lier à MySPOT

### Week 4: Maîtrise
- [ ] Workflow complet (offre → embauche)
- [ ] Reports d'analytics
- [ ] Archiver anciennes données
- [ ] Automatiser recherche

---

## ❓ FAQ Hunt

**Q: Comment retrouver un candidat?**
R: Dashboard → Recherche "Jean" → affiche Jean Dupont

**Q: Le match score est faux?**
R: Vérifier compétences, salaire, expérience. Scores recalculés auto.

**Q: Je peux modifier un candidat embauché?**
R: Oui, cliquer dans sa liste → "Éditer" → changer infos → "Sauver"

**Q: Export CSV ne marche pas?**
R: Vérifier format (UTF-8). Si gros fichier, segmenter.

**Q: Je peux partager une offre?**
R: Oui, exporter en CSV/HTML et envoyer par email

**Q: Comment archiver anciennes data?**
R: Sélectionner → "Archiver" (ne supprime pas, juste masque)

---

## 🚀 Prochaines Étapes

1. **Démarrer:** Créer 1ère offre + candidat (5 min)
2. **Approfondir:** [Tutoriel T1_PREMIER_CANDIDAT.md](../TUTORIELS/T1_PREMIER_CANDIDAT.md) (15 min)
3. **Intégrer:** Lire [INTEROPERABILITE.md](./INTEROPERABILITE.md) (10 min)
4. **Maîtriser:** Suivre workflow complet (1h)

---

**Bon hunting! 🎯**
`;export{n as default};

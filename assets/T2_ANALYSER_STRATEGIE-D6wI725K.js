const n=`# 🔗 Tutoriel T2: Analyser Stratégie Complète (MySPOT)

**Durée:** 30 minutes | **Niveau:** Intermédiaire | **Résultat:** Stratégie documentée

---

## Objectif

À la fin de ce tutoriel, vous aurez:
- ✅ Créé une cartographie d'entités
- ✅ Rempli une stratégie complète (Plaidoyer)
- ✅ Vu le graphe interactif
- ✅ Exporté le diagnostic

---

## 🎯 Étape 1: Créer l'Entité Principale (5 min)

### 1.1 Accéder à MySPOT

\`\`\`
Écran d'accueil
  ↓
Clic onglet "🔗 MySPOT"
\`\`\`

### 1.2 Aller à Entités

\`\`\`
Clic onglet "Entités"
\`\`\`

### 1.3 Créer Première Entité

\`\`\`
Bouton "+ Nouvelle Entité"
  ↓
Formulaire
\`\`\`

### 1.4 Remplir Entité Principale

**Scénario:** Analyser "Acme Corp" (notre startup fictive)

\`\`\`
Champ: Nom
├─ "Acme Corporation"

Champ: Type
├─ "Organisation"

Champ: Description
├─ "Startup tech spécialisée en Intelligence Artificielle.
│   Créée en 2020, équipe 12 personnes, basée à Paris.
│   Mission: Rendre l'IA accessible et éthique."

Champ: Tags
├─ "#startup" (ENTER)
├─ "#IA" (ENTER)
├─ "#Paris" (ENTER)
├─ "#2020" (ENTER)

Champ: Notes
├─ "Lever serie A prévue Q2 2025.
│  Clients potentiels: Fortune 500.
│  Compétiteurs: OpenAI, Anthropic alternatives."
\`\`\`

### 1.5 Valider

\`\`\`
Bouton "Créer"
  ↓
✅ Entité visible dans liste
\`\`\`

---

## 👤 Étape 2: Ajouter Entités Contexte (8 min)

### 2.1 Créer Entité: Fondateur

\`\`\`
+ Nouvelle Entité

Nom: "Alice Martin"
Type: "Personne"
Description: "Fondatrice et CEO.
  10 ans exp AI.
  Ancien Google Brain."
Tags: "#CEO" "#AI" "#Leadership"

Créer
\`\`\`

### 2.2 Créer Entité: Siège

\`\`\`
+ Nouvelle Entité

Nom: "Paris, France"
Type: "Lieu"
Description: "HQ. Marais, arrondissement 4e."
Tags: "#Siège" "#France"

Créer
\`\`\`

### 2.3 Créer Entité: Partenaire

\`\`\`
+ Nouvelle Entité

Nom: "DataScience Lab"
Type: "Organisation"
Description: "Partenaire recherche.
  Données, modèles, infrastructure."
Tags: "#Partenaire" "#Recherche"

Créer
\`\`\`

### 2.4 Créer Entité: Événement

\`\`\`
+ Nouvelle Entité

Nom: "AI Conference Paris 2025"
Type: "Événement"
Description: "19-20 mai 2025.
  500 participants attendus.
  Acme Corp présentera keynote."
Tags: "#Conférence" "#Mai2025"

Créer
\`\`\`

---

## 🔗 Étape 3: Créer Relations (7 min)

### 3.1 Aller à Relations

\`\`\`
Clic onglet "Relations"
\`\`\`

### 3.2 Créer Relation 1: Fondateur

\`\`\`
+ Nouvelle Relation

De: "Alice Martin"
À: "Acme Corporation"
Type: "Fonde / Dirige"
Metadata: {"depuis": 2020, "titre": "CEO"}

Créer
\`\`\`

### 3.3 Créer Relation 2: Siège

\`\`\`
+ Nouvelle Relation

De: "Acme Corporation"
À: "Paris, France"
Type: "Basée à"
Metadata: {"adresse": "123 Rue du Marais, 75004"}

Créer
\`\`\`

### 3.4 Créer Relation 3: Partenariat

\`\`\`
+ Nouvelle Relation

De: "Acme Corporation"
À: "DataScience Lab"
Type: "Partenaire"
Metadata: {"depuis": 2023, "domaine": "Recherche"}

Créer
\`\`\`

### 3.5 Créer Relation 4: Événement

\`\`\`
+ Nouvelle Relation

De: "Acme Corporation"
À: "AI Conference Paris 2025"
Type: "Participe"
Metadata: {"role": "Keynote", "date": "20 mai"}

Créer
\`\`\`

### 3.6 Créer Relation 5: Connexion Personne-Lieu

\`\`\`
+ Nouvelle Relation

De: "Alice Martin"
À: "Paris, France"
Type: "Habite"
Metadata: {"depuis": 2015}

Créer
\`\`\`

---

## 📊 Étape 4: Visualiser Graphe (3 min)

### 4.1 Cliquer Onglet "Graphe"

\`\`\`
Vue s'ouvre avec graphe interactif
\`\`\`

### 4.2 Voir la Cartographie

\`\`\`
Affichage:
         Alice Martin
              │
              │ dirige
              ↓
         Acme Corp ─────── DataScience Lab
              │ \\
         basée│  participe
              ↓   \\
         Paris     ↓
                  AI Conf 2025
\`\`\`

### 4.3 Interagir

\`\`\`
Drag: Bouger nœuds (déplacer Acme au centre)
Zoom: Molette souris (zoomer sur Alice)
Clic: Sélectionner entité → voir détails côté
Double-clic: Ouvrir détail entité
\`\`\`

---

## 📋 Étape 5: Remplir Stratégie (10 min)

### 5.1 Aller à Stratégie

\`\`\`
Clic onglet "Stratégie"
  ↓
Voir liste entités
\`\`\`

### 5.2 Cliquer Acme Corp

\`\`\`
Clic "Acme Corporation"
  ↓
Détail s'ouvre
  ↓
Bouton "Modifier Stratégie"
\`\`\`

### 5.3 Remplir Section 1: Table of Contents

\`\`\`
Vision:
├─ "Devenir la plateforme d'IA la plus
│  accessible et éthique d'Europe"

Valeurs:
├─ "Transparence, Impact Social, Innovation Responsable,
│  Inclusivité, Excellence"

Hypothèse Clé:
├─ "Entreprises vont massivement adopter IA en 2025-2026.
│  Celles qui ne le font pas perdront compétitivité."

Mission:
├─ "Démocratiser l'IA avec des solutions simples,
│  éthiques, et accessibles financièrement."
\`\`\`

### 5.4 Remplir Section 2: SWOT

\`\`\`
FORCES (ce que nous avons):
├─ Équipe tech très expérimentée (ex-Google, Anthropic)
├─ Solution innovante et brevetée
├─ Network français fort (gouvernement, académique)
├─ First-mover advantage

FAIBLESSES (ce qui nous manque):
├─ Budget limité vs compétiteurs US
├─ Manque de références clients Fortune 500
├─ Équipe très petite (12 personnes)
├─ Pas de brand recognition international

OPPORTUNITÉS (futures chances):
├─ Appels d'offre gouvernement (AI Act européen)
├─ Levée série A (2025)
├─ Partenaires académiques majeurs
├─ Demande IA clients européens croissante

MENACES (risques externes):
├─ Compétiteurs US financés massivement
├─ Régulation IA incertaine post-AI Act
├─ Talent drain vers FAANG (Google, Meta, etc)
├─ Coûts GPU en hausse
\`\`\`

### 5.5 Remplir Section 3: PESTEL

\`\`\`
POLITIQUE:
├─ Loi IA EU favorable aux startups européennes
├─ Gouvernement investit en French Tech

ÉCONOMIQUE:
├─ Croissance 3.5%, inflation 2.1%
├─ Taux intérêt 4% (emprunt difficile)
├─ VC focus AI (funding disponible)

SOCIAL:
├─ Demande IA forte en entreprises
├─ Craintes éthique IA (CNIL, etc)
├─ Talent pool modéré à Paris

TECHNOLOGIQUE:
├─ GPU plus abordables (NVIDIA H100)
├─ Open-source models explodent
├─ Infrastructure cloud mature

ENVIRONNEMENTAL:
├─ Énergie verte requise (EU rules)
├─ Carbon footprint IA critique

LEGAL:
├─ RGPD strict (données perso)
├─ AI Act finalisé 2024
├─ Droits d'auteur IA incertain
\`\`\`

### 5.6 Remplir Section 4: Problem Tree

\`\`\`
PROBLÈME ROOT:
├─ "Entreprises européennes ne peuvent pas adopter IA
│  de qualité car solutions US coûteuses et opaque"

CAUSES (Pourquoi le problème existe):
├─ Pas d'alternatives européennes viables
├─ Coûts prohibitifs (OpenAI = $$$)
├─ Manque confiance éthique/données
├─ EU brain drain vers US tech

CONSÉQUENCES (Impact si non-résolu):
├─ Europe reste IT-dependent de US
├─ Compétitivité économique baisse
├─ Jobs tech manquent Europe
├─ Data souveraineté compromise
\`\`\`

### 5.7 Remplir Section 5: 5 Pourquoi

\`\`\`
Problème: "Entreprises EU ne peuvent pas utiliser IA locale"

1. Pourquoi?
   ├─ Pas d'offres techniquement viables

2. Pourquoi pas d'offres?
   ├─ Peu d'investissement R&D européen

3. Pourquoi peu d'investissement?
   ├─ Capital-risque concentré US

4. Pourquoi concentré US?
   ├─ Historiquement Silicon Valley domine

5. Pourquoi domine?
   ├─ First-mover avantage + ecosystem

SOLUTION:
├─ Créer écosystème européen = notre mission
\`\`\`

### 5.8 Remplir Section 6: Objectifs

\`\`\`
1. "Acquérir 50 clients Fortune 500 en 18 mois"
   Priorité: Haute
   KPI: Contracts signés / ARR

2. "Lever 5M€ en série A Q2 2025"
   Priorité: Critique
   KPI: Funding secured

3. "Devenir Standard IA europea dans secteur Finance"
   Priorité: Moyenne
   KPI: Market share banking

4. "Embaucher 50 personnes (2x équipe)"
   Priorité: Haute
   KPI: Headcount / rétention

5. "Être rentable dans 24 mois"
   Priorité: Critique
   KPI: Profitabilité opérationnelle
\`\`\`

### 5.9 Remplir Section 7: Stratégies

\`\`\`
1. STRATÉGIE PRODUIT:
   └─ Lancer version SME (petites entreprises)
     Raison: Marché plus grand, adoption plus rapide

2. STRATÉGIE GO-TO-MARKET:
   └─ Focus secteur Finance puis Healthcare
     Raison: High-value, régulation claire

3. STRATÉGIE LEVÉE:
   └─ Serie A Q2 2025 avec lead VC français
     Raison: Keep control, build French flagship

4. STRATÉGIE TALENT:
   └─ Partnerships académiques (ENS, ECP, etc)
     Raison: Talent pipeline, crédibilité

5. STRATÉGIE PARTENAIRES:
   └─ OEM avec DataScience Lab et autres
     Raison: Reach, resources, validation
\`\`\`

### 5.10 Remplir Section 8: Messages

\`\`\`
- "Acme = IA européenne responsable"
- "On respecte vos données et valeurs"
- "Solution 80% moins chère que OpenAI"
- "Équipe world-class, ex-Google/Anthropic"
- "Leverage pour compétitivité EU"
\`\`\`

### 5.11 Remplir Section 9: Targets

\`\`\`
1. "CFO Finance (buyer)"
   ├─ Pain: Coûts IA, vendor lock-in US

2. "CTO Tech (user)"
   ├─ Pain: Intégration OpenAI difficile

3. "CEO Startup"
   ├─ Pain: Budget limité, voudrait IA

4. "Government"
   ├─ Pain: Data souveraineté

5. "Académie"
   ├─ Pain: Accès IA research
\`\`\`

### 5.12 Remplir Section 10: Actions

\`\`\`
1. "Appeler 100 CFO Finance"
   Responsable: Alice
   Deadline: 30 avril
   Statut: En cours
   KPI: 20 meetings

2. "Préparer pitch deck série A"
   Responsable: Alice + Fundraiser
   Deadline: 15 avril
   Statut: À faire
   KPI: Deck v3 final

3. "Finir POC client #1 (Crédit Agricole)"
   Responsable: Tech team
   Deadline: 10 mai
   Statut: En cours
   KPI: POC succès

4. "Recruter Senior ML Engineer"
   Responsable: HR
   Deadline: 31 mai
   Statut: À faire
   KPI: Hired

5. "Présenter à AI Conf Paris"
   Responsable: Alice
   Deadline: 20 mai
   Statut: Confirmé
   KPI: 500 contacts générés
\`\`\`

---

## 💾 Étape 6: Exporter Stratégie (2 min)

### 6.1 Sauvegarder

\`\`\`
Bas du formulaire
  ↓
Bouton "Sauvegarder Stratégie"
  ↓
✅ "Stratégie sauvegardée"
\`\`\`

### 6.2 Exporter

\`\`\`
Détail Acme Corp
  ↓
Bouton "Exporter"
  ↓
Format: "Markdown"
  ↓
Fichier "Acme_Strategie.md" téléchargé
\`\`\`

### 6.3 Voir Résultat

\`\`\`
Fichier Markdown:
# Acme Corporation - Stratégie 2025

## Vision
Devenir la plateforme d'IA la plus accessible...

## SWOT
### Forces
- Équipe tech très expérimentée
- ...

... (10 sections complètes)
\`\`\`

---

## ✅ Bravo! Vous Avez Réussi

Vous avez maintenant:
- ✅ Entité principale + 4 entités contexte
- ✅ 5 relations inter-entités
- ✅ Graphe interactif visualisant tout
- ✅ Stratégie complète (10 sections)
- ✅ Export Markdown du diagnostic

---

## 🎓 Prochaines Étapes

### Enrichir: Ajouter Plus d'Entités

\`\`\`
Ajouter 5 clients potentiels (Organisations)
Ajouter team members (Personnes)
Ajouter concurrents (Organisations)
Ajouter ressources (Documents)

Lier tout → Graphe devient riche
\`\`\`

### Approfondir: Analyser Concurrence

\`\`\`
Créer entité "OpenAI"
Créer entité "Anthropic"
Créer relations: "compétiteur de"
Analyser leur stratégie (SWOT)
Comparer avec Acme
\`\`\`

### Intégrer: Lier à Hunt

\`\`\`
Lire: [T5_LIER_MODULES.md](./T5_LIER_MODULES.md)
Créer candidats Hunt = "Senior AI Engineer"
Lier à Acme Corp → MySPOT
Voir compétences requises
\`\`\`

---

## 💡 Tips

### Templates Stratégie

\`\`\`
Réutiliser cette même structure pour:
- Competitor analysis
- Market entry strategy
- New product launch
- Turnaround plan
\`\`\`

### Plaidoyer pour Présentation

\`\`\`
Export Markdown + Ouvrir PowerPoint
→ Copier-coller sections
→ Ajouter images/slides
→ Présentation pro en 30 min
\`\`\`

### Collaboratif

\`\`\`
Export → Envoyer à équipe
Équipe modifie offline
Import updated version
AEGIS merge automatiquement
\`\`\`

---

## ❓ FAQ

**Q: Je peux avoir plusieurs stratégies par entité?**
R: Non actuellement. 1 entité = 1 stratégie. Dupliquer entité si besoin versions multiples.

**Q: PESTEL expliqué c'est quoi?**
R: Political, Economic, Social, Technological, Environmental, Legal. Contexte macro.

**Q: Le graphe ne marche pas?**
R: Vérifier relations existent. Clic onglet "Relations" pour confirmer.

**Q: Je peux importer data externe?**
R: Oui, [T4_EXPORTER_IMPORTER.md](./T4_EXPORTER_IMPORTER.md) pour détails.

---

## 🚀 Résumé

**En 30 minutes, vous avez:**
- Modélisé une organisation complète
- Rempli stratégie professionnelle
- Visualisé relations complexes
- Créé diagnostic exportable
- Prêt pour présentation board

**Prochaine arrêt:** [T3_GERER_CRM.md](./T3_GERER_CRM.md) (Sauron)

---

**Bon strategizing! 🔗**
`;export{n as default};

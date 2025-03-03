# Projet Cahier de Texte - Documentation Frontend

## Présentation du projet

Le projet **Cahier de Texte** est une application mobile développée pour simplifier la gestion et l'accès aux cahiers de texte numériques. Cette application permet aux utilisateurs (élèves, enseignants, parents) de consulter les emplois du temps, accéder aux ressources pédagogiques et suivre l'avancement des cours.

## Structure de l'application

L'application est construite avec React Native et Expo, utilisant une architecture organisée en flux distincts pour l'authentification et la navigation principale.

### Flux d'authentification

Le flux d'authentification (`(auth)`) comprend:
- Écran de connexion
- Inscription
- Authentification par code PIN
- Option d'authentification biométrique
- Confirmation de connexion réussie

### Flux principal

Le flux principal (`(main)`) utilise un système de navigation à tiroir (Drawer) avec plusieurs onglets:
- **Accueil/Livres**: Présentation des manuels et ressources disponibles
- **Emploi du temps**: Visualisation du planning des cours
- **Cahier de texte**: Consultation des devoirs et activités
- **Compte**: Gestion des informations personnelles

### Navigation et interfaces

L'application permet une navigation intuitive:
- Navigation par onglets pour les fonctionnalités principales
- Menu latéral (Drawer) pour accéder aux fonctionnalités secondaires
- Navigation détaillée vers les livres et chapitres spécifiques

## Composants clés

Plusieurs composants réutilisables ont été développés:
- `BookCard`: Affichage des couvertures et informations des manuels
- `ChapterItem`: Liste des chapitres d'un manuel
- `InputField`: Champs de saisie personnalisés
- `CustomDrawerContent`: Menu latéral avec options personnalisées

## Architecture technique

### Technologies utilisées
- **React Native / Expo**: Développement cross-platform
- **TypeScript**: Typage fort pour une meilleure qualité de code
- **React Navigation**: Gestion des différents flux de navigation
- **Contexte React**: Gestion d'état global (authentification)

### Organisation des dossiers
- `app/`: Structure de l'application suivant le système de fichiers d'Expo Router
- `components/`: Composants réutilisables
- `constants/`: Valeurs constantes (couleurs, thèmes)
- `contexts/`: Contextes React pour la gestion d'état
- `hooks/`: Hooks personnalisés
- `services/`: Services d'API et fonctions utilitaires
- `assets/`: Ressources statiques (images, icônes)

## Objectifs du projet

- Simplifier l'accès aux ressources pédagogiques
- Offrir une vue claire des emplois du temps
- Permettre un suivi précis des devoirs et activités
- Assurer une expérience utilisateur fluide et intuitive
- Proposer des fonctionnalités d'accessibilité pour tous les utilisateurs

## Prochaines étapes

- Implémentation des notifications pour les nouveaux devoirs
- Synchronisation hors-ligne des contenus
- Amélioration des performances de chargement des ressources
- Intégration avec les systèmes de gestion scolaire existants
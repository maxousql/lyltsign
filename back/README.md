<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.png" alt="Markdownify" width="200"></a>
  <br>
  LYLT SIGN API
  <br>
</h1>

<h4 align="center">Une API REST construite sur <a href="https://expressjs.com/fr/" target="_blank">ExpressJS</a>.</h4>

## Comment utiliser

Pour cloner et exécuter cette API REST, vous aurez besoin de [Git](https://git-scm.com) et [Node.js](https://nodejs.org/en/download/) (fourni avec [npm](http://npmjs.com)) installés sur votre ordinateur. Depuis votre ligne de commande :

```bash
# Clone 
$ git clone https://github.com/maxousql/lyltsign

# Aller dans le répertoire 
$ cd lyltsign/back

# Installer les dépendances
$ npm install

# Lancer l'application
$ node server.js
```

> **Note**
> Si vous utilisez Linux Bash pour Windows, [voir ce guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) ou utilisez `node` à partir de l'invite de commande.

## Table des matières
- [Comment utiliser](#comment-utiliser)
- [Table des matières](#table-des-matières)
- [1. Créer un nouvel utilisateur](#1-créer-un-nouvel-utilisateur)

## 1. Créer un nouvel utilisateur

- **URL**: `POST /api/users/`
- **Description**: Cette route permet de créer un nouvel utilisateur.
- **Authentification requise**: Oui (token valide requis)
- **Paramètres**:

  | Nom         | Type     | Description           |
  | ----------- | -------- | --------------------- |
  | `username`  | string   | Nom d'utilisateur unique |
  | `email`     | string   | Adresse e-mail de l'utilisateur |
  | `password`  | string   | Mot de passe de l'utilisateur |

- **Exemple de requête**:

  ```http
  POST /api/users/
  Content-Type: application/json
  Authorization: Bearer <votre-token>

  {
    "username": "nouvel_utilisateur",
    "email": "nouvel_utilisateur@example.com",
    "password": "mot_de_passe_securise"
  }

- **Réponse réussie**:

    ```http
    HTTP/1.1 201 Created
    Content-Type: application/json

    {
      "id": 123,
      "username": "nouvel_utilisateur",
      "email": "nouvel_utilisateur@example.com"
    }
    ```

  - **Réponse d'erreur**:

    - Statut 400 Bad Request : Si les données fournies sont invalides.
    - Statut 401 Unauthorized : Si l'utilisateur n'est pas authentifié ou le token est invalide.

- **Récupérer un utilisateur par son identifiant**

  - **URL**: `GET /api/users/:id`
  - **Description**: Cette route permet de récupérer les informations d'un utilisateur en fonction de son identifiant.
  - **Authentification requise**: Oui (token valide requis)
  - **Paramètres**:

    | Nom      | Type  | Description           |
    | -------- | ----- | --------------------- |
    | `id`     | int   | Identifiant de l'utilisateur à récupérer |

  - **Exemple de requête**:

    ```http
    GET /api/users/123
    Authorization: Bearer <votre-token>
    ```

  - **Réponse réussie**:

    ```http
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
      "id": 123,
      "username": "utilisateur_existant",
      "email": "utilisateur_existant@example.com"
    }
    ```

  - **Réponse d'erreur**:

    - Statut 404 Not Found : Si l'utilisateur avec l'ID spécifié n'existe pas.
    - Statut 401 Unauthorized : Si l'utilisateur n'est pas authentifié ou le token est invalide.

- **Récupérer tous les utilisateurs**

  - **URL**: `GET /api/users/`
  - **Description**: Cette route permet de récupérer la liste de tous les utilisateurs.
  - **Authentification requise**: Oui (token valide requis)

  - **Exemple de requête**:

    ```http
    GET /api/users/
    Authorization: Bearer <votre-token>
    ```

  - **Réponse réussie**:

    ```http
    HTTP/1.1 200 OK
    Content-Type: application/json

    [
      {
        "id": 123,
        "username": "utilisateur1",
        "email": "utilisateur1@example.com"
      },
      {
        "id": 456,
        "username": "utilisateur2",
        "email": "utilisateur2@example.com"
      },
      ...
    ]
    ```

  - **Réponse d'erreur**:

    - Statut 401 Unauthorized : Si l'utilisateur n'est pas authentifié ou le token est invalide.

- **Se connecter**

  - **URL**: `POST /api/users/login`
  - **Description**: Cette route permet à un utilisateur de se connecter et d'obtenir un token d'authentification.
  - **Authentification requise**: Non
  - **Paramètres**:

    | Nom         | Type     | Description           |
    | ----------- | -------- | --------------------- |
    | `username`  | string   | Nom d'utilisateur     |
    | `password`  | string   | Mot de passe          |

  - **Exemple de requête**:

    ```http
    POST /api/users/login
    Content-Type: application/json

    {
      "username": "utilisateur_existant",
      "password": "mot_de_passe_securise"
    }
    ```

  - **Réponse réussie**:

    ```http
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
      "token": "votre-token-d-authentification"
    }
    ```

  - **Réponse d'erreur**:

    - Statut 401 Unauthorized : Si les informations d'identification sont invalides.

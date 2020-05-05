Create-react-app +
Tooling
Eslint
Prettier
Github pages deployment

Packages
Query string
Class fields
Css loader

Steps
Go to folder you want this project to live
Clone this - $git clone (repo URL)
Rename folder to new project name
Remove Git files (in the root folder of your project) - $rm -rf .git
You can check if this worked, .git file should have been removed - \$ls -a
Create new repository, do not check "Initialize this repository with a README" because we already have one
Follow the steps to "create a new repo on the command line" (see below)

- \$git init
- \$git add .
- git commit -m "Initial Commit"
- git remote add origin https://github.com/sophie-tsai/${REPO-NAME}.git - (establishes the link between the local project to the github repo online)
- git push -u origin master

Github Pages setup
In package.json replace this with your info
"homepage": "http://{username}.github.io/{repo-name}"

To deploy, use scripts
npm run deploy
# firebase-playground

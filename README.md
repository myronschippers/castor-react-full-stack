# Git Branching

Creating, Merging, Changing, and Creating Pull Requests for git repository branches.

> NOTE: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Commands

1. moving to a specific branch
  - `git checkout <branch-name>`
1. creating a new branch and moving to that new branch
  - `git checkout -b <branch-name>`
1. combining changes from one branch to the current branch you are on
  - `git merge <branch-name>`
1. updating your branch with changes from the remote repository
  - `git pull origin <branch-name>`
1. I can't see that branch locally what do I do
  - `git fetch`
1. check to see what branch you are currently on
  - `git branch`


## Git Branching Process

The following are some step by step instruction for `git` branching workflow. It is assuming that your primary branch is `main` but if you are using `master` or `develop` then sub those in for main.


### Steps for: Creating a New Branch

1. make sure you're on the `main` branch
  - `git checkout main`
1. create your new branch (`<branch-name>` should be replaced by your new name)
  - `git checkout -b <branch-name>`
1. make sure the branch is available in the remote repository
  - `git push -u origin <bran-name>`
1. work on your branch and don't forget to commit your work
 - `git add .`
 - `git commit -m "meaningful words"`


### Steps for: Creating a Pull Request

1. make sure your finished feature branch changes are completely committed and pushed up to the remote repository
1. move to the main branch and make sure you have the most up to date code
  - `git checkout main`
  - `git pull origin main`


## Workflow

main -> master = production
develop = current development
feature-first-creature
 •
 |
 |
 •
 | \
 |  • - feature-branch
 •  |
 | /
 •
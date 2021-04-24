# GIT CONTRIBUTION FLOW

To make changes to a repository, follow these steps below.

TLDR;

```
1. fork the repo/project
2. clone your fork
3. create a branch to work from
4. make your code / changes etc
5. commit your changes
6. push your changes to your fork
8. Do a PR on github website in the original repo
```

## Fork The Repository
- On the top right, click on the fork button. A copy of the repository would be created on your github account - this will take few seconds
- Once this is done, click on the green clone drop-down by the top left and copy the url you see. You will use this later

## Clone your fork to your local machine
This simply means getting a copy of the repository on your personal computer.
On your computer terminal, cd into the directory you want to clone the repo to.
```
cd "directory" note: directory here, should be the name of your chosen directory
```
now, enter this,
```
git clone "paste the url you copied here"
```

## Create a Branch
To work on a new feature or fix a bug, it's important that you create a new branch. This keeps your changes seperate from the master branch for easy management of multiple pull requests for each completed task.
Enter this,
```
git checkout master
```
Create a branch with a name of your choice,
```
git branch "your-branch-name"
```

## Switch to your new branch
```
git checkout "your-branch-name"
```

Now you can go ahead and affect the desired changes

## Pushing your changes
Enter this to check the modified files on your terminal,
```
git status
```
To add the changes,
```
git add .
```
Commit your changes,
```
git commit -m "Add-a-commit-message-here"
```
Now, you can push your changes to the branch you created
```
git push origin "your-branch-name"
```
## Submission - A Pull Request (PR)
Once you've committed and pushed all of your changes to GitHub, reload the page for your fork on GitHub, select your branch, and click the green compare and pull request button by the top right, add a description and the number for the issue your pull request and submit.

CONGRATULATIONS ON YOUR SUCCESSFUL CONTRIBUTION :balloon:

---

If you encounter any issues, feel free to contact us on our [discord channel](http://discord.eddiehub.org).

THANK YOU FOR CONTRIBUTING TO THE EDDIEHUB COMMUNITY

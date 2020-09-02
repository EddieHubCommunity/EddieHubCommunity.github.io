# GIT CONTRIBUTION FLOW
To make changes to a repository, follow these steps;

# Fork The Repository
- On the top right, click on the fork button, a copy of the repository would be created on your github account, this would take few seconds to get completed.
- Once this is done, click on the green clone drop-down by the top left and copy the url you see, you would use this later.

# Clone your fork to your local machine
This simply means getting a copy of the repository on your personal computer.
On your computer terminal, cd into the directory you want to clone the repo.
```
cd "directory" note: directory here, should be the name of your chosen directory
```
now, Enter this,
```
git clone "paste the url you copied here"
```

# Create a Branch
To work on a new feature or fix a bug , it's important that you create a new branch. this keeps your changes seperate from the master branch for easy management of multiple pull requests for each completed task. 
Enter this
```
git checkout master
```
Create a branch with a name
```
git branch "your-branch-name"
```

## Switch to your new branch
```
git checkout "your-branch-name"
```

Now you can go ahead and effect the desired changes.

## Submitting your changes (a Pull Request)
on your terminal, Enter this to check the modified files
```
git status
```
To add the changes,
```
git add .
```
Commit your changes
```
git commit -m "Add-a-commit-message-here"
```
Now, you can push your changes to the branch you created
```
git push origin "your-branch-name"
```
# Submitting
Once you've committed and pushed all of your changes to GitHub, reload the page for your fork on GitHub, select your branch, and click the green compare and pull request button by the top right, add a description and the number for the issue your pull request and submit.

CONGRATULATIONS ON YOUR SUCCESSFUL CONTRIBUTION :ballons:

If you encounter any issues, feel free to contact us on our [discord channel](https://discord.com/invite/jZQs6Wu).

THANK YOU FOR CONTRIBUTING TO THE EDDIE JAOUDE COMMUNITY


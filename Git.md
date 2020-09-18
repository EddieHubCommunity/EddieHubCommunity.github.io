#### FEATURE BRANCHING

- small branches, isolated features
- the _initial_ commit can be on the _master branch_

  - `git init`
  - `git add .`
  - `git commit -m 'Initial commit'`
  - create repo on GitHub
  - `git remote add origin <url>`
  - `git remote -v` (not a step; to check)
  - `git push origin master` (**!!! ONCE**, it is allowed)

- create _development branch_

  - `git checkout -B development` (development is the name of the branch)
  - `git push origin development`
  - go to GitHub, to the repo, _Settings_, _Branches_, set `development` as default branch

- create a _feature branch_

  - `git checkout -B feat-add-image` (this is an example for the "add image" feature)
  - code your feature
  - stage & commit like usual
  - `git push origin feat-add-image` (or `ggpush`)

- on GitHub, I'm going to see the newly pushed branch
  - `Compare & pull request` button
  - write a description of what the feature does
  - `Create pull request` button
  - ((on `Pull requests` sector) `Add reviewers`)
  - `Merge pull request` button

##### IF I WANT TO CREATE A NEW FEATURE

- `git checkout development`

  - my feature is not there (the feature was merged on GitHub, not my local computer); everytime you merge something you go back to the _development branch_ and pull the latest commits
  - `git pull origin development`
  - now you can make the new branch `git checkout -B feat-add-color`
  - add feature
  - stage & commit like usual
  - `git push origin feat-add-color` (or `ggpush`)

- on GitHub, I'm going to see the newly pushed branch
  - `Compare & pull request` button
  - write a description of what the feature does
  - `Create pull request` button
  - (on `Pull requests` sector) `Add reviewers`
  - `Merge pull request` button

##### TO FINALLY MERGE EVERYTHING ON _MASTER BRANCH_

- go to GitHub, to the repo, _n branches_, _Pull requests_
  - `New pull request`
  - > `base: master` &#8592; `compare: development`
    > (there will be some changes)
  - `Create pull request` button
  - write description; `Create pull request` button
  - ((on `Pull requests` sector) `Add reviewers`)
  - `Merge pull request` button

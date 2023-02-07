### Final-Project

Members:
- Angela Kwon
- Xavier Valtierra
- Jack Jiang
- Zack Lay
- Justin Ozkan 
- Gabe Cohen
- Edward Olstrom


### TO START Part I

1.) `git clone <repo>` DO NOT FORK
2.) Run git branch -a to view remote branches(your name should not be here) and see which branch you are on. (There is a * next to the branch)
3.) Run git checkout -b <thenameofyourbranch> to make a remote branch.


### Part II
    AFTER CHANGES HAVE BEEN LOCALLY

- 1.) `git add .`
- 2.) `git commit -m 'a message that makes sense'`
- 3.) *** This is important ***  `git push origin <thenameofyourbranch>`
4.) Go onto github and create a pull request. Please add comments on what the code does /  updates you have made.


### Part III
    AFTER CHANGES HAVE BEEN MERGED WITH DEV BRANCH 

- 1.) Please DO NOT pull cahnges ONTO your old code i.e the branch you just pushed and that got merged.  
- 2.) PLEASE DO THE FOLLOWING: `git checkout -b <NEWthenameofyourNEWbranch> `

*** NOTE: Create a new branch your old branch is no longer needed and will create confilcts if you try to pull onto it ***

- 3.) Next, run: `git pull origin dev`  

- 4.) Your brnach should be up to date with the dev


- 5.) Start from PART II

*** Finally *** This is a life cycle ! it should feel like it has a flow.

Please see: https://www.tutorialspoint.com/sdlc/sdlc_overview.htm
# Wikileaks Block Collector
This is an attempt to collect raw block data in a single repository to make it easier to sort through for information related to Assange's rumoured disappearance. Git's excellent version control can help us crowdsource this tedious task with minimal effort.

## If you’re comfortable using Github and NodeJS:
1. Clone this repository.
`git clone https://github.com/maximilliangeorge/wikileaks-block-collector.git`

2. Create your own branch (to make verification easier)
`git checkout -B my-branch master`

2. Run the script. It will fetch raw block data and output to .json-files in `/output`. The blocks are selected at random, so that our efforts so that we don't have to go over the same blocks over and over again.
`node index.js`

3. When the script is finished, or when the API starts rejecting your requests, stop the script.
`ctrl + c`

4. Commit and push your changes.
`git commit -m 'I added so many blocks!'`

5. [Create a pull request!](https://github.com/maximilliangeorge/wikileaks-block-collector)

Duplicate data will be ignored in the pull, but are useful for verification. New data will be added to the master branch. By combining our efforts we will have all the block data ready and organised pretty quickly :)

## Non-techies can help too!
1. Look through the files! They can be found here. They mostly contain raw transaction data that looks illegible. They can also contain other data (unrelated to Wikileaks)
2. Share this repository with people who might want to help.

## Donations
Loose change accepted at: 1CFrhnfKFcAwcftnWg58siFMvFRUizhfZp

# Wikileaks Block Collector

[Context to be added, but if you’re here you probably already know the story…]

This is an attempt to collect all the raw block data* in a single repository to make it easier to sort through in an organised fashion. Even though Git offers some nice features that help us verify each others data, it is also a single point of failure. But it’s a starting point :)

* Between 2016-10-14 12:21:38 and 	2016-10-26 14:42:48

## If you’re comfortable using Github and NodeJS:
1. Clone this repository.
2. Create your own branch (to make verification easier)
2. Run the script. It will fetch raw block data and output to .txt-files in /output. The blocks are selected at random within the time-span.
3. When the script is finished, or when the API starts rejecting your requests, stop the script.
4. Commit and push your changes.
5. Create a pull request! Duplicate data will be ignored in the pull, but are useful for verification. New data will be added to the master branch. By combining our efforts we will have all the block data ready and organised pretty quickly :)

## If you’re more than comfortable with using Git and NodeJS
1. Fork this repository and create a script that checks against other block explorers. Or if you want to impress, against your own Bitcoin node! Due to the format of the returned data being different it might be best to keep the branches separate for now.
2. Develop tools for analysing the block data
3. I’m sure you have your own ideas :)

## Non-developers can help too!
1. Look through the files! They can be found here. They mostly contain raw transaction data that looks illegible. They can also contain other data (unrelated to Wikileaks)
2. Share this repository with people who might want to help.


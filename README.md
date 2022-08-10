# reddit

## To run app
1) `cd reddit && yarn`
2) `yarn start`
3) Open another terminal/cmd and run `yarn ios` or `yarn android`


### Note to reviewer
I was unable to use the reddit apis directly.
I used an api that keeps copies of their data, 
https://api.pushshift.io/reddit/search/submission/?subreddit=reactnative&sort=desc&sort_type=created_utc&size=1000

the api is unable to fetch or match comments correctly so i used dummy comments
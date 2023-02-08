
### Back-end:
Models:
- Post 
- User 
- Subreddit
- Comments

Post(BaseModel):
    title = CharField(max_length = 250)
    text = TextField()
    img_url = TextField()
    up_vote = IntField()
    down_vote = IntField()
    user_id = IntField()
    sub_reddit_id = IntField()
    *** maybe *** date = Datetime()
--- 
User(BaseModel):
    user_name = CharField(max_length = 20)
    sub_reddits = ArrayField()
    comments = ArrayField()
    profile_pic = TextField()
---
Subs(BaseModel):
    title = CharField(max_length = 20)
    followers = ArrayField()
    creator = CharField(max_length = 20)
    post_id = ArrayField()
    descript = TextField()
    *** maybe *** date = Datetime()
--- 

Comments(BaseModel):
    comment =  TextField()
    user_id = CharField(max_length = 20)
    post_id = CharField(max_length = 20)
    sub_id = CharField(max_length = 20)
    up_vote = IntField()
    down_vote = IntField()
    
# Front-end 

### Screens:
- Home (comments)
- Sign-up
- Subreddit

### Components:
- Nav Bar 
- Modal for login (on home page)
- Modal on subbreddit 
- Post (cards)

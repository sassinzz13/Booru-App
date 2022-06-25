const express = require("express");
const {Router} = express;
const router = new Router();

//use post for log ins



//API's

//e621
router.get("/api/booru/e621", async (req, res)=>{
    res.status(200).send({
        
  "e621.net": {
    "domain": "e621.net",
    "aliases": [
      "e6",
      "e621"
    ],
    "nsfw": true,
    "api": {
      "search": "/posts.json?",
      "postView": "/post/show/"
    },
    "random": true
  },
    })
})

//e926
router.get("/api/booru/e926", async (req, res)=>{
    res.status(200).send({
        
        "e926.net": {
            "domain": "e926.net",
            "aliases": [
              "e9",
              "e926"
            ],
            "nsfw": false,
            "api": {
              "search": "/posts.json?",
              "postView": "/post/show/"
            },
            "random": true,
            "defaultTags": ["rating:safe"]
  },
  
    })  
})

//hypnohub
router.get("/api/booru/hypnohub", async (req, res)=>{
    res.status(200).send({
        
        "hypnohub.net": {
            "domain": "hypnohub.net",
            "aliases": [
              "hh",
              "hypno",
              "hypnohub"
            ],
            "nsfw": true,
            "api": {
              "search": "/index.php?page=dapi&s=post&q=index&json=1&",
              "postView": "/post/show/"
            },
            "paginate": "pid",
            "random": true
  },
    })
})

//danbooru
router.get("/api/booru/danbooru", async (req, res)=>{
  res.status(200).send({
      
    "danbooru.donmai.us": {
      "domain": "danbooru.donmai.us",
      "aliases": [
        "db",
        "dan",
        "danbooru"
      ],
      "nsfw": true,
      "api": {
        "search": "/posts.json?",
        "postView": "/posts/"
      },
      "random": true
    },
  })
})

//konachan
router.get("/api/booru/konachan", async (req, res)=>{
  res.status(200).send({
      
    "konachan.com": {
      "domain": "konachan.com",
      "aliases": [
        "kc",
        "konac",
        "kcom"
      ],
      "nsfw": true,
      "api": {
        "search": "/post.json?",
        "postView": "/post/show/"
      },
      "random": true
    },
  })
})

//konachan.net
router.get("/api/booru/konachannet", async (req, res)=>{
  res.status(200).send({
      
    "konachan.net": {
      "domain": "konachan.net",
      "aliases": [
        "kn",
        "konan",
        "knet"
      ],
      "nsfw": false,
      "api": {
        "search": "/post.json?",
        "postView": "/post/show/"
      },
      "random": true
    },
  })
})

//yande
router.get("/api/booru/yande", async (req, res)=>{
  res.status(200).send({
      
    "yande.re": {
      "domain": "yande.re",
      "aliases": [
        "yd",
        "yand",
        "yandere"
      ],
      "nsfw": true,
      "api": {
        "search": "/post.json?",
        "postView": "/post/show/"
      },
      "random": true
    },
  })
})

//gelbooru
router.get("/api/booru/gelbooru", async (req, res)=>{
  res.status(200).send({
      
    "gelbooru.com": {
      "domain": "gelbooru.com",
      "aliases": [
        "gb",
        "gel",
        "gelbooru"
      ],
      "nsfw": true,
      "api": {
        "search": "/index.php?page=dapi&s=post&q=index&json=1&",
        "postView": "/index.php?page=post&s=view&json=1&id="
      },
      "paginate": "pid",
      "random": false
    },
  })
})

//rule34
router.get("/api/booru/rule34", async (req, res)=>{
  res.status(200).send({
      
    "rule34.xxx": {
      "domain": "api.rule34.xxx",
      "aliases": [
        "r34",
        "rule34"
      ],
      "nsfw": true,
      "api": {
        "search": "/index.php?page=dapi&s=post&q=index&json=1&",
        "postView": "/index.php?page=post&s=view&json=1&id="
      },
      "paginate": "pid",
      "random": false
    },
  })
})

//safebooru
router.get("/api/booru/safebooru", async (req, res)=>{
  res.status(200).send({
      
    "safebooru.org": {
      "domain": "safebooru.org",
      "aliases": [
        "sb",
        "safe",
        "safebooru"
      ],
      "nsfw": false,
      "api": {
        "search": "/index.php?page=dapi&s=post&q=index&json=1&",
        "postView": "/index.php?page=post&s=view&json=1&id="
      },
      "paginate": "pid",
      "random": false
    },
  })
})

//tbib
router.get("/api/booru/tbib", async (req, res)=>{
  res.status(200).send({
      
    "tbib.org": {
      "domain": "tbib.org",
      "aliases": [
        "tb",
        "tbib",
        "big"
      ],
      "nsfw": false,
      "api": {
        "search": "/index.php?page=dapi&s=post&q=index&json=1&",
        "postView": "/index.php?page=post&s=view&json=1&id="
      },
      "paginate": "pid",
      "random": false
},
  })
})

//xbooru
router.get("/api/booru/xbooru", async (req, res)=>{
  res.status(200).send({
      
    "xbooru.com": {
      "domain": "xbooru.com",
      "aliases": [
        "xb",
        "xbooru"
      ],
      "nsfw": true,
      "api": {
        "search": "/index.php?page=dapi&s=post&q=index&json=1&",
        "postView": "/index.php?page=post&s=view&json=1&id="
      },
      "paginate": "pid",
      "random": false
    },
  })
})

//derpibooru
router.get("/api/booru/derpibooru", async (req, res)=>{
  res.status(200).send({
      
    "derpibooru.org": {
      "domain": "derpibooru.org",
      "type": "derpi",
      "aliases": [
        "dp",
        "derp",
        "derpi",
        "derpibooru"
      ],
      "nsfw": true,
      "api": {
        "search": "/api/v1/json/search/images?",
        "postView": "/images/"
      },
      "tagQuery": "q",
      "tagJoin": ",",
      "random": "sf=random"
    },
  })
})

//realbooru
router.get("/api/booru/realbooru", async (req, res)=>{
  res.status(200).send({
      
    "realbooru.com": {
      "domain": "realbooru.com",
      "aliases": [
        "rb",
        "realbooru"
      ],
      "nsfw": true,
      "api": {
        "search": "/index.php?page=dapi&s=post&q=index&json=1&",
        "postView": "/index.php?page=post&s=view&id="
      },
      "paginate": "pid",
      "random": false
    }
  })
})

module.exports = router;

//-----------------------Uncessary Code for the project-----------------------------------
/*
router.route("/user").get((req, res)=>{
  res.json(user);
}).post((req, res)=>{
  const {user} = req.body;

  users.push({username: user.username, password: user.password});

  console.log(users)

  res.json({loggedIn: true, status: "congrats youre logged in"});
})


router.use(express.json());

const booru = [
  { id: 1, name: 'course1'}
]

router.use(express.json())

router.get("/api/realBooru", (req, res)=>{
  res.send(booru)
})

router.get("/api/realBooru/:id", (req, res)=>{
  const booruu = booru.find(c => c.id === parseInt(req.params.id));
  if (!booruu) res.status(404).send("broken")
  res.send(booruu);
});

/*
app.post("/api/realBooruu", (req, res)=>{
  const booruuuu = {
    id: booruuuu.lenght + 1,
    name: req.body.name
  };
  booruuu.push(booruuuu);
  res.send(booruuuu);
})
*/

/*
router.get("/", (req, res)=>{
  const user = req.query.user;

  res.send(user + "!")
})

const users = []


  
router.get("/users", (req, res)=>{
  res.json(users);
})

router.delete("/delete", (req, res)=>{
  const {username, password} = req.body;

  const existingUser = users.find(u=> u.username === username && upassword === password);
console.log(existingUser);
if(!existingUser)
{res.statusCode(401).json({errorStatus:"Did not match"});
}

users.splice(users.indexOf(existingUser), 1);
res.json(users);   
});
*/

/*
router.route("/user").get((req, res)=>{
  res.json(user);
}).post((req, res)=>{
  const {user} = req.body;

  users.push({username: user.username, password: user.password});

  console.log(users)

  res.json({loggedIn: true, status: "congrats youre logged in"});
})
*/
//----------------------------------------------------------------------------------------


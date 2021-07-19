console.log("sript loaded!")
var mObj= [
    {
        id: "1",
        fullName:"Rajsthan Royals",
        key: "RR",
        championshipWon: 3,
        topBatsman: "Sanju Samson",
        topBowler: "Chris Morris",
        teamIcon:"https://2.bp.blogspot.com/-f_MILAede9I/VSEGboPC9dI/AAAAAAAABDE/7BEtXfRJXlw/s1600/IPL-8-Rajasthan-Royals-Team-Logo-2015-Wallpapers-Images.jpg"
    },
    {
        id: "2",
        fullName:"Delhi Capitals",
        key: "DC",
        championshipWon: 8,
        topBatsman: "Shikhar Dhawan",
        topBowler: "Avesh Khan",
        teamIcon:"https://images.financialexpress.com/2019/03/z7QUNL8L_400x400.jpg"
    },
    {
        id: "3",
        fullName:"Kings XI Panjab",
        key: "KXIP",
        championshipWon: 5,
        topBatsman: "KL Rahul",
        topBowler: "Mohmammad Shami",
        teamIcon: "https://www.india.com/wp-content/uploads/2018/01/kings.jpg"
    },
    {
        id: "4",
        fullName:"Royal Challengers Banglore",
        key: "RCB",
        championshipWon: 4,
        topBatsman: "Virat Kohli",
        topBowler: "Harshal Patel",
        teamIcon:"https://wallpapercave.com/wp/wp7461576.jpg"
    },
    {
        id: "5",
        fullName:"Mumbai Indian",
        key: "MI",
        championshipWon: 8,
        topBatsman: "Rohit Sharma",
        topBowler: "Rahul Chahar",
        teamIcon:"http://wonderfulmumbai.com/wp-content/uploads/2013/03/Mumbai_Indians_IPL_2013.jpg"
    },
    {
        id: "6",
        fullName:"Kolkata Knight Riders",
        key: "KKR",
        championshipWon: 6,
        topBatsman: "Shubham Gill",
        topBowler: "Pat Cummins",
        teamIcon: "https://aniportalimages.s3.amazonaws.com/media/details/kkr_ipl_mar17.jpg"
    },
    {
        id: "7",
        fullName:"Sanrisers Hydrabad",
        key: "SRH",
        championshipWon: 8,
        topBatsman: "Jonny Bairstow",
        topBowler: "Rashid Khan",
        teamIcon: "https://i.pinimg.com/originals/b6/69/eb/b669eb2ad5127e5db76f00739a5ee293.jpg"
    },
    {
        id: "8",
        fullName:"Channai Super Kings",
        key: "CSK",
        championshipWon: 10,
        topBatsman: "Faf du Plessis",
        topBowler: "Dwayne Bravo",
        teamIcon: "https://files.oyebesmartest.com/uploads/preview/scrape-wp2496943cbaopiwf.jpeg"
    }
]

var players = [
    {
        "id":0,
        "playerName":"Hardik Pandya",
        "from":"MI",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"All-Rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/2740.png"
    },
    {
        "id":1,
        "playerName":"Virat Kohli",
        "from":"RCB",
        "price":"8.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/164.png"
    },
    {
        "id":2,
        "playerName":"Sachin Baby",
        "from":"RCB",
        "price":"3.50 Cr",
        "isPlaying":false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/1115.png"
    },
    {
        "id":3,
        "playerName":"Rohit Sharma",
        "from":"MI",
        "price":"12.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/107.png"
    },
    {
        "id":4,
        "playerName":"MS Dhoni",
        "from":"CSK",
        "price":"16.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/1.png"
    },
    {
        "id":5,
        "playerName":"Suresh Raina",
        "from":"CSK",
        "price":"8.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/14.png"
    },
    {
        "id":6,
        "playerName":"Chris Morris",
        "from":"RR",
        "price":"16.25 Cr",
        "isPlaying":true,
        "description":"All-Rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/836.png"
    },
    {
        "id":7,
        "playerName":"Glenn Maxwell",
        "from":"RCB",
        "price":"14.25 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/282.png"
    },
    {
        "id":8,
        "playerName":"Ishan Kishan",
        "from":"MI",
        "price":"2.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/2975.png"
    },
    {
        "id":9,
        "playerName":"Shikhar Dawan",
        "from":"DC",
        "price":"8.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/41.png"
    },
    {
        "id":10,
        "playerName":"Sam Curran",
        "from":"CSK",
        "price":"7.50 Cr",
        "isPlaying":true,
        "description":"All-Rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/2939.png"
    },
    {
        "id":11,
        "playerName":"KM Asif",
        "from":"CSK",
        "price":"8.20 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/4944.png"
    },
    {
        "id":12,
        "playerName":"Deepak Chahar",
        "from":"CSK",
        "price":"8.50 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/140.png"
    },
    {
        "id":13,
        "playerName":"Jasprit Bumrah",
        "from":"MI",
        "price":"10.00 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1124.png"
    },
    {
        "id":14,
        "playerName":"Rahul Chahar",
        "from":"MI",
        "price":"3.50 Cr",
        "isPlaying":false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/3763.png"
    },
    {
        "id":15,
        "playerName":"Dinesh Karthik",
        "from":"KKR",
        "price":"12.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/102.png"
    },
    {
        "id":16,
        "playerName":"Nitish Rana",
        "from":"KKR",
        "price":"10.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/2738.png"
    },
    {
        "id":17,
        "playerName":"Kuldeep Yadav",
        "from":"KKR",
        "price":"8.00 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/261.png"
    },
    {
        "id":18,
        "playerName":"Andre Russell",
        "from":"KKR",
        "price":"12.25 Cr",
        "isPlaying":true,
        "description":"All-Rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/177.png"
    },
    {
        "id":19,
        "playerName":"Shivam Mavi",
        "from":"KKR",
        "price":"2.25 Cr",
        "isPlaying":false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/3779.png"
    },
    {
        "id":20,
        "playerName":"Yuzendra Chahal",
        "from":"RCB",
        "price":"7.50 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/111.png"
    },
    {
        "id":21,
        "playerName":"Navdeep Saini",
        "from":"RCB",
        "price":"8.10 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/3824.png"
    },
    {
        "id":22,
        "playerName":"Rishabh Pant",
        "from":"DC",
        "price":"7.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/2972.png"
    },
    {
        "id":23,
        "playerName":"Ishant Sharma",
        "from":"DC",
        "price":"5.20 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/38.png"
    },
    {
        "id":24,
        "playerName":"Chirs Woakes",
        "from":"DC",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"All-Rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/967.png"
    },
    {
        "id":25,
        "playerName":"David Warner",
        "from":"SRH",
        "price":"11.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/170.png"
    },
    {
        "id":26,
        "playerName":"Manish Panday",
        "from":"SRH",
        "price":"8.50 Cr",
        "isPlaying":false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/123.png"
    },
    {
        "id":27,
        "playerName":"Sandeep Sharma",
        "from":"SRH",
        "price":"4.00 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1112.png"
    },
    {
        "id":28,
        "playerName":"Vijay Shankar",
        "from":"SRH",
        "price":"11.50 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/1083.png"
    },
    {
        "id":29,
        "playerName":"Siddarth kaul",
        "from":"SRH",
        "price":"8.00 Cr",
        "isPlaying":false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1086.png"
    },
    {
        "id":30,
        "playerName":"Jos Buttler",
        "from":"RR",
        "price":"11.25 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/509.png"
    },
    {
        "id":31,
        "playerName":"Ben Stokes",
        "from":"RR",
        "price":"14.25 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/1154.png"
    },
    {
        "id":32,
        "playerName":"Rahul Tewatia",
        "from":"RR",
        "price":"2.50 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1749.png"
    },
    {
        "id":33,
        "playerName":"KL Rahul",
        "from":"KXIP",
        "price":"15.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/1125.png"
    },
    {
        "id":34,
        "playerName":"Mayank Agarwal",
        "from":"KXIP",
        "price":"7.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/158.png"
    },
    {
        "id":35,
        "playerName":"Deepak Hooda",
        "from":"KXIP",
        "price":"8.20 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/1556.png"
    },
    {
        "id":37,
        "playerName":"Ravi Bishnoi",
        "from":"KXIP",
        "price":"8.20 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/19351.png"
    },
    {
        "id":38,
        "playerName":"AB de Villers",
        "from":"RCB",
        "price":"11 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/284/233.png"
    },
    {
        "id":39,
        "playerName":"Kane Richardarson",
        "from":"RCB",
        "price":"4 Cr",
        "isPlaying":false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/284/798.png"
    },
    {
        "id":40,
        "playerName":"Kyle Jamieson",
        "from":"RCB",
        "price":"15 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/1616.png"
    },
    {
        "id":41,
        "playerName":"Washington Sundar",
        "from":"RCB",
        "price":"3.2 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/2973.png"
    },
    {
        "id": 42,
        "playerName":"Harshal Patel",
        "from":"RCB",
        "price":"8.0 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/157.png"
    },
    {
        "id": 43,
        "playerName":"Devdutt Pedikkal",
        "from":"RCB",
        "price":"5.05 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/5430.png"
    },
    {
        "id": 44,
        "playerName":"Adam Zampa",
        "from":"RCB",
        "price":"5.0 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/958.png"
    },
    {
        "id": 45,
        "playerName":"Shahbaz Ahamad",
        "from":"RCB",
        "price":"2.0 Cr",
        "isPlaying": false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/13803.png"
    },
    {
        "id": 46,
        "playerName":"Daniel Christian",
        "from":"RCB",
        "price":"50.0 L",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/181.png"
    },
    {
        "id": 47,
        "playerName":"Daniel Sams",
        "from":"RCB",
        "price":"1.0 Cr",
        "isPlaying": false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/4649.png"
    },
    {
        "id": 48,
        "playerName":"Yashasvi Jasiwal",
        "from":"RR",
        "price":"3.45 Cr",
        "isPlaying": false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/13538.png"
    },
    {
        "id": 49,
        "playerName":"KC Cariappa",
        "from":"RR",
        "price":"1.25 Cr",
        "isPlaying": false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/2743.png"
    },
    {
        "id": 50,
        "playerName":"Mann Vahra",
        "from":"RR",
        "price":"5.2 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/1085.png"
    },
    {
        "id":51,
        "playerName":"Mustafizur Rahman",
        "from":"RR",
        "price":"7.2 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1594.png"
    },
    {
        "id":52,
        "playerName":"David Miller",
        "from":"RR",
        "price":"7.2 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/187.png"
    },
    {
        "id":53,
        "playerName":"Shivam Dube",
        "from":"RR",
        "price":"5.25 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/5431.png"
    },
    {
        "id":54,
        "playerName":"Riyan Parag",
        "from":"RR",
        "price":"4.0 Cr",
        "isPlaying": false,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/4445.png"
    },
    {
        "id":55,
        "playerName":"Jaydev Unadkat",
        "from":"RR",
        "price":"6.5 Cr",
        "isPlaying": true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/86.png"
    },
    {
        "id":56,
        "playerName":"Shreyas Gopal",
        "from":"RR",
        "price":"4.0 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/1748.png"
    },
    {
        "id":57,
        "playerName":"Andrew Tye",
        "from":"RR",
        "price":"5.0 Cr",
        "isPlaying": false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1480.png"
    },
    {
        "id":58,
        "playerName":"Sanju Samson",
        "from":"RR",
        "price":"8.2 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/258.png"
    },
    {
        "id":59,
        "playerName":"Tom Curran",
        "from":"DC",
        "price":"1.25 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/3646.png"
    },
    {
        "id":60,
        "playerName":"Umesh Yadav",
        "from":"Dc",
        "price":"2.0 Cr",
        "isPlaying": false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/59.png"
    },
    {
        "id":61,
        "playerName":"Prithvi Shaw",
        "from":"DC",
        "price":"6.4 Cr",
        "isPlaying": false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/3764.png"
    },
    {
        "id":62,
        "playerName":"Shimron Hetmyer",
        "from":"DC",
        "price":"6.0 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/1705.png"
    },
    {
        "id":63,
        "playerName":"Amit Mishra",
        "from":"DC",
        "price":"2.36 Cr",
        "isPlaying": false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/30.png"
    },
    {
        "id":64,
        "playerName":"Avesh Khan",
        "from":"DC",
        "price":"4.2 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1561.png"
    },
    {
        "id":65,
        "playerName":"Ajinkya Rahane",
        "from":"DC",
        "price":"5.0 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/135.png"
    },
    {
        "id":66,
        "playerName":"Steve Smith",
        "from":"DC",
        "price":"8.0 Cr",
        "isPlaying": false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/271.png"
    },
    {
        "id":67,
        "playerName":"Ravichandran Ashwin",
        "from":"DC",
        "price":"6.0 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/8.png"
    },
    {
        "id":68,
        "playerName":"Marcus Stoinis",
        "from":"DC",
        "price":"8.0 Cr",
        "isPlaying": true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/964.png"
    },
    {
        "id":69,
        "playerName":"Kagiso Rabada",
        "from":"DC",
        "price":"4.25 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1664.png"
    },
    {
        "id":70,
        "playerName":"Moises Henriques",
        "from":"KXIP",
        "price":"4.0 Cr",
        "isPlaying": false,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/388.png"
    },
    {
        "id":71,
        "playerName":"Riley Meredith",
        "from":"KXIP",
        "price":"4.25 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/4055.png"
    },
    {
        "id":72,
        "playerName":"Fabian Allen",
        "from":"KXIP",
        "price":"4.2 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1707.png"
    },
    {
        "id":73,
        "playerName":"Nicholas Pooran",
        "from":"KXIP",
        "price":"4.5 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/1703.png"
    },
    {
        "id":74,
        "playerName":"Chris Gayle",
        "from":"KXIP",
        "price":"8.2 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/236.png"
    },
    {
        "id":75,
        "playerName":"Sarfaraz khan",
        "from":"KXIP",
        "price":"2.5 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/1564.png"
    },
    {
        "id":76,
        "playerName":"Mohammad Shami",
        "from":"KXIP",
        "price":"9.0 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/94.png"
    },
    {
        "id":77,
        "playerName":"Arshdeep Singh",
        "from":"KXIP",
        "price":"2.0 Cr",
        "isPlaying": false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/4698.png"
    },
    {
        "id":78,
        "playerName":"Chirs Jordon",
        "from":"KXIP",
        "price":"5.0 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1299.png"
    },
    {
        "id":79,
        "playerName":"Mandeep Singh",
        "from":"KXIP",
        "price":"50.0 L",
        "isPlaying": false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/72.png"
    },
    {
        "id":80,
        "playerName":"Harpreet Brar",
        "from":"KXIP",
        "price":"1.65 Cr",
        "isPlaying": false,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/5441.png"
    },
    {
        "id":81,
        "playerName":"chris Lynn",
        "from":"MI",
        "price":"2.65 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/179.png"
    },
    {
        "id":82,
        "playerName":"Anukul Roy",
        "from":"MI",
        "price":"1.0 Cr",
        "isPlaying": false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/3774.png"
    },
    {
        "id":83,
        "playerName":"Krunal Pandya",
        "from":"MI",
        "price":"4.25 Cr",
        "isPlaying": true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/3183.png"
    },
    {
        "id":84,
        "playerName":"Suryakumar Yadav",
        "from":"MI",
        "price":"7.0 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/108.png"
    },
    {
        "id":85,
        "playerName":"Dhawal KulKarni",
        "from":"MI",
        "price":"5.0 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/101.png"
    },
    {
        "id":86,
        "playerName":"Kieron Pollard",
        "from":"MI",
        "price":"10.0 Cr",
        "isPlaying": true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/210.png"
    },
    {
        "id":87,
        "playerName":"Trent Boult",
        "from":"MI",
        "price":"3 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/969.png"
    },
    {
        "id":88,
        "playerName":"Piyush Chawla",
        "from":"MI",
        "price":"1.25 Cr",
        "isPlaying": false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/76.png"
    },
    {
        "id":89,
        "playerName":"Arjun Tendulkar",
        "from":"MI",
        "price":"2.0 Cr",
        "isPlaying": false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/10244.png"
    },
    {
        "id":90,
        "playerName":"Quinton de Kock",
        "from":"MI",
        "price":"5.25 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/834.png"
    },
    {
        "id":91,
        "playerName":"Tim Seifert",
        "from":"KKR",
        "price":"4.5 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/1619.png"
    },
    {
        "id":92,
        "playerName":"Gurkeerat Mann Singh",
        "from":"KKR",
        "price":"1.0 Cr",
        "isPlaying": false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/253.png"
    },
    {
        "id":93,
        "playerName":"Pawan Negi",
        "from":"KKR",
        "price":"2.2 Cr",
        "isPlaying": false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/53.png"
    },
    {
        "id":94,
        "playerName":"Karun Nair",
        "from":"KKR",
        "price":"1.25 Cr",
        "isPlaying": false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/276.png"
    },
    {
        "id":95,
        "playerName":"Ben Cutting",
        "from":"KKR",
        "price":"3.5 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/913.png"
    },
    {
        "id":96,
        "playerName":"Parsidh Krishna",
        "from":"KKR",
        "price":"2.5 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/5105.png"
    },
    {
        "id":97,
        "playerName":"Shubhan Gill",
        "from":"KKR",
        "price":"7.25 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/3761.png"
    },
    {
        "id":98,
        "playerName":"Pat Cummins",
        "from":"KKR",
        "price":"17.5 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/488.png"
    },
    {
        "id":99,
        "playerName":"Sunil Narine",
        "from":"KKR",
        "price":"7.0 Cr",
        "isPlaying": true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/203.png"
    },
    {
        "id":100,
        "playerName":"Eoin Morgan",
        "from":"KKR",
        "price":"5.0 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/197.png"
    },
    {
        "id":101,
        "playerName":"Jagadeesha Suchita",
        "from":"SRH",
        "price":"1.0 Cr",
        "isPlaying": false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/2741.png"
    },
    {
        "id":102,
        "playerName":"Priyam Garg",
        "from":"SRH",
        "price":"1.25 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/3775.png"
    },
    {
        "id":103,
        "playerName":"T Natarajan",
        "from":"SRH",
        "price":"2.5 Cr",
        "isPlaying": false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/3831.png"
    },
    {
        "id":104,
        "playerName":"Bhuvenshwar Kumar",
        "from":"SRH",
        "price":"6.0 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/116.png"
    },
    {
        "id":105,
        "playerName":"Mahammad Nabi",
        "from":"SRH",
        "price":"1.5 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/618.png"
    },
    {
        "id":106,
        "playerName":"Kedar Jadhav",
        "from":"SRH",
        "price":"2.0 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/297.png"
    },
    {
        "id":107,
        "playerName":"Wriddhiman Saha",
        "from":"SRH",
        "price":"4.0 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/16.png"
    },
    {
        "id":108,
        "playerName":"Khaleel Ahmed",
        "from":"SRH",
        "price":"3.0 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/2964.png"
    },
    {
        "id":109,
        "playerName":"Jonny Bairstow",
        "from":"SRH",
        "price":"8.25 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/506.png"
    },
    {
        "id":110,
        "playerName":"Rashid Khan",
        "from":"SRH",
        "price":"4.70 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/2885.png"
    },
    {
        "id":111,
        "playerName":"Robin Uthappa",
        "from":"CSK",
        "price":"1.25 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/127.png"
    },
    {
        "id":112,
        "playerName":"Karn Sharma",
        "from":"CSK",
        "price":"50.0 L",
        "isPlaying": false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1118.png"
    },{
        "id":113,
        "playerName":"Lungi Ngidi",
        "from":"CSK",
        "price":"3.2 Cr",
        "isPlaying": false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/3746.png"
    },
    {
        "id":114,
        "playerName":"Cheteswar Pujara",
        "from":"CSK",
        "price":"1.0 Cr",
        "isPlaying": false,
        "description":"batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/156.png"
    },
    {
        "id":115,
        "playerName":"Moolen Ali",
        "from":"CSK",
        "price":"2.0 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1735.png"
    },
    {
        "id":116,
        "playerName":"Dwayan Bravo",
        "from":"CSK",
        "price":"4.0 Cr",
        "isPlaying": true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/25.png"
    },
    {
        "id":117,
        "playerName":"Faf du Plessis",
        "from":"CSK",
        "price":"7.25 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/24.png"
    },
    {
        "id":118,
        "playerName":"Ravindra Jadeja",
        "from":"CSK",
        "price":"4.0 Cr",
        "isPlaying": true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/9.png"
    },
    {
        "id":119,
        "playerName":"Imran Tahir",
        "from":"CSK",
        "price":"1.0 Cr",
        "isPlaying": false,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/898.png"
    },
    {
        "id":120,
        "playerName":"Ambati Rayudu",
        "from":"CSK",
        "price":"5.0 Cr",
        "isPlaying": true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/100.png"
    }
    
]

localStorage.setItem("team",JSON.stringify(mObj));
localStorage.setItem("players",JSON.stringify(players))
var teamLogo = document.getElementsByClassName("team-logo")
var team = localStorage.getItem('team')==null?[]:JSON.parse(localStorage.getItem('team'))
var teamId = document.getElementsByClassName("team-id")
var player = localStorage.getItem('players')==null?[]:JSON.parse(localStorage.getItem('players'))

var input = document.getElementById('search-box')
function myFunc() {
    var filter = input.value.toUpperCase()
    switch(filter) {
        case 'RR' : 
            location.assign('./teamDetail.html?id=1');
            break;
        case 'DC' : 
            location.assign('./teamDetail.html?id=2');
            break;
        case 'KXIP' : 
            location.assign('./teamDetail.html?id=3');
            break;
        case 'RCB' : 
            location.assign('./teamDetail.html?id=4');
            break;
        case 'MI' : 
            location.assign('./teamDetail.html?id=5');
            break;
        case 'KKR' : 
            location.assign('./teamDetail.html?id=6');
            break;
        case 'SRH' : 
            location.assign('./teamDetail.html?id=7');
            break;
        case 'CSK' : 
            location.assign('./teamDetail.html?id=8');

    }
}

var addNewCard = document.getElementById('add-new-card')
addNewCard.addEventListener("click", function() {
    var card = window.prompt("Enter a card name like Team or player:")
    if(card == 'player') {
        var idPlayer = player.length
        console.log(idPlayer)
        var playerName = window.prompt("Enter a Player Name:")
        var playerTeam = window.prompt("Enter a Player Team Name: ")
        var playerprice = window.prompt("Enter a Player Price:")
        var playerStatus = window.prompt("Enter a Player Status:")
        var playerRole = window.prompt("Enter a Player Role:")
        var playerImgUrl = window.prompt("Enter a Player Image Url")
        players.push(
            {
                "id": idPlayer,
                "playerName": playerName,
                "from": playerTeam,
                "price": playerprice,
                "isPlaying": playerStatus,
                "description": playerRole,
                "playerPicUrl": playerImgUrl
            }
        )  
        localStorage.setItem("players",JSON.stringify(players))
    }
    if(card == 'team') {
        var idTeam = team.length
        var teamName = window.prompt("Enter a team Name:")
        var teamKey = window.prompt("Enter a team Key Name:")
        var matchWin = window.prompt("Enter a ChampionshipWon:")
        var teamTopBatsman = window.prompt("Enter a top Batsman of Team:")
        var teamTopBowler = window.prompt("Enter a Top Bowler Of Team:")
        var teamLogo = window.prompt("Enter a Team Logo Url:")
        mObj.push(
            {
                id: idTeam,
                fullName: teamName,
                key: teamKey,
                championshipWon: matchWin,
                topBatsman: teamTopBatsman,
                topBowler: teamTopBowler,
                teamIcon: teamLogo
            }
        )
        localStorage.setItem('team',JSON.stringify(mObj))
        var teamCard = document.createElement('div')
        teamCard.className("team-logo")
        var cardLink = document.createElement('a')
        cardLink.href = "./teamdetail.html?id="+idTeam
        var cardImage = document.createElement('img')
        cardImage.src= teamLogo
        cardLink.appendChild(cardImage)
        var cardName = document.createElement('h3')
        cardName.innerHTML= teamName
        cardLink.appendChild(cardName)
        teamCard.appendChild(cardLink)
        var teamWrap = document.getElementById('team-wrapper')
        teamWrap.appendChild(teamCard)
    }
})
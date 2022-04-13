const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log('+-+-+-+-+-+-+-+repo+-+-+-+-+-+-+-+')
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
    title: 'Issue title',
    repositoryNameAssociated: 'launchx-nodejs',
    status: 'OPEN',
    numberOfComments: 22,
    labels: [],
    author: 'Kaserola4',
    dateCreated: '04-13-2022',
    lastUpdated: '04-13-2022',
    getTitleAndAuthor: function () {
        return `Title: ${this.title}, Author: ${this.author}`
    },
    getGeneralInfo: function () {
        return `Issue created by ${this.author} with upload date: ${this.dateCreated}`
    }
}

console.log('+-+-+-+-+-+-+-+issue+-+-+-+-+-+-+-+')
console.log(issue.status)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

const pullRequest = {
    title: 'Title of this pull request',
    branchName: 'main',
    dateCreated: '04-13-2022',
    status: 'CLOSED',
    repositoryNameAssociated: 'launchx-nodejs',
    author: 'Kaserola4',
    getStatus: function () {
        return this.status
    },
    getTitleAndAuthor: function () {
        return `Pull request created by ${this.author} with title: ${this.title}`
    }
}

console.log('+-+-+-+-+-+-+-+pullRequest+-+-+-+-+-+-+-+')
console.log(`Branch name: ${pullRequest.branchName}`)
console.log(pullRequest.getTitleAndAuthor())
console.log(pullRequest.getStatus())

// Twitter, facebook & uber examples
// Twitter
const twUser = {
    name: 'daniel',
    username: 'Kaserola4',
    bio: 'lorem ipsum..',
    age: 404,
    getAge: function () {
        return this.age
    }
}

const twTrendingTopic = {
    title: 'Title of the trend',
    numberOfComments: 2332,
    dateCreated: '04-13-2022',
    likes: 343,
    getTopicTitle: function () {
        return this.title
    }
}

const twHashtag = {
    name: 'LaunchX',
    numberOfPosts: 65723,
    likes: 5434223,
    getNumberOfPosts: function () {
        return this.getNumberOfPosts
    }
}

// Facebook

const fbUser = {
    name: 'Daniel',
    email: 'kas4developer@gmail.com',
    username: 'Kaserola4',
    age: 404,
    numberOfPosts: 103,
    numberOfFriends: 243,
    privateAccount: false,
    authenticated: true,
    getGeneralInfo: function () {
        return `Name: ${this.name}, email: ${this.email}, age: ${this.age}`
    }
}

const fbPost = {
    title: 'Title',
    message: 'Hi there',
    img: null,
    reactions: [23, 43, 64, 54],
    numberOfcomments: 34,
    getReactions: function () {
        return this.reactions
    }
}

const fbBiography = {
    title: 'Just me',
    text: 'lorem ipsum..',
    getBio: function () {
        return `${title}: ${text}`
    }
}

// Uber

const uProfile = {
    name: 'Daniel',
    totalRides: 404,
    active: false,
    getName: function (){ 
        return this.name
    }
}

const uTravel = {
    destination: 'Uganda',
    travelTime: '24min',
    price: 23,
    getTravelInfo: function () {
        return `Travel destination: ${this.destination}, estimated time: ${this.travelTime}, price: ${this.price}`
    } 
}
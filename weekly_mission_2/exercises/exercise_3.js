// Convert all the objects from the first exercise to classes

// repo
class Repo {
    constructor(name, author, language) {
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = 100
        this.stars = 199
        this.forks = 299
        this.issuesOpened = 10
        this.issuesClosed = 10
    }
    getTotalIssues() {
        return this.issuesOpened + this.issuesClosed
    }
    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log('+-+-+-+-+-+-+-+repo+-+-+-+-+-+-+-+')
const repo = new Repo('Hola', 'kass', 'javascript')
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

class Issue {
    constructor(title, repositoryNameAssociated, status, author) {
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = 22
        this.labels = []
        this.author = author
        this.dateCreated = '04-13-2022'
        this.lastUpdated = '04-13-2022'
    }
    getTitleAndAuthor() {
        return `Title: ${this.title}, Author: ${this.author}`
    }
    getGeneralInfo() { 
        return `Issue created by ${this.author} with upload date: ${this.dateCreated}`
    }
}

console.log('+-+-+-+-+-+-+-+issue+-+-+-+-+-+-+-+')
const issue = new Issue('Title', 'repname', 'OPEN', 'kaserola4')
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

class PullRequest {
    constructor(title, branchName, status, author) {
        this.title = title
        this.branchName = branchName
        this.dateCreated = '04-13-2022'
        this.status = status
        this.respositoryNameAssociated = 'launchx-nodejs'
        this.author = author
    }
    getStatus() {
        return this.status
    }
    getTitleAndAuthor() {
        return `Pull request created by ${this.author} with title: ${this.title}`
    }
}

console.log('+-+-+-+-+-+-+-+pullRequest+-+-+-+-+-+-+-+')
const pullRequest = new PullRequest('Hi pr', 'main', 'CLOSED', 'KAS')
console.log(pullRequest.getTitleAndAuthor())
console.log(pullRequest.getStatus())

// Twitter, facebook & uber examples
// Twitter

class TwUser {
    constructor(name, username, bio, age) {
        this.name = name
        this.username = username
        this.bio = bio
        this.age = age        
    }
    getAge() {
        return this.age
    }
}

class TwTrendingTopic {
    constructor(title) {
        this.title = title
        this.numberOfComments = 2332
        this.dateCreated = '04-13-2022'
        this.likes = 343
    }
    getTopicTitle() {
        return this.title
    }
}

class TwHashtag {
    constructor(name){
        this.name = name
        this.numberOfPosts = 65723
        this.likes = 5434223
    }
    getNumberOfPosts() {
        return this.numberOfPosts
    }
}

// Facebook

class FbUser {
    constructor(name, email, username, age, privateAccount) {
        this.name = name
        this.email = email
        this.username = username
        this.age = age
        this.numberOfPosts = 103
        this.numberOfFriends = 243
        this.privateAccount = privateAccount
        this.authenticated = true
    }
    getGeneralInfo() {
        return `Name: ${this.name}, email: ${this.email}, age: ${this.age}`
    }
}

class FbPost {
    constructor(title, message, img) {
        this.title = title
        this.message = message
        this.img = img
        this.reactions = [23, 43, 64, 54]
        this.numberOfComments = 34
    }
    getReactions() {
        return this.reactions
    }
}

class FbBiography {
    constructor(title, text){
        this.title = title
        this.text = text
    }
    getBio() {
        return `${title}: ${text}`
    }
}

// Uber

class UProfile {
    constructor (name) {
        this.name = name
        this.totalRides = 404
        this.active = false
    }
    getName() {
        return this.name
    }
}

class UTravel {
    constructor(destination){
        this.destination = destination
        this.travelTime = '24min'
        this.price = 23
    }
    getTravelInfo() {
        return `Travel destination: ${this.destination}, estimated time: ${this.travelTime}, price: ${this.price}`
    }
}
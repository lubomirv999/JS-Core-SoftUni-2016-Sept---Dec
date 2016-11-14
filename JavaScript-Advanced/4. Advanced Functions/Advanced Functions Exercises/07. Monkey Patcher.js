function monkeyPatcher(input) {
    let that = this;
    
    let patcher = (function () {
        function upvote() { that.upvotes++; }

        function downvote() { that.downvotes++; }

        function fakeRecords(num) { return 0.25 * num; }

        function calculateRating() {
            let sumVotes = that.upvotes + that.downvotes; // sum all votes
            
            if (sumVotes >= 10) {
                if (that.upvotes / sumVotes > 0.66) { return 'hot'; } 
                else if (that.upvotes - that.downvotes >= 0 && that.upvotes > 100 || that.downvotes > 100) { return 'controversial'; } 
                else if (that.upvotes - that.downvotes < 0) { return 'unpopular'; }
            }
            return 'new';
        }

        function score() {
            let up = that.upvotes;
            let down = that.downvotes;

            let sumScore = that.upvotes - that.downvotes;
            
            if (that.upvotes + that.downvotes > 50) {
                let additionalVotes = fakeRecords(Math.max(that.upvotes, that.downvotes));
                up = Math.ceil(that.upvotes + additionalVotes);
                down = Math.ceil(that.downvotes + additionalVotes);
            }
            let rating = calculateRating();
            return [up, down, sumScore, rating];
        }
        return {upvote, downvote, score};
    })()
    return patcher[input]();
}


function example() {
    let obj = {id: '3', author: 'emil', content: 'wazaaaaa', upvotes: 100, downvotes: 100};
    votingSystem.call(obj, 'downvote');
    votingSystem.call(obj, 'upvote');
    console.log(votingSystem.call(obj, 'score'));
    for (let i = 0; i < 50; i++) {
        votingSystem.call(obj, 'downvote');
    }

    console.log(votingSystem.call(obj, 'score'));
}
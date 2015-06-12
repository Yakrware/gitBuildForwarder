var bitBucketPostParser = {
  parseGitPost: function(request, callback){
    var branches = [],
      commitInfo = request.body;
    console.log(commitInfo.push.changes[0]);
    for(var i = 0; i < commitInfo.push.changes.length; i++){
      // add branch if does not exist in array yet
      if(commitInfo.push.changes[i].type !== 'branch')
        continue;
      var branchToAdd = commitInfo.push.changes[i].name;
      if(branches.indexOf(branchToAdd) == -1)
        branches.push(branchToAdd);
    }
    var result = {
      repository : commitInfo.repository.name,
      branches : branches
    };
    console.log(result);
    callback(null, result);
  }
};

exports.bitBucket = bitBucketPostParser;

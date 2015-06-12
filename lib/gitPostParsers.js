var bitBucketPostParser = {
  parseGitPost: function(request, callback){
    var branches = [],
      commitInfo = request.body;
    for(var i = 0; i < commitInfo.push.changes.length; i++){
      // add branch if does not exist in array yet
      if(commitInfo.push.changes[i].new.type !== 'branch')
        continue;
      var branchToAdd = commitInfo.push.changes[i].new.name;
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

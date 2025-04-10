function solution(M, remote_tasks, office_tasks, employees) {
  var team = {};

  for (let i = 0; i < employees.length; i++) {
    var [teamNum, ...tasks] = employees[i].split(" ");
    if (!(teamNum in team)) {
      team[teamNum] = [];
    }
    team[teamNum].push([i, ...tasks]);
  }
  var remoteNum = [];
  for (let [_, team_members] of Object.entries(team)) {
    var hasOffice = false;
    for (var [memberIdx, ...tasks] of team_members) {
      var isOfficeMember = false;
      for (var task of tasks) {
        if (office_tasks.includes(task)) {
          hasOffice = true;
          isOfficeMember = true;
          break;
        }
      }
      if (!isOfficeMember) {
        remoteNum.push(memberIdx + 1);
      }
    }
    if (!hasOffice) {
      remoteNum.splice(remoteNum.indexOf(team_members[0][0] + 1), 1);
    }
  }
  return remoteNum;
}

console.log(
  solution(
    3,
    ["develoment", "marketing", "hometask"],
    ["recruitment", "education", "officetask"],
    [
      "1 develoment hometask",
      "1 recruitment marketing",
      "2 hometask",
      "2 develoment marketing hometask",
      "3 marketing",
      "3 officetask",
      "3 develoment",
    ]
  )
);




function superbowlWin(array) {
  let win = array.find(function(bowl) {return bowl.result === "W"})
  return win ? win.year : undefined
}



import moment from 'moment'


export const formatTime = time => {
  return moment(time).format('MMM Do, h:mm a')
}

export const renderReplyOrReplies = length => {
  if (length === 1) {
    return ' Reply'
  } else {
    return ' Replies'
  }
}

export const scrollToOrigPos = origPos => {
  // console.log('in scrollToOrig', window.scrollY)
  // const prevPos = window.scrollY
  window.scrollTo({
    top: origPos,
    behavior: 'smooth'
  })
}


export const scrollToElement = selector => {
  const element = document.querySelector(`${selector}`);
  const pos = element.getBoundingClientRect()
  window.scrollTo({
    top: pos.top,
    behavior: 'smooth'
  });
  // console.log('in scrollToElement',window.scrollY)
  // return window.scrollY
}


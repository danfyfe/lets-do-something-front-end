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
export const pricePerPerson = (total, users) => {
  return Math.round(total/users.length * 100) / 100
}

export const isAttendee = (currentUserId, users) => {
  return users.find( user => {
    return user.id === currentUserId
  })
}

export const totalPrice = eventCosts => {
  let total = 0

  for (var i = 0; i < eventCosts.length; i++) {
    total += eventCosts[i].price
  }
  return total
}
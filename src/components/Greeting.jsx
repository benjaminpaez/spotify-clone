import React from 'react';

export const Greeting = () => {
  const currentTime = new Date()
  const currentHour = currentTime.getHours()
  let greeting = ""

  if (currentHour < 12) {
    greeting = "Buenos dias"
  } else if (currentHour < 18) {
    greeting = "Buenas tardes"
  } else {
    greeting = "Buenas noches"
  }

  return (
    <h1 className="text-3xl font-bold">{greeting}</h1>
  )
}



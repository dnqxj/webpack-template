import React from "react"

export default function Instructions({ title, steps}) {
  return (
    <section>
      <h2>{title}</h2>
      {steps.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
    </section>
  )
}
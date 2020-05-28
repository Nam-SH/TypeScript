import React from 'react'
import { IUser } from './IUser'

const random = (max: number) => Math.floor(Math.random() * max)

export const Card: React.FC<{ user: IUser; click: () => void }> = ({ user, click }) => {
  const { name, email, sentence, profession, birthday } = user
  const b = new Date(birthday)
  const birth =
    b.getFullYear() +
    '/' +
    (b.getMonth() < 10 ? '0' + b.getMonth() : b.getMonth()) +
    '/' +
    (b.getDate() < 10 ? '0' + b.getDate() : b.getDate())
  const src = `https://source.unsplash.com/random/1000x${random(300) + 500}`

  return (
    <div className="card">
      <img src={src} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">
          {name} (<small>{profession}</small>)
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
        <h6 className="card-subtitle mb-2 text-muted">birthday: {birth}</h6>
        <p className="card-text">{sentence}</p>
      </div>
      <button onClick={click}>more data...</button>
    </div>
  )
}

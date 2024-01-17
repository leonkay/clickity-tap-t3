# Clickity-Tap-T3

This is a T3 app. See [T3 Readme](T3-README.md)

# Status

Project is WIP

# About

This is a test project to get familiar with Server Side Components and React.

The project itself aims to support multiple users joining a room and tapping the screen / button until a player wins.

Win conditions aren't defined yet, but as examples:

- Most Taps in a Minute
- Playing a Tap game similar to `Gitaroo Man`
- Tug of war game where there are teams

# Technology choices

## Database

The deployed to database is [Turso](https://turso.tech), a sqlite database.

Note due the transient nature of these rooms, something like Redis could be used so that room codes can expire.

### ORM

Uses [Drizzle ORM](https://orm.drizzle.team).

## React

- Uses App Router
- Uses NextJS server side components
- No Authentication model is built in, yet.

# Deployment

No Deployment model has been set up yet.

# Getting Started

1. Create an account on [Turso](https://turso.tech), and run through the steps to create a database and token.

2. Using the database url and token, create a copy of [.env.example](.env.example) and name it `.env.local` and populate it with the URL and token

3. run `npm install`, `npm run push:db` and `npm run dev`

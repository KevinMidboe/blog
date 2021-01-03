CREATE TABLE IF NOT EXISTS posts (
  id          serial PRIMARY KEY,
  title       text,
  created     timestamp DEFAULT CURRENT_TIMESTAMP,
  updated     timestamp DEFAULT CURRENT_TIMESTAMP,
  markdown    text
)

import jedi from './jedi.json'
import sith from './sith.json'

export const handler = (req, res) => {
  return {
    jedi,
    sith
  }
}

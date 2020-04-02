import * as path from 'path'
import { IFake, makeFakeData } from './makeFakeData'
import { mkdir, writeFile, appendFile } from '../fileApi'

export const writeCsvFormatFakeData = async (
  filename: string,
  numberOfItems: number
): Promise<string> => {
  const dirname = path.dirname(filename)
  await mkdir(dirname)

  for (let n of new Array(numberOfItems).keys()) {
    const fake: IFake = makeFakeData()
    if (n == 0) {
      const keys = Object.keys(fake).join(',')
      await writeFile(filename, keys)
    }
    const values = Object.values(fake).join(',')
    await appendFile(filename, '\n' + values)
  }
  return `write ${numberOfItems} items to ${filename} file`
}

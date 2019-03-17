import { getHTML, getTwitterFollowers, getInstagramFollowers } from './lib/scraper'

async function go () {
  const tPromise = getHTML('https://twitter.com/victortolbert')
  const iPromise = getHTML('https://instagram.com/victortolbert')
  const [instagramHTML, twitterHTML] = await Promise.all([iPromise, tPromise])

  const instagramCount = await getInstagramFollowers(instagramHTML)
  const twitterCount = await getTwitterFollowers(twitterHTML)

  console.log(`You have ${twitterCount} twitter followers and ${instagramCount} instagram followers`)
}

go()

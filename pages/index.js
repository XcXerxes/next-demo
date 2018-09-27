import Layout from '../comps/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const PostLink = props => (
  <li>
    <Link as={`p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = (props) => (
  <Layout>
    <p>My blog</p>
    {/* <ul>
      <PostLink id="hello-nextjs" title="hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
    </ul> */}
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`} >
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async () => {
  const result = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await result.json()
  console.log(`Show data fetch. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index

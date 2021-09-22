import Head from 'next/head';
const Heads = (props) => {
 return (
  <>
  <Head>
   <title>{props.title}</title>
  </Head>
  </>
 )
}

export default Heads
